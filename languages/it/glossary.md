# Italian (it) glossary

The agreed term list for Italian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| developer | sviluppatore / sviluppatrice | it | Agree gender with the referent; use the masculine as the generic/plural default. |
| tech / tech industry | settore tech | it | Not _industria tecnologica_. _Settore tecnologico_ is real but much rarer in Italian tech writing; do not substitute it. |
| streak | slancio / giorni di slancio | it | A run of consecutive days, as in the learning-platform sense. Confirmed by a native speaker: works standalone as a UI label ("Slancio" above a number), and "uno slancio di 5 giorni" is grammatically correct (masculine noun). Replaces an earlier draft, _serie_, which doesn't carry the unbroken-run sense on its own. |
| foot-gun | arma a doppio taglio | it | Use a descriptive phrase rather than forcing a fixed term, per `global/terms.md`. Native speaker frasanga preferred this (double-edged weapon, for the object/code sense — "code that seems right but isn't and can cause harm") over an earlier draft, _trappola involontaria_; _darsi la zappa sui piedi_ (to hoe one's own feet) was offered as the action-sense alternative if a verb phrase is ever needed instead of a noun. |

## Localize (use the Italian term)

These are terms where the Italian is used in prose, so the "Use (it/en)" column is `it` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| float / decimal | numero in virgola mobile | it | Use _numero decimale_ only for the plain "has a decimal point" sense, not the technical float type. |
| array / list | array | it | A bare _array (array)_ gloss is unnecessary; where the source `<define>`s it, gloss with a one-line explanation of the concept instead, since the word itself is already English. Plural is invariant: _gli array_. Do not mix in "vettore" within one document. Never use "matrice" (means 2D matrix). Exercise prose sometimes says "list" informally for the same concept; render both as _array_. |
| string | stringa | it | Never left bare in English. |
| template literal / template string | stringa interpolata | it | Confirmed by a native speaker. Never leave a bare _template literal_ or _template string_ in Italian prose. The `${...}` syntax itself is _interpolazione_; the verb is _interpolare_. Where the source `<define>`s it, explain it as a _stringa interpolata_, a string with values inserted directly into it. |

### Functions & control flow

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| comparison | confronto | it | Stands alone. Avoid "comparazione". |
| statement (executable) | istruzione | it | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | (semplice) affermazione | it | The everyday "something you could say out loud that is true or false" sense; also a test assertion. Use _semplice affermazione_ where the sentence is introducing the idea, plain _affermazione_ thereafter. Never _proposizione_, which reads as a formal logical proposition. Deliberately distinct from _istruzione_ above; never cross-use. |
| to call (a function) | chiamare (una funzione) | it | Use _chiamare_ consistently (not "invocare"). |
| to define (a function) | definire (una funzione) | it | Distinct from _dichiarare_ (declare), which is not used for this concept here. |
| parameter | parametro | it | Declaration-site name. |
| argument | argomento | it | Call-site value. Deliberately distinct from _parametro_ above. |
| input (to a function) | input | en | Not _ingresso_, which is the construction/building-entrance term (see `entrance` below), not this sense. |
| output | output | en | Not _uscita_. |
| to return (a value) | restituire | it | "La funzione restituisce 30." Not "ritornare". |
| return value | valore restituito | it | Noun form; matches the verb _restituire_ above for consistency. |
| brackets (the two after a function name) | parentesi | it | The `()` pair written after a function name to call it: _parentesi tonde (`()`)_ where the type matters, plain _parentesi_ once the round pair is established in context. See the Brackets table below for the glyph names. |
| helper function(s) | funzione ausiliaria / funzioni ausiliarie | it | Confirmed by native speaker FraSanga, independently, across three review threads. Superseded/wrong: _funzione/i helper_ (English loanword), _funzione/i di aiuto_, _funzione/i di supporto_. |

### Loops, state & program flow

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| interpreter | interprete | it | **A person doing a job, not a program.** Jiki *is* the interprete ("il tuo interprete è Jiki", "l'interprete amichevole"). Never "interpretatore" or a device-flavoured coinage. Masculine/feminine invariant in form: _l'interprete_. |
| instruction (given to Jiki) | istruzione | it | A single thing the learner tells Jiki to do. Everyday word, not a legal/formal register one. Deliberately the same word as _statement (executable)_ above: in Italian these are one concept and splitting them would invent a distinction the language does not make. |
| (programming) language | linguaggio (di programmazione) | it | _linguaggio_, never _lingua_ (which means a natural human language). Also used for the "language a computer understands" framing: _un linguaggio che il computer capisce_. |
| code block | blocco di codice | it | Deliberately distinct from _scope_ below. |
| comment (in code) | commento | it | A `//` or `#` note in the source that the computer ignores. Masculine: _il commento_, plural _i commenti_. The word stands alone: qualify it as _commento nel codice_ only where the surrounding sentence could be read as a remark or a piece of feedback. Verb: _commentare_ ("aggiungere un commento"); for commenting a line out, say _trasformare in commento_, never "commentare fuori". |
| to refactor / refactoring | riorganizzare / riorganizzazione | it | Reworking code without changing what it does. Never _rifattorizzare_, a literal calque that is not natural Italian. _Modificare_ (to edit) is too weak: it loses the "same behaviour, better structure" sense. |
| nested | annidato | it | e.g. _ciclo annidato_ = nested loop. Prefer over "nidificato". |
| modulo / remainder operator | operatore modulo (operator) / resto (value) | it | Use _operatore modulo_ for the `%` operator; _resto_ for the resulting value. |
| toggle | azionare | it | Verb. "Ian azionò l'interruttore e la luce si accese." Confirmed by two native speakers: a single plain verb, more natural than the earlier draft _alternare_, which invited an on/off two-word pairing. |
| scope | scope | en | Where the source `<define>`s it, gloss as _ambito (di visibilità)_, then use _scope_. |
| state (program state) | stato | it | Where the source `<define>`s it, or wherever the concept is being introduced/explained rather than just referenced, gloss it as _stato, cioè le informazioni che descrivono la situazione attuale del programma_ (adjust case/preposition to the sentence). Use this clarifying gloss consistently wherever "state" is explained, not only on the `concept/state` page. What is standing is the **pattern**, an appositive introduced by _cioè_ that says concretely what the state is, not one fixed string: a bare later reference to _lo stato_ is left alone (glossing every mention turns the clarification into noise), and where the sentence names a specific state the appositive names that instead, e.g. _uno stato, cioè la registrazione del fatto che stiamo viaggiando a sinistra o a destra_. The `concept/state` page keeps its own reviewer-approved expansion of `<define>state</define>`, _stato (_state_ in inglese), cioè la condizione in cui si trova qualcosa_; do not overwrite it with the wording above. |

### Tooling & engineering

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| deploy (verb / noun) | rilascio / rilasciare | it | Low-confidence pick. Flag for native-speaker confirmation via `/action-forum-post`. |
| tool / tooling | strumento | it | Covers "tool"; bare "tooling" as a collective noun is left undecided, do not use it yet. |
| edge case | caso limite | it | No official ruling exists; flagged for native-speaker confirmation. |

### Platform & curriculum vocabulary

| English | Italian | Use (it/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funzionalità | it | Deliberately distinct from _funzione_ (function) to avoid collision. |
| course | corso | it | The whole Jiki course the learner is taking: _in questo corso_. Distinct from _lezione_ (lesson) and _percorso_ (curriculum). |
| level (a stage of the course) | livello | it | The unit the learner completes to unlock the next one, and the unit the milestone emails celebrate. Jiki's progression is deliberately game-like (levelling up), so the videogame connotation of _livello_ is wanted, not a drawback. Never _modulo_ (already the `%` operator, and _modulo_ = a web form in the app UI), never _passaggio_, _sezione_ or _lezione_. "Next level" is always _il prossimo livello_ across the whole milestone-email series. |
| lesson (inside a level) | lezione | it | The individual teaching unit a level is made of; several lessons make one _livello_. Use it only where the English says "lesson", never as a rendering of "level". |
| curriculum | percorso | it | Never bare "curriculum": in Italian it means a CV/résumé, a false friend. Use _percorso_ for the learning-curriculum sense. |
| pathway | percorso | it | A structured learning sequence. Same word as _curriculum_ above; the two senses rarely appear together in one document. |
| track (curriculum path) | indirizzo | it | Confirmed by a native speaker: the standard Italian word for a course of study (secondary-school _indirizzo_, university track). Stays distinct from _percorso_ (pathway). |
| mentor / mentoring | mentore / mentoring | it | "Mentoring" is used as-is; "mentore" is the native word for the person. |
| tutorial | tutorial | en | Established as-is in Italian tech/education writing. |
| "Run Code" (the button) | Esegui il codice | it | The app's run button. Prose that tells the learner to press it quotes the button's own label, so use this exact wording every time, never the shorter _Esegui codice_. |
| drawing shapes (function category) | disegno di forme geometriche | it | The graphics-exercise function category. Use _forme geometriche_ for "shapes" in drawing contexts; bare _forme_ is acceptable only where the geometric sense is already unambiguous from the sentence. |
| basic / simple (exercise-title modifier) | semplice | it | Where two exercises share a subject and one is the basic version (`-basic` and its fuller counterpart), mark the basic one's Italian title with _semplice_ **before** the noun phrase: _Semplice pupazzo di neve_. The fuller exercise keeps the undecorated title (_Pupazzo di neve_), so only the basic one carries a modifier. Applies to the title only, not to the noun inside the prose or the message catalog. Agrees with the noun in gender and number (_Semplice X_, _Semplici X_). |

## Keep in English

These stay in English in Italian prose, with the Italian gloss to use for each.

| Term | Italian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| API | explain what it is in Italian | Where the source `<define>`s it, explain the concept in Italian ("un'API, cioè un modo per far comunicare due programmi tra loro"), not just gloss the acronym. Feminine: _l'API_. |
| framework | _struttura di sviluppo riutilizzabile_ | Where the source `<define>`s it, explain it means a reusable _framework_, then use the English word freely. Masculine: _il framework_. |
| CLI (the concept) | _interfaccia a riga di comando_ | Where the source `<define>`s it, explain CLI as _interfaccia a riga di comando_ (command-line interface). |
| canvas (graphics exercises) | _area di disegno_ | The drawing surface in creative-coding exercises. Where the source `<define>`s it, explain it as the _area di disegno_ (the `canvas` element), then use _canvas_. Where the source does not `<define>` it (exercise tasks, describers, hints), never leave a bare _canvas_: use _area di disegno_. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| `move()` (exercise function) | _muovi_ | Gloss the command with the imperative _muovi_, matching the command's behaviour. Never the reflexive infinitive _muoversi_, which describes the character moving itself rather than instructing it. The same imperative pattern applies to any other exercise function glossed this way. |

## Brackets

Naming convention and worked example are in `guide.md`.

| Glyph | Italian | Notes |
|-------|---------|-------|
| `()` | parentesi tonde | Default bracket word when unqualified: plain _parentesi_. |
| `[]` | parentesi quadre | |
| `{}` | parentesi graffe | |
| `<>` | parentesi angolari | |
