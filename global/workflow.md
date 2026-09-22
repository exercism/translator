# Governing a translation pass

This file owns everything **around** a translation pass: how new terms are agreed, how
glossaries are written and attributed, how to find the translated file a reviewer means,
what may overwrite it, what happens after a glossary changes, how a language's forum
bookkeeping is recorded, and who runs git.

**The pass itself lives in two files.** `global/translating.md` is the craft: the numbered
steps, the mandatory self-review, and how an edited English text is revised rather than
recreated. `global/pass-mechanics.md` is the plumbing: the one mode, where English comes
from, prompt order, checking, stamps, the dry run. Nothing about doing the translation is
restated here.

**Nothing that translates reads either of those two as instructions to act on, or this one at
all.** `translating.md` reaches the model inside the prompt; `pass-mechanics.md` is carried
out around it by `scripts/translate.mjs`. This file is for the passes that govern: the
orchestrator and the governance commands (`/action-forum-post`, `/update-guide-and-glossary`,
`/announce-glossary-change`, `/bootstrap-language`, `/fix-translation`).

## Agreeing new terms

**No translation pass proposes a term.** The model returns the translation and nothing else,
there is nowhere for a proposal to go, and nothing asks for one. New terms come from native
speakers reading the live website and posting on the forum, and that feedback is worked into
the glossary by `/action-forum-post` and `/update-guide-and-glossary`, which propose a delta,
show it to the operator, and write only what is agreed.

Once agreed, the rows are written into `languages/<lang>/glossary.md` as a separate, agreed
step. Only after that are those terms authoritative for future passes. The point is the gate,
not the editor: every glossary change is pre-agreed, and nothing is written to a glossary
inline during a translation pass. This keeps the glossary from drifting and keeps a
decision-maker in the loop on every new term.

A glossary may also hold a clearly separated **"Proposed, not yet agreed"** block. It exists
for one case: a glossary adapted from Jiki's, which needs Exercism's product vocabulary before
anybody who speaks the language has looked. (A freshly bootstrapped language has no such
block: `/bootstrap-language` writes in only what the owner agreed.) Rows there are
an agent's proposals. They are in the glossary file, so a pass does use them (a consistent
draft beats an inconsistent one), but they are unconfirmed drafts in the sense of rule 1
below, and the block's heading says so to every native speaker who opens the file. A row
leaves the block for an agreed section only on a native speaker's say-so, logged in the
decision log.

## Glossary writes are additive

**A pass appends. It never silently overwrites or deletes an existing row.** A row may
record a decision a human native speaker made on the forum, and that decision outranks any
agent's opinion, however confident the agent is and however much better its own rendering
reads to it. So the default operation on a glossary is "add the rows that are missing", not
"rewrite the table".

Deleting a row, merging two rows, or renaming an English term is a change to an existing
decision, not an addition, and goes through the same explicit agreement as changing a
target rendering.

**A prune is that agreement, given once, for a batch.** When the owner has authorised
removing ordinary vocabulary from a glossary, deleting rows *is* the task, and an agent
doing it is following the rule rather than breaking it. What the rule still forbids, and
what a prune must respect, is removing a row the decision log records a native speaker
deciding. Those stay whatever the pruning agent thinks of them. The authorisation must be
current and explicit: it is never inferred from the fact that a glossary looks bloated.

This binds every pass that writes a glossary (the governance commands, and hand edits). A
translation pass never writes one at all, and never proposes a row either: see "Agreeing new
terms" above.

### The decision log: `languages/<lang>/glossary-notes.md`

Which rows are protected is recorded in **`languages/<lang>/glossary-notes.md`**, the
language's decision log. It records what changed, why, who decided it, and where (the forum
topic or post). A glossary row holds a decision; the notes hold the reasoning, which is what
a later pass actually needs in order to know whether it may touch that row.

The file is **append-only and reverse-chronological**, newest entry first, and every entry
names the terms it affects so a pass can tell whether a given row is covered. An existing
entry is never edited or deleted: a decision is revised by adding a new entry above it that
says so. It carries decisions and nothing else: the rules for keeping it are the two below,
and they are never copied into it.

