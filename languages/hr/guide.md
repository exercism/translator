# Croatian (hr) language guide

The Croatian-specific realization of `global/voice.md`: register, grammar, information structure, and style. Term choices are in `glossary.md` and are binding.

## Formality (critical)

- **Address the reader as `ti`** (second person singular, informal), start to finish. Never `vi`, and never the capitalised `Vi`, which the pravopis reserves for a personal letter to one named individual.
- **Omit the pronoun.** Croatian marks person on the verb, so a written `ti` is emphasis, not politeness. `Napiši svoj prvi program` reads better than `Ti napiši...`, and `Pokreni kôd` better than `Pokreni svoj kôd`. Drop possessives the same way: "your code" is usually just `kôd`.
- **Encouraging imperatives:**
  - `Pogledajmo ovaj kôd` (Let's look at this code)
  - `Krenimo` (Let's begin)
  - `Pokušaj` / `Isprobaj` (Try it out)
  - `Pokreni kôd i vidi što se dogodi` (Run the code and see what happens)
- **Use the first person plural for anything framed as "let's".** `Pogledajmo`, `Krenimo`, `Naučimo`. It carries the we-are-doing-this-together voice and never forces a gender.

### Never write a gendered form at the reader

Croatian past tense and adjectives agree with the addressee's gender, so a sentence like `Napisao si svoj prvi program` silently tells half of the readers they are the wrong gender. Three ways out, in order of preference:

1. **Stay in the present, imperative or future.** All three are ungendered.
2. **Move the agreement onto the object**, not the reader. "You've completed this exercise" → `Vježba je završena.` "You've written your first program" → `Tvoj prvi program je gotov!`
3. **Use an impersonal or neuter construction.** "You did it!" → `Uspjelo je!` "Well done!" → `Odlično!` / `Bravo!`

**Never write slash or bracket forms on a verb** (`napisao/la si`, `napisao(la) si`). They are unreadable and IHJJ's advisers reject them.

## Grammar

- **Write ijekavian.** `vrijednost`, `tijelo`, `mjesto`, `slijepa`, `dijeliti`, `svjetlo`. Never the ekavian `vrednost`, `telo`, `mesto`.
- **Form verbs with `-irati`.** `definirati`, `deklarirati`, `inicijalizirati`, `programirati`. Never `-isati` or `-ovati` (`definisati`, `deklarisati`).
- **Use the infinitive, not `da` + present.** `Moraš definirati funkciju`, never `Moraš da definiraš funkciju`. The `da`-construction is the single most recognisable non-Croatian marker in otherwise correct prose.
- **Clitics go in second position.** The unstressed forms (`je`, `si`, `su`, `se`, `ću`, `ćeš`, `bi`, `mi`, `ga`, `joj`) attach after the first stressed word or phrase of the clause, never at the start and never drifting to the end. `Ova funkcija **se** poziva s dva argumenta`, not `Ova funkcija poziva **se**...`. When several stack, the order is fixed: question particle, verb clitic, dative, accusative, genitive, then `se`, then `je`.
  - `Petlja **se** izvršava tri puta.`
  - `To **ti** **se** može činiti čudnim.`
- **Pick the aspect deliberately.** Perfective for a single completed action (`pokreni kôd`, `pozovi funkciju`), imperfective for something repeated or ongoing (`petlja se izvršava`, `dok se uvjet provjerava`). Carrying English's bare form across produces sentences that are grammatical and mean the wrong thing.
- **Decline foreign proper names directly, with no hyphen.** `Pythona`, `u Reactu`, `JavaScripta`, `s Node.jsom`. The original spelling is always kept.
- **Acronyms take a hyphen before the ending.** `API-ja`, `LLM-a`, `AI-a`, `CSS-om`.
- **Never calque the English noun-adjunct pattern.** "a Python function" is `Pythonova funkcija` or `funkcija u Pythonu`, never `Python funkcija`. Same for `JavaScript objekt` (wrong) versus `objekt u JavaScriptu` (right).
- **Give a borrowed noun the gender its ending implies, then keep it.** `string` and `objekt` are masculine, `funkcija` and `varijabla` feminine, `polje` neuter. Everything agreeing with them follows: `nova varijabla`, `prazan string`, `to polje`.
- **Hyphenate and lowercase `web-` compounds:** `web-stranica`, `web-mjesto`, `web-preglednik`.

## Information structure

Croatian word order is free enough that English order is usually *possible*, which is the trap: the sentence parses but the emphasis lands in the wrong place. Read a whole English paragraph, work out what each sentence is really asserting, then rebuild it.

- **Given information first, new information last.** The end of a Croatian clause is where the point goes. "A function returns a value" introduces the value, so: `Funkcija vraća vrijednost.` But if the value is already under discussion and the returning is the news, front it: `Tu vrijednost funkcija vraća pozivatelju.`
- **A sentence that opens with brand-new information reads abrupt.** Start from what the reader already has.
- **Split long English chains.** English strings clauses together with "which means... so that...". Croatian reads better as two or three shorter sentences, and splitting is what lets the clitics sit naturally.
- **Do not front the subject just because English did.** Croatian often starts with the adverbial or the object: `U ovim situacijama koristimo `if``, not `Mi koristimo `if` u ovim situacijama`.

## Term clarification (Croatian realisation)

The principle (the `<define>`/`<literal>` markup, the no-auto-gloss rule, and direction from the glossary's `Use (hr/en)` column) lives in `global/voice.md`. The Croatian marker phrase for "in English" is **`na engleskom`**, placed after the English term inside the brackets.

- **Croatian-primary term** (`Use = hr`): Croatian first, English in italics with `na engleskom` in brackets. `petlja (_loop_ na engleskom)`, `funkcija (_function_ na engleskom)`.
- **English-primary term** (`Use = en`): English first in italics, Croatian gloss in brackets, no marker phrase. `_string_ (niz znakova)`.
- **Code identifier**: code span, Croatian meaning in brackets, no marker phrase. `` `turnLeft` `` (skreni lijevo).
- **Skip the gloss where it would only restate the English**, per `global/voice.md`. Croatian reads the same Latin script, so glossing `_chat_` as `chat` teaches nothing.

## The name "Jiki"

- **Decline it, with an intervocalic `-j-`.** Leaving it invariant reads as careless.

| Case | Form |
|---|---|
| nominativ | Jiki |
| genitiv | Jikija |
| dativ | Jikiju |
| akuzativ | Jikija |
| vokativ | Jiki |
| lokativ | Jikiju |
| instrumental | Jikijem |

  Plural, for the little Jikis inside the machines: `Jikiji`, `Jikija`, `Jikijima`.

- **Use the possessive adjective, not the genitive.** `Jikijevo skladište`, `Jikijeva radionica`, `Jikijev stroj`. Never `skladište Jikija`.
- **`mali Jiki`** is the small Jiki who works inside a function machine. Never `Jikić`: `-ić` is the Croatian surname suffix and reads as a family name.

## Style notes

- **Quotation marks:** Croatian pairs, **„** (U+201E) to open and **"** (U+201D) to close: `„Pokušaj"`. Never straight ASCII `"`. For a quote inside a quote use single `'…'`.
- **Em dashes:** the natural Croatian replacements are a comma for a mid-sentence aside, two separate sentences, or a spaced en dash (`–`) where a real break helps. Never an em dash.
- **Sentence case in every heading and title.** Croatian does not capitalise each word: `Kako funkcije rade`, never `Kako Funkcije Rade`. Only proper nouns keep their capital.
- **Write `kôd` with the circumflex** for the noun meaning source code, which keeps it apart from the preposition `kod`. `Kôd`, `kôda`, `u kôdu`.
- **Numbers:** decimal comma (`3,14`), space as the thousands separator (`10 000`). Dates are `12. 8. 2026.`, with the trailing full stop.
- **Do not put quotation marks around text the learner has to type.** They will type the quotes.
- **Rhetorical asides** ("So what does this look like in code?") stay as natural Croatian questions: `Pa kako to izgleda u kôdu?`
- **Do not reach for a purist coinage.** Where Croatian genuinely says the borrowed word, use it (see `glossary.md`). `programčić`, `očvrsje`, `poslužilac` and `prebirnik` exist in dictionaries and not in anything a reader has read.
