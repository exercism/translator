# Hungarian (hu) glossary

The agreed term list for Hungarian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | **programozás** | hu | Use `programozás` consistently. `kódolás` is acceptable only when the source specifically stresses the casual act of writing code. Never mix both in one document. |
| tech / tech industry | tech-ipar | hu | Not _technológiai ipar_. |
| mental model | gondolati modell | hu | Not _mentális modell_. |
| dopamine hit | dopaminlöket | hu | Informal register. Not _dopaminroham_. |
| PPP pricing | helyi vásárlóerőhöz igazított árazás | hu | Explain the acronym in Hungarian; never leave "PPP" bare or transliterate it. |
| Q&A | kérdés-felelet / kérdések és válaszok | hu | Explain in Hungarian; do not leave "Q&A" bare. |
| agentic coding | **Agentikus programozás** | hu | Use this everywhere, including in headings and tag labels. Never _ágensalapú programozás_, never _agentikus kódolás_, and never bare English _agentic coding_ (in any inflected form). The adjective is invariant before the noun; suffix `programozás` as usual (_agentikus programozásba_, _agentikus programozási ciklus_). |

## Product and strand names

Everything here translates like ordinary UI copy; nothing stays English (see
`content-types/website-keys.md`).

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| Learn to Code (strand) | Tanulj meg programozni | hu | Descriptive strand name, so it is translated. |
| Learn to Build (strand) | Tanulj fejleszteni | hu | Descriptive strand name, so it is translated. |
| Ask Jiki (in-app AI help) | Kérdezd Jikit | hu | Imperative phrase that already carries the accusative `-t`, so it cannot be a bare subject, cannot take a further case suffix, and cannot sit attributively before a noun. Where the English does any of those, recast the sentence or give it a head noun (_a Kérdezd Jikit funkció_; _szál_ for a strand). |

## Localize (use the Hungarian term)

These are terms where the Hungarian is used in prose, so the "Use (hu/en)" column is `hu` throughout.

### Learning platform

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| course / track | kurzus | hu | Covers both the whole Jiki course (_Ebben a kurzusban_ = "In this course") and a curriculum track. |
| concept (learning unit) | fogalom | hu | Concept Library = Fogalomtár. Not koncepció. |
| task (within an exercise) | részfeladat | hu | Distinct from feladat (the exercise itself). |
| level stdlib (in a function description) | a feladat stdlib-je | hu | Never a szint stdlib-je: szint stays for the learner's progression level (as used in the interpreter catalog), not the exercise. |

### Values & data types

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| true / false | igaz / hamis | hu | Not capitalised in prose. |
| character | karakter | hu | A text character. |
| float / decimal | tizedes tört | hu | Or _lebegőpontos szám_ if the floating-point nature matters. |
| compound data type | összetett adattípus | hu | Distinct from plain data type. |
| letter (of a string) | betű | hu | Distinct from karakter (text character). |
| dictionary | szótár | hu | If glossed, gloss in the singular (_dictionary_), even when the Hungarian noun is plural (_szótárak_). |
| key (dictionary key) | kulcs | hu | If glossed, gloss in the singular (_key_), even when the Hungarian noun is plural (_kulcsoknak_). |
| object (JS `{}` literal) | objektum | hu | Confirmed by a native speaker (vinetu, 2026-08-04). Use _objektum_ for a JS `{}` and in its compounds (_objektumkulcs_, _objektumliterál_); keep _szótár_ (see the `dictionary` row) only where the English itself says "dictionary". Where one message has to cover both, the double-barrelled _objektumnak/szótárnak_ is correct and stays. |
| type coercion | automatikus típuskonverzió | hu | Confirmed by a native speaker (vinetu, 2026-08-04). Use one rendering everywhere; never _típuskényszerítés_, which is not in real use. _Implicit típuskonverzió_ is an acceptable synonym, but do not alternate with it inside one catalog or document. |

