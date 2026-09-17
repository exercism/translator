# Translating one file

This is the **craft** half of a translation pass: how to turn one English file into good
target-language text, and how to judge whether you have. It is the same regardless of
language; the content-type how-to fills in the file-specific details (paths, format, what
to translate).

It deliberately assumes nothing about who or what is translating. It never asks you to open
a file, run a command, write a checksum, or file a report, so it reads the same to a fable
worker handed a prepared prompt and to an API engine handed the same material. Both return
one thing: the finished file.

- The **mechanics** of executing a pass (resolving the item, assembling the inputs, where
  the output goes, running the checker, stamping the source version) are in
  `global/pass-mechanics.md`, and **nothing that translates is ever sent that file**. Those
  steps happen around the model rather than inside it: `scripts/translate-prompt` does the
  half before, `scripts/translate-apply` the half after, and an API engine's harness does
  both. See "Translation engines" in `global/workflow.md`.
- How the repo is **governed** around a pass (agreeing terms, writing glossaries, the
  decision log, publishing, fan-out, git) is in `global/workflow.md`. Nothing that
  translates loads it either.

## Reviewer notes on previous versions

Some items carry a file of reviewer notes: the concrete changes native-speaker reviewers
asked for on earlier translations of **this** item, as a plain bullet list ("change
`labirint` to `lavirint` throughout"; "`Colocar instruções` reads awkward, use `escrever
instruções`"). It is permanent: bullets stay after their fix has landed, because a full
re-translation regenerates from the English source, the guide and the glossary, and would
otherwise quietly undo a fix that lives nowhere else.

Treat every bullet as binding, with the same weight as the glossary and the language guide,
not as background reading. Each bullet is a real speaker's judgement on this text, so it
outranks your own preference. Apply them all, whether you are translating from scratch,
updating a stale translation, or tidying.

If a bullet contradicts the glossary or the guide, follow the bullet for this item and say
so, so the conflict can be settled at the glossary level. Never edit that file during a
pass, and never treat it as a todo list to clear: it is documentation to honour on every
future pass.

## Translating

1. **Read the source fully** before translating anything. Understand the whole piece so
   terminology and tone are consistent end to end.

2. **Translate** following the content-type how-to, the language guide, the glossary, the
   reviewer notes on previous versions (where they exist), and the global rules. Translate
   intent, not words. Expand the source markup tags and strip them: render each
   `<define>X</define>` as the one-time gloss (per direction and format in
   `global/voice.md`, using its `info` hint when present), replace each
   `<literal>X</literal>` with its inner text verbatim, and leave **no**
   `<define>`/`<literal>` tags in the output. Do **not** gloss any term the source did not
   tag (the no-auto-gloss rule in `global/voice.md`).

3. **Self-review (mandatory).** Re-read your output as a native speaker would. Judge only
   what a machine cannot:
   - Does it read like a native speaker wrote it, or like a translation?
   - Any anglicisms, awkward word order, or unnatural phrasing?
   - Is every glossary term used exactly as specified?
   - Is every bullet in the reviewer notes on previous versions honoured, if there is such
     a file for this item?
   - Same term for the same concept throughout?
   - Did you gloss anything the source did not tag with `<define>`? Remove it.
   - Is anything incomplete or cut off mid-thought?

   Rewrite anything that fails before finalizing. The mechanical half (surviving tags,
   image, code-block and link counts, frontmatter keys, catalog key parity, VTT timings and
   cue counts) is a checker's job, not yours: do not spend the pass counting brackets by
   eye.

## Updating an existing translation

Where a translation already exists you are **revising, not recreating**. Change only the
passages the English change touches, plus any glossary or guide violations you notice while
you are there. Preserve every good prior choice: a phrasing a reviewer accepted, or simply
one that reads well, is not to be re-rolled because you would have written it differently.
Most updates are a few words.

## Tidy pass (edit-only review)

A tidy is a review of an **existing** translation by a native-speaker-minded editor. It
never re-translates from scratch, and a missing translation has nothing to tidy.

**Fix only these:**

- Grammar, conjugation, and vowel-harmony errors, including wrong suffixing of English
  identifiers.
- Anglicisms or translated-sounding phrasing a native speaker would stumble on.
- Glossary violations or inconsistent terminology.
- Anything the reviewer notes on previous versions ask for that the current translation does
  not do.
- Meaning errors against the English source.
- Guide violations (register, word order, em dashes).
- A stray `<define>`/`<literal>` tag that survived into the translation, or an auto-gloss
  the translator added where the source had no `<define>` (remove the parenthetical; see the
  no-auto-gloss rule in `global/voice.md`). Never **add** an un-tagged gloss during a tidy.

**Leave alone:**

- Any sentence that is acceptable native text, even if you would phrase it differently.
  Never restructure paragraphs or re-translate acceptable sentences.
- Code blocks, frontmatter keys, and Markdown structure. Do not alter `img` attributes
  except that faulty `alt` text may be corrected.
- Deliberate source devices (for example spelled-out code speech tied to code tokens); never
  smooth these away.
