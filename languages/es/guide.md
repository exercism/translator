# Spanish (es) family guide

The Spanish realization of `global/voice.md` shared by every Spanish locale: Latin American
Spanish (`es-419`) and European Spanish (`es-ES`). Read it alongside `global/voice.md`,
`global/rules.md`, and the relevant `content-types/*.md`.

**This file never stands alone.** Each locale has its own `languages/<locale>/guide.md`
stating only what diverges. A `##` heading in a locale guide with the same name as one here
replaces it for that locale; anything not mentioned there is inherited unchanged from here.
A locale's binding term list is this file's `glossary.md` plus that locale's own
`glossary.md`.

## Orthography and punctuation

- **Accents (tildes) are never optional.** `á`, `é`, `í`, `ó`, `ú`, `ñ`, `ü` are always
  written, including on capital letters where they fall: función, número, código,
  ejecución, párrafo, carácter, índice, área.
- **Opening question and exclamation marks are mandatory.** Questions and exclamations
  open with **¿** and **¡** and close with **?** / **!**: "¿Qué hace un bucle?",
  "¡Pruébalo!". Never drop the opening mark.
- **Quotation marks are the angular « ».** Use « » (comillas latinas) for quoted material
  in prose: Jiki te saluda con «hola». Use “ ” (comillas inglesas) only for a quotation
  nested inside a « » one: «Jiki dijo “hola” y esperó». Never use the straight typewriter
  `"` and never the low-opening `„ ”` pattern. Quote characters inside code, output, or backticks are reproduced exactly
  as written (see `global/rules.md`); never restyle them.
- **Titles and headings take sentence case**, capitalizing only the first word and proper
  nouns, never English-style title case. Language and product names keep their own casing
  (JavaScript, Python).

## Grammar

- **Drop redundant subject pronouns.** Spanish is a null-subject language; the verb
  ending already carries the person. "The function returns a value" → "La función
  devuelve un valor", not "Ella devuelve un valor". Use the subject pronoun explicitly
  only for emphasis or contrast.
- **`ser` vs `estar`.** Permanent or defining qualities take `ser` ("es un número");
  states and conditions take `estar` ("está vacío", "la variable está vacía"). English
  "is" maps to both; pick by meaning, never collapse them into one.

## Term clarification

When introducing an English term under Spanish-primary (see `global/voice.md`), append
_en inglés_ after the italic English term inside the parentheses, e.g. la función (_function_
en inglés).

**Drop the bracketed gloss when the Spanish word is spelled exactly like the English one**
and write the word bare. Spanish and English share the Latin script, so "error (_error_ en
inglés)" repeats itself and reads as a mistake rather than as help. This is a standing rule,
not a per-page judgement call: it applies wherever it happens, including
`<define>error</define>`, and to loanwords the glossary keeps in English anyway
(_framework_, _tutorial_, _bootcamp_). When such a term still needs explaining, explain in
Spanish what it is instead of bracketing the English.

**Keep the gloss when the two forms differ at all**, even by an accent or an ending:
función (_function_ en inglés), intérprete (_interpreter_ en inglés), las funciones
(_functions_ en inglés). This is a decision about the gloss only: the term is still
translated and still used consistently per the glossary, and is never left in English
because of it.

## Style notes

- **Em dashes.** The global no-em-dash rule (`global/rules.md`) applies. In Spanish the
  natural replacements are a comma for a mid-sentence aside, two separate sentences, or a
  colon to introduce an explanation.
