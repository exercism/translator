# Swedish (sv) glossary

The agreed term list for Swedish. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programmering** | sv | Use `programmering` consistently. `kodning` only where the source specifically stresses the casual act of writing code. Never mix both in one document. |
| developer | utvecklare | sv | Not _programmerare_, which narrows the job to writing code. |
| tech / tech industry | techbranschen | sv | Not _teknikbranschen_ (heavy industry) and not _IT-branschen_ (older and wider). |
| mental model | tankemodell | sv | The picture-in-your-head framing. Not _mental modell_, which reads clinical. |

## Localize (use the Swedish term)

These are terms where the Swedish is used in prose, so the "Use (sv/en)" column is `sv` throughout.

### Values & data types

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| number | tal | sv | The mathematical sense. Not _nummer_, which is an identifying number (as in _telefonnummer_). |
| float / decimal | flyttal | sv | Use _decimaltal_ only where the source stresses the decimal point rather than the floating-point representation. |
| character (text) | tecken | sv | **Never _karaktär_**, which means a personality or a figure in a story. |
| letter (of a string) | bokstav | sv | Distinct from _tecken_, which also covers digits, spaces and punctuation. |
| true / false | sant / falskt | sv | Neuter forms with _värde_ and _villkor_ (_villkoret är sant_). Common-gender _sann / falsk_ when agreeing with an en-word (_jämförelsen är sann_). Lowercase in prose. |
| string | sträng | sv | Inflects as a Swedish noun: _strängen_, _strängar_. |
| Boolean | boolesk | sv | _ett booleskt värde_. Gloss as _sanningsvärde_ where the source defines it. The type name in code stays `Boolean`. |
| array / list | array | sv | _en array_, _arrayen_, _arrayer_. Not _fält_ (collides with "field"), not _vektor_ (reads as the maths object), not _lista_ (keep that for an everyday list). Also covers the source's informal "list" for the same concept. Confirmed as an established loanword by a native-speaker developer. |
| dictionary | uppslagstabell | sv | The data-structure sense (a lookup table). Not _ordbok_, which read like an invented word for the concept; not English _dictionary_, which isn't used as a loanword and is too long to say casually. |
| compound data type | sammansatt datatyp | sv | Distinct from a plain _datatyp_. |
| random number | slumptal | sv | One word. The adjective is _slumpmässig_ (_en slumpmässig position_). |

