# European Spanish (es-ES) glossary

The agreed term list for what is distinct about European Spanish. Read `../es/glossary.md`
first for the terms shared with Latin American Spanish (`es-419`); this file holds only
the terms that diverge between the two locales, plus terms that exist only for European
Spanish. A term lives in **exactly one** glossary file, this one or the family's, **never
both**. A locale's effective glossary is `../es/glossary.md`'s rows plus this file's rows,
read together. Why each term was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| developer | desarrollador/a | es-ES | _Programador/a_ is an accepted synonym; do not mix both in one document. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es-ES/en)" column is `es-ES` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| float / decimal | número decimal / número de coma flotante | es-ES | Use _decimal_ for the simple beginner sense, _de coma flotante_ (Spain, not _punto flotante_) when the floating-point nature matters. |
| identifier | nombre / identificador | es-ES | In beginner-facing prose the ordinary word is _nombre_ ("escribe su nombre"). Use _identificador_ only where the source itself says "identifier" and the formal sense is meant. |

### Functions & control flow

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| statement (executable) | instrucción | es-ES | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _operador_. Shares the word with "instruction (given to Jiki)" below, which is the same idea in the metaphor. |
| statement (logical claim) | afirmación | es-ES | The proposition sense: a claim that is true or false; also a test assertion. Pick by meaning, not by the English word. _Enunciado_ is an accepted alternative in a more formal-logic register. |
| return value | valor devuelto | es-ES | Noun form; _valor de retorno_ is an accepted alternative. Distinct from the verb "to return". |
| brackets (the two after a function name) | paréntesis | es-ES | English "brackets" is unspecific; Spanish always names the type. The pair written after a function name is _(un par de) paréntesis_ (`()`), never _corchetes_. See § Brackets below. |

### Loops, state & program flow

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| break (loop control) | salir (del bucle) | es-ES | The keyword `break` in code stays English; this is the prose verb for the concept. _Romper el bucle_ also natural. |
| interpreter | intérprete | es-ES | A **person noun**: someone who interprets, exactly as a human interpreter of languages, because Jiki *is* the interpreter ("tu intérprete es Jiki", "su trabajo es interpretar el código"). Never _interpretador_ or any program/device-flavoured coinage: those name a piece of software and cannot name Jiki. |
| instruction (given to Jiki) | instrucción | es-ES | Everyday word, not a formal or legal register. Plural _instrucciones_. Verb: _darle instrucciones a Jiki_. |
| (programming) language | lenguaje (de programación) | es-ES | _Lenguaje_, never _idioma_, for a programming language and for "a language a computer understands". Say _lenguaje de programación_ on the explicit mention and plain _lenguaje_ thereafter; do not mix in the English word. |

### Tooling & engineering

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| backwards compatibility | retrocompatibilidad | es-ES | _Compatibilidad con versiones anteriores_ is the fuller form. |

### Platform & curriculum vocabulary

| English | es-ES | Use (es-ES/en) | Notes |
|---------|-------|-----------------|-------|
| pathway | itinerario | es-ES | _Itinerario formativo_ is the fuller form. Near-synonym of _track_. |
| track (curriculum path) | ruta (de aprendizaje) | es-ES | |
| course | curso | es-ES | The whole Jiki course ("en este curso, tu intérprete es Jiki"). Distinct from _lección_ (lesson) and _plan de estudios_ (curriculum). |

## Keep in English

These stay in English in prose, with the Spanish gloss to use for each.

| Term | Spanish gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _cadena de caracteres_ | Exception: in the string concept, where the source defines it, use _cadena de caracteres_, then _string_ throughout. |
| Boolean | _valor booleano_ | Exception: where the source defines it, explain it means _valor booleano_, then use _Boolean_. |
| array | _matriz_ | NOT _arreglo_ (Latin American). Gender: _el array_, _los arrays_. Exercise prose also says "list" for the same idea; render both with _array_, do not introduce _lista_. |
| scope | _ámbito_ | Exception: in the scope concept, where the source defines it, use _ámbito_, then _scope_ throughout. This is the locale's single decision on `scope`: unlike es-419, the English word stays primary in prose. |
| framework | _marco de trabajo_ | Kept as a loanword. Where the source defines it, explain it means a reusable _marco de trabajo_. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | es-ES rendering | Notes |
|-------------------|------------------|-------|
| input slot | ranura de entrada | |
| machine (function metaphor) | máquina | Gender: _la máquina_. Plural _máquinas_; diminutive _pequeñas máquinas_ for "little machines". |
| warehouse (Jiki's warehouse) | almacén | Gender: _el almacén_. The place Jiki hangs out and keeps his machines. Not _bodega_ (a cellar or wine store in Spain). |
| shelves (storage) | estantería | The shelving unit as a whole is _la estantería_; one individual shelf is _un estante_. "on the shelf" = _en la estantería_. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar la manivela_. Not _palanca_ (a lever). |
| board / whiteboard | pizarra | **One word for both uses**: the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own instructions and notes on. Not _tablero_ (a game board or a dashboard) and not _tablón_ (a noticeboard). No collision with `array`, which stays English in this locale. |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show
the glyph in a code tag immediately after: _corchetes (`[]`)_. See `../es/glossary.md` §
Brackets for the shared glyph words (`()`, `[]`, `{}`); this locale's `<>` rendering
diverges from es-419's and is given below.

| Glyph | es-ES | Notes |
|-------|-------|-------|
| `<>` | corchetes angulares | Or name the signs directly (_signos de menor y mayor que_) when clearer. |

Example: _para llamar a una función, escribe su nombre y, a continuación, un par de
paréntesis (`()`)._