Under the dated entries, and last in the file, sits a **`## Term rationale`** section: a
non-chronological reference of why individual glossary rows read as they do, grouped by the
glossary's own section headings. Most per-term reasoning dates from the language bootstrap
rather than from a decision anyone made on a day, so it is not given a fake date, and
keeping it out of the dated run leaves those entries scannable. It never repeats reasoning a
dated entry already carries; where the two would overlap, the dated entry wins and the
rationale section leaves the term out. This is reference, not history, so it may be edited
in place; the dated entries above it may not.

The **glossary's own `Notes` column carries only what a translator must act on** (usage
constraints, which form goes where, collisions to avoid, register). Why a term was chosen,
what was rejected, and where it came from live here instead. The glossary is loaded by every
worker on every item in every language; the notes are loaded by nobody but a reviewer and
the passes that write a glossary.

**Only decisions about the language belong in it.** Every entry has to be something a
future translator needs in order to use a term correctly, or to judge whether it may change
one. Changes to how this repo works, to file formats, or to tooling are not decisions about
the language: they are noise to everyone who reads the log later, and they belong in the
commit that made them. The test is whether a native speaker reviewing the language would
care.

Nor does the **absence** of a decision earn an entry. Rule 1 already says that a term no
entry mentions is an unconfirmed draft, so recording "nothing here has been confirmed yet"
states what the empty log already says. It follows that a language with no decisions has no
notes file at all, which is the normal state for a language nobody has reviewed.

**Two rules bind every pass:**

1. **A pass that changes a glossary reads the notes first, and appends an entry after.**
   Before changing an existing row, read `glossary-notes.md`. If an entry records a **human**
   deciding that term, it is settled: it changes only by fresh agreement with a human, raised
   where it was settled. If nothing in the notes mentions the term, it is an **unconfirmed
   draft**, and the pass may correct it, provided it appends an entry saying what it changed
   and why. Adding a row is likewise an entry.
2. **A translation pass never loads the notes file.** It loads `glossary.md` and needs the
   term, not the argument that produced it. The notes are history, and paying to read them on
   every run, across every language, is waste. They are for the passes that *write* a
   glossary (the governance commands and hand edits), not the ones that read it.

The notes sit beside the glossary on GitHub, and the pinned forum post points reviewers at
both, so they see not just the terms but who settled each one and why, and which ones nobody
who speaks the language has ever checked. Write them knowing native speakers will read them.

### What a pass may change

