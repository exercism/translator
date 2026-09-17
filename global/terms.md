# Canonical term list

A language-agnostic catalogue of the English terms worth *checking* when building or
reviewing a glossary. It never contains a translation. Target-language decisions live in
`languages/<lang>/glossary.md` and go through that file's normal agreement gate (see
`global/workflow.md`). This file is an input to that process, not a replacement for it.

**A row here does not mean every language needs a glossary entry for it.** It means the
term is worth a moment's thought in each language, and nothing more. Whether it earns a
row is that language's call, answered by the test in "Proposed glossary delta" in `global/pass-mechanics.md`: is
there a decision to make here, or one obvious rendering? The answer differs by language,
and it is supposed to. A word with two live candidates in Hungarian may have exactly one in
Spanish, in which case Hungarian gets a row and Spanish does not. Do not work backwards
from this list to a target row count, and never add a row to a glossary because the term
appears here.

## Why this exists

Before this file, each `/bootstrap-language` pass rediscovered the vocabulary from scratch
by grepping the English source content. That work is real and worth doing once, not every
time. This file is the accumulated result: a bootstrap reads it instead of re-mining the
source, then decides, term by term, which ones its language actually has a question about.

## How this file changes

Unlike `languages/<lang>/glossary.md`, adding a row here does **not** commit any language
to a translation, so it does not need the same agreement gate. A governance pass (a
bootstrap, a forum-feedback action, a hand edit) that finds a load-bearing English term
missing from this list should add it directly, in the right category, and mention the
addition in its report so the owner is aware. What still needs a gate is a language
*deciding* a rendering for a term, which happens in that language's `glossary.md` as always.

