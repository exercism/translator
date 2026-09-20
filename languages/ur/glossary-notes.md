# Urdu (ur) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Urdu glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Urdu
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Urdu has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- **The guide character's name** was kept in Latin script, taking Urdu postpositions
  directly. The general rule survives in `guide.md`.
- `track / pathway` → راستہ.
- `scenario` → منظرنامہ, in the sense of a structured variant within an exercise.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (product feature) | چیلنج | Transliteration; مقابلہ would read as "competition". | high |
| dashboard | ڈیش بورڈ | Settled transliteration, names a top-level nav destination. | high |
| concept (curriculum item) | تصور | "Concept Library" = تصورات کی لائبریری; alternatives نظریہ / خیال. | medium |
| Premium (plan/brand) | پریمیم | Transliterated rather than kept Latin; used adjectivally throughout. | medium |
| Deep Dive | ڈیپ ڈائیو | Feature name transliterated; تفصیلی حل was the descriptive alternative. | medium |
| hint | اشارہ | Vs the transliterated ہنٹ, also common in Pakistani ed-tech. | medium |
| to unlock | کھولنا / کھل جانا | Lock/unlock metaphor recurs; ان لاک کرنا was the alternative. | medium |
| syntax | سنٹیکس | Vs کوڈ کی ساخت; interpreter-catalog passes will hit this heavily. | low |
| Learn to Build | بنانا سیکھیں | Translated to parallel پروگرامنگ سیکھیں; could stay English as a brand title. | low |

`syntax` and `Learn to Build` are the two rows worth a native speaker's ruling on the Urdu
glossary thread. Flag, not a row: Urdu first-person verbs are gendered: an "I'll try
first" phrasing was kept masculine (سوچ رہا ہے), consistent with treating the interpreter as
a character; a reviewer should confirm that's the intended default.

Cross-cutting RTL note (not Urdu-specific): a header UI string bakes a
literal directional arrow into the catalog string (`→`/`←`), which belongs in CSS/an icon,
not catalog text — every RTL locale will hit this.

## 2026-08-01: Guide slimmed to rules only

**Decided by:** agent, on an owner-requested pass over `guide.md`. No rule was changed or
dropped; everything below is the reasoning that used to sit in the guide and is kept here
instead, because the guide is loaded into the prompt for every Urdu item in every pass.

**Provenance of the settled conventions.** The guide's conventions (the aap register,
verb-final SOV, Urdu punctuation, Western digits, ergative "ne" on perfective clauses,
light verbs) were drafted during the language bootstrap and then exercised end to end on
the first real Urdu page, the using-functions concept page. They draw on real Urdu tutorial
forums, general-audience Urdu tech explainers, Mozilla's Urdu localization style guide, and
Urdu Wikipedia. Duolingo has no Urdu course and no Urdu-language UI, so unlike most other languages there was no Duolingo Urdu tone to benchmark against. None of this has yet been
reviewed by a native speaker: the conventions remain unconfirmed drafts, except those
covered by the 2026-07-30 owner entry below.

**Script.** "Roman Urdu" (Urdu phonetically spelled in Latin letters) was rejected because
it is a texting and social-media convention, not something serious educational writing
uses; real Urdu educational and technical content is written in the Perso-Arabic script.

**Western digits.** Keeping Western Arabic digits (`30`, not the Eastern Arabic-Indic
form) is confirmed standard practice in Urdu technical and digital content, and Mozilla's
Urdu localizer guide is explicit on the point. This is a genuine divergence from Persian,
which keeps the Eastern forms, so do not copy the Persian rule across.

