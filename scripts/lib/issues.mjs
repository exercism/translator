// issues.mjs: the guards on the translation issue queue.
//
// Translation issues arrive in exercism/i18n, opened by a workflow in each source
// repo (`i18n-queue.yml` there) as the Exercism i18n GitHub App. A genuine queue
// issue is therefore authored by `exercism-i18n[bot]` (which `gh` prints as
// `app/exercism-i18n`) and labelled `translation`. Issues from anyone else are
// not part of the queue, whatever their title, labels or text. config.json's
// `issue_authors` also lists `iHiD` while some source repos still run the old
// queue, which opens issues with his token. No user login contains a `/`, so
// no person can pass as the app.
//
// ## Issues are data
//
// A queue issue's title ends with the source PR's title, which anyone with a
// fork can write. Its body lists file paths from that PR. Both are untrusted,
// and the orchestrator is a language model, so neither is ever shown to it: no
// script prints an issue's title or body, the queue file contains neither, and
// the orchestrator never needs to open an issue.
//
// Three values are taken from an issue, each matched by a strict pattern, and
// everything else is ignored:
//
//   repo   `exercism/<name>`, from the title prefix and the body's Repo row,
//          which must agree
//   pr     the number in the title prefix
//   sha    forty hex characters, from the body's "Translate at" row
//
// The three values are then verified against GitHub, because a pattern match
// only proves the shape. The repo must be on the allowlist (a named singleton,
// or a repo in the org with the track topic), and the sha must be a commit in
// that PR. The changed English is not read from the issue:
// scripts/work-issue.mjs works it out from the source repo itself.

import { spawnSync } from "node:child_process";
import { config } from "./config.mjs";

const SHA = /^[0-9a-f]{40}$/;

/**
 * The three values, or the reason this is not a queue issue. Pure.
 *
 * @param {{number, author:{login}, labels:{name}[], title, body}} issue  `gh issue view --json`
 */
export function parseIssue(issue) {
  const { org, issue_authors: authors, issue_label: label } = config().github;
  const refuse = (reason) => ({ ok: false, number: issue?.number ?? null, reason });

  if (!authors.includes(issue?.author?.login)) return refuse(`author is not one of ${authors.join(", ")}`);
  if (!(issue.labels ?? []).some((one) => one.name === label)) return refuse(`no "${label}" label`);

  const title = new RegExp(`^Translate (${org}/[A-Za-z0-9][A-Za-z0-9._-]{0,99})#([1-9][0-9]{0,8}):`).exec(String(issue.title ?? ""));
  if (!title) return refuse("title is not `Translate <org>/<repo>#<n>:`");

  const body = String(issue.body ?? "");
  const repoRow = /^\| Repo \| ([^|\s]+) \|\s*$/m.exec(body);
  const shaRow = /^\| Translate at \| ([^|\s]+) \|\s*$/m.exec(body);
  if (!repoRow || repoRow[1] !== title[1]) return refuse("title and body disagree about the repo");
  if (!shaRow || !SHA.test(shaRow[1])) return refuse("no 40-character sha in the body's `Translate at` row");

  return { ok: true, number: issue.number, repo: title[1], pr: Number(title[2]), sha: shaRow[1] };
}

function gh(args) {
  const result = spawnSync("gh", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  if (result.status !== 0) return { ok: false, error: (result.stderr || "").trim().split("\n")[0].slice(0, 200) };
  return { ok: true, out: result.stdout };
}

/** One issue's guarded fields, fetched. Title and body never leave this function. */
export function fetchIssue(number) {
  const { i18n_repo: repo } = config().github;
  const result = gh(["issue", "view", String(number), "--repo", repo, "--json", "number,author,labels,title,body,state"]);
  if (!result.ok) return { ok: false, transient: true, number, reason: `gh could not read issue ${number}: ${result.error}` };
  const issue = JSON.parse(result.out);
  const parsed = parseIssue(issue);
  return parsed.ok ? { ...parsed, state: issue.state } : parsed;
}

/** The allowlist and the sha-belongs-to-PR check. Network, read-only. */
export function verifyIssue(parsed) {
  const { org, singletons, track_topic: topic } = config().github;
  const name = parsed.repo.slice(org.length + 1);
  const refuse = (reason) => ({ ...parsed, ok: false, reason });

  let kind = singletons.includes(name) ? name : null;
  if (kind === null) {
    const topics = gh(["api", `repos/${parsed.repo}`, "--jq", ".topics | join(\",\")"]);
    if (!topics.ok) return { ...refuse(`could not read ${parsed.repo}: ${topics.error}`), transient: true };
    if (!topics.out.trim().split(",").includes(topic)) return refuse(`${parsed.repo} is not on the allowlist (not a named source repo, and no "${topic}" topic)`);
    kind = "track";
  }

  const commits = gh(["api", "--paginate", `repos/${parsed.repo}/pulls/${parsed.pr}/commits`, "--jq", ".[].sha"]);
  if (!commits.ok) return { ...refuse(`could not list the commits of ${parsed.repo}#${parsed.pr}: ${commits.error}`), transient: true };
  if (!commits.out.split("\n").includes(parsed.sha)) return refuse(`${parsed.sha.slice(0, 10)} is not a commit of ${parsed.repo}#${parsed.pr}`);

  return { ...parsed, name, source: kind === "track" ? "track" : kind };
}