- **Add a row** for a newly agreed term, and log it.
- **Correct an unconfirmed row**, one the notes record no human decision for, when the
  existing rendering is wrong (a mistranslation, a register clash, an inconsistency with
  another agreed term, a copy-paste artifact from another language's template). Correcting an
  unconfirmed draft is doing the right thing, not overruling anyone. **The pass reports every
  such correction**, with the old value and the reason, and logs it in the notes so a human
  can push back.
- **Never change a human-decided row unilaterally.** Not the target, not the `Use` column, not
  the meaning of the Notes. If such a row looks wrong, leave it exactly as it is and raise it:
  surface it in the pass report and, where the pass has a forum thread in hand, as a question
  on that thread. It changes only once a human agrees, and that agreement is logged with the
  topic where it happened.
- **Record a confirmation** when a native speaker confirms an existing row on the forum. The
  rendering does not move, but the row becomes protected, which is a real glossary change: log
  it and follow "A glossary change (commit, push, reply)" below.

A language with no notes file has no recorded human decisions at all, so every row in it is an
unconfirmed draft. That is the honest reading of an unattributed row, and it is never evidence
that a human agreed something.

Family glossaries work the same way, per `CLAUDE.md` § Language families. A decision about a
row in `languages/<family>/glossary.md` is logged in the family's own
`languages/<family>/glossary-notes.md`, and a human decision there is confirmed for the whole
family, so it is protected from every sibling locale's passes, not just from the one that is
running.

Two more rules bind a pass that writes a **family** file. **Default a new term to the locale
file**; only move it up to the family file once it is confirmed identical across every locale
in the family, not merely assumed to be. And treat any edit to a family file as affecting
**every** sibling locale, not just the one in front of you: reply on each sibling's pinned
topic, per "A glossary change" below.
`/bootstrap-language` for a new locale of an existing family only researches and drafts that
locale's delta; it does not re-litigate the family's shared content unless there is a specific
reason to think it is wrong for the new locale too.

## Keeping guidance in its lane

`CLAUDE.md` lists which file owns which kind of guidance. When you edit any of them, these
are the mistakes to avoid. Before adding anything, ask "does this already live somewhere
else, and is this the right file for it?"

- **Do not duplicate between a guide and its glossary.** The guide explains *how to write*;
  the glossary lists *which term to use*. Term decisions go in the glossary; the guide points
  to it, it does not restate mappings.
- **Do not put general guidance in a language guide.** Anything true across languages
  (audience, tone, translate-intent-not-words, titles/CTA/acronym principles) belongs in
  `global/voice.md`. A language guide only *realizes* those principles with
  language-specific rules and examples.
- **Do not restate global rules** in a content-type how-to, a language guide, or a command.
  Reference them instead. If a rule is universal, it lives in `global/`.
- **Do not put style prose or rationale in the glossary.** Its `Notes` column carries only
  what a translator must act on. Tone, grammar, "how to phrase" guidance, and the reasoning
  behind a term all live elsewhere (see "The decision log" above).
- **Do not restate translation rules in the commands** (`.claude/commands/*`). Commands are
  thin plumbing: they resolve paths and defer every rule to the context files.
- **Do not put rules about a file inside that file.** A content file holds content; the rules
  for writing it live in `global/`.

If you find duplication that already exists, remove it: keep the canonical copy in the file
that owns it and replace the other with a reference.

## Finding the file a reviewer means

Reviewers name what they saw: an exercise, a concept, a track's docs page, a page of the
docs site, a blog post, an analyzer comment, or a piece of the website itself. A translated
whole file sits at `locales/<locale>/content/<ab>/<cd>/<rest>.<ext>` in `../i18n`, under the
git blob id of its English, so its path says nothing about what it translates. Never search
`locales/` for the reviewer's phrase, and never work out a blob id by hashing English
yourself. `i18n`'s translation index does the lookup. Its `CLAUDE.md` section "The
translation index" and `scripts/lib/translation-index.mjs` describe it.

### A whole file

1. Work out the source repo and the English path in it. The main shapes:

   | The reviewer saw | Repo | English path |
   |---|---|---|
   | an exercise's instructions, introduction or hints | the track (`ruby`) | `exercises/{practice,concept}/<slug>/.docs/<file>.md`, including `instructions.append.md` and `introduction.append.md` |
   | a concept | the track | `concepts/<slug>/{about,introduction}.md` |
   | a track's docs page | the track | `docs/<name>.md`, or `exercises/shared/.docs/<name>.md` |
   | a problem description | `problem-specifications` | `exercises/<slug>/{description,instructions,introduction}.md` |
   | a page of the docs site | `docs` | `<section>/<...>.md` (`using`, `programming`, `community`, `mentoring`, `building`) |
   | a blog post or story | `blog` | `posts/<slug>.md`, `stories/<slug>.md` |
   | an analyzer comment | `website-copy` | `analyzer-comments/<track>/<...>.md` |

   A track's practice exercise usually carries the same instructions as
   `problem-specifications`, with the same blob id, so both indexes point at the same file.

2. Read `../i18n/index/json/<locale>/<repo>.json`. Its `paths` object lists every
   translatable English path in that repo. Each path maps to the blob ids of the English
   this locale holds a translation for, newest first, at most six, so the first id names the
   latest translation. Its `names` object gives each exercise, concept or page its English
   and localised name, which helps when a reviewer uses the translated name. An empty list means the path
   has no translation yet, so there is nothing to fix. A repo or path missing from the index
   (an inactive track is not indexed, for example) means the same; stop and report it.

3. Build the file's path from the id: `../i18n/locales/<locale>/content/` then the id's first
   two characters, `/`, the next two, `/`, the remaining thirty-six, and the English path's
   own extension (`.md`, or `.json`). This prints every file one path has, latest first:

   ```bash
   node -e 'const fs = require("fs"), path = require("path");
   const [locale, repo, file] = process.argv.slice(1);
   const index = JSON.parse(fs.readFileSync(`../i18n/index/json/${locale}/${repo}.json`, "utf8"));
   for (const id of index.paths[file] ?? []) console.log(`../i18n/locales/${locale}/content/${id.slice(0, 2)}/${id.slice(2, 4)}/${id.slice(4)}${path.extname(file)}`);' \
     hu ruby exercises/practice/two-fer/.docs/instructions.md
   ```

   `index/markdown/<locale>/<repo>.md` shows the same links for reading on GitHub. It is
   generated from the JSON, so read the JSON and never edit either by hand.

4. Confirm the reported text is in that file before changing anything. Reviewers read the
   live website, which serves the translation of the English the student is looking at. That
   is usually the latest. A student working on an older solution can see an older version of
   an exercise, and with it an older translation. If the reported text is not in the latest
   file, check the older ids in the same list, in order, and fix the file that holds it. Then
   look for the same passage in the latest file and fix it there too if it reads the same,
   because new students see the latest. If the text is in none of them, stop and report
   what you found.

### A name, a blurb or a website string

The index covers whole files only.

- Exercise, concept and track names, blurbs, docs page titles and blog post titles are units
  in `../i18n/locales/<locale>/metadata/<repo>.json`, under keys such as
  `exercise:two-fer:name` and `exercise:two-fer:blurb`. `content-types/metadata.md` lists
  where each comes from.
- The website's own UI strings are keys in
  `../i18n/locales/<locale>/website/backend.json` or `frontend.json`. Find the key from the
  English in the website checkout (`config/locales/**/*.yml` for the backend,
  `app/javascript/i18n/en/*.ts` for the frontend). A frontend key contains a `:`.

`node scripts/locate.mjs <source> [<track>] <locale> --key=<unit id>` prints the catalog a
key lives in, and whether the locale has it.

### Checking a hand edit

A hand edit is checked before it is reported done, and it must come back clean.

- A catalog key: `node scripts/locate.mjs <source> [<track>] <locale> --key=<unit id> --check`.
- A whole file: `node scripts/locate.mjs <source> [<track>] <locale> <english path> --check`
  (for example `track ruby hu exercises/practice/two-fer/.docs/instructions.md`). It checks
  the translation of the English at the source checkout's `origin/main`, so first make sure
  the `blob id:` it prints is the id of the file you edited. For any other id (an older
  translation, or English that changed after the last pass), run
  `node scripts/validate.mjs <locale> --type=content --content-repos=<source checkout>` in
  `../i18n` and read every line that names your file's `content/<ab>/<cd>/<rest>` path. Pass
  the sibling checkout (`../ruby`) or this repo's `.source/<name>`. It finds English by blob
  id anywhere in that checkout's history.

A check never writes a stamp: a catalog unit's English did not change, so neither does its
stamp, and a content file has none.

## A forum fix overwrites the file

There is no review site and no formal review process. Reviewers read the **live website**
and post ad-hoc corrections on the forum. A correction to one page is applied to the
translated file itself, by `/fix-translation` (or by `/action-forum-post`, which follows the
same steps), after finding the file as described in "Finding the file a reviewer means"
above.

**That overwrites a blob-keyed file, and it is allowed.** The `i18n` repo's rule is that
nothing under `locales/` is ever **deleted**. It is not that a file is immutable. A blob id
pins which English a file translates, forever; it does not pin the translation's wording. An
update in place passes `no-deletions`, and the published object sits at a stable path
precisely so that it can be corrected.

Three things follow:

- **One blob id serves every track whose English is byte-identical**, so a fix to a practice
  exercise's instructions fixes them for every track that carries them. That is nearly always
  what the reviewer wants, and the report says when it applies.
- **A fix survives the next English edit**, because the next version is translated with the
  live translation given as the previous version ("When a previous version is given" in
  `global/translating.md`). This is what replaces Jiki's per-item reviewer notes, which this
  repo does not have: the corrected text is itself the record.
- **A term is not a one-off.** If the reviewer is really saying "we call this Y", fixing one
  file is the wrong tool: the glossary changes first, by the governance commands, or the next
  text that uses the term is translated the old way.

A hand edit is checked before it is reported done ("Checking a hand edit" above).

## After a glossary change

A glossary or guide change does not alter any English, so nothing becomes "absent" and **no
pass will revisit what is already translated**. There is no `all` mode to reach for, by
design: re-translating a locale wholesale costs real money and churns wording that native
speakers have read and corrected.

So what happens to existing translations is **decided case by case**, by iHiD with the
orchestrator, from two options:

- **Forward-only.** The new term applies to everything translated from now on. Existing pages
  keep the old wording until their English is next edited or a reviewer flags them. Right for
  a nuance, a rare term, or a preference.
- **A targeted re-run.** The pages that use the old term are found and corrected. Right when
  the old rendering is wrong, or so visible that two wordings side by side would look broken
  (a product term such as "track" or "mentor"). A clean literal swap is an opus hand-edit
  across the affected files, each one adjusted for agreement and case and checked as in
  "Checking a hand edit" above, never a blind regex. Where a page needs more than a swap it
  is retranslated and the file overwritten: move the old file out of the repo, run the normal
  command (which now finds it absent), compare the two, and commit. Git sees a modification,
  never a deletion. TODO(iHiD): there is deliberately no script for that last step until it
  has been needed once.

The command that changed the glossary reports how widely the old term is used, where it can
tell. It never starts either option itself.

## Judgment work stays with the orchestrating model

DeepSeek is a pure X to Y text-translation tool: given a bounded stretch of source text, it
returns it translated, and that is all it is trusted to do. Anything that needs structural
judgment (classifying forum feedback, deciding which file a reviewer means, correcting one
sentence of a live page, deciding whether a glossary row may change) is done by an opus
worker or by the governance commands, never by the engine.

**A failed item is a failed item.** If the provider errors, times out, or returns output the
checker rejects, `scripts/translate.mjs` retries it and then leaves it absent and reports it.
It is never handed to an agent to translate by hand "to get the batch finished": that produces
text no one can tell apart from the engine's, written under none of the same checks.

The one exception is a queue issue the automated run labelled `needs-attention`, because the
checker rejected an item on every attempt and another run would pay for the same rejection.
`/fix-i18n-issue` gives each rejected file to one Opus subagent, which starts from the
rejected answer and the checker's errors, and the file only counts once the same checker
passes it.

## Route checking

**Run `node scripts/check-routes.mjs` whenever the `i18n` registry, a how-to or a command
changes.** It asserts that every content type in the `i18n` registry has a how-to, a command
that reaches it, and a script that can run it, and exits non-zero on any gap. A type with no
route produces no error, no failed run and no missing file, only a count that never moves.
Nothing runs the check automatically (this repo has no CI), which is why it is a step here.
The routes are declared in `scripts/lib/routes.mjs`, and a deliberate gap is declared there
too, with its reason, so the check can tell one from an oversight.

It asks rather than trusting the declaration: the type ids come from the `i18n` checkout's own
registry, and "can the script run this type?" is asked of `scripts/translate.mjs` itself
(`--list-types`).

## `languages/<lang>/tracking.json`

One language's machine-readable forum bookkeeping. There are **no language stages** (the
launch plan is one full pass per language, Hungarian first, and that pass is the tuning loop)
and **no engine field** (DeepSeek translates every language). There is no per-item approval
map either: there is no formal review process to record approvals from.

