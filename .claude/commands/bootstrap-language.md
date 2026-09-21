---
description: Research a new language and draft its guide + glossary. Researches and discusses before writing anything.
argument-hint: <lang>
arguments: lang
allowed-tools: Read, Write, Edit, Glob, Bash, WebSearch, WebFetch
model: opus
effort: high
---

**Do not run git.** No `add`, `commit`, `push`, `pull`, `checkout`, `stash`, `branch` or
worktree operation, in any repo. Write your files, leave them uncommitted, and list them in
your report. See "Git belongs to the orchestrator" in `global/workflow.md`.

Bootstrap a brand-new language: research how the language is really written, agree the
decisions only the project owner can make, then draft `languages/<lang>/guide.md` and
`languages/<lang>/glossary.md` using Hungarian as the structural basis.

**Hard rule: research and discuss BEFORE writing.** This command runs in phases. You do
the research, then you STOP and discuss findings and open questions with the owner. You
write no files until the owner has answered. Do not shortcut to drafting.

- `$lang` = the language code to bootstrap (e.g. `de`, `ja`, `es-419`, `pt-BR`)
- Raw arguments: `$ARGUMENTS`

If `$lang` is missing, stop and ask.

## Phase 1: Guard

`$lang` must be a locale code (ISO 639-1, e.g. `de`, `ja`; or ISO 639-1 plus region/script,
e.g. `es-419`, `pt-BR`, `zh-CN`), never the spelled-out English name of the language. If
`$lang` does not match `^[a-z]{2,3}(-[A-Za-z0-9]{2,8})?$`, or is a spelled-out name (e.g.
`ukrainian`, `polish` rather than `uk`, `pl`), stop and ask for the correct code before
doing anything else. This code becomes the directory name, the `names.json` key, and , 
via `scripts/create-forum-language-category`: the live Discourse category slug
(`i18n-<lang>`), so a wrong code here propagates into an external system, not just this
repo.

If `languages/$lang/` already exists, stop and report it. This command is only for
languages that have not been set up. (To revise an existing language, edit its files or
use the feedback loop via `/action-forum-post`.)

## Phase 2: Load the template and rules

Read, and treat as the authority for structure and constraints:

1. `global/rules.md`: what may and may not change, and house style.
2. `global/voice.md`: the language-neutral audience and voice principles this guide must
   realize.
3. `global/workflow.md`: how glossary rows are agreed, written, and attributed. Phase 5
   writes a glossary, so its rules bind this command.
4. `content-types/exercise-docs.md` and `content-types/website-backend.md`: the two types
   with the most text: exercise prose, and the product's own UI vocabulary.
5. `languages/hu/guide.md` and `languages/hu/glossary.md`: the **structural basis**. The
   new guide mirrors this section shape; the new glossary mirrors this format. You are
   copying the structure and rigour, not the Hungarian content.
6. `global/terms.md`: a language-agnostic list of English terms worth checking, not a
   list this glossary must cover. See Phase 3 for how to use it.

## Phase 3: Research the language (the core of this command)

Research how content for this audience (people learning a programming language, from
complete beginners to experienced developers, taught by a warm, informal mentor) is genuinely
written in this language,
and what its established technical vocabulary is. Quality of sourcing matters more than
speed.

**Sourcing rules (read carefully):**

- **Avoid LLM-generated contamination.** A large share of post-2022 web content is machine
  written or machine translated and will teach you unnatural, homogenised phrasing. Do not
  learn the language's norms from it.
- **Prefer pre-LLM-era, human-authored, authoritative sources.** Favour material published
  before 2022: established programming textbooks and their translations, university lecture
  notes and course materials, national language academies and official style guides,
  reputable dictionaries, long-standing software-localization glossaries and style guides
  (for example Microsoft Language Portal / Microsoft style guides, Mozilla, KDE, GNOME,
  Ubuntu translation teams), and tech publications with a real human editorial history.
