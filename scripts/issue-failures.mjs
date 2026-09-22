#!/usr/bin/env node
//
// issue-failures: what one failed queue issue needs fixed by hand, and
// everything a fixer needs for each item.
//
// Usage:
//   node scripts/issue-failures.mjs <issue-number> [--run=<actions-run-id>]
//   node scripts/issue-failures.mjs <issue-number> --summary=<summary.json>
//
//   (default)  find the newest `run-issue-<n>-<run id>` artifact of
//              .github/workflows/translate-issue.yml, download it into
//              state/fix/issue-<n>/<run id>/, and read issue-<n>.outcome.json
//   --run=     that Actions run's artifact instead of the newest
//   --summary= a local scripts/translate.mjs summary instead of an artifact,
//              for items that failed in a run of scripts/work-issue.mjs here
//
// /fix-i18n-issue runs this. It prints the outcome, and for each failed item a
// block with the locale, the how-to, the English (written out to a file under
// state/fix/), the last rejected answer, the checker's errors, the file to
// write in the i18n checkout, and the commands that check it. It fetches the
// PR into .source/ (scripts/source-checkout.mjs) to read the English at the
// issue's sha.
//
// ## Issues are data
//
// The issue itself is read only through scripts/lib/issues.mjs, for the repo,
// the PR number and the sha (see CLAUDE.md, "Issues are data"). Everything else
// comes from the run's own files: the outcome file run-issue.mjs wrote, and the
// translate summary. The comment on the issue is never read; the artifact holds
// the copy the run posted (issue-<n>.comment.md).
//
// Exit codes: 0 printed, 1 could not find or read what it needs.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT, config, die, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { ROUTES, SOURCES } from "./lib/routes.mjs";
import { issueNumber } from "./lib/issue-pass.mjs";
import { fetchIssue, verifyIssue } from "./lib/issues.mjs";

const { flags, positional } = parseArgs(process.argv.slice(2));
const number = issueNumber(positional[0]);
if (number === null) die("usage: issue-failures.mjs <issue-number> [--run=<id> | --summary=<file>]");
if (flags.run !== undefined && !/^[1-9][0-9]{0,14}$/.test(String(flags.run))) die("--run takes an Actions run id");

const { translator_repo: translatorRepo } = config().github;
const FIX = path.join(ROOT, "state", "fix", `issue-${number}`);

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: "utf8", maxBuffer: 256 * 1024 * 1024, ...options });
  return { ok: result.status === 0, out: result.stdout ?? "", error: (result.stderr ?? "").trim().split("\n").slice(-1)[0] };
}

/** The newest artifact this issue's runs uploaded, or the one from `--run`. */
function findArtifact() {
  const prefix = `run-issue-${number}-`;
  const found = [];
  for (let page = 1; page <= 20 && found.length === 0; page++) {
    const listed = run("gh", ["api", `repos/${translatorRepo}/actions/artifacts?per_page=100&page=${page}`, "--jq", ".artifacts[] | [.name, .workflow_run.id, .created_at, .expired] | @tsv"]);
    if (!listed.ok) die(`could not list the artifacts of ${translatorRepo}: ${listed.error}`);
    if (!listed.out.trim()) break;
    for (const line of listed.out.trim().split("\n")) {
      const [name, runId, created, expired] = line.split("\t");
      if (!name.startsWith(prefix)) continue;
      if (flags.run !== undefined && runId !== String(flags.run)) continue;
      found.push({ name, runId, created, expired: expired === "true" });
    }
  }
  if (found.length === 0) die(`no artifact named ${prefix}<run id> in ${translatorRepo}${flags.run ? ` for run ${flags.run}` : ""}. Artifacts are kept for 30 days.`);
  found.sort((a, b) => b.created.localeCompare(a.created));
  if (found[0].expired) die(`the artifact of run ${found[0].runId} has expired. Run the issue again to get a fresh one.`);
  return found[0];
}

