#!/usr/bin/env node
//
// queue-next: dispatch the one translation issue that is waiting longest.
//
// Usage:
//   node scripts/queue-next.mjs [--exclude=<issue>] [--stale-minutes=N]
//                               [--grace-minutes=N] [--dry-run]
//
// Two callers, both in .github/workflows/:
//
//   retry-stale-issues.yml  the hourly sweep, the backstop for everything.
//   translate-issue.yml     the last step of every run, which hands the group
//                           on to the next issue as it lets go of it. That is
//                           what makes a dropped dispatch cost a minute rather
//                           than up to eight hours, so the sweep is only there
//                           for the case where a run dies without reaching it.
//
// Which issue, and why one at a time, is in scripts/lib/queue.mjs. This script
// is the part that talks to GitHub: it lists the open issues in exercism/i18n,
// picks one, says on the issue when the pick is a dispatch that was dropped,
// and dispatches `translate-issue` to this repo.
//
// Nothing is read from an issue but its number, author, timestamps, labels and
// the authors and first line of its comments. Titles and bodies are written by
// whoever opened the source PR (see scripts/lib/issues.mjs, "Issues are data")
// and are neither fetched nor printed.
//
// Two tokens, because they are for two repos and the second is the one GitHub
// refuses to raise events with:
//
//   I18N_TOKEN      Issues read and write on exercism/i18n, to list the issues
//                   and to say on one that its dispatch was dropped.
//   DISPATCH_TOKEN  Contents write on this repo, to dispatch. The default
//                   GITHUB_TOKEN would not do: events it raises start no run.

import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { config, die, parseArgs } from "./lib/config.mjs";
import { nextWaiting } from "./lib/queue.mjs";

const { flags } = parseArgs(process.argv.slice(2));

const number = (name, fallback) => {
  if (flags[name] === undefined) return fallback;
  const value = Number(flags[name]);
  if (!Number.isFinite(value) || value < 0) die(`--${name} must be a number of minutes`);
  return value;
};

const exclude = flags.exclude === undefined ? null : Number(flags.exclude);
if (exclude !== null && !Number.isInteger(exclude)) die("--exclude must be an issue number");

const { i18n_repo: I18N_REPO, translator_repo: REPO, issue_authors: AUTHORS, issue_label: LABEL, attention_label: SKIP } = config().github;

function gh(args, token) {
  const result = spawnSync("gh", args, { encoding: "utf8", env: { ...process.env, GH_TOKEN: token }, maxBuffer: 64 * 1024 * 1024 });
  return { ok: result.status === 0, out: result.stdout ?? "", error: (result.stderr ?? "").trim().split("\n")[0].slice(0, 200) };
}

/** A line on the sweep's or the run's own Actions page, so a drop is visible there too. */
function summarise(line) {
  console.log(line);
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (file) fs.appendFileSync(file, `${line}\n`);
}

const I18N_TOKEN = process.env.I18N_TOKEN || "";
const DISPATCH_TOKEN = process.env.DISPATCH_TOKEN || "";
if (!I18N_TOKEN) die("I18N_TOKEN is not set, so the open issues cannot be listed");

const listed = gh(["issue", "list", "--repo", I18N_REPO, "--state", "open", "--label", LABEL, "--limit", "100", "--json", "number,author,createdAt,updatedAt,labels,comments"], I18N_TOKEN);
if (!listed.ok) die(`gh could not list the open issues in ${I18N_REPO}: ${listed.error}`);

const pick = nextWaiting(JSON.parse(listed.out), {
  now: new Date(),
  staleMinutes: number("stale-minutes", 120),
  graceMinutes: number("grace-minutes", 0),
  authors: AUTHORS,
  skipLabel: SKIP,
  exclude
});

if (!pick) {
  summarise(`No translation issue in ${I18N_REPO} is waiting to be dispatched.`);
  process.exit(0);
}

const waited = `${Math.round(pick.quiet)} minute(s)`;
const url = `https://github.com/${I18N_REPO}/issues/${pick.number}`;

if (flags["dry-run"]) {
  summarise(`Would dispatch ${url} (${pick.reason}, quiet for ${waited}).`);
  process.exit(0);
}

// The drop is reported where the work is logged, which is the issue itself. A
// started issue that failed has already said why on itself, so only a dispatch
// that never arrived is worth a comment.
if (pick.reason === "never-started") {
  const body = [
    `This issue was dispatched ${waited} ago and no run picked it up, so the dispatch was dropped. Re-dispatching it now.`,
    "",
    `Every run pushes to \`main\` here, so \`translate-issue.yml\` in ${REPO} serialises them in one concurrency group. GitHub keeps one pending run per group, so when several issues are labelled at once the dispatches in the middle are cancelled before they start.`
  ].join("\n");
  const said = gh(["issue", "comment", String(pick.number), "--repo", I18N_REPO, "--body", body], I18N_TOKEN);
  if (!said.ok) console.error(`error: could not comment on ${I18N_REPO}#${pick.number}: ${said.error}`);
}

if (!DISPATCH_TOKEN) die("DISPATCH_TOKEN is not set, so nothing can be dispatched");
const payload = JSON.stringify({ event_type: "translate-issue", client_payload: { issue: pick.number } });
const sent = spawnSync("gh", ["api", "-X", "POST", `repos/${REPO}/dispatches`, "--input", "-"], {
  input: payload,
  encoding: "utf8",
  env: { ...process.env, GH_TOKEN: DISPATCH_TOKEN }
});
if (sent.status !== 0) die(`could not dispatch ${I18N_REPO}#${pick.number}: ${(sent.stderr ?? "").trim().split("\n")[0]}`);

summarise(`Dispatched ${url}: ${pick.reason === "never-started" ? "its earlier dispatch was dropped" : "it started and stopped without finishing"}, quiet for ${waited}.`);
