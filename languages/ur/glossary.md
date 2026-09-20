# Urdu (ur) glossary

The agreed term list for Urdu. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| programming / coding | پروگرامنگ | ur | |
| developer | پروگرامر | ur | |
| tech / tech industry | ٹیکنالوجی کی صنعت | ur | |
| streak | لگاتار دن | ur | Low confidence; flag for native-speaker review. |
| pitfall | عام غلطی | ur | Low confidence; flag for native-speaker review. |

## Localize (use the Urdu term)

These are terms where the Urdu form is used in prose, either a settled transliteration of the English loanword or a native Urdu word, so the "Use (ur/en)" column is `ur` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| value | قدر | ur | |
| number | عدد | ur | |
| true / false | صحیح / غلط | ur | |
| character | حرف | ur | |
| integer | عدد صحیح | ur | |
| float / decimal | اعشاریہ | ur | |
| string | سٹرنگ | ur | |
| Boolean | بولین | ur | |
| array / list | زنجیر | ur | Use consistently for both "array" and informal "list" per `global/terms.md`. |
| dictionary | لغت | ur | No gloss is needed; the metaphor (word-definition pairs) carries over directly. |
| element | عنصر | ur | Array element = "زنجیر کا عنصر". |
| index | اشاریہ | ur | |
| key-value pair | کلید اور قدر کا جوڑا | ur | |
| data type | ڈیٹا ٹائپ | ur | |

### Functions & control flow

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| if statement | شرطیہ بیان | ur | The keyword `if` itself always stays English in code; this is the prose concept. |
| condition | شرط | ur | Stands alone. |
| comparison | موازنہ | ur | Stands alone. |
| expression | اظہاریہ | ur | |
| operator | عامل | ur | |
| statement (executable) | بیان | ur | The imperative sense: a line of code that does something. Keep distinct from the logical-claim sense below by context. |
| statement (logical claim) | دعویٰ | ur | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | فنکشن | ur | Where the English itself explains the term, gloss it in the guide's gloss format, فنکشن (_function_); a term being a settled loanword never suppresses that gloss. The keyword `function` in code stays English. |
| to call (a function) | کال کرنا | ur | "فنکشن کال کرنا." |
| brackets (the two after a function name) | قوسین | ur | The round brackets `()` written after a function name. "قوسین" is a dual form and already means the pair, so it needs no counting word; where the kind must be distinguished, "گول قوسین" (round) versus "مربع قوسین" (square). See guide § "Brackets" for the phrasing rule. |
| to define (a function) | تعریف کرنا | ur | |
| parameter | پیرامیٹر | ur | Kept distinct from "argument" below (a real collision risk; keep them separate consistently). |
| argument | آرگیومنٹ | ur | The call-site value, kept distinct from "پیرامیٹر" above. |
| input (to a function) | ان پٹ | ur | |
| output | آؤٹ پٹ | ur | Paired with "ان پٹ" above. |
| to return (a value) | واپس کرنا | ur | "قدر واپس کرنا" (to return a value). |
| return value | واپسی کی قدر | ur | Noun form, distinct from the verb above. |

### Loops, state & program flow

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| keyword | کلیدی لفظ | ur | |
| interpreter | مترجم | ur | Never "ترجمان", which means "spokesperson" in modern Pakistani Urdu. Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| mental model | ذہنی ماڈل | ur | |
| (programming) language | زبان | ur | Used for both the "language a computer understands" framing and, with "پروگرامنگ", the programmer's language: "پروگرامنگ کی زبانیں". Do not mix in a transliterated "لینگویج" anywhere. |
| variable | متغیر | ur | |
| assignment | تفویض | ur | |
| to assign | تفویض کرنا | ur | |
| code block | کوڈ بلاک | ur | |
| error | غلطی | ur | |
| nested | تہہ در تہہ | ur | e.g. "تہہ در تہہ لوپ" = nested loop. |
| iteration | تکرار | ur | |
| to run / execute (code) | چلانا | ur | |
| loop | لوپ | ur | |
| for loop | `for` لوپ | ur | Keep `for` in code font (real keyword) + transliterated "لوپ". |
| while loop | `while` لوپ | ur | As above, with `while`. |
| loop body | لوپ کا اندرونی حصہ | ur | |
| scope | دائرہ کار | ur | Keep distinct from "کوڈ بلاک" (code block) above, matching the distinction in `global/terms.md`. |
| class | کلاس | ur | |
| method | میتھڈ | ur | Kept distinct from the generic Urdu word for "way/method" to avoid ambiguity in technical prose. |
| property | خاصیت | ur | Keep distinct from "خصوصیت" (feature, platform sense) below; these are related but different words. |
| object | آبجیکٹ | ur | |

