# Indonesian (id) glossary

The agreed term list for Indonesian. Rows whose Notes begin "Unconfirmed draft" are still
binding for consistency, but no native speaker has checked them yet, so they are the ones to
raise on the forum. Why each term was chosen, and who chose it, is in the decision log
(`glossary-notes.md`).

## Core decisions

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| programming / coding | **pemrograman** | id | `koding`/`ngoding` is acceptable only when the source specifically stresses the casual act of writing code; never mix both in one document. |
| developer | **developer** | id | Where the source `<define>`s it, gloss the native _pengembang_. |

## Localize (use the Indonesian term)

These are terms where the Indonesian is used in prose by default; the "Use (id/en)" column marks the exceptions kept in English. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| number | angka | id | Use `angka` for the general sense; `bilangan` also appears in the wild. |
| true / false | benar / salah | id | Used when explaining the concept; the literals `True`/`False` in code stay as code. |
| float / decimal | bilangan pecahan | id | Or _bilangan riil_ if the real-number nature matters more than the fractional one. Pick one per document and stay consistent. |
| index | indeks | id | Use the `indeks` spelling (the Indonesian-orthography form); `index` is also seen. |
| data type | tipe data | id | Unconfirmed draft (agent, 2026-08-04). Not _jenis data_. |
| compound data type | tipe data majemuk | id | Unconfirmed draft (agent, 2026-08-04). A type that holds several things at once (an `array`). |
| value | nilai | id | Unconfirmed draft (agent, 2026-08-04). The general sense of a piece of data. |
| element (of an array) | elemen | id | Unconfirmed draft (agent, 2026-08-04). One item inside an `array`; keep it distinct from `item` used loosely in prose. |
| default value | nilai default | id | Unconfirmed draft (agent, 2026-08-04). Not _nilai bawaan_, which reads more formal than these pages want. |
| concatenation | penggabungan | id | Unconfirmed draft (agent, 2026-08-04). Verb: _menggabungkan_. |

### Functions & control flow

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| statement (executable) | pernyataan | id | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | pernyataan | id | The proposition sense: a claim that is true or false. Same Indonesian word as the executable sense above; pick by context. |
| if statement | percabangan `if` | id | Keep the `if` keyword in code font; translate only "percabangan". |
| to define (a function) | mendefinisikan / membuat (fungsi) | id | Either is natural; stay consistent within a document. |
| parameter | parameter | id | Only worth glossing where the source `<define>`s it alongside `argumen`; otherwise self-explanatory. |
| argument | argumen | id | Distinguish from `parameter` where the two are introduced together. |
| input (to a function) | input | en | Where the source `<define>`s it, gloss _masukan_, then use `input`. |
| output | output | en | Where the source `<define>`s it, gloss _keluaran_, then use `output`. |
| condition | kondisi | id | Unconfirmed draft (agent, 2026-08-04). The test an `if` checks. Not _syarat_, which reads as a requirement/prerequisite. |
| keyword | kata kunci | id | Unconfirmed draft (agent, 2026-08-04). The keyword itself stays in code font and in English (`if`, `for`, `repeat`); only the word "keyword" is translated. |
| code block | blok kode | id | Unconfirmed draft (agent, 2026-08-04). The indented body between the braces. |
| brackets (the two after a function name) | tanda kurung | id | `tanda kurung` unmodified is the round pair `()`; never expand it to `tanda kurung biasa` here. Square and curly brackets take their own modifiers (see "Brackets" below). |

