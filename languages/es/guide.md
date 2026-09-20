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
  in prose: el programa te saluda con «hola». Use “ ” (comillas inglesas) only for a
  quotation nested inside a « » one: «dijo “hola” y esperó». Never use the straight typewriter
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

## Style notes

- **Em dashes.** The global no-em-dash rule (`global/rules.md`) applies. In Spanish the
  natural replacements are a comma for a mid-sentence aside, two separate sentences, or a
  colon to introduce an explanation.
