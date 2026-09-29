#!/usr/bin/env node
//
// catch-up: translate everything still untranslated on every active source
// repo's `main`, for every production locale, and push it. Unattended.
//
// Usage:
//   node scripts/catch-up.mjs --tracks=<file> [--repos=<a,b>] [--sweep=<dir>] [--dry-run]
//
// Examples:
//   node scripts/catch-up.mjs --tracks=tracks.json
//   node scripts/catch-up.mjs --repos=exercism/cpp --dry-run
//
// Exit codes: 0 when every repo it found was caught up, or has an issue saying
// why not; 1 when the sweep could not read every repo, or an issue could not be
// written, which makes the hourly run red so that GitHub mails the repo's
// admins.
//
// .github/workflows/catch-up.yml runs this every hour. The per-PR queue
// (scripts/run-issue.mjs) translates English as it is written, and this is the
// catch-all behind it: English that reached `main` another way (an admin merge,
// a locale added after a PR's check ran, a queue run that failed) is found and
// translated here within the hour, with nobody watching.
//
// ## What it does
//
//   find       the i18n repo's scripts/sweep.mjs, which runs its
//              completeness.mjs against every repo's `main` (the same question
//              the PR check and the daily sweep issue ask). Inactive tracks are
//              skipped: nobody can reach their pages.
//   per repo   with anything outstanding, one at a time:
//     fetch      scripts/source-checkout.mjs, pinned to that repo's main sha
//     cap        a dry run gives the untranslated word count per locale; above
//                config.json's `issue_word_cap` the repo is left for iHiD
//     translate  scripts/translate.mjs for the locales with gaps. It only ever
//                writes what is absent, so it never overwrites a correction
//     check      the i18n repo's validate.mjs for each locale it wrote to, then
//                build-index.mjs --check and no-deletions.mjs over the commit
//     push       one commit per repo to i18n `main`, rebasing and retrying a
//                non-fast-forward
//
// A repo whose check fails has its files discarded; the others still land.
// Items that fail to translate are left absent, while what did translate is
// pushed.
//
// ## When a repo needs a person
//
// A repo that ends in something another run would repeat (items the checker
// rejected on every attempt, checker errors, the word cap, an unexpected error)
// gets one issue in exercism/i18n, titled `Catch up exercism/<name>` and
// labelled `catch-up` and `needs-attention` (plus `over-cap` for the cap). The
// orchestrator's scripts/needs-attention-monitor reports it, and
// /fix-i18n-issue fixes it, the same way as a queue issue. The run's outcome
// for the repo is written to state/runs/catch-up.<name>.outcome.json, in the
// shape run-issue.mjs writes, and uploaded with the run.
//
// While that issue is labelled, the repo is skipped, so nothing is paid for
// again until a person has acted. /fix-i18n-issue removes the label and runs
// this again for the repo. A run that then catches it up closes the issue; one
// that fails again labels it again, with the new run in its body.
//
// Something another run can clear (DeepSeek or GitHub unreachable, a push
// race) opens no issue, and the next hour tries again.
//
// ## Git
//
// Like scripts/run-issue.mjs, this is an exception to "git belongs to the
// orchestrator" (CLAUDE.md), because it is an automated path. It runs git only
// in the i18n checkout, through scripts/lib/i18n-push.mjs, and in .source/,
// through scripts/source-checkout.mjs.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { Failure, ROOT, config, die, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { i18nGit, runUrl, scrub, websiteEnglish } from "./lib/i18n-push.mjs";
import { attentionLabel, itemsWritten, pendingWrites, perLocaleCounts, untranslatedWords } from "./lib/issue-pass.mjs";
import { catchUpRepo, catchUpTitle } from "./lib/issues.mjs";
import { SOURCES } from "./lib/routes.mjs";

const { flags } = parseArgs(process.argv.slice(2));
const DRY_RUN = flags["dry-run"] === true;
const RUNS = path.join(ROOT, "state", "runs");
fs.mkdirSync(RUNS, { recursive: true });

