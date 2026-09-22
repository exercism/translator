// issue-pass.mjs: one queue issue, from its number to a finished translation.
//
// Two entry points run this and differ only in the steps around it:
// scripts/work-issue.mjs, which the orchestrator session starts and whose output
// the orchestrator commits, and scripts/run-issue.mjs, which GitHub Actions
// starts and which commits, pushes and closes the issue itself. The steps from
// the issue number to the SUMMARY live here, so the unattended path and the
// manual one stay the same.
//
// Everything here is read-only, apart from the scope file written under
// state/runs/ and the fetch into .source/ done by scripts/source-checkout.mjs.
// No git command here changes anything outside .source/.
//
// ## Issues are data
//
// See scripts/lib/issues.mjs. Three values are taken from an issue (repo, PR
// number, sha), each matched by a strict pattern and verified against GitHub,
// and its title and body are never printed. The changed English is worked out
// from the source repo itself (scripts/lib/issue-scope.mjs), so an issue cannot
// widen a run beyond what its PR changed.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { Failure, ROOT, config } from "./config.mjs";
import { fetchIssue, verifyIssue } from "./issues.mjs";
import { SOURCES } from "./routes.mjs";
import { scopeOf } from "./issue-scope.mjs";

/** An issue number as a caller may hand it over: a positive integer, plainly written. */
export function issueNumber(raw) {
  const value = String(raw ?? "").trim();
  return /^[1-9][0-9]{0,8}$/.test(value) ? Number(value) : null;
}

export function issueUrl(number) {
  return `https://github.com/${config().github.i18n_repo}/issues/${number}`;
}

/**
 * The verified issue, or a refusal carrying `reason`. Network, read-only.
 *
 * A closed issue is refused before anything is verified, with `closed` set. The
 * queue closes an issue as "not planned" when `ready-to-translate` is removed
 * from its PR, and a dispatch still pending or running at that point must not
 * translate English that is no longer approved.
 */
export function readIssue(number) {
  const fetched = fetchIssue(number);
  if (!fetched.ok) return fetched;
  if (fetched.state !== "OPEN") return { ...fetched, ok: false, closed: true, reason: "the issue is closed" };
  return verifyIssue(fetched);
}

/** Whether the issue is still open: true, false, or null when GitHub could not say. */
export function issueStillOpen(number) {
  const fetched = fetchIssue(number);
  return fetched.ok ? fetched.state === "OPEN" : null;
}

/**
 * Fetch the PR into .source/ and work out what it changed, from git.
 *
 * Returns the checkout, the scope, and the file the scope was written to, which
 * is what scripts/translate.mjs is pinned with.
 */
export async function issueScope(lib, issue) {
  const checkout = spawnSync("node", [path.join(ROOT, "scripts", "source-checkout.mjs"), issue.name, `--pr=${issue.pr}`], { encoding: "utf8" });
  if (checkout.status !== 0) throw Object.assign(new Failure(`could not fetch ${issue.repo}#${issue.pr}: ${checkout.stderr.trim().split("\n").pop()}`), { transient: true });

  const repo = path.join(ROOT, ".source", issue.name);
  try {
    lib.git.git(["cat-file", "-e", `${issue.sha}^{commit}`], repo);
  } catch {
    throw Object.assign(new Failure(`${issue.sha} is not in the fetched PR (force-pushed since? the issue is rewritten on every push, so poll again)`), { transient: true });
  }

  const { paths, units } = await scopeOf(lib, { source: issue.source, repo, sha: issue.sha });
  const runDir = path.join(ROOT, "state", "runs");
  fs.mkdirSync(runDir, { recursive: true });
  const scopeFile = path.join(runDir, `issue-${issue.number}.scope.json`);
  fs.writeFileSync(scopeFile, JSON.stringify({ paths, units }));
  return { repo, paths, units, scopeFile };
}

/** One scripts/translate.mjs run over this issue's scope, and its summary. */
export function translateForIssue({ issue, locales, repo, scopeFile, extra = [] }) {
  const args = [
    path.join(ROOT, "scripts", "translate.mjs"),
    issue.source,
    ...(SOURCES[issue.source].named ? [issue.name] : []),
    locales.join(","),
    `--repo=${repo}`,
    `--ref=${issue.sha}`,
    `--scope=${scopeFile}`,
    ...extra
  ];
  const result = spawnSync("node", args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], maxBuffer: 256 * 1024 * 1024 });
  const summary = /full summary: (\S+)/.exec(result.stdout)?.[1];
  return { status: result.status, stdout: result.stdout, summaryFile: summary ?? null, summary: summary ? JSON.parse(fs.readFileSync(path.join(ROOT, summary), "utf8")) : null };
}

