# Exercism Translations

This repo is the **brain** for translating Exercism into other languages. It holds the
guides, glossaries, how-to instructions, commands and the translation script. It does **not**
hold the translated output.

**Every translation lives in the `i18n` repo (`../i18n`, `exercism/i18n`).** It is the home of
every non-English string Exercism ships. English is not stored there at all: it is authored in
the source repos and read from a checkout of them. `../i18n/CLAUDE.md` is the authority on
that repo's structure and rules, and its `ENGLISH-SOURCE.md` on where English comes from.

These repos live as siblings under `exercism/` (`../i18n`, `../website`, `../ruby`,
`../problem-specifications`, `../docs`, `../blog`). A source repo with no sibling checkout is
fetched into this repo's gitignored `.source/` by `node scripts/source-checkout.mjs <name>`.

**Work that lands in `i18n` lands as a direct commit to `main`.** A pass writes files and
stops; the orchestrator commits. See "Git belongs to the orchestrator" in
`global/workflow.md`.

## How a translation pass works

Nobody reads this repo's files into a session and translates by hand. A pass is **one
script**, and the knowledge here reaches the model as a prompt the script assembles:

```
node scripts/translate.mjs track ruby hu --dry-run    # free: what is there to do, and roughly what it costs
node scripts/translate.mjs track ruby hu              # the pass
```

For every item, with no agent in the loop: it lists the source repo's tree at a ref, derives
each file's content type from its path through the `i18n` registry, **skips everything `hu`
already holds**, assembles the prompt (`global/rules.md`, `global/voice.md`,
`global/translating.md`, the language's guide, its **whole** glossary, the content type's
how-to, then the text, in that fixed order so the provider's prefix cache stays hot), calls
DeepSeek, puts the answer through the `i18n` repo's own checker, and writes what passed. A
failed item is retried, then left absent and reported, and the next run picks it up. What
comes back is counts and a list of failures with paths. `global/pass-mechanics.md` has the
reasoning.

**There are no modes.** The one mode is "translate if absent", because of how `i18n` stores
things (next section). The commands are thin: each starts that one script in the background
and reads its summary. They are split by where the English comes from:

```
/translate-website                 <locale>
/translate-problem-specifications  <locale>          # before any track: see below
/translate-track                   <track> <locale>
/translate-docs                    <locale>
/translate-blog                    <locale>
/translate-website-copy            <locale>          # analyzer comments, not UI strings
```

`/translation-status <locale>` reports what one language still needs, by running every
source's free dry run, without translating anything. `/work-issue <n>` works one issue from the
queue of English changes. `/fix-translation` applies one reviewer's correction to one file.
`CLAUDE.md` lists every command in one place.

## Three stores, because three kinds of English change differently

| Store, in `../i18n/locales/<locale>/` | Keyed by | Staleness |
|---|---|---|
| `content/<ab>/<cd>/<rest>.md`: every whole file (exercises, concepts, track docs, docs, blog, analyzer comments, problem specifications) | the **git blob id of the English file** | **None.** A blob id names exact bytes forever. Edited English is a new blob id, which is a file that does not exist yet. |
| `website/backend.json`, `website/frontend.json`: the website's UI strings | key name | Per unit, stamped by `i18n`'s checker in a sibling `.meta.json`. |
| `metadata/<repo>.json`: names, titles and blurbs out of `config.json` and `metadata.toml`, one catalog per source repo | key name (`exercise:two-fer:blurb`) | Per unit, the same way. |

Two consequences shape everything else:

- **Byte-identical English is translated once.** A practice exercise's instructions are synced
  from `problem-specifications` into dozens of tracks with the same blob id, and its title and
  blurb appear in dozens of metadata catalogs with the same English. So
  **`problem-specifications` is translated before any track**: the tracks then find most of
  their practice exercises already held, and copy the titles and blurbs rather than paying for
  them again.
- **"Never deleted" is not "immutable".** `i18n` refuses to remove anything under `locales/`.
  It does not refuse an update: a forum fix overwrites a blob-keyed file in place. See
  `CLAUDE.md`.

## The two axes

Guidance is split so nothing is duplicated:

- **`languages/<lang>/`** varies by language (formality, grammar, glossary), the same across
  all content types.
- **`content-types/<how-to>.md`** varies by content type (what to translate, what to leave,
  format rules), the same across all languages.
- **`global/`** is true everywhere (never touch code, leave test-compared strings in English,
  preserve placeholders, keep Markdown structure intact).

## Content types

The type ids are the `i18n` registry's own (`../i18n/scripts/lib/content-types.mjs`, which is
the authority; this table follows it). `scripts/lib/routes.mjs` maps each to its how-to and
its command, and `node scripts/check-routes.mjs` proves the map is complete.

