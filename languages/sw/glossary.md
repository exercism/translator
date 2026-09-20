# Swahili (sw) glossary

The agreed term list for Swahili. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| programming / coding | **kupanga programu** (verb) / **programu** (the software itself) | sw | `programu` also serves as the noun for "program/software"; use `kupanga programu` for the activity of programming. |
| developer | **msanidi programu** | sw | |
| tech industry | **sekta ya teknolojia** | sw | |
| streak | **mfululizo** | sw | |
| pitfall | **mtego** | sw | |

## Term decisions by theme

Terms discussed in prose, split by theme for readability. Every table follows the same
columns as above.

### Values & data types

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| value | thamani | sw | |
| number | namba | sw | `nambari` is an accepted variant. |
| integer | namba kamili | sw | |
| float / decimal | desimali | sw | |
| character | herufi | sw | |
| true / false | kweli / sikweli | sw | |
| array / list | orodha | sw | |
| dictionary (data structure) | **(kept English)** | en | Give the gloss "kama kamusi, inaunganisha funguo na thamani" (like a dictionary, links keys to values) where the English itself explains the term. |
| element | kipengele | sw | Reserved for the data-structure sense; platform "feature" uses a different word (`huduma`) to avoid collision. |
| index | **(kept English)** | en | Gloss as "nafasi ya kipengele katika orodha" (the position of an element in a list) where the English itself explains the term. |
| string | **(kept English)** | en | Gloss as "mfuatano wa herufi" (a sequence of characters) where the English itself explains the term, then use `string`. |
| Boolean | **(kept English)** | en | Gloss as "aina ya data yenye thamani mbili tu: kweli au sikweli" (a data type with only two values: true or false) where the English itself explains the term, then use `Boolean`. |
| data type | aina ya data | sw | |

### Functions & control flow

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| if statement | kauli ya masharti | sw | The `if` keyword itself always stays English in code, per global rules. |
| condition | sharti / masharti | sw | |
| comparison | ulinganisho | sw | |
| expression | usemi | sw | |
| operator | **(kept English)** | en | Gloss as "kiendeshi, k.m. `+`, `-`" (an operator, e.g. `+`, `-`) where the English itself explains the term, then use `operator`. |
| statement (executable) | amri | sw | The imperative sense: a line of code that does something and gets executed. Chosen distinct from `kauli` (below) to avoid the collision `global/terms.md` flags between the two senses of "statement". |
| statement (logical claim) | kauli | sw | The proposition sense: a claim that is true or false. |
| function | kitendakazi (pl. **vitendakazi**) | sw | Class 7/8, so agreement is `ki-`/`vi-` (`kitendakazi hiki`, `vitendakazi hivi`). The `function` keyword in code always stays English. |
| to call (a function) | kuita | sw | `kuita kitendakazi` = to call a function. |
| to define (a function) | kuunda | sw | |
| parameter | **(kept English)** | en | Gloss as "jina la thamani inayotarajiwa na kitendakazi" (the name of the value a function expects) where the English itself explains the term, then use `parameter`. |
| argument | **(kept English)** | en | Kept distinct from `parameter` per `global/terms.md`. Gloss as "thamani halisi inayotolewa wakati wa kuita kitendakazi" (the actual value given when calling a function) where the English itself explains the term. |
| input (to a function) | ingizo | sw | |
| output | matokeo | sw | |
| to return (a value) | kurejesha | sw | |
| return value | thamani inayorejeshwa | sw | Kept distinct from the verb above. |
| brackets (the two after a function name) | mabano | sw | The `()` pair written after a function name to call it. Where the shape has to be explicit, say `mabano ya duara` (round) as against `mabano ya mraba` (square). |

### Loops, state & program flow

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| keyword | **(kept English)** | en | Gloss as "neno muhimu la lugha ya programu" (an important word of the programming language) where the English itself explains the term. |
| interpreter | mkalimani (pl. **wakalimani**) | sw | Class 1/2, so agreement matches a person (`mkalimani huyu`, `wakalimani hawa`). The verb is `kufasiri` (to interpret). Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| mental model | modeli ya kiakili | sw | |
| (programming) language | lugha ya programu | sw | Say `lugha ya programu` on introduction and plain `lugha` afterwards; the same word also carries "a language that a computer understands". |
| code (in prose) | msimbo | sw | This does not touch the `Code`, `Test` and `Debug` interface labels and tokens, which stay English (see "Keep in English"). |
| variable | **(kept English)** | en | Gloss as "kigezo" where the English itself explains the term with the explanation "mahali panapohifadhi thamani" (a place that stores a value), then use `variable`. |
| assignment / to assign | **(kept English)** | en | Gloss as "kuweka thamani kwenye variable" (to put a value into a variable) where the English itself explains the term, then use `assignment` / `to assign`. |
| code block | kizuizi cha msimbo | sw | |
| error | hitilafu | sw | `kosa` is an accepted variant. |
| nested | (descriptive phrase, not a fixed term) | sw | Use "uliowekwa ndani ya" (placed inside), e.g. `kitanzi kilichowekwa ndani ya kitanzi kingine` = nested loop. |
| iteration | marudio | sw | |
| to run / execute (code) | kuendesha | sw | |
| loop | kitanzi | sw | |
| for loop | `for` kitanzi | sw | Keep `for` in backticks (real keyword) + `kitanzi`. |
| while loop | `while` kitanzi | sw | As above, with `while`. |
| loop body | mwili wa kitanzi | sw | |
| scope | **(kept English)** | en | Gloss as "wigo" (range/scope, ordinary word) where the English itself explains the term, then use `scope`. |
| class | darasa | sw | Always clarify where the English itself explains the term to avoid ambiguity. |
| method | metodu | sw | No clarification needed. |
| property | sifa | sw | Clarify where the English itself explains the term. |
| object | **(kept English)** | en | Gloss as "kitu" (thing, generic) where the English itself explains the term, then use `object`. |

