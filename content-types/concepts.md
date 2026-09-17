# Concept pages

The teaching pages of a track's syllabus. Each concept has two.

| i18n type id | English, in a track repo | Shown |
|---|---|---|
| `concept-introduction` | `concepts/<slug>/introduction.md` | before the student has done the concept's exercise |
| `concept-about` | `concepts/<slug>/about.md` | afterwards: the fuller reference version |

The two are separate files with separate blob ids and are translated separately, but they
cover the same ground. Use the same term for the same thing in both, which the glossary
already guarantees for every term it lists.

## What these files look like

- Plain Markdown, no frontmatter. An `# Introduction` or `# About` heading first.
- Short explanations alternating with code examples in the track's language. **Code blocks
  are reproduced byte for byte, comments and strings included.** A comment such as
  `# => "Some string"` shows what the code evaluates to; it is output, not prose.
- Heavy use of inline code for keywords, methods and literals (`nil`, `=`, `my_first_variable`)
  and of reference-style links to the language's own documentation.
- `~~~~exercism/note`, `caution` and `advanced` admonitions, whose prose is translated and
  whose fence lines are not.

## Translate

- The explanation. This is teaching text for someone meeting the idea for the first time in
  this language, who may be an experienced developer or may be new to programming. Favour the
  clear, ordinary word, per `global/voice.md`.
- Programming concepts by the glossary. Where the glossary keeps a term in English, keep it.

## Leave alone

- The language's own vocabulary where it is a token of the language: keywords, method names,
  class names, literal values, operators, and the names of tools (`irb`, `bundler`, `pip`).
- The name of the concept's own feature when it is the language's proper term and the
  glossary does not list it (Ruby's "symbol" is a glossary question; `Symbol`, the class, is
  code).
- Link labels, definitions and URLs. A link to English-language documentation stays pointing
  where it points: do not swap in a localised URL, even if you believe one exists.
