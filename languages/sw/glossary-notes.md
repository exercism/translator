# Swahili (sw) glossary notes

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (content type) | changamoto | | high |
| concept (curriculum item) | dhana | | high |
| hint | kidokezo (pl. vidokezo) | | high |
| feature (platform) | huduma | | high |
| chat / AI chat | gumzo (la AI) | | medium |
| unlock / locked | kufungua / imefungwa | | medium |
| upgrade (plan) | kuboresha | | medium |
| Deep Dive (feature name) | Uchambuzi wa Kina | | medium |
| scenario (test) | senario | | medium |
| scrubber | kitelezi | | low |
| quiz | maswali | | low |

`breakpoint` and prose `bug` kept English: no settled Swahili equivalent, candidates for the
Keep-in-English table. `/mo` renders as `/mwezi`, three characters longer than English —
worth a layout check on the checkout modal.

## 2026-08-01: Guide pruned to rules only; rationale moved here

**Decided by:** agent, in a guide-pruning pass. `guide.md` is loaded into the prompt for
every Swahili item, so it now carries only imperative rules and the worked examples that
teach something the rule alone does not. Every behavioural instruction was kept; only
rationale, provenance and duplication were removed.

**Why there is no `sw-TZ`/`sw-KE` split.** Research found real differences in which
*technical terms* different institutions and communities favour (Tanzania's BAKITA/TATAKI
lean toward regulated native coinages, Kenyan usage leans more toward retaining English),
but no evidence of a written-language divergence large enough to need separate
guide/glossary files. Where a specific technical term is genuinely contested between
communities, the glossary keeps English and glosses the Swahili rather than picking a side;
that is a glossary policy, not something a translator acts on per file, so it lives here
and the guide states only "write Standard Swahili, there is no locale split".

