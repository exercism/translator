# Polish (pl) glossary

The agreed term list for Polish. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| programming | programowanie | pl | Use consistently. |
| coding (informal) | kodowanie | pl | Use only when the source specifically stresses the casual, hands-on act of writing code. Never mix both in one document. |
| tech / tech industry | branża IT | pl | |
| developer | programista | pl | Do not use `deweloper`, which in general Polish usage means a real-estate developer. |
| streak | seria | pl | |
| pitfall | pułapka | pl | |

## Localize (use the Polish term)

These are terms where the Polish is used in prose, so the "Use (pl/en)" column is `pl` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| value | wartość | pl | |
| number | liczba | pl | |
| integer | liczba całkowita | pl | The keyword `int` in code stays English. |
| float / decimal | liczba zmiennoprzecinkowa | pl | The keywords `float`/`double` in code stay English. |
| character | znak | pl | The keyword `char` in code stays English. |
| true / false | prawda / fałsz | pl | Not capitalised in prose. The keywords `true`/`false` in code stay English. |
| array / list | tablica | pl | Do not use `łańcuch` for this. Because it owns _tablica_, no metaphor term may use that word (see the board row under "Jiki physical metaphors"). |
| dictionary | słownik | pl | |
| element | element | pl | |
| index | indeks | pl | |
| data type | typ danych | pl | The general concept. |

### Functions & control flow

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| if statement | instrukcja warunkowa | pl | The keyword `if` stays English in code. |
| condition | warunek | pl | Stands alone; no gloss needed. |
| comparison | porównanie | pl | Stands alone; no gloss needed. |
| expression | wyrażenie | pl | Distinct from _instrukcja_ (a statement); an expression always evaluates to a value. |
| operator | operator | pl | |
| statement (executable) | instrukcja | pl | The imperative sense: a line of code that does something and gets executed. Keep distinct from _wyrażenie_ (expression) and from the logical-claim sense below. Same word as the "instruction given to Jiki" row below. |
| statement (logical claim) | zdanie / zdanie logiczne | pl | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; never conflate with _instrukcja_. |
| function | funkcja | pl | The keyword `function` in code stays English; the concept in prose is _funkcja_. |
| to call (a function) | wywoływać / wywołać | pl | |
| to define (a function) | definiować / zdefiniować | pl | |
| parameter | parametr | pl | The declaration-site name. Keep distinct from _argument_ even though Polish developers sometimes conflate the two informally. |
| argument | argument | pl | The call-site value. See note on _parametr_ above. |
| input (to a function) | dane wejściowe | pl | |
| output | dane wyjściowe | pl | Where the specific value returned is meant, use _wynik_ or _wartość zwracana_ (see below) instead. |
| to return (a value) | zwracać / zwrócić | pl | The verb; keep distinct from the noun below. |
| return value | wartość zwracana | pl | The noun; fixed standard phrase. |
| brackets (the two after a function name) | nawiasy | pl | The `()` pair written after a function name to call it: _te dwa nawiasy_. Plain _nawiasy_ is enough here, because the round pair is the default; name the type only when disambiguating (see "Brackets" below). |
| pure function | funkcja czysta | pl | |

### Loops, state & program flow

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| keyword | słowo kluczowe | pl | |
| interpreter | interpreter | pl | "The one who interprets", a person doing a job: on concept pages Jiki *is* the interpreter. Never substitute a program-only paraphrase such as _program interpretujący_. Polish-spelled loanword, so it declines normally: _interpretera_, _interpreterem_, _interpreterowi_. Same-script loanword, so it takes no bracketed English gloss (see `guide.md`). |
| instruction (given to Jiki) | instrukcja | pl | The everyday noun: an instruction the learner gives Jiki. Not a formal/legal-register word such as _polecenie służbowe_ or _zarządzenie_. Plural _instrukcje_. Same word as "statement (executable)" above. |
| mental model | model mentalny | pl | Keep it; do not paraphrase as _wyobrażenie_. |
| (programming) language | język (programowania) | pl | Never the English borrowing. Use full _język programowania_ where the source names the category, plain _język_ for the "a language a computer understands" framing. |
| variable | zmienna | pl | |
| assignment | przypisanie | pl | The noun; keep distinct from the verb below. |
| to assign | przypisać / przypisywać | pl | The verb. |
| code block | blok kodu | pl | Keep distinct from _zakres_ (scope) below; they are related but not the same thing. |
| scope | zakres | pl | Keep distinct from _blok kodu_ (code block); a block establishes a scope, it is not the same as one. |
| error | błąd | pl | General error. Keep distinct from _wyjątek_ (exception) below. |
| exception | wyjątek | pl | The specific catchable-error-object sense, distinct from _błąd_ (a general error). |
| nested | zagnieżdżony / zagnieżdżona / zagnieżdżone | pl | Agrees in gender/number with the noun it modifies, e.g. _zagnieżdżona pętla_ = nested loop. |
| iteration | iteracja | pl | |
| to run / execute (code) | uruchomić / uruchamiać | pl | Use for launching a program. |
| element | zob. "Values & data types" | pl | |
| loop | pętla | pl | |
| for loop | pętla `for` | pl | Keep `for` in backticks (real keyword) + _pętla_. |
| while loop | pętla `while` | pl | As above. |
| for-of loop | pętla `for...of` | pl | As above. |
| loop body | ciało pętli | pl | |

