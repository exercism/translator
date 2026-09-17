# European Spanish (es-ES) language guide

European Spanish belongs to the Spanish family. Read `../es/guide.md` first for everything
shared with Latin American Spanish (`es-419`); this file states only what is distinct about
European Spanish. A `##` heading here with the same name as one in `../es/guide.md` replaces
it for this locale; anything not mentioned here is inherited unchanged from the family
guide. Term choices are in `glossary.md` (this locale's own file) plus `../es/glossary.md`
(the shared family terms); together they are binding.

Write for readers in Spain and other European Spanish-speaking communities. This is
**Spain** Spanish and must read unmistakably as such: where a choice would read as Latin
American, pick the Spain form (see § Style notes).

## Formality (critical)

Realizes the "modern, informal address" principle from `global/voice.md`:

- **Use the informal "tú" (tuteo) throughout.** **Never use "usted"**, which reads distant
  and wrong for this audience.
- Keep verb conjugations in **second person singular informal** consistently, start to
  finish.
- Encouraging imperatives (informal tú forms):
  - "Vamos a ver el siguiente código" (Let's look at the following code)
  - "Pruébalo" (Try it out)
  - "Empecemos" (Let's begin)
- On the rare occasion the text addresses more than one person, the plural is **"vosotros"**,
  never the Latin American "ustedes".

## Orthography and punctuation (Spain specifics)

Additional to the shared orthography rules in `../es/guide.md` § Orthography and
punctuation:

- **Decimal separator.** Spanish prose uses a comma as the decimal separator (3,14). Inside
  code, numbers and output are reproduced exactly as written (see `global/rules.md`); never
  "fix" a code literal's separator.

## Grammar (Spain specifics)

Additional to the shared grammar rules in `../es/guide.md` § Grammar:

- **Gender agreement.** Every noun has a gender and its articles and adjectives must
  agree: "la variable", "el valor", "el bucle", "la función", "una función anidada", "los
  bucles anidados". English loanwords take a gender too, and it is fixed once and used
  consistently: **el** array, **los** arrays, **el** string, **el** bucle. Never switch a
  loanword's gender within a document.
- **Adjectives usually follow the noun:** "un número entero", "una condición simple", not
  the English pre-noun order.
- **por vs para.** "para" for purpose/goal ("para llamar a una función"), "por" for cause
  or means. English "for" maps to both; choose by meaning.
- **Avoid English calques.** Do not carry over "aplicar para" (for "apply for"),
  "asumir" for "assume" in the sense of "suponer", or "eventualmente" for "eventually"
  (Spanish "eventualmente" means "occasionally"; use "con el tiempo" / "al final"). Prefer
  the natural Spanish construction over the English-shaped one.

## Style notes (Spain specifics)

Additional to the shared style notes in `../es/guide.md` § Style notes:

- **Spain vs Latin American lexicon.** Use the Spain form every time: "ordenador" (not
  "computadora"), "vídeo" (with the tilde, not "video"); "fichero" and "archivo" are both
  fine.
- **"List" as an informal synonym for "array":** exercise instructions say "list" where
  concept pages say "array". Treat both as the same concept and keep the glossary's `array`
  term; do not introduce a second word such as _lista_ for the same idea.
- **"Input" carries the exercise prose, "output" is rarer:** render "input" consistently
  as _entrada_ wherever it appears, and do not invent a heavier phrase for it.
