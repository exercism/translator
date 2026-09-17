---
description: Action a forum feedback topic. Turn a native speaker's correction into glossary and guide changes, and fixes to the files it names
argument-hint: <topic-id-or-url> [lang]
arguments: topic lang
allowed-tools: Read, Write, Edit, Glob, Bash
model: opus
effort: medium
---

**Do not run git.** No `add`, `commit`, `push`, `pull`, `checkout`, `stash`, `branch` or
worktree operation, in any repo. Write your files, leave them uncommitted, and list them in
your report. See "Git belongs to the orchestrator" in `global/workflow.md`.

Action a piece of community feedback from the translation forum. There is no review site and
no formal review process: native speakers read the **live website** and post ad-hoc
corrections (unnatural phrasing, a better word, wrong formality). This command reads that
discussion and turns it into concrete changes: agreed glossary terms, guide adjustments, and
corrections to the translated files the thread is about.

This is **thin plumbing plus a human gate**. All translation rules live in the context
files below; do not restate or reinvent them. Nothing is written to a glossary without the
operator's agreement (see `global/workflow.md`).

- `$topic` = a forum topic id (e.g. `239`) or a full topic URL
- `$lang` = optional language code. If omitted, infer it from the topic's category
  (`i18n-<lang>`).
- Raw arguments: `$ARGUMENTS`

If `$topic` is missing, stop and ask.

## Step 1: Fetch the topic

Credentials live in this repo's `.env` (`FORUM_BASE`, `DISCOURSE_API_KEY`,
`DISCOURSE_API_USERNAME`). Load them and pull the whole thread:

```bash
set -a; . ./.env; set +a
TID="<numeric id from $topic>"
curl -sSL -m 20 -H "Api-Key: $DISCOURSE_API_KEY" -H "Api-Username: $DISCOURSE_API_USERNAME" \
  "$FORUM_BASE/t/${TID}.json"
```

Read every post in `post_stream.posts`. If `post_stream.stream` lists more ids than are
included, fetch the rest via `"$FORUM_BASE/t/${TID}/posts.json?post_ids[]=..."` (batches of
20), same as `scripts/fetch-forum-topics`. Determine the language from the topic's
`category_id` (map it to the `i18n-<lang>` slug) unless `$lang` was given.

## Step 2: Identify what the feedback is about

From the thread, work out which page(s) of the website are under discussion: which track,
which exercise or concept, which file of it (instructions, introduction, hints), or which
part of the site's own UI. Reviewers link or name what they were looking at. Turn each into
its translated file with `node scripts/locate.mjs` (its header has the forms; never search
`../i18n` for a phrase, because the path of a translated file says nothing about what it
translates). If it is genuinely unclear which page or which language, stop and ask rather
than guessing.

## Step 3: Load context (read all, in order)

1. `global/rules.md`
2. `global/voice.md`
3. `global/translating.md` (how a text is translated, which is also how one is corrected)
4. `global/workflow.md` (the governance half: glossary writes, the decision log, what a
   forum fix may overwrite, announcing a change)
5. `content-types/<type>.md` for each content type the feedback touches
5. `languages/<lang>/guide.md` and `languages/<lang>/glossary.md`
6. If `<lang>` belongs to a language family (its code has a "-" and
   `languages/<family>/` exists, e.g. `es-419` -> `es`), also read
   `languages/<family>/guide.md` and `languages/<family>/glossary.md` — see
   `CLAUDE.md` § Language families for the shared-base/locale-delta split.
7. The English source and current `<lang>` translation of each discussed page, both found by
   `scripts/locate.mjs`

## Step 4: Classify the feedback

Sort every actionable point in the thread into exactly one bucket:

- **Term decision** → belongs in the glossary. A word that should be rendered a specific,
  consistent way (e.g. "iteration" → a specific target word).
- **Voice / style** → belongs in the language guide. Formality, register, word order,
  grammar preferences that apply broadly, not to one word.
- **One-off fix** → a local correction to one specific page with no glossary/guide
  implication.

Ignore chatter that is not an actionable change. If two native speakers disagree in the
thread and it is not resolved, surface it as an open question, do not silently pick a side.

