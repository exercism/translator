# French (fr) language guide

The French-specific realization of `global/voice.md`: formality, grammar, typography, and
worked examples.

Write general, international French (the language used across France and other Francophone
regions), not a Quebec-specific variant. Where French usage genuinely splits by region,
default to the form used in France.

## Formality (critical)

- **Use the informal "tu" (tutoiement) throughout.**
- **Never use "vous"** (formal/plural address) to the reader.
- Keep verb conjugations in **second person singular informal** consistently, start to
  finish.
- **Soften direct address with "on".** Even in tu-register writing, French leans on the
  impersonal/collective **"on"** ("on va voir...", "on utilise...") for framing sentences,
  rather than addressing the reader with "tu" in every single sentence. Reserve direct
  "tu" for imperatives, encouragement, and moments that are genuinely about the reader.
- **"Tu" is the reader, and nobody else.** When the English describes some other actor's
  own orientation or actions, keep it on that actor ("si le personnage regarde vers la
  droite"), not on the reader ("si tu regardes vers la droite").
- Encouraging imperatives and framing:
  - "On va voir..." / "Voyons..." (Let's look at...)
  - "Essaie" / "Essaie de..." (Try it out)
  - "Commençons" / "C'est parti !" (Let's begin)
  - "À toi de jouer !" (Now it's your turn)
  - "Pas de panique" (Don't worry, register-neutral)

## Grammar

- **Gender agreement.** Adjectives, articles, and some past participles agree with each
  noun's grammatical gender: "une variable **déclarée**", "un tableau **vide**". The
  glossary records each term's gender; agree consistently with it.
- **Elision is obligatory** before a vowel or silent *h* ("l'objet", "qu'elle retourne",
  "jusqu'à"), and **most descriptive adjectives follow the noun** ("une fonction **pure**",
  "un tableau **vide**"), unlike English's adjective-before-noun default. A small set of
  common adjectives (grand, petit, bon, nouveau...) precede the noun.
- **"Espace" is masculine here.** A space character or gap between words is **un espace**.
  The feminine *une espace* is printers' jargon and reads as a mistake to a learner.
- **Avoid mechanical possessive over-use.** English says "check **your** code"; French
  more often uses the definite article: "vérifie **le** code" (not always "**ton** code").
- **Don't translate English gerunds one-for-one.** "By doing X, you get Y" is not "En
  faisant X..." in every case; often "Si tu fais X..." or a restructured sentence reads
  more naturally.
- **Say what a thing "prend", not what it "a", when a count follows.** _a_ (avoir) and _à_
  (preposition) are homophones, and _une fonction à deux paramètres_ is the ordinary French
  way to describe a signature, so "Cette fonction a deux paramètres" can be read as a noun
  phrase ("this function with two parameters") instead of a statement. Write "Cette fonction
  **prend** deux paramètres", which is also the idiomatic technical verb. The same applies to
  any "X has N Y" sentence where the "à + characteristic" pattern is available.
- **"Partir" takes "de" before a starting location.** Write "qui part **d'**en haut à
  gauche", not "qui part en haut à gauche" ("d'en haut à gauche", "de la case départ",
  etc.).
- **Corner and position phrases order "top" before "left" (or "right"), matching "en
  haut à gauche".** When prose names both axes of a corner or position (e.g. a pair of
  named parameters like `top`/`left`), keep the French vertical-then-horizontal order
  even if the English source lists them the other way round: "top et left" becomes
  "`top` et `left`", not "`left` et `top`".

## Sentence rhythm (critical)

- **French prefers subordination over choppy coordination.** Do not mechanically split
  every long English sentence into several short French ones. Native French tutorial
  prose favors subordinating connectors (*pendant que, avant de, dans la mesure où, ce
  qui signifie que*) and explicit logical connectors (*en effet, ainsi, cependant, donc*)
  over a string of short declarative sentences. English can leave logic implicit between
  clauses; French usually needs it spelled out.
- **Don't stack connectors.** One explicit connector per clause boundary is usually
  enough; three in a row reads as clumsy, not precise.
- **Read a translated paragraph aloud.** If it sounds like a checklist of short
  sentences, look for a place to subordinate one clause into another.

## Anglicisms and calques to avoid

These recur in translated-from-English French and are worth actively checking for:

- "supporter" (to support a feature) → **prendre en charge** (technical), **assistance**
  (help/support desk)
- "adresser un problème" (to address a problem) → **traiter**, **régler**, **s'attaquer
  à** un problème
- "digital" → **numérique**
- "librairie" (a code library) → **bibliothèque**
- "définitivement" (meaning "definitely") → **assurément**, **tout à fait**, **vraiment**
- "résoudre / traverser un labyrinthe" (to solve/traverse a maze) → **sortir du
  labyrinthe**, **explorer le labyrinthe**. French doesn't "solve" a maze, so name what the
  walker does rather than treating the maze as an object being solved.
- Note: "réaliser" meaning "to realize/understand" is accepted modern usage, not an
  anglicism to flag.

## Typography and punctuation

French typographic convention differs mechanically from English; apply these
consistently:

- **Guillemets, not English quotes.** Use « » for quotation, not " ". Put a normal space
  before « and after », and a non-breaking space (U+00A0) immediately inside each
  guillemet: « comme ceci ».
- **Nested quotation uses ‹ › for the inner pair.** When a quoted phrase itself
  needs to set off a word (e.g. quoting a machine name inside dialogue), use
  « … ‹ mot › … » rather than doubling up « », since a repeated pair reads ambiguous.
- **Non-breaking space before `:`.** Always use U+00A0 before a colon in prose: "la
  syntaxe suivante :" not "la syntaxe suivante:".
- **Non-breaking space before `; ! ?`.** Same rule as before `:`: always use U+00A0
  before `;`, `!`, and `?` in prose, e.g. "Tu es prêt ?" not "Tu es prêt?".
- **Sentence case for headings and titles**, not English title case. Capitalize only the
  first word and proper nouns: "Les boucles en JavaScript", not "Les Boucles En
  JavaScript".
- **Decimal comma, not decimal point**, when a number appears in prose: "3,14", not
  "3.14". This does not apply inside code blocks.
- **Non-breaking space before `%` and units**: "25 %", "10 €".
- **English words dropped into French prose are set in italics** (e.g. "une boucle
  _while_", "une _string_"), the ordinary French convention for a foreign word used
  unglossed. This is a different case from **a literal keyword or function name referenced
  as code**, which stays in code font per the glossary's own entries (e.g. "le mot-clé
  `while`", the keyword `if`): backticks mark it as syntax, not prose. Picking between the
  two is about what the word is doing in the sentence, not which word it is. The same word
  takes backticks when the sentence is talking about the code construct, and italics when it
  is just being used as an English loanword in a French sentence ("une boucle _while_"
  describing the general pattern, against "le mot-clé `while`" pointing at the actual
  keyword). Flagged as an inconsistency by native-speaker review (resu-xunil, 2026-08-15);
  apply this rule going forward and fix drift as it is found rather than doing a dedicated
  sweep.

## Style notes

- **Never use a hyphen as a substitute for an em dash** in running prose (em dashes
  themselves are banned in `global/rules.md`). A hyphen keeps only its normal jobs, such
  as compound words.
- **Prefer a relative clause with _qui_ over a compressed modifier.** Where English packs a
  description into an adjective or an -ing participle, unpack it: "du code qui se répète",
  not "du code répétitif"; "une couleur qui commence par #", not "une couleur commençant par
  #".
- **Rhetorical asides** ("So what does this look like?") → keep them as natural French
  rhetorical questions: "Alors, à quoi ça ressemble ?"
- **An English verb phrase used as a name takes the imperative, second person singular.**
  This covers exercise titles, the `###` headings inside instructions, and any other short
  label built on a verb: "Turn Around" → "Fais demi-tour", "Drawing a fox face" → "Dessine
  une tête de renard", "Putting into practice what you've learned" → "Mets en pratique ce
  que tu as appris". Never the infinitive ("Faire demi-tour", "Dessiner...", "Mettre...").
  A name that is a noun phrase in English ("Snowman", "Digital Clock", "Occurrences
  multiples") stays a noun phrase in French and is unaffected.
- **The dev term _en dur_ (hardcoded) is always wrapped in guillemets**: « en dur », never
  bare. On its first use in a file, gloss it briefly where there is room (e.g. "utiliser une
  valeur fixe au lieu d'une variable que l'on peut modifier à tout moment").
- **Capitalise the coordinate letters X, Y and Z in prose parentheticals**: "(position X du
  soleil)", "(Y du rouge)", "(X du boîtier)". Code identifiers keep their own casing
  (`sunX`, `sunY`) and are never changed.
- **"We expected..." in a test-failure message is _On s'attendait à ce que..._**, never _On
  attendait que..._ (which means waiting for something to happen, not expecting it) and
  never _Nous nous attendions à ce que..._ (the collective voice is the impersonal _on_).
- **A state named in prose takes the plain French adjective, agreed**, not the untranslated
  code literal in guillemets: "des lettres présentes", "ses deux premières lettres
  correctes", never "en correct" or "« present »". The code-formatted literal is kept only
  where the sentence points at the value the code returns, per the backticks-vs-italics rule
  above.
- **Gloss a color code-literal value in parentheses on its first mention in a file**:
  `"yellow"` (jaune), `"red"` (rouge), `"skyblue"` (bleu ciel). Gloss straight after the
  code-formatted value, no comma before the parenthesis. Only needed once per file, on the
  first occurrence of that color.
