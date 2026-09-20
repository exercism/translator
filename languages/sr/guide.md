# Serbian (sr) language guide

The Serbian-specific realization of `global/voice.md`: script, formality, grammar, and
typography.

## Script

Serbian is digraphic (Cyrillic and Latin are both official). **Write all Serbian content
in Latin script**, in prose, headings and UI strings alike. Code is Latin/ASCII
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
  genderless: "Kada napišeš `move`, a zatim te dve zagrade, time pozivaš funkciju...",
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

## Style notes

- **Quotation marks:** „...“ (U+201E opening, U+201C closing), the pair the examples
  in this guide use. Never straight ASCII quotes.
- **Em dashes:** the natural Serbian replacements are a **comma** for a mid-sentence aside,
  or two separate sentences. A hyphen is not a substitute for a dash; it keeps only its
  normal jobs (compound words, and the case-suffix attachment above).
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Serbian rhetorical questions: „Pa kako ovo izgleda u kodu?“
- **A person's name in narrative prose is transliterated; a product name is not.** Where a
  person appears as a person or a narrator in running prose, transliterate the name so it is
  pronounced correctly in Serbian and decline it with standard endings where grammar
  requires it ("Jeremy" is „Džeremi“, genitive „Džeremija“): keeping an English spelling
  there makes a Serbian reader sound out the wrong name. Where the name instead names the
  product or the site, keep the Latin spelling unchanged.

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Serbian noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Serbian normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Serbian
  speaker has reviewed a real interpolated string here yet.
