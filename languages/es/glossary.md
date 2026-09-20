# Spanish (es) family glossary

The agreed term list shared by every Spanish locale: Latin American Spanish (`es-419`) and
European Spanish (`es-ES`). Every term here has been agreed and is binding for both
locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own
`glossary.md`, **never both**. A term defaults to the locale file; it only moves here once
its rendering, `Use (es/en)` column, and Notes are confirmed identical across `es-419` and
`es-ES`, not merely assumed to be. When reading a locale's effective glossary, it is this
file's rows plus that locale's own `glossary.md` rows (concatenation, not an override
lookup, because of the one-place rule). If a term is not here, check the relevant locale
file; it has not necessarily gone unagreed, it may simply diverge by locale.

## Core decisions

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programación** | es | Use `programación` consistently. `codificación` exists for the narrow act of writing code but is not natural in the warm register; avoid. |
| code (what the learner writes) | **código** | es | Always translated, never left as English "code": _tu código_, _el código_, _líneas de código_, _ejecutar el código_. Gender: _el código_, so the contractions apply (_del código_, _al código_). Consistent with _bloque de código_ below. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es/en)" column is `es` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| character | carácter | es | Singular _carácter_, plural _caracteres_. Not "sign/mark/letra". |

### Functions & control flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| if statement / conditional | condicional | es | Plural: _condicionales_. The full form _la sentencia condicional_ is available when it reads better. |
| function | función | es | The *keyword* `function` in code stays English; the concept in prose is _función_. |
| to call (a function) | llamar (a una función) | es | Keep the personal _a_: _llamar a una función_. _invocar_ is an acceptable synonym in a fuller explanation. |
| parameter | parámetro | es | Declaration-site name. |
| argument | argumento | es | Call-site value. |
| to return (a value) | devolver | es | Preferred over _retornar_. "La función devuelve un valor." |

### Loops, state & program flow

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| code block | bloque de código | es | Deliberately distinct from _ámbito_ (scope). |
| loop | bucle | es | Gender: _el bucle_. Not _ciclo_ (a common alternative not used here). |
| for loop | bucle `for` | es | Keep `for` in code font (real keyword) + _bucle_. (The curriculum currently has no `while` loops, only `repeat`, `for`, `for-of`, all following this same pattern.) |
| modulo / remainder operator | residuo (de la división) | es | The `%` operator; _módulo_ names the operator, _residuo_ names the result. Not _resto_, which reads as a subtraction result in a maths context. |
| toggle | alternar | es | Verb; _conmutar_ also correct but heavier. |

### Tooling & engineering

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| edge case | caso límite | es | "caso extremo" is an accepted alternative; do not mix both in one document. |

### Platform & curriculum vocabulary

| English | Spanish | Use (es/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funcionalidad | es | Deliberately distinct from _función_ (function) to avoid collision. Never use _función_ for a product feature. |
| curriculum | plan de estudios | es | "currículo" is an accepted alternative; do not mix both in one document. |
| syllabus | temario | es | The list of topics; distinct from _plan de estudios_ (curriculum). "programa del curso" also natural. |

## Keep in English

These stay in English in prose. Where the English itself explains one of these terms, use the
Spanish in the gloss column below; where it does not, use the English bare, no gloss.

| Term | Spanish word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| component | _componente_ | Use _componente_ freely; it is established Spanish tech vocabulary. |
| API | explain what it is in Spanish | Not a word a beginner knows; where defined, explain the concept in Spanish, not just gloss the acronym. |
| CLI (the concept) | _interfaz de línea de comandos_ | Where the English itself explains the term, explain CLI as _interfaz de línea de comandos_ (command-line interface). |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| Debug, Test | (no gloss) | As keywords / technical tokens. |
| Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

Shared glyph words. Each locale's own glossary states its default bracket-naming
convention and the divergent `<>` rendering.

| Glyph | Spanish | Notes |
|-------|---------|-------|
| `()` | paréntesis | Same form singular and plural: _un paréntesis_, _los paréntesis_. |
| `[]` | corchetes | |
| `{}` | llaves | |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Spanish has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. They sit in the
family file because the product's own nouns are shared by every locale in the family; a
locale that ends up wanting its own rendering moves that row down into its own glossary.
`global/terms.md` describes what each term means on Exercism.

| English | Proposed Spanish | Use (es/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| exercise |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
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
