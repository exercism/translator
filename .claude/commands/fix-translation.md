---
description: Apply a reviewer's correction to one translated file or catalog key, and check it
argument-hint: <source> [<track>] <locale> <exercise-or-path> [<file>] | --key=<unit id>
arguments: target
allowed-tools: Read, Edit, Bash
model: opus
effort: medium
---

IMPORTANT: If the arguments do not name a source, a locale and an item, STOP and ask.

**Do not run git**, in any repo. See "Git belongs to the orchestrator" in
`global/workflow.md`.

A reviewer reads the live website and says, on the forum, that something is wrong: "in the
Hungarian Bob instructions, X should be Y". Translated files are filed under the git blob id
of their English, so nothing about the file's path says "Bob". This command turns "track,
exercise, file, locale" into that file, applies the correction, and checks the result.

- Raw arguments: `$ARGUMENTS`, passed straight to `scripts/locate.mjs`. Examples:
  `track ruby hu bob instructions`, `track ruby hu basics about`, `docs hu using/faqs.md`,
  `website hu --key=tracks.show.title`, `track ruby hu --key=exercise:bob:blurb`.
- The correction itself is in the conversation (the reviewer's words, relayed by the
  orchestrator). If it is not, stop and ask for it.

## Step 1: Find the file

```
node scripts/locate.mjs $ARGUMENTS
```

- Exit 2 (`NOT TRANSLATED YET`): there is nothing to fix. Say so and stop; the translate
  command for that source is what is needed.
- Exit 1: it could not resolve the item. Print what it said and stop. Do not go looking in
  `../i18n` by hand: a file found by searching for a phrase may be another exercise's.
- Exit 0: it printed `absolute:` (a whole file) or `catalog:` and `key:`.

## Step 2: Is it a one-off, or a term?

Read `global/workflow.md` § "A forum fix overwrites the file". In short:

- **A wording fix to this one text**: go on to Step 3.
- **A term that should change everywhere** (the reviewer is really saying "we call this Y"):
  that is a glossary change. Stop and say so; it goes through `/action-forum-post` or
  `/update-guide-and-glossary` first, because the next edit of this English file is translated
  from the glossary and would quietly undo a fix that lives only in the file.

## Step 3: Edit

Load `global/rules.md`, the language's `guide.md` and `glossary.md` (and the family's, for a
family locale), and the how-to `locate.mjs` named under `type:`. Then make the reviewer's
correction, and **only** that correction, with the Edit tool:

- A whole file: edit the file at `absolute:`. **This overwrites a blob-keyed file, and that is
  allowed.** "Never deleted" is not "immutable": the blob id pins which English the file
  translates, not its wording. Do not rename it, move it or create a second one.
- A catalog key: edit that key's value in the catalog at `catalog:`. Touch no other key, and do
  not touch the `.meta.json` beside it: the English did not change, so neither does the stamp.
- Adjust the surrounding sentence only as far as the correction forces (agreement, case, an
  article). Leave every sentence the reviewer did not mention exactly as it is.
- If `shared-by:` was printed, or the file is a practice exercise's instructions, the same
  file serves other tracks. A wording fix is still right for all of them; say so in the report.

## Step 4: Check

```
node scripts/locate.mjs $ARGUMENTS --check
```

It must print `check: clean`. If it reports a problem, your edit broke something mechanical (a
code span, a link label, a placeholder): fix that and check again. Never leave a file edited
and unchecked.

## Report

The path edited, the before and after of each changed passage, whether the file is shared, and
the check's last line. The orchestrator commits.
