// queue.mjs: which waiting translation issue to dispatch next. Pure.
//
// .github/workflows/translate-issue.yml runs one issue at a time, in the
// `i18n-main` concurrency group, because every run ends with a push to
// exercism/i18n `main` and two at once would race. GitHub holds one pending run
// per group and cancels any earlier pending run, so when several issues are
// dispatched within a few seconds only the first and the last survive. The
// others are cancelled before they start, and their issues sit open with
// nothing having happened to them.
//
// That is what this module finds. An issue that has started says so on itself:
// scripts/run-issue.mjs comments STARTED before it does anything else, so an
// open issue without that comment was never picked up, however recently it was
// opened. Age cannot tell the two apart, and age is what the sweep used to ask
// about: a dispatch dropped a minute ago looks exactly like an issue that was
// opened a minute ago and is about to run.
//
// Two reasons to dispatch, then:
//
//   never-started  no STARTED comment. A dispatch was lost, so run it now.
//   stale          it started, said why it stopped, and has been quiet since.
//                  Waiting is what makes this safe: a run that is working
//                  comments as it goes, and a run that failed for a reason a
//                  person must fix is labelled `needs-attention` and skipped.
//
// The caller dispatches ONE of these per call. Dispatching a list in a loop is
// the bug itself: on 2026-09-24 the 11:54 sweep dispatched exercism/i18n #23,
// #31 and #32 within four seconds and cancelled #23's own run, which then
// waited for the next sweep. One at a time is enough because each finishing run
// dispatches the next (the "Drain the queue" step in translate-issue.yml), so
// the queue empties at the speed of the runs rather than the speed of the cron.
//
// Comment authors are checked, because exercism/i18n is public and anyone can
// comment on an issue there, and a STARTED comment from anyone else would hide
// an issue from the sweep for good. `gh` prints an app as `app/<name>` as an
// issue's author and as plain `<name>` as a comment's, so the configured author
// is matched against a comment with that prefix taken off. An issue's own author
// is matched exactly, as scripts/lib/issues.mjs matches it, because that is what
// keeps a user account called `exercism-i18n` from passing as the app. A comment
// carries no bot flag to check in the same way, so such an account could keep an
// issue from being swept. The issue then waits for a person, which is where it
// was before this file existed.

/** run-issue.mjs's first comment on an issue it has picked up. */
export const STARTED = "Starting translation now.";

const commented = (comment, authors) => authors.map((name) => name.replace(/^app\//, "")).includes(String(comment?.author?.login ?? ""));

/** Has a run of this issue begun? */
export function hasStarted(issue, authors) {
  return (issue?.comments ?? []).some((one) => commented(one, authors) && String(one?.body ?? "").startsWith(STARTED));
}

const minutesSince = (when, now) => (now.getTime() - new Date(when).getTime()) / 60000;

/**
 * Every issue that should be dispatched again, most urgent first.
 *
 * @param issues      `gh issue list --json number,author,createdAt,updatedAt,labels,comments`
 * @param now         the clock, passed in so tests are not timing-dependent
 * @param staleMinutes  how long a started issue must have been quiet
 * @param graceMinutes  how long a never-started issue must have been waiting,
 *                      so that a run which is pending but has not yet commented
 *                      is left alone. Zero for a run draining the queue behind
 *                      itself, which knows the group is about to be free.
 * @param exclude     an issue number not to return, for the run that is on it
 */
export function waiting(issues, { now, staleMinutes, graceMinutes, authors, skipLabel, exclude = null }) {
  const found = [];
  for (const issue of issues ?? []) {
    if (!authors.includes(issue?.author?.login)) continue;
    if ((issue.labels ?? []).some((one) => one.name === skipLabel)) continue;
    if (issue.number === exclude) continue;
    const quiet = minutesSince(issue.updatedAt, now);
    // An unreadable timestamp is left for a person rather than guessed at.
    if (!Number.isFinite(quiet)) continue;
    const started = hasStarted(issue, authors);
    if (!started && quiet >= graceMinutes) found.push({ number: issue.number, reason: "never-started", quiet });
    else if (started && quiet >= staleMinutes) found.push({ number: issue.number, reason: "stale", quiet });
  }
  // A never-started issue is known wasted work, so it goes first. Within each
  // reason the longest wait goes first, so nothing is starved.
  const rank = (one) => (one.reason === "never-started" ? 0 : 1);
  return found.sort((a, b) => rank(a) - rank(b) || b.quiet - a.quiet || a.number - b.number);
}

/** The one issue to dispatch, or null. */
export function nextWaiting(issues, options) {
  return waiting(issues, options)[0] ?? null;
}
