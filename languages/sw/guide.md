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
- Encouraging imperatives:
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

## Style notes

- **Em dashes:** use a comma for a mid-sentence aside, or split into two sentences.
- **Rhetorical asides:** keep them as natural Swahili rhetorical questions, e.g. "Sasa,
  hivi vinaonekanaje?" (So what do these look like?).
- **Latin-script product names:** treat a name such as "Exercism" as an invariant proper
  noun; where Swahili grammar would otherwise require a class-agreement marker, use the class
  that fits what the name refers to.
- **Titles and headlines:** "Exercism Imezinduliwa" / "Karibu kwa Exercism" (Exercism has
  launched / Welcome to Exercism), not the dramatic "Kuzaliwa kwa Exercism" (the birth of
  Exercism). Do not render an English pun or wordplay title word for word; find a Swahili
  phrase that carries the same warmth and simplicity.
- **Calls to action:** "Anza sasa!" (Start now!) / "Jisajili sasa!" (Sign up now!), not the
  vague "Jiunge nasi!" (Join us!); "Jaribu mwenyewe!" (Try it yourself!) / "Ijaribu bila
  malipo!" (Try it for free!).

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Swahili noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Swahili normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Swahili
  speaker has reviewed a real interpolated string here yet.
