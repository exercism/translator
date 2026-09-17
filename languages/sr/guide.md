# Serbian (sr) language guide

The Serbian-specific realization of `global/voice.md`: script, formality, grammar, and
typography.

## Script

Serbian is digraphic (Cyrillic and Latin are both official). **Write all Jiki Serbian
content in Latin script**, in prose, headings and UI strings alike. Code is Latin/ASCII
regardless, so Latin prose sits with it without a script clash.

**Diacritics are mandatory, always.** č, ć, š, đ, ž must appear correctly in every word
that needs them. Never substitute the plain-ASCII equivalents (c, dj, etc.), even in
headings or short UI strings.

## Formality (critical)

- **Use the informal "ti" (ti-form) throughout, with perfective imperatives for one-off
  instructions.**
- **Never use "vi"** (formal/polite) for address. Second person plural "vi" for an actual
  group of people is a separate, unrelated usage and is fine.
- Keep verb conjugations in **second person singular informal** consistently, start to
  finish.
- **Aspect matters for imperatives.** Serbian verbs come in perfective/imperfective
  pairs. A one-off instruction ("Try it", "Install this") is **perfective**:
  "Probaj", "Instaliraj". An ongoing or repeated framing ("Let's look at...") often reads
  more naturally as a **hortative construction** ("Hajde da pogledamo...") rather than a
  bare imperfective imperative. Match the aspect to what's actually being asked of the
  reader; a stray imperfective on a one-shot action reads oddly.
  - "Try it out" → "Probaj"
  - "Let's look at the following code" → "Hajde da pogledamo sledeći kod"
  - "Let's begin" → "Počnimo" / "Hajde da počnemo"
  - "First, install Node.js" → "Prvo instaliraj Node.js" (not "Instalirajte Node.js")
  - "Try running this code" → "Probaj da pokreneš ovaj kod" (not "Pokušajte da pokrenete
    ovaj kod")

## Grammar

- **Seven-case system** (nominative, genitive, dative, accusative, vocative,
  instrumental, locative). Decline technical nouns by their role in the sentence, not just
  by number: "niz" (array, nom.) → "u nizu" (in the array, loc.) → "niza" (of the array,
  gen.) → "nizu" (to/for the array, dat.). Never leave a technical noun invariant the way
  English does.
- **Gender agreement.** Adjectives, participles, and past-tense verbs agree in gender
  with their noun. "promenljiva" (variable) is feminine ("nova promenljiva", "promenljiva
  je definisana"); "niz" (array) is masculine ("nov niz", "niz je definisan"); "objekat"
  (object) is masculine. Track gender per noun consistently, don't default to one gender's
  agreement pattern across the board.
- **Recast English past tense into the present when the subject is the reader.** Serbian's
  past tense is built with a gendered participle, so "when you wrote `move`" forces a choice
  between "napisao si" (male reader) and "napisala si" (female reader), and either one
  addresses half the audience wrongly. Rewrite the clause in the present, which is
  genderless: "Kada napišeš `move`, a zatim te dve zagrade, time govoriš Jikiju da...",
  not "Kada si napisao `move`...". Apply the same recast to first-person narration and to
  any "we did / we saw" recap. Where the past really is unavoidable (a genuinely past
  event, e.g. "kada sam učio da programiram"), use it; the author of the concept pages is
  male, so his own first-person past is fine.
- **Word order is topic/focus-driven, not fixed SVO.** Given/known information tends to
  come first, with the newer or more important information moving toward the end of the
  clause. Literal English word order is usually still grammatical Serbian, but reads
  stilted; reorder for naturalness rather than mapping clause-by-clause.
- **Anglicisms are declined like native nouns**, not left invariant: "fajl" → "fajlovi"
  (files), "sajt" → "sajtova" (of sites, gen. pl.), "klikni" (click!, imperative). Once a
  loanword is adopted into Serbian prose, it takes normal Serbian case/number endings.
- **New loanwords are usually respelled phonetically**, not kept in their English
  spelling, once they're common enough to appear in running prose (e.g. "framework" is
  written "frejmvork" in Serbian technical writing). Do not assume an English spelling is
  automatically acceptable inline; check the glossary's "Keep in English" section for which
  terms are a deliberate exception.
- **Attach a case ending to a code identifier or a number with a hyphen**, leaving the
  identifier itself untouched inside its backticks: „`niz`-u“, „30-og“.

## Term clarification

When introducing an English term under Serbian-primary (see `global/voice.md`), prefix the
italic English term inside the parentheses with the abbreviation `engl.`, in Latin script
like the rest of the prose, e.g. funkcija (engl. _function_). Never write the Cyrillic
`енгл.`: it would be the only Cyrillic on an otherwise Latin page.

**Skip the gloss where the Serbian word is the identical Latin-script loanword.** A gloss
like "interpreter (engl. _interpreter_)" repeats the word the reader has just read. Drop
the parenthetical entirely and leave the term bare; the `<define>` is still expanded, just
with no gloss. Gloss wherever the Serbian differs, even slightly in spelling or ending
(greška / _error_, funkcija / _function_).

## Style notes

- **Quotation marks:** „...“ (U+201E opening, U+201C closing), the pair the examples
  in this guide use. Never straight ASCII quotes.
- **Em dashes:** the natural Serbian replacements are a **comma** for a mid-sentence aside,
  or two separate sentences. A hyphen is not a substitute for a dash; it keeps only its
  normal jobs (compound words, and the case-suffix attachment above).
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Serbian rhetorical questions: „Pa kako ovo izgleda u kodu?“
- **Jiki: character vs product name.** When "Jiki" refers to the friendly guide
  character in narrative prose ("Jiki will help you", "tell Jiki to...", "your
  interpreter is Jiki", "Jiki's warehouse"), transliterate it as „Džiki“ and decline it
  with standard endings where grammar requires: „Džikija“ (genitive), „Džikiju“
  (dative). This is how the name is actually pronounced and written in Serbian; keeping
  the Latin "J" spelling there reads as "Yikee", not "Jiki". When "Jiki" instead names
  the product, course, or brand (the site name, the course title, marketing copy, a
  subject line naming the platform), keep the Latin spelling "Jiki" unchanged. The same
  split applies to "Jeremy" when he appears as a person/narrator in first person, prose:
  „Džeremi“, declined normally.