### Tooling & engineering

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| deploy | ڈیپلائے کرنا | ur | |
| module | ماڈیول | ur | |
| algorithm | الگورتھم | ur | |
| framework | فریم ورک | ur | Transliterated into Nastaliq rather than kept Latin-script: only the terms in the "Keep in English" list below stay in Latin script. |
| CLI (the concept) | کمانڈ لائن | ur | |
| component | کمپوننٹ | ur | |

## Keep in English (Latin script)

These stay in Latin script inside Urdu prose: acronyms pronounced as letters, and product/brand/language names.

| Term | Notes |
|------|-------|
| API | Where the source defines it, explain the concept in Urdu ("دو پروگراموں کے آپس میں بات چیت کرنے کا ایک طریقہ"), not just the acronym. |
| CPU, RAM, USB, HTML, CSS, JSON | |
| JavaScript, Python, React | Product/language names, never translated or transliterated, per `global/terms.md`. |
| Debug, Test, Code, Bug, Frontend, Backend | Kept as technical tokens, per `global/terms.md`. |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | Always English/Latin script, including inside prose. Translate only the surrounding explanation. |
| Latin-script product names | Kept in Latin script; see guide § "Latin-script product names" for attaching Urdu postpositions. |

## Platform & curriculum vocabulary

| English | Urdu | Use (ur/en) | Notes |
|---------|------|----------|-------|
| lesson | سبق | ur | |
| exercise | مشق | ur | |
| curriculum | نصاب | ur | |
| course | کورس | ur | The whole course the reader is taking ("اس کورس میں"). Kept distinct from "سبق" (lesson) and "نصاب" (curriculum). |
| level | درجہ | ur | |
| milestone | سنگ میل | ur | |
| mentor / mentoring | رہنما | ur | |
| tutorial | ٹیوٹوریل | ur | Kept distinct from "سبق" (lesson) to avoid collision. |
| solution (learner's submission) | حل | ur | |
| canvas (graphics exercises) | کینوس | ur | Covers the graphics-exercise drawing surface. |

## Open / low-confidence terms for native-speaker review

Not written into the tables above; flag these via `/action-forum-post` once real native-speaker feedback is available, per `global/rules.md` § "When unsure."

- **streak, pitfall**: descriptive phrases proposed above, not settled single words; genuinely uncertain.
- **foot-gun**: no clean Urdu equivalent found; a descriptive phrase like "خود کو نقصان پہنچانے والی خصوصیت" (a feature that harms yourself) would work but hasn't been verified against any real source. Use a descriptive phrase case by case rather than forcing a fixed term, per `global/terms.md`'s own guidance on this entry.
- **syllabus**: not yet decided; it would need transliteration ("سلیبس") kept distinct from "نصاب" (curriculum), and a concept explanation where the English explains it, but it has not appeared in real content yet to confirm against.
- **workflow, auth, tool/tooling, feature (platform), API-adjacent framework/component terms not listed above, edge case, backwards compatibility, encapsulation, pure function, template literal, exception**: not yet researched to the same confidence level as the terms above; decide on first real occurrence in a translation pass and propose via the normal glossary-delta process rather than guessing now.

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Urdu has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Urdu | Use (ur/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
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
