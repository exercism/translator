# Turkish (tr) glossary

The agreed term list for Turkish. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| foot-gun | (descriptive phrase, no fixed term) | tr | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. |

## Localize (use the Turkish term)

These are terms where the Turkish is used in prose, so the "Use (tr/en)" column is `tr` throughout. Where the source `<define>`s a term, add the English version in brackets, e.g. "fonksiyon (function)". Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| true / false | doğru / yanlış | tr | Not capitalised in prose. Keywords `true`/`false` stay English in code. |
| float / decimal | ondalıklı sayı | tr | Use _kayan noktalı sayı_ only when the IEEE-754 floating-point nature specifically matters. |
| array / list | dizi | tr | Exercise prose sometimes says "list" informally for the same concept; render both as _dizi_, do not introduce a separate word. |
| index | indeks | tr | Deliberately not _dizin_, which means "directory" in filesystem contexts and would collide. |
| string | karakter dizisi | tr | Real Turkish code and docs also show raw "string"; the glossary term is for prose. |
| data type | veri tipi | tr | |

### Functions & control flow

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| if statement | `if` deyimi | tr | Keep `if` as the real keyword. At its first mention on a page that teaches conditionals, write it once as `if` deyimi (koşul ifadesi) so a beginner meets the meaning; every later mention on that page and elsewhere is bare `if` deyimi. |
| operator | operatör | tr | |
| NOT operator / logical negation | değil operatörü | tr | In code context, the concept is "`!` operatörü"; the `!` symbol stays as-is in code. |
| statement (executable) | deyim | tr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | önerme | tr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _deyim_ above. |
| function | fonksiyon | tr | The *keyword* `function` in code stays English; the concept in prose is _fonksiyon_. |
| parameter | parametre | tr | Declaration-site name. |
| argument | argüman | tr | Call-site value. |
| keyword | anahtar kelime | tr | The keyword itself stays English in code and in prose (`repeat` anahtar kelimesi, `if` anahtar kelimesi); this is the carrier noun it takes. Deliberately not _anahtar sözcük_, so one form is used everywhere. |
| `let` (first-mention gloss) | olsun | tr | The keyword `let` itself always stays English, in code and in prose; _olsun_ is only the sense given when it is first introduced, and it is never used as a standalone term afterwards. Never _izin ver_ ("allow / give permission"), which is the wrong sense of English "let". Introduce it by what it does, per the first-use rule in `guide.md`. |
| brackets (the two after a function name) | parantez | tr | Bare _parantez_ already means round brackets in Turkish, so it needs no qualifier here; square brackets are _köşeli parantez_ and curly ones _süslü parantez_, so use the qualified form whenever those are meant. Plural: _parantezler_ ("o iki parantez"). |

### Loops, state & program flow

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | yorumlayıcı | tr | The one who interprets, a **person** doing a job (Jiki himself), not a program. Never _çevirmen_/_tercüman_, which mean a person who translates between human languages; never _yorumcu_, which in everyday Turkish is a commentator or critic. |
| instruction (given to Jiki) | talimat | tr | Deliberately not _komut_, which is the word for a CLI command and would collide, nor _yönerge_, which is genuinely bureaucratic. |
| (programming) language | dil / programlama dili | tr | Never the English borrowing. Use full _programlama dili_ on first mention or where ambiguity is possible, and bare _dil_ thereafter, including for the "a language a computer understands" framing (_bilgisayarın anladığı bir dil_). |
| to run / execute (code) | çalıştırmak | tr | Avoid the colloquial "run etmek" in written prose. |
| for loop | `for` döngüsü | tr | Keep `for` as the real keyword + _döngü_. |
| while loop | `while` döngüsü | tr | As above, with `while`. |
| for-of loop | `for-of` döngüsü | tr | As above, with `for-of`. |
| break (loop control) | `break` deyimi | tr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| modulo / remainder operator | kalan | tr | The resulting value of the `%` operator. Prose register; avoid the colloquial "mod". |
| state / stateful | durum | tr | The noun is settled; for the adjective "stateful" use a descriptive phrase ("durum tutan") rather than a fixed coinage. |
| method | metot | tr | |
| property | özellik | tr | Watch for collision with "feature" (platform capability) below, which shares the same Turkish word; disambiguate with context if both appear in the same document. |

