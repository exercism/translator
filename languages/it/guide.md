# Italian (it) language guide

The Italian-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Readers are in Italy.

## Formality (critical)

- **Use the informal singular "tu" throughout.**
- **Never use "Lei"** (formal singular).
- **Frame the shared journey with the first-person plural "noi"** ("vediamo", "iniziamo",
  "adesso passiamo a...") and give the learner's actions as second-person singular
  imperatives ("prova", "scrivi", "guarda"). Use the noi/tu mix, not a pure tu-only style:
  noi carries the narration, tu carries the action.
- Encouraging imperatives:
  - "Vediamo..." (Let's look at...)
  - "Prova a..." / "Proviamoci" (Try it out)
  - "Iniziamo" / "Cominciamo" (Let's begin)
  - "Non preoccuparti se..." (Don't worry if...)

## Grammar

Italian-specific rules that English speakers get wrong:

- **Gender agreement.** Nouns, articles, and adjectives agree in gender and number.
  Watch this on every glossary term used as an adjective or with a demonstrative: "la
  funzione è pura" not "il funzione è puro".
- **Article choice before code/technical nouns.** Use "lo" before `s` + consonant or `z`
  ("lo scope", "lo scaffale", "lo scivolo"), "il"/"la" otherwise ("il ciclo", "la
  variabile", "la stringa"). Elision before a vowel: "l'array", "l'indice", "l'interprete".
- **Use the definite article before a plural noun that names a specific, required set.**
  Where English drops the article ("use triangles", "check the values"), Italian needs it
  whenever the noun refers to the particular items the task supplies or demands, not to the
  category in general: _usa i triangoli per costruire la faccia_, not _usa triangoli per
  costruire la faccia_. Leave the article out only where the sense really is generic or
  partitive ("un esercizio con triangoli colorati").
- **Subject pronouns are usually dropped.** Italian is a pro-drop language; do not add
  "tu" before every imperative just because the English has "you". "Prova questo codice"
  reads naturally; "Tu prova questo codice" sounds like a translation. Keep "tu" only
  where it is genuinely contrastive ("tu puoi provarlo, io ho già finito").
- **Prepositions replace English possessive chains.** "the function's return value" →
  "il valore restituito dalla funzione", not a literal possessive.
- **Keep the reader out of shared work objects.** Never attach a second-person possessive
  ("tuo"/"tua") to something the course and the learner work on together (the solution, the
  code, the output, the result): _abbiamo portato qui la soluzione_, not _la tua soluzione_.
  Never attach a second-person clitic to _fare_ either ("farti", "farvi"): _per continuare_,
  not _per farti continuare_. Drop the possessive or the clitic; do not swap it for another
  way of pointing at the reader.
- **Adjective position.** Most descriptive adjectives follow the noun ("una funzione
  pura", "un valore booleano"), unlike English. A handful of common adjectives can precede
  for a softer/more idiomatic feel ("un piccolo esempio"), but technical adjectives from
  the glossary stay after the noun.
- **Clitic pronouns attach to infinitives and imperatives.** "to call it" → "chiamarla";
  "try it" → "provalo" / "provaci" depending on what "it" refers to (a direct object vs.
  the activity itself).
- **Euphonic _d_ before a vowel-initial word.** Add _d_ to _e_ and _a_ when the next
  word starts with a vowel, giving _ed_ and _ad_: _ed una variabile_, _ad impilare_, _ed
  il raggio_. This applies before any vowel, including _i_ and _u_ (_il_ counts, since it
  starts with _i_), not only _a_/_e_/_o_. Leave it off before a genuinely consonant-initial
  word. Never do this with _o_: write _o_, never _od_.
- **"Bastare" + infinitive describing a general requirement is impersonal, not
  dative+clitic.** Use the impersonal reflexive "si", not a second-person dative pronoun
  plus reflexive clitic on the infinitive: _bastava spostarsi da sinistra a destra_, not
  _ti bastava spostarti da sinistra a destra_.
- **Use the future tense when introducing what the exercise is about to cover.** English
  frames the upcoming task in the present ("in this exercise, we're exploring leap years"),
  but Italian wants the future there, because the action has not started yet: _in questo
  esercizio, esploreremo gli anni bisestili_, not _esploriamo_. The present makes an
  introduction sound static; the future reads as a guide leading the reader through what is
  coming. This applies to the opening framing only, not to descriptions of what the code
  does.
- **No preposition before a general condition introduced by "ogni".** English marks the
  condition with "in" ("in every year that is evenly divisible by 4"); Italian does not, and
  "in ogni anno..." is not idiomatic. Drop the preposition: _ogni anno che è esattamente
  divisibile per 4_.
- **"Benvenuto" takes "a", not "in", before an activity.** Use _al_ when the learner is
  entering an activity or event ("benvenuto al corso", "ti diamo il benvenuto al tuo primo
  esercizio") and _nel_ only when entering a place or a group ("benvenuto nel team",
  "benvenuto nel forum"). An exercise, a lesson or a course is an activity, so it is always
  _al_.

## Information structure and emphasis

Do not map English clause-by-clause. Italian is mostly SVO like English, so the risk is
not garbled syntax but flat, monotone prose that keeps the English subject-first shape and
the English sentence boundaries.

- **Break up English subordination.** English chains clauses with "which means...", "so
  that...". Italian instructional prose reads better as separate, shorter sentences.
  Split rather than translate the connector literally.
- **Prefer punctuation to conjunctions.** English strings clauses together with "and",
  "so", "but"; carrying every one across produces sentences an Italian reader finds
  cloying. Replace them with a comma, a colon or a full stop wherever the sense allows,
  and keep sentences short enough to hold the thread of the argument: "ci sono tante
  scatole: queste scatole sono le variabili", not "vedi tante scatole, e queste scatole
  sono quelle che chiamiamo variabili".
- **Do not restate a subject the reader can infer.** Once a subject is established, leave
  it implied for the rest of the sentence rather than repeating the noun in each clause:
  "Ogni scatola ha un nome, proprio come le funzioni, e contiene una sola cosa".
- **Never open with two adversatives in a row.** "Quindi, invece" and similar pairs are a
  word-for-word artefact; keep one ("Invece, ...").
- **Lead with what's being explained, not with "we".** Italian can use "noi" framing (see
  Formality above), but vary it: not every paragraph needs to open with "Vediamo...". Use
  "Ora...", "A questo punto...", "Quindi..." to keep rhythm.
- **Give conditions a complete clause.** English can compress "If this, then do this."
  Italian wants the condition spelled out as a real clause: "Se questa condizione è vera,
  allora...", not a bare "Se questo, allora...".
- **Relative clauses need "che".** Where English can juxtapose a noun and a description
  without a connector, Italian needs an explicit relative pronoun: "un'altra istruzione
  **che** controlla se due valori sono uguali", not a colon-joined fragment.

## Term clarification

When introducing an English term under Italian-primary (see `global/voice.md`), append
_in inglese_ after the italic English term inside the parentheses, e.g. la funzione
(_function_ in inglese).

**Drop the gloss for transparent cognates.** Where the Italian is a look-alike of the
English (_interprete_ / interpreter, _errore_ / error, _funzione_ / function, _espressione_
/ expression, _variabile_ / variable), the parenthetical teaches nothing: leave the term
bare and expand the `<define>` to nothing extra. This is a standing Italian rule, not a
per-page judgement.

Keep the gloss where the Italian genuinely differs from the English and so carries
information: an acronym expanded in Italian, a descriptive phrase for an opaque loanword,
a code identifier's meaning (`turnLeft` (gira a sinistra)), or a term whose Italian is not
a look-alike of the English. The wording to use for each such term is in `glossary.md`.

## Naming a function's inputs in prose

When running prose names the inputs of a function the exercise has just introduced, **keep
every one of them in English**, even where the source writes them bare, without backticks:
_i valori di top, left, height e width_, never _i valori di top, left, altezza e larghezza_.
They are the identifiers the learner types, and two of them (`top`, `left`) have no natural
Italian, so translating the other two silently splits one set of four into two half-sets.

This applies only to tokens used as names. The same words used as ordinary description are
translated as normal: _quanto è largo il rettangolo_ for "how wide the rectangle is", and
_con la larghezza e l'altezza indicate_ where the English itself describes rather than names.

## Style notes

- **Never use a dash as a clause separator.** No hyphen (`-`), en dash (–) or em dash (—)
  may stand between clauses in Italian prose, whatever the English does. Replace it with
  the punctuation Italian actually uses: a **comma** to carry the sentence on, a **colon**
  to introduce or explain what follows. Two separate sentences, or parentheses for a
  genuine aside, are also fine. _"It should only appear once, inside a loop - don't write
  out all 20 stripes by hand!"_ → _Dovrebbe apparire una sola volta, all'interno di un
  ciclo: non scrivere tutte le 20 strisce a mano!_, never _... di un ciclo - non
  scrivere ..._. This applies to prose only: hyphens inside compound words
  (_multi-livello_), numeric ranges, list markers and code stay as they are.
- **Capitalization:** Italian uses **sentence case** for titles and headings, not English
  title case. Capitalize only the first word and proper nouns: "Il valore restituito da
  una funzione", never "Il Valore Restituito Da Una Funzione".
- **Quotation marks:** use guillemets, _caporali_ (« »), for quoted material in prose:
  reported speech, a phrase put in someone's mouth, a value quoted rather than used. Set
  them tight, with no space inside the marks: _Sa dire: «Se succede questo,
  allora devo fare quest'altro»._ Sentence punctuation that belongs to the surrounding
  sentence, not to the quotation, goes outside the closing mark. For a quotation nested
  inside another quotation, drop to the second Italian level, the high double quotes
  (“ ”). Never let a smart-quote or guillemet substitution touch a code block, inline
  code, or a string literal; those always keep plain ASCII `"` / `'`.
- **Naming or defining a term is the same case as "a value quoted rather than used" above,
  not a separate rule.** When a sentence talks *about* a word rather than using it functionally,
  that word takes guillemets, the same as reported speech: _«Algoritmo» è una parola che
  significa semplicemente «un modo di fare qualcosa»._
- **UI labels take plain double quotes, not guillemets.** The name of something on screen
  (a button, a panel, a section heading) is a label being pointed at, not a quotation:
  _troverai una sezione "Funzioni"_, _premi "Esegui il codice"_. Reserve « » for quoted
  speech and quoted material.
- **Jiki-name handling:** "Jiki" does not inflect; use it as an invariant proper noun
  ("Jiki ti aiuterà", "il consiglio di Jiki"), with a preposition supplying the case
  relationship rather than a suffix.
- **Avoid stacking "puoi" and "poi" adjacent to each other** ("puoi poi" / "poi puoi"):
  the word-order combination reads as a tongue-twister regardless of which comes first.
  Use "dopo" or "successivamente" instead when the sense is "then you can" as a sequencing
  connective. This is specifically about the two words landing next to each other, not
  about "then you can" generally: "poi potrai" (future tense) is unaffected and reads fine.

## Worked examples

- **Calls to action:** "Inizia ora!" / "Iscriviti ora!" / "Provalo subito!" / "Fai una
  prova gratuita!", never the vague "Unisciti a noi!".
- **Natural phrasing**, good vs. stiff/literal:
  - "Let's learn React" → "Impariamo React", not "Impariamo a conoscere React".
  - "First, install Node.js" → "Per prima cosa, installa Node.js", not the stiffer
    "Innanzitutto, è necessario installare Node.js".
  - "Try running this code" → "Prova a eseguire questo codice", not "Cerca di eseguire
    questo codice", which sounds like the attempt might fail.

## Brackets

Italian names the bracket type rather than using one generic word, so the rendering usually
has to say which pair is meant. Name the type on first mention and show the glyph in a code
tag immediately after: _parentesi quadre (`[]`)_. Once the round pair is established in
context, plain _parentesi_ is enough and reads more naturally than repeating _tonde_. The
glyph names themselves are in `glossary.md`.

Example: _per chiamare una funzione, scrivi il suo nome seguito da una coppia di parentesi
tonde (`()`)._
