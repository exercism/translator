# Dutch (nl) glossary

The agreed term list for Dutch. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document. Why each term was chosen, and
who chose it, is in the decision log (`glossary-notes.md`).

## Localize (use the Dutch term)

These are terms where the Dutch is used in prose, so the "Use (nl/en)" column is `nl`
throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| true / false | waar / onwaar | nl | Not capitalised in prose. Use _onwaar_, not _vals_. |
| decimal | kommagetal | nl | _decimaal getal_ is an acceptable, more formal alternative. Not _reëel getal_, which means "real number", a different concept. |
| float | zwevendekommagetal | nl | Closed compound, the literal "floating point number". Distinct from _decimal_: not every decimal is a float, and floats are abstract enough for new learners that they should always get extra explanatory text, in English and in Dutch alike. |
| character | teken | nl | A single text character. Show the English gloss where the source `<define>`s it. |

### Functions & control flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| function | functie | nl | _de functie_. The *keyword* `function` in code stays English; the concept in prose is _functie_. |
| expression | expressie | nl | _uitdrukking_ is not an acceptable synonym in the programming sense: it reads as an everyday phrase or idiom, not code. |
| to call (a function) | aanroepen | nl | Separable verb: "je _roept_ de functie _aan_". nl-NL (BE: _oproepen_). |
| return value | returnwaarde | nl | One word; _de returnwaarde_. Keeps the English _return_, does not translate it to _retour_; "retourwaarde" is non-existent/non-sensical Dutch in this context. _resultaat_ is a common looser description of the same thing but is not the glossary term. |
| parameter | parameter | nl | _de parameter_. The declaration-site name. |
| argument | argument | nl | _het argument_. The call-site value. |
| brackets (the two after a function name) | haakjes | nl | The `()` pair written after a function name: _die twee haakjes_. Plain _haakjes_ by default; see the Brackets section below for when to name the type. |

### Loops, state & program flow

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| loop | lus | nl | Not _loop_. _de lus_, for the generic concept. **Do not translate the named loop types**: `for` loop, `while` loop, `do while` loop stay _for-loop_, _while-loop_, _do while-loop_ (keyword in backticks/hyphenated) rather than becoming _for-lus_/_while-lus_; translating half a compound keyword reads worse than translating none of it. |
| instruction (given to Jiki) | instructie | nl | _de instructie_. "je _geeft_ Jiki _instructies_", "instructies op een whiteboard schrijven". Not the formal _voorschrift_ or _aanwijzing_. Distinct from _statement_ (see Keep in English). |
| (programming) language | taal · programmeertaal | nl | _de taal_, _de programmeertaal_ (closed compound). Use plain _taal_ where the context is already programming ("een taal die een computer begrijpt"); the full _programmeertaal_ where it needs saying. Never the English _language_. |

### Platform & curriculum vocabulary

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| course | cursus | nl | _de cursus_. The whole Jiki course ("in deze cursus is jouw interpreter Jiki"). Keep distinct from _les_ (lesson) and _curriculum_. |
| exercise | opdracht | nl | _de opdracht_. Not _oefening_. See `glossary-notes.md`. |
| task (within an exercise) | taak | nl | _de taak_. A sub-step of an _opdracht_; keeps _opdracht_ free for the exercise itself. |

### Drawing & colour (HSL)

| English | Dutch | Use (nl/en) | Notes |
|---------|-------|-------------|-------|
| lightness (HSL) | helderheid | nl | **Never _lichtheid_.** It is the literal translation and is grammatical, but is almost never used for this in Dutch. |
| saturation (HSL) | verzadiging | nl | _de verzadiging_. |
| hue (HSL) | kleurtoon | nl | _de kleurtoon_. Not the bare English _hue_. |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
Dutch in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | Dutch gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| string | _tekenreeks_ | Exception: the string concept itself uses _tekenreeks_ where the source defines it, then _string_ throughout. |
| array | _reeks_ | Where the source `<define>`s it, gloss as _reeks_, then use _array_ throughout. Not _rij_, which reads as confusable with "row"; _array_ itself has entered Dutch and is the ordinary word. Distinct from the "chain" teaching metaphor below. |
| boolean | _booleaanse waarde_ (or _waar/onwaar-waarde_) | Where the source `<define>`s it, explain it means a _waar/onwaar_ value, then use _boolean_ throughout. |
| scope | _bereik_ (or _zichtbaarheid_) | Exception: the scope concept uses the Dutch where the source defines it, then _scope_ throughout. A bare one-word gloss risks reading as narrower than intended (_bereik_ alone suggests "reach"); prefer a short explanatory clause over the single word where there's room, e.g. "het deel van de broncode waarin dit symbool gedefinieerd is (het _bereik_, ook wel _scope_)". |
| interpreter | _tolk_ | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter. Never _vertaler_ (translator/compiler, a different job). Where the source `<define>`s it, gloss as _tolk_, then use _interpreter_ throughout. |
| statement (executable) | _uitvoerbare instructie_ | Dutch technical writing keeps _statement_ (e.g. _if-statement_, _break-statement_). Glossed with the qualifier so it stays distinct from _instruction_ (an instruction given to Jiki), which is plain _instructie_. |
| if statement | (no separate gloss) | Written _if-statement_ (hyphenated, `if` kept). Follows the _statement_ decision above. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Dutch rendering | Notes |
|-------------------|-----------------|-------|
| box (value container) | doos | _de doos_. |
| chain (array metaphor) | ketting | Not the abstract _keten_. A single link = _schakel_. |
| input slot | invoergleuf | |
| return chute | resultaatglijbaan | Not _retourglijbaan_. |
| machine (function metaphor) | machine | _de machine_ with an _invoergleuf_ and a _resultaatglijbaan_. |
| crank (machine crank) | slinger | The action is "aan de slinger draaien" (turn the crank), and "hem aanzetten" for powering it up. |
| shelves (storage) | planken | The shelves where variables and functions are stored. Singular _plank_. |
| board / whiteboard | whiteboard | **One object, one word**, used for both jobs: what the learner puts instructions on for Jiki to follow, and where a function keeps its own instructions and notes. _het whiteboard_. See `glossary-notes.md`. |
| warehouse (Jiki's warehouse) | loods | _de loods_. Distinct from _werkplaats_ (workshop, below); the two rooms must stay separate. |
| workshop (Jiki's workshop) | werkplaats | _de werkplaats_. Kept distinct from _loods_ (warehouse) above. |

## Brackets

Default to plain **haakjes**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _vierkante haakjes (`[]`)_.

| Glyph | Dutch | Notes |
|-------|-------|-------|
| `()` | haakjes · ronde haakjes | Plain _haakjes_ by default; add _ronde_ + glyph only when disambiguating. |

Example: _om een functie aan te roepen, schrijf je de naam van de functie en daarachter die twee haakjes (`()`)._