### Functions & control flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | elágazás | hu | Plural: _elágazások_. |
| condition is true / false | a feltétel igaz / hamis | hu | A Hungarian condition needs an explicit predicate; see `guide.md`. |
| statement (executable) | utasítás | hu | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. |
| statement (logical claim) | állítás | hu | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| instruction (given to Jiki) | utasítás | hu | What the learner puts on the board for Jiki to follow (_utasításokat írsz fel egy táblára_). Everyday Hungarian, not a legal-register word. Deliberately the same word as "statement (executable)". |
| function | függvény | hu | The *keyword* `function` in code stays English; the concept in prose is _függvény_. |
| to define (a function) | definiál / létrehoz | hu | |
| brackets (the two after a function name) | zárójel | hu | _a két zárójel_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| to return (a value) | visszaad | hu | „30-at ad vissza.” The bracketed `<define>` gloss word must be _return_, never _returning_. |
| parameter | paraméter | hu | The declaration-site name. |
| argument | argumentum | hu | The call-site value; _argumentum_ over _paraméter_ when the call-site value is meant. |
| initializer | kezdőérték | hu | Not _inicializáló_. |
| interpreter | értelmező | hu | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (_a te értelmeződ Jiki_, _Az ő dolga, hogy értelmezze a kódot_). Never _értelmezőprogram_ (machine-only), and never _tolmács_ (a human spoken-language interpreter, a different job). |
| string template | string-sablon | hu | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | helyőrző | hu | |
| to update (a variable/dict) | frissít | hu | |
| syntax | szintaxis | hu | |
| (programming) language | (programozási) nyelv | hu | Use it including in the "a language a computer understands" framing. Never the English borrowing. |
| and / or (logical, in prose) | és / vagy | hu | The keywords and/or/`&&`/`\|\|` stay English. Rarely needs a `<define>` gloss at all; if the source does gloss it, the bracket may show the bare English word right after (_és_ (`and`)) rather than a full "angolul" explanation. |
| ampersand (`&`) | és-jel | hu | On `<define>`, show the glyph itself (`&`) in the bracket, not the English word "ampersand". |
| bar / vertical bar (`\|`) | függőleges vonal | hu | The `\|\|` keyword stays English. On `<define>`, show the glyph itself (`\|`) in the bracket, not the English word "bar". |
| pure (function) | tiszta | hu | _tiszta függvény_ = pure function. When glossed, gloss the full term _pure function_, not the bare adjective _pure_. |
| scenario (exercise test case) | forgatókönyv | hu | Also the concept title. |
| variable shadowing | változóárnyékolás | hu | Confirmed by a native speaker (vinetu, 2026-08-04). One word, no hyphen; the verb is _árnyékol_. Do not leave the English _shadowing_ bare in prose. |

### Loops, state & program flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| nested | egymásba ágyazott | hu | e.g. _egymásba ágyazott ciklus_ = nested loop. When glossed, gloss the full term (_nested loop_), not the bare adjective _nested_. |
| iteration | iteráció | hu | Verb: _iterál_; „végigmegy rajta” also natural. |
| loop | ciklus | hu | _ciklus_, not _hurok_. |
| increment (for-loop) | léptetés | hu | |

### Tooling & engineering

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| auth (authentication / authorization) | hitelesítés | hu | Covers both _autentikáció_ and _autorizáció_. |
| deploy (verb: to deploy) | élesít | hu | „Élesítsd” for imperative; also „élesítés” as noun. Not „telepítsd ki”. |
| framework | keretrendszer | hu | Use _keretrendszer_ exclusively; never revert to _framework_. |
| component | komponens | hu | No gloss needed. Use _komponens_, not _összetevő_. |
| tool | eszköz | hu | Use it in prose. The mass noun _tooling_ stays English; see "Keep in English". |

### Colours & graphics

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| hue | színárnyalat | hu | Not árnyalat (reserved for "shade of a colour"). |
| lightness | világosság | hu | Distinct from fényerő (brightness). |

