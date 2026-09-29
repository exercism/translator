// issues.mjs: the guards on the translation issue queue.
//
// Translation issues arrive in exercism/i18n, opened by a workflow in each source
// repo (`i18n-queue.yml` there) as the Exercism i18n GitHub App. A genuine queue
// issue is therefore authored by `exercism-i18n[bot]` (which `gh` prints as
// `app/exercism-i18n`) and labelled `translation`. Issues from anyone else are
// not part of the queue, whatever their title, labels or text. config.json's
// `issue_authors` holds the author. No user login contains a `/`, so no person
// can pass as the app.
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
//
// ## Catch-up issues
//
// scripts/catch-up.mjs opens its own kind of issue, one per source repo whose
// `main` it could not finish, labelled `catch-up` (config.json
// `catch_up_label`) and never `translation`, so the queue's workflows ignore
// it. Its title and body are written by that script alone, but anyone can open
// an issue with any title, so it gets the same guards: the author, the label,
// and two values matched by strict patterns:
//
//   repo   `exercism/<name>`, from the title `Catch up exercism/<name>` and the
//          body's Repo row, which must agree
//   run    the Actions run id of the catch-up run that opened or last labelled
//          it, from the body's Run row, which is where its artifact is
//
// The repo is then checked against the allowlist. There is no PR and no sha to
// check: the sha is in the run's own outcome file.

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
  const parsed = isCatchUpIssue(issue) ? parseCatchUpIssue(issue) : parseIssue(issue);
  return parsed.ok ? { ...parsed, state: issue.state } : parsed;
}

/** Whether an issue is labelled as a catch-up issue. Says nothing about whether it is genuine. Pure. */
export function isCatchUpIssue(issue) {
  return (issue?.labels ?? []).some((one) => one.name === config().github.catch_up_label);
}

/** The title scripts/catch-up.mjs gives the issue for one repo. Pure. */
export function catchUpTitle(repo) {
  return `Catch up ${repo}`;
}

/** The repo in a catch-up issue's title, or null. Pure. */
export function catchUpRepo(title) {
  const { org } = config().github;
  return new RegExp(`^Catch up (${org}/[A-Za-z0-9][A-Za-z0-9._-]{0,99})$`).exec(String(title ?? ""))?.[1] ?? null;
}

/**
 * The two values of a catch-up issue, or the reason it is not one. Pure.
 *
 * @param {{number, author:{login}, labels:{name}[], title, body}} issue  `gh issue view --json`
 */
export function parseCatchUpIssue(issue) {
  const { issue_authors: authors, catch_up_label: label } = config().github;
  const refuse = (reason) => ({ ok: false, number: issue?.number ?? null, reason });

  if (!authors.includes(issue?.author?.login)) return refuse(`author is not one of ${authors.join(", ")}`);
  if (!(issue.labels ?? []).some((one) => one.name === label)) return refuse(`no "${label}" label`);

  const repo = catchUpRepo(issue.title);
  if (!repo) return refuse("title is not `Catch up <org>/<repo>`");

  const body = String(issue.body ?? "");
  const repoRow = /^\| Repo \| ([^|\s]+) \|\s*$/m.exec(body);
  const runRow = /^\| Run \| ([1-9][0-9]{0,14}) \|\s*$/m.exec(body);
  if (!repoRow || repoRow[1] !== repo) return refuse("title and body disagree about the repo");
  if (!runRow) return refuse("no run id in the body's `Run` row");

  return { ok: true, catchUp: true, number: issue.number, repo, runId: runRow[1] };
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

  const source = kind === "track" ? "track" : kind;
  if (parsed.catchUp) return { ...parsed, name, source };

  const commits = gh(["api", "--paginate", `repos/${parsed.repo}/pulls/${parsed.pr}/commits`, "--jq", ".[].sha"]);
  if (!commits.ok) return { ...refuse(`could not list the commits of ${parsed.repo}#${parsed.pr}: ${commits.error}`), transient: true };
  if (!commits.out.split("\n").includes(parsed.sha)) return refuse(`${parsed.sha.slice(0, 10)} is not a commit of ${parsed.repo}#${parsed.pr}`);

  return { ...parsed, name, source };
}
