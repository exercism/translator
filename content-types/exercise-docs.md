# Exercise instructions and introductions

The prose a student reads when they open an exercise: what the task is, and (for a concept
exercise) the teaching text that introduces the concept first. This is the most-read content
Exercism has.

| i18n type id | English, in a track repo |
|---|---|
| `exercise-instructions` | `exercises/{practice,concept}/<slug>/.docs/instructions.md` |
| `exercise-introduction` | `exercises/{practice,concept}/<slug>/.docs/introduction.md` |

The output is one file per locale under the git blob id of the English file, in the `i18n`
repo. A practice exercise's instructions are usually synced, byte for byte, from
`problem-specifications`, so one translation serves every track that carries them.

## What these files look like

- Plain Markdown with **no frontmatter**. Do not add any.
- An `# Instructions` or `# Introduction` heading first. The website strips the H1 when it
  renders, but it is translated and kept, so the file stays structurally identical.
- **A concept exercise's instructions are split into tasks by their headings.** Each task is a
  heading of the form `## 1. Define the expected oven time`, and the website reads the leading
  number to join each task to its hints. Translate the words after the number. Keep the
  number, the dot and the space exactly, in the same order.
- Example input and output in fenced blocks, most often ` ```text `, and in tables.
- `~~~~exercism/note`, `~~~~exercism/caution` and `~~~~exercism/advanced` blocks. These are
  admonitions, not code: **translate the prose inside**, and reproduce the fence lines
  (the four tildes and the `exercism/...` word) exactly.
- Reference-style links: `[a constant][constants]` in the text, and `[constants]: https://...`
  at the foot of the file. Translate the first bracket (the link text). Never translate the
  second bracket (the label), the definition's label or its URL.

## Test-compared strings: the thing that matters most here

An exercise's tests compare what the student's code returns against exact English strings,
and the instructions are where the student learns what those strings are. Every one of them
stays in English, byte for byte, per "Test-compared strings" in `global/rules.md`. Translating
one makes the exercise unpassable: the instructions ask for one string and the tests demand
another.

They are not always in code formatting. Work out from context whether a string is something
the program must produce, accept or compare. Real examples:

- Bob's instructions list his five replies as bold quoted prose: `**"Sure."**`,
  `**"Whoa, chill out!"**`, `**"Fine. Be that way!"**`. They look like dialogue to translate.
  They are return values. Leave all five exactly as they are, and translate the sentences
  around them ("This is his response if you ask him a question").
- Two-fer's examples sit in a table: `| Alice | One for Alice, one for me. |`. The second
  column is what the function returns. The column headings (`Name`, `Dialogue`) are prose and
  are translated; the cells are not. The names in the first column are input and stay too.
- A quoted list of allowed values ("the colour is one of `black`, `brown`, `red`", or the same
  written as "black", "brown", "red") is a set of inputs or outputs. Every member stays.

A quoted English sentence that is only an illustration of what a person might say, and which
no program produces or receives, is prose. When you cannot tell, leave it in English: an
untranslated example is a blemish, a translated return value is a broken exercise.

## Translate

- All prose, headings (after any task number), list items, table headings, link text, image
  alt text.
- The story. Many exercises open with a small piece of fiction (a lasagna recipe, a bird
  watcher's log). Translate it naturally; keep invented proper names as they are.
- Exercise and concept names where the prose refers to them, using the translated name a
  student sees on the site.

## Leave alone

- Every fenced code block other than an `exercism/...` admonition, and every inline code span.
- Method, function, class, constant and variable names, anywhere.
- Link labels, link definitions, URLs, image paths.
