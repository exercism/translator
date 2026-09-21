# Global translation rules

These rules apply to **every language and every content type**. They override nothing
in the language guides about *how* to phrase things, but they are absolute about *what*
may and may not be changed. When a content-type how-to or a language guide is silent,
these rules win.

## Never translate or alter

- **Code.** Anything inside fenced code blocks (` ``` ` or `~~~`) or inline backticks is code
  and is reproduced byte for byte. This includes variable names, function names, keywords,
  CLI commands, file paths, output, and **comments and strings inside the code, even when
  they are English sentences**: nothing inside a code block is ever translated. A code
  block in the output must be identical to the code block in the input, or the file is
  rejected. The one kind of fence that is not code is an
  Exercism admonition, whose info string starts `exercism/` (`~~~~exercism/note`,
  `exercism/caution`, `exercism/advanced`): its fence lines are reproduced exactly and the
  prose inside it is translated. A code block inside an admonition is code again.
- **Programming keywords.** Language keywords (e.g. `def`, `function`, `if`, `for`) stay in
  English everywhere, including inside prose. You translate the *explanation* around a
  keyword, never the keyword token itself.
- **Placeholders and interpolation.** Tokens like `%{name}`, `{{name}}`, `{{count}}`, `%s`
  are reproduced exactly, including the braces and the inner name. Never translate the
  inner name, never add or remove placeholders, never reorder them in a way that breaks
  the surrounding syntax. Which syntax a given text uses is in its content-type how-to.
- **Catalog keys.** In key-based catalogs, translate the *value*, never the *key*.
- **Test-compared strings.** Where content tells a student to produce an exact string, and
  the exercise's tests compare what their code produced against it byte for byte (an expected
  return value, e.g. `One for you, one for me.` or Bob's `Whoa, chill out!`), that string is
  code wearing prose's clothes. Reproduce it verbatim everywhere it appears, in running
  prose, in tables and in catalog values alike, even while the sentence around it is
  translated. Translating one makes the exercise unpassable with no visible cause: the
  instructions ask for one string and the tests demand another.
  **English authors often write such a string as plain quoted prose**, in bold, in a list or
  in a table cell, with no code formatting at all. You are not shown the tests, so work out
  from context whether a quoted string is something the program must return, print, accept or
  compare, and if it is, leave it alone.
  A test-compared string is not always a sentence, and not always distinctive. It may be a single
  ordinary lower-case English word (`tie`, `none`, `left`) sitting in a quoted list of
  allowed values, which reads as translatable prose and is not. Nor does markup decide it:
  a string wrapped in backticks and the same string written in bare quotes are the same
  string to the tests, so the absence of code formatting is never evidence that a value is
  prose. When a value is one of a fixed set the student must produce or pass to a function,
  treat every member of that set as test-compared, however plain it looks. When you cannot
  tell, leave it in English: an untranslated example is a blemish, a translated return value
  is a broken exercise.
- **Markdown structure.** Heading levels, list nesting, link targets, image paths, and
  table shape are preserved. You translate link text and prose, not URLs or paths. In a
  reference-style link, `[text][label]` with `[label]: https://...` elsewhere in the file,
  the text is translated and the label, in both places, is not.
- **Image alt text.** Translate the `alt=` value on `<img>` tags (it is human-facing
  prose). Leave all other `<img>` attributes (`src`, `class`, `width`, `height`) exactly
  as-is.
- **No frontmatter.** Exercism's Markdown files carry none, so a translation carries none.
  Never add a frontmatter block, a title the English does not have, or a note of your own.
- **Titles are translated, even one-word English ones.** A title is the item's name as a
  student reads it, so an exercise called `Leap` gets a Hungarian, Japanese or Spanish name
  like every other exercise, and so does a track. A common English word in a title is not a
  reason to keep it. Do not confuse the title with a value the program produces or is
  checked against: a literal like `"Hello, World!"` in the body is test-compared and stays
  verbatim (see above), while the title above it does not. The exceptions are proper nouns
  (which is what most programming languages' names are), named works and algorithms,
  untranslatable wordplay, and terms the language's own glossary keeps in English.

## Always

- **Translate intent, not words.** Match the meaning, tone, and emotion of the source,
  not its literal word order. Favor natural target-language phrasing over literal
  accuracy when they conflict.
- **Use the glossary.** Every term in `languages/<lang>/glossary.md` is used exactly as
  specified. If the source uses a glossary term, the translation uses the glossary's
  target term, every time, with no synonyms.
- **Stay consistent within a document.** One concept, one term, start to finish.
- **Name things by the name the reader sees.** When content names a UI element (a button, a
  tab, a menu item), use the label the website's own catalog gives it in this language,
  because the reader is looking at the interface while they read. When content names another
  content item (an exercise, a concept, a track), use that item's translated title. Leaving the English
  name sends the reader hunting for something that is not on their screen.
- **Preserve completeness.** No sentence left unfinished, no list item dropped, no
  section skipped. The translation has the same information as the source.
- **Never write a stamp, a hash or a checksum.** Nothing you output carries one. Which
  English a translation belongs to is recorded by tooling, and a fabricated hash is worse
  than none: it looks like a passed check and is not one.

## House style

- **No em dashes.** Do not use em dashes (—) in translated prose. Use separate sentences,
  commas, or parentheses instead. This applies to all languages and content types,
  including existing translations you revise.

## When unsure

If a term or construction is ambiguous and not covered by the glossary, **do not guess
carelessly**. Pick the reading you can most defend, apply it consistently through the
whole file, and keep it in register with the language guide. Consistency is what matters:
an ambiguity resolved the same way everywhere is one thing a reviewer can correct in one
pass, while the same word rendered three ways is three.

Your output is the translated text and nothing else. Do not add notes, caveats, questions
or a list of terms you were unsure about: nothing downstream reads them. Ambiguities that
need settling are settled with a native speaker on the forum, and the agreed wording is
written into the glossary there, not proposed from inside a translation.
