# Latin American Spanish (es-419) language guide

Latin American Spanish belongs to the Spanish family. Read `../es/guide.md` first for
everything shared with European Spanish (`es-ES`); this file states only what is distinct
about Latin American Spanish. A `##` heading here with the same name as one in
`../es/guide.md` replaces it for this locale; anything not mentioned here is inherited
unchanged from the family guide. Term choices are in `glossary.md` (this locale's own file)
plus `../es/glossary.md` (the shared family terms); together they are binding.

Write **neutral Latin American Spanish**: the register that works across the whole region
(Mexico, Colombia, Argentina, Chile, Peru and the rest), never that of a single country and
never the Spanish of Spain (`es-ES`). Grammar and tone are near-identical to `es-ES` for
this kind of content; the deliberate differences are lexical and orthographic (see § Style
notes). Keep those splits and no others.

## Formality (critical)

Realizes the "modern, informal address" principle from `global/voice.md`:

- **Use `tú` throughout.** Never `usted`, which is too formal and distant for the Jiki
  voice.
- **Never use `voseo` (`vos`).**
- **Plural "you" is always `ustedes`.** Never `vosotros` or its verb forms (`sois`,
  `tenéis`, `mirad`). In practice Jiki addresses one reader, so the plural is rare, but when
  it appears it is `ustedes`.
- **`tú` takes second-person singular forms** ("vas a ver", "puedes", "escribe"), start to
  finish. The most common error is mixing `tú` with `usted` third-person forms: "tú puedes"
  (right), "tú puede" (wrong).
- Encouraging imperatives (affirmative `tú` imperative):
  - "Veamos el siguiente código" (Let's look at the next code)
  - "Pruébalo" / "Intenta" (Try it out)
  - "Empecemos" (Let's begin)
  - "Fíjate que..." / "Nota que..." (Notice that...)

## Gender-neutral phrasing

Spanish adjectives and participles agree with the reader's gender, which is unknown. Rephrase
to avoid reader-directed gendered agreement wherever practical:

- Prefer gender-neutral forms: "¿todo listo?", "vas a lograrlo", "¿quedó claro?", "¿estás
  con dudas?".
- Avoid reader-directed gendered adjectives: not "¿estás preparado?" but "¿estás listo?" or
  recast the sentence ("¿ya estás con todo listo?").
- When a gendered form is truly unavoidable, use the masculine as fallback. **Never use `-x`,
  `-@`, or `-e`/`elle` forms** ("todxs", "tod@s", "todes").
- The same applies to role nouns: prefer neutral rephrasing over "desarrollador/a"; use the
  masculine generic ("desarrollador") only when a noun is unavoidable.

## Grammar (es-419 specifics)

Additional to the shared rules in `../es/guide.md` § Grammar:

- **Contractions are mandatory.** `a + el = al`, `de + el = del`. "de el código" is wrong;
  "del código" is the only form. (These are the only two obligatory contractions.)
- **Infinitive vs imperative for instructions.** The `tú` imperative ("Prueba", "Escribe") is
  warmer for invitations. The infinitive ("Para ejecutar el código...") is natural for
  sequential procedural steps. Use imperative for encouragement, infinitive for steps in a list.
- **Prepositions and word order.** "in the code" → "en el código", "of the function" → "de la
  función", "to the value" → "al valor", "through the loop" → "por el bucle".
- **Sentence rhythm.** Spanish reads better in shorter sentences than English. When a long
  English sentence chains ideas with "which means that", split it into two, and do not mirror
  English subordination with comma-chained subordinate clauses.

## Information structure and emphasis

Given information first, new information last (the principle from `global/voice.md`).

- **End-weight:** new, important, or surprising information goes at the end of the clause. "La
  función devuelve un valor" (the return is the point). Flip when the function itself is the
  new element: "Quien devuelve el valor es la función."
- **Cleft for contrast:** "It's the capital B that matters" → "Es la B mayúscula la que
  importa." Not a word-for-word transfer.
- **Negation:** `no` sits immediately before the verb or the word being denied. "No devuelve
  nada." "No es el tamaño lo que importa."

### Before / after examples

| English | Stiff (literal) | Natural (es-419) |
|---------|-----------------|------------------|
| "The function returns a value." | "La función hace un retorno de un valor." | "La función devuelve un valor." |
| "It doesn't matter how many times you try." | "No importa cuántas veces tú intentas." | "No importa cuántas veces lo intentes." / "Puedes intentarlo las veces que quieras." |
| "Let's look at what happens when..." | "Déjanos mirar lo que pasa cuando..." | "Veamos qué pasa cuando..." |
| "First, define a function." | "En primer lugar, defina una función." (also slips into `usted`) | "Primero, define una función." |
| "Try running this code." | "Ejecute este código." | "Prueba a ejecutar este código." |

## Style notes (es-419 specifics)

Additional to the shared style notes in `../es/guide.md` § Style notes:

- **Regional lexicon (the es-419 vs es-ES split).** Use the Latin American form every time:
  - "computer" → **computadora** (not the Spanish "ordenador")
  - "video" spelled **video**, no accent (not the Spanish "vídeo")
- **Rhetorical questions** ("So what does a loop do?") → keep them as natural Spanish
  rhetorical questions: "Entonces, ¿qué hace un bucle?".
- **Jiki name:** "Jiki" is invariable in Spanish (no inflection). Use it bare, as a proper
  name ("Jiki te muestra...", "Jiki aparece"), never with an article, even though Spanish
  otherwise uses articles with names more freely than English.
- **Titles and headlines:** "Conoce a Jiki" / "Ya llegó Jiki", not the dramatic "Nació Jiki";
  "Aprende a programar de una forma nueva" / "Programación para quien recién empieza", not
  the generic "Una nueva forma de aprender a programar".
- **Calls to action:** "¡Empieza ahora!" / "¡Crea tu cuenta!" (not the vague "¡Únete!"),
  "¡Pruébalo!" / "¡Empieza gratis!".
- **Acronyms:** "PPP pricing" → "precios ajustados al poder adquisitivo local"; "Q&A" →
  "preguntas y respuestas".
- **Calques and false friends:**
  - "just" as emphasis → "solo" / "simplemente", never "justo"
  - "actually" → "en realidad" / "de hecho", never "actualmente" (that means "currently")
  - "make sure" → "asegúrate de que" / "verifica que", not "haz seguro que"
  - "you've worked hard" → "te esforzaste mucho" / "le dedicaste bastante tiempo", not
    "trabajaste duro"
  - "run the code" (casual) → "ejecuta el código"; "correr el código" is acceptable in a very
    casual aside but `ejecutar` is the default
