# Russian (ru) glossary

The agreed term list for Russian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **программирование** | ru | "Кодинг" is a casual synonym; use `программирование` consistently and don't mix both in one document. |
| pitfall | подводный камень | ru | |

## Localize (use the Russian term)

These are terms where the Russian is used in prose, so the "Use (ru/en)" column is `ru` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| float / decimal | дробное число | ru | Use _число с плавающей точкой_ only when the floating-point behavior specifically matters. |
| true / false | `true` / `false` (keep English) | en | |
| array / list | массив | ru | Exercise prose that says "list" informally still renders as _массив_. |
| string | строка | ru | Unlike Hungarian/Serbian, Russian does **not** keep "string" in English. |
| Boolean | логическое значение | ru | _Булево значение_ is a common dev-community alternative; do not mix the two within a document. |

### Functions & control flow

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| if statement | условная конструкция | ru | Avoid "оператор" here, it's reserved for the operator sense below. |
| operator | оператор | ru | Reserve exclusively for the symbol sense (`+`, `===`); never use for "statement." |
| statement (executable) | инструкция | ru | The imperative sense: a line of code that does something. Deliberately distinct from `оператор`; never use `оператор` for this sense. Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. |
| statement (logical claim) | утверждение | ru | The proposition sense: a claim that is true or false; also a test assertion. |
| input (to a function) | вход / входные данные | ru | Pairs with the `машина`/`автомат` metaphor family below. |
| output | выход / выходные данные | ru | |
| brackets (the two after a function name) | круглые скобки | ru | Russian must say **which** brackets: bare _скобки_ is ambiguous against square ones. Full form on first mention, short _скобки_ afterwards; see the guide's Style notes. |

### Loops, state & program flow

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | интерпретатор | ru | Jiki himself, a person doing a job, not a program. Masculine animate: _вашим интерпретатором будет Jiki_, _дружелюбный интерпретатор_. Do not substitute _переводчик_ (that is "translator") or the bookish _толкователь_. |
| instruction (given to Jiki) | инструкция | ru | Plural _инструкции_. Same word as "statement (executable)" above, deliberately: on concept pages the instructions the learner writes on the board *are* the statements. Not _указание_ or _предписание_ (formal/administrative register). |
| mental model | мысленная модель | ru | Not _ментальная модель_, which is management-training jargon in Russian. |
| exception | исключение | ru | Distinct from the general term "error" above; the catchable-error-object sense. |
| scope | область видимости | ru | Unlike Hungarian/Serbian, Russian does not keep "scope" in English. |

### Tooling & engineering

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| deploy (verb: to deploy) | развернуть | ru | "Деплой"/"задеплоить" is common dev slang; prefer _развернуть_ for beginner-facing Jiki content. |
| framework | фреймворк | ru | Write in Cyrillic, not quoted in Latin script. |
| component | компонент | ru | Cyrillic, as with framework above. |

### Platform & curriculum

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| course | курс | ru | The whole Jiki course ("в этом курсе"). Keep distinct from _урок_ (lesson) and _программа обучения_ (curriculum). |
| exercise | упражнение | ru | The platform unit. Where English says "solve the exercises", write _выполнять упражнения_, never _решать задачи_: _задача_ is reserved for the sub-step sense below. |
| task (within an exercise) | задача | ru | A sub-step inside an exercise. Never used for the exercise itself. |

## Keep in English

These stay in English (or as an established English loanword) in Russian prose, with the
Russian gloss to use for each. Where the source `<define>`s one of these terms, use the
Russian in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | Russian gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | explain the concept in Russian | Explain what an API is (e.g. "набор правил, по которым две программы могут обмениваться данными"), not just expand the acronym. |
| CLI | _командная строка_ | Explain CLI as the text-based way of controlling a computer, i.e. _командная строка_ (command line), where the source defines it. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Russian rendering | Notes |
|-------------------|----------------------|-------|
| machine (function metaphor) | автомат | |
| box (value container) | коробка | |
| chain (array metaphor) | цепочка | Not _цепь_, which reads as a heavy industrial chain. |
| input slot | приёмное отверстие | Pairs with the `автомат` metaphor. |
| return chute | лоток | Pairs with `автомат` and `приёмное отверстие`. |
| shelves (storage) | полки | Singular _полка_ for one shelf. |
| warehouse (Jiki's warehouse) | склад | |
| crank (machine crank) | рукоятка | The handle you turn: _покрутить рукоятку_. Not _кривошип_ (an engineering part) or _ручка_ (ambiguous with "pen" and "door handle"). |
| board / whiteboard | доска | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and a function's own board of instructions and notes. Never introduce a second word for it. |
