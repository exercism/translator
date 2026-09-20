# Swedish (sv) language guide

The Swedish-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

Write Sweden-Swedish: where Finland-Swedish school material and Sweden's own developer
writing diverge, follow what Swedish developers actually write.

## Formality (critical)

- **Use "du" throughout.** Swedish has no live formal/informal split.
- **Never use "ni" to one reader.** "Ni" is only ever the plural.
- **Prefer "du" over the generic "man".** Swedish instructional prose drifts into "man
  skriver..."; the prose is talking to *you*, so write "du skriver...". Use "vi" for the shared
  journey ("nu ska vi titta på...").
- Encouraging imperatives:
  - "Nu ska vi titta på koden här nedanför" (Let's look at the code below)
  - "Testa själv!" (Try it out)
  - "Nu kör vi" (Let's begin)
- **"Låt oss" is banned.** English "Let's..." is not Swedish "Låt oss...". Swedish says
  "nu ska vi...", "nu gör vi...", "nu kör vi", or simply an imperative.

## Grammar

- **V2 word order.** The finite verb is the second element of a main clause. If anything
  other than the subject opens the sentence, the subject moves behind the verb.
  - EN: "In this chapter you will learn..." → SV: "I det här kapitlet **lär du dig**..."
    (not "I det här kapitlet du lär dig...")
  - EN: "Now we're going to look at..." → SV: "Nu **ska vi** titta på..."
- **Definiteness is a suffix, not an article.** "the function" is `funktionen`, not `den
  funktion`. `värdet`, `variablerna`, `loopen`. Use `den`/`det` only alongside an
  adjective or a demonstrative: `den här funktionen`, `det gröna värdet`.
- **Gender (en/ett) drives agreement.** Get the article right for every glossary noun and
  agree adjectives with it: `ett villkor` → `villkoret är sant`; `en jämförelse` → `jämförelsen är sann`.
- **Compounds are written as ONE word.** Särskrivning (splitting a compound) changes the
  meaning outright: `felsökning` is debugging, `fel sökning` is "the wrong search". Write
  `programmeringsspråk`, `returvärde`, `kodblock`.
- **Break compounds longer than four or five elements with a preposition** rather than
  stacking them. English noun stacks ("Junk E-mail Reporting Tool") become
  preposition phrases in Swedish ("Rapportverktyg för skräppost").
- **Attaching Swedish endings to code and English tokens.** Use a hyphen when the first
  part is a code identifier, a keyword, a brand name or an unnaturalized English word:
  `` `if`-satsen ``, `` en `for`-loop ``, `` `repeat`-blocket ``, `React-appen`. Where the
  loan is fully naturalized (`loop`, `sträng`, `array`, `bugg`), inflect it directly with
  no hyphen: `loopen`, `arrayen`, `strängar`.
- **Genitive takes a bare -s, never an apostrophe.** `Exercisms sida`, not `Exercism's
  sida`. A
  name already ending in s, x or z takes nothing at all.
- **Swedish prefers a finite verb where English uses -ing.** "When writing code" → "När du
  skriver kod".
- **The s-passive is natural, but this voice is personal.** "koden körs" is correct
  Swedish, yet "programmet kör koden" is what this content wants. Prefer the named actor.

## Information structure and natural rhythm

Do **not** map English clause by clause. Read a whole English paragraph, work out what it
is doing, then rebuild it as Swedish.

Workflow: translate a paragraph, then read the Swedish aloud and ask "would a Swedish
writer have started the sentence here, with this word?" If not, reorder.

### Concrete techniques

- **Front what the paragraph is already talking about, then invert.** Swedish likes to
  open a sentence with the known thing and let V2 do the rest. "We use `if` in these
  situations" → ”I de här situationerna **använder vi** `if`.”
- **Split long English sentences.** English chains "..., which means..., so that...".
  Swedish reads better as two or three shorter sentences. Break them, and let each one
  land.
- **Use "då", "ju", "väl" and "alltså" sparingly to carry the spoken tone.** These small
  words are how conversational Swedish sounds conversational. A page with none of them
  reads flat; a page full of them reads twee.
- **Give conditions a full predicate.** A bare ”Om det här, gör det här” is unfinished. A
  condition is a claim that is true or false, so say so: ”Om villkoret är **sant**, gör du
  det här.”
- **Turn English noun phrases into verbs.** "the creation of a variable" →
  ”när du skapar en variabel”, not ”skapandet av en variabel”.
- **Rhetorical asides** ("So what do these conditions look like?") stay natural Swedish
  questions: ”Så hur ser de här villkoren ut då?”

### Self-check (signs you tracked English)

Re-read for: a fronted phrase with no inversion; ”Låt oss...”; ”man” where the prose is
addressing the reader; särskrivning; the anglicisms and false friends the glossary rules
out, plus _kontrollera_ used for "control".

## Style notes

- **Em dashes:** the Swedish tankstreck is an **en dash with a space on each side** and is
  used more sparingly than English uses its dashes. Prefer a comma, a parenthesis, or two
  sentences. The hyphen keeps its normal jobs: compounds, and endings on code and foreign
  tokens (`` `repeat`-satsen ``, `25-procentig`).
- **Quotation marks:** Swedish uses `”...”`, the same right-hand double quote at both ends.
  Never the English `“...”`, and never the low opening mark `„`.
- **Capitalization:** only the first word of a heading and proper names. Never title case,
  never all caps. Language names, weekdays and months are lowercase (`svenska`, `måndag`).
  A compound whose first part is a name keeps the capital: `Windows-program`,
  `Exercism-kontot`.
- **No Oxford comma.** Delete it when the English has one.
- **Decimal comma**, and a space (not a comma) as the thousands separator.
- **Ellipsis** takes a space before it in running text: ”så här ...”.
- **Brackets in prose:** default to plain _parentes_. Only name the specific bracket type
  when it matters, and then show the glyph in a code tag immediately after: _hakparenteser
  (`[]`)_. The glyph-to-word mappings themselves are in `glossary.md`.
- **Latin-script product names** take a genitive `-s` and no apostrophe. Never attach a
  definite ending to a name. Flag if an inflected form reads awkwardly.

## Worked examples

**Titles and headlines** (sentence case, natural order, no drama):
- Avoid: "Exercism är född" (melodramatic) → Prefer: "Exercism är här" / "Nu lanserar vi
  Exercism"
- Avoid: "Ett nytt sätt av att lära sig koda" (calqued) → Prefer: "Ett nytt sätt att lära
  sig programmera"
- Avoid: "praktiska övningsuppgifter" (redundant) → Prefer: "praktiska övningar"

**Calls to action:**
- Signup: "Kom igång nu!" / "Skapa konto" / "Börja programmera i dag" (not the vague
  "Följ med oss!")
- Trying: "Testa själv!" / "Testa gratis"

**Acronyms:**
- "PPP pricing" → "priser anpassade efter köpkraften i ditt land"
- "Q&A" → "frågor och svar"

**Natural phrasing** (good vs stiff/literal):
- "First, install Node.js" → "Börja med att installera Node.js"
- "Try running this code" → "Testa att köra koden" (not "Försök att köra denna kod")
- "This is where it gets interesting" → "Det är nu det börjar bli intressant"
- "we worked hard" → not "vi jobbade hårt"; use "vi har lagt ner mycket jobb på det här"
- "from zero to confident beginner" → "från noll till trygg nybörjare"
- "they hit a wall because they lacked the fundamentals" → "de körde fast för att
  grunderna saknades" (not the literal "slog i en vägg")
