#!/usr/bin/env node
//
// run-issue: work one queue issue from start to finish, unattended.
//
// Usage:
//   node scripts/run-issue.mjs <issue-number>
//
// Exit codes: 0 finished (translated and pushed, or nothing to do), 1 anything
// else, with the reason commented on the issue.
//
// .github/workflows/translate-issue.yml runs this, and it is the only place in
// this repo that commits and pushes. A PR in a source repo opens an issue in
// exercism/i18n, the issue dispatches the workflow, and this script goes from
// the issue number to a push on ../i18n `main` and a closed issue. Closing the
// issue re-runs the PR's completeness check. Nobody watches the output, so every
// outcome is reported in a comment on the issue.
//
// The pass itself is in scripts/lib/issue-pass.mjs, shared with
// scripts/work-issue.mjs, so an unattended run does exactly what the
// orchestrator does by hand. This script adds only the steps around it.
//
// ## What it does
//
//   verify     the issue, with scripts/lib/issues.mjs: author, label,
//              allowlisted repo, and a sha that belongs to that PR. Only the
//              repo, PR number and sha are taken from its title and body.
//   scope      fetch the PR into .source/ and derive from git what it changed
//   cap        a dry run gives the untranslated word count per locale; above
//              config.json's `issue_word_cap` this stops and waits for iHiD
//   translate  scripts/translate.mjs, for every locale in the i18n repo's
//              productionTargets, pinned to the PR's sha and that scope
//   check      the i18n repo's validate.mjs for each locale, then its
//              no-deletions.mjs over the commit
//   push       commit locales/ and index/ (the translation index the pass
//              updated) in ../i18n and push to main, rebasing and retrying a
//              non-fast-forward, then close the issue with the counts
//
// A closed issue is never worked. This is checked twice: before anything else,
// and again just before the commit. The queue closes an issue as "not planned"
// when `ready-to-translate` is removed from its PR, and a dispatch that was
// pending or running at that point would otherwise translate and push English
// that nobody has approved. In that case nothing is posted on the issue and the
// script exits 0.
//
// Any failure leaves the issue open and exits non-zero. Open issues are what the
// queue retries, and closing one would re-run a check that fails again.
// .github/workflows/retry-stale-issues.yml dispatches it again later, so a
// temporary outage recovers on its own.
//
// ## Git
//
// This script is the exception to "git belongs to the orchestrator" (see
// CLAUDE.md), because it is the automated path and no session is watching it.
// It runs git in two places only: the i18n checkout, and this repo's gitignored
// .source/ (through scripts/source-checkout.mjs). The push credential arrives as
// an environment variable, is not written to any file this repo keeps, and is
// removed from everything printed.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { Failure, ROOT, config, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { SOURCES } from "./lib/routes.mjs";
import { commitMessage, issueNumber, issueOutcome, issueScope, issueStillOpen, issueUrl, itemsWritten, perLocaleCounts, readIssue, translateForIssue, untranslatedWords } from "./lib/issue-pass.mjs";

const { positional } = parseArgs(process.argv.slice(2));
const number = issueNumber(positional[0]);
if (number === null) {
  console.error("error: usage: run-issue.mjs <issue-number>");
  process.exit(1);
}

const PUSH_TOKEN = process.env.EXERCISM_I18N_PUSH_TOKEN || "";
const scrub = (text) => (PUSH_TOKEN ? String(text ?? "").split(PUSH_TOKEN).join("***") : String(text ?? ""));

/** The Actions run this is, for a failure comment to point at. */
function runUrl() {
  const { GITHUB_SERVER_URL: server, GITHUB_REPOSITORY: repo, GITHUB_RUN_ID: id } = process.env;
  return server && repo && id ? `${server}/${repo}/actions/runs/${id}` : null;
}