### Loops, state & program flow

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| interpreter | interpreter | en | Where the source `<define>`s it, gloss _penerjemah_, then use `interpreter`. Not _juru bahasa_ (specifically spoken-language interpreting between people). |
| instruction (given to Jiki) | instruksi | id | Not _perintah_ (reads as "command/order", a harder register than the board metaphor wants) and not _petunjuk_ ("directions/hints"). |
| (programming) language | bahasa pemrograman | id | Full form on introduction; plain `bahasa` afterwards, including for "a language a computer understands" (_bahasa yang dimengerti komputer_). Never the English `language` in prose. |
| variable | variabel | id | Use `variabel`, not the official/academic coinage `peubah`. |
| assignment | assignment | en | `memberikan nilai` as a paraphrase is also fine for the verb (see below). Where the source `<define>`s the noun, gloss _pengisian nilai_. |
| to assign | memberikan nilai / menginisialisasi | id | Verb form; prefer this over a bare loanword. |
| error | error | en | Kept in code/debugging contexts; use _kesalahan_ when explaining the general concept in plain prose. Do not use _galat_. |
| loop | perulangan | id | Use `perulangan`, not the official coinage `gelung`. |
| scope | scope | en | Where the source `<define>`s it, gloss _cakupan_, then use `scope`. |
| class | kelas | id | The `class` keyword in code stays English. |
| method | method | en | Kept English in dev prose. |
| object | objek | id | Use the `objek` spelling (the Indonesian-orthography default); `object` is also seen. |
| to iterate (over a string or array) | menelusuri | id | Unconfirmed draft (agent, 2026-08-04). Verb, and the default in prose: _menelusuri isi array satu per satu_. Use the noun _iterasi_ only where the source itself uses the noun "iteration". |

### Tooling & engineering

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| auth (authentication / authorization) | autentikasi | id | Covers the login/identity sense; use _otorisasi_ only when the permissions sense specifically is meant. |
| deploy | deploy | en | Where the source `<define>`s it, gloss _menerapkan_. |

## Keep in English

These stay in English in Indonesian prose, with the Indonesian gloss to use for each.

| Term | Indonesian gloss (on `<define>`) | Notes |
|------|-----------------------------------|-------|
| string | _rangkaian_ | Where the source `<define>`s it, gloss _rangkaian_ (a sequence of characters), then use `string`. Not _untai_: technically correct in the dictionary, but it reads as the thread of a necklace or a strand of beads. |
| Boolean | (no gloss needed) | Lower-case in prose (`boolean`), capitalized only as the type name if the source capitalizes it. |
| scope | _cakupan_ | See "Loops, state & program flow" above. |
| interpreter | _penerjemah_ | See "Loops, state & program flow" above. |
| method | (see notes) | See "Loops, state & program flow" above; kept English with no separate gloss needed. |
| component | _komponen_ | Include the gloss where the source `<define>`s the term; optional otherwise. |
| API | _suatu mekanisme yang berfungsi sebagai jembatan penghubung antara dua perangkat lunak agar dapat berkomunikasi dan bertukar data_ | Where the source `<define>`s it, explain the concept with this wording (adapt to fit the sentence), not just expand the acronym as _Antarmuka Pemrograman Aplikasi_. |
| framework | _kerangka kerja_ | Where the source `<define>`s it, gloss _kerangka kerja_ (the structure or guideline used to tackle a task in an organised way), then use `framework`. Always the full _kerangka kerja_, never bare _kerangka_, which reads as a skeleton. |
| CLI | _antarmuka baris perintah_ | Explain CLI as _antarmuka baris perintah_ (command-line interface) where the source `<define>`s it. |
| library | _pustaka_ | Where the source `<define>`s it, gloss _pustaka_, then use `library`. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code | _kode_ | Where the source `<define>`s it, gloss _kode_, then use `code`. |
| Bug, Frontend, Backend | (no gloss) | |
| array | _larik_ | Unconfirmed draft (agent, 2026-08-04). Where the source `<define>`s it, gloss _larik_, then use `array` in prose. **Always _larik_**, never a descriptive paraphrase such as _deretan nilai_. The chain metaphor (`rantai`) is separate and stays as it is. |
| camel case | (no gloss) | Unconfirmed draft (agent, 2026-08-04). Naming-convention term, kept English; do not invent an Indonesian rendering. |
| template string | (no gloss) | Unconfirmed draft (agent, 2026-08-04). Kept English as the feature name. |
| hue | (no gloss) | Unconfirmed draft (agent, 2026-08-04). Colour-model term, kept English even though its two companions `saturation` and `lightness` are localized (see "Exercise vocabulary"), because `hue` has no single-word Indonesian equivalent that a beginner would recognise. |

