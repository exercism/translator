# Portuguese (pt) family glossary

The agreed term list shared by every Portuguese locale: Brazilian Portuguese (`pt-BR`) and
European Portuguese (`pt-PT`). Every term here has been agreed and is binding for both
locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file;
it surfaces new terms it had to decide on as proposals in its output (a "glossary delta").
Those proposals are discussed, and only once agreed are they written in (by a human or by
Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own
`glossary.md`, **never both**. A term defaults to the locale file; it only moves here once
its rendering, Use column, and Notes are confirmed identical across `pt-BR` and
`pt-PT`, not merely assumed to be. When reading a locale's effective glossary, it is this
file's rows plus that locale's own `glossary.md` rows (concatenation, not an override
lookup, because of the one-place rule). If a term is not here, check the relevant locale
file; it has not necessarily gone unagreed, it may simply diverge by locale.

## Core decisions

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| streak | sequência | pt | |

## Localize (use the Portuguese term)

These are terms where the Portuguese is used in prose, so the "Use (pt/en)" column is `pt` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| true / false | verdadeiro / falso | pt | Lowercase in prose. **Concept sense only**: use _verdadeiro / falso_ where the words describe whether something is the case ("se a condição for verdadeira"). Where **true** or **false** names the literal value a function returns or a comparison evaluates to, it is a code token and stays English, whether it is written in code font (`true`) or bolded in a function description (**true**). Pick by which of the two the sentence is doing, not by formatting alone. |

### Functions & control flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| if statement | condicional | pt | Plural: _condicionais_. Corroborated for pt-PT via Univ. Évora course material. |
| statement (executable) | instrução | pt | The imperative sense: a line of code that does something and gets executed. Corroborated for pt-PT via Univ. Évora course material. |
| statement (logical claim) | afirmação | pt | The proposition / true-or-false sense. Pick by meaning, not by the English word. |
| function | função | pt | The keyword `function` in code stays English; the concept in prose is _função_. |
| argument | argumento | pt | Call-site value sense. |

### Loops, state & program flow

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| nested | aninhado | pt | Combines with each locale's own word for "loop" to mean nested loop; see the locale glossary's `loop` entry. |

### Tooling & engineering

| English | Portuguese | Use (pt/en) | Notes |
|---------|------------|-------------|-------|
| workflow | fluxo de trabalho | pt | |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Portuguese in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Portuguese gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | "chain of characters", spelled with the locale's own `character` plural | Exception: in the string concept itself, explain the term where the source defines it, then use _string_ throughout. Never hardcode one locale's spelling here; see each locale glossary's `character` row. |
| array | _vetor_ | Exception: in the array concept itself, explain _vetor_ where the source defines it, then use _array_. Confirmed for pt-PT as the dominant academic usage (Univ. Évora keeps `array` in prose). |
| Boolean | _booleano_ | Exception: in the Boolean concept, explain _booleano_ where the source defines it, then use _Boolean_. |
| component | _componente_ | |
| API | explain what it is in Portuguese | Not a word a beginner knows; where the source defines it, explain the concept in Portuguese, not just gloss the acronym. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| Debug, Test | (no gloss) | As keywords / technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

Shared glyph word. Each locale's own glossary states its default bracket-naming
convention, its disambiguating term for `()`, and the divergent `[]`, `{}`, and `<>`
renderings.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `()` | parênteses | The base glyph word is the same in both locales; the disambiguating term added when a specific bracket type matters (e.g. _parênteses redondos_ vs _parênteses curvos_) diverges. See the locale glossary. |
