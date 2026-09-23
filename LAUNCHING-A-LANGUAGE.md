# Launching a language

This is the one authoritative list of what it takes to put a new locale on exercism.org.
Anything else that describes the steps is wrong and should be corrected against this file.

Hungarian was the first language through it, and went live on 2026-09-23.

The short version: translate everything, push it to `../i18n`, open the website pull request.
Glossary agreement and native-speaker review happen afterwards, not before.

The translations land on `../i18n` `main` through pull requests you open and merge yourself.
The one thing left for iHiD is the pull request on `exercism/website`, which he merges when he
wants the locale live.

## 1. Do not re-research the language

Every locale already has a folder under `languages/`, carried over from Jiki: a guide, a
glossary with a couple of hundred agreed rows, and a decision log recording why each was
chosen. Ukrainian, for example, has 200 glossary rows, a 138-line guide and a 976-line log.
That work is done, and it is about the language rather than about Jiki, so it stands. Do not
run research over it again, and do not treat the language as unbootstrapped.

The one gap is the `PROPOSED, NOT YET AGREED` block at the end of each glossary: the nouns
Exercism's own product is built from, such as track, exercise, concept, mentor and solution.
Nobody has agreed those for any language yet.

**Translate anyway.** We are no longer holding a language back until its product terms are
agreed. The translator picks a consistent rendering for each term within a pass, native
speakers correct it afterwards on the forum, and the corrections are applied with
`/fix-translation` and `/action-forum-post`. Waiting for agreement first would hold every
language behind a review queue that does not exist yet.

`/bootstrap-language <locale>` remains available for a language with no folder at all, and for
opening the forum discussion. It is not a prerequisite for translating.

## 2. Register the locale in `../i18n`

Add the locale to `targets` in `../i18n/locales.json`, in the same commit as its first content.
A locale listed with no files makes every script process an empty locale.

Leave `productionTargets` alone at this stage. That list is what gates, and a locale joins it
in step 5.

## 3. Run the passes, in this order

```
/translate-website <locale>                  # the two UI catalogs
/translate-problem-specifications <locale>   # before any track, so shared exercise text is translated once
/translate-track <track> <locale>            # once per track
/translate-docs <locale>
/translate-blog <locale>
/translate-website-copy <locale>
```

Start with a dry run, which costs nothing and prints item counts and token estimates:

```
node scripts/translate.mjs website <locale> --dry-run
```

`--limit=<n>` runs a handful of items so the voice and terminology can be read before
committing to the rest. Each pass calls DeepSeek, checks every output with the `i18n` checker,
retries failures and reports what is still absent. Re-running a command picks those up.

Run `/translation-status <locale>` to see what remains.

## 4. Land the translations in `../i18n` through a pull request

`../i18n` is shared with live sessions, so never run a state-changing git command in that
checkout. Add a worktree and do all git there.

Work on a branch named for the locale, such as `add-greek`, and open a pull request against
`main`. Do not leave it open waiting for iHiD: merge it yourself once the catalog is complete
and its checks are green. A pull request rather than a direct push, because pushing `main`
publishes, and because the repo's own CI is what proves the content is sound before it does.

Before opening it, from the worktree:

```
node scripts/validate.mjs <locale> --content-repos=<the checkouts that were translated>
node scripts/build-index.mjs all          # the index is generated, and CI checks it with --check
node scripts/no-deletions.mjs --base=origin/main --head=HEAD
```

Commit `locales/` and `index/` together, because CI fails if the index does not match the
content. A long pass can land in several pull requests as it goes rather than one at the end,
which keeps each one reviewable and each merge small.

## 5. Turn on the gate

Once every source is translated, add the locale to `productionTargets` in
`../i18n/locales.json`. That makes `validate.mjs` exit non-zero for it, and makes
`completeness.mjs` hold every source repo's pull requests until the locale has the translation.

A locale must be in `productionTargets` before the website serves it.

## 6. Open the website pull request

One line in `exercism/website` `config/i18n.json`: add the locale to `served`. Open it as a
pull request and leave it for iHiD to merge, because merging is what puts the language in front
of users.

That single line turns on Rails routing and the Cloudflare Worker together.
`config/application.rb` reads it through `LocaleConfig::SERVED`, and
`cloudflare/locale-redirect/worker.js` imports the same file and ships with the same deploy, so
the two cannot disagree.

Three things that need no change: `exercism/terraform`, which owns the Worker's routes rather
than its code; `Locale::Name::NAMES` and `Locale::Languages::FLAGS` in
`app/commands/locale/`, which already list every locale, so the signed-out switcher moves the
language from coming-soon to live by itself.

One thing that might: a locale whose script Poppins does not cover (Greek, Cyrillic, Arabic,
Hebrew, Thai, CJK) needs its glyphs added to `app/css/fonts.css` by `unicode-range`, and the
preload list in `ApplicationController#set_link_header` updated to match.

## 7. After launch

Reviewer corrections arrive on the forum. `/action-forum-post` turns a thread into glossary,
guide and file fixes, `/fix-translation` applies fixes to translated files, and
`/announce-glossary-change <locale>` replies on the pinned thread with what changed.
