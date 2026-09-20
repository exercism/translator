# Catalan (ca) glossary

The agreed term list for Catalan. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| developer | **desenvolupador** | ca | Masculine generic default in flowing prose; see guide § Style notes. |
| tech / tech industry | **sector tecnològic** | ca | Prose form; use plain "tecnologia" for the general field. |

## Localize (use the Catalan term)

These are terms where the Catalan is used in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| float / decimal | nombre decimal | ca | Use the simpler _decimal_ form for learner-facing prose. |
| array / list | llista | ca | _Llista_ is the single array/list term; keep it distinct from _matriu_ (2-D matrix, a different concept). |
| Boolean | booleà | ca | Fully localized; do not keep "Boolean" in English. |

### Functions & control flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| statement (executable) | sentència | ca | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | afirmació | ca | The proposition sense: a claim that is true or false. Keep distinct from _sentència_ above; pick by meaning, not by the English word. |
| function | funció | ca | The *keyword* `function` in code stays English; the concept in prose is _funció_. |
| parameter | paràmetre | ca | The declaration-site name. |
| argument | argument | ca | The call-site value. |
| brackets (the two after a function name) | parèntesis | ca | The `()` pair. Catalan names the shapes separately, so the word has to say which: _parèntesis_ are round, _claudàtors_ are square, _claus_ are curly. In running prose: "escriu-ne el nom i, tot seguit, els dos parèntesis". |

### Loops, state & program flow

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| interpreter | intèrpret | ca | The program that runs the code. Never the coinage _interpretador_. |
| mental model | model mental | ca | Use it verbatim, not a paraphrase like _manera de pensar_. |
| (programming) language | llenguatge (de programació) | ca | _Llenguatge_ for both senses on a page: the programming language, and "a language a computer understands". Never _idioma_, which is a natural human language. |
| error | error | ca | |
| bug | error | ca | Same word as _error_ above: Catalan does not keep the English "bug" in learner-facing prose. Where a sentence needs both senses in one breath, rephrase rather than reintroducing "bug". |
| exception | excepció | ca | Keep distinct from _error_ above (the catchable-error-object sense). |
| loop | bucle | ca | Not _llaç_. |
| for loop | bucle `for` | ca | Keyword-last: _bucle_ + the keyword, with `for` in backticks (real keyword). Never `for` bucle. |
| while loop | bucle `while` | ca | As above. |
| for-of loop | bucle `for...of` | ca | As above. |
| break (loop control) | sortir del bucle | ca | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| encapsulation | encapsulament | ca | Abstract OOP concept; gloss even though the word is a transparent cognate. |

### Tooling & engineering

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| auth (authentication / authorization) | autenticació / autorització | ca | Pick by meaning; the two concepts render differently in Catalan. |
| algorithm | algorisme | ca | Also spelled _algoritme_; prefer _algorisme_ for consistency. |
| code | codi | ca | Both the mass noun ("el teu codi") and the countable sense. Never kept in English. Code inside `<code>` tags and real keywords are untouched, as always. |
| debug / debugging | depuració | ca | Verb form _depurar_. Never kept in English. |

## Platform & curriculum vocabulary

| English | Catalan | Use (ca/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | funcionalitat | ca | Kept distinct from _funció_ (function) to avoid collision, per `global/terms.md`. |
| course | curs | ca | The whole course the reader is taking ("En aquest curs"). Keep distinct from _lliçó_ (lesson) and _currículum_ (curriculum). |
| canvas (graphics exercises) | llenç | ca | |
| Q&A | preguntes i respostes | ca | Expand in Catalan; don't keep the English acronym. |

## Keep in English

These stay in English in Catalan prose, with the Catalan gloss to use for each (per the
format in `global/voice.md`); with no an explanation in the English, use the English bare, no gloss.

| Term | Catalan word, where the English explains the term | Notes |
|------|--------------------------------|-------|
| API | _interfície de programació d'aplicacions_ | |
| framework | _entorn de treball_ | "Framework" is what Catalan developers actually say, so it is the ordinary word here (`global/voice.md`). |
| CLI | _interfície de línia d'ordres_ | Note: Catalan says "ordres", not "comandos"/"comandes" as Spanish content often does. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Test | (no gloss) | As a keyword/technical token. |
| Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Catalan has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Catalan | Use (ca/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| exercise |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| iteration (a submitted version of a solution) |  |  |  |
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
