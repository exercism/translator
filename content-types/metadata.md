# Names, titles and blurbs (the metadata catalogs)

The text that is NOT a whole file: exercise, concept and doc names and blurbs, a track's
blurb and key features, a blog post's title and marketing copy. In the source repos it sits
inside `config.json` and `metadata.toml`, among uuids and file lists. It is what a student
reads on a card, in a list and in search results, before they have opened anything.

The i18n repo extracts it (`scripts/lib/metadata.mjs` there is the authority on which fields,
and why) into **one key-based catalog per source repo per locale**:

| i18n type ids | English | Translation, in the `i18n` repo |
|---|---|---|
| `track-metadata`, `exercise-metadata`, `concept-metadata`, `track-docs-metadata` | a track's `config.json`, each listed exercise's and concept's `.meta/config.json`, `docs/config.json` | `locales/<locale>/metadata/<track>.json` |
| `problem-specification-metadata` | `exercises/<slug>/metadata.toml` | `locales/<locale>/metadata/problem-specifications.json` |
| `docs-metadata` | the five sections' `config.json` | `locales/<locale>/metadata/docs.json` |
| `blog-metadata` | `config.json` | `locales/<locale>/metadata/blog.json` |

These are catalogs, like the two website ones, and unlike every whole file: a key names a
slot whose English can be edited, so each unit carries a stamp in a sibling
`<repo>.meta.json`. There are no plural groups and no placeholders in them.

## What you are given, and what you return

A JSON object of strings keyed by unit id. Return one flat JSON object with exactly the same
ids. The id says what the string is, so read it:

| Key | What it is |
|---|---|
| `exercise:<slug>:name` (tracks), `exercise:<slug>:title` (problem-specifications) | an exercise's title |
| `exercise:<slug>:blurb` | one sentence saying what the exercise asks for |
| `exercise:<slug>:source` | a credit line: where the exercise's idea came from |
| `exercise:<slug>:deep_dive_blurb` | the teaser for the exercise's deep-dive video |
| `concept:<slug>:name`, `:blurb` | a concept's title and one-line summary |
| `track:blurb` | the track's pitch for its language |
| `key_feature:<icon>:title`, `:content` | one of the six selling points on a track's About page |
| `doc:<slug>:title`, `:blurb`; `<section>:<slug>:title`, `:blurb` | a docs page's title and summary |
| `post:<slug>:title`, `:description`, `:marketing_copy`; `story:<slug>:title`, `:blurb` | blog copy |

## Titles

**Exercise and concept titles are translated**, per "Titles are translated" in
`global/rules.md`. "Leap" and "Save the Cow" get a name in this language like any other
exercise. The exceptions that rule lists matter a great deal here, because exercise titles are
full of them:

- A person's name, a named algorithm or a named thing stays: "Luhn", "Atbash Cipher" (translate
  "Cipher"), "Pascal's Triangle" (use this language's established name for it), "D&D
  Character" (keep "D&D").
- Wordplay that does not survive ("Two Fer", "Bob") stays, unless the glossary says otherwise.
- A concept title that is a term the glossary lists uses the glossary's rendering, in title
  position: the same word the concept's own page uses.
- Title capitalisation follows this language's convention, not English title case.

The same exercise has the same title in every track: identical English is translated once and
copied by the tooling, so you will usually meet a given title exactly once. Make it one you
would be happy to see eighty times.

## Blurbs

- One sentence, often an imperative with no subject ("Determine if a number is an Armstrong
  number."). Use the form this language uses for a task description, in the register the
  language guide sets, and keep it one sentence.
- **Keep it short. A track's blurb is cut off by the website at 350 characters**, so a
  translation much longer than its English can end mid-sentence. For `track:blurb`, stay
  within 350 characters; if English is already close to that, tighten rather than overrun.
  Every other blurb sits on a card with room for two or three lines: do not pad.
- A quoted string a program must produce stays in English, per "Test-compared strings" in
  `global/rules.md`: `Just say "Hello, World!".` keeps `"Hello, World!"`.

## Source lines

A `source` is a credit: "Inspired by the harry potter kata from Cyber-Dojo.", "Pascal's
Triangle at Wolfram Math World", "A variation on a JavaScript Katas problem". Translate the
connecting words ("Inspired by", "A variation on", "at"). Titles of sites, books, katas,
courses and competitions, and the names of people and organisations, stay exactly as written,
including their original capitalisation, even where that looks wrong.

## Track blurbs and key features

Marketing copy for a programming language, written by that track's maintainers. Translate for
effect. The language's name and the names of its tools, runtimes and paradigms follow the
glossary; where the glossary keeps a term in English, keep it. A key feature's title is two
or three words on a tile: keep it that short.

## Blog and docs copy

A post's `title` and `marketing_copy` are what gets someone to open it; keep hashtags and
campaign names (`#12in23`) exactly. A doc's `title` must match how the page's own `#` heading
is translated, since a reader sees both.
