# Ukrainian (uk) glossary

The agreed term list for Ukrainian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | програмування | uk | |
| developer | розробник | uk | |
| tech / tech industry | IT-індустрія | uk | Not _tech-індустрія_: keep the whole term in Ukrainian script. |
| streak | серія (днів) | uk | |
| journey (e.g. "our journey into the world of programming") | подорож | uk | Prefer _подорож_ over _мандрівка_. |
| Jeremy (a name in the content) | Джеремі | uk | Transliterate in **prose**, everywhere it occurs, in every content type. Indeclinable: it takes no case endings, so case is carried by the surrounding words (_разом із Джеремі_, _Джеремі показав_). **Exception: inside a literal code string value it stays as the English letters `Jeremy`**, untouched, because it is then the string the learner's code produces or compares against (e.g. `twoFer("Jeremy")`, `let name = "Jeremy"`, and the `alt` text describing the paper that string is written on). |

## Localize (use the Ukrainian term)

These are terms where the Ukrainian is used in prose, so the "Use (uk/en)" column is `uk` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| value | значення | uk | |
| number | число | uk | |
| character | символ | uk | |
| integer | ціле число | uk | |
| true / false | правда / неправда | uk | _Істина/хиба_ (a more formal-logic register) is an accepted alternative; do not mix both in one document. Not capitalised in prose. |
| float / decimal | число з плаваючою комою / десяткове число | uk | Use the first form when the floating-point nature matters, the second for the simpler beginner sense. |
| array / list | масив | uk | Exercise prose sometimes says "list" informally for the same concept; render both with _масив_, do not introduce a second word. |
| dictionary | словник | uk | |
| element | елемент | uk | Array element = _елемент масиву_. |
| index | індекс | uk | No clarification parens needed. |
| key-value pair | пара ключ-значення | uk | The key itself is _ключ_ (ordinary word once introduced). |
| template literal | шаблонний рядок | uk | |
| casing (letter case) | регістр | uk | Unconfirmed draft (agent, 2026-08-03). Upper/lower case of letters. Not _відмінок_ (grammatical case) and not _написання_. Distinct from _горбатий регістр_ (camel case), which reuses the same noun. |
| data type | тип даних | uk | Unconfirmed draft (agent, 2026-08-01). |
| compound data type | складений тип даних | uk | Unconfirmed draft (agent, 2026-08-01). Not _складний_ (means "difficult") and not the rarer borrowing _композитний_. |
| default (value) | типове значення / типовий | uk | Unconfirmed draft (agent, 2026-08-01). Not _за замовчуванням_ or _усталений_; do not mix forms in one document. |

### Functions & control flow

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | умовна конструкція / умовний оператор | uk | Not _умовне твердження_ (collides with the "statement (logical claim)" term). |
| condition | умова | uk | Stands alone; no gloss needed. |
| comparison | порівняння | uk | Stands alone; no gloss needed. |
| expression | вираз | uk | |
| operator | оператор | uk | |
| NOT operator / logical negation | заперечення (логічне) | uk | |
| statement (executable) | інструкція | uk | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _оператор_ (operator) to avoid collision. **_Інструкція_ is reserved for this sense**, which is why the everyday word for a single thing someone is told to do is _вказівка_ and not _інструкція_. |
| statement (logical claim) | твердження | uk | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. |
| function | функція | uk | The *keyword* `function` in code stays English; the concept in prose is _функція_. |
| to call (a function) | викликати (функцію) | uk | |
| to define (a function) | визначати (функцію) | uk | |
| parameter | параметр | uk | |
| argument | аргумент | uk | Call-site value sense. |
| input (to a function) | вхідні дані | uk | |
| to expect / to take (input) | приймати (вхідні дані) | uk | Render "the function expects X" as _функція приймає X_. Never _очікує_: a function does not wait for input, it accepts it. |
| output | вихідні дані | uk | |
| to return (a value) | повернути (значення) | uk | |
| return value | повернене значення | uk | Noun form; distinct from the verb "to return." |
| brackets (the two after a function name) | дужки | uk | The `()` pair written after a function name to call it: _написати її назву, а потім ті дві дужки_. Plain _дужки_ here; only name the type when disambiguating (see § Brackets). |
| pure function | чиста функція | uk | |

