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

## Localize (use the Hungarian term)

These are terms where the Hungarian is used in prose, so the "Use (hu/en)" column is `hu` throughout.

### Learning platform

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| concept (learning unit) | fogalom | hu | One teachable idea in a track's syllabus. Not koncepció. |
| task (within an exercise) | részfeladat | hu | One numbered step of a concept exercise. Distinct from feladat (the exercise itself). |

### Values & data types

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| true / false | igaz / hamis | hu | Not capitalised in prose. |
| character | karakter | hu | A text character. |
| float / decimal | tizedes tört | hu | Or _lebegőpontos szám_ if the floating-point nature matters. |
| compound data type | összetett adattípus | hu | Distinct from plain data type. |
| letter (of a string) | betű | hu | Distinct from karakter (text character). |
| dictionary | szótár | hu | |
| key (dictionary key) | kulcs | hu | |
| object (JS `{}` literal) | objektum | hu | Confirmed by a native speaker (vinetu, 2026-08-04). Use _objektum_ for a JS `{}` and in its compounds (_objektumkulcs_, _objektumliterál_); keep _szótár_ (see the `dictionary` row) only where the English itself says "dictionary". Where one message has to cover both, the double-barrelled _objektumnak/szótárnak_ is correct and stays. |
| type coercion | automatikus típuskonverzió | hu | Confirmed by a native speaker (vinetu, 2026-08-04). Use one rendering everywhere; never _típuskényszerítés_, which is not in real use. _Implicit típuskonverzió_ is an acceptable synonym, but do not alternate with it inside one catalog or document. |

### Functions & control flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | elágazás | hu | Plural: _elágazások_. |
| condition is true / false | a feltétel igaz / hamis | hu | A Hungarian condition needs an explicit predicate; see `guide.md`. |
| statement (executable) | utasítás | hu | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | állítás | hu | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| function | függvény | hu | The *keyword* `function` in code stays English; the concept in prose is _függvény_. |
| to define (a function) | definiál / létrehoz | hu | |
| brackets (the two after a function name) | zárójel | hu | _a két zárójel_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| to return (a value) | visszaad | hu | „30-at ad vissza.” |
| parameter | paraméter | hu | The declaration-site name. |
| argument | argumentum | hu | The call-site value; _argumentum_ over _paraméter_ when the call-site value is meant. |
| initializer | kezdőérték | hu | Not _inicializáló_. |
| interpreter | értelmező | hu | The program that runs code (_a Ruby-értelmező_). Never _tolmács_ (a human spoken-language interpreter). |
| string template | string-sablon | hu | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | helyőrző | hu | |
| to update (a variable/dict) | frissít | hu | |
| syntax | szintaxis | hu | |
| (programming) language | (programozási) nyelv | hu | Use it including in the "a language a computer understands" framing. Never the English borrowing. |
| and / or (logical, in prose) | és / vagy | hu | The keywords and/or/`&&`/`\|\|` stay English. |
| ampersand (`&`) | és-jel | hu | |
| bar / vertical bar (`\|`) | függőleges vonal | hu | The `\|\|` keyword stays English. |
| pure (function) | tiszta | hu | _tiszta függvény_ = pure function. |
| variable shadowing | változóárnyékolás | hu | Confirmed by a native speaker (vinetu, 2026-08-04). One word, no hyphen; the verb is _árnyékol_. Do not leave the English _shadowing_ bare in prose. |

### Loops, state & program flow

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| nested | egymásba ágyazott | hu | e.g. _egymásba ágyazott ciklus_ = nested loop. |
| iteration | iteráció | hu | One pass of a loop. Verb: _iterál_; „végigmegy rajta” also natural. Exercism's product sense (a submitted version of a solution) is in the proposed block below. |
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

### App & product UI

| English | Hungarian | Use (hu/en) | Notes |
|---------|-----------|-------------|-------|
| plan (subscription tier) | csomag | hu | Not terv. |
| dashboard | irányítópult | hu | Not vezérlőpult. |

## Keep in English

These stay in English in Hungarian prose. The middle column is the Hungarian word for the same
thing, for the places where the English text itself stops to explain the term. It is never
added as a bracketed gloss on the translator's own initiative (`global/voice.md`).

| Term | Hungarian word, where the English explains the term | Notes |
|------|------------------------------------------------------|-------|
| string | _karakterlánc_ | |
| scope | _hatókör_ (or _láthatóság_) | |
| Boolean | _logikai érték_ | |
| API | explain what it is in Hungarian | Where the English explains it, explain the concept in Hungarian, not just the acronym. |
| tooling (mass noun) | _tooling_ | The countable _tool_ is localized as _eszköz_; see "Tooling & engineering". |
| Debug, Test | (none) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (none) | |
| CLI (the concept) | parancssori felület | The product, "the Exercism CLI", is in the proposed block below. |
| Programming keywords (`def`, `function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |
| template literal / template string | (none) | The JS construct's own name. The general prose concept is _string-sablon_; see "Functions & control flow". Suffix e.g. template stringben. |
| backtick | (none: show the glyph, `` ` ``) | In flowing prose the English word is used and takes Hungarian suffixes: _backticket_ (accusative), _backtickes_ (adjective, e.g. _backtickes template stringek_). |
| AI | _mesterséges intelligencia_ | Use "AI" (not MI) in prose/marketing. Compounds: AI-segítség, AI-ügynökök. |
| LLM | explain in Hungarian | Suffix e.g. LLM-korszak. |
| widget | _widget_ | |
| chat | (none) | |