- **Cross-verify.** For every important term or convention, confirm it against at least two
  independent, human-authored sources. Record the source and its date so the owner can
  judge how much to trust it.
- **Be explicitly suspicious** of content farms, SEO blog spam, AI-writing sites, and
  auto-translated pages. If a term only appears in such places, treat it as unverified.
- **When unsure, flag it as a question** for the owner or for native speakers later. Never
  paper over uncertainty with a confident guess.

**What to find:**

- **Writing norms:** how instructional/tutorial prose reads naturally in this language,
  sentence rhythm, how imperatives and encouragement are phrased, punctuation and
  capitalization conventions.
- **Register and formality:** the natural level of formality for online learning content,
  and any formal/informal address distinction (T-V) the language has.
- **Technical terminology:** the established, natural words real developers and educators
  use for core programming concepts (function, variable, loop, value, array/list, string,
  etc.), including where English loanwords are the norm versus native coinages.
- **Product vocabulary:** how comparable learning platforms and developer communities that
  ARE localised into this language (and were localised by people) render words like track,
  mentor, solution, reputation and badge. `global/terms.md` § "Exercism product vocabulary" is
  the list. These are the rows that appear on the most pages.
- **Interpolated values:** Exercism's UI strings and analyzer comments interpolate words the
  translator cannot see (`%{track_title}`, `{{handle}}`). Find out what this language needs in
  order to stay grammatical around an unknown word (an article that depends on the next sound,
  case endings, gender agreement), so the guide can state a rule, as `languages/hu/guide.md` does.
- **A community-submitted glossary, if one exists.** Check the forum for a candidate
  glossary thread for this language before drafting one. Treat it as one input to verify
  against the sourcing rules above, never as a shortcut: cross-check every row rather than
  assuming it is correct, and call out anything that looks like a copy-paste artifact from
  another language's template (e.g. two unrelated English terms sharing one target word).

**Start from the canonical term list, don't re-mine it.** `global/terms.md` is the
maintained, language-agnostic catalogue of English vocabulary (core CS, and Exercism's own
product vocabulary) worth checking. Read it and use it as the
starting point for this language's research and Phase 4 proposal, instead of grepping the
English source content from scratch.

**It is a checklist, not a template.** Work through it term by term and ask, for *this*
language, one test: are there two defensible renderings, or one obvious one? Only the first kind earns a glossary row. Most languages
will keep well under half the list, and two languages keeping different halves is the
expected outcome, not a bug: the words that carry a real choice differ from language to
language. A glossary that mirrors this file has not been researched, it has been
transcribed.

