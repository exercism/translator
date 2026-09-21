// issue-pass.mjs: one queue issue, from its number to a finished translation.
//
// Two entry points run exactly this and differ only in what surrounds it:
// scripts/work-issue.mjs, which a human's orchestrator session starts and whose
// output the orchestrator commits, and scripts/run-issue.mjs, which GitHub
// Actions starts and which commits, pushes and closes the issue itself. The
// steps between the issue number and the SUMMARY live here once, so the
// unattended path can never drift from the one a person watches.
//
// Everything here is read-only except for the scope file it writes under
// state/runs/ and the source fetch into .source/ that scripts/source-checkout.mjs
// does. No git command here changes anything outside .source/.
//
// ## The issue is data
//
// See scripts/lib/issues.mjs. Three values come out of an issue (repo, PR
// number, sha), each by a strict pattern and each verified against GitHub, and
// its title and body are never printed by anything. What English changed is
// worked out from the source repo itself (scripts/lib/issue-scope.mjs), so an
// issue can never widen a run beyond what its PR changed.

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
 * queue closes an issue as "not planned" when `ready-to-translate` comes off its
 * PR, and a dispatch still pending or in flight at that moment must not
 * translate the English the label no longer vouches for.
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
  if (checkout.status !== 0) throw new Failure(`could not fetch ${issue.repo}#${issue.pr}: ${checkout.stderr.trim().split("\n").pop()}`);

  const repo = path.join(ROOT, ".source", issue.name);
  try {
    lib.git.git(["cat-file", "-e", `${issue.sha}^{commit}`], repo);
  } catch {
    throw new Failure(`${issue.sha} is not in the fetched PR (force-pushed since? the issue is rewritten on every push, so poll again)`);
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
 * The most any ONE locale still has to translate, in words, from a dry run.
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
 * `close` is only ever true when the work is demonstrably finished: everything
 * translated and pushed, or every target already held. Every other end leaves
 * the issue open, because an open issue is the queue and a closed one re-runs
 * the source PR's check, which would then fail again. `quiet` posts nothing:
 * a closed issue was closed on purpose and gets no comment. Pure.
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