**A translation pass never opens or edits this file.** It has no use for a catalogue of
English terms (it needs its own language's glossary), and dozens of fanned-out workers
appending to one file corrupts it. A translation worker that thinks a term is missing here
says so in its report, and whoever reviews the report adds the row.

## Core / brand voice terms

General vocabulary about the platform and the craft of programming, distinct from CS
jargon.

| Term | Notes |
|------|-------|
| programming / coding | |
| developer | |
| streak | Daily-use-streak, as in the learning-platform sense. |
| tech / tech industry | |
| pitfall | |
| computer | The machine itself. Some languages have an everyday native word competing with the English borrowing, and mixing the two across pages reads badly, so the choice needs to be deliberate. |
| pattern (a recurring shape you reuse) | The "this is the pattern you'll use again and again" framing on concept pages. Watch for a candidate that collides with the language's rendering of "mental model". |
| ones and zeros | The binary framing used across intro concept pages ("turns it into the ones and zeros the computer understands"). Some languages have no natural plural for "one", so whether this is spelled out or written as digits is a per-language decision. |
| syntax | The written shape of code ("it takes a while to get used to the syntax"; "the square bracket syntax"). Surfaced on the string-iteration and string-indexing concept pages; languages may prefer a friendlier word than the technical borrowing. |

## Values & data types

| Term | Notes |
|------|-------|
| value | |
| number | |
| integer | |
| float / decimal | |
| character | A single text character (not "sign/mark"). |
| character (game/maze figure) | The on-screen figure the learner controls in maze-style exercises. Keep distinct from the text-character sense above; some languages will want different words. The maze exercises also call the same figure "the little person"; whether a language keeps two words or collapses them to one is its own call. |
| true / false | The Boolean literals, as prose. |
| array / list | Exercise prose sometimes says "list" informally for the same concept as "array"; treat as one term. |
| dictionary | |
| element | |
| index | |
| position (in a string/array) | The beginner-facing word used before/alongside "index" (e.g. the string-indexing concept page teaches "position starts at zero"). Keep distinct from, and consistent with, "index". |
| letter (of a string) | A single letter of a string, taught alongside "character"; some languages distinguish "letter" from "character". |
| type (short form of "data type", in prose) | The bare word "type" used for "data type" in running prose. |
| key (dictionary key) | The key on its own; see also "key-value pair". |
| key-value pair | The key itself is usually an ordinary word once introduced. |
| entry (dictionary entry) | One key-value entry of a dictionary. |
| constant | A named value that does not change. |
| identifier | The name of a variable, function, etc. |
| template literal | A string built with embedded expressions (JS backtick strings). |
| string | Candidate for "keep in English" (see below); still a core term every language must decide on. |
| Boolean | Candidate for "keep in English" (see below); still a core term every language must decide on. |
| data type | The general concept ("string is a data type"), distinct from any specific type name. |
| data structure | The general concept ("a dictionary is a data structure"), distinct from "data type"; used when introducing arrays and dictionaries. |
| random number | Introduced on the random concept page (`Math.randomInt`); "random" also appears adjectivally ("random position"). |
| compound data type | A data type containing multiple values (introduced on the arrays concept page). Keep distinct from plain "data type". |

## Functions & control flow

| Term | Notes |
|------|-------|
| if statement | |
| condition | |
| comparison | |
| expression | |
| operator | |
| NOT operator / logical negation | |
| bang (the `!` character) | Informal name for the exclamation mark in code, used conversationally on the logical-not concept page ("as our American friends call it"). Each language must decide whether to keep the English slang with a gloss or use a local rendering. |
| ampersand (`&`) | The glyph name, needed when explaining `&&` on the logical-and concept page. |
| bar (the `|` character) | The glyph name, needed when explaining `||` on the logical-or concept page ("these two bars next to each other"). |
| and / or (logical operators, in prose) | How prose names the `&&`/`||` concepts ("each side of the and/or needs to be a complete comparison"). The glyph names are listed separately. |
| statement (executable) | The imperative sense: a line of code that does something and gets executed. Keep distinct from "operator" and from the logical-claim sense below. |
| statement (logical claim) | The proposition sense: a claim that is true or false. |
| function | |
| to call (a function) | |
| to define (a function) | |
| parameter | The declaration-site name. |
| argument | The call-site value. |
| input (to a function) | |
| output | |
| to return (a value) | The verb. |
| return value | The noun. Keep distinct from the verb above. |
| to declare / declaration | Introducing a name (variable/function) into scope. |
| initializer | The starting value given at declaration. |
| caller | The code that calls a function. |
| built-in | A built-in (language- or platform-provided) function or value. |
| function body | The block of statements inside a function. |
| placeholder | A slot in a string template that gets filled with a value. |
| to update (a variable / dictionary) | Reassigning or changing a stored value. |
| else clause / branch | The `else` part of a conditional. |
| equal sign | The `=` glyph name; needed when explaining assignment and `===` comparison. |
| backtick | The backtick character used for JS template-literal strings; candidate for "keep in English." |
| brackets (the two after a function name) | The `()` pair written after a function name to call it ("write its name and then those two brackets"). Introduced on the using-functions concept page; note that many languages distinguish round brackets from square ones, so the rendering usually has to say which. |
| pure function | A function without side effects. |
| single responsibility | The principle that a function should do one thing; used when teaching function composition. |

## Loops, state & program flow

| Term | Notes |
|------|-------|
| keyword | |
| interpreter | **The one who interprets: a person doing a job, not a piece of software.** On concept pages Jiki *is* the interpreter ("In this course, your interpreter is Jiki... It's his job to interpret the code that you write"; an image alt calls him "the friendly interpreter who will guide you through this course"). The requirement is therefore a word that can describe a **person** in that role. Do not reach for the language's technical CS term for an interpreter *program* when that word carries a device or program morpheme (a machine/device suffix, or a word that literally begins with "program"): it names a tool, so it cannot name Jiki, and several passes have got this wrong. Introduced on the using-functions concept page. |
| instruction (given to Jiki) | A single thing the learner tells Jiki to do ("giving the interpreter the right instructions"). Used heavily on the using-functions concept page alongside the board metaphor; keep it an everyday word, not a formal/legal-register one. |
| mental model | The picture-in-your-head framing used heavily on the using-functions concept page ("a little man living in the computer"). |
| (programming) language | The language the learner writes code in, and also the "language a computer understands" framing on the using-functions concept page. Some languages have an ordinary native word that beginners already know while others reach for the English borrowing, and mixing the two inside one page reads badly, so the choice needs to be deliberate. |
| variable | |
| assignment | The noun. |
| to assign | The verb. |
| code block | Keep distinct from "scope" below; a real community glossary submission once collided the two. |
| error | |
| exception | The catchable-error-object sense, distinct from "error" as a general term. Surfaced during Serbian bootstrap research (Petlja/Novi Sad course material treats it as a distinct term, "izuzetak"). |
| nested | e.g. nested loop. |
| inner loop / outer loop | Naming the two loops of a nested pair. |
| loop variable | The variable a loop iterates with. |
| indentation | The leading whitespace that shows block structure. |
| comment (code comment) | A `//` line the interpreter ignores; introduced on the function-inputs concept page as "private notes just for you". |
| iteration | |
| to run / execute (code) | |
| loop | |
| for loop | Keep the `for` keyword in code font; translate only "loop." |
| while loop | As above, with `while`. |
| for-of loop | As above, with `for-of`. |
| loop body | |
| break (loop control) | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| increment | |
| modulo / remainder operator | The `%` operator. |
| concatenation / to concatenate | Joining strings. |
| toggle | |
| state / stateful | |
| scope | Keep distinct from "code block" above. |
| class | |
| method | |
| property | |
| object | |
| encapsulation | The OOP concept of bundling data with the methods that operate on it and hiding internals. Surfaced during Serbian bootstrap research (Novi Sad/Petlja course material renders it with a concrete "cocooned data" metaphor). |

## Tooling & engineering

| Term | Notes |
|------|-------|
| workflow | Distinct from "Platform & curriculum vocabulary" below; this is the software-engineering sense (a sequence of dev tasks), not a curriculum structure. |
| auth (authentication / authorization) | Pick by meaning; the two concepts may render differently. |
| deploy | |
| tool / tooling | |
| module | |
| algorithm | |
| edge case | |
| backwards compatibility | |
| API | Candidate for "keep in English"; a beginner-facing first use should still explain the concept, not just gloss the acronym. |
| framework | Candidate for "keep in English." |
| CLI (the concept) | Candidate for "keep in English." |
| component | Candidate for "keep in English." |
| AI | Candidate for "keep in English"; owner may prefer the English acronym over a local purist form. |
| LLM | Candidate for "keep in English." |

## Colors & graphics

Surfaced from the colors concept page and the drawing exercises.

| Term | Notes |
|------|-------|
| hue | The 0-360 color-wheel position in HSL. |
| saturation | How vivid the color is (0-100 in HSL). |
| lightness | How bright the color is (0-100 in HSL). Keep distinct from "brightness" as a casual word. |
| color wheel | The circular arrangement of hues; explains why hue runs to 360. |
| slider (UI control) | Used as a mental model for saturation/lightness. |
| shade (of a color) | Casual sense ("the shade of color you want"); watch for collision with "hue" in languages where both would render the same. |
| frame (animation) | One frame of an animation in the drawing/animation exercises. |
| horizontal radius / vertical radius | An ellipse's `radiusX`/`radiusY`. The English source is inconsistent here: the instructions/function description say "horizontal radius"/"vertical radius", but the describer catalog independently says "radial width"/"radial height" for the same two values (a source bug, being fixed separately). Each language should pick one consistent rendering for both, since translating the two English phrasings independently risks landing on two different target-language terms for what is meant to be the same thing. |

## Platform & curriculum vocabulary

Terms about the Jiki platform and its curriculum structure, distinct from general CS
jargon. Surfaced from blog posts and articles, not concept/exercise pages.

| Term | Notes |
|------|-------|
| feature (platform capability) | Watch for collision with "function" in languages where the two would otherwise render the same; keep them distinct. |
| concept (learning unit) | A Jiki concept page: one teachable unit (the Concept Library). Distinct from the everyday word "concept". |
| challenge (platform feature) | A named platform feature; keep distinct from the everyday word. |
| lesson | |
| exercise | |
| task (within an exercise) | A sub-step of an exercise; distinct from the exercise itself. |
| scenario | Jiki-specific: a structured variant within an exercise. |
| curriculum | |
| course | The whole Jiki course the learner is taking ("In this course, your interpreter is Jiki"); introduced on the using-functions concept page. Keep distinct from "lesson" and "curriculum". |
| level | The curriculum's structural unit. |
| milestone | A progression checkpoint. |
| pathway | A structured learning sequence; near-synonym of "track." |
| bootcamp | Jiki's predecessor intensive program; also a general term. |
| syllabus | |
| mentor / mentoring | |
| track (curriculum path) | |
| tutorial | |
| solution (learner's submission) | |
| canvas (graphics exercises) | The drawing surface in the creative-coding exercises. |
| foot-gun | A feature intentionally excluded because it's an easy way to shoot yourself in the foot. Idiomatic; may not have a clean equivalent in every language, in which case use a descriptive phrase rather than forcing a fixed term. |

## Exercise scenario vocabulary

Words that belong to an exercise's *story* rather than to programming. They recur across the
exercise set, so a language that renders one differently on each exercise reads as though the
exercises were written by different people. Mostly ordinary nouns, so many languages will have
one obvious rendering and no row; they earn a row where the everyday word is contested, where
the register is easy to get wrong, or where the obvious cognate is a false friend.

| Term | Notes |
|------|-------|
| maze | The maze the learner's character navigates. Watch the spelling: several languages have a Croatian/Serbian-style variant pair here. |
| dead end (maze) | A corridor that goes nowhere. Many languages only have a "cul-de-sac" street word, which may need adapting for a corridor. |
| bouncer | The doorman at a nightclub who decides who gets in. A register trap: the literal "one who throws people out", the licensed "security guard", and the "steward" are usually three different words, and the one people actually say is often not the one that carries "decides who gets in". |
| dress code | The nightclub-door exercise's rules of entry. |
| ballgown / tuxedo / suit / dress / denim | The clothing values in the bouncer exercises. The English values stay as-is in code; these are the prose renderings. |
| traffic light (the whole device) | Keep distinct from one coloured lamp of it, below. |
| light (one coloured lamp of a traffic light) | Some languages must distinguish the emitted signal from the physical lamp. Also check which colour word the language uses for the middle light: not every language calls it "yellow". |
| alien (creature) | A being from another planet. False-friend risk: the word for "alien" in the immigration sense means a foreigner, which is wrong here. |
| skyscraper | |
| skyline / cityscape | The city's outline against the sky, in the drawing exercises. Several languages have no one-word equivalent, in which case use a descriptive phrase rather than coining one. |
| pangram | A sentence containing every letter of the alphabet. Check which "alphabet" word the language uses, where it has more than one. |

## Jiki physical metaphors

Load-bearing teaching terms, not decoration. Every language must render these
deliberately; never fall back to dry technical language. See `content-types/concept-pages.md`.

| Term | Notes |
|------|-------|
| box (value container) | |
| chain (array metaphor) | |
| input slot | The opening a function's input goes into. |
| return chute | The opening a function's output comes out of. |
| machine (function metaphor) | A function modelled as a machine, with an input slot and a return chute. |
| mini-Jiki | The small Jiki character who works inside a function machine (takes inputs out of the slot, puts them into boxes, uses the shelves). A proper name; decide how (or whether) to adapt the "mini-" prefix per language. |
| coin (number metaphor) | Numbers are coins Jiki drops into a machine's input slots. |
| label (on a box/machine) | The written label on a box or machine in the metaphor. |
| crank (machine crank) | Jiki pulls a machine's crank to turn it on (run the function). |
| piece of paper (string metaphor) | Strings are pieces of paper Jiki writes text on (introduced on the strings concept page). |
| shelves (storage) | The shelves where variables and functions are stored. |
| warehouse (Jiki's warehouse) | The place where Jiki hangs out and keeps his machine shelf (introduced on the using-functions concept page). |
| board / whiteboard | **One object, one word.** The same board serves both uses on concept pages: it is what the learner puts instructions on for Jiki to come along and follow (using-functions concept page), and it is where a function keeps its own instructions and notes. Same visual metaphor, so it must be the same word everywhere in a language; never invent two words for it. ("Instruction board" is not a phrase the course actually uses; it is only a description.) Pick the everyday word for a writing board in a room, and watch for a candidate that already means "array" in the language. |
| workshop (Jiki's workshop) | The room where Jiki works; the shelves live in it (used on the scope concept page). |
| spiral notebook page (dictionary metaphor) | A dictionary modelled as one sheet of a spiral notepad: keys down the left, values on the right. |
| mini Jiki | The small Jiki imagined living inside each function machine, doing the work when the function runs. |

## Website & app UI

Surfaced from the website copy and app-interface strings (subscription, account, and
product-UI vocabulary), distinct from CS jargon and curriculum structure.

| Term | Notes |
|------|-------|
| plan (subscription tier) | A paid tier; enables "{tier} plan". |
| subscription | |
| to unlock | Unlocking gated content or features. |
| badge | A small earned marker. |
| achievements | |
| certificate | Completion certificate. |
| account | The user's account. |
| dashboard | The logged-in landing/overview screen. |
| session (auth) | An authenticated login session; keep distinct from "auth". |
| support (customer) | Customer support. |
| cookies | Browser cookies. |
| debugging | The prose activity of debugging; distinct from the "Debug" keyword/token. |
| breakpoint | A debugger breakpoint. |
| Run Code (button) | The on-screen button the exercise instructions tell the learner to press. Distinct from the bare `Code` UI token in "Never translated" below: this is a sentence-shaped label and most languages translate it. It must match between exercise instructions and the website-copy catalog, or the instructions name a button that is not on screen. |
| widget | An embeddable UI component; candidate for "keep in English." |
| chat | The chat feature/UI; candidate for "keep in English." |

## Never translated (language-agnostic)

These are never rendered into the target language, in any glossary. Listed here so a
bootstrap doesn't need to rediscover this; see `global/rules.md` for the underlying rule.

- JavaScript, Python, React (product/language names)
- RGB, HSL (color model names; the expansion of each acronym is explained in the target language, but the acronyms stay English)
- `Debug`, `Test`, `Code`, `Bug`, `Frontend`, `Backend` **as UI labels and code tokens**.
  This covers the literal string on a button, a tab, or in code. It does **not** cover the
  ordinary noun in running prose: "the code you write" is prose, and follows the
  ordinary-word principle in `global/voice.md` like any other word. Several languages
  correctly write it in their own script (Arabic `الكود`, Hindi `कोड`, Traditional Chinese
  `程式碼`, Swahili `msimbo`) while keeping the capitalised token English. `Bug` is the
  interesting case in the other direction: some languages keep it English in prose too, not
  because of this list but because it genuinely is the ordinary word there.
- Variable and function names
- CLI commands (e.g. `npm install`, `git commit`)
- Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...)
