# Latin American Spanish (es-419) glossary

The agreed term list for what is distinct about Latin American Spanish. Read
`../es/glossary.md` first for the terms shared with European Spanish (`es-ES`); this file
holds only the terms that diverge between the two locales, plus terms that exist only for
Latin American Spanish. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../es/glossary.md`'s rows plus
this file's rows, read together. Why each term was chosen, and who decided it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| tech / tech industry | tech / el sector tech | es-419 | "el sector tech" or "el mundo tech" for the industry sense. |
| pitfall | trampa | es-419 | Stands alone. "Error común" also natural in a fuller phrase. |
| Ewww! / Yuck! (disgust interjection) | ¡Guácala! | es-419 | The es-419 interjection for something gross (e.g. the maze poop message). Not the Spain _¡Puaj!_. |

## Localize (use the Spanish term)

These are terms where the Spanish is used in prose, so the "Use (es-419/en)" column is `es-419` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| float / decimal | número de punto flotante | es-419 | Use _punto flotante_ (the es-419 form, not the Spain "coma flotante"). Use _decimal_ when the floating-point nature does not matter. |
| element | elemento | es-419 | Array element = _elemento del array_ (_array_ stays English in prose; see § Keep in English). |
| index | índice | es-419 | Where the source says "position" (Jiki's usual word), use _posición_; both point at the same numeric place. |

### Functions & control flow

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| statement (executable) | sentencia | es-419 | The imperative sense: a line of code that does something and gets executed. Deliberately distinct from _operador_. |
| statement (logical claim) | afirmación | es-419 | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| brackets (the two after a function name) | paréntesis (`()`) | es-419 | The `()` pair written after a function name to call it: _escribes su nombre y después esos dos paréntesis_. Always name the type, never a bare "brackets"; see § Brackets for the other glyphs. |
| input (a value passed into a function) | argumento | es-419 | Jiki's usual word for a value you pass in ("give it four inputs", "the final input"). Always _argumento_, never _entrada_: _entrada_ pulls in a paired _salida_ (output) and so reads as a strict in/out direction, while _argumento_ is direction-neutral. Same rendering as the family glossary's `argument` row, deliberately: es-419 collapses Jiki's two English words onto one Spanish one. The _input slot_ metaphor is separate and stays _ranura_; see § Jiki physical metaphors. |

### Loops, state & program flow

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| break (loop control) | salir (del bucle) | es-419 | The keyword `break` in code stays English; this is the prose verb for the concept. "interrumpir el bucle" also natural. |
| scope | ámbito | es-419 | Deliberately distinct from _bloque de código_ (code block). Used as the ongoing Spanish term throughout, unlike es-ES; see that locale's glossary for the contrast. |
| interpreter | intérprete | es-419 | **A person doing a job, not a program.** Jiki _is_ the interpreter ("tu intérprete es Jiki", "su trabajo es interpretar el código"), so the word names a human role. Never _interpretador_ or _programa intérprete_, which name a piece of software. |
| instruction (given to Jiki) | instrucción | es-419 | Plural _instrucciones_. Not _instructivo_ (a document) and not _orden_ (a command given to a subordinate), which are the wrong register for Jiki. |
| (programming) language | lenguaje (de programación) | es-419 | Always _lenguaje_, never _idioma_: _idioma_ is only for human languages, so "un lenguaje que la computadora entiende" is the right form even where the source frames it as a language a computer understands. Drop _de programación_ once it is established. |

### Tooling & engineering

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| deploy (verb: to deploy) | desplegar / publicar | es-419 | _desplegar_ is the standard term; prefer _publicar_ in beginner-facing text where "go live" is the point. |
| backwards compatibility | compatibilidad con versiones anteriores | es-419 | "retrocompatibilidad" is a shorter accepted alternative. |

### Platform & curriculum vocabulary

| English | Spanish | Use (es-419/en) | Notes |
|---------|---------|------------------|-------|
| course | curso | es-419 | The whole Jiki course ("En este curso, tu intérprete es Jiki"). Distinct from _lección_ (lesson) and _plan de estudios_ (curriculum). |
| pathway | ruta de aprendizaje | es-419 | |
| track (curriculum path) | ruta | es-419 | Rendered the same as _pathway_; they are near-synonyms, do not introduce a second word. |
| canvas (graphics exercises) | lienzo | es-419 | The drawing surface in creative-coding exercises. |
| hue (colour control) | tono | es-419 | The H of the HSL colour controls in the drawing exercises. Not _matiz_. |
| lightness (colour control) | luminosidad | es-419 | The L of HSL. Not _brillo_, which names brightness rather than lightness, and not _claridad_. |
| saturation (colour control) | saturación | es-419 | The S of HSL. |
| character / little person (the figure on screen) | personaje | es-419 | The figure the learner moves around a maze or grid. Never _personajito_. Use _personaje chiquito_ only where the source marks the diminutive ("the little person"); plain _personaje_ everywhere else, including every "the character" in a describer or hint. Not the same word as `character` (a text character) in `../es/glossary.md`, which stays _carácter_; pick by meaning. |
| height (of a shape or box) | altura | es-419 | Always _la altura_, never _el alto_: a bare "alto" reads as the interjection _¡alto!_ (stop). Width stays _el ancho_, so a pair reads _el ancho y la altura_, _un ancho de X y una altura de Y_. |
| foot-gun | (descriptive, no fixed term) | es-419 | Idiomatic; render descriptively, e.g. "algo con lo que es fácil dispararte en el pie". Do not force a fixed term. |

## Keep in English

These stay in English in es-419 prose, with the Spanish gloss to use for each on `<define>`.

| Term | Spanish gloss (on `<define>`) | Notes |
|------|-------------------------------|-------|
| string | _cadena_ (or _cadena de caracteres_) | Exception: in the string concept itself, explain _cadena_ where the source `<define>`s it, then use _string_ throughout. |
| array | _arreglo_ | Exception: in the array concept itself, explain _arreglo_ where the source `<define>`s it, then use _array_. Exercise prose sometimes says "list" informally for the same concept; render it with the same _array_/_arreglo_ decision, do not introduce _lista_ as a separate term. |
| Boolean | _booleano_ | Exception: in the Boolean concept, explain _booleano_ where the source `<define>`s it, then use _Boolean_. |
| framework | (explain the concept in Spanish) | It is spelled the same in both languages, so there is no gloss to give: where the source `<define>`s it, say briefly what it is (a reusable structure you build on top of) instead of bracketing the English. See `../es/guide.md` § Term clarification. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Spanish rendering | Notes |
|------------------|-------------------|-------|
| input slot | ranura | The narrow slot you insert a coin into, like on a piggy bank. |
| machine (function metaphor) | máquina | The "machine" a function is modelled as, with its input slot and return chute. |
| shelves (where things are stored) | estantes | The shelves where variables and functions live; _estantería_ for the whole unit. |
| board / whiteboard | pizarrón | **One object, one word.** Both the board the learner puts instructions on for Jiki to follow and the board a function keeps its own instructions and notes on: same metaphor, so always the same word. Not the Spain _pizarra_. Never _tablero_, which is a panel or a game board rather than something you write instructions on. |
| warehouse (Jiki's warehouse) | almacén | Where Jiki hangs out and keeps his machine shelf. Not _bodega_, which is regionally marked: a corner shop in much of the Caribbean and Central America, a wine cellar elsewhere. |
| crank (machine crank) | manivela | The handle Jiki turns to power a machine up: _girar la manivela_. Not _palanca_ (a lever, the wrong motion). |

## Brackets

Default to plain **paréntesis**. When a specific bracket type matters, name it and show the
glyph in a code tag immediately after: _corchetes (`[]`)_. See `../es/glossary.md` §
Brackets for the shared glyph words (`()`, `[]`, `{}`); this locale's `<>` rendering
diverges from es-ES's and is given below.

| Glyph | Spanish | Notes |
|-------|---------|-------|
| `<>` | paréntesis angulares | "signos de menor y mayor" also understood. |

Example: _para llamar a una función, escribes su nombre y después esos dos paréntesis (`()`)._
