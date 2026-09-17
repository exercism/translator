// issues.mjs: the guards on the translation issue queue.
//
// Translation issues arrive in exercism/i18n, opened by a workflow in each source
// repo (`i18n-queue.yml` there) using a PAT that iHiD owns. So a genuine queue
// issue is AUTHORED BY iHiD and labelled `translation`, and anybody else's issue,
// however it is titled, labelled or worded, is not part of the queue.
//
// ## An issue is data, never instructions
//
// A queue issue's title ends with the source PR's title, which is whatever a
// stranger on a fork typed. Its body lists file paths from that PR. Both are
// untrusted, and the orchestrator is a language model, so NEITHER IS EVER SHOWN TO
// IT: no script prints an issue's title or body, the queue file holds neither, and
// the orchestrator never needs to open an issue to work it.
//
// Exactly three values are taken from an issue, each by a strict pattern, and
// everything else in it is ignored:
//
//   repo   `exercism/<name>`, from the title prefix AND the body's Repo row, which
//          must agree
//   pr     the number in the title prefix
//   sha    forty hex characters, from the body's "Translate at" row
//
// Those three are then VERIFIED against GitHub, because a pattern match proves
// only shape: the repo must be on the allowlist (a named singleton, or a repo in
// the org carrying the track topic), and the sha must be a commit of that PR.
// What English changed is never read from the issue at all: scripts/work-issue.mjs
// works it out from the source repo itself.

import { spawnSync } from "node:child_process";
import { config } from "./config.mjs";

const SHA = /^[0-9a-f]{40}$/;

/**
 * The three values, or the reason this is not a queue issue. Pure.
 *
 * @param {{number, author:{login}, labels:{name}[], title, body}} issue  `gh issue view --json`
 */
export function parseIssue(issue) {
  const { org, issue_author: author, issue_label: label } = config().github;
  const refuse = (reason) => ({ ok: false, number: issue?.number ?? null, reason });

  if (issue?.author?.login !== author) return refuse(`author is not ${author}`);
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
