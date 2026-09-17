# Global translation rules

These rules apply to **every language and every content type**. They override nothing
in the language guides about *how* to phrase things, but they are absolute about *what*
may and may not be changed. When a content-type how-to or a language guide is silent,
these rules win.

## Never translate or alter

- **Code.** Anything inside fenced code blocks (` ``` `) or inline backticks is code and
  is reproduced byte for byte. This includes variable names, function names, keywords,
  CLI commands, file paths, and output. **Exception:** instructional *comments* inside a
  code block (e.g. `// get user data`) are prose and are translated; the code around them
  stays English.
- **Jikiscript / programming keywords.** Language keywords (e.g. `repeat`, `function`,
  `if`, `for`) stay in English everywhere, including inside prose. You translate the
  *explanation* around a keyword, never the keyword token itself.
- **Placeholders and interpolation.** Tokens like `{{name}}`, `{{count}}`, `%s`, `{0}`
  are reproduced exactly, including the braces and the inner name. Never translate the
  inner name, never add or remove placeholders, never reorder them in a way that breaks
  the surrounding syntax.
- **Catalog keys.** In key-based files (JSON, TS objects), translate the *value*, never
  the *key*.
- **The inapplicable marker `∅`.** Two markers can stand where a catalog value would be,
  and they are not the same thing. `�` (U+FFFD) means **not translated yet**: fill it.
  `∅` (U+2205 EMPTY SET) means **this key does not apply to this language and never
  will**: leave it exactly as it is, and never replace it with text, with `�`, or with
  an empty string. The case that produces it is a plural form the target language has no
  grammatical category for, which no count can ever select, so any string written there
  would be dead text. `∅` may also appear in the *English* source for the same reason:
  English carries the union of plural forms across every language, so a form English
  lacks sits there as `∅`. Where your language does have that form, the key is real work,
  and the text you are given to work from is that family's English `_other` form: write
  the form the KEY asks for (a key ending `_many` wants your language's many form), never
  a copy of the `_other` one and never `∅`. Which categories your language has is decided
  from CLDR, per language, by the tooling; see "A plural form English lacks is asked of
  the languages that have it" in `global/workflow.md`. Never emit `∅` on your own
  initiative: tooling writes it, and writes it only where it can prove the key is
  unreachable.
- **Sentinel values.** Where content tells a learner to produce an exact string, and
  something compares what they produced against it byte for byte (an exercise's expected
  return value, e.g. `Not on the list!` or `No table found`), that string is code wearing
  prose's clothes. Reproduce it verbatim everywhere it appears, in running prose and in
  catalog values alike, even while the sentence around it is translated. Translating one
  makes the item unpassable with no visible cause: the instructions ask for one string and
  the checker demands another.
  A sentinel is not always a sentence, and not always distinctive. It may be a single
  ordinary lower-case English word (`tie`, `none`, `left`) sitting in a quoted list of
  allowed values, which reads as translatable prose and is not. Nor does markup decide it:
  a sentinel wrapped in backticks or `<code>` and the same sentinel written in bare quotes
  are the same string to the checker, so the absence of code formatting is never evidence
  that a value is prose. When a value is one of a fixed set the learner must produce or
  pass to a function, treat every member of that set as a sentinel, however plain it looks.
- **Markdown structure.** Heading levels, list nesting, link targets, image paths, and
  table shape are preserved. You translate link text and prose, not URLs or paths.
- **Image alt text.** Translate the `alt=` value on `<img>` tags (it is human-facing
  prose). Leave all other `<img>` attributes (`src`, `class`, `width`, `height`) exactly
  as-is.
- **Frontmatter system fields.** `date`, `author`, `tags`, `slug`, `coverImage`,
  `featured`, and any boolean/identifier fields stay exactly as-is. Only human-facing
  frontmatter (`title`, `description`, `excerpt`, SEO copy) is translated.
- **Titles are translated, even one-word English ones.** A `title` is the item's name as a
  learner reads it, so an exercise called `Hello` gets a Hungarian, Japanese or Spanish
  name like every other exercise. A common English word in a title is not a reason to keep
  it. Do not confuse the title with a value the program produces or is checked against: a
  literal like `"Hello, Jeremy!"` in the body is a sentinel and stays verbatim (see above),
  while the title above it does not. The exceptions are proper nouns, named works,
  untranslatable wordplay, and terms the language's own glossary keeps in English.
- **Source markup tags.** `<define>X</define>` and `<literal>X</literal>` are structural
  markup, not prose. Any code or identifier inside them is never translated, and the tags
  themselves never appear in output: the pass expands and strips them. A `<define>` may
  carry an optional `info="..."` (an advisory meaning hint) or `en="..."` (the exact English
  gloss text, honoured verbatim) attribute; both are stripped with the tag and never reach
  output. How they expand, the `info`/`en` attributes, and the no-auto-gloss rule they
  enforce, are defined in `global/voice.md` and `global/translating.md`.

## Always

- **Translate intent, not words.** Match the meaning, tone, and emotion of the source,
  not its literal word order. Favor natural target-language phrasing over literal
  accuracy when they conflict.
- **Use the glossary.** Every term in `languages/<lang>/glossary.md` is used exactly as
  specified. If the source uses a glossary term, the translation uses the glossary's
  target term, every time, with no synonyms.
- **Stay consistent within a document.** One concept, one term, start to finish.
- **Name things by the name the reader sees.** When content names a UI element (a button, a
  tab, a menu item), use the label from that locale's own app catalog, because the reader is
  looking at the interface while they read. When content names another content item (an
  exercise, a concept page, a course), use that item's translated title. Leaving the English
  name sends the reader hunting for something that is not on their screen.
- **Preserve completeness.** No sentence left unfinished, no list item dropped, no
  section skipped. The translation has the same information as the source.
- **Never write the source stamp yourself.** Translated files record which version of the
  source they were made from, so staleness can be detected later, but that stamp is written
  by tooling once the mechanical checks pass. Leave the field out of your output entirely,
  and never invent a checksum. A fabricated stamp is worse than a missing one: it looks
  like a passed check and is not one.

## The Jiki voice

Jiki content has a deliberate, warm, beginner-friendly voice. "Jiki" is a character
(the friendly guide), and the writing uses concrete physical metaphors to explain
abstract ideas (an array is a "chain", a value goes in a "box", a machine has an "input
slot" and a "return chute"). These metaphors are **load-bearing teaching tools**, not
decoration. Translate them as metaphors that work in the target language and language
culture, and use the glossary's rendering wherever one is agreed, so every page carries the
metaphor the same way. Never silently drop a metaphor or replace it with dry technical
language.

## House style

- **No em dashes.** Do not use em dashes (—) in translated prose. Use separate sentences,
  commas, or parentheses instead. This applies to all languages and content types,
  including existing translations you revise.

## When unsure

If a term, metaphor, or construction is ambiguous and not covered by the glossary, **do not
guess carelessly**. Pick the reading you can most defend, apply it consistently through the
whole file, and keep it in register with the language guide. Consistency is what matters:
an ambiguity resolved the same way everywhere is one thing a reviewer can correct in one
pass, while the same word rendered three ways is three.

Your output is the translated file and nothing else. Do not add notes, caveats, questions
or a list of terms you were unsure about: nothing downstream reads them. Ambiguities that
need settling are settled with a native speaker on the forum, and the agreed wording is
written into the glossary there, not proposed from inside a translation.
