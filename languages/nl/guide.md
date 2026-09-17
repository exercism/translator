# Dutch (nl) language guide

The Dutch-specific realization of `global/voice.md`: formality, grammar, typography, and
worked examples.

The target variant is **Netherlands Dutch (nl-NL)**. Prefer NL idiom and spelling
(e.g. _aanroepen_ for calling a function, not the Belgian _oproepen_).

## Formality (critical)

- **Use the informal "je" / "jij" (jou-vorm) throughout.**
- **Never use "u"** (formal).
- Keep the second person informal consistently, start to finish. Use "je" for the
  unstressed form and "jij" only when you genuinely want to stress the reader ("dat doe
  _jij_").
- Possessive: "je" ("je code", "je functie"), not "uw".
- Encouraging imperatives use the bare verb stem (no -t):
  - "Laten we naar de volgende code kijken" (Let's look at the following code)
  - "Probeer het uit" (Try it out)
  - "Laten we beginnen" (Let's begin)

## Grammar

- **Verb-second (V2) in main clauses.** The finite verb is always the second element.
  When you front anything other than the subject, subject and verb invert.
  - EN: "The function returns a value" → NL: "De functie geeft een waarde terug."
  - EN: "In these cases we use `if`" → NL: "In deze gevallen gebruik je `if`." (fronting
    "In deze gevallen" pushes "je" after the verb)
- **Separable verbs must actually separate.** Many core verbs here are separable and
  their prefix moves to the end of a main clause; never leave the prefix glued on, and
  never strand it directly after the verb.
  - _aanroepen_: "Je **roept** de functie **aan**." (not "aanroep de functie")
  - _teruggeven_: "De functie **geeft** 30 **terug**." (not "de functie returnt 30", not
    "geeft terug 30")
  - _uitvoeren_: "De computer **voert** de code **uit**."
  - In a subordinate clause the parts rejoin at the end: "...omdat de functie een waarde
    **teruggeeft**."
- **de/het gender drives articles, adjectives and relative pronouns.** Learn each term's
  gender and keep it consistent:
  - _de_: de variabele, de functie, de waarde, de lus, de voorwaarde, de parameter, de
    methode, de fout, de vergelijking, de instructie, de cursus, de opdracht, de loods, de
    werkplaats, de slinger, de plank, de machine, de doos.
  - _het_: het getal, het argument, het object, het element, het sleutelwoord, het
    whiteboard, het mentale model (definite, so _-e_; indefinite: _een mentaal model_).
  - Relative pronoun follows gender: "de functie **die** ...", "het object **dat** ...".
- **Attributive adjectives take -e**, except a neuter noun with an indefinite article.
  - "een genest**e** lus", "de genest**e** functie", but "een genest object" (het-word,
    indefinite, so no -e).
- **Write compounds closed, not as separate words.** Dutch closes noun compounds where
  English uses two words.
  - _returnwaarde_, _invoergleuf_, _sleutelwoord_ (one word each), not "return waarde".
  - Use a hyphen only to join a loanword or keyword cleanly: _if-statement_, _for-loop_,
    _while-loop_.
- **Integrate English loan verbs with Dutch morphology.** A kept-English verb still
  conjugates and forms its participle the Dutch way: _printen_ ("het programma **print**
  de waarde"), _debuggen_, _committen_ (past participle _gecommit_). Do not leave them in
  bare English form.

## Information structure and emphasis

Dutch is broadly SVO with V2, so you will not usually reorder as aggressively as for a
free-word-order language. Two levers still matter:

- **The first slot (voorveld) is the emphasis/topic slot.** Put known or contextual
  information first, and let the new or important point land later in the clause. Fronting
  an adverbial ("Eerst...", "In deze gevallen...", "Daarna...") is natural and triggers
  inversion. Do not just mechanically start every sentence with the grammatical subject
  the way an English calque would.
- **Given before new.** Old information leftward, the new/important element toward the
  end. A sentence that opens cold on brand-new information reads abrupt in Dutch too.

Concrete techniques:

- **Don't calque the English continuous.** English "we are looking at" is just "we kijken
  naar" (simple present), or "we gaan kijken naar" for the near future. Never "we zijn aan
  het kijken naar" in instructional prose.
- **Break long English subordination.** English chains "..., which means..., so that...".
  Dutch reads better as shorter sentences. Split and re-order rather than mirroring the
  comma chain.
- **Rhetorical asides** ("So what do these conditions look like?") stay as natural Dutch
  rhetorical questions: "Hoe zien die voorwaarden er dan uit?"

## Term clarification

When introducing an English term under Dutch-primary (see `global/voice.md`), append
_in het Engels_ after the italic English term inside the parentheses, e.g. de functie
(_function_ in het Engels).

## Style notes

- **Em dashes:** in Dutch prose the natural replacements are a **comma** for a
  mid-sentence aside, or two separate sentences. A **hyphen (-)** keeps its normal jobs:
  closing compounds with a keyword or loanword (_if-statement_, _for-loop_), and joining
  awkward vowel collisions.
- **Capitalization:** Dutch uses **sentence case** in headings and titles (capitalise only
  the first word and proper nouns), never English title case. Inside a sentence, do not
  capitalise common nouns.
- **Quotes:** use typographic double quotes “...” (U+201C/U+201D) for asides and quoted
  literals. The low-high form „...” (U+201E/U+201D) is also acceptable; if you use it,
  use it for every quote in the file. Never mix the two forms, and never pair one form's
  opening mark with the other's closing mark.
- **Numbers:** Dutch uses a decimal comma and a period (or thin space) as thousands
  separator, but leave numbers inside code untouched.
- **Jiki-name inflection:** "Jiki" stays "Jiki"; the possessive is "Jiki's" (with
  apostrophe-s, as Dutch does for names ending in a vowel sound). Flag if an inflected form
  reads awkwardly.

## Worked examples

Concrete Dutch for the principles in `global/voice.md`.

**Titles and headlines** (natural word order, sentence case, no drama, no redundancy):
- Avoid: "De geboorte van Jiki" (too dramatic) → Prefer: "Jiki is er" / "Maak kennis met
  Jiki"
- Avoid: "Een nieuwe manier van het leren programmeren" (clumsy) → Prefer: "Leer
  programmeren op een nieuwe manier" / "Een nieuwe manier om te leren programmeren"

**Calls to action** (specific, action-oriented):
- Signup: "Begin nu!" / "Start meteen!" (not the vague "Doe mee!")
- Trying: "Probeer het uit!" / "Test het nu gratis!"

**Acronyms** (explain in Dutch, don't transliterate):
- "PPP pricing" → "prijzen aangepast aan de lokale koopkracht"
- "Q&A" → "vragen en antwoorden"

**Natural phrasing** (good vs stiff/literal):
- "Let's learn React" → "Laten we React leren" (not "Laat ons React leren", too Flemish/stiff)
- "First, install Node.js" → "Installeer eerst Node.js"
- "Try running this code" → "Probeer deze code uit te voeren" (not "Probeer het uitvoeren
  van deze code")
