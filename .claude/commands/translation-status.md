---
description: Report what one language still needs, source by source, and which command does each bit
argument-hint: <locale>
arguments: locale
allowed-tools: Read, Bash
model: sonnet
effort: low
---

IMPORTANT: If `$locale` is not provided, STOP and exit immediately with an error.

**Read-only. Do not run git, and do not start a translation.** This command reports; it never
runs a `scripts/translate.mjs` without `--dry-run`.

- `$locale` = one locale code with a `languages/<locale>/` folder.
- Raw arguments: `$ARGUMENTS`

## Run

Each line is the free dry run of one source: it resolves the work, counts what `$locale`
already holds, and estimates the rest. Run them in the foreground, one after another:

```
node scripts/check-routes.mjs
node scripts/translate.mjs website $locale --dry-run
node scripts/translate.mjs problem-specifications $locale --dry-run
node scripts/translate.mjs docs $locale --dry-run
node scripts/translate.mjs blog $locale --dry-run
node scripts/translate.mjs website-copy $locale --dry-run
```

Tracks are not listed anywhere in this repo, on purpose (the website's database is the
authority on which tracks exist). For each track Jeremy names, or each directory under
`.source/` that is a track:

```
node scripts/translate.mjs track <track> $locale --dry-run
```

A source with no checkout says so and names the `scripts/source-checkout.mjs` line that
fetches one. Report that line; do not run it unless asked.

## Report

One table: source, type, total, held, to translate, words, and the command that does it
(`/translate-website`, `/translate-problem-specifications`, `/translate-track <track>`,
`/translate-docs`, `/translate-blog`, `/translate-website-copy`). Then the sum of the `floor $`
figures, stated as a floor: it excludes thinking tokens, which are billed as output. Nothing
else, and no recommendation about what to run.