```json
{
  "category_slug": "i18n-hu",
  "category_id": null,
  "glossary": {
    "topic_id": null,
    "post_id": null,
    "ever_updated": false,
    "announced_through": null
  }
}
```

- `category_slug` / `category_id`: that language's subcategory under the parent i18n category.
- `glossary` holds the pinned glossary thread: its `topic_id` and `post_id`, whether the OP has
  `ever_updated`, and how far its changes have been `announced_through` (the heading of the
  newest decision-log entry already posted).

It is written by the forum scripts and by the orchestrator, never by a translation pass. Every
id is `null` until the forum category exists: see "What the forum API user needs" in
`orchestrator.md`.

## Forum posts are written in English

**Every post we make on the forum is written in English**, whatever language the thread is
about and whoever it is addressed to. Not the target language, and not bilingually with an
English translation appended below a separator.

Two reasons, and both are hard:

- **The owner has to be able to read everything that goes out.** A post in Hungarian is a
  post he cannot check before or after it lands, and forum posts are the one genuinely
  irreversible thing this repo does.
- **It matches the rest of the forum.** forum.exercism.org is an English-language forum:
  category names, thread titles (see "Naming a thread") and everything around a translation
  category are English, and reviewers are already reading it. A post that switches language
  mid-category reads as a different forum.