Only fall back to fresh source-mining if you have a specific reason to think
`global/terms.md` is stale or incomplete for this pass (e.g. it hasn't been refreshed in a
long time, or this language's content type has unusual vocabulary needs). If you do mine
the source, fan out one subagent (haiku is enough) per content group in parallel, each
reading its own group's English, **as git objects at `origin/main` and never from a working
tree** (`git -C <checkout> show origin/main:<path>`; the sibling checkouts are shared with live
sessions and are usually on a feature branch):

- the website's two catalogs: `node ../i18n/scripts/build-english.mjs --out=<a scratch dir>`
- `../problem-specifications`: `exercises/*/{introduction,instructions}.md`
- one large track (`../ruby`, `../python`): `concepts/*/about.md`, `exercises/concept/*/.docs/*.md`
- `../docs`: `using/**/*.md`

Ask each subagent to (1) verify a sample of the core terms actually appear in that group's
prose, and (2) surface recurring technical/platform terms not yet in the proposed term
list. Filter out ordinary English words that don't need a glossary entry.

**Whichever path you took, add any genuinely new term you found to `global/terms.md`**
(the right category, no translation, just the English term and a short note), and mention
the addition in the Phase 6 report. This does not need owner agreement (no language is
being committed to a translation); only the target-language rendering in
`languages/$lang/glossary.md` goes through that gate.

## Phase 4: Discuss (STOP here, write nothing)

Produce, in chat, and then wait for the owner:

1. **A research brief:** what you found about writing norms, register, terminology, and
   product vocabulary, with sources and dates. Be honest about confidence and about
   anything that smelled LLM-generated and was therefore discarded.
2. **Owner decisions:** a numbered list of the choices only the project owner can make,
   framed so a non-native speaker can answer. These typically include: the formality /
   address level (e.g. informal T-form vs formal), the policy on English loanwords vs
   native terms for core tech vocabulary, capitalization and punctuation style, how to
   handle interpolated values, and any regional-variant or inclusive-language choices.
   Give your researched recommendation for each, with the trade-off, so the owner can just
   confirm or adjust.
3. **Proposed core glossary terms:** Exercism's product vocabulary and core programming
   terms, each with the proposed target term, a source-backed rationale, and a confidence
   level, in the `global/pass-mechanics.md` delta format. These are proposals to agree now.

Do not create or edit any file in this phase. Wait for the owner's answers.

## Phase 5: Write the guide and glossary (only after answers)

**First, check whether `$lang` belongs to a language family** (its code has a "-" and a
sibling locale sharing the part before it either already exists or is being bootstrapped
alongside it, e.g. `zh-CN`/`zh-TW` both belonging to `zh`). See `CLAUDE.md` § Language
families for the full rules. If it does:

- If `languages/<family>/` does not exist yet, create it as part of this pass: put
  everything genuinely shared across the family's locales (voice, grammar, register,
  conventions, and every glossary term confirmed identical, not just assumed to be) in
  `languages/<family>/guide.md` and `glossary.md`. Only what is confirmed to diverge for
  `$lang` goes in `languages/$lang/guide.md`/`glossary.md`, which opens by pointing at the
  family files for everything else.
- If `languages/<family>/` already exists, this pass only researches and drafts `$lang`'s
  delta against it. Do not re-litigate or duplicate the family's shared content; only
  propose changes to it if research turns up a specific reason the family base is wrong.
- A term lives in exactly one glossary file (family or locale), never both.

Once the owner has answered:

- Create `languages/$lang/guide.md`, mirroring the section structure of
  `languages/hu/guide.md`: **Formality** (the register, stated imperatively), **Grammar**
  (only what is easy to get wrong from outside the language), **Information structure**
  (where the language's word order is not English-like), and **Style notes** (typography,
  punctuation, the em-dash replacement, how the name "Exercism" inflects). Under Grammar,
  include the rule for interpolated values. Fill them with this language's researched specifics
  and the owner's decisions. It realizes `global/voice.md`; it does not restate global rules.
  Follow the "one home" rule in `CLAUDE.md`: the guide explains how to write, it never
  restates term mappings (those live in the glossary).

  **The guide holds rules, not the research that produced them.** Everything you learned in
  Phases 1-3 (which platforms you surveyed and what they do, why one register beat another,
  connotation analysis, confidence ratings, who decided what) goes in `glossary-notes.md`.
  This is not a stylistic preference: the guide is loaded into the prompt for **every item,
  in every pass, forever**, while `glossary-notes.md` is loaded by nobody during a pass. A
  2026-08-01 audit of all 34 guides found 4-38% of each was research and justification
  rather than instruction, almost all of it written at bootstrap time.

  Two specific traps, because every guide bootstrapped from this command fell into both:

  - **Do not write an "Audience specifics" section.** `global/voice.md` owns the audience.
    Once the research moves to the notes, what is left is "readers are in \<country\>",
    which changes nothing a translator writes. If a fact about the audience does change the
    writing, it belongs inside the rule it affects.
  - **Do not write a "Worked examples" or "Common EN→XX pitfalls" section that re-runs
    rules stated earlier.** Put each example beside the rule it illustrates, and only where
    it teaches something the rule statement alone does not. Several guides stated the same
    rule three times across these two sections.

  A rule that arrives with its justification attached is the symptom to watch for. State
  the rule imperatively; put the reason in the notes.
