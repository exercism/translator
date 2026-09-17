# Track docs and shared exercise docs

The practical pages of a track: what the language is, how to install it, how to run the tests,
where to get help.

| i18n type id | English, in a track repo |
|---|---|
| `track-docs` | `docs/*.md`: `ABOUT.md`, `INSTALLATION.md`, `LEARNING.md`, `RESOURCES.md`, `TESTS.md`, and whatever else the track's `docs/config.json` lists |
| `exercise-shared-docs` | `exercises/shared/.docs/*.md`: `help.md`, `tests.md`, `debug.md`, appended to every exercise's README and shown beside the exercise |

`docs/SNIPPET.txt` is code and is not translated. A docs page's title and blurb live in
`docs/config.json` and are not part of this type (see the note on fragment text in
`START-HERE.md`).

## These pages are instructions a student follows at a terminal

- **Commands are reproduced exactly.** Every fenced block, every inline command, every flag,
  every path. That includes a leading `$` prompt and any output shown.
- **A placeholder the student must replace stays as written**, angle brackets included:
  `ruby <snake-case-exercise>_test.rb`. Translate the sentence that tells them to replace it
  ("Please replace `<snake-case-exercise>` with your exercise name"), not the placeholder. It
  is often a filename pattern and a translated one names a file that does not exist.
- **Names of tools, packages, package managers, operating systems, editors and their menu
  items stay as the student will see them on their own machine.** Minitest, Homebrew,
  `rbenv`, Visual Studio Code, "Command Palette". You cannot know whether the student's copy of a tool is
  localised, so keep the English label and do not guess at a translated one.
- Error messages quoted from a tool stay in English: the student will search for them.
- Version numbers, URLs and link definitions are untouched. Do not replace a link to English
  documentation with a localised one.

## Translate

- The prose around the commands, headings, list items, link text.
- `ABOUT.md` is the track's pitch for the language. It is the one page here with a voice:
  translate it as persuasive, natural text, not as a manual.
- `LEARNING.md` and `RESOURCES.md` are lists of books, sites and communities. Titles of books,
  sites, podcasts and courses stay in their original language; the description of each is
  translated.

Track names are translated like any other title ("Titles are translated" in
`global/rules.md`). Most are the proper name of a programming language and so come out
unchanged ("Ruby", "C#", "Common Lisp"); the descriptive part of one is translated, and the
glossary decides where this language has its own established name for a programming language.
