---
description: Apply a reviewer's correction to one translated file or catalog key, and check it
argument-hint: <locale> <repo> <english-path> | <locale> <repo> --key=<unit id>
arguments: target
allowed-tools: Read, Edit, Bash
model: opus
effort: medium
---

IMPORTANT: If the arguments do not name a locale, a repo, and an English path or a key, STOP
and ask.

**Do not run git**, in any repo. See "Git belongs to the orchestrator" in
`global/workflow.md`.

A reviewer reads the live website and says, on the forum, that something is wrong: "in the
Hungarian Two Fer instructions, X should be Y". Translated files are filed under the git blob
id of their English, so nothing about the file's path says "Two Fer". This command finds that
file through `i18n`'s translation index, applies the correction, and checks the result.

- Raw arguments: `$ARGUMENTS`. Examples: `hu ruby exercises/practice/two-fer/.docs/instructions.md`,
  `hu docs using/faqs.md`, `hu ruby --key=exercise:two-fer:blurb`,
  `hu website --key=tracks.show.title`.
- The correction itself is in the conversation (the reviewer's words, relayed by the
  orchestrator). If it is not, stop and ask for it.

## Step 1: Find the file

Follow "Finding the file a reviewer means" in `global/workflow.md`. It covers a whole file
(through the index, including a reviewer who saw an older translation) and a catalog key.

- Nothing translated yet: there is nothing to fix. Say so and stop; the translate command for
  that source is what is needed.
- The reported text is in none of the files the index lists, or the arguments do not match an
  indexed path: print what you found and stop. Do not go looking in `../i18n` by hand, because
  a file found by searching for a phrase may be another exercise's.

## Step 2: Is it a one-off, or a term?

Read `global/workflow.md` § "A forum fix overwrites the file". In short:

- **A wording fix to this one text**: go on to Step 3.
- **A term that should change everywhere** (the reviewer is really saying "we call this Y"):
  that is a glossary change. Stop and say so; it goes through `/action-forum-post` or
  `/update-guide-and-glossary` first, because the next edit of this English file is translated
  from the glossary and would quietly undo a fix that lives only in the file.

## Step 3: Edit

Load `global/rules.md`, the language's `guide.md` and `glossary.md` (and the family's, for a
family locale), and the how-to for the file's content type (`START-HERE.md` maps each English
path to its how-to). Then make the reviewer's correction, and **only** that correction, with
the Edit tool:

- A whole file: edit the file Step 1 found. **This overwrites a blob-keyed file, and that is
  allowed.** "Never deleted" is not "immutable": the blob id pins which English the file
  translates, not its wording. Do not rename it, move it or create a second one.
- A catalog key: edit that key's value in its catalog. Touch no other key, and do not touch
  the `.meta.json` beside it: the English did not change, so neither does the stamp.
- Adjust the surrounding sentence only as far as the correction forces (agreement, case, an
  article). Leave every sentence the reviewer did not mention exactly as it is.
- A practice exercise's instructions, and any other English that is byte-identical across
  tracks, share one file. A wording fix is still right for all of them; say so in the report.

## Step 4: Check

Follow "Checking a hand edit" in `global/workflow.md`. The check must come back clean. If it
reports a problem, your edit broke something mechanical (a code span, a link label, a
placeholder): fix that and check again. Never leave a file edited and unchecked.

## Report

The path edited, which index entry led to it (the latest, or an older id and why), the before
and after of each changed passage, whether the file is shared, and the check's last line. The
orchestrator commits.
