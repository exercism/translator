# Exercism Translations

This repo holds what is needed to translate Exercism into other languages: the guides,
glossaries, how-to instructions, commands and the translation script. It holds no translated
output.

All translations live in the `i18n` repo (`../i18n`, `exercism/i18n`), which holds every
non-English string Exercism ships. English is not stored there. It is written in the source
repos and read from a checkout of them. `../i18n/CLAUDE.md` describes that repo's structure
and rules, and its `ENGLISH-SOURCE.md` describes where English comes from.

The repos sit side by side under `exercism/` (`../i18n`, `../website`, `../ruby`,
`../problem-specifications`, `../docs`, `../blog`). A source repo with no sibling checkout is
fetched into this repo's gitignored `.source/` by `node scripts/source-checkout.mjs <name>`.

Work reaches `i18n` through a pull request into `main`. A pass writes files and stops, and the
orchestrator commits and opens the pull request. See "Git belongs to the orchestrator" in `global/workflow.md`.

## How a translation pass works

Nobody translates by hand in a session. A pass is one script, and the guidance in this repo
reaches the model through the prompt the script assembles:

```
node scripts/translate.mjs track ruby hu --dry-run    # free: what there is to do, and roughly what it costs
node scripts/translate.mjs track ruby hu              # the pass
```

For every item, with no agent involved, the script lists the source repo's tree at a ref,
derives each file's content type from its path through the `i18n` registry, and skips
everything `hu` already has. It then assembles the prompt (`global/rules.md`,
`global/voice.md`, `global/translating.md`, the language's guide, its whole glossary, the
content type's how-to, then the text, always in that order so the provider's prefix cache
keeps hitting), calls DeepSeek, runs the answer through the `i18n` repo's checker, and writes
what passed. A failed item is retried, then left absent and reported, and the next run picks
it up. The script returns counts and a list of failures with paths. `global/pass-mechanics.md`
explains the reasoning.

There is only one mode, "translate if absent", because of how `i18n` stores translations
(next section). The commands are small: each starts the script in the background and reads
its summary. They are split by where the English comes from:

```
/translate-website                 <locale>
/translate-problem-specifications  <locale>          # before any track: see below
/translate-track                   <track> <locale>
/translate-docs                    <locale>
/translate-blog                    <locale>
/translate-website-copy            <locale>          # analyzer comments, not UI strings
```

`/translation-status <locale>` reports what one language still needs by running every
source's free dry run, without translating anything. `/work-issue <n>` works one issue from
the queue of English changes, and `/fix-i18n-issue <n>` hand-fixes the files a queue issue
labelled `needs-attention` was left without. `/fix-translation` applies one reviewer's
correction to one file, found through the translation index (next section). `CLAUDE.md`
lists every command.

## Three stores for three kinds of English

| Store, in `../i18n/locales/<locale>/` | Keyed by | Staleness |
|---|---|---|
| `content/<ab>/<cd>/<rest>.md`: every whole file (exercises, concepts, track docs, docs, blog, analyzer comments, problem specifications) | the git blob id of the English file | None. A blob id always refers to the same bytes. Edited English has a new blob id, so its translation is a file that does not exist yet. |
| `website/backend.json`, `website/frontend.json`: the website's UI strings | key name | Per unit, stamped by `i18n`'s checker in a sibling `.meta.json`. |
| `metadata/<repo>.json`: names, titles and blurbs from `config.json` and `metadata.toml`, one catalog per source repo | key name (`exercise:two-fer:blurb`) | Per unit, the same way. |

Two things follow from this:

- Byte-identical English is translated once. A practice exercise's instructions are synced
  from `problem-specifications` into dozens of tracks with the same blob id, and its title and
  blurb appear in dozens of metadata catalogs with the same English. So
  `problem-specifications` is translated before any track. The tracks then find most of their
  practice exercises already translated, and copy the titles and blurbs instead of paying for
  them again.
- `i18n` refuses to remove anything under `locales/`, but it allows updates: a forum fix
  overwrites a blob-keyed file in place. See `CLAUDE.md`.

A blob-keyed path says nothing about what a file translates, so `i18n` keeps a translation
index. `index/json/<locale>/<repo>.json` maps each translatable English path in a source repo
to the blob ids the locale holds translations for, newest first, and
`index/markdown/<locale>/<repo>.md` is generated from it for reading on GitHub.
`scripts/translate.mjs` updates it after every pass. When a reviewer reports a problem with a
page, look its English path up there to find the file to fix, as "Finding the file a reviewer
means" in `global/workflow.md` describes. Names, blurbs and the website's UI strings are keys
in the catalogs, so the index does not list them.

## How guidance is split

- `languages/<lang>/` varies by language (formality, grammar, glossary) and is the same for
  every content type.
- `content-types/<how-to>.md` varies by content type (what to translate, what to leave,
  format rules) and is the same for every language.
- `global/` applies everywhere (never touch code, leave test-compared strings in English,
  preserve placeholders, keep Markdown structure intact).

## Content types

The type ids are the `i18n` registry's own. `../i18n/scripts/lib/content-types.mjs` is the
authority, and this table follows it. `scripts/lib/routes.mjs` maps each id to its how-to and
its command, and `node scripts/check-routes.mjs` checks that the map is complete.

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

**TODO(iHiD): open.** It is undecided whether `docs-building` (contributor-facing, 155 of the
212 served pages) and `docs-mentoring` (mentor-facing) are in scope. Both are live in the
`i18n` registry, so `/translate-docs` translates both today and says so.

Code is never translated. That includes strings an exercise's tests compare against, even
where the English author wrote one as plain quoted prose: the translator works out from
context that it is test-compared and leaves it alone ("Test-compared strings" in
`global/rules.md`). Exercise titles are translated.

## Languages

Every language folder was copied from Jiki's translator repo: the guides, glossaries,
decision logs, family folders and `names.json`. Hungarian is the first target. Every folder
has been stripped of Jiki-specific content while keeping its language decisions. Languages
other than Hungarian still need their Exercism product terms agreed by a native speaker (the
empty `PROPOSED, NOT YET AGREED` block in the glossary) before a pass runs. The plan is one
full Hungarian pass across all content, which also serves as the tuning loop, so there are no
language stages.

## How the glossary grows

The glossary keeps terms consistent, and it grows over time. A translation pass never
proposes a term; it returns the translation and nothing else. New terms come from native
speakers who read the live website and post on the forum, and `/action-forum-post` and
`/update-guide-and-glossary` work that feedback into the glossary. Nothing is written to
`languages/<lang>/glossary.md` without prior agreement. See `global/workflow.md` for the
details.

Rows are only ever added. A pass appends agreed rows and never overwrites or deletes an
existing one. `languages/<lang>/glossary-notes.md`, the language's append-only decision log,
records which rows are protected. An agreed change is finished once it has been committed,
pushed (the pinned forum post links to the file on GitHub) and announced as a reply on that
language's pinned glossary topic.
