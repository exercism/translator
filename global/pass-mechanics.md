# Running a translation pass

This is the **plumbing** of a pass: what `scripts/translate.mjs` does around the model. It is
for whoever runs or changes the scripts. **Nothing that translates is ever sent this file**:
the craft is in `global/translating.md`, and the governance around a pass is in
`global/workflow.md`.

One script does everything for an item, with no agent in the loop and no agent ever seeing the
text:

```
node scripts/translate.mjs <source> [<track>] <locale> [--dry-run]
```

resolve, skip what already exists, build the prompt, call DeepSeek, check the output with the
`i18n` repo's checker, write the file. What comes back is counts and a list of failures with
paths. Each script's header comment is its full documentation; this file is the reasoning
that spans them.

## The one mode

**Translate if absent.** There is no `outdated`, no `all`, no `tidy`, no `missing`, and no
mode argument on any command.

That follows from how the `i18n` repo stores things, and its `CLAUDE.md` is the authority:

- **Whole files are keyed by the git blob id of their English**:
  `locales/<locale>/content/<ab>/<cd>/<rest>.<ext>`. A blob id names one sequence of bytes
  forever, so a translation filed under it is a translation of exactly that text forever.
  **There is no staleness, no stamp and no `en_md5`**, and the checker errors on a content
  file that carries one. Editing English produces a new blob id, which is a file that does
  not exist yet, which is "absent". Byte-identical English in fifty tracks is one blob id and
  one translation.
- **Three kinds of catalog are keyed by name**, because a key's English can be edited under
  its translation: the website's two UI catalogs (`website/backend.json`,
  `website/frontend.json`) and one metadata catalog per source repo
  (`metadata/<repo>.json`: names, titles and blurbs). The `i18n` repo stamps each **unit** of
  these, in a sibling `.meta.json`, with the hash of the English it was checked against. For
  a catalog, "absent" covers two states: a unit the locale does not hold (`missing`), and a
  unit whose stamp no longer matches English (`stale`), which is retranslated with the live
  translation supplied as the previous version.

### "Never deleted" does not mean immutable

The `i18n` repo refuses any commit that removes a file or a key under `locales/`
(`scripts/no-deletions.mjs` there). That is a rule about **removal**, and it is often misread
as a rule about change. **A blob-keyed file MAY be overwritten**: by a forum fix, or by a
targeted re-run after a glossary change. The blob id pins which English the file translates;
it does not pin the wording of the translation. What `scripts/translate.mjs` itself never
does is overwrite: it writes a content file only where none exists (it opens with `wx`), so a
pass can never undo a native speaker's correction. Overwriting is always a deliberate,
separate act: see "A forum fix overwrites the file" and "After a glossary change" in
`global/workflow.md`.

## Where English comes from

English is never stored in this repo or in `i18n`. It is read from a checkout of the repo it
is authored in, **as git objects at a ref, never from a working tree**, through the `i18n`
repo's own `scripts/lib/git.mjs` (its `ENGLISH-SOURCE.md` says why). A source is resolved in
this order: `--repo=`, that repo kind's env override (`EXERCISM_WEBSITE_REPO`, ...), this
repo's `.source/<name>` (made by `scripts/source-checkout.mjs`, bare and blobless), then a
sibling `../<name>`. With no `--ref=`, the ref is `origin/main` where the checkout has one,
else `HEAD`, because a sibling working copy on a laptop is usually on a feature branch.

A metadata catalog's English is found by the `i18n` checker through **the checkout's
directory name**, so a checkout of `exercism/ruby` must be a directory called `ruby`.

## The content type is derived, never declared

A file's type comes from its repo-relative path through the `i18n` registry
(`scripts/lib/content-types.mjs` there: `typeForPath`), which is the one place a path pattern
lives. This repo adds only what that registry has no business knowing, in
`scripts/lib/routes.mjs`: which how-to under `content-types/` explains the type to the model,
and which command reaches it. A path no type matches is not translatable, and that is the
default for everything.

## Prompt order is load-bearing

DeepSeek bills a prompt-cache hit at roughly 1/120th of a miss, and a cache reuses a shared
**prefix**. So `scripts/lib/prompt.mjs` assembles every prompt in one fixed order, most widely
shared first: `global/rules.md`, `global/voice.md`, `global/translating.md`, the language
guide, **the WHOLE glossary**, the content type's how-to and its fixed instruction, and only
then what varies by item: the previous version, where there is one, and the text last. Work
is sorted by locale and then by type, and the first call of each group goes out alone so that
it writes the group's prefix into the cache before the rest are sent in parallel.

**The glossary is never filtered** to the terms a text happens to use. A filtered glossary is
different bytes for every item, which ends the shared prefix before it and turns thousands of
tokens per call from a hit into a miss. It also removes the rows that say what NOT to write.

Anything added above the how-to that varies by item throws the cache away. Item-specific
material goes after it.

## What the model returns