## Brackets

| Glyph | Hungarian | Notes |
|-------|-----------|-------|
| `()` | zárójel · kerek zárójel | Plain _zárójel_ by default; add _kerek_ + glyph only when disambiguating. |
| `[]` | szögletes zárójel | |
| `{}` | kapcsos zárójel | |
| `<>` | csúcsos zárójel (or _hegyes zárójel_) | |

How to phrase a bracket in running prose is in `guide.md`.

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Hungarian has agreed any row in this section.** They are an agent's
proposals, written when this glossary was adapted from Jiki's, so that a first pass is at least
consistent. If you are a native speaker reading this: these are the rows we most need you to
check, because each one appears on hundreds of pages. Tell us on the pinned glossary thread
which are wrong. A row moves up into an agreed section only on a native speaker's say-so,
recorded in `glossary-notes.md`, which also holds the basis for each proposal.

| English | Proposed Hungarian | Use (hu/en) | Notes |
|---------|--------------------|-------------|-------|
| track | kurzus | hu | _a Ruby-kurzus_, _csatlakozz egy kurzushoz_, _kurzuskarbantartó_. With an interpolated name write _a(z) %{track_title} kurzus_ (see `guide.md`). |
| to join (a track) | csatlakozik | hu | Button: _Csatlakozás_. |
| exercise | feladat | hu | |
| concept exercise / learning exercise | tanulófeladat | hu | One rendering for both English names. Pairs with _gyakorlófeladat_. |
| practice exercise | gyakorlófeladat | hu | |
| syllabus | tanterv | hu | |
| learning mode / practice mode | tanulómód / gyakorlómód | hu | Read side by side on a toggle. |
| locked / unlocked / available / in progress / completed | zárolva / feloldva / elérhető / folyamatban / elkészült | hu | Exercise states, as labels. |
| to unlock | felold | hu | |
| solution | megoldás | hu | |
| iteration (a submitted version of a solution) | iteráció | hu | Same word as one pass of a loop. _3. iteráció_. |
| to submit | beküld | hu | Noun: _beküldés_. Not _bead_, which is handing in homework. |
| to publish (a solution) / published | közzétesz / közzétéve | hu | Distinct from _beküld_. |
| community solutions | közösségi megoldások | hu | |
| to star / stars | csillagoz / csillag | hu | |
| mentor / mentoring | mentor / mentorálás | hu | Verb: _mentorál_. Never _tanár_ or _oktató_: a mentor is a peer. |
| student (the person being mentored) | tanuló | hu | Not _diák_ or _hallgató_, which imply school or university. |
| mentoring request | mentorálási kérés | hu | |
| mentoring session / discussion | mentorálási beszélgetés | hu | One rendering for both English words. |
| code review | kódáttekintés | hu | |
| mentoring queue | mentorálási sor | hu | |
| testimonial (left for a mentor) | ajánlás | hu | |
| supermentor | szupermentor | hu | |
| automated feedback | automatikus visszajelzés | hu | |
| analyzer | elemző | hu | _a Ruby-elemző_. |
| representer | representer | en | A coined word with no everyday equivalent. Suffix with a hyphen only where spelling needs it: _a representerrel_. |
| representation | reprezentáció | hu | |
| test runner | tesztfuttató | hu | |
| tests passed / tests failed | sikeres tesztek / sikertelen tesztek | hu | As a sentence: _Minden teszt sikeres._ |
| online editor / the editor | online szerkesztő / a szerkesztő | hu | |
| the Exercism CLI | az Exercism CLI | en | The product's name. The concept is _parancssori felület_ ("Keep in English"). |
| reputation | reputáció | hu | Points, not a judgement of character; not _hírnév_. |
| badge | jelvény | hu | |
| trophy | trófea | hu | _Trófeagyűjtemény_ for the trophy cabinet. Distinct from _jelvény_. |
| journey (the user's history page) | az utad | hu | As a page title: _Az utad_. |
| contributor / contributing | közreműködő / közreműködés | hu | |
| maintainer | karbantartó | hu | |
| Insiders | Insiders | en | A proper name, capitalised, never translated. _az Insiders program_, _Insiders-tag_ for one member. |
| donation / to donate / donor | adomány / adományoz / adományozó | hu | |
| perks | előnyök | hu | |
| partner | partner | hu | |
| flair (marker beside a username) | kitűző | hu | Not _jelvény_, which is a badge. |
| Dig Deeper (tab) | Áss mélyebbre | hu | A UI label, so it is translated. |
| approach (to an exercise) | megközelítés | hu | |
| article (on an exercise) | cikk | hu | |
| deep dive (video) | mélyelemzés | hu | |
| challenge (community event) | kihívás | hu | Hashtags (`#48in24`) are never translated. |
| cohort | csoport | hu | |
| community | közösség | hu | |
| notification | értesítés | hu | |
| favorites | kedvencek | hu | |
| difficulty: easy / medium / hard | nehézség: könnyű / közepes / nehéz | hu | |
| handle (username) | felhasználónév | hu | |
| automation (feedback on representations) | automatizálás | hu | |