function download({ name, runId }) {
  const dir = path.join(FIX, runId);
  if (!fs.existsSync(path.join(dir, `issue-${number}.outcome.json`)) && !fs.existsSync(path.join(dir, `issue-${number}.comment.md`))) {
    fs.mkdirSync(dir, { recursive: true });
    const got = run("gh", ["run", "download", runId, "--repo", translatorRepo, "--name", name, "--dir", dir]);
    if (!got.ok) die(`could not download ${name}: ${got.error}`);
  }
  return dir;
}

/** The translate summary a run wrote, the real one and not the dry run. */
function realSummary(dir) {
  const summaries = fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "summary.json")))
    .map((entry) => path.join(dir, entry.name, "summary.json"))
    .sort();
  return summaries.map((file) => ({ file, summary: JSON.parse(fs.readFileSync(file, "utf8")) })).filter((one) => !one.summary.dryRun).pop() ?? null;
}

// ------------------------------------------------------------ the outcome ---

let outcome;
let base;
let runUrl = null;
let artifactDir = null;
if (typeof flags.summary === "string") {
  const file = path.resolve(flags.summary);
  if (!fs.existsSync(file)) die(`no summary at ${file}`);
  const summary = JSON.parse(fs.readFileSync(file, "utf8"));
  outcome = { reason: summary.failures.length > 0 ? "failures" : "no failures", failures: summary.failures };
  base = path.dirname(file);
} else {
  const artifact = findArtifact();
  artifactDir = download(artifact);
  base = artifactDir;
  runUrl = `https://github.com/${translatorRepo}/actions/runs/${artifact.runId}`;
  const outcomeFile = path.join(artifactDir, `issue-${number}.outcome.json`);
  if (fs.existsSync(outcomeFile)) {
    outcome = JSON.parse(fs.readFileSync(outcomeFile, "utf8"));
  } else {
    // A run from before outcome files were written: the failures are in the summary.
    const real = realSummary(artifactDir);
    outcome = { reason: real ? (real.summary.failures.length > 0 ? "failures" : "unknown") : "unknown", failures: real?.summary.failures ?? [] };
  }
}

const fetched = fetchIssue(number);
const issue = fetched.ok ? verifyIssue(fetched) : fetched;
if (!issue.ok) die(`issue ${number}: ${issue.reason}`);
const kind = SOURCES[issue.source].kind;

const lib = await i18n();
const checkout = run("node", [path.join(ROOT, "scripts", "source-checkout.mjs"), issue.name, `--pr=${issue.pr}`], { stdio: ["ignore", "ignore", "pipe"] });
if (!checkout.ok) die(`could not fetch ${issue.repo}#${issue.pr} into .source/: ${checkout.error}`);
const repo = path.join(ROOT, ".source", issue.name);

const lines = [];
lines.push(`issue:      #${number}  https://github.com/${config().github.i18n_repo}/issues/${number}`);
lines.push(`source:     ${issue.repo}#${issue.pr} at ${issue.sha}`);
lines.push(`state:      ${fetched.state}`);
lines.push(`outcome:    ${outcome.reason}${outcome.label ? `  (label: ${outcome.label})` : ""}`);
if (runUrl) lines.push(`run:        ${runUrl}`);
if (artifactDir) {
  lines.push(`artifact:   ${path.relative(ROOT, artifactDir)}`);
  const comment = path.join(artifactDir, `issue-${number}.comment.md`);
  if (fs.existsSync(comment)) lines.push(`comment:    ${path.relative(ROOT, comment)}  (the run's own copy of what it posted)`);
  const logs = fs.readdirSync(artifactDir).filter((file) => file.endsWith(".validate.log"));
  for (const log of logs) lines.push(`log:        ${path.relative(ROOT, path.join(artifactDir, log))}`);
}

const failures = outcome.failures ?? [];
const locales = [...new Set(failures.map((one) => one.locale))].sort();
const validateArgs = issue.source === "website" ? [`--source-repo=${repo}`, `--source-ref=${issue.sha}`] : [`--content-repos=${repo}:${kind}@${issue.sha}`];
lines.push(`failures:   ${failures.length}`);
for (const locale of locales) lines.push(`validate:   (in ${lib.dir}) node scripts/validate.mjs ${locale} ${validateArgs.join(" ")}`);