| Source (command) | `i18n` type ids | How-to | English |
|---|---|---|---|
| `website` (`/translate-website`) | `website-backend` | `website-backend.md` | `config/locales/**/*.yml`, Rails: `%{name}`, nested `one:`/`other:` |
| | `website-frontend` | `website-frontend.md` | `app/javascript/i18n/en/*.ts`, i18next: `{{name}}`, `_one`/`_other`, `<0>` tags |
| a track (`/translate-track`) | `exercise-instructions`, `exercise-introduction` | `exercise-docs.md` | `exercises/*/<slug>/.docs/{instructions,introduction}.md` |
| | `exercise-instructions-append`, `exercise-introduction-append` | `appends.md` | `.docs/*.append.md` |
| | `exercise-hints` | `hints.md` | `.docs/hints.md`, parsed by the website by its H2 headings |
| | `concept-about`, `concept-introduction` | `concepts.md` | `concepts/<slug>/{about,introduction}.md` |
| | `track-docs`, `exercise-shared-docs` | `track-docs.md` | `docs/*.md`, `exercises/shared/.docs/*.md` |
| | `track-metadata`, `exercise-metadata`, `concept-metadata`, `track-docs-metadata` | `metadata.md` | `config.json`, `.meta/config.json`, `docs/config.json` |
| `problem-specifications` | `problem-specification` | `problem-specifications.md` | `exercises/<slug>/{description,instructions,introduction}.md` |
| | `problem-specification-metadata` | `metadata.md` | `exercises/<slug>/metadata.toml` |
| `docs` (`/translate-docs`) | `docs-using`, `docs-programming`, `docs-community`, `docs-mentoring`, `docs-building` | `docs.md` | the five served sections |
| | `docs-metadata` | `metadata.md` | each section's `config.json` |
| `blog` (`/translate-blog`) | `blog-post`, `community-story` | `blog.md` | `posts/*.md`, `stories/*.md` |
| | `blog-metadata` | `metadata.md` | `config.json` |
| `website-copy` (`/translate-website-copy`) | `analyzer-comments` | `analyzer-comments.md` | `analyzer-comments/**/*.md`, with `%{name}` interpolation |

**TODO(iHiD): OPEN.** Whether `docs-building` (contributor-facing, 155 of the 212 served
pages) and `docs-mentoring` (mentor-facing) are in scope is undecided. Both are live in the
`i18n` registry, so `/translate-docs` translates both today and says so.

**Code is never translated**, and that includes the strings an exercise's tests compare
against, even where the English author wrote one as plain quoted prose: the translator works
out from context that it is test-compared and leaves it alone ("Test-compared strings" in
`global/rules.md`). Exercise titles are translated.

## Languages

Every language folder was copied from Jiki's translator repo: the guides, the glossaries, the
decision logs, the family folders, `names.json`. **Hungarian is the first target.** Every folder has
been stripped of Jiki-specific content while keeping its language decisions; a language other
than Hungarian still needs its Exercism product terms agreed by a native speaker (the empty
`PROPOSED, NOT YET AGREED` block in its glossary) before a pass runs. The launch plan is Hungarian across
everything as one full pass, which doubles as the tuning loop, so there are no language
stages.

## Glossary growth

The glossary is the single source of term consistency, and it grows over time. **A
translation pass never proposes a term**: it returns the translation and nothing else. New
terms come from native speakers reading the live website and posting on the forum, and that
feedback is worked into the glossary by `/action-forum-post` and
`/update-guide-and-glossary`. Nothing is written to `languages/<lang>/glossary.md` without
prior agreement. See `global/workflow.md` for the details.

It grows by **addition**. A pass appends agreed rows and never silently overwrites or deletes
an existing one. Which rows are protected is recorded in `languages/<lang>/glossary-notes.md`,
the language's append-only decision log. An agreed change is not finished until it has been
committed, pushed (the pinned forum post links to the file on GitHub) and announced as a reply
on that language's pinned glossary topic.