### Exercise world

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| alien (creature) | űrlény | hu | Not idegen, which means "stranger" (any unknown person), not a being from another planet. Not földön kívüli either; that was a reviewer's first suggestion, superseded once he recalled the corpus already used űrlény. The exercise name _Space Invaders_ and the code identifiers (`isAlienAbove`, `getStartingAliensInRow`) stay English. |
| pangram | pangramma | hu | In prose and in exercise titles alike (_Egyszerű pangramma_, _Pangramma_, _Módszeres Pangramma_). Never the bare English _pangram_, which survives only inside the term-clarification bracket where the source introduces the word. Compounds take a hyphen: _pangramma-feladat_, _Pangramma-sorozat_. |
| traffic light (the whole device) | jelzőlámpa | hu | Not _közlekedési lámpa_. Exercise titles: _Jelzőlámpák_, _Relációs jelzőlámpák_. |
| light (one coloured lamp of a traffic light) | fény | hu | _a piros / sárga / zöld fény_. Deliberately not _lámpa_: _jelzőlámpa_ is the whole device, so this keeps the two apart and avoids same-root repetition in one sentence. |
| bouncer | kidobó | hu | Including in exercise titles: _Kidobó_, _Kidobó: Öltözködési szabályzat_, _Kidobó: Karszalagok_. Never the bare English _Bouncer_. The longer _kidobóember_ stays acceptable in running concept prose. |
| skyline / cityscape | városkép | hu | Exercise title _Városkép_. |
| skyscraper | felhőkarcoló | hu | Exercise title _Felhőkarcoló_. |

### App & product UI

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| plan (subscription tier) | csomag | hu | Not terv. |
| dashboard | irányítópult | hu | Not vezérlőpult. |

## Keep in English

These stay in English in Hungarian prose, with the Hungarian gloss to use for each.

| Term | Hungarian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | _karakterlánc_ | Exception: the string concept itself uses _karakterlánc_ where the source defines it, then _string_ throughout. |
| scope | _hatókör_ (or _láthatóság_) | Exception: the scope concept uses the Hungarian where the source defines it, then _scope_ throughout. |
| Boolean | _logikai érték_ | Exception: where the source defines it, gloss as _logikai érték_, then _Boolean_ throughout. |
| API | explain what it is in Hungarian | Where defined, explain the concept in Hungarian, not just gloss the acronym. |
| tooling (mass noun) | _tooling_ | The countable _tool_ is localized as _eszköz_; see "Tooling & engineering". |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| CLI (the concept) | parancssori felület | Explain CLI as _parancssori felület_ (command-line interface) where the source defines it. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _string-sablon_; see "Functions & control flow". Suffix e.g. template stringben. |
| backtick | (show the glyph) | On `<define>`, show the glyph itself (`` ` ``), not the English word. In flowing prose the English word is used and takes Hungarian suffixes: _backticket_ (accusative), _backtickes_ (adjective, e.g. _backtickes template stringek_). The suffixed prose forms are confirmed by a native speaker (vinetu, 2026-08-04). |
| AI | _mesterséges intelligencia_ | Use "AI" (not MI) in prose/marketing. Compounds: AI-segítség, AI-ügynökök. |
| LLM | explain in Hungarian | Suffix e.g. LLM-korszak. |
| widget | _widget_ | |
| chat | (no gloss) | |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Hungarian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | doboz | |
| chain (array metaphor) | lánc | Link = _láncszem_. |
| machine (function metaphor) | gép | A function is one of Jiki's _kis gépei_. |
| input slot | bemeneti nyílás | |
| return chute | kimeneti csúszda | |
| crank (machine crank) | kar | Jiki _megtekeri a karját_ to power a machine up. Not _forgattyú_. |
| shelves (storage) | polc | Jiki's machines sit on a _polc_. |
| warehouse (Jiki's warehouse) | raktár | Where Jiki hangs out and keeps his machine shelf (_Jiki raktára_). |
| board / whiteboard | tábla | **One object, one word.** The board the learner writes instructions on for Jiki to come along and follow, and the board a function keeps its own instructions and notes on, are the same _tábla_. |
| character (game/maze figure) | figura | Keep _karakter_ for a text character (see "Values & data types"); _figura_ is the on-screen game figure. |

## Brackets

| Glyph | Hungarian | Notes |
|-------|-----------|-------|
| `()` | zárójel · kerek zárójel | Plain _zárójel_ by default; add _kerek_ + glyph only when disambiguating. |
| `[]` | szögletes zárójel | |
| `{}` | kapcsos zárójel | |
| `<>` | csúcsos zárójel (or _hegyes zárójel_) | |

How to phrase a bracket in running prose is in `guide.md`.
