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
// Any failure leaves the issue open and exits non-zero, because closing it
// would re-run a check that fails again. An outcome another run can clear (an
// outage, a push race) is left for .github/workflows/retry-stale-issues.yml to
// dispatch again later. An outcome a person has to deal with (items the checker
// rejected on every attempt, checker errors, the word cap, deletions, an invalid
// issue, an unexpected error) gets the `needs-attention` label, which the sweep
// skips and the orchestrator session watches; see attentionLabel() in
// scripts/lib/issue-pass.mjs. The word cap also gets the `over-cap` label,
// added first, so exercism/i18n can tell the source PR the translation is
// waiting for approval (overCapLabel()). A run that pushes or finds nothing to
// do removes both labels again. Every run that comments also writes
// state/runs/issue-<n>.outcome.json, which /fix-i18n-issue reads from the
// artifact.
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
import { attentionLabel, commitMessage, overCapLabel, issueNumber, issueOutcome, issueScope, issueStillOpen, issueUrl, itemsWritten, perLocaleCounts, readIssue, translateForIssue, untranslatedWords } from "./lib/issue-pass.mjs";

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

// What the run knows so far, for the outcome file that finish() writes.
const context = { issue: null, failures: [] };

/**
 * Add or remove one label. A failure here is printed and does not change the
 * outcome: the comment still says what happened.
 */
function label(name, action) {
  if (!action) return;
  const edited = gh(["issue", "edit", String(number), "--repo", config().github.i18n_repo, action === "add" ? "--add-label" : "--remove-label", name]);
  if (!edited.ok && action === "add") console.error(`error: could not label issue ${number} ${name}: ${edited.error}`);
}

/**
 * Written beside the run's other files and uploaded with them, so the
 * orchestrator's /fix-i18n-issue reads the failures from the artifact and never
 * from the issue. Paths are made relative to state/runs/, which is the root of
 * the artifact.
 */
function writeOutcome(reason, labelAction, url) {
  const runs = path.join(ROOT, "state", "runs");
  const { issue } = context;
  const failures = context.failures.map(({ repo, targetPath, rejected, ...rest }) => ({ ...rest, ...(rejected ? { rejected: path.relative(runs, rejected) } : {}) }));
  const outcome = { number, reason, label: labelAction, run: url, repo: issue?.repo ?? null, pr: issue?.pr ?? null, sha: issue?.sha ?? null, source: issue?.source ?? null, name: issue?.name ?? null, failures };
  fs.mkdirSync(runs, { recursive: true });
  fs.writeFileSync(path.join(runs, `issue-${number}.outcome.json`), `${JSON.stringify(outcome, null, 2)}\n`);
}

/** Say what happened, label or close the issue, and stop. */
function finish(reason, detail, facts = {}) {
  const outcome = issueOutcome(reason);
  const url = runUrl();
  const labelAction = attentionLabel(reason, { failures: context.failures, ...facts });
  // `over-cap` changes before `needs-attention`, because i18n's
  // rerun-source-check.yml reads it when `needs-attention` arrives.
  const labels = () => {
    label(config().github.over_cap_label, overCapLabel(reason));
    label(config().github.attention_label, labelAction);
  };
  const footer = [];
  if (outcome.exit !== 0) footer.push("", url ? `Run: ${url}. Its \`state/runs/\` is attached to it as an artifact.` : "No Actions run to point at.");
  if (labelAction === "add") footer.push("", `Labelled \`${config().github.attention_label}\`: this needs a person, so the retry sweep leaves it alone and the translation team deals with it.`);
  else if (outcome.exit !== 0) footer.push("", "This should clear on its own: the retry sweep runs the issue again later.");
  const body = [`**${outcome.headline}**`, "", detail, ...footer].join("\n");

  if (!outcome.quiet) writeOutcome(reason, labelAction, url);
  if (outcome.close) {
    labels();
    const closed = gh(["issue", "close", String(number), "--repo", config().github.i18n_repo, "--comment", body]);
    if (!closed.ok) {
      console.error(`error: could not close issue ${number}: ${closed.error}`);
      process.exit(1);
    }
  } else if (!outcome.quiet) {
    comment(body);
    labels();
  }
  console.log(`${reason}: ${outcome.headline}${labelAction ? ` (label: ${labelAction})` : ""}`);
  console.log(detail);
  process.exit(outcome.exit);
}

const lib = await i18n();

// ------------------------------------------------------------------- git ----

const I18N = path.resolve(lib.dir);

// The commits are the Exercism i18n app's bot user's, as the push is made with
// the app's token.
const { name: AUTHOR_NAME, email: AUTHOR_EMAIL } = config().github.commit_author;
const IDENT = ["-c", `user.name=${AUTHOR_NAME}`, "-c", `user.email=${AUTHOR_EMAIL}`];

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
  if (!issue.ok) finish("invalid", `${issueUrl(number)}: ${issue.reason}. Nothing was read from the issue beyond the repo, the PR number and the sha.`, { transient: Boolean(issue.transient) });
  context.issue = issue;

  const locales = lib.constants.PRODUCTION_LOCALES;
  console.log(`issue ${number}: ${issue.repo}#${issue.pr} at ${issue.sha}`);
  if (locales.length === 0) finish("no-production-locales", "The issue stays open: it is picked up again when a locale goes into production.");

  // The issue is the log of the run: this comment marks its start, and finish()
  // posts how it ended.
  const started = gh(["issue", "comment", String(number), "--repo", config().github.i18n_repo, "--body", "Starting translation now."]);
  if (!started.ok) console.error(`error: could not comment on issue ${number}: ${started.error}`);

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
  context.failures = failures;
  if (failures.length > 0) {
    const listed = failures.slice(0, 20).map((one) => `- \`${one.locale} ${one.type} ${one.source}\`${one.target ? ` -> \`${one.target}\`` : ""}: ${one.reason}`).join("\n");
    const more = failures.length > 20 ? `\n\n...and ${failures.length - 20} more, in \`issue-${number}.outcome.json\` in the run's artifact.` : "";
    const note = attentionLabel("failures", { failures }) === "add"
      ? "Each was retried and failed every time, so the translation team fixes them by hand. The last rejected answer for each file and the checker's errors are in the run's artifact (linked below), under `rejected/` and in `issue-" + number + ".outcome.json`. Once the fixed files are on `main`, the issue is run again for anything still missing, and closes."
      : "Each failed because DeepSeek could not be reached, so another run of this issue should translate them.";
    finish("failures", `${countsBlock}\n\n${failures.length} item(s) were left absent and are listed below. Nothing was pushed. ${note}\n\n${listed}${more}`);
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
  if (!pushed.ok) finish("push-failed", `The commit is made in the runner's checkout and lost with it, so run this issue again.\n\nLast error: \`${pushed.error.slice(0, 500)}\``, { error: pushed.error });

  const sha = git(["rev-parse", "HEAD"]).out.trim();
  finish("pushed", `${countsBlock}\n\nNo failures. ${costLine}\n\n\`${sha}\` on \`main\`, translating ${issue.repo}#${issue.pr} at \`${issue.sha}\`.`);
}

// A Failure marked `transient` (GitHub could not be reached, or the PR moved
// under the run) is left for the retry sweep. Anything else, a bug included,
// would fail the same way again, so it is labelled for a person.
main().catch((error) => {
  const detail = error instanceof Failure ? error.message : String(error.stack ?? error.message ?? error);
  finish("error", `\`\`\`\n${scrub(detail).slice(0, 3000)}\n\`\`\``, { transient: error instanceof Failure && error.transient === true });
});
