# Finnish (fi) glossary

The agreed term list for Finnish. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **ohjelmointi** | fi | Use `ohjelmointi` consistently. `koodaus` only where the source specifically stresses the casual act of writing code. Never mix both in one document. The person is a _kehittäjä_; `koodari` is casual and fits marketing copy, not concept pages. |
| tech / tech industry | teknologia-ala | fi | Not _IT-ala_ (older and wider) and not the bare English _tech_. |
| mental model | ajatusmalli | fi | The picture-in-your-head framing. Not _mentaalimalli_, which is academic psychology. |
| pitfall | sudenkuoppa | fi | Vivid everyday Finnish. Not a calque of "pitfall". |

## Localize (use the Finnish term)

These are terms where the Finnish is used in prose, so the "Use (fi/en)" column is `fi` throughout.

### Values & data types

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| number | luku | fi | **Never _numero_**, which means a digit or an identifying number (as in _puhelinnumero_). This is the most common single error in Finnish beginner material. |
| float / decimal | desimaaliluku | fi | The beginner-facing word. Use _liukuluku_ only where the floating-point representation itself is the point. |
| character (text) | merkki | fi | Covers digits, spaces and punctuation too. For the on-screen figure see "character (game/maze figure)" under the metaphors. |
| letter (of a string) | kirjain | fi | Distinct from _merkki_. |
| true / false | tosi / epätosi | fi | Lowercase in prose. The literals `true`/`false` in code stay English. |
| Boolean | totuusarvo | fi | Localized, not kept English: _totuusarvo_ ("truth value") teaches the idea better than the English word does. The type name in code stays `Boolean`. |
| string | merkkijono | fi | Native compound and completely dominant in Finnish material. The loan _stringi_ is slang; do not use it. |
| array / list | taulukko | fi | Also covers the source's informal "list" for the same concept. Keep _lista_ for an everyday list of things in prose. Watch the near-collision with _taulu_; the board metaphor is deliberately _tussitaulu_, never bare _taulu_. |
| element | alkio | fi | An element of a taulukko. Not _elementti_, which is HTML/DOM vocabulary. |
| position (in a string/array) | paikka | fi | The beginner-facing word taught before and alongside _indeksi_ (”paikat alkavat nollasta”). |
| dictionary | sanakirja | fi | Carries the look-up-a-word picture the source teaches. Not _hakemisto_ (also means "directory") and not the academic _hakurakenne_. |
| identifier | tunnus | fi | The name of a variable or function. Not _tunniste_. |
| compound data type | koosteinen tietotyyppi | fi | Distinct from a plain _tietotyyppi_. |
| ones and zeros | ykkösiä ja nollia | fi | Spelled out as words, not digits; this is what Finnish popular tech writing says. |