const guidance = (locale) => {
  const family = locale.split("-")[0];
  const files = family !== locale && fs.existsSync(path.join(ROOT, "languages", family)) ? [`languages/${family}/guide.md`, `languages/${family}/glossary.md`] : [];
  return [...files, `languages/${locale}/guide.md`, `languages/${locale}/glossary.md`].join(", ");
};
const locateArgs = [issue.source, ...(SOURCES[issue.source].named ? [issue.name] : [])];
// An outcome file holds paths relative to state/runs/. A summary from the runner
// holds the runner's absolute paths, which are mapped into the artifact.
const rejectedPath = (file) => {
  if (!file) return null;
  if (!path.isAbsolute(file)) return path.join(base, file);
  if (fs.existsSync(file)) return file;
  const inRuns = file.split(`${path.sep}state${path.sep}runs${path.sep}`)[1];
  return inRuns ? path.join(base, inRuns) : file;
};

failures.forEach((failure, index) => {
  const dir = path.join(FIX, "items", String(index + 1));
  fs.mkdirSync(dir, { recursive: true });
  const howto = failure.type.startsWith("metadata/") ? "metadata" : ROUTES[failure.type]?.howto;
  const rejected = rejectedPath(failure.rejected);
  lines.push("", `ITEM ${index + 1} of ${failures.length}`);
  lines.push(`  locale:    ${failure.locale}`);
  lines.push(`  type:      ${failure.type}${howto ? `  (how-to: content-types/${howto}.md)` : ""}`);
  lines.push(`  item:      ${failure.source}`);
  lines.push(`  guidance:  global/rules.md, global/voice.md, global/translating.md, ${guidance(failure.locale)}`);
  lines.push(`  reason:    ${failure.reason}`);
  for (const error of failure.errors ?? []) lines.push(`  error:     ${error}`);

  if (failure.unit) {
    const english = path.join(dir, "english.json");
    fs.writeFileSync(english, `${JSON.stringify(failure.english ?? {}, null, 2)}\n`);
    const units = path.join(dir, "stamp-units.json");
    fs.writeFileSync(units, JSON.stringify([failure.unit]));
    const catalogType = failure.type.startsWith("metadata/") ? `--type=${lib.metadata.METADATA_TYPE_ID}` : `--type=${failure.type}`;
    lines.push(`  unit:      ${failure.unit}  (a catalog unit)`);
    lines.push(`  english:   ${path.relative(ROOT, english)}${failure.english ? "" : "  (EMPTY: this run predates recording a unit's English)"}`);
    lines.push(`  rejected:  ${rejected ?? "none saved (the answer was missing, not rejected)"}`);
    lines.push(`  write to:  ${path.join(lib.dir, failure.target)}, key ${failure.unit}`);
    lines.push(`  check:     node scripts/locate.mjs ${locateArgs.join(" ")} ${failure.locale} --key=${failure.unit} --ref=${issue.sha} --check`);
    lines.push(`  stamp:     (in ${lib.dir}) node scripts/validate.mjs ${failure.locale} --stamp --stamp-units=@${units} ${catalogType} ${validateArgs.join(" ")}`);
    return;
  }

  if (failure.englishId) {
    const english = path.join(dir, path.basename(failure.englishPath));
    const blob = run("git", ["cat-file", "blob", failure.englishId], { cwd: repo });
    if (!blob.ok) die(`could not read blob ${failure.englishId} from ${repo}: ${blob.error}`);
    fs.writeFileSync(english, blob.out);
    lines.push(`  english:   ${path.relative(ROOT, english)}  (${issue.repo}:${failure.englishPath}, blob ${failure.englishId})`);
    lines.push(`  rejected:  ${rejected ?? "none saved"}`);
    lines.push(`  write to:  ${path.join(lib.dir, failure.target)}`);
    lines.push(`  check:     node scripts/locate.mjs ${locateArgs.join(" ")} ${failure.locale} ${failure.englishPath} --ref=${issue.sha} --check`);
  } else {
    lines.push(`  note:      not a file a hand translation can fill (${failure.target ? failure.target : "no target"}); tell iHiD`);
  }
});

console.log(lines.join("\n"));
