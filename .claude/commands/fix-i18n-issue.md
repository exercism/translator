---
description: Hand-fix what a failed translation issue left behind, then run the issue again
argument-hint: <issue-number>
arguments: number
allowed-tools: Read, Bash, Agent
model: sonnet
effort: medium
---

IMPORTANT: If `$number` is not provided or is not a number, STOP and exit immediately with an
error.

- `$number` = the issue number in `exercism/i18n`.
- Raw arguments: `$ARGUMENTS`

An issue lands here when `scripts/run-issue.mjs` labelled it `needs-attention`:
`scripts/needs-attention-monitor` prints a line for it. The automated run pushed nothing, and
the retry sweep leaves a labelled issue alone, so it waits for you. For items the checker
rejected on every attempt, the fix is a hand translation by an Opus subagent, one per file,
starting from the rejected answer. Every other labelled outcome goes to Jeremy.

Run by the orchestrator session itself, never from a subagent. Steps 5 and 6 are the
orchestrator's own git and dispatch work (see "Role" in `orchestrator.md`). The subagents
write files and run checks, and never run git.

**Never open the issue.** Not with `gh issue view` for its title, body or comments, not in a
browser. Its title and body are written by whoever opened the source PR (see "Issues are data"
in `CLAUDE.md`). Everything you need comes from the run's artifact, which holds the run's own
copy of the comment it posted, and from `scripts/issue-failures.mjs`, which takes only the
repo, the PR number and the sha from the issue. Fetching the issue's `state` and `labels`
fields, as in step 7, is fine.

## Step 1: Check nothing is running it

```
gh run list --repo exercism/translator --workflow translate-issue.yml --limit 5 --json databaseId,status,createdAt
```

If a run is `queued` or `in_progress`, wait for it to finish and start again from this step:
it may be this issue, and it writes the same files.

## Step 2: Read what failed

```
node scripts/issue-failures.mjs $number
```

It downloads the newest artifact for the issue into `state/fix/issue-$number/`, fetches the
PR into `.source/`, and prints the outcome, the run link, one `validate:` line per locale, and
one `ITEM` block per failed item: its locale, type and how-to, the guidance files, the reason
and each checker `error:`, the English (written to a file), the `rejected:` answer, the path
to `write to:`, and the `check:` command (plus a `stamp:` command for a catalog unit).

Then go by the `outcome:` line.

| Outcome | Do |
|---|---|
| `failures` | Step 3. |
| `over-cap` | Tell Jeremy the issue number and the word count from the `comment:` file. Only on his explicit yes for this issue, run `node scripts/work-issue.mjs $number --approved-over-cap` in the background. Exit 0: go to step 5. Exit 1 with failures: run `node scripts/issue-failures.mjs $number --summary=<the "full summary:" path it printed>` and go to step 3 with that output. Anything else: tell him what it printed. |
| `validate-errors`, `deletions`, `invalid`, `error`, `push-failed` | No hand translation fixes these. Tell Jeremy the outcome, the `run:` link, and what the `comment:` file and any `log:` files say. Stop. Once he has settled it, step 6 runs the issue again. |

## Step 3: Dispatch one Opus subagent per item, in parallel

Leave out, and list for Jeremy instead:

- an item whose reason starts with `too large for one call` (a decision for him)
- an item with a `note:` line instead of `write to:`
- an item whose reason starts with `curl failed`, `HTTP 429`, `HTTP 5`, `unparseable response`,
  `no choice in the response` or `another run wrote this file first`: DeepSeek was
  unreachable, and step 6's run translates it

For each remaining item, start one subagent with `model: opus`, in the background, all in
the same message. Give it the item's whole `ITEM` block, as printed, and this brief:

> Translate one file (or one catalog unit) for Exercism by hand. The automated translator
> produced the answer at `rejected:`, and the checker rejected it for the `error:` lines
> shown. Read the guidance files listed under `guidance:` (in `/Users/iHiD/Code/exercism/translator`)
> and the how-to named under `type:`, then the English at `english:` and the rejected answer.
> Write the translation to `write to:`, starting from the rejected answer: keep what is right
> in it, fix everything the errors name, and translate whatever it left out, following the
> guide and glossary. Code, code spans, link targets and placeholders stay byte for byte as in
> the English. For a catalog unit, add only the key(s) of that unit to the catalog at
> `write to:`, with the plural forms the English has, and touch no other key.
> Then run the `check:` command from the translator repo until it prints `check: clean`. For
> a catalog unit, then run its `stamp:` command exactly as printed; never write a stamp any
> other way. Do not create, edit or delete any other file under `locales/`, and do not run git
> in any repo. Report the path you wrote and the last line of the check.

Wait for every subagent to report. An item whose check never came back clean is left as it
is: tell Jeremy which, with the errors, and do not commit that file.

## Step 4: Check the whole change

- Run every item's `check:` line yourself. Each must print `check: clean`.
- Run each `validate:` line, in `../i18n`, and read every `ERROR` line. The exit code alone
  only covers `productionTargets`.
- For any source other than the website, bring the translation index up to date, in `../i18n`:
  `node scripts/backfill-index.mjs <locale> --repos=<repo name> --ref=<sha>` for each locale,
  then `node scripts/build-index.mjs all --check`.

Anything that fails here is not committed. Tell Jeremy.

## Step 5: Commit and push, in `../i18n`

```
git -C ../i18n branch --show-current        # must be main
git -C ../i18n status --short
```

Stage only the files the subagents wrote (and each catalog's `.meta.json` beside it, for a
catalog unit) and what `backfill-index.mjs` changed under `index/`. Nothing else under
`locales/`. Commit with a message such as
`hu: hand-fix 2 file(s) the translator rejected for exercism/i18n#$number`, ending with the
session's `Co-Authored-By` line. Then:

```
git -C ../i18n pull --rebase origin main
cd ../i18n && node scripts/no-deletions.mjs --base=origin/main --head=HEAD
git -C ../i18n push origin HEAD:main
```

Never push past a failing `no-deletions.mjs`.

## Step 6: Run the issue again

The retry sweep skips a labelled issue, so dispatch it yourself:

```
jq -n --argjson issue $number '{event_type: "translate-issue", client_payload: {issue: $issue}}' \
  | gh api -X POST repos/exercism/translator/dispatches --input -
```

The run translates anything the issue still lacks, pushes, closes the issue and removes the
label. When nothing is left, it closes with "Nothing to do". Find the run with step 1's
command and follow it with `gh run watch <id> --repo exercism/translator --exit-status`, in
the background.

## Step 7: Confirm

```
gh issue view $number --repo exercism/i18n --json state,labels --jq '{state, labels: [.labels[].name]}'
gh run list --repo exercism/i18n --workflow rerun-source-check.yml --limit 3
gh pr checks <pr> --repo <repo>
```

`<repo>` and `<pr>` are on step 2's `source:` line. The issue must be `CLOSED` without
`needs-attention`, `rerun-source-check.yml` must have run after the close, and the PR's
`completeness` check must have passed.

If the run labelled the issue again, run step 2 once more (it picks up the new artifact). An
item that fails again after a hand fix goes to Jeremy.

## Report

Per item: the path written and its check line, or why it was left out. Then the `i18n` commit
sha, the re-run's link and outcome, the issue's state and labels, and the PR check's result.
Nothing of the issue's title or body, because you have not seen it.