### Loops, state & program flow

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| keyword | ключове слово | uk | |
| interpreter | інтерпретатор | uk | The program that runs the code. Not _тлумач_ (archaic, scriptural register). Copula sentences about it must be rephrased; see guide § Grammar and structure. |
| mental model | ментальна модель | uk | |
| (programming) language | мова (програмування) | uk | Never a borrowing: _мова програмування_, and _мова, яку розуміє компʼютер_ for the "language a computer understands" framing. |
| variable | змінна | uk | |
| assignment | присвоєння | uk | |
| to assign | присвоювати (значення) | uk | Matches _присвоєння_ above. |
| code block | блок коду | uk | |
| error | помилка | uk | |
| nested | вкладений | uk | e.g. _вкладений цикл_ = nested loop |
| iteration | ітерація | uk | |
| to run / execute (code) | запустити / виконати | uk | |
| loop | цикл | uk | |
| for loop | цикл `for` | uk | _цикл_ + the real keyword, in that order. |
| while loop | цикл `while` | uk | As above. |
| for-of loop | цикл `for-of` | uk | As above. |
| loop body | тіло циклу | uk | |
| break (loop control) | перервати (цикл) | uk | The keyword `break` in code stays English; this is the prose verb for the concept. |
| increment | інкремент | uk | "збільшення на одиницю" also natural in a fuller explanation. |
| modulo / remainder operator | остача (від ділення) | uk | |
| concatenation / to concatenate | конкатенація / зʼєднати (рядки) | uk | |
| to iterate (through an array/string) | перебирати (елементи) | uk | Unconfirmed draft (agent, 2026-08-01). The verb; the noun stays _ітерація_. Not the calque _ітерувати_. |
| pattern (a repeating pattern in data or in a drawing) | закономірність | uk | Unconfirmed draft (agent, 2026-08-03). The regularity the learner spots and turns into a loop. Not _патерн_ (a borrowing) and not _шаблон_, which this glossary already leans on for _шаблонний рядок_ and _лінії шаблону_. |
| anchor (a variable or value everything else is measured from) | опорна змінна / опорне значення | uk | Unconfirmed draft (agent, 2026-08-03). The one value other values are derived from, in exercises that build every dimension off a single starting figure. Use _опорна змінна_ for the variable, _опорне значення_ for the number in it. Never _якір_ (the ship's anchor, or an HTML anchor). |
| toggle | перемикати | uk | |
| to create (a variable / a counter) | створити | uk | Unconfirmed draft (agent, 2026-08-12, iternewo). Not _завести_, which reads as informal/colloquial for setting up a variable. |
| state / stateful | стан | uk | |
| scope | область видимості | uk | |
| class | клас | uk | |
| method | метод | uk | |
| property | властивість | uk | |
| object | обʼєкт | uk | Use the modifier letter apostrophe ʼ (U+02BC); see guide § Orthography. |

### Tooling & engineering

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| deploy (verb: to deploy) | розгортання / розгорнути | uk | |
| auth (authentication / authorization) | автентифікація / авторизація | uk | Pick by meaning. |
| module | модуль | uk | |
| algorithm | алгоритм | uk | |
| edge case | крайній випадок | uk | |
| backwards compatibility | зворотна сумісність | uk | |
| tool / tooling | інструмент / інструментарій | uk | |
| workhorse (the idiom: "the workhorse of X") | ключовий інструмент | uk | The English idiom, not the animal. Never the literal _робоча конячка_ / _робочий кінь_, which reads as a joke in Ukrainian prose. Takes _у_ before the thing it is central to: "робить цикли `for` ключовим інструментом у JavaScript". |
| pitfall | пастка | uk | Stands alone; no gloss needed. |
| weight (a multiplier in a weighted calculation) | ваговий коефіцієнт | uk | The per-position multiplier in a checksum or weighted sum (ISBN, Luhn and similar). Never the bare _вага_, which is physical weight; the Ukrainian term of art is the full two-word form, in every occurrence including inflected ones (_зменшення вагового коефіцієнту_). |

### Platform & curriculum vocabulary

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| feature (platform capability) | можливість | uk | Deliberately distinct from _функція_ (function) to avoid collision. `function` (the programming concept) is _функція_; `feature` (a platform capability) is _можливість_. Never use _функція_ for a product feature. |
| lesson | урок | uk | |
| exercise | вправа | uk | |
| curriculum | навчальна програма | uk | |
| course | курс | uk | The whole course the reader is taking: _у цьому курсі_. Distinct from _урок_ (lesson) and _навчальна програма_ (curriculum). |
| level | рівень | uk | |
| dashboard | панель керування | uk | Not bare _панель_ (reads badly in context, e.g. _поверніться на панель_). The learner's own landing screen after login (progress, streak, next steps), not an admin area. |
| milestone | віха / етап | uk | |
| syllabus | силабус | uk | |
| mentor | наставник | uk | _Ментор_ is an accepted alternative; do not mix наставник and ментор in one document. |
| tutorial | туторіал / посібник | uk | |
| solution (learner's submission) | рішення | uk | |
| typo | одруківка | uk | Unconfirmed draft (agent, 2026-08-03). A mistyped character in the learner's own code. Not _опечатка_ (a Russianism) and not the long _друкарська помилка_, which reads as a printing-press error. |
| relational (in an exercise title: sizes derived from one another) | пропорційний | uk | Unconfirmed draft (agent, 2026-08-03). The "Relational X" exercise family, where every dimension is worked out from a single value rather than hard-coded. Titles read _Пропорційний сніговик_, _Пропорційний світлофор_, _Пропорційне сонце_. Not _реляційний_, which in Ukrainian means relational databases. |
| "I'm totally stuck" (the recurring last-resort hint) | Я зовсім не знаю, що робити | uk | Unconfirmed draft (agent, 2026-08-03). The final hint title that recurs across exercises; keep it word-for-word identical everywhere so learners recognise it. |

### Drawing & colour (exercise family)

| English | Ukrainian | Use (uk/en) | Notes |
|---------|-----------|-------------|-------|
| hue | відтінок | uk | Unconfirmed draft (agent, 2026-08-01). The 0-360 position on the colour wheel; recurs across the "draw" exercise family. |
| lightness | світлість | uk | Unconfirmed draft (agent, 2026-08-01). Deliberately distinct from _яскравість_ (brightness); keep it stable across the whole draw family. |
| canvas (drawing surface) | полотно | uk | Unconfirmed draft (agent, 2026-08-01). The surface drawn on, not the HTML element name. Do not mix with _канва_ / _канвас_ in one document. |
| hex color / hex string | шістнадцятковий колір / шістнадцятковий код кольору | uk | Unconfirmed draft (agent, 2026-08-01). Use the first for the colour itself, the second for the `#rrggbb` string. Not _hex-код_: keep the whole term in Ukrainian script. |
| radial width / radial height (also "horizontal radius / vertical radius") | горизонтальний радіус / вертикальний радіус | uk | An ellipse's `radiusX`/`radiusY`. The English source says "radial width/height" in some places and "horizontal/vertical radius" in others for the same two values: render **both** wordings with this one pair. Not the formal geometry terms _велика піввісь_ / _мала піввісь_. At the first ellipse occurrence carry the one-time aside saying these are not the real geometric names; nowhere else. |
| box (drawing/forecast grid cell) | комірка | uk | Unconfirmed draft (agent, 2026-08-01). A numbered cell on the drawing canvas or forecast grid. Never _коробка_, which is reserved for the value-container metaphor. |
| icon (a picture the learner draws) | картинка | uk | The thing being drawn in an exercise. Never _іконка_, which in Ukrainian means a UI icon (or a religious icon) and not a picture. |
| scene (a drawn picture) | зображення / картинка | uk | Use _зображення_ after _створити_ (_створіть зображення погоди_) and _картинка_ elsewhere (_намалювати картинку погоди_). Never _сцена_, which does not carry the "picture" sense. |
| guide lines (the faint outlines shapes sit inside) | напрямні лінії | uk | The shapes go _всередині напрямних ліній_, and must not cross them (_а не перетинати їх_). |
| target image / template outline | лінії шаблону | uk | What the learner matches their drawing against. Never _цільове зображення_, which is not idiomatic Ukrainian. |
| corner point / vertex (of a shape) | вершина | uk | A rectangle's top-left corner is _верхня ліва вершина_; a triangle is drawn _за трьома вершинами_. |
| lock icon | символ замочка | uk | The diminutive _замочок_, not _замок_, which also means "castle". |
| frame (the main body of a house) | каркас будинку | uk | Unconfirmed draft (agent, 2026-08-03). **Contested**: a native speaker has flagged _каркас_ as reading like scaffolding rather than a finished building, and the replacement is still open (see the decision log). Do not guess at a substitute; leave existing occurrences alone until it is settled. |
| gap (the distance a shape is inset from an edge) | відступ | uk | Unconfirmed draft (agent, 2026-08-03). The spacing between a shape and the edge it sits in from (_з відступом `10` від його боків_). Not _проміжок_ or _зазор_. |

## Keep in English

These stay in English in Ukrainian prose. Where the English itself explains one of these terms,
use the Ukrainian gloss shown below; with no an explanation in the English, use the English bare, with no gloss.

| Term | Ukrainian word, where the English explains the term | Notes |
|------|-----------------------------------|-------|
| string | _рядок тексту_ | Always gloss as _рядок тексту (англ. string)_ at each first mention per page, then _рядок тексту_ (not bare English _string_) afterwards, because a bare English word reads too jarring against Ukrainian sentences for learners. Do not switch to English-only after the first mention like other "Keep in English" terms. |
| Boolean / Booleans | _булеві значення_ | Always gloss as _булеві значення (англ. Boolean)_ at each first mention per page, then _булеві значення_ (not bare English _Boolean_) afterwards, exactly as `string` above. Singular is _булеве значення_. Do not switch to English-only after the first mention like other "Keep in English" terms. _Логічне значення_ is an accepted synonym if it reads better in context; do not mix both in one document. |
| component | _компонент_ | Where the source defines it, gloss as "component (компонент)". Use _компонент_ freely after that. |
| API | explain what it is in Ukrainian | Not a word a beginner knows; where defined, explain the concept in Ukrainian, not just gloss the acronym. |
| framework | _фреймворк_ | Where the source defines it, explain it means a reusable structure. |
| CLI (the concept) | _інтерфейс командного рядка_ | Where the source defines it, explain CLI as _інтерфейс командного рядка_ (command-line interface). |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |
| camel case | _горбатий регістр_ | Gloss **once**, at the very first mention across the course (the "Creating and Using Variables" article), as _горбатий регістр_ (_верблюдячий регістр_ is the known alternative; both are named after the animal, as _зміїний регістр_ is for snake case). Every later occurrence, on that page and on every other, uses the English _camel case_ bare. |
| meridiem | _позначка «meridiem»_ | Unconfirmed draft (agent, 2026-08-01). The am/pm indicator; carry it with the noun _позначка_. The sentinel values `am`/`pm` and expected time strings stay verbatim. |

## Brackets

Default to plain **дужки**. When a specific bracket type matters, name it and show the
glyph in a code tag immediately after: _квадратні дужки (`[]`)_.

| Glyph | Ukrainian | Notes |
|-------|-----------|-------|
| `()` | дужки · круглі дужки | Plain _дужки_ by default; add _круглі_ + glyph only when disambiguating. |
| `[]` | квадратні дужки | |
| `{}` | фігурні дужки | |
| `<>` | кутові дужки | |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Ukrainian has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Ukrainian | Use (uk/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
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
