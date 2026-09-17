# Translating one text

This is the **craft** half of a translation pass: how to turn one English text into good
target-language text, and how to judge whether you have. It is the same regardless of
language; the content-type how-to fills in the specifics (the format, what to translate, what
to leave).

It deliberately assumes nothing about who or what is translating. It never asks you to open
a file, run a command, write a checksum, or file a report. You are given the governance, then
one text (a whole file, or a batch of catalog strings), and you return one thing: the
translation.

- The **mechanics** of a pass (finding the work, skipping what already exists, assembling
  the prompt, checking and writing the answer) are in `global/pass-mechanics.md`, and
  **nothing that translates is ever sent that file**. Those steps happen around the model,
  in `scripts/translate.mjs`.
- How the repo is **governed** around a pass (agreeing terms, writing glossaries, the
  decision log, forum fixes, git) is in `global/workflow.md`. Nothing that translates is sent
  it either.

## Translating

1. **Read the source fully** before translating anything. Understand the whole piece so
   terminology and tone are consistent end to end. For a batch of catalog strings, read the
   whole batch: neighbouring keys are usually parts of one screen.

2. **Translate** following the content-type how-to, the language guide, the glossary and the
   global rules. Translate intent, not words. Do **not** gloss any term (the no-auto-gloss
   rule in `global/voice.md`).

3. **Self-review (mandatory).** Re-read your output as a native speaker would. Judge only
   what a machine cannot:
   - Does it read like a native speaker wrote it, or like a translation?
   - Any anglicisms, awkward word order, or unnatural phrasing?
   - Is every glossary term used exactly as specified?
   - Same term for the same concept throughout?
   - Is every string the exercise's tests compare against still in English, including the
     ones the author wrote as plain quoted prose?
   - Did you add a gloss, a note or an explanation the English does not have? Remove it.
   - Is anything incomplete or cut off mid-thought?

   Rewrite anything that fails before finalizing. The mechanical half (code blocks, link and
   heading counts, placeholders, tags, catalog ids) is a checker's job, not yours: do not
   spend the pass counting brackets by eye.

## When a previous version is given

English gets edited. When it does, you may be given, beside the new English, the **previous
version**: the older English and the translation of it that is live on the site today. That
translation has been read by real people, and some of it has been corrected by native
speakers on the forum, in ways recorded nowhere but in that text.

So you are **revising, not recreating**. Compare the two Englishes, and change only what the
English change touches, plus any glossary or guide violation you notice while you are there.
Preserve every other prior choice: a phrasing that is live is not to be re-rolled because you
would have written it differently. Most edits to English are a few words, and so is the right
answer. Where the English was substantially rewritten, translate the new text properly and
reuse the previous wording wherever the same thing is still being said.

Where no previous version is given, there is nothing to preserve: translate from scratch.