### Functions & control flow

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if`-lause | fi | Finnish names a statement after its keyword: _`if`-lause_, _`else`-haara_. The generic concept word is _ehtolause_. Not _ehtorakenne_, which is Python/indentation framing and does not fit a brace language. |
| condition is true / false | ehto on tosi / epätosi | fi | A Finnish condition needs an explicit predicate; see `guide.md`. |
| statement (executable) | lause | fi | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | väite | fi | The proposition sense: a claim that is true or false; also a test assertion. Finnish separates the two senses cleanly where English does not, so pick by meaning and there is no ambiguity. |
| to call (a function) | kutsua | fi | Takes the partitive: _kutsua funktiota_, never _kutsua funktioon_. The noun is _funktiokutsu_. |
| to define (a function) | määritellä | fi | Noun: _määrittely_. Keep distinct from _esitellä_ (to declare). |
| argument | argumentti | fi | The call-site value, against _parametri_ at the declaration site. Finnish course material often says _todellinen parametri_ / _muodollinen parametri_ instead; that pairing is heavier than this course wants, so use _parametri_ and _argumentti_. |
| input (to a function) / output | syöte / tuloste | fi | The standard Finnish pair. Use _tulos_ where the source means the computed result rather than what comes out of the machine. |
| to return (a value) | palauttaa | fi | The noun is _paluuarvo_. ”palauttaa 30:n”. The bracketed an explanation in the English gloss word must be _return_, never _returning_. |
| to declare / declaration | esitellä / esittely | fi | Careful: _esitellä_ also means "to introduce" in everyday Finnish, so keep the sentence around it unambiguous. |
| initializer | alkuarvo | fi | The starting value given at declaration. The verb is _alustaa_. |
| built-in | valmis | fi | _valmis funktio_ reads naturally to a beginner. _sisäänrakennettu_ is the literal rendering and reads heavy. |
| function body | funktion runko | fi | Two words (genitive plus noun), not a compound. |
| interpreter | tulkki | fi | Finnish _tulkki_ is first and foremost a human interpreter and was borrowed into computing unchanged, so it covers the program that runs the code. Never _ohjelmatulkki_. |
| pure (function) | puhdas | fi | _puhdas funktio_. When glossed, gloss the full term _pure function_, not the bare adjective. |
| placeholder | paikkamerkki | fi | A slot in a string template that gets filled with a value. |
| brackets (the two after a function name) | sulkeet | fi | _sulkeet_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| equal sign | yhtäläisyysmerkki | fi | |
| ampersand (`&`) | et-merkki | fi | Where the English itself explains the term, show the glyph itself (`&`) in the bracket, not the English word "ampersand". |
| bar / vertical bar (`\|`) | pystyviiva | fi | The `\|\|` keyword stays English. Where the English itself explains the term, show the glyph (`\|`) in the bracket, not the English word "bar". |
| bang (the `!` character) | huutomerkki | fi | Finnish has no equivalent of the English slang "bang". Render the source's aside as a remark about what the sign is called, never as a loan. |
| NOT operator / logical negation | negaatio | fi | _negaatio_ for the concept, _ei_ when reading the operator aloud. The `!` keyword stays English. |
| `turnLeft` (machine/identifier gloss) | käänny vasemmalle | fi | The one-time explanatory gloss when the machine is introduced by name in prose. The code token `turnLeft()` itself stays English. Moved here from `guide.md` on 2026-08-01, unchanged. |
| `turnRight` (machine/identifier gloss) | käänny oikealle | fi | Same as `turnLeft`: the one-time gloss only; the code token stays English. |
| `move` (machine/identifier gloss) | liiku | fi | The one-time explanatory gloss when the `move` machine is introduced by name in prose. The code token `move()` itself stays English. Imperative, matching the fixed _käänny vasemmalle_ (`turnLeft`) and _käänny oikealle_ (`turnRight`) above. |
| (programming) language | ohjelmointikieli | fi | One word, always. Use it including in the "a language a computer understands" framing. |

### Loops, state & program flow

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| loop | silmukka | fi | Keyword compounds take a hyphen: _`for`-silmukka_, _`while`-silmukka_. Not _toistorakenne_ (school-curriculum register). **Never _silmukka_ for the link of a chain**; see the metaphors. |
| loop body | silmukan runko | fi | Two words, not a compound. |
| iteration | kierros | fi | One pass of a loop is a _kierros_, which is concrete and beginner-friendly. Use _iteraatio_ only where the source is being technical about the concept itself; the verb is _käydä läpi_ or _iteroida_. |
| nested | sisäkkäinen | fi | _sisäkkäinen silmukka_. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| assignment / to assign | sijoitus / sijoittaa | fi | Finnish says the value is placed *into* the variable (_sijoitat arvon muuttujaan_), which fits the box metaphor exactly. |
| to run / execute (code) | suorittaa | fi | _ajaa_ is the colloquial "run it" and is fine in an aside; use _suorittaa_ for the concept. |
| increment (for-loop) | kasvattaa | fi | _kasvattaa yhdellä_. Not _inkrementoida_. |
| modulo / remainder operator | jakojäännös | fi | The operator's own name is `%`; _modulo_ only where the source names the operator. |
| concatenation / to concatenate | yhdistäminen / yhdistää | fi | Not _konkatenoida_, which is academic register. |
| indentation | sisennys | fi | The verb is _sisentää_. |
| exception | poikkeus | fi | Distinct from _virhe_, the general word for an error. |
| code block | lohko | fi | _koodilohko_ where the context needs it. Keep distinct from _näkyvyysalue_. |
| scope | näkyvyysalue | fi | Localized, not kept English: Finnish course material uses it and beginners parse it. |
| state / stateful | tila | fi | Not _status_. |
| object | olio | fi | The established Finnish term and a genuinely native word. Not _objekti_, which reads as a calque. |

### Tooling & engineering

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| debugging | debuggaus | fi | The activity, and what Finnish developers and Finnish course pages actually say. _virheenjäljitys_ is the formal native term; use it only where the source is being formal. The `Debug` keyword and UI label stay English. |
| bug | bugi | fi | Inflects as a Finnish noun: _bugin_, _bugeja_. The capitalised `Bug` token and UI label stay English. |
| framework | ohjelmistokehys | fi | Use it exclusively; never revert to _framework_ or the slangy _frameworkki_. |
| edge case | rajatapaus | fi | Not _reunatapaus_, a calque. |
| auth (authentication / authorization) | tunnistautuminen / valtuutus | fi | Pick by meaning: _tunnistautuminen_ for proving who you are (the user-facing act; _todentaminen_ where the system's side is meant), _valtuutus_ for what you are allowed to do. Not _autentikointi_, which is dev jargon. |
| CLI (the concept) | komentorivi | fi | Fully native and normal Finnish. |
| AI | tekoäly | fi | Localized, unlike most languages here: Finnish prose says _tekoäly_, not "AI". Compounds: _tekoälyapu_, _tekoälyagentit_. |
| LLM | kielimalli | fi | _suuri kielimalli_ where the size is the point. |

### Platform & curriculum vocabulary

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| concept (learning unit) | käsite | fi | Concept Library = _Käsitekirjasto_. Not _konsepti_, which is an idea or a design, not something you learn. |
| exercise | harjoitus | fi | The exercise as a whole. |
| task (within an exercise) | tehtävä | fi | A sub-step of a _harjoitus_; keep the two words distinct, because _tehtävä_ alone is also the everyday word for an exercise. |
| feature (platform capability) | ominaisuus | fi | Deliberately the same word as an object's property. Where a passage discusses both, rephrase rather than coining a second word. |
| milestone | välitavoite | fi | Not _virstanpylväs_, which is literary. |
| streak | putki | fi | The Finnish sports and gaming word for an unbroken run; _päiväputki_ for a daily streak. |
| badge | osaamismerkki | fi | The established Finnish term for a digital learning badge. |
| certificate | todistus | fi | The learner-facing completion certificate. _sertifikaatti_ is a TLS certificate; keep them apart. |
| plan (subscription tier) | paketti | fi | Enables ”{tier}-paketti”. Not _tilaus_, which is the subscription itself. |
| subscription | tilaus | fi | Note _tilaus_ also means an order. |
| "Run Code" (button label) | Suorita koodi | fi | There is no Finnish app UI copy yet (`app/messages/` has only `en` and `hu`), so this row sets the precedent rather than confirming an existing label. Both `hu` and `sv` already translate this label, in sentence case, matching this repo's house style. If Finnish app copy is ever produced, it must match this exactly, or exercise instructions will name a button that does not exist on screen. |
| Dashboard (the page) | koontinäyttö | fi | Same situation: no fi app copy yet, so this sets the precedent and must match the app label exactly if one is ever written. _koontinäyttö_ is the standard Finnish rendering in major localized UIs. Not _kojelauta_ (a car dashboard) and not _hallintapaneeli_ (reads as admin tooling). _etusivu_ was considered and is worth revisiting once a native speaker weighs in. |

### Colours & graphics

| English | Finnish | Use (fi/en) | Notes |
|---------|---------|-------------|-------|
| hue | värisävy | fi | The 0-360 position on the colour wheel. Written in full to keep it apart from _sävy_, which the source also uses casually for a shade. |
| saturation | kylläisyys | fi | Also _värikylläisyys_ where the context needs it. |
| lightness | vaaleus | fi | Distinct from _kirkkaus_ (brightness). |
| shade (of a colour) | sävy | fi | The casual "the shade of colour you want". Kept distinct from _värisävy_. |
| colour wheel | väriympyrä | fi | Not _väripyörä_, which is the UI-widget word. |
| frame (animation) | ruutu | fi | As in _ruutua sekunnissa_. Not _kehys_, which is a picture frame or a stack frame. |

## Keep in English

These stay in English in Finnish prose, with the Finnish gloss to use for each.

| Term | Finnish word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| API | explain what it is in Finnish | Where defined, explain the concept, not just the acronym. _ohjelmointirajapinta_ where a one-word gloss is needed. Inflects with a colon: _API:n_, _API:ssa_. |
| widget | _pienoisohjelma_ | Finnish has no natural native word; _vekotin_ and _vempain_ read as jokes. |
| canvas | _piirtoalusta_ | Also the HTML element's name. |
| chat | (no gloss) | Finnish prose says _chat_ / _chatti_. |
| backtick | (show the glyph) | Finnish has no settled name for it. |
| template literal / template string | (no gloss) | The JS construct's own name. |
| Debug, Test | (no gloss) | As keywords, UI labels and technical tokens. |
| Code, Frontend, Backend | (no gloss) | As capitalised tokens and UI labels only. In running prose the ordinary Finnish word is _koodi_, and that is what to write. See _bugi_ and _debuggaus_ under "Tooling & engineering" for the same split. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation, and hang a Finnish head noun off the token rather than inflecting it; see `guide.md`. |

## Brackets

| Glyph | Finnish | Notes |
|-------|---------|-------|
| `()` | sulkeet · kaarisulkeet | Plain _sulkeet_ by default; add _kaarisulkeet_ plus the glyph only when disambiguating. |
| `[]` | hakasulkeet | |
| `{}` | aaltosulkeet | |
| `<>` | kulmasulkeet | |

How to phrase a bracket in running prose is in `guide.md`.

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Finnish has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Finnish | Use (fi/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| mentor / mentoring |  |  |  |
| student (the person being mentored) |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| code review |  |  |  |
| mentoring queue |  |  |  |
| testimonial (left for a mentor) |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| analyzer |  |  |  |
| representer |  |  |  |
| representation |  |  |  |
| test runner |  |  |  |
| tests passed / tests failed |  |  |  |
| online editor / the editor |  |  |  |
| the Exercism CLI |  |  |  |
| reputation |  |  |  |
| trophy |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| maintainer |  |  |  |
| Insiders |  |  |  |
| donation / to donate / donor |  |  |  |
| perks |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| approach (to an exercise) |  |  |  |
| article (on an exercise) |  |  |  |
| deep dive (video) |  |  |  |
| challenge (community event) |  |  |  |
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
