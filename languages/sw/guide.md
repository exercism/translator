# Swahili (sw) language guide

The Swahili-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Term choices are in `glossary.md` and are binding.

Write **Standard Swahili (Kiswahili Sanifu)**, the written standard used across Tanzania and
Kenya. There is no locale split (no `sw-TZ`/`sw-KE`): readers are spread across East Africa
(primarily Tanzania and Kenya, also Uganda, Rwanda, eastern DRC) and read Standard Swahili
whatever their home dialect.

## Formality (critical)

- **Address the reader directly with the bare second-person-singular imperative
  throughout**: *Jaribu* (try), *Anza* (begin), *Fungua* (open), *Bofya* / *Bonyeza*
  (click).
- **Do not switch to the plural "ninyi" form** to sound more polite or formal.
- Keep verb forms in second-person singular consistently, start to finish.
- **Write in the short, direct, encouraging register of real Swahili tutorial content**, not
  the more formal or bureaucratic Swahili of government and legal documents.
- Encouraging imperatives, in the Jiki voice:
  - "Hebu tuangalie msimbo ufuatao" (Let's look at the following code)
  - "Jaribu mwenyewe" (Try it yourself)
  - "Hebu tuanze" (Let's begin)
  - "Hebu tujifunze JavaScript" (Let's learn JavaScript)
  - "Kwanza, sakinisha Node.js" (First, install Node.js)
  - "Jaribu kuendesha msimbo huu" (Try running this code)

## Grammar

- **Word order is SVO, like English**, so Swahili does not need wholesale clause-reordering.
  Translate for natural Swahili phrasing and rhythm, but do not hunt for a "focus position"
  the way you would in a free-word-order language.
- **Noun-class agreement is the single biggest pitfall.** Every Swahili noun belongs to one
  of several noun classes, and adjectives, possessives, demonstratives, numerals, and the
  subject/object markers on verbs must all agree with the class of the noun they refer to.
  This applies to technical vocabulary exactly as it does to everyday words: a sentence
  about *kitendakazi* (function, class 7/8: *kitendakazi hiki*, *vitendakazi hivi*) or
  *mkalimani* (interpreter, class 1/2 animate: *mkalimani huyu*, *wakalimani hawa*) needs
  its agreement markers to match that noun's class, not a default. When in doubt, check
  agreement by substituting a familiar noun of the same class and mirroring its markers,
  rather than guessing from the English sentence structure.
- **`kazi` stays free for its ordinary "work/job" meaning** and is never used as a technical
  term: *Kazi yake ni kufasiri msimbo* (it's his job to interpret the code), *jinsi mashine
  hiyo inavyofanya kazi* (how that machine actually works). "Function" is *kitendakazi*.
- **Locative "-ni" suffix vs. prepositions.** Swahili often expresses "in / at / on" with
  the locative suffix **-ni** rather than a separate preposition: "in the code" →
  "*msimboni*" or, depending on register, more naturally "*katika msimbo*"; "in the
  function" → "*ndani ya kitendakazi*". Prefer the natural Swahili construction over a
  word-for-word preposition mapping.
- **Verb-based tense/aspect markers, not auxiliary verbs.** Swahili marks tense and aspect
  with prefixes on the verb (*-na-* present, *-li-* past, *-ta-* future, *-me-* perfect),
  not separate helper words like English "is/was/will". "The function returns a value" →
  "*Kitendakazi hiki kinarejesha thamani*" (the *-na-* in *kinarejesha* carries the present
  tense; there is no separate "is").
- **Plurals via noun-class prefix, not a suffix.** Do not add an English-style "-s"
  equivalent. "Variables" is not "kigezo-s"; it is "*vigezo*" (the ki-/vi- class pair).
  Check the plural prefix for each technical noun rather than assuming a single pattern
  works for all of them.

## Term clarification

The Swahili realization of the `<define>` format in `global/voice.md`. The marker word is
**_kwa Kiingereza_** ("in English"), and it goes after the italic English term, inside the
brackets. Three cases, one for each direction:

- **Swahili is primary** (the glossary row says `sw`): Swahili word first, English in
  brackets with the marker. "kitendakazi (_function_ kwa Kiingereza)", "hitilafu (_error_
  kwa Kiingereza)".
- **English is kept primary** (the glossary row says `en`): the italic English term first,
  then the Swahili gloss from the glossary's "Keep in English" table in brackets, with
  **no** marker word. "_variable_ (kigezo, mahali panapohifadhi thamani)".
- **Code identifiers** (`move`, `turnLeft`): the identifier in backticks, then its Swahili
  *meaning* in brackets, with no marker word. "`move` (sogea)", "`turnLeft` (geuka
  kushoto)".

## Style notes

- **Em dashes:** use a comma for a mid-sentence aside, or split into two sentences.
- **Rhetorical asides:** keep them as natural Swahili rhetorical questions, e.g. "Sasa,
  hivi vinaonekanaje?" (So what do these look like?).
- **Jiki-name treatment:** treat "Jiki" as an invariant proper noun; where Swahili grammar
  would otherwise require a class-agreement marker (e.g. referring back to Jiki with a
  pronoun), use the class used for people/animate nouns (class 1/2, "yeye" for Jiki as a
  character).
- **Titles and headlines:** "Jiki Imezinduliwa" / "Karibu kwa Jiki" (Jiki has launched /
  Welcome to Jiki), not the dramatic "Kuzaliwa kwa Jiki" (the birth of Jiki). Do not render
  an English pun or wordplay title word for word; find a Swahili phrase that carries the
  same warmth and simplicity.
- **Calls to action:** "Anza sasa!" (Start now!) / "Jisajili sasa!" (Sign up now!), not the
  vague "Jiunge nasi!" (Join us!); "Jaribu mwenyewe!" (Try it yourself!) / "Ijaribu bila
  malipo!" (Try it for free!).
