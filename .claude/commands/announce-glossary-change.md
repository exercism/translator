---
description: Post what changed in a language's glossary as a reply on its pinned forum thread.
argument-hint: <lang>
arguments: lang
allowed-tools: Read, Bash, Glob
model: sonnet
effort: medium
---

**Do not run git.** No `add`, `commit`, `push`, `pull`, `checkout`, `stash`, `branch` or
worktree operation, in any repo. See "Git belongs to the orchestrator" in
`global/workflow.md`.

Tell a language's reviewers what has changed in their glossary since the last time we told
them. This is the reply half of "A glossary change (commit, push, reply)" in
`global/workflow.md`; read that section before running.

- `$lang` = language code (e.g. `hu`, `pt-BR`). Required. If missing, stop and ask.

## Step 1: Work out what is new

Read `languages/$lang/glossary-notes.md`, the language's decision log. Read
`languages/$lang/tracking.json` for that language's `glossary.topic_id` and its
`glossary.announced_through`, the heading of the newest log entry already announced.

Everything **above** that entry is new. If the field is absent, nothing has been announced
yet and every entry is new.

If the language has no notes file, or nothing is new, **stop and say so.** A reply saying
nothing changed is worse than no reply: it trains people to ignore the thread.

## Step 2: Decide what is worth a notification

Not every entry earns one. A reply arrives in someone's inbox, so it has to be worth
opening.

**Announce:**

- **Decisions.** A term changed, a collision was resolved, a product term was settled. What
  people are here to check.
- **Open questions.** Anything the log records as raised and not decided. These are the
  entries most likely to get a useful answer, because they name something specific and ask
  for it.

**Do not announce:**

- **Agent drafting on its own.** "Twelve rows were added and nobody has checked them" is
  the normal state of an unreviewed glossary, not news. It reads as noise and buries the
  entries that matter.

If, after filtering, only agent drafting is left, that is a "nothing to announce" result.
Say so and stop.

## Step 3: Draft the body

The reply is short and specific. A bullet per change, in plain language, naming the term
and what it is now. Link the glossary file on GitHub once (the same link the pinned post
carries: `./scripts/glossary-post-body $lang --links` prints it). Do not restate the glossary,
and do not explain the governance.

Where an entry records a native speaker's decision, credit them by username: it shows the
thread that posting there works, which is the only argument that reliably gets more of it.

Where an entry is an open question, ask it directly and say what would settle it.

Write the body to a file, in English, per "Forum posts are written in English" in
`global/workflow.md`. The terms themselves are quoted material, so they stay in the target
language.

## Step 4: Confirm before posting

**Show the operator the exact body and wait.** A forum post is the one genuinely
irreversible step in this repo: an edit is visible in the post history and a notification
has already gone to everyone watching. Permission to commit and push never extends to
posting.

If the operator changes the wording, that is the wording. Do not re-draft it back.

## Step 5: Post

Check the last few posts on the topic first. If the newest one is already this
announcement, the marker was lost rather than the post; report that and stop rather than
posting it twice.

```bash
./scripts/post-glossary-reply $lang <body-file>
```

The glossary change must already be **pushed to GitHub**, not merely saved or committed, or
the reply links at a file still showing the old terms. Ask the orchestrator to confirm the
push landed before you post.

## Step 6: Report

Report the topic you posted to, the post id, and the **heading of the newest log entry you
announced**. The orchestrator records that as `glossary.announced_through` in
`languages/$lang/tracking.json`; leave writes to the orchestrator, per "Git belongs to the
orchestrator". Do not write it yourself.