The one exception is **quoted material**: the specific words under discussion stay in the
target language inside an otherwise English post, because they are the thing being asked
about. A glossary term, a proposed rendering, a translated sentence a reviewer queried, an
example error message. Quote it as it stands and gloss what it means in English where that
helps. Do not translate the thing you are asking about into English and then ask about it.

Write the post in English from the start. An English post drafted as a translation of a
target-language one reads like a translation, and asks its questions at one remove.

## The forum

Structured like Jiki's: **a parent i18n category, one subcategory per language** (slug
`i18n-<locale, lowercased>`), and in each subcategory a **pinned glossary topic**.
`scripts/create-forum-language-category` makes a subcategory and its pinned "Want to Help"
topic; `scripts/create-forum-glossary-post` makes the pinned glossary topic and records its
ids in `tracking.json`. Neither is run by a translation pass, and **both need rights on
forum.exercism.org that have not been verified** (`orchestrator.md`).

### Naming a thread

Every thread we open that asks a language's speakers to look at something is titled
**`[<Language> Review] <what>`**, using the English language name from
`languages/names.json`: `[Hungarian Review] Glossary`. A category then reads as a list of
things waiting for a look, and a reply notification says which language it is about without
anyone opening it. `scripts/create-forum-glossary-post` builds its title this way.

