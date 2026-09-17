---
description: Update a language guide and glossary from a forum thread, then announce the change on the pinned glossary topic.
argument-hint: <topic-id-or-url> [lang]
arguments: topic lang
allowed-tools: Read, Write, Edit, Glob, Bash
model: opus
effort: medium
---

**Do not run git.** No `add`, `commit`, `push`, `pull`, `checkout`, `stash`, `branch` or
worktree operation, in any repo. Write your files, leave them uncommitted, and list them in
your report. See "Git belongs to the orchestrator" in `global/workflow.md`.

Update `languages/<lang>/guide.md` and `languages/<lang>/glossary.md` based on a forum
thread, then tell that language's reviewers on the pinned glossary topic. The pinned post
links to the glossary file on GitHub, so **the orchestrator committing and pushing this repo**
is what actually puts the current agreed terms in front of the community.

This is thin plumbing. All rules live in the context files; do not restate them. Nothing is
written to a glossary without the operator's explicit agreement this session.

- `$topic` = a forum topic id (e.g. `312`) or a full topic URL
- `$lang` = optional language code. If omitted, infer from the topic's category (`i18n-<lang>`).
- Raw arguments: `$ARGUMENTS`

If `$topic` is missing, stop and ask.

## Step 1: Fetch the topic

Load credentials and pull the full thread:

```bash
set -a; . ./.env; set +a
TID="<numeric id from $topic>"
curl -sSL -m 20 -H "Api-Key: $DISCOURSE_API_KEY" -H "Api-Username: $DISCOURSE_API_USERNAME" \
  "$FORUM_BASE/t/${TID}.json"
```

If `post_stream.stream` lists more ids than are included, fetch the rest in batches of 20
via `"$FORUM_BASE/t/${TID}/posts.json?post_ids[]=..."`. Read every post.

Determine the language from the topic's category slug (`i18n-<lang>`) unless `$lang` was given.

## Step 2: Load context

1. `global/rules.md`
2. `global/voice.md`
3. `global/workflow.md`
4. `languages/<lang>/guide.md` and `languages/<lang>/glossary.md`
5. If `<lang>` belongs to a language family (its code has a "-" and
   `languages/<family>/` exists, e.g. `es-419` -> `es`), also read
   `languages/<family>/guide.md` and `languages/<family>/glossary.md`: see
   `CLAUDE.md` § Language families for the shared-base/locale-delta split.
6. `languages/<lang>/tracking.json`: to find the `glossary.post_id` for this language.

## Step 3: Classify the feedback

Sort every actionable point in the thread into exactly one bucket:

- **Term decision** → belongs in the glossary. A word that should be rendered a specific,
  consistent way.
- **Voice / style** → belongs in the language guide. Register, word order, grammar
  preferences that apply broadly.

Ignore chatter that is not actionable. If two native speakers disagree and the thread does
not resolve it, surface it as an open question. Do not silently pick a side.

**For a family locale, also decide where each term/voice change belongs:** locale-specific
(this variant only) or family-wide (true of every locale in the family). Default to
locale-specific unless you have real evidence it holds across the whole family; a term
never appears in both the family file and a locale file at once (see `CLAUDE.md` §
Language families).

## Step 4: Propose changes (gate before writing)

Present, clearly separated:

1. **Proposed glossary delta**, one row per term:
   `English | proposed target | rationale | confidence`
   These are proposals. Do **not** edit `glossary.md` until the operator agrees. For a
   family locale, say which file (`languages/<family>/glossary.md` or
   `languages/<lang>/glossary.md`) each row would land in.
2. **Proposed guide edits**: show exact edits; apply once confirmed. For a family locale,
   say whether an edit belongs in the family guide or the locale guide.

Wait for the operator's agreement before writing anything.

## Step 5: Apply agreed changes

Once agreed:

- Write the agreed rows into `languages/<lang>/glossary.md`, or into
  `languages/<family>/glossary.md` if the operator agreed it is family-wide. If a term
  moves from locale to family, remove it from the locale file (and from any sibling
  locale's file, if it was duplicated there) so it lives in exactly one place.
- **Append; do not rewrite.** Follow "Glossary writes are additive" in
  `global/workflow.md` for what may be corrected and what is protected. Read
  `languages/<lang>/glossary-notes.md` before changing any existing row, and append an entry
  to it after: what changed, why, that this thread (`t/$topic`) settled it, and which terms
  it covers. List any previously unconfirmed row you corrected in the Step 8 report.
- Apply the agreed guide edits to `languages/<lang>/guide.md` or `languages/<family>/guide.md`.
- Keep every change in its correct file per the "one home" rule in `CLAUDE.md`.

## Step 6: Hand the files to the orchestrator

There is no review site and nothing to publish or deploy. The pinned glossary post links to
`languages/<lang>/glossary.md` on GitHub (and, for a family locale, to the family file too), so
the change is live for reviewers the moment this repo is **committed and pushed**. That is the
orchestrator's job, not this command's. Stop here, list the files you changed, and say that the
reply in Step 8 must not go up until the push has landed: a reply that links to a file still
showing the old terms tells reviewers nothing changed.

**If any change was written to a family file, every sibling locale is affected**: list them, so
that each one's pinned topic gets a reply.

## Step 7: Check the pinned post still points at the glossary

The post body is a static pointer, identical for every language bar its name and its links,
printed by `./scripts/glossary-post-body <lang>`, which is its one home. It does not change
when terms do. It only needs rewriting if the live post has drifted from that:

```bash
./scripts/glossary-post-body <lang> --diff
```

prints nothing when they match. If they differ, show the operator the diff and, once
confirmed, run `./scripts/glossary-post-body <lang> --push`. Never retype or paraphrase the
body here. If `glossary.post_id` is null in `languages/<lang>/tracking.json`, warn the operator
and skip this step.

## Step 8: Report, then reply on the pinned glossary topic

Report: which glossary rows were written, which guide edits were made, which unconfirmed rows
were corrected (with their old values), any unresolved disagreements left open, and which
sibling locales are affected. Also say, where you can tell, how widely an old term is used in
what is already translated: whether existing pages are then corrected is decided case by case,
per "After a glossary change" in `global/workflow.md`, and never by this command.

The reply is required whenever a glossary changed, per "A glossary change (commit, push,
reply)" in `global/workflow.md`, which says what the body covers. It is written in English,
per "Forum posts are written in English" in the same file. Draft it, show it, and post **only
after the orchestrator confirms the push has landed and the operator confirms the body**:

```bash
./scripts/post-glossary-reply <lang> <body-file>
```

If `$topic` **is** this language's `glossary.topic_id`, that one reply covers both the thread
and this step; do not post twice. If it is a different thread (and the operator confirms), also
reply there so the people who raised it see it actioned:

```bash
./scripts/reply-to-thread <topic-id> <body-file>
```

For a family-file change, reply on every sibling locale's pinned topic. If the operator does
not confirm, say in the report that the change is committed but unannounced.