**Where the tutorial register comes from.** The "short, direct, encouraging, plain
second-person-singular imperative" register in the guide was taken from real Swahili
tutorial content aimed at this audience (diji.africa's computer lessons, jifunzebure.com),
as against the more formal or bureaucratic Swahili of government and legal documents.

**Why the bare singular imperative, and not "ninyi".** Swahili has no French-style
formal/informal pronoun split (no T-V distinction), but it does form imperatives straight
from the verb stem for singular "you", and that is what the tutorial sources consistently
use. Research did not confirm a reliable "ninyi as singular honorific" convention in modern
usage, so the guide forbids switching to the plural form. If a native reviewer later says
otherwise for a specific context, that is a correction to the guide, not something to guess
at pre-emptively.

**Capitalization and punctuation.** Research surfaced no Swahili-specific
instructional-prose convention diverging from ordinary Latin-script sentence capitalization
and punctuation, so the guide no longer says anything about it (saying "the default
applies" is not a rule).

**The acronym bullet was removed from the guide.** It said not to drop an acronym bare on
first use and to explain the concept in Swahili instead. The first-occurrence framing
contradicts `global/voice.md`, which has no first-use auto-detection: only a `<define>`
triggers a gloss, ever. The surviving content is already carried, in exactly that form, by
the `API` and `CLI` rows in `glossary.md` ("explain the concept where the source
`<define>`s it, do not just gloss the acronym"), and the general principle by
`global/voice.md`. Nothing behavioural was lost.

**Contradictions fixed in the guide's worked examples. Status: unconfirmed drafts.** Three
examples used terms the glossary had already settled elsewhere, so the examples were
corrected to the glossary (the glossary rows are unchanged, and the guide's own imperative
rules outrank its examples):

- "in the function" was glossed *ndani ya kazi*, using `kazi` for "function", contradicting
  both the `function` = `kitendakazi` row and the guide's own rule that `kazi` stays free
  for its everyday "work/job" sense. Now *ndani ya kitendakazi*.
- "The function returns a value" was *Kazi hii inarudisha thamani*, wrong on both the same
  point and on the verb: `to return (a value)` is `kurejesha`, not `kurudisha`. Now
  *Kitendakazi hiki kinarejesha thamani*, which also carries the class 7 agreement
  (`hiki`, subject prefix `ki-`) the guide's noun-class rule demands.
- The locative example was written *msimbo-ni* with a hyphen. The `-ni` suffix is written
  attached, so it is now *msimboni*.

**Two gaps left open, deliberately not filled in this pass.** The guide states that
noun-class agreement must match each noun's class, but says nothing about which class an
**English-kept** technical term (`variable`, `string`, `object`, `scope`, `parameter`,
`argument`, `index`, `component`, ...) takes in Swahili prose, nor what agreement follows
from it. Swahili loanwords of this shape usually default to class 9/10, which would give an
invariant singular/plural and `hii`/`hizi` agreement, but nothing in the research or the
decision log settles it, so no rule was invented. Separately, the guide states no
quotation-mark convention at all (the examples use ASCII `"` throughout, consistently, so
there is no glyph mismatch to fix). Both are top candidates for native-speaker review.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Swahili:

- **`interpreter`.** **`mkalimani` was confirmed**: it
  is the ordinary Swahili word for a human interpreter, class 1/2 animate, so it takes the
  same agreement a person takes (`mkalimani huyu`, `wakalimani hawa`), and it is the
  word an ordinary speaker already knows rather than a coinage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Swahili glossary drafted for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs. Swahili computing terminology is unevenly documented: terms for
older, common concepts (number, error, class) are well attested across independent
sources, while many terms for more abstract or newer concepts either have no credible
institutional source, or the sources that exist disagree with each other. Where a term
looked fragile or contested, this pass kept it in English rather than presenting a
guessed coinage as settled (see "Keep in English" in `glossary.md`), and left it as an
open question for native-speaker review.

**The big one: `function` changed from `kazi` to `kitendakazi`.** `kazi` is also the
ordinary Swahili word for "work/job", and it collided with that everyday sense twice on
the using-functions page alone ("it's his job to interpret the code", "how that machine
actually works"), both of which want `kazi` in its everyday meaning. The translator had to
write around the collision on that one page, and it would recur on every functions page
after it, so this pass fixed it once here rather than dodging it per page.
`kitendakazi` is morphologically transparent (`ki-` + `tenda` + `kazi`, "the thing that
does the work") and appears in Swahili software-localization usage, but the agent found no
hard institutional CS citation for it and rates its own confidence medium. This is a noun
class change, from class 9/10 (`kazi`, no distinct singular/plural form) to class 7/8
(`kitendakazi` / `vitendakazi`), so agreement markers move with it: `kitendakazi hiki`,
`vitendakazi hivi`.

**Honest fallback:** if a native speaker calls `kitendakazi` a bureaucratic coinage that
does not read naturally, keeping `function` in English would be consistent with how this
glossary already treats `variable`, `parameter`, `argument`, `scope` and `object`, all of
which stay English here for the same reason (no confidently-sourced native term). This is
the single most load-bearing term in the curriculum, so it is the top item for
`/action-forum-post` once native speakers engage.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `function`) is not
repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Medium confidence; institutional sources disagree on a single preferred verb form. |
| developer | Well attested across dictionary and community sources. |
| tech industry | Compositional (`sekta` = sector, `teknolojia` = nativized loanword "technology"), not independently sourced as a fixed phrase but low ambiguity risk. |
| streak | Ordinary word for "a series/succession, in a row", not CS-specific but a natural fit for a daily-use streak. |
| pitfall | Ordinary word ("trap"); natural extension. |

### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary word; medium confidence, sourced from the Kilinux terminology project. |
| number | Very well established across all sources. |
| integer | Compositional (`kamili` = whole/complete); confirmed in math-education Swahili, extended to CS by analogy. Medium confidence. |
| float / decimal | Nativized loanword; confirmed only in math-education sources, not CS-specific. Medium confidence. |
| character | Ordinary word for "letter/character". Medium confidence. |
| true / false | Low-medium confidence: sourced from two independent hobbyist Swahili-keyword programming languages (Nuru, Jenga on GitHub), not an institutional source. |
| array / list | Ordinary word for "list". Medium confidence. |
| dictionary (data structure) | No credible CS-specific source found, and real risk of collision with `kamusi` (a literal dictionary/reference book). |
| element | Sourced from a Swahili Wikipedia OOP article. Medium confidence. |
| index | No credible source found. |
| string | No credible CS-specific source found; `mfuatano` ("sequence") surfaced only as an unconfirmed candidate. |
| data type | Compositional, sourced from a Swahili Wikipedia Python article. Medium confidence. |

### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Compositional (`kauli` = statement, `masharti` = conditions). Low-medium confidence, not directly sourced. |
| condition | Ordinary word. |
| comparison | Ordinary word, from the verb `kulinganisha` (to compare). Extrapolated, not CS-source-confirmed, but low ambiguity risk. |
| expression | Ordinary word ("utterance/expression"). Extrapolated. |
| operator | Candidates (`mwendeshaji`, `kiendeshi`) found only in low-confidence crowd dictionaries. |
| statement (executable) | Low-medium confidence, not directly sourced. |
| statement (logical claim) | Ordinary word. |
| to call (a function) | Ordinary verb ("to call/summon"), natural extension. |
| to define (a function) | "To create/construct". Low confidence, not directly sourced. |
| parameter | The candidate `kigezo` is contested (also used loosely for "criterion" and, unresolved, for "variable"). |
| argument | No credible source found. |
| input (to a function) | Native coinage from `kuingiza` (to insert). Medium confidence, sourced from a UDSM thesis (Malagira 2010). |
| output | Ordinary word ("results/outcomes"). Low-medium confidence. |
| to return (a value) | Ordinary, transparent verb ("to return/give back"). |
| return value | Compositional ("the value that is returned"). Low confidence, but transparent. |
| brackets (the two after a function name) | `mabano` is the everyday word for brackets, and it is what the using-functions page uses ("those two brackets" = `mabano mawili`). |

### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | No credible source found. |
| instruction | Everyday word for something you tell someone to do and they then carry out, which is exactly the board metaphor ("kuweka maagizo kwenye ubao"). Not a formal or legal register word. |
| mental model | The picture-in-your-head framing. `modeli` is a common nativized loanword. The looser `picha ya kichwani` (picture in your head) is a natural alternative and reads well next to the source's own "in my head" phrasing; an open question for native-speaker review. |
| (programming) language | `lugha` is the ordinary Swahili word for a language and beginners already know it, so it was used rather than an English borrowing. |
| code (in prose) | The learner's code as running prose ("the code that you write" = "msimbo unaoandika"). Medium confidence. |
| variable | The single biggest gap found in research: the candidate `kigezo` appears only in math-education sources and also ordinarily means "criterion", causing real ambiguity risk. This may become a settled Swahili term once confirmed. |
| assignment / to assign | Risk of collision with `kugawa` ("to divide/allocate"). |
| code block | Compositional (`msimbo` = code; `kizuizi` = block/barrier). Low-medium confidence, not directly sourced as a fixed phrase. |
| error | Well attested across multiple sources. |
| nested | No single-word coinage confirmed; a descriptive phrase is more reliable than forcing one. |
| iteration | From `kurudia` (to repeat). Low-medium confidence, not CS-source-confirmed. |
| to run / execute (code) | Ordinary verb ("to run/drive"). Extrapolated but low ambiguity risk. |
| loop | Converges across three independent crowd dictionaries, but no institutional source confirmed it as the CS term. |
| loop body | Compositional ("body of the loop"). Low confidence, transparent. |
| scope | Mirrors the "keep English" treatment other languages give this term. |
| class | Ordinarily means "classroom/school class". Sourced from a Swahili Wikipedia Python article. Medium confidence. |
| method | Nativized loanword, transparently recognizable. Medium confidence. |
| property | Ordinarily means "quality/attribute/praise". Medium confidence. |
| object | Two independent Swahili Wikipedia CS articles give conflicting terms (`kiumbile` vs `mfano`), a bad sign for confidence in this cluster. |

### Tooling & engineering

| Term | Why |
|------|-----|
| workflow | Compositional ("flow of work"), using `kazi` in its ordinary "work" sense. Low-medium confidence, not directly sourced. |
| deploy | Research pattern (a SUMAIT 2022 paper) shows newer/web-era terms like this are commonly left bare in real Swahili tech usage. |
| tool / tooling | Ordinary word ("tool/instrument"), extrapolated but low ambiguity risk. |
| module | Nativized loanword, pattern-consistent with `metodu`/`akaunti`/`adapta`, but not independently confirmed for this specific term. Low confidence. |
| algorithm | Also ordinarily means "rule/law/principle". Medium confidence. |
| API | Research found conflicting coinages: a heavy native-coinage version on Swahili Wikipedia against a looser, likely machine-translated paraphrase elsewhere. |
| framework | The candidate `mfumo` is generic ("system/structure") with real ambiguity risk. |
| CLI (the concept) | Only weakly sourced (`kiolesura cha amri`, a single source). |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | Well-established nativized loanword in ordinary use. |
| exercise | Ordinary word for an exercise or drill, already standard in Swahili schooling. |

