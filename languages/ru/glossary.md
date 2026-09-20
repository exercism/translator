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
| statement (executable) | инструкция | ru | The imperative sense: a line of code that does something. Deliberately distinct from `оператор`; never use `оператор` for this sense. It is the ordinary word for a single thing someone is told to do as well. |
| statement (logical claim) | утверждение | ru | The proposition sense: a claim that is true or false; also a test assertion. |
| input (to a function) | вход / входные данные | ru | Pairs with the `машина`/`автомат` metaphor family below. |
| output | выход / выходные данные | ru | |
| brackets (the two after a function name) | круглые скобки | ru | Russian must say **which** brackets: bare _скобки_ is ambiguous against square ones. Full form on first mention, short _скобки_ afterwards; see the guide's Style notes. |

### Loops, state & program flow

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | интерпретатор | ru | The program that runs the code. Do not substitute _переводчик_ (that is "translator") or the bookish _толкователь_. |
| mental model | мысленная модель | ru | Not _ментальная модель_, which is management-training jargon in Russian. |
| exception | исключение | ru | Distinct from the general term "error" above; the catchable-error-object sense. |
| scope | область видимости | ru | Unlike Hungarian/Serbian, Russian does not keep "scope" in English. |

### Tooling & engineering

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| deploy (verb: to deploy) | развернуть | ru | "Деплой"/"задеплоить" is common dev slang; prefer _развернуть_ for beginner-facing content. |
| framework | фреймворк | ru | Write in Cyrillic, not quoted in Latin script. |
| component | компонент | ru | Cyrillic, as with framework above. |

### Platform & curriculum

| English | Russian | Use (ru/en) | Notes |
|---------|---------|-------------|-------|
| course | курс | ru | The whole course the reader is taking ("в этом курсе"). Keep distinct from _урок_ (lesson) and _программа обучения_ (curriculum). |
| exercise | упражнение | ru | The platform unit. Where English says "solve the exercises", write _выполнять упражнения_, never _решать задачи_: _задача_ is reserved for the sub-step sense below. |
| task (within an exercise) | задача | ru | A sub-step inside an exercise. Never used for the exercise itself. |

## Keep in English

These stay in English (or as an established English loanword) in Russian prose, with the
Russian gloss to use for each. Where the English itself explains one of these terms, use the
Russian in the gloss column below (per the format in `global/voice.md`); and where it does not, use
the English bare, with no gloss.

| Term | Russian word, where the English explains the term | Notes |
|------|--------------------------------|-------|
| API | explain the concept in Russian | Explain what an API is (e.g. "набор правил, по которым две программы могут обмениваться данными"), not just expand the acronym. |
| CLI | _командная строка_ | Explain CLI as the text-based way of controlling a computer, i.e. _командная строка_ (command line), where the source defines it. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Russian has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Russian | Use (ru/en) | Notes |
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
