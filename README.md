# Exercism translator

This repo translates Exercism. It holds the guides and glossaries that translations follow,
the translation script, the forum tooling, and the automated queue that turns a source-repo
pull request into translated files on `exercism/i18n`'s `main`.

Translated output lives in [`exercism/i18n`](https://github.com/exercism/i18n), and English
lives in the repos where it is written. [CLAUDE.md](./CLAUDE.md) explains where everything is,
and [START-HERE.md](./START-HERE.md) explains how a translation pass works.

## The translation script

```bash
node scripts/translate.mjs <source> [<track>] <locale> [--dry-run]
```

This works out what needs translating, skips whatever the locale already has, builds each
prompt, calls DeepSeek, checks the answer with the `i18n` repo's checker, and writes what
passed. No agent takes part in the per-item loop. `--dry-run` reports the work and its cost
without calling anything.

## Automated queue

A PR that changes English is translated without anyone stepping in:

1. The source repo's `i18n-queue.yml` opens (or updates) an issue in `exercism/i18n`, titled
   `Translate exercism/<repo>#<n>: ...` and labelled `translation`. The PR's completeness
   check fails until the translations land.
2. `translate-on-issue.yml` in `exercism/i18n` sends a `repository_dispatch` to this repo
   with the issue number and nothing else.
3. `.github/workflows/translate-issue.yml` runs `node scripts/run-issue.mjs <number>`. It
   verifies the issue (author, label, an allowlisted repo, a sha that belongs to that PR),
   works out from git what the PR changed, translates it for every locale in `i18n`'s
   `locales.json` `productionTargets`, and checks the result with `validate.mjs` and
   `no-deletions.mjs`.
4. It commits `locales/` and the translation index the pass updated (`index/`) in the `i18n`
   checkout and pushes to `main`, rebasing and retrying if the push
   is rejected as non-fast-forward. The website pulls that repo, so the push is what
   publishes the translations.
5. It closes the issue with the per-locale counts and the run's cost. Closing re-runs the
   source PR's completeness check (`rerun-source-check.yml` in `exercism/i18n`), which now
   passes.

The source PR gets a reply when the issue opens, when it closes, and when it is labelled
`needs-attention`, so a maintainer watching the PR can follow along. `exercism/i18n` posts all
of them, because this repo's tokens cannot write to the source repos. See "The loop" in its
`source-repo-workflows/README.md`.

If anything goes wrong, nothing is pushed and the issue stays open. The run comments on it
saying what happened and links the Actions run, whose `state/runs/` artifact holds the
summaries, the checker logs, the last rejected answer for each failed file (under
`rejected/`) and `issue-<n>.outcome.json`. `retry-stale-issues.yml` runs every six hours and
re-dispatches any issue that has been waiting more than two hours, so a GitHub or DeepSeek
outage recovers without help. Running an issue again is safe: the script only translates what
is missing, so an issue whose work is done finds nothing to do and closes.

A failure that another run would repeat gets the `needs-attention` label instead, and the
sweep skips it: items the checker rejected on every attempt, checker errors, the word cap,
deletions, an invalid issue, an unexpected error, or a push refused for permissions. The word
cap also gets the `over-cap` label, so the issue shows it is waiting for approval. The
orchestrator session watches for the label (`scripts/needs-attention-monitor`), and
`/fix-i18n-issue` has an Opus subagent fix each rejected file by hand from the artifact. The
orchestrator commits the fixes to `main` in `exercism/i18n` and dispatches the issue again,
and that run translates whatever is left, closes the issue and removes the label.

Closed issues are never worked. The source repo's queue closes an issue as "not planned" when
`ready-to-translate` is removed from the PR. A dispatch that is pending or running at that
point stops without translating or pushing, and posts nothing on the issue. A run checks this
when it starts and again just before it commits.

`scripts/work-issue.mjs` runs the same pass without the git steps or the issue updates. A
person runs it when an issue needs a human decision, such as a change above `config.json`'s
`issue_word_cap`, which the automated path refuses.

### Secrets and the GitHub App

The loop acts as the Exercism i18n GitHub App (`exercism-i18n`), which is installed on every
repo in the `exercism` organisation. Its id is the organisation variable `EXERCISM_I18N_APP_ID`
and its private key the organisation secret `EXERCISM_I18N_APP_PRIVATE_KEY`, both visible to
every repo. Each job mints a short-lived installation token with
`actions/create-github-app-token`, limited to the repos and permissions that job needs:

| Workflow | Repo | Permissions | For |
| --- | --- | --- | --- |
| `translate-issue.yml` | `exercism/i18n` | Contents write, Issues write | the push to `main`, the comments, the `needs-attention` and `over-cap` labels and the close |
| `retry-stale-issues.yml` | `exercism/i18n` | Issues read | listing the open issues |
| `retry-stale-issues.yml` | `exercism/translator` | Contents write | the `repository_dispatch`, which `GITHUB_TOKEN` cannot raise in a way that starts a run |

So the comments, labels and closes on a queue issue are by `exercism-i18n[bot]`, and so are
the commits on `exercism/i18n` `main` (`config.json` `github.commit_author`). `exercism/i18n`
dispatches this repo with a token of its own from the same app.

The one other secret is `DEEPSEEK_API_KEY`, a repository secret here, for the translation
engine. No secret or token is ever printed or written to a file in either repo.

### This repo is public

The repo is public so that Actions minutes are free, which is why the queue runs here and
not in `exercism/i18n`. That shapes how the workflows are written:

- There is no `pull_request_target` and no trigger that a fork's PR can reach. The only
  triggers are `repository_dispatch`, which needs a token with write access here, and a
  schedule. Nothing from outside the repo is executed.
- A run only executes code from this repo at `main` and `exercism/i18n` at `main`. Source
  repos are read as git objects at a ref. They are never checked out or run.
- Issues are treated as data. Their title and body are written by whoever opened the source
  PR. Three values are taken from an issue, each matched by a strict pattern and verified
  against GitHub, and nothing else in it is read, printed or passed on.
- `.env` is gitignored and holds the local keys. On the runner, keys arrive as environment
  variables from the secrets above.

## Quick start

```bash
node scripts/test.mjs                              # the whole pass over a fixture, with a fake engine
node scripts/check-routes.mjs                      # every content type has a how-to, a command and a script
node scripts/source-checkout.mjs ruby              # fetch a source repo into .source/
node scripts/translate.mjs track ruby hu --dry-run # what a run would do, and what it would cost
```

The scripts do not implement `--help`. Each script's header comment documents it.