## Platform & curriculum vocabulary

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| lesson | materi | id | `pelajaran` reads more school-flavoured; prefer `materi`. |
| exercise | latihan | id | Use `latihan` for the exercise as a whole; `soal` is narrower ("problem/question"). |
| course | kursus | id | Distinct from `materi` (one lesson) and `kurikulum` (the whole program). Not `kelas`, which is already taken by the OOP `class` row above. |
| curriculum | kurikulum | id | The whole program. |
| syllabus | silabus | id | A single course's outline, distinct from `kurikulum`. |
| level | level | en | `tingkat` is an acceptable native alternative if a document leans more formal. |
| mentor / mentoring | mentor | en | `pembimbing` is a workable native alternative but `mentor` is preferred. |
| tutorial | tutorial | en | Kept English for an interactive, step-by-step lesson; use `panduan` only for a static written guide, not an interactive tutorial. |
| solution (learner's submission) | solusi / penyelesaian / jawaban | id | Context-dependent: `solusi` in general, `penyelesaian` for a worked solution, `jawaban` for a quiz answer. Pick the right one per context; do not force a single word everywhere. |

## Exercise vocabulary

Terms that belong to a specific exercise or exercise family rather than to programming in general.

| English | Indonesian | Use (id/en) | Notes |
|---------|-----------|----------|-------|
| Rock, Paper, Scissors (game and exercise title) | Batu, Kertas, Gunting | id | Unconfirmed draft (agent, 2026-08-04). Comma-separated, each word capitalized, in that order. Lower-case the individual words when they refer to the moves in running prose (_batu menumpulkan gunting_). |
| tie (a drawn game) | seri | id | Unconfirmed draft (agent, 2026-08-04). Not _imbang_ (more football-commentary flavoured) and not _seri_ in the "series" sense, which does not arise in these pages. |
| playing hall | aula pertandingan | id | Unconfirmed draft (agent, 2026-08-04). From the rock-paper-scissors setting. |
| canvas | kanvas | id | Unconfirmed draft (agent, 2026-08-04). The drawing surface in the `draw` exercise family. |
| radius | jari-jari | id | Unconfirmed draft (agent, 2026-08-04). Always hyphenated. Horizontal/vertical forms: _jari-jari horizontal_, _jari-jari vertikal_. |
| saturation | saturasi | id | Unconfirmed draft (agent, 2026-08-04). In prose only. Where the word is the *name of a function input* being quoted back to the learner, it currently stays English; that split is an open question (see `glossary-notes.md`). |
| lightness | kecerahan | id | Unconfirmed draft (agent, 2026-08-04). In prose only, with the same function-input caveat as `saturation`. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Indonesian rendering | Notes |
|-------------------|----------------------|-------|
| box (value container) | kotak | |
| chain (array metaphor) | rantai | |
| input slot | lubang | |
| return chute | saluran keluaran | The opening a finished value slides out of. Full form on introduction; plain `saluran` afterwards. Not _perosotan_ (a playground slide), which reads strange for this part of a machine. |
| machine (function metaphor) | mesin | A function modelled as a machine, with an input slot (`lubang`) and a return chute (`saluran keluaran`). |
| crank (machine crank) | tuas | The handle Jiki turns to power a machine up: _memutar tuasnya_. |
| shelves (storage) | rak | Where variables and functions are stored (e.g. `rak buku` = bookshelf). |
| warehouse (Jiki's warehouse) | gudang | Where Jiki hangs out and keeps his machine shelf. |
| board / whiteboard | papan tulis | **One object, one word.** The same board the learner writes instructions on for Jiki to follow, and the one a function keeps its own instructions and notes on. Bare `papan` on its own reads as a plank or a signboard, so it is not an accepted short form even on second mention. |

## Brackets

| Glyph | Indonesian | Notes |
|-------|-----------|-------|
| `()` | tanda kurung | The unmodified form is the round pair, so it needs no "round" modifier. |
| `[]` | tanda kurung siku | |
| `{}` | tanda kurung kurawal | |
| `<>` | tanda kurung sudut | |

How to phrase a bracket in running prose is in `guide.md`.