### Functions & control flow

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if`-sats | sv | Swedish names a statement after its keyword, hyphenated: _`if`-sats_, _`else`-gren_. Not _villkorssats_ (school-textbook register). |
| condition is true / false | villkoret är sant / falskt | sv | Not the otherwise idiomatic _villkoret är uppfyllt_, which breaks the link to the _sant / falskt_ the course teaches. |
| statement (executable) | sats | sv | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | påstående | sv | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| to call (a function) | anropa | sv | Never _kalla_ or _kalla på_, which is calling out to a person. |
| to return (a value) | returnera | sv | Not _återlämna_ or _ge tillbaka_. The noun is _returvärde_. The bracketed an explanation in the English gloss word must be _return_, never _returning_. |
| input (to a function) / output | indata / utdata | sv | Not _inmatning / utmatning_, which are the acts of typing in and printing out. |
| interpreter | tolk | sv | Never _programtolk_ or _interpretator_. Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| pure (function) | ren | sv | _en ren funktion_. When glossed, gloss the full term _pure function_, not the bare adjective. |
| brackets (the two after a function name) | parenteser | sv | _de två parenteserna_ for the `()` pair written after a function name. Which bracket type to name, and when, is in the Brackets section below. |
| NOT operator / logical negation | negation | sv | _negation_ for the concept, _inte_ when reading the operator aloud. The `!` keyword stays English. |
| bang (the `!` character) | utropstecken | sv | Swedish has no equivalent of the English slang "bang". Render the source's aside as a remark about what the sign is called, never as a loan. |
| ampersand (`&`) | och-tecken | sv | Where the English itself explains the term, show the glyph itself (`&`) in the bracket, not the English word "ampersand". Not `et-tecken`, which a native speaker (developer) said they'd never seen or used. |
| bar / vertical bar (`\|`) | lodstreck | sv | Not _vertikalstreck_ (dated). The `\|\|` keyword stays English. Where the English itself explains the term, show the glyph (`\|`) in the bracket, not the English word "bar". |
| string template | strängmall | sv | The prose concept. The JS construct's own name (_template literal_ / _template string_) stays English; see "Keep in English". |
| placeholder | platshållare | sv | |
| (programming) language | programmeringsspråk | sv | One word, always. Use it including in the "a language a computer understands" framing. |

### Loops, state & program flow

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| loop | loop | sv | _en loop_, _loopen_, _loopar_; the verb is _loopa_. Never _slinga_. Compounds take no hyphen: _loopvariabel_, _loopkropp_; keyword compounds do: _`for`-loop_, _`while`-loop_. |
| nested | nästlad | sv | _en nästlad loop_. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| to run / execute (code) | köra | sv | Not _exekvera_, which is heavy and technical. |
| assignment / to assign | tilldelning / tilldela | sv | Never _uppgift_, which is "assignment" in the school-homework sense. |
| indentation | indrag | sv | Not _indentering_, an anglicism. |
| exception | undantag | sv | Distinct from _fel_, the general word for an error. |
| increment (for-loop) | öka | sv | _öka med ett_. Not _inkrementera_. |
| concatenation / to concatenate | sammanfoga | sv | Not _konkatenera_. |
| state / stateful | tillstånd | sv | Not _status_, which is a condition being reported rather than data being held. |
| code block | block | sv | _ett block_; _kodblock_ where the context needs it. Keep distinct from _scope_. |

### Tooling & engineering

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| auth (authentication / authorization) | autentisering / behörighet | sv | Pick by meaning: _autentisering_ for proving who you are, _behörighet_ for what you are allowed to do. |
| deploy (verb: to deploy) | driftsätta | sv | Noun: _driftsättning_. Not the anglicism _deploya_, and not _distribuera_. |
| framework | ramverk | sv | Use _ramverk_ exclusively; never revert to _framework_. |
| debugging | felsökning | sv | The activity. The `Debug` keyword and UI label stay English. |
| edge case | specialfall | sv | Not _kantfall_, a calque. |

### Platform & curriculum vocabulary

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| concept (learning unit) | begrepp | sv | Concept Library = Begreppsbiblioteket. Not _koncept_, which is an idea or a design, not something you learn. |
| exercise | övning | sv | The exercise as a whole. |
| task (within an exercise) | uppgift | sv | A sub-step of an _övning_; keep the two words distinct. |
| feature (platform capability) | funktion | sv | The ordinary Swedish word, and deliberately the same one as the code term. Where a passage discusses both, use _finess_ for the platform capability or rephrase. |
| plan (subscription tier) | plan | sv | Enables "{tier}-planen". Not _abonnemang_, which is the subscription itself. |
| subscription | prenumeration | sv | |
| dashboard | översikt | sv | Not _instrumentpanel_ (a car dashboard) or _kontrollpanel_ (system settings). |
| cookies | kakor | sv | What Swedish sites and cookie banners say. |
| chat | chatt | sv | Swedish spelling, double t. The verb is _chatta_. |

### Colours & graphics

| English | Swedish | Use (sv/en) | Notes |
|---------|---------|-------------|-------|
| hue | färgton | sv | The 0-360 position on the colour wheel. Not _nyans_ (reserved for shade) and not _kulör_ (paint-trade register). |
| saturation | mättnad | sv | |
| lightness | ljushet | sv | Distinct from _ljusstyrka_ (brightness). |
| shade (of a colour) | nyans | sv | The casual "the shade of colour you want". Kept distinct from _färgton_. |
| colour wheel | färgcirkel | sv | Not _färghjul_. |
| frame (animation) | bildruta | sv | Not _ram_, which is a picture frame or a border. |

## Keep in English

These stay in English in Swedish prose, with the Swedish gloss to use for each.

| Term | Swedish word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| scope | _räckvidd_ | Swedish course material writes "(eng. in scope)" rather than settling a term. Use the Swedish where the source defines it, then _scope_ throughout. |
| API | explain what it is in Swedish | Where defined, explain the concept in Swedish, not just gloss the acronym. |
| CLI (the concept) | _kommandoradsgränssnitt_ | Explain CLI as _kommandoradsgränssnitt_ where the source defines it. |
| template literal / template string | (no gloss) | The JS construct's own name. The general prose concept is _strängmall_; see "Functions & control flow". |
| backtick | (show the glyph) | |
| canvas | (no gloss) | Also the HTML element's name; Swedish has no settled word for the drawing surface. |
| AI | _artificiell intelligens_ | Use "AI" in prose and marketing. Compounds: AI-hjälp, AI-agenter. |
| LLM | explain in Swedish | |
| widget | _widget_ | |
| Debug, Test | (no gloss) | As keywords, UI labels and technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As capitalised tokens and UI labels only. In running prose the ordinary Swedish words are _kod_ and _bugg_, and those are what to write. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

| Glyph | Swedish | Notes |
|-------|---------|-------|
| `()` | parentes · rund parentes | Plain _parentes_ by default; add _rund_ plus the glyph only when disambiguating. |
| `[]` | hakparentes | |
| `{}` | klammerparentes | _måsvingar_ is the common informal name, but use _klammerparentes_ so one document uses one word. |
| `<>` | vinkelparentes | |

How to phrase a bracket in running prose is in `guide.md`.

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Swedish has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Swedish | Use (sv/en) | Notes |
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
| iteration (a submitted version of a solution) |  |  |  |
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
| badge |  |  |  |
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
