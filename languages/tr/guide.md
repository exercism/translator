# Turkish (tr) language guide

The Turkish-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

Write standard, written Turkey Turkish (the form taught in Turkish schools, used by TDK,
and used across national media). There is no regional variant to choose between: readers
in Turkey and readers across the Turkish-speaking diaspora get the same written standard.

## Formality (critical)

- **Default to first-person-plural "let's/we" framing**, not direct second-person
  address. The hortative/optative mood (`-elim/-alım`) and the first-person-plural
  present/future (`-yoruz`, `-acağız`) carry the collaborative warmth:
  - "Şimdi şuna bakalım" (Let's look at this now)
  - "Bir örnek görelim" (Let's see an example)
  - "Hadi başlayalım" (Let's begin)
  - "...yazıyoruz" (we're writing...), "İnceleyeceğiz" (we'll examine...)
- **Use impersonal/passive constructions for factual, definitional statements**:
  "kullanılır", "tanımlanır", "oluşturulur".
- **When direct address to the reader is unavoidable, use formal `siz`.** Example:
  "Şimdi sıra sizde" (Now it's your turn).
- **Never use informal `sen`.**
- **Imperative register ladder** for direct instructions (installation steps, "try this"):
  - Default: polite plural `-in/-ın` ("yazın", "çalıştırın", "kurun").
  - Soften optional/reassuring steps with `-ebilirsiniz` ("you can..."): "indirebilirsiniz".
  - Reserve the bare stem ("yaz", "dene") for short, punchy calls to action only (buttons,
    signup CTAs), never for prose instructions.
  - Reserve `-iniz` (the fully formal imperative, e.g. "yazınız") for genuinely formal
    contexts; avoid it in body prose.
  - Negative imperative: "Merak etmeyin" / "Endişelenmeyin" (Don't worry) reads warmer than
    a literal "worried don't be" calque.
- **Pick one address register and hold it consistently.** The "let's/we" framing plus
  formal `siz` for the rare direct address is the whole system; do not mix in `sen` forms
  anywhere in a document, including rhetorical asides.

## Grammar

Turkish-specific rules that English speakers, and literal machine translation, get wrong:

- **Verb-final (SOV) word order.** The finite verb belongs at the end of the clause. The
  single most common literal-translation error is leaving the verb in English SVO
  position.
  - EN: "The function returns a value." → NOT "Fonksiyon döndürür bir değer." → **"Fonksiyon
    bir değer döndürür."**
  - EN: "The loop runs three times." → **"Döngü üç kez çalışır."**
- **Pro-drop: don't carry over English pronouns.** Turkish encodes person via verb
  agreement and possession via noun suffixes, so subject and possessive pronouns are
  normally dropped, kept only for contrast/emphasis.
  - EN: "You run your program." → NOT "Siz sizin programınızı çalıştırırsınız." →
    **"Programınızı çalıştırırsınız."** (`siz` form, per Formality; the pronouns go, the
    agreement and possessive suffixes carry it)
  - EN: "You write your code." → NOT "Siz sizin kodunuzu yazarsınız." →
    **"Kodunuzu yazarsınız."**
  - EN: "It returns its value." → **"Değerini döndürür."**
- **Case suffixes, not prepositions.** Turkish expresses "to/in/from/with" as suffixes on
  the noun (dative -e/-a, locative -de/-da, ablative -den/-dan, instrumental ile/-le/-la),
  not separate preposition words.
  - EN: "Save it to the file." → NOT "Kaydet o -e dosya." → **"Dosyaya kaydedin."**
  - EN: "The value in the list." → NOT "değer içinde liste" → **"listedeki değer."**
  - EN: "Run it with Python." → **"Python ile çalıştırın."** / **"Python'la çalıştırın."**
- **No definite article; the accusative suffix carries definiteness.**
  - EN: "Run the program." → **"Programı çalıştırın."** (not a separate word for "the")
- **Don't over-insert `bir` for "a/an."** English articles map onto Turkish `bir` far less
  than one-to-one; over-inserting it per English article reads unnatural.
  - NOT "Bir fonksiyon bir değer döndürür." → **"Fonksiyon bir değer döndürür."**
- **Zero copula in the present.** No separate word for "is/are" with predicate nominals;
  a suffix (or nothing at all) does the job.
  - EN: "x is a variable." → **"x bir değişken."** (or **"x bir değişkendir"** with the
    formal copular suffix `-dir`)
- **Relative clauses use pre-nominal participles, not a "which/that" word.** Turkish has
  no relativizer; it fronts a participle before the head noun instead.
  - EN: "the variable that stores the result" → NOT a calqued "değişken ki saklar
    sonucu" → **"sonucu saklayan değişken"** (literally "result-storing variable")
  - EN: "the function that you wrote" → **"yazdığınız fonksiyon"** (note: pro-drop again,
    no separate word for "you", and the `siz` participle, never `sen`'s "yazdığın")
- **Aorist, not progressive, for general/definitional statements.** English "-ing" habits
  don't map onto Turkish `-iyor` for statements that are always true, not happening right
  now.
  - EN: "A function returns a value." → **"Fonksiyon bir değer döndürür"** (aorist -ir),
    not "döndürüyor" (progressive, wrong here).
- **Don't over-translate "please" as `lütfen` on every imperative.** Turkish conveys
  politeness mainly through the address register itself (the `siz` forms, softened
  imperatives above), not by attaching "lütfen" to every instruction. Use it sparingly,
  for genuine emphasis.

## Term clarification

When introducing an English term under Turkish-primary (see `global/voice.md`), prefix
the italic English term inside the parentheses with `İngilizce:`, e.g. fonksiyon
(İngilizce: _function_).

**Explain a Turkish term a newcomer will not recognise, in one short sentence, at its
first mention on a page.** The bracketed English gloss alone is not enough: it tells a
reader which English word is meant, not what the thing is. The standing case is _açıklık_
(the HSL lightness channel), which is an ordinary Turkish word a beginner will not connect
to colour, so the first time it appears say what it controls (how light or dark the colour
is). Every later mention on that page and elsewhere is the bare term.

**Where an English keyword has no exact Turkish equivalent, introduce it by what it does
rather than by a one-word gloss.** For `let`, use _olsun_ as the sense, but establish the
logic at its first introduction with the two things the keyword actually does: _değişken
tanımlama_ (variable declaration) and _değer atama_ (value assignment). Once that is set
out, bare `let` reads naturally for the rest of the course.

## Style notes

- **Em dashes:** in Turkish prose the natural replacements are a **comma** for a
  mid-sentence aside, or two separate sentences. Parentheses also work for a genuine
  aside.
- **Headings: sentence case, not English title case.** Capitalize only the first word and
  proper nouns/product names: "JavaScript'te döngüler", not "JavaScript'te Döngüler". A
  code token or product name inside a heading keeps its own casing regardless of
  position; never force-capitalize it to match sentence-initial position.
- **Dotted/dotless i: never Turkicize a code token or product name.** Turkish has four
  i-letters (i/İ dotted, ı/I dotless) with a case mapping that is the reverse of ASCII.
  Keep product names and code identifiers exactly as written in Latin script: **iPhone**,
  **iOS**, never "İPhone"/"İOS". Never alter the casing of a letter inside a code
  identifier (e.g. `if`, `index`) to fit Turkish capitalization; rephrase the sentence
  instead if a token would otherwise need to be capitalized.
- **Prefer rephrasing so no case suffix ever attaches to a code token.** Put the token in
  front of an ordinary Turkish noun and suffix the noun instead:
  - "telling Jiki to get the `move` machine" → **"Jiki'ye `move` makinesini ... söylemek"**,
    not "`move`'u".
  - Useful carrier nouns: _makinesi_ (machine), _fonksiyonu_ (function), _değişkeni_
    (variable), _deyimi_ (statement), _anahtar kelimesi_ (keyword), _dosyası_ (file).
- **Where a suffix genuinely cannot be avoided, it attaches via apostrophe**, with the
  suffix vowel chosen by the token's **pronounced** last vowel (vowel harmony), not its
  written last vowel: _React'e_, _Python'da_, _Node.js'i_, _repeat'i_, _GitHub'a_. Never
  alter the token's own characters, only the attached suffix. Product names (_Python'da_,
  _React'e_) are the normal case for this; bare code identifiers should usually have been
  rephrased per the bullet above.
- **Numbers in prose use a comma decimal separator and a point thousands separator**
  ("3,14", "2.050,25"), the reverse of English. This applies to prose only: numbers
  inside code samples, code output, or anything a learner will type or copy keep the
  programming convention unchanged ("3.14"), ideally formatted as code so the two
  conventions never visually collide.
- **Quotation marks: curly double quotes in prose** (“…”), with curly single quotes for a
  nested quote (‘…’). Never substitute curly quotes inside code spans, string literals, or CLI
  commands; those always use straight ASCII quotes.
- **The "English noun + etmek" pattern is colloquial; prefer the native verb in written
  prose.** Not "compile etmek", "debug etmek", "run etmek", but the single-word native
  verb: _derlemek_, _hata ayıklamak_, _çalıştırmak_. Reserve the "X etmek" pattern only
  for a term with no established native verb (see the glossary's "Keep in English"
  section).
- **"Jiki" stays invariant** as a proper/character name; attach Turkish suffixes with an
  apostrophe as usual ("Jiki'nin", "Jiki'ye") but never alter the name itself.

## Worked examples

Concrete Turkish for the principles in `global/voice.md`.

**Titles and headlines** (natural word order, sentence case, no drama, no redundancy):
- Prefer: "Programlamayı öğrenmenin yeni bir yolu" (a new way to learn programming),
  sentence case throughout.

**Calls to action** (specific, action-oriented, bare-stem register is fine here):
- Signup: "Hemen başla!" / "Şimdi kaydol!" (not the vague "Bize katıl!")
- Trying: "Şimdi dene!" / "Ücretsiz dene!"