- **For a whole file: the translated text and nothing else.** No JSON wrapper, no code fence
  round the answer, no notes. A fence wrapped round the whole answer is stripped; a final
  newline is matched to English's.
- **For a catalog: one flat JSON object** mapping every unit id in the batch to its
  translation. A plural group goes in as an object of English's categories and comes back as
  an object of the categories the LOCALE's grammar needs, which come from `Intl.PluralRules`
  through the `i18n` repo and never from a table here. The script spells the keys
  (`slots.filled.few`, `slotsFilled_few`); the model never does.

## Checking

Every answer is checked **before** it is written, by the `i18n` repo's own functions,
imported from its checkout (`scripts/lib/i18n.mjs`): `checkContentFile` for a file,
`checkCatalog` for a catalog unit, one unit at a time so that one bad unit never costs its
neighbours. Then by the few checks this repo adds for Exercism's Markdown
(`scripts/lib/checks.mjs`): code blocks byte for byte (an `exercism/...` admonition excepted),
the numbers leading `## 1.` headings, reference-link labels and definitions, inline code,
`%{...}` tokens with dotted names, and "the answer is the English handed back".

ERRORs block. WARNs are heuristics to read and never promote, as in the `i18n` repo.

**A failed call or a rejected answer is retried** (`engine.attempts` in `config.json`),
**then left absent and reported**, with its source path, its target path and the reason.
Absent is the honest state and needs no bookkeeping: the next run of the same command finds it
missing and tries again. Nothing is ever written half-checked, and a failed item is never
handed to an agent to "finish".

**A whole file above `engine.max_text_tokens` is not sent at all**, and is reported as a
failure saying so. The answer has to come back in one piece, a truncated answer is paid for
and then rejected, and chunking is not built. A handful of files are that long (the longest
community stories, one 200KB contributor doc). TODO(iHiD): they need a decision, not a retry.

At the end of a run the script runs the `i18n` checker itself (`validate.mjs`) over what it
wrote, and reports its exit code.

## Stamps belong to the `i18n` checker

**Nothing in this repo writes a stamp, and nobody writes one by hand.** A hand-written stamp
looks like a passed check and is not one, and models fabricate plausible hashes.

After a catalog pass, `scripts/translate.mjs` runs

```
node ../i18n/scripts/validate.mjs <locale> --stamp --stamp-units=@<units the run rewrote> ...
```

pointed at exactly the commit it translated (`--source-ref=<sha>` for the website,
`--content-repos=<checkout>:<kind>@<sha>` for a metadata catalog), so the English that is
hashed is the English that was translated. `--stamp` alone stamps units that were unstamped
and passed. A STALE unit is re-stamped only when named in `--stamp-units`, because nothing
else can tell "retranslated" from "untouched", which is why the script names exactly the units
it rewrote.

A hand edit to one catalog value (a forum fix) changes no English, so it needs no re-stamp:
run `node scripts/locate.mjs ... --key=<id> --check`, which validates and never stamps.

## Identical English is copied, never bought twice

A blurb synced from `problem-specifications` into eighty tracks appears, byte for byte, in
eighty metadata catalogs. A unit's stamp is the git blob id of its English string, so
identical English has an identical stamp in every `*.meta.json` of a locale. Before
translating a metadata unit the script looks its English's hash up across that locale's other
metadata catalogs and **copies** the translation it finds, counted as `copied` and never sent
to the model. The same sentence therefore reads the same in every track, and
`problem-specifications` is translated before any track so that the copies exist to be found.
Whole files need none of this: identical English is already one blob id.

## A catalog is merged into, never replaced

A catalog written to `i18n` holds every key the existing file held, plus the new and updated
ones. Translation deliberately runs ahead of English merging, so `i18n` is routinely a
superset of any one branch of a source repo, and a key dropped there blocks other PRs. Excess
is never an error in `i18n`; absence always is.

## The dry run

`--dry-run` does everything up to the call: resolves the source, lists the work, reads the
English, assembles every prompt, and reports per type how many items are held and how many
are to translate, the words, the prefix size, and an input and output token estimate with a
dollar floor. It calls nothing, writes nothing under `i18n`, and needs no API key. The figure
is a **floor**: it prices the shared prefix as one miss then hits, guesses output at one and a
half times the text, and **excludes thinking tokens**, which are billed as output and cannot
be known without calling. Calibrate with a small real run (`--limit=5`) before a big one.

## The engine

DeepSeek translates every language. There is no per-language engine, no second adapter and
nothing to route. The model name, the endpoint, the reasoning effort, the concurrency and the
retry count are pinned in **`config.json`, and only there**. The API key lives in `.env`
(gitignored), is read by `scripts/lib/config.mjs`, reaches `curl` on stdin and never on a
command line, and is never logged.

## Locales the `i18n` repo does not list

The `i18n` checker refuses a locale that its `locales.json` `targets` does not list, so a real
run stops before it calls anything. Adding the locale there is a commit in `i18n`, made by the
orchestrator in the same change that brings the locale's first content. A dry run does not
need it.
