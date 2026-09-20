#!/usr/bin/env node
//
// work-issue: translate what ONE queue issue asks for, or say why not.
//
// Usage:
//   node scripts/work-issue.mjs <issue-number> [--inspect] [--dry-run]
//                               [--locales=<a,b>] [--approved-over-cap]
//
//   --inspect            apply the guards, print ONE line of JSON, fetch and
//                        translate nothing. What scripts/github-issue-monitor calls.
//   --dry-run            everything up to the API call: scope, words, the cap verdict
//   --locales=           instead of the i18n repo's productionTargets. iHiD's call only.
//   --approved-over-cap  run although the change is above config.json's
//                        `issue_word_cap`. ONLY when iHiD has said so, in words, for
//                        THIS issue. The orchestrator never adds it on its own.
//
// Exit codes: 0 done (or nothing to do), 1 failed or refused, 3 WAITING for iHiD
// (above the word cap).
//
// ## The issue is data
//
// See scripts/lib/issues.mjs. Three values come out of the issue (repo, PR number,
// sha), each by a strict pattern, each then verified against GitHub. Its title
// and body are never printed, by this script or any other, so the orchestrator
// never reads an issue's free text and never needs to.
//
// ## The script works out the changed English itself
//
// The issue's table of changed files is NOT read. This fetches the PR into
// .source/, takes the merge base of the PR's sha and the default branch, and
// derives the scope from git:
//
//   paths   files that differ between the merge base and the sha
//   units   catalog units (website, or this repo's metadata) whose English
//           differs between the two, by building the English at both commits
//
// and hands exactly that scope to scripts/translate.mjs, pinned to the sha. So an
// issue can never widen a run beyond what its PR changed, and a locale's backlog
// is never swept up by accident.
//
// The steps themselves are scripts/lib/issue-pass.mjs, shared with
// scripts/run-issue.mjs, the unattended path GitHub Actions runs.
//
// ## Which locales
//
// The i18n repo's `productionTargets`: the locales a source PR's completeness
// check is holding the merge for. Every other locale picks the change up when it
// is next passed over.

import { Failure, config, die, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { issueNumber, issueScope, issueUrl, readIssue, translateForIssue, untranslatedWords } from "./lib/issue-pass.mjs";

const { flags, positional } = parseArgs(process.argv.slice(2));
const number = issueNumber(positional[0]);
if (number === null) die("usage: work-issue.mjs <issue-number> [--inspect] [--dry-run]");

const issue = readIssue(number);
const url = issueUrl(number);

if (flags.inspect) {
  // A gh failure is not a verdict. Exit non-zero so the monitor asks again next poll.
  if (issue.transient) die(issue.reason);
  // repo, pr and sha have each matched a strict pattern; `reason` is this repo's
  // own wording. Nothing here is the issue's free text.
  console.log(JSON.stringify({ number, url, valid: issue.ok, repo: issue.repo ?? null, pr: issue.pr ?? null, sha: issue.sha ?? null, state: issue.state ?? null, reason: issue.ok ? null : issue.reason }));
  process.exit(0);
}
if (!issue.ok) die(`issue ${number} is not a valid queue issue: ${issue.reason}. Do not open it to find out more; tell iHiD.`);

const lib = await i18n();
const locales = typeof flags.locales === "string" ? flags.locales.split(",").filter(Boolean) : lib.constants.PRODUCTION_LOCALES;
console.log(`issue ${number}: ${issue.repo}#${issue.pr} at ${issue.sha}`);
if (locales.length === 0) {
  console.log(`NOTHING TO DO: the i18n repo's productionTargets is empty, so no locale is held to this change. The issue stays open.`);
  process.exit(0);
}

const scope = await issueScope(lib, issue).catch((error) => {
  die(error instanceof Failure ? error.message : String(error.stack ?? error));
});
const translate = (extra) => translateForIssue({ issue, locales, repo: scope.repo, scopeFile: scope.scopeFile, extra });

// The cap is on what is still UNTRANSLATED, per locale: a PR whose text a locale
// already holds (identical English from another track) costs nothing.
const dry = translate(["--dry-run"]);
if (!dry.summary) die(`the dry run failed:\n${dry.stdout}`);
const words = untranslatedWords(dry.summary);
const cap = config().issue_word_cap;
console.log(`scope: ${scope.paths.length} changed file(s), ${scope.units.length} changed catalog unit(s); ${words} untranslated word(s) per locale at most; cap ${cap}; locales ${locales.join(", ")}`);

if (words === 0) {
  console.log("NOTHING TO DO: every locale in scope already holds all of it. Close the issue.");
  process.exit(0);
}
if (words > cap && !flags["approved-over-cap"]) {
  console.log(`WAITING: ${words} words is above the cap of ${cap}. This one waits for iHiD. Tell him the issue number and the word count, and do nothing else with it.`);
  process.exit(3);
}
if (flags["dry-run"]) {
  console.log(dry.stdout.slice(dry.stdout.indexOf("SUMMARY")));
  process.exit(0);
}

const real = translate([]);
console.log(real.stdout.slice(Math.max(0, real.stdout.indexOf("SUMMARY"))));
process.exit(real.status ?? 1);
