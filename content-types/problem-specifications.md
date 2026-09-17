# Problem specifications

The canonical, language-neutral text of Exercism's practice exercises. Tracks sync their own
`.docs/instructions.md` and `.docs/introduction.md` from here.

| i18n type id | English, in `exercism/problem-specifications` |
|---|---|
| `problem-specification` | `exercises/<slug>/instructions.md`, `introduction.md`, and the older single-file `description.md` |

## Why this source goes first

A track that has synced an exercise holds a byte-identical copy of these files, so it has the
same git blob id, so **one translation made here is the translation for every such track**.
Translating this source before any track means the tracks then find most of their practice
exercises already held. `canonical-data.json` (the test cases) and `metadata.toml` (title and
blurb: fragment text, see `START-HERE.md`) are not part of this type.

## What is particular to these files

Everything in `content-types/exercise-docs.md` applies, and "Test-compared strings" applies
with full force: these are the files that define the strings eighty tracks' tests compare.

- **The text is language-neutral on purpose.** It never names a method, a type or a syntax,
  because it has to be true in Ruby, Haskell and Bash alike. Keep it that way: do not make an
  instruction more specific than the English ("return a list" must not become "return an
  array").
- **`introduction.md` is story, `instructions.md` is task.** The introduction is often a
  short piece of fiction that sets the scene (you work at a bakery, you are a bird watcher);
  translate it as natural narrative. The instructions say what to build; translate them
  precisely. `description.md` is the older form holding both.
- Example input and output appear in ` ```text ` blocks and in tables, and are reproduced
  exactly. A table's column headings are prose and are translated.
- Invented names of people and places in a story stay as written. The specifications use a
  deliberately international set of names, and test data often reuses them.
- Domain facts are translated as facts, not localised: a leap-year rule, a resistor colour
  code, a Scrabble letter value are what the tests encode, so they cannot change with the
  reader's country. Scrabble scores stay the English game's scores.
- Wordplay that the exercise depends on (a pangram, an isogram, an acronym, Pig Latin, a
  nursery rhyme the program must print) operates on English text. Explain it in the target
  language and leave the English specimen in English. Do not substitute a native pangram: the
  tests check the English one.