### Tooling & engineering

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| increment | inkrementacja (noun) / inkrementować (verb) | pl | |
| modulo / remainder operator | modulo | pl | The `%` operator. The result itself, in plain language, is _reszta z dzielenia_. |
| concatenation | konkatenacja (noun) / konkatenować, łączyć (verb) | pl | Plain alternative: _łączenie ciągów znaków_. |
| toggle | przełączać / przełączenie (verb/noun), przełącznik (control) | pl | |
| state / stateful | stan (noun) / stanowy, bezstanowy (adjective) | pl | |
| class | klasa | pl | |
| method | metoda | pl | |
| property | właściwość | pl | Use _pole_ or _atrybut_ instead for a raw Java field, if that distinction matters in context. |
| object | obiekt | pl | |
| encapsulation | hermetyzacja | pl | |
| workflow | *(kept English)* | en | See "Keep in English" below. |
| auth (authentication / authorization) | uwierzytelnianie (authentication) / autoryzacja (authorization) | pl | Pick by meaning; the two concepts render differently in Polish. |
| deploy (verb: to deploy) | wdrożyć / wdrożenie, wdrażanie | pl | |
| tool / tooling | narzędzie / narzędzia | pl | "Tooling" as an abstract collective renders descriptively (e.g. _ekosystem narzędzi_) rather than as one fixed word. |
| module | moduł | pl | |
| algorithm | algorytm | pl | |
| edge case | przypadek brzegowy | pl | |
| backwards compatibility | kompatybilność wsteczna | pl | |
| component | komponent | pl | |

### Platform & curriculum

| English | Polish | Use (pl/en) | Notes |
|---------|--------|----------|-------|
| course | kurs | pl | The whole Jiki course the learner is taking. Keep distinct from _lekcja_ (lesson) and _program nauczania_ (curriculum). |
| Great work! / Great job! (success or congratulation opener) | Dobra robota! | pl | Never _Świetna robota!_: nobody says it in Polish, it reads as a word-for-word calque of "great job". |
| Great progress! (praise for how far the learner has got) | Robisz postępy! | pl | Always the verb phrase. Never the noun _postęp_ (_Świetny postęp!_): _postęp_ is progress of humanity or technology, not one person's achievement. _Dobrze Ci idzie!_ and _Tak trzymaj!_ are fine alternatives; pick a different one if the surrounding sentence already uses it. |
| Amazing effort! / Fantastic effort! (praise for the work the learner put in) | Kawał dobrej roboty! | pl | Never _Niesamowita praca!_: _niesamowity_ + _praca_ reads as praise for a mesmerising work of art, not encouragement for someone's effort. Keep praise in the _robota_ family, informal and spoken. |
| character (the little figure in the maze exercises) | ludzik | pl | **Masculine**, so every agreeing verb, adjective, participle and pronoun is masculine: _ludzik wszedł_, _ludzik nie dotarł_, _jest zwrócony_, _a on obraca się_. Declines _ludzika_ (gen./acc.), _ludzikowi_ (dat.). Never _postać_, which is feminine and too abstract for the little person the English describes. |
| turn (the maze character's `turnLeft()`/`turnRight()` instruction) | obracać się (verb) / obrót (noun) | pl | The character rotates on the spot: _ludzik obraca się w lewo_, _obrót w prawo_, _polecenie obrotu w lewo_. The reflexive _się_ is required on the verb. Never _skręcać_ / _skręcić_ / _skręt_, which describe turning while travelling and imply the character moves forward through the turn. |
| canvas (the drawing surface Jiki draws shapes on) | plansza | pl | Confirmed by mlistewnik (t/1881/1): _płótno_ has a narrow meaning in Polish (painters' fabric, or a painting), which reads wrong for a graphical drawing surface. _Plansza_ fits a physical drawing-board framing, which matches Jiki standing next to the drawing. Declines normally: _planszy_ (gen.), _planszę_ (acc.). |

## Keep in English

These stay in English in Polish prose, with the Polish gloss to use for each.

| Term | Polish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| string | _ciąg znaków_ | Where the source `<define>`s it, explain the concept as _ciąg znaków_, then use _string_ freely afterwards; that's what Polish developers actually say day to day. Deliberately not `łańcuch`, to keep it distinct from the "chain" array metaphor below. |
| framework | _framework_ has no established Polish equivalent; used as-is | No gloss needed beyond noting it is a framework/library ecosystem if the context doesn't make it obvious. |
| API | _interfejs programowania aplikacji_ | Where the source `<define>`s it, explain the concept in Polish, not just gloss the acronym. |
| workflow | _przebieg pracy_ (descriptive gloss only, not a fixed term) | Used as-is after a one-time descriptive gloss. |
| CLI (naming a specific tool) | _interfejs wiersza poleceń_ | When explaining the general concept, translate fully as _interfejs wiersza poleceń_ / _wiersz poleceń_; when naming a specific tool (e.g. "the Jiki CLI"), keep _CLI_. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

Naturalised loanwords that are spelled and declined as Polish words (_interpreter_,
_komponent_, _moduł_, _operator_) are **not** in this table: they are Polish rows above, and
they take no English gloss because the gloss would restate the same word (see `guide.md`).

## Brackets

Default to plain **nawias**. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _nawias kwadratowy (`[]`)_.

| Glyph | Polish | Notes |
|-------|--------|-------|
| `()` | nawias · nawias okrągły | Plain _nawias_ by default; add _okrągły_ + glyph only when disambiguating. |
| `[]` | nawias kwadratowy | |
| `{}` | nawias klamrowy | |
| `<>` | nawias ostrokątny (or _nawias trójkątny_) | |