### Feedback arrives in threads reviewers start

Feedback always lands in the **language's own category**, never in a thread shared across
languages: a Turkish speaker cannot act on a report about Greek. We open exactly one thread
per language, the glossary's. Everything else is a thread a reviewer starts when they have
something to say about a page they were reading, and we act on it wherever it was posted.
Only the glossary thread is pinned: a category that pins everything has pinned nothing, and a
term agreed there is fixed everywhere at once.

### A glossary change (commit, push, reply)

A pass that changes a **glossary** (`/action-forum-post`, `/update-guide-and-glossary`, or a
hand edit) is not finished when the file is saved. A glossary change is a decision about the
language, and the people who have to live with it are on the forum, so it has to reach them.
Three steps, in order, none optional:

1. **Commit.** The orchestrator commits the glossary, the decision log and any guide change
   in this repo. If anything was written to a `languages/<family>/glossary.md`, every sibling
   locale is affected.
2. **Push.** The pinned post **links to the glossary file on GitHub** rather than carrying
   the table (`scripts/glossary-post-body` says why), so until the push lands the link still
   shows the old terms and nothing has changed for anyone reading it.
3. **Reply on the pinned glossary topic.** Run `/announce-glossary-change <lang>`, which
   works out what is new from the language's decision log, drafts the reply, and posts it
   once the operator has confirmed the body:

   ```bash
   ./scripts/post-glossary-reply <lang> <body-file>   # what that command ends up running
   ```

   How far a language has been announced is recorded as `glossary.announced_through` in
   `languages/<lang>/tracking.json`. The **orchestrator** writes that field after the reply
   lands, never the pass itself.

   Pushing alone is invisible: the pinned post body is a fixed pointer, so it does not change
   when terms do, and no reviewer re-reads a 100-row table looking for a diff. The reply is
   what tells them a decision was made. Cover, briefly: each term added, corrected or
   promoted (quote the row), why, and any question left open. Note any correction made to a
   previously unconfirmed row so a native speaker can object. Keep it short; the file is the
   detail.

   For a family-file change, reply on **each** sibling locale's pinned topic, since the
   decision now binds all of them.

