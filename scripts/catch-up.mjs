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
// Exit codes: 0 when everything it found was translated and pushed, or is
// waiting on the word cap; 1 when anything failed, which makes the hourly run
// red so that GitHub mails the repo's admins.
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
// A repo whose check fails has its files discarded and is tried again next
// hour; the others still land. Items that fail to translate are left absent and
// are also tried again next hour, while what did translate is pushed.
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
import { itemsWritten, pendingWrites, perLocaleCounts, untranslatedWords } from "./lib/issue-pass.mjs";
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
  const row = { repo: entry.repo, locales: gaps };

  const fetched = node([path.join(ROOT, "scripts", "source-checkout.mjs"), name]);
  if (fetched.status !== 0) return { ...row, outcome: "error", detail: `could not fetch: ${fetched.stderr.trim().split("\n").pop()}` };
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
    return { ...row, outcome: "push-failed", detail: `the next run tries again: ${pushed.error.slice(0, 300)}` };
  }
  return { ...row, outcome: failures.length > 0 ? "partly-pushed" : "pushed", detail: `${written} item(s) in ${touched.join(", ")}${failed}` };
}

const FAILED = new Set(["error", "failures", "validate-errors", "push-failed", "partly-pushed"]);

function report(rows, incomplete) {
  const lines = [`# Catch-up${DRY_RUN ? " (dry run)" : ""}`, ""];
  const url = runUrl();
  if (url) lines.push(`Run: ${url}`, "");
  if (rows.length === 0) lines.push("Every active repo's `main` is fully translated for every production locale.");
  else {
    lines.push("| Repo | Locales | Outcome | Detail |", "|---|---|---|---|");
    for (const row of rows) lines.push(`| \`${row.repo}\` | ${row.locales.join(", ")} | ${row.outcome} | ${String(row.detail).replaceAll("|", "\\|").replaceAll("\n", " ")} |`);
  }
  if (incomplete.length > 0) lines.push("", `The sweep could not read ${incomplete.length} repo(s), so they were not caught up: ${incomplete.map((one) => `\`${one.repo}\``).join(", ")}.`);
  const body = `${lines.join("\n")}\n`;
  fs.writeFileSync(path.join(RUNS, "catch-up.md"), body);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, body);
  console.log(body);
}

try {
  const { entries, incomplete } = sweep();
  const todo = entries.filter((entry) => entry.active !== false && Object.values(entry.locales).some((row) => row.outstanding > 0));
  console.log(`${entries.length} repo(s) swept, ${todo.length} active with gaps.`);

  const rows = [];
  for (const entry of todo) {
    console.log(`\n== ${entry.repo}`);
    let row;
    try {
      row = catchUp(entry);
    } catch (error) {
      i18nRepo.discardTranslations();
      row = { repo: entry.repo, locales: [], outcome: "error", detail: scrub(error.message).slice(0, 500) };
    }
    console.log(`${row.outcome}: ${row.detail}`);
    rows.push(row);
  }

  report(rows, incomplete);
  process.exit(rows.some((row) => FAILED.has(row.outcome)) || incomplete.length > 0 ? 1 : 0);
} catch (error) {
  die(scrub(error instanceof Failure ? error.message : String(error.stack ?? error)));
}