### Tooling & engineering

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| workflow | mtiririko wa kazi | sw | |
| deploy | **(kept English)** | en | Gloss as "kuweka programu tayari kutumika" (to put a program ready for use) where the English itself explains the term, then use `deploy`. |
| tool / tooling | kifaa / vifaa | sw | |
| module | moduli | sw | |
| algorithm | kanuni | sw | Always clarify where the English itself explains the term to avoid ambiguity. |
| API | **(kept English)** | en | Explain the concept in Swahili where the English itself explains the term rather than just glossing the acronym, per `global/rules.md`: "njia ambayo programu mbili zinawasiliana" (a way two programs communicate with each other), then use `API`. |
| framework | **(kept English)** | en | Gloss as "mfumo" where the English itself explains the term, then use `framework`. |
| CLI (the concept) | **(kept English)** | en | Explain the concept where the English itself explains the term: "njia ya kutumia kompyuta kwa kuandika amri" (a way of using a computer by typing commands), then use `CLI`. |
| component | **(kept English)** | en | Gloss as "sehemu" (part/component, ordinary word) where the English itself explains the term, then use `component`. |

### Platform & curriculum vocabulary

| English | Swahili | Use (sw/en) | Notes |
|---------|---------|----------|-------|
| course | kozi | sw | Keep distinct from `somo` (lesson) and `mtaala` (curriculum). |
| exercise | zoezi (pl. **mazoezi**) | sw | |

## Keep in English

These stay in English in Swahili prose, with the Swahili gloss to use for each. No ordinary
Swahili word was found for any of them (rather than a policy choice), so where the source
explains one, use the gloss below; where it does not, use the English bare, with no gloss.

| Term | Swahili word, where the English explains the term | Notes |
|------|----------------------------------|-------|
| string | _mfuatano wa herufi_ (a sequence of characters) | See "Values & data types" table for full note. |
| Boolean | _aina ya data yenye thamani mbili tu: kweli au sikweli_ | See "Values & data types" table for full note. |
| variable | _kigezo (mahali panapohifadhi thamani)_ | See "Loops, state & program flow" table for full note. |
| parameter | _jina la thamani inayotarajiwa na kitendakazi_ | See "Functions & control flow" table for full note. |
| argument | _thamani halisi inayotolewa wakati wa kuita kitendakazi_ | See "Functions & control flow" table for full note. |
| scope | _wigo_ | See "Loops, state & program flow" table for full note. |
| object | _kitu_ | See "Loops, state & program flow" table for full note. |
| index | _nafasi ya kipengele katika orodha_ | See "Values & data types" table for full note. |
| dictionary (data structure) | _kama kamusi, inaunganisha funguo na thamani_ | See "Values & data types" table for full note. |
| keyword | _neno muhimu la lugha ya programu_ | See "Loops, state & program flow" table for full note. |
| assignment / to assign | _kuweka thamani kwenye variable_ | See "Loops, state & program flow" table for full note. |
| operator | _kiendeshi, k.m. `+`, `-`_ | See "Functions & control flow" table for full note. |
| deploy | _kuweka programu tayari kutumika_ | See "Tooling & engineering" table for full note. |
| API | explain what it is in Swahili | See "Tooling & engineering" table for full note. Not a word a beginner knows; where the English itself explains the term, explain the concept, not just gloss the acronym. |
| framework | _mfumo_ | See "Tooling & engineering" table for full note. |
| CLI | explain what it is in Swahili | See "Tooling & engineering" table for full note. |
| component | _sehemu_ | See "Tooling & engineering" table for full note. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | The interface labels and tokens only. |
| Code, Bug, Frontend, Backend | (no gloss) | The interface labels and tokens only. Running prose about "the code you write" uses `msimbo` (see "Loops, state & program flow"). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Swahili has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Swahili | Use (sw/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| mentor / mentoring |  |  |  |
| student (the person being mentored) |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| code review |  |  |  |
| mentoring queue |  |  |  |
| testimonial (left for a mentor) |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| analyzer |  |  |  |
| representer |  |  |  |
| representation |  |  |  |
| test runner |  |  |  |
| tests passed / tests failed |  |  |  |
| online editor / the editor |  |  |  |
| the Exercism CLI |  |  |  |
| reputation |  |  |  |
| badge |  |  |  |
| trophy |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| maintainer |  |  |  |
| Insiders |  |  |  |
| donation / to donate / donor |  |  |  |
| perks |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| approach (to an exercise) |  |  |  |
| article (on an exercise) |  |  |  |
| deep dive (video) |  |  |  |
| challenge (community event) |  |  |  |
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