**The reply body is confirmed by the operator before it is posted, always.** A forum post is
the one genuinely irreversible step in this repo: it notifies real people and cannot be
quietly undone. Permission to commit and push does not extend to it. Draft the body, show it,
wait. If the operator does not confirm, the change stays pushed and undeclared, and the pass
says so in its report.

If a language has no `glossary.topic_id` (null or absent), say so in the report and stop at
step 2 rather than opening a new topic; the pinned topic is created by
`scripts/create-forum-glossary-post`.

## Git belongs to the orchestrator

**Nothing invoked as a command or skill runs git.** Not `add`, `commit`, `push`, `pull`,
`checkout`, `stash`, `branch`, or any worktree operation, in any repo. Write your files,
leave them uncommitted, and list them in your report. The session a human is talking to
does the committing.

This is not about trust, it is about what a pass can know. Several runs can be in flight at
once (a track in one locale, the website in another, a forum fix beside them), each one
certain it is doing the right thing:

- **They race.** Two passes committing in the same checkout interleave, and one sweeps the
  other's half-finished work into its commit. `git add -A` is the sharp edge here, but
  even careful staging races on the index.
- **Every push to `i18n`'s `main` publishes.** Its `publish.yml` runs on push. One push per
  batch is a publish per batch; one per item is a site that churns all afternoon.
- **A pass cannot tell whether it is the top-level one.** This rule used to say "only the
  top-level pass touches git", and passes pushed anyway, correctly reasoning that they
  were a pass and were finishing. Nothing in a subagent's context distinguishes it from
  the session that spawned it, so the rule has to be one it can follow without knowing.

The orchestrator commits once, after everything has reported, with the whole change in
view. That is also the only point at which a sensible commit message can be written.

Two scripts here run a git command that changes anything, and a session, a command and a
skill are none of them:

- `scripts/source-checkout.mjs`, which only ever touches this repo's own gitignored
  `.source/`.
- `scripts/run-issue.mjs`, the queue's unattended path, run by
  `.github/workflows/translate-issue.yml` and never by a session. It commits in `../i18n`,
  pushes to `main` there and closes the issue, and it runs git in `../i18n` and `.source/`
  and nowhere else. The rule above is a rule about what an AGENT does, and this is a
  runner with no agent in it: there is no orchestrator on a GitHub runner to hand the
  commit to, and an uncommitted translation on an ephemeral runner is a translation paid
  for and thrown away.

`/fix-i18n-issue` is run by the orchestrator session itself, never from a
subagent, and its commit, push and dispatch steps are the orchestrator's own. The subagents it
dispatches write files and never run git.

No script runs git in a sibling SOURCE checkout: those are shared with live sessions, and
English is read from them as objects at a ref, never by checking anything out.

### Translated output lands in `i18n` as a direct commit to `main`

Translations are written into `../i18n` by `scripts/translate.mjs` (and hand edits by
`/fix-translation`), and the orchestrator commits them straight to `main` there, the same as
this repo: no branch, no PR. English does not live there at all, so an English fix is a
commit in a source repo and never an `i18n` one. The orchestrator:

```bash
cd ../i18n
git checkout main && git pull
node scripts/validate.mjs <locale> --content-repos=<the checkouts that were translated>
                                 # the same gate CI runs; reads only. Read the ERRORs, not
                                 # just the exit code: it gates on productionTargets alone
node scripts/build-index.mjs all --check   # the translation index matches its JSON
git add locales/<locale> index && git commit   # translate.mjs updates index/ with each pass
node scripts/no-deletions.mjs    # nothing removed under locales/
git push
```

Pushing to `main` is what publishes (`publish.yml` there). Never `git add -A` in `../i18n`
while a run is still writing there. A locale's first content arrives in the same commit that
adds the locale to `locales.json` `targets`.