**For a family locale, also decide where each term/voice decision belongs:** locale-specific
(this variant only) or family-wide (true of every locale in the family). Default to
locale-specific unless you have real evidence it holds across the whole family; a term
never appears in both the family file and a locale file at once (see `CLAUDE.md` §
Language families).

## Step 5: Propose changes (gate before writing)

Present, clearly separated:

1. **Proposed glossary delta**, one row per term (English | target | rationale |
   confidence). These are proposals. Do **not** edit
   `languages/<lang>/glossary.md` until the operator agrees in this session. For a family
   locale, say which file (`languages/<family>/glossary.md` or
   `languages/<lang>/glossary.md`) each row would land in.
2. **Proposed guide edits** to `languages/<lang>/guide.md` (the operator owns the guide;
   show the exact edits and apply them once confirmed). For a family locale, say whether
   an edit belongs in the family guide or the locale guide.
3. **One-off fixes** to a named file, which you will apply in Step 6.

Wait for the operator's agreement on the glossary rows and guide edits before writing
anything to those files. Keep each change in its correct file per the "one home" rule in
`CLAUDE.md`.

## Step 6: Apply

Once agreed:

- Write the agreed rows into `languages/<lang>/glossary.md`, or into
  `languages/<family>/glossary.md` if the operator agreed it is family-wide (removing the
  term from any locale file it previously lived in, so it stays in exactly one place), and
  apply the agreed guide edits to the matching guide file. **Append; do not rewrite.**
  Follow "Glossary writes are additive" in `global/workflow.md` for what may be corrected
  and what is protected. Read `languages/<lang>/glossary-notes.md` before changing any
  existing row, and append an entry to it after: what changed, why, that this thread
  (`t/$topic`) settled it, and which terms it covers.
- **Correct the files the thread is about, in place.** For each one, follow
  `.claude/commands/fix-translation.md` from its Step 3: edit the file `scripts/locate.mjs`
  resolved, make the reviewer's corrections and nothing else, and finish with
  `node scripts/locate.mjs ... --check`, which must come back clean. **This overwrites a
  blob-keyed file, and that is allowed**: see "A forum fix overwrites the file" in
  `global/workflow.md`. Never modify any English source, and never write or touch a stamp.
- **Do not re-run a translation.** There is no mode that retranslates what a locale already
  holds. Whether an agreed term change is also applied to the pages that already use the old
  term is a separate, case-by-case decision ("After a glossary change" in
  `global/workflow.md`): put what you found in the report (how widely the old term is used,
  if you can tell) and leave the decision to the orchestrator and iHiD.
- The pinned glossary post links to the glossary file on GitHub, so an agreed change is
  visible to the community only once the orchestrator has **committed and pushed this repo**.
  Say so in the report. If anything was written to a family file, every sibling locale's
  reviewers are affected too.

## Step 7: Report and reply

Output: what was reclassified, the glossary rows written, which `agent` rows were corrected
(with their old values), the guide edits made, the translated files corrected (with each before and after, and each
check's last line), and any unresolved disagreements.

Then draft the replies, in English even where the thread you are replying to is not, per
"Forum posts are written in English" in `global/workflow.md`. Do **not** post anything
automatically; show each body and post only what the operator confirms.

1. **The source thread**, summarizing what changed, so the reviewer sees their feedback
   actioned. Say that a correction reaches the live site once it has been committed and
   published, not instantly. Post with the reply script, never a hand-built API call:

   ```bash
   ./scripts/reply-to-thread <topic-id> <body-file>
   ```

2. **The pinned glossary topic**, if any glossary row changed. Required, per "A glossary
   change (commit, push, reply)" in `global/workflow.md`, which says what the body covers.
   It goes up only AFTER the orchestrator has pushed this repo, or its link shows the old terms.
   Reply on every sibling locale's topic if a family file changed:

   ```bash
   ./scripts/post-glossary-reply <lang> <body-file>
   ```

   If `$topic` already **is** this language's `glossary.topic_id`, one reply covers both; do
   not post twice.