function gh(args) {
  const result = spawnSync("gh", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return { ok: result.status === 0, out: result.stdout ?? "", error: scrub(result.stderr ?? "").trim().split("\n")[0] };
}

function comment(body) {
  const file = path.join(ROOT, "state", "runs", `issue-${number}.comment.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${body}\n`);
  const posted = gh(["issue", "comment", String(number), "--repo", config().github.i18n_repo, "--body-file", file]);
  if (!posted.ok) console.error(`error: could not comment on issue ${number}: ${posted.error}`);
  return posted.ok;
}

/** Say what happened, close the issue when the work is finished, and stop. */
function finish(reason, detail) {
  const outcome = issueOutcome(reason);
  const url = runUrl();
  const body = [`**${outcome.headline}**`, "", detail, ...(outcome.exit === 0 ? [] : ["", url ? `Run: ${url} (the run's \`state/runs/\` is attached to it as an artifact).` : "No Actions run to point at."])].join("\n");

  if (outcome.close) {
    const closed = gh(["issue", "close", String(number), "--repo", config().github.i18n_repo, "--comment", body]);
    if (!closed.ok) {
      console.error(`error: could not close issue ${number}: ${closed.error}`);
      process.exit(1);
    }
  } else if (!outcome.quiet) {
    comment(body);
  }
  console.log(`${reason}: ${outcome.headline}`);
  console.log(detail);
  process.exit(outcome.exit);
}

const lib = await i18n();

// ------------------------------------------------------------------- git ----

const I18N = path.resolve(lib.dir);

// The commits are iHiD's, as the issues opened by his PAT are.
const IDENT = ["-c", "user.name=iHiD", "-c", "user.email=jez.walker@gmail.com"];

/**
 * git, in the i18n checkout and nowhere else.
 *
 * Other checkouts are not this script's to change: source repos are read as
 * objects at a ref, and .source/ is managed by scripts/source-checkout.mjs.
 */
function git(args, { allowFail = false } = {}) {
  const result = spawnSync("git", args, { cwd: I18N, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (result.status !== 0 && !allowFail) throw new Failure(`git ${args.find((arg) => !arg.startsWith("-") && !arg.includes("="))} failed in ${I18N}: ${scrub(result.stderr).trim().split("\n").slice(-1)[0]}`);
  return { ok: result.status === 0, out: scrub(result.stdout), error: scrub(result.stderr).trim() };
}

function pushUrl() {
  if (!PUSH_TOKEN) throw new Failure("EXERCISM_I18N_PUSH_TOKEN is not set, so nothing can be pushed");
  return `https://x-access-token:${PUSH_TOKEN}@github.com/${config().github.i18n_repo}.git`;
}

/** Rebase onto main and push, retrying a non-fast-forward. */
function pushToMain() {
  const remote = pushUrl();
  let last = "";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const pulled = git([...IDENT, "pull", "--rebase", remote, "main"], { allowFail: true });
    if (!pulled.ok) {
      last = pulled.error;
      git(["rebase", "--abort"], { allowFail: true });
      continue;
    }
    const pushed = git(["push", remote, "HEAD:main"], { allowFail: true });
    if (pushed.ok) return { ok: true, attempts: attempt };
    last = pushed.error;
  }
  return { ok: false, error: last };
}

// ------------------------------------------------------------------ main ----

async function main() {
  const issue = readIssue(number);
  if (issue.closed) finish("closed", `${issueUrl(number)} was closed before this run started.`);
  if (!issue.ok) finish("invalid", `${issueUrl(number)}: ${issue.reason}. Nothing was read from the issue beyond the repo, the PR number and the sha.`);

  const locales = lib.constants.PRODUCTION_LOCALES;
  console.log(`issue ${number}: ${issue.repo}#${issue.pr} at ${issue.sha}`);
  if (locales.length === 0) finish("no-production-locales", "The issue stays open: it is picked up again when a locale goes into production.");

  const scope = await issueScope(lib, issue);
  const translate = (extra) => translateForIssue({ issue, locales, repo: scope.repo, scopeFile: scope.scopeFile, extra });

  const dry = translate(["--dry-run"]);
  if (!dry.summary) throw new Failure(`the dry run failed:\n${dry.stdout}`);
  const words = untranslatedWords(dry.summary);
  const cap = config().issue_word_cap;
  console.log(`scope: ${scope.paths.length} changed file(s), ${scope.units.length} changed catalog unit(s); ${words} untranslated word(s) per locale at most; cap ${cap}; locales ${locales.join(", ")}`);

  if (words === 0) finish("nothing-to-do", `${locales.join(", ")} already hold every item this PR changed.`);
  if (words > cap) finish("over-cap", `${words} untranslated word(s) per locale, against a cap of ${cap}. Run \`node scripts/work-issue.mjs ${number} --approved-over-cap\` to let it through.`);

  const real = translate([]);
  // No summary means the run stopped before writing one, so it is unknown what it
  // did. Treat that as a failure, never as "nothing to do".
  if (!real.summary) throw new Failure(`the run wrote no summary:\n${real.stdout.slice(-3000)}`);
  const counts = perLocaleCounts(real.summary);
  const written = itemsWritten(real.summary);
  const table = Object.entries(counts).map(([locale, row]) => `| ${locale} | ${row.written} | ${row.copied} | ${row.failed} |`).join("\n");
  const countsBlock = `| Locale | Translated | Copied | Failed |\n|---|---|---|---|\n${table}`;
  const cost = real.summary?.usage?.cost;
  const costLine = typeof cost === "number" ? `Cost: $${cost.toFixed(4)}.` : "Cost: not reported.";

  const failures = real.summary?.failures ?? [];
  if (failures.length > 0) {
    const listed = failures.slice(0, 20).map((one) => `- \`${one.locale} ${one.type} ${one.source}\`: ${one.reason}`).join("\n");
    finish("failures", `${countsBlock}\n\n${failures.length} item(s) were left absent and are listed below. Each was already retried, so the fix is another run of this issue, not a hand translation.\n\n${listed}`);
  }

  // Runs the i18n repo's CI checker per locale against the English this run
  // translated. scripts/translate.mjs has already checked what it wrote and
  // stamped; this checks the whole locale, because what is pushed to main has to
  // pass there too.
  const kind = SOURCES[issue.source].kind;
  const errors = [];
  for (const locale of locales) {
    const args = [path.join(lib.dir, "scripts", "validate.mjs"), locale];
    args.push(...(issue.source === "website" ? [`--source-repo=${scope.repo}`, `--source-ref=${issue.sha}`] : [`--content-repos=${scope.repo}:${kind}@${issue.sha}`]));
    const result = spawnSync("node", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    fs.writeFileSync(path.join(ROOT, "state", "runs", `issue-${number}.${locale}.validate.log`), `${result.stdout}\n${result.stderr}`);
    for (const line of (result.stdout.match(/^\s+ERROR .*$/gm) ?? [])) errors.push(`${locale}: ${line.trim()}`);
  }
  if (errors.length > 0 || real.summary?.checker?.some((one) => one.exit !== 0)) {
    finish("validate-errors", `${countsBlock}\n\n${errors.length} error line(s) from \`validate.mjs\`:\n\n${errors.slice(0, 20).map((line) => `- \`${line}\``).join("\n")}`);
  }

  // The label can be removed from the source PR while this runs, which closes the
  // issue as not planned. The English is then no longer final, so nothing is
  // committed.
  if (issueStillOpen(number) === false) finish("closed", `${issueUrl(number)} was closed while this run translated; nothing was committed or pushed.`);

  // The translation index is updated by the pass and lands in the same commit.
  const index = spawnSync("node", [path.join(lib.dir, "scripts", "build-index.mjs"), "all", "--check"], { encoding: "utf8", env: process.env });
  if (index.status !== 0) finish("validate-errors", `${countsBlock}\n\n\`build-index.mjs --check\` failed:\n\n\`\`\`\n${index.stdout.trim().slice(0, 3000)}\n\`\`\``);
  git(["add", "--", "locales", ...(fs.existsSync(path.join(I18N, "index")) ? ["index"] : [])]);
  if (git(["diff", "--cached", "--quiet"], { allowFail: true }).ok) finish("nothing-to-do", `${locales.join(", ")} already held every item this PR changed; nothing was left to commit.`);

  const message = path.join(ROOT, "state", "runs", `issue-${number}.commit.txt`);
  fs.writeFileSync(message, commitMessage(issue, written));
  git([...IDENT, "commit", "--file", message]);

  const deletions = spawnSync("node", [path.join(lib.dir, "scripts", "no-deletions.mjs"), "--base=origin/main", "--head=HEAD"], { cwd: I18N, encoding: "utf8" });
  console.log(deletions.stdout);
  if (deletions.status !== 0) finish("deletions", `\`\`\`\n${scrub(`${deletions.stdout}\n${deletions.stderr}`).trim().slice(0, 3000)}\n\`\`\``);

  const pushed = pushToMain();
  if (!pushed.ok) finish("push-failed", `The commit is made in the runner's checkout and lost with it, so run this issue again.\n\nLast error: \`${pushed.error.slice(0, 500)}\``);

  const sha = git(["rev-parse", "HEAD"]).out.trim();
  finish("pushed", `${countsBlock}\n\nNo failures. ${costLine}\n\n\`${sha}\` on \`main\`, translating ${issue.repo}#${issue.pr} at \`${issue.sha}\`.`);
}

main().catch((error) => {
  const detail = error instanceof Failure ? error.message : String(error.stack ?? error.message ?? error);
  finish("error", `\`\`\`\n${scrub(detail).slice(0, 3000)}\n\`\`\``);
});
