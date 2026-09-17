# Romanian (ro) language guide

The Romanian-specific realization of `global/voice.md`: formality, orthography, grammar and
worked examples.

Write the standard written Romanian shared by Romania and Moldova; no regional variant.

## Formality (critical)

- **Use the informal "tu" form throughout.**
- **Never use "dumneavoastră"** (formal). It belongs to institutional and corporate writing.
- Keep verb conjugations in **second person singular** consistently, start to finish.
- **The negative imperative uses the infinitive, not the imperative.**
  - „Nu uita” (not „Nu uită”), „Nu scrie asta încă” (not „Nu scrii asta încă”),
    „Nu-ți face griji”.
- **Hortatives read better than bare first-person plurals.** „Hai să...” is warm and
  spoken; the bare „Să...” is fine but flatter.
  - "Let's look at the following code" → „Hai să ne uităm la codul de mai jos”
  - "Try it out" → „Încearcă”
  - "Let's begin" → „Hai să începem” / „Să începem”
  - "First, install Node.js" → „Mai întâi, instalează Node.js”, never the formal
    „Instalați Node.js”

## Orthography and typography

- **Comma-below diacritics are mandatory: ș ț** (U+0219, U+021B). **Never the cedilla
  forms ş ţ** (U+015F, U+0163). ă, â and î are equally mandatory; never strip diacritics.
- **â inside words, î at the beginning and the end**: „cuvânt”, „început”, „a înțelege”,
  „a coborî”. Compounds keep the î of their second element („neînțeles”).
- **Quotation marks are „...”** (U+201E opening, U+201D closing), with «...» for a quote
  inside a quote. Never the ASCII `"` or `'`, and never a straight closing quote after an
  opening „.
- **No English title case.** Romanian uses sentence case in headings, buttons and titles:
  „Salvează ca...”, not „Salvează Ca...”.
- **English loanwords take the definite article directly or with a hyphen, depending on
  pronunciation.** No hyphen when the word ends as it is pronounced: „stringul”,
  „stringuri”, „linkul”, „browserul”, „blogul”. Hyphen when spelling and pronunciation
  diverge: „site-ul”, „mouse-ul”, „array-ul”, „show-ul”.
- **Tech loanwords are neuter**: „un string / două stringuri”, „un browser / două
  browsere”, „un server / două servere”.

## Grammar

Romanian-specific rules that English speakers (and machine translation) get wrong:

- **The definite article is a suffix, not a separate word.** „cod” → „codul”, „funcție” →
  „funcția”, „variabilă” → „variabila”. Do not translate "the function" as a bare
  „funcție” (it reads unfinished) or as „acea funcție” (a demonstrative that was not in
  the source).
- **Three genders, and agreement is everywhere.** Adjectives, participles and past
  participles agree in gender and number. Neuter nouns behave as masculine in the singular
  and feminine in the plural: „un tablou nou” / „două tablouri noi”. Track gender per noun
  („funcția ... ea”, „tabloul ... el”) rather than defaulting to one pattern.
- **„pe care” requires a resumptive clitic.** Where English drops the relative pronoun
  entirely, Romanian needs both „pe care” and a matching pronoun on the verb.
  - „valoarea **pe care o** returnează funcția” (the value the function returns)
  - Not: „valoarea care returnează funcția” (this says the value returns the function)
- **Prefer the „să” subjunctive over the „a” infinitive.**
  - „Vrei **să** continui?” (not „Vrei a continua?”)
  - „Încearcă **să** rulezi codul” (not „Încearcă a rula codul”)
- **Prefer the reflexive passive with „se” over „este + participle”.** Write „codul **se**
  execută de sus în jos”, not „codul **este executat** de sus în jos”.
- **Word order is topic/focus-driven, not fixed SVO.** Known information leans left, new
  or important information moves toward the end of the clause, and subject-verb inversion
  is completely normal: „S-a produs o eroare”, not „O eroare s-a produs”. Reorder for
  natural emphasis rather than mapping clause by clause.
- **Don't chain „care” clauses.** English strings together "..., which means..., so
  that...". Break a long English sentence into two or three shorter Romanian ones rather
  than reproducing its subordination.
- **Commas:** no comma before „și” in a simple enumeration, and never between subject and
  predicate. Do use a comma before „care” when the clause is non-restrictive.

## Anglicisms and calques to avoid

- **„librărie” is a bookshop.** A software library is a **„bibliotecă”**.
- **„a realiza” means to accomplish**, not to notice. English "you'll realize that..." is
  „îți vei da seama că...”, never „vei realiza că...”.
- **„eventual” means possibly**, not finally. English "eventually" is „în cele din urmă” /
  „într-un final”.
- **„a suporta” is to endure.** Customer support is „asistență” or „suport” (the noun is
  fine, the verb is not).
- "it makes sense" → „are sens”, never the calque „face sens”.
- "you can" → „poți”, not „ești capabil să”.

## Style notes

- **Em dashes:** the natural Romanian replacements are a **comma** for a mid-sentence
  aside, or two separate sentences. A **hyphen (-)** is also fine where it reads better,
  and keeps its normal jobs: compound words („cuvânt-cheie”), and attaching the article to
  a loanword whose ending needs it („site-ul”, „array-ul”).
- **Brackets in prose:** default to plain _paranteze_. Only name the type when it matters,
  and then show the glyph in a code tag straight after: _paranteze pătrate_ (`[]`). The
  glyph-to-word mappings are in `glossary.md`.
  - „ca să apelezi o funcție, îi scrii numele și apoi cele două paranteze (`()`).”
- **Rhetorical asides** ("So what do these conditions look like?") stay as natural
  Romanian rhetorical questions: „Și cum arată aceste condiții?”
- **Jiki-name inflection:** „Jiki” does not take Romanian endings. Use the prepositive
  „lui” for the genitive and dative („atelierul **lui** Jiki”, „îi spui **lui** Jiki”) and
  „pe Jiki” for the direct object. Flag any form that reads awkwardly.
