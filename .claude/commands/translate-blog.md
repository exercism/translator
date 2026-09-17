---
description: Translate blog posts and community stories (exercism/blog) into one language
argument-hint: <locale>
arguments: locale
allowed-tools: Read, Bash
model: sonnet
effort: low
---

IMPORTANT: If all arguments are not provided, STOP and exit immediately with an error.

**Do not run git**, in any repo. See "Git belongs to the orchestrator" in
`global/workflow.md`.

**You decide nothing here, and you translate nothing here.** One script does the whole pass:
it resolves the work, skips what `$locale` already holds, builds every prompt, calls DeepSeek,
checks each answer with the `i18n` repo's checker and writes what passed. You start it, wait
for it, and read back its summary. You never see the translated text and never need to.

- `$locale` = one locale code that has a `languages/<locale>/` folder (several may be given
  comma-separated). Not `all`: a pass is started per language, on purpose.
- Raw arguments: `$ARGUMENTS`

There is **no mode argument**. The one mode is "translate if absent": see "The one mode" in
`global/pass-mechanics.md`. If someone asks for `outdated`, `all`, `tidy` or `missing`, those
modes do not exist here; say so and stop.

## This source

- English: `exercism/blog`.
- Types: `blog-post` and `community-story` (`content-types/blog.md`), and `blog-metadata`
  (`content-types/metadata.md`).
- Output: `../i18n/locales/$locale/content/...` by blob id, and
  `../i18n/locales/$locale/metadata/blog.json`.

## Load

Nothing. The script assembles the whole prompt (rules, voice, how to translate, the language
guide, the whole glossary, the how-to, the text). Loading any of it here pays for it twice and
changes nothing.

## Run

This command must be run by the orchestrator session itself, **never from a subagent**: a
worker's background process dies when the worker exits.

1. The free dry run, in the foreground. Print its `SUMMARY` block as it is.

   ```
   node scripts/translate.mjs blog $locale --dry-run
   ```

   If it exits non-zero, print what it said and stop. Do not try to fix it.

2. The real run, **in the background** (`run_in_background`), exactly this and nothing added:

   ```
   node scripts/translate.mjs blog $locale
   ```

   It can run for hours. Do not poll it, do not tail it, and do not start a second one for the
   same locale while it runs. You are notified when it exits.

3. When it exits, print its `SUMMARY` block as it is, from `SUMMARY` to the end.

## Report

The two `SUMMARY` blocks, the path after `full summary:`, and the exit code. Exit 1 means at
least one item failed or the checker objected: the failures are listed with their paths, each
one was already retried, and each is simply absent, so **re-running this same command later is
the fix**. Never hand-translate a failed item, never edit a file the script wrote, and never
run a different command to "finish" one.

The script wrote files into `../i18n` and committed nothing. Tell the orchestrator so: the
commit is its job.