**Backticking bare English tokens in RTL prose.** The reason the guide tells the
translator to lean on code formatting rather than trusting the renderer: mixing bare Latin
tokens into an RTL line is a documented, still-unresolved pain point even for mature
RTL-aware projects (KDE's localization team tracks it as open bugs). Backticked code is
visually distinct and reads far more cleanly than an unmarked script switch.

**Formality: aap, not tum or tu.** This looks like a departure from other languages'
"use the informal register", and is not. In real Urdu digital and educational writing aap
*is* the modern, warm, everyday register, confirmed across independent sources: an Urdu
programming-tutorial forum thread, a general-audience Urdu coding explainer, and Mozilla's
Urdu localization style guide, all of which use it for exactly this kind of warm,
instructional, second-person address. Tum carries either family/close-friend intimacy or,
from an unfamiliar voice, reads as presumptuous; tu is intimate-to-rude outside
very close relationships. Aap is therefore the correct mentor-voice choice, not a formality
downgrade.

**Brackets.** The reason no counting word is used is that the pairness is already carried
by the dual form of the word itself, and the accompanying code and images already show two
brackets.

**A Latin-script name plus postpositions.** The pattern of attaching Urdu postpositions directly after the
Latin-script name is already in use in real translated content (the using-functions concept
page). The general instruction to flag awkward constructions for native-speaker review was
dropped from the guide as a restatement of `global/rules.md` § "When unsure".

**Duplicates and defects removed.** The guide stated the Western-digits rule twice (once in
the Script section, once as a "Numbers in running prose" style note); it is now stated once,
with "including mid-sentence in running prose" folded into it. The "Audience specifics" and
"Worked examples" sections restated `global/voice.md`'s own headings (titles, calls to
action, acronyms); the restatements were dropped and the concrete Urdu examples kept. The
"Term clarification" section restated voice.md's rule that a `<define>` tag is the only
trigger for a gloss; only the Urdu-specific consequence was kept, namely that a settled
transliteration the reader recognizes is still glossed where the source marks it. The
worked example explaining "API" was dropped from the guide because the identical Urdu
explanation is already in the glossary's `API` row. One typo was fixed: an accidental Urdu
"ya" stood where the English "or" belonged in the ergative bullet ("a missing or misplaced
ne").

**Checked for contradictions, none found.** The digit rule and every example agree (Western
digits throughout; the Eastern form appears only as the counter-example). The quotation
convention is stated once and is not contradicted anywhere. There is no instruction to
gloss a term on first occurrence, so the defect found in the Persian and Arabic guides is
absent here. No coverage gap was filled and no new rule was added.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Urdu:

- **`interpreter`.** Urdu's previous rendering,
  the transliteration "انٹرپریٹر", reads as software and is opaque to a beginner, so it
  could not do that job. It moves to **مترجم**, the ordinary Urdu agent noun for "one who
  translates/interprets", which matches the verb the page already uses for the job,
  "ترجمہ کرنا" (to interpret). "مترجم" also means a translator of human languages; that
  overlap is accepted because it is exactly the metaphor the page teaches. "ترجمان" was
  considered and rejected: in modern Pakistani Urdu it means "spokesperson", not
  "interpreter".
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Urdu glossary drafted for the concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

The rows added for the using-functions concept page (the metaphor terms, `mental model`,
`instruction`, `(programming) language`, and the rest of the "Functions &
control flow" and "Loops, state & program flow" tables) are draft renderings, not yet
reviewed by a native speaker.

**One contradiction fixed.** The `function` row said the term needed no gloss because it is
a settled transliteration, while the guide's own worked example under "Term clarification"
showed it glossed: فنکشن (_function_). Resolved in favour of the guide: glossing is
triggered by a `<define>` in the source, never by how settled a transliteration is, so a
settled loanword never suppresses a `<define>` gloss. The `function` row now says so.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because none of it dates from a
specific decision anyone made on a day; it is the agent's own drafting rationale from the
language bootstrap. A term whose reasoning is already covered by a dated entry above
(`board / whiteboard`, `interpreter`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Transliterated loanword; this is how real Urdu tutorial/explainer content writes it, not a native coinage. |
| developer | Transliterated "programmer"; more transparent to a beginner than "ڈویلپر" (developer). |
| tech / tech industry | "ٹیکنالوجی" (technology, established loanword) + "صنعت" (industry, native word). |
| streak | Descriptive phrase ("consecutive days"); no single settled Urdu word found for the learning-platform streak concept. |
| pitfall | Descriptive phrase ("common mistake"); Urdu has no single settled word matching the English "pitfall" idiom. |

### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary, well-established Urdu word. |
| number | The classical Urdu word for "number," standard in school maths. |
| true / false | Ordinary Urdu words for "correct" / "incorrect"; natural fit for the Boolean literals in prose. |
| character | Ordinary Urdu word for a single letter/character. |
| integer | Literally "whole number"; standard school-maths term. |
| float / decimal | Standard Urdu word for "decimal," used in school maths for decimal numbers. |
| string, Boolean | Transliterated loanwords. |
| dictionary | The actual Urdu word for "dictionary." The metaphor (word-definition pairs) carries over directly. |
| element | Standard word for "element" in a collection. |
| index | The standard Urdu word for a book's index; extends naturally to a collection index. |
| key-value pair | "کلید" (key) + "قدر" (value) + "جوڑا" (pair). |
| data type | Transliterated; no settled single native word covers the general concept distinctly from a specific type name. |

### Functions & control flow

| Term | Why |
|------|-----|
| if statement | "Conditional statement." |
| condition, comparison | Ordinary Urdu words, so they stand alone. |
| expression | Standard Urdu maths term (e.g. "الجبری اظہاریہ" = algebraic expression). |
| operator | Standard Urdu maths term (e.g. "حسابی عامل" = arithmetic operator). |
| statement (executable) | Ordinary word for the imperative sense. |
| statement (logical claim) | The proposition sense, same pattern as the Hungarian precedent for this distinction. |
| function | Settled transliterated loanword. |
| to call (a function) | Transliterated light verb; standard in Pakistani CS teaching. |
| to define (a function) | Light verb: "تعریف" (definition, native word) + "کرنا" (to do). |
| parameter, argument | Transliterated loanwords. |
| input, output | Transliterated loanwords. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | Literally "key word"; native compound. |
| mental model | "ذہنی" (mental, native) + "ماڈل" (established loanword); the everyday way this is said in Urdu explanatory writing, where a fully native coinage would read academic. |
| (programming) language | The ordinary Urdu word for a language. |
| variable | The standard term taught in Pakistani computer-science curricula, not just a Wikipedia-only coinage. |
| assignment | Native word meaning "assignment/delegation," used for the concept of giving a variable its value. |
| to assign | Light verb built from the noun above. |
| code block | "کوڈ" (code, never translated) + "بلاک" (transliterated "block"); self-explanatory once both halves are known. |
| error | Ordinary Urdu word for "mistake/error." Matches the non-blaming tone well. |
| nested | Native descriptive phrase, "layer within layer." |
| iteration | Native word meaning "repetition." |
| to run / execute (code) | Ordinary Urdu verb, "to run/operate." |
| loop, class, object | Transliterated loanwords, standard in Pakistani CS teaching. |
| loop body | "The loop's inner part," descriptive. |
| scope | Native compound meaning "scope of work/jurisdiction," well established in formal Urdu. |
| method | Transliterated loanword. |
| property | Native word meaning "property/attribute/characteristic," well established. |

### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Transliterated light verb; no settled native equivalent found in South Asian tech usage generally. |
| module, component | Transliterated loanwords. |
| algorithm | Transliterated loanword; universal across languages, no native Urdu equivalent in real use. |
| CLI (the concept) | "Command line," partially transliterated. |

### Keep in English

| Term | Why |
|------|-----|
| CPU, RAM, USB, HTML, CSS, JSON | Standard practice in Urdu print and digital media to keep these acronyms in Latin script even mid-sentence. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| lesson | Classic Urdu word for "lesson," used in schools. |
| exercise | Classic Urdu word for "practice/exercise," used in schools. |
| curriculum | Standard Urdu word for "curriculum," used in education. |
| course | The ordinary word Pakistani learners actually use for a course of study. |
| level | Ordinary Urdu word for "level/rank." |
| milestone | Literal, well-established Urdu idiom for "milestone" (a milestone marker on a road); a natural existing match, not a coinage. |
| track / pathway | Ordinary word for "path/way." |
| mentor / mentoring | Native word for "guide," warm and well established for this role. |
| tutorial | Transliterated. |
| solution (learner's submission) | Ordinary Urdu word for "solution/answer." |
| scenario | Native word for "scenario," well established in Urdu media and formal writing. |
| canvas (graphics exercises) | Already an established Urdu loanword for a painting canvas. |
