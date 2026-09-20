# Exercism translator

The engine that translates Exercism: the guides and glossaries a translation is held to, the
one translation script, the forum tooling, and the automated queue that turns a source-repo
pull request into translated files on `exercism/i18n`'s `main`.

No translated output lives here. Every translation lives in the sibling
[`exercism/i18n`](https://github.com/exercism/i18n), and English lives in the repos it is
authored in. [CLAUDE.md](./CLAUDE.md) is the map of what is where, and
[START-HERE.md](./START-HERE.md) is how a translation pass works.

## The one script

```bash
node scripts/translate.mjs <source> [<track>] <locale> [--dry-run]
```

resolves the work, skips whatever the locale already holds, builds each prompt, calls
DeepSeek, checks the answer with the `i18n` repo's own checker, and writes what passed. No
agent is in the per-item loop, and `--dry-run` reports the work and its cost without calling
anything.

## Automated queue

A PR that changes English is translated with nobody in the loop:

1. The PR opens (or rewrites) an issue in `exercism/i18n`, titled
   `Translate exercism/<repo>#<n>: ...` and labelled `translation`, through the source repo's
   own `i18n-queue.yml`. That PR's completeness check is red until the translations land.
2. `translate-on-issue.yml` in `exercism/i18n` sends one `repository_dispatch` here, carrying
   the issue number and nothing else.
3. `.github/workflows/translate-issue.yml` here runs `node scripts/run-issue.mjs <number>`:
   it verifies the issue (author, label, an allowlisted repo, a sha that belongs to that PR),
   works out what the PR changed from git, translates it for every locale in `i18n`'s
   `locales.json` `productionTargets`, and checks the result with `validate.mjs` and
   `no-deletions.mjs`.
4. It commits in the `i18n` checkout and pushes to `main` there, rebasing and retrying a
   non-fast-forward. That push is the deploy: the website pulls the repo and serves it.
5. It closes the issue with the per-locale counts and the run's cost. Closing re-runs the
   source PR's completeness check (`rerun-source-check.yml` there), which now passes.

Anything that goes wrong leaves the issue **open**, comments on it saying what happened and
links the Actions run whose `state/runs/` artifact holds the summaries and checker logs.
`retry-stale-issues.yml` sweeps every six hours and dispatches any issue that has been
waiting more than two hours, so a GitHub or DeepSeek outage heals itself. A repeat run is
harmless: the one mode is "translate if absent", so an issue whose work is done finds nothing
to do and closes.

`scripts/work-issue.mjs` is the same pass without the git and without the issue: it is what a
person runs when an issue needs a human decision (a change above `config.json`'s
`issue_word_cap`, which the automated path refuses on its own).

### Secrets

Three, all created by iHiD, none of them ever printed or written to a file in either repo.

| Secret | Where | Scope |
| --- | --- | --- |
| `EXERCISM_TRANSLATOR_DISPATCH_PAT` | a repository secret on **`exercism/i18n`**, and on **`exercism/translator`** | fine-grained PAT, Contents read/write on `exercism/translator` only: what `POST /repos/{owner}/{repo}/dispatches` needs |
| `EXERCISM_I18N_PUSH_PAT` | a repository secret on **`exercism/translator`** | fine-grained PAT, Contents read/write and Issues read/write on `exercism/i18n` only: the push, the comment and the close |
| `DEEPSEEK_API_KEY` | a repository secret on **`exercism/translator`** | the translation engine |

The dispatch PAT is needed in both repos: `exercism/i18n` dispatches with it, and this repo's
own retry sweep dispatches with it too, because an event raised by the default `GITHUB_TOKEN`
deliberately starts no further workflow run.

### This repo is public

It is public so that Actions minutes are free, which is the whole reason the queue runs here
rather than in `exercism/i18n`. That decides how the workflows are written:

- **No `pull_request_target`, and no trigger a fork's PR can reach.** The only trigger is
  `repository_dispatch`, which needs a token that already has write access here, plus a
  schedule. Nothing that arrives from outside the repo is ever executed.
- **The only code a run executes is this repo at `main` and `exercism/i18n` at `main`.** A
  source repo is read as git objects at a ref, never checked out and never run.
- **An issue is data.** Its title and body are written by whoever opened the source PR.
  Exactly three values are taken out of an issue, each by a strict pattern and each verified
  against GitHub, and nothing else in it is read, printed or passed on.
- **`.env` is gitignored** and holds the local keys. The runner's keys arrive as environment
  variables from the secrets above.

## Quick start

```bash
node scripts/test.mjs                              # the whole pass over a fixture, with a fake engine
node scripts/check-routes.mjs                      # every content type has a how-to, a command and a script
node scripts/source-checkout.mjs ruby              # fetch a source repo into .source/
node scripts/translate.mjs track ruby hu --dry-run # what a run would do, and what it would cost
```

`node scripts/<name>.mjs --help` is not implemented. Each script's header comment is its
documentation.