/**
 * The most words any single locale still has to translate, from a dry run.
 *
 * The cap is on untranslated text per locale: a PR whose text a locale already
 * holds (identical English from another track) costs nothing.
 */
export function untranslatedWords(summary) {
  return Math.max(0, ...Object.values(summary?.estimates ?? {}).map((types) => Object.values(types).reduce((sum, row) => sum + row.words, 0)));
}

/** Items a run wrote or copied, per locale. Pure. */
export function perLocaleCounts(summary) {
  const counts = {};
  for (const [locale, types] of Object.entries(summary?.counts ?? {})) {
    counts[locale] = { written: 0, copied: 0, failed: 0 };
    for (const row of Object.values(types)) {
      counts[locale].written += row.written ?? 0;
      counts[locale].copied += row.copied ?? 0;
      counts[locale].failed += row.failed ?? 0;
    }
  }
  return counts;
}

/** Items written or copied across every locale. Pure. */
export function itemsWritten(summary) {
  return Object.values(perLocaleCounts(summary)).reduce((sum, row) => sum + row.written + row.copied, 0);
}

/** The commit message for what a run put into the i18n repo. Pure. */
export function commitMessage(issue, items) {
  return `Translate ${issue.repo}#${issue.pr}: ${items} item(s)\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\n`;
}

/**
 * What the unattended path does about the issue, given how the run ended.
 *
 * `close` is true only when the work is clearly finished: everything translated
 * and pushed, or every target already present. Any other outcome leaves the
 * issue open, because open issues are what the queue retries, and closing one
 * re-runs the source PR's check, which would fail again. `quiet` means post
 * nothing: an issue that is already closed was closed on purpose and gets no
 * comment. Pure.
 */
export const OUTCOMES = {
  pushed: { close: true, exit: 0, headline: "Translated and pushed to `main`." },
  closed: { close: false, exit: 0, quiet: true, headline: "The issue is closed, so nothing was translated or pushed." },
  "nothing-to-do": { close: true, exit: 0, headline: "Nothing to do: every locale in scope already holds this text." },
  "no-production-locales": { close: false, exit: 0, headline: "Nothing to do: `locales.json` `productionTargets` is empty, so no locale is held to this change." },
  invalid: { close: false, exit: 1, headline: "This is not a valid queue issue, so nothing was translated." },
  "over-cap": { close: false, exit: 1, headline: "Above the word cap: this one waits for iHiD." },
  failures: { close: false, exit: 1, headline: "Some items could not be translated, so nothing was pushed." },
  "validate-errors": { close: false, exit: 1, headline: "The i18n checker reported errors, so nothing was pushed." },
  deletions: { close: false, exit: 1, headline: "The run would remove something under `locales/`, so nothing was pushed." },
  "push-failed": { close: false, exit: 1, headline: "The translations are written but could not be pushed." },
  error: { close: false, exit: 1, headline: "The run stopped on an error." }
};

export function issueOutcome(reason) {
  return OUTCOMES[reason] ?? OUTCOMES.error;
}

/**
 * A failed item whose cause was the connection to DeepSeek, or a race with
 * another run, so another run can succeed without anyone doing anything. Every
 * other failure (an answer the checker rejected on every attempt, a file too
 * large to send, a truncated answer, a 4xx) comes back the same way each time,
 * and paying for it again changes nothing. Pure.
 */
export function transientFailure(reason) {
  return /^(curl failed|HTTP (429|5\d\d) from DeepSeek|unparseable response from DeepSeek|no choice in the response|another run wrote this file first)/.test(String(reason ?? ""));
}

/**
 * What happens to the `needs-attention` label (config.json
 * `github.attention_label`) when a run ends: "add", "remove", or null to leave
 * it as it is. Pure.
 *
 * The label marks an issue a person has to deal with before it can finish.
 * .github/workflows/retry-stale-issues.yml skips it, so a failure that recurs
 * is not paid for every six hours, and the orchestrator session watches for it
 * (scripts/needs-attention-monitor, /fix-i18n-issue). An outcome that another
 * run can clear on its own stays unlabelled and is retried.
 *
 * @param facts  `failures` from the translate summary, `transient` for an
 *               invalid or error ending caused by GitHub being unreachable, and
 *               `error` for the last push error
 */
export function attentionLabel(reason, { failures = [], transient = false, error = "" } = {}) {
  switch (reason) {
    case "pushed":
    case "nothing-to-do":
      return "remove";
    case "over-cap":
    case "validate-errors":
    case "deletions":
      return "add";
    case "failures":
      return failures.some((one) => !transientFailure(one.reason)) ? "add" : null;
    case "push-failed":
      return /\b(401|403)\b|permission|denied|authentication|could not read username|protected branch/i.test(error) ? "add" : null;
    case "closed":
    case "no-production-locales":
      return null;
    default:
      return transient ? null : "add";
  }
}