const lib = await i18n();
const i18nRepo = i18nGit(lib);

function node(args, options = {}) {
  return spawnSync(process.execPath, args, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024, ...options });
}

function gh(args) {
  const result = spawnSync("gh", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return { ok: result.status === 0, out: result.stdout ?? "", error: scrub(result.stderr ?? "").trim().split("\n")[0] };
}

const GITHUB = config().github;

/**
 * The open catch-up issues, by repo. Only issues the Exercism i18n app opened
 * count, and only their number, labels and title are read: the title is
 * matched by the strict pattern in scripts/lib/issues.mjs.
 */
function openIssues() {
  if (DRY_RUN) return new Map();
  const listed = gh(["issue", "list", "--repo", GITHUB.i18n_repo, "--state", "open", "--label", GITHUB.catch_up_label, "--limit", "200", "--json", "number,author,labels,title"]);
  if (!listed.ok) throw new Failure(`could not list the open catch-up issues: ${listed.error}`);
  const issues = new Map();
  for (const issue of JSON.parse(listed.out)) {
    const repo = GITHUB.issue_authors.includes(issue.author?.login) ? catchUpRepo(issue.title) : null;
    if (repo) issues.set(repo, { number: issue.number, attention: issue.labels.some((one) => one.name === GITHUB.attention_label) });
  }
  return issues;
}

/**
 * Write the outcome file, then open the repo's issue or update the one that is
 * open, and label it. Returns the issue number, or null when GitHub refused.
 */
function raiseIssue(row, issue) {
  const name = row.repo.split("/").pop();
  const outcome = {
    reason: row.reason,
    label: "add",
    run: runUrl(),
    runId: process.env.GITHUB_RUN_ID ?? null,
    repo: row.repo,
    sha: row.sha ?? null,
    source: row.source ?? null,
    name,
    failures: (row.failures ?? []).map(({ repo, targetPath, rejected, ...rest }) => ({ ...rest, ...(rejected ? { rejected: path.relative(RUNS, rejected) } : {}) }))
  };
  fs.writeFileSync(path.join(RUNS, `catch-up.${name}.outcome.json`), `${JSON.stringify(outcome, null, 2)}\n`);

  const body = [
    `The hourly catch-up could not finish \`${row.repo}\` \`main\`, and skips it while this issue is labelled \`${GITHUB.attention_label}\`.`,
    "",
    "| | |",
    "|---|---|",
    `| Repo | ${row.repo} |`,
    `| Run | ${process.env.GITHUB_RUN_ID ?? "none"} |`,
    `| Outcome | ${row.reason} |`,
    "",
    String(row.detail).replaceAll("\n", " "),
    "",
    `The run's \`state/runs/\` is attached to it as an artifact, with this repo's outcome in \`catch-up.${name}.outcome.json\`. The orchestrator fixes it with \`/fix-i18n-issue\`.`
  ].join("\n");
  const file = path.join(RUNS, `catch-up.${name}.issue.md`);
  fs.writeFileSync(file, `${body}\n`);

  const labels = [GITHUB.catch_up_label, GITHUB.attention_label, ...(row.reason === "over-cap" ? [GITHUB.over_cap_label] : [])];
  let number = issue?.number ?? null;
  if (number) {
    const edited = gh(["issue", "edit", String(number), "--repo", GITHUB.i18n_repo, "--body-file", file, ...labels.flatMap((one) => ["--add-label", one])]);
    if (!edited.ok) return null;
  } else {
    const created = gh(["issue", "create", "--repo", GITHUB.i18n_repo, "--title", catchUpTitle(row.repo), "--body-file", file, ...labels.flatMap((one) => ["--label", one])]);
    if (!created.ok) return null;
    number = Number(/\/issues\/(\d+)/.exec(created.out)?.[1]) || null;
  }
  return number;
}

/** Close a repo's issue once a run has caught the repo up. */
function closeIssue(row, issue) {
  const detail = row.outcome === "pushed" ? `Caught up: ${row.detail}.` : "Nothing is left to translate.";
  gh(["issue", "edit", String(issue.number), "--repo", GITHUB.i18n_repo, "--remove-label", GITHUB.attention_label, "--remove-label", GITHUB.over_cap_label]);
  return gh(["issue", "close", String(issue.number), "--repo", GITHUB.i18n_repo, "--comment", `${detail}${runUrl() ? ` Run: ${runUrl()}` : ""}`]).ok;
}

/**
 * Every swept repo, from the i18n repo's sweep.mjs, run here or read from a
 * directory an earlier run wrote (`--sweep`).
 */
function sweep() {
  let dir = typeof flags.sweep === "string" ? path.resolve(flags.sweep) : null;
  let incomplete = [];
  if (!dir) {
    dir = path.join(RUNS, "catch-up-sweep");
    fs.rmSync(dir, { recursive: true, force: true });
    const args = [path.join(lib.dir, "scripts", "sweep.mjs"), `--out=${dir}`];
    if (typeof flags.tracks === "string") args.push(`--tracks=${path.resolve(flags.tracks)}`);
    if (typeof flags.repos === "string") args.push(`--repos=${flags.repos}`);
    const result = node(args, { cwd: path.resolve(lib.dir), stdio: ["ignore", "pipe", "inherit"] });
    fs.writeFileSync(path.join(RUNS, "catch-up-sweep.log"), result.stdout);
    if (!fs.existsSync(dir)) throw new Failure(`the sweep wrote nothing:\n${result.stdout.slice(-3000)}`);
  }
  const reports = fs.readdirSync(dir).filter((file) => file.endsWith(".json")).map((file) => JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")));
  incomplete = reports.flatMap((report) => report.failures ?? []);
  return { entries: reports.flatMap((report) => report.entries), incomplete };
}

/** How scripts/translate.mjs names this repo: its source id, and the track name when there is one. */
function sourceOf(entry) {
  const name = entry.repo.split("/").pop();
  if (entry.kind === "track") return { source: "track", name, positional: ["track", name] };
  if (!SOURCES[entry.kind]) throw new Failure(`${entry.repo} is of kind "${entry.kind}", which no translation route covers`);
  return { source: entry.kind, name, positional: [entry.kind] };
}

function translate({ positional, locales, repo, sha, extra = [] }) {
  const args = [path.join(ROOT, "scripts", "translate.mjs"), ...positional, locales.join(","), `--repo=${repo}`, `--ref=${sha}`, ...extra];
  const result = node(args, { stdio: ["ignore", "pipe", "inherit"] });
  const file = /full summary: (\S+)/.exec(result.stdout)?.[1];
  if (!file) throw new Failure(`translate.mjs wrote no summary:\n${result.stdout.slice(-3000)}`);
  return JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
}

/** validate.mjs error lines for the locales written, against the English at `sha`. */
function validate({ source, repo, sha, locales }) {
  const args = source === "website"
    ? [`--source-repo=${repo}`, `--source-ref=${sha}`]
    : [`--content-repos=${repo}:${SOURCES[source].kind}@${sha}`, `--source-repo=${websiteEnglish(lib)}`];
  const errors = [];
  for (const locale of locales) {
    const result = node([path.join(lib.dir, "scripts", "validate.mjs"), locale, ...args]);
    fs.writeFileSync(path.join(RUNS, `catch-up.${path.basename(repo)}.${locale}.validate.log`), `${result.stdout}\n${result.stderr}`);
    for (const line of result.stdout.match(/^\s+ERROR .*$/gm) ?? []) errors.push(`${locale}: ${line.trim()}`);
    if (result.status !== 0 && !/ERROR/.test(result.stdout)) errors.push(`${locale}: validate.mjs exited ${result.status}: ${result.stderr.trim().split("\n").pop()}`);
  }
  return errors;
}

/** Catch one repo up. Returns what happened, for the report. */
function catchUp(entry) {
  const { source, name, positional } = sourceOf(entry);
  const gaps = Object.entries(entry.locales).filter(([, row]) => row.outstanding > 0).map(([locale]) => locale);
  const row = { repo: entry.repo, locales: gaps, source };

  const fetched = node([path.join(ROOT, "scripts", "source-checkout.mjs"), name]);
  if (fetched.status !== 0) return { ...row, outcome: "error", transient: true, detail: `could not fetch: ${fetched.stderr.trim().split("\n").pop()}` };
  const repo = path.join(ROOT, ".source", name);
  const sha = lib.git.git(["rev-parse", lib.sourceRepos.defaultRef(repo)], repo).trim();
  row.sha = sha;

  const dry = translate({ positional, locales: gaps, repo, sha, extra: ["--dry-run"] });
  const words = untranslatedWords(dry);
  const cap = config().issue_word_cap;
  if (pendingWrites(dry) === 0) return { ...row, outcome: "nothing", detail: "the sweep counted gaps that translate.mjs has nothing to write for" };
  if (words > cap) return { ...row, outcome: "over-cap", detail: `${words} untranslated word(s) in one locale, against a cap of ${cap}` };
  if (DRY_RUN) return { ...row, outcome: "dry-run", detail: `${pendingWrites(dry)} item(s) to write, ${words} word(s) per locale at most` };

  const real = translate({ positional, locales: gaps, repo, sha });
  const counts = perLocaleCounts(real);
  const failures = real.failures ?? [];
  row.failures = failures;
  const written = itemsWritten(real);
  const touched = Object.entries(counts).filter(([, one]) => one.written + one.copied > 0).map(([locale]) => locale);
  const failed = failures.length > 0 ? `; ${failures.length} item(s) failed and are left for the next run: ${failures.slice(0, 5).map((one) => `${one.locale} ${one.source}`).join(", ")}${failures.length > 5 ? ", ..." : ""}` : "";
  if (written === 0) return { ...row, outcome: failures.length > 0 ? "failures" : "nothing", detail: `nothing was written${failed}` };

  const errors = validate({ source, repo, sha, locales: touched });
  if (errors.length > 0 || real.checker?.some((one) => one.exit !== 0)) {
    i18nRepo.discardTranslations();
    return { ...row, outcome: "validate-errors", detail: `nothing was pushed: ${errors.slice(0, 5).join("; ") || "the checker failed"}` };
  }

  const index = node([path.join(lib.dir, "scripts", "build-index.mjs"), "all", "--check"], { cwd: path.resolve(lib.dir) });
  if (index.status !== 0) {
    i18nRepo.discardTranslations();
    return { ...row, outcome: "validate-errors", detail: `nothing was pushed: build-index.mjs --check failed: ${index.stdout.trim().split("\n").pop()}` };
  }
  if (!i18nRepo.stageTranslations()) return { ...row, outcome: "nothing", detail: "nothing was left to commit" };

  const message = path.join(RUNS, `catch-up.${name}.commit.txt`);
  fs.writeFileSync(message, `Catch up ${entry.repo} at ${sha.slice(0, 7)}: ${written} item(s)\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\n`);
  i18nRepo.commit(message);

  const deletions = node([path.join(lib.dir, "scripts", "no-deletions.mjs"), "--base=HEAD~1", "--head=HEAD"], { cwd: path.resolve(lib.dir) });
  if (deletions.status !== 0) {
    i18nRepo.resetToMain();
    return { ...row, outcome: "validate-errors", detail: `nothing was pushed: no-deletions.mjs failed: ${scrub(deletions.stdout).trim().split("\n").pop()}` };
  }

  const pushed = i18nRepo.pushToMain();
  if (!pushed.ok) {
    i18nRepo.resetToMain();
    return { ...row, outcome: "push-failed", error: pushed.error, detail: `nothing was pushed: ${pushed.error.slice(0, 300)}` };
  }
  return { ...row, outcome: failures.length > 0 ? "partly-pushed" : "pushed", detail: `${written} item(s) in ${touched.join(", ")}${failed}` };
}

// How catch-up outcomes map onto run-issue.mjs's reasons, which the issue, the
// outcome file and /fix-i18n-issue share.
const REASONS = { pushed: "pushed", nothing: "nothing-to-do", "over-cap": "over-cap", failures: "failures", "partly-pushed": "failures", "validate-errors": "validate-errors", error: "error", "push-failed": "push-failed" };

/** Open, update or close the repo's issue for how its run ended. */
function settle(row, issue) {
  row.reason = REASONS[row.outcome] ?? null;
  if (!row.reason || DRY_RUN) return row;
  const label = attentionLabel(row.reason, { failures: row.failures ?? [], transient: row.transient === true, error: row.error ?? "" });
  if (label === "add") {
    const number = raiseIssue(row, issue);
    return number ? { ...row, issue: number } : { ...row, issue: null, issueFailed: true };
  }
  if (label === "remove" && issue) return { ...row, issue: issue.number, closed: closeIssue(row, issue) };
  return { ...row, issue: issue?.number ?? null };
}

function report(rows, incomplete) {
  const lines = [`# Catch-up${DRY_RUN ? " (dry run)" : ""}`, ""];
  const url = runUrl();
  if (url) lines.push(`Run: ${url}`, "");
  if (rows.length === 0) lines.push("Every active repo's `main` is fully translated for every production locale.");
  else {
    lines.push("| Repo | Locales | Outcome | Issue | Detail |", "|---|---|---|---|---|");
    for (const row of rows) {
      const issue = row.issue ? `#${row.issue}${row.closed ? " (closed)" : ""}` : row.issueFailed ? "could not be written" : "";
      lines.push(`| \`${row.repo}\` | ${row.locales.join(", ")} | ${row.outcome} | ${issue} | ${String(row.detail).replaceAll("|", "\\|").replaceAll("\n", " ")} |`);
    }
  }
  if (incomplete.length > 0) lines.push("", `The sweep could not read ${incomplete.length} repo(s), so they were not caught up: ${incomplete.map((one) => `\`${one.repo}\``).join(", ")}.`);
  const body = `${lines.join("\n")}\n`;
  fs.writeFileSync(path.join(RUNS, "catch-up.md"), body);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, body);
  console.log(body);
}

try {
  const { entries, incomplete } = sweep();
  const issues = openIssues();
  const hasGaps = (entry) => Object.values(entry.locales).some((row) => row.outstanding > 0);
  const todo = entries.filter((entry) => entry.active !== false && hasGaps(entry));
  console.log(`${entries.length} repo(s) swept, ${todo.length} active with gaps, ${issues.size} open catch-up issue(s).`);

  const rows = [];

  // An open issue for a repo the sweep now finds complete (fixed by hand, or
  // made inactive) has nothing left to wait for.
  for (const entry of entries) {
    const issue = issues.get(entry.repo);
    if (!issue || (hasGaps(entry) && entry.active !== false)) continue;
    rows.push(settle({ repo: entry.repo, locales: [], outcome: "nothing", detail: "the sweep finds nothing outstanding" }, issue));
  }

  for (const entry of todo) {
    console.log(`\n== ${entry.repo}`);
    const issue = issues.get(entry.repo);
    if (issue?.attention) {
      rows.push({ repo: entry.repo, locales: [], outcome: "waiting", issue: issue.number, detail: `skipped while #${issue.number} is labelled ${GITHUB.attention_label}` });
      console.log(`waiting: #${issue.number}`);
      continue;
    }
    let row;
    try {
      row = catchUp(entry);
    } catch (error) {
      i18nRepo.discardTranslations();
      row = { repo: entry.repo, locales: [], outcome: "error", transient: error instanceof Failure && error.transient === true, detail: scrub(error.message).slice(0, 500) };
    }
    console.log(`${row.outcome}: ${row.detail}`);
    rows.push(settle(row, issue));
  }

  report(rows, incomplete);
  process.exit(rows.some((row) => row.issueFailed) || incomplete.length > 0 ? 1 : 0);
} catch (error) {
  die(scrub(error instanceof Failure ? error.message : String(error.stack ?? error)));
}