### Tooling & engineering

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| auth (authentication / authorization) | kimlik doğrulama / yetkilendirme | tr | Pick by meaning. |
| deploy | dağıtım | tr | Formal-prose noun. The colloquial verb "deploy etmek" exists in developer speech but is not used in written prose. |

### Platform & curriculum vocabulary

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | özellik | tr | Shares its Turkish word with "property" above; disambiguate with context, do not introduce a separate coinage. |
| course | kurs | tr | The whole Jiki course ("Bu kursta..."). Keep distinct from _ders_ (lesson) and _müfredat_ (curriculum); deliberately not _kur_, which in Turkish primarily means an exchange rate. |
| curriculum | müfredat | tr | |
| mentor / mentoring | mentor / mentorluk | en | |

### Drawing & color (exercise family)

| English | Turkish | Use (tr/en) | Notes |
|---------|---------|-------------|-------|
| hue | renk tonu | tr | Always the two-word form, including inside a compact describer argument list ("renk tonu: ${arg1}"); bare _ton_ is not a short form for it. |
| saturation | doygunluk | tr | |
| lightness | açıklık | tr | The HSL L channel is **always** _açıklık_, including where the English source says "brightness" loosely for the same channel (it does, in the `hsl` and `colors` concepts). Never render it _parlaklık_: that word is reserved for a genuinely separate brightness/luminosity concept, and using it here collapses the two. |
| canvas (drawing surface) | tuval | tr | Takes ordinary case suffixes (_tuvali temizledi_, _tuval boyunca_). |

## Keep in English

These stay in English in Turkish prose, with the Turkish gloss to use for each.

| Term | Turkish gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| Boolean | _mantıksal değer_ | Exception: where the source defines it, explain it means _mantıksal değer_, then use _Boolean_. |
| API | explain what it is in Turkish | Where defined, explain the concept in Turkish, not just gloss the acronym. |
| framework | _çatı_ | Where defined, explain it means a reusable _çatı_, then use _framework_. Never gloss it as _çerçeve_, which is the everyday word for "frame". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| CLI (the concept) | _komut satırı arayüzü_ | Where defined, explain CLI as _komut satırı arayüzü_ (command-line interface). |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms.

| English metaphor | Turkish rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | kutu | |
| chain (array metaphor) | zincir | A single link = _halka_ (not _bakla_, which means "broad bean" in everyday Turkish and would confuse the image). |
| input slot | para deliği | The narrow opening you post a coin into, as on a piggy bank. Generic fallback: _delik_ ("hole") if a context needs a less coin-specific word. Deliberately not _yuva_, which in Turkish (including in computing, e.g. "işlemci yuvası" = CPU socket) means a socket a matching part sits *in*, the wrong physical image for a narrow slot something is posted through. |
| return chute | kaydırak | Preferred over _oluk_, whose dominant everyday image is a roof rain-gutter. |
| machine (function metaphor) | makine | A function modelled as a machine, with an input slot and a return chute. |
| crank (machine crank) | kol | The handle Jiki turns to power a machine up. The verb phrase is _kolunu çevirmek_ ("to turn its crank"): _makinenin kolunu çevirip çalıştırmak_. Deliberately not _krank_, which in Turkish means an engine crankshaft, nor _manivela_, which is a lever for prying. |
| shelves (storage) | raf / raflar | The shelves where variables and functions are stored. |
| warehouse (Jiki's warehouse) | depo | Where Jiki hangs out and keeps his machine shelf. Preferred over _ambar_ (grain store, ship's hold) and _antrepo_ (a customs term). |
| move (the character) | götürmek | The verb for moving a character to a place, in the maze family and anywhere else a character is moved. Never _taşımak_, which is the "lift and carry" sense and pictures the learner picking the character up. Covers the `move()` describers and instruction bullets ("karakteri bir hücre ileri götürür"), not just hint prose. Unrelated senses of _taşımak_ are untouched: the "bear a name" idiom (_aynı adı taşımak_) and the noun _taş_ ("stone", as in rock-paper-scissors) are correct as they stand. |
| board / whiteboard | beyaz tahta | **One object, one word**: the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on, take the same word, always written in full as _beyaz tahta_. Bare _tahta_ also means wood or a plank and reads as a classroom blackboard, so it is never used as a short form. Never _akıllı tahta_ (smartboard), a different object. |