- Create `languages/$lang/glossary.md`, mirroring the format of `languages/hu/glossary.md`.
  Write in only the core terms the owner agreed in Phase 4; nothing unagreed goes in. It is
  a term table only, no style prose.
  - **Also create `languages/$lang/glossary-notes.md`**, the decision log, mirroring
    `languages/hu/glossary-notes.md`. It holds decisions and nothing else, so it does not
    restate the rules for keeping it (those live in `global/workflow.md`). Write a single
    entry recording this bootstrap: the owner agreed to your researched proposal, but no native
    speaker has confirmed any rendering, so say so plainly and name the sources your
    research rested on. Record separately any row a native speaker really did confirm (e.g.
    on a community glossary thread you verified in Phase 3), with the topic reference. See
    "Glossary writes are additive" in `global/workflow.md`: this file is what later passes
    read to know which of your drafts they may still correct.
  - **No "Provisional" section for a new language.** That section exists on older
    glossaries as legacy, not as a pattern to repeat. For a freshly bootstrapped language,
    a term is either agreed (goes straight into the appropriate table below) or it isn't
    (leave it out of the file entirely and flag it as an open question in the Phase 6
    report instead).
  - **Split the "Localize" table by theme**, not one giant flat table. Use these five
    section names verbatim so every language's glossary reads the same way: "Values & data
    types", "Functions & control flow", "Loops, state & program flow", "Tooling &
    engineering", "Exercism product vocabulary". Omit a section entirely if this
    language has no terms for it yet; do not create an empty table.
- Obey `global/rules.md` and house style throughout, including **no em dashes** and **no
  soft-wrapped prose** (every glossary paragraph is one physical line; see `global/rules.md`).

## Phase 6: Report

State the files created, summarize the decisions baked in, and list any terms still open or
flagged low-confidence for native-speaker review via `/action-forum-post`.

## Phase 7: Create the forum glossary post

After the guide and glossary are written, create the forum infrastructure for this language.

1. **Add the locale to `languages/names.json`** if it is not already there. The value is
   the plain English language name (e.g. `"pt-BR": "Brazilian Portuguese"`). Both forum
   scripts read their language name from this file; they will fail without it.

2. **Ensure the forum category exists.** Check `languages/<lang>/tracking.json` for a
   non-null `category_id` for this locale. If it is null or absent, run:
   ```bash
   ./scripts/create-forum-language-category $lang
   ```
   The script derives the slug and display name from `languages/names.json`, creates
   the category and its pinned "Want to Help" topic, and records the category id in
   `tracking.json`. The forum runs Discourse 3.3, which has no category emoji badges,
   so there is no flag to choose.

3. **The glossary must be pushed to GitHub before the post is created.** The pinned post
   links to `languages/$lang/glossary.md` on GitHub rather than carrying the table
   (`scripts/glossary-post-body` says why), so if the orchestrator has not committed and
   pushed the new language yet, the link lands on nothing. Stop here, report the files, and
   continue only once the orchestrator confirms the push.

4. **Create the pinned glossary post:**
   ```bash
   ./scripts/create-forum-glossary-post $lang
   ```
   The script posts a pinned thread whose body points at the glossary, and writes
   `glossary.topic_id` and `glossary.post_id` back into `languages/<lang>/tracking.json`.
   This first post is itself the announcement, so the reply step of "A glossary change
   (commit, push, reply)" (`global/workflow.md`) does not also apply here.

5. **Report `languages/<lang>/tracking.json` as changed**, for the orchestrator to commit.

**TODO(iHiD): the rights these scripts need on forum.exercism.org are unverified** (creating a
category, editing its About post, creating and pinning a topic), and the parent i18n category
did not exist when this was written. If a script reports a refusal, print exactly what it said
and stop: it reports the HTTP status and the body. Never retry a forum write. See "What the
forum API user needs" in `orchestrator.md`.

There is **no language stage and no engine to record**: DeepSeek translates every language, and
a language's first content arrives as one full pass. The orchestrator adds the locale to
`../i18n/locales.json` `targets` in the same commit that brings that first content.
