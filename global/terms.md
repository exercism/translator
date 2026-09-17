# Canonical term list

A language-agnostic catalogue of the English terms worth *checking* when building or
reviewing a glossary. It never contains a translation. Target-language decisions live in
`languages/<lang>/glossary.md` and go through that file's normal agreement gate (see
`global/workflow.md`). This file is an input to that process, not a replacement for it.

**A row here does not mean every language needs a glossary entry for it.** It means the
term is worth a moment's thought in each language, and nothing more. Whether it earns a
row is that language's call, answered by one test: is there a decision to make here, or one
obvious rendering? The answer differs by language,
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

**A translation pass never opens or edits this file**, and it is never sent to the model: a
pass has no use for a catalogue of English terms (it needs its own language's glossary).

## Core / brand voice terms

General vocabulary about the platform and the craft of programming, distinct from CS
jargon.

| Term | Notes |
|------|-------|
| programming / coding | |
| developer | |
| tech / tech industry | |
| pitfall | |
| computer | The machine itself. Some languages have an everyday native word competing with the English borrowing, and mixing the two across pages reads badly, so the choice needs to be deliberate. |
| pattern (a recurring shape you reuse) | Watch for a candidate that collides with the language's rendering of "mental model". |
| syntax | The written shape of code ("it takes a while to get used to the syntax"). Languages may prefer a friendlier word than the technical borrowing. |
| idiomatic | Exercism's stated aim is fluency: writing code the way the language's own community writes it. "Idiomatic Ruby" recurs across track docs, concept pages, analyzer comments and mentoring copy, and many languages have no settled word for it. |
| fluency / fluent (in a programming language) | The site's core metaphor for what it teaches. Decide whether the natural-language word carries over. |

## Values & data types

| Term | Notes |
|------|-------|
| value | |
| number | |
| integer | |
| float / decimal | |
| character | A single text character (not "sign/mark"). |
| true / false | The Boolean literals, as prose. |
| array / list | Exercise prose sometimes says "list" informally for the same concept as "array"; treat as one term. |
| dictionary | |
| element | |
| index | |
| position (in a string/array) | The beginner-facing word used before/alongside "index". Keep distinct from, and consistent with, "index". |
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
| random number | "random" also appears adjectivally ("random position"). |
| compound data type | A data type containing multiple values. Keep distinct from plain "data type". |

## Functions & control flow

| Term | Notes |
|------|-------|
| if statement | |
| condition | |
| comparison | |
| expression | |
| operator | |
| NOT operator / logical negation | |
| bang (the `!` character) | Informal name for the exclamation mark in code. Each language must decide whether to keep the English slang or use a local rendering. |
| ampersand (`&`) | The glyph name, needed when explaining `&&`. |
| bar (the `|` character) | The glyph name, needed when explaining `||`. |
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
| brackets (the two after a function name) | The `()` pair written after a function name to call it. Many languages distinguish round brackets from square ones, so the rendering usually has to say which. |
| pure function | A function without side effects. |
| single responsibility | The principle that a function should do one thing; used when teaching function composition. |

## Loops, state & program flow

| Term | Notes |
|------|-------|
| keyword | |
| interpreter | The program that runs code. Keep distinct from "compiler", and from a human interpreter of spoken language where the language uses one word for both. |
| mental model | |
| (programming) language | Some languages have an ordinary native word that beginners already know while others reach for the English borrowing, and mixing the two inside one page reads badly, so the choice needs to be deliberate. |
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
| comment (code comment) | Keep distinct from a comment on a community solution, where the language would otherwise use one word. |
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

Colour vocabulary recurs in a handful of exercises (resistor colours, and any drawing exercise a track has).

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

## Exercism product vocabulary

Exercism's own words: the nouns of the product, which appear in the website's two UI
catalogs hundreds of times each and then again in the docs, the blog and every track. They
are the rows most worth agreeing early, because a wrong one is wrong on every page, and
because the same word must be used by the button and by the docs page that tells someone to
press it. Mined from the website's English catalogs; the counts that prompted each row are
in the commit that added this section.

| Term | Notes |
|------|-------|
| track | A programming language's course on Exercism ("the Ruby track", "join a track"). The single most frequent product noun. Many languages will be choosing between a "course" word and a "path" word; whichever it is, it must survive in "track maintainer", "track docs" and "across all tracks". |
| to join (a track) | The verb on the button. Check it against the noun chosen for "track". |
| exercise | |
| concept exercise / learning exercise | An exercise that teaches one concept, inside the syllabus. The site's UI says "learning exercise"; the docs and the repos say "concept exercise". One rendering for both, unless the language has a reason. |
| practice exercise | An exercise for practising, outside the syllabus. The pair with the row above must read as a pair. |
| concept | One teachable idea in a track's syllabus. Distinct from the everyday word "concept". |
| syllabus | A track's tree of concepts. |
| learning mode / practice mode | The two ways of doing a track: following the syllabus, with exercises unlocking in order, or everything open at once. A toggle in the UI, so the two names are read side by side. |
| locked / unlocked / available / in progress / completed | An exercise's states, shown as labels on every exercise card. They must agree grammatically with the word chosen for "exercise". |
| to unlock | What completing a concept exercise does to the next ones. |
| solution | What a student has written for an exercise. |
| iteration | One submitted version of a solution ("Iteration 3"). Collides with the programming sense of "iteration" (one pass of a loop) in most languages: decide whether one word serves both. |
| to submit | Sending an iteration, from the editor or the CLI. |
| to publish (a solution) / published | Making a solution visible to the community. Distinct from submitting it. |
| community solutions | Other people's published solutions to the same exercise. |
| to star (a solution) / stars | The like-style marker on a community solution. |
| comment | On a community solution. Distinct from a mentoring discussion post. |
| mentor / mentoring | A volunteer who reviews a student's solution, and the activity. Never "teacher" or "tutor" where the language has a closer word: mentors are peers. |
| student | The person being mentored. The site uses it only in that relationship. |
| mentoring request | A student asking for a solution to be looked at. |
| mentoring session / discussion | The conversation between one mentor and one student about one solution. The UI uses both words for the same thing. |
| code review | What a mentor gives; used interchangeably with a mentoring session in newer copy. |
| mentoring queue | Where mentors pick requests up. |
| testimonial | What a student leaves a mentor at the end of a discussion. |
| supermentor | A mentor with extra rights earned through volume and satisfaction. A coined word. |
| automated feedback | Feedback produced by tooling rather than a person. The umbrella for the next three rows. |
| analyzer | The per-track tool that inspects a solution and produces comments. A product term and a repo name; many languages keep a cognate. |
| representer | The per-track tool that normalises a solution so identical approaches can share feedback. A coined word with no everyday equivalent anywhere: a candidate for "keep in English". |
| representation | What a representer produces, and what a mentor writes feedback against. |
| test runner | The per-track tool that runs the tests in the online editor. |
| tests pass / tests fail, passed / failed | The result labels. |
| online editor / the editor | The in-browser editor. |
| CLI | The `exercism` command-line tool, as a product name ("the Exercism CLI"). The acronym itself is covered by the acronym principle in `global/voice.md`. |
| reputation | The points earned by contributing, mentoring and publishing. Not a judgement of character: watch for a candidate that reads as one. |
| badge | A small earned marker. |
| trophy | A per-track achievement, shown in a track's trophy cabinet. Distinct from a badge. |
| journey | A user's own history page: solutions, reputation, badges. A metaphor, and the page's title. |
| dashboard | The logged-in landing page. |
| contributor / contributing | Someone who helps build Exercism, and the section of the site for it. |
| maintainer | Someone responsible for a track or a tool. |
| Insiders | The supporters' programme, and a supporter's status. A proper name, capitalised: decide whether it is kept in English (most likely) and how it inflects. |
| donation / to donate / donor | Exercism is a not-for-profit and says so often. |
| perks | What Insiders and partners offer. |
| partner | A sponsoring organisation. |
| flair | The small marker shown beside a username (Insider, staff, maintainer). |
| Dig Deeper | The tab on an exercise holding approaches and articles. A UI label: translated. |
| approach (to an exercise) | A written-up way of solving an exercise, under Dig Deeper. |
| article (on an exercise) | Longer write-ups under Dig Deeper. |
| deep dive | A video about one exercise. |
| challenge (platform feature) | A named, time-boxed community event (`#12in23`, `#48in24`). The hashtags themselves are never translated. |
| cohort | A group doing a time-boxed course together. |
| community | The forum, Discord and the people. Also a top-level section of the site. |
| notification | |
| favorites | Saved community solutions. |
| difficulty (easy / medium / hard) | Exercise difficulty labels. |
| blurb | Not shown to users; appears only in contributor docs. |

## Website UI

Generic product-UI vocabulary, distinct from Exercism's own nouns above.

| Term | Notes |
|------|-------|
| account | The user's account. |
| settings | |
| profile | A user's public page. |
| handle | A username. The site says "handle". |
| to unlock | See the product section: it is a product verb here too. |
| session (auth) | An authenticated login session; keep distinct from a mentoring session. |
| support | Customer support. |
| cookies | Browser cookies. |
| debugging | The prose activity of debugging. |
| theme / dark mode | |

## Never translated (language-agnostic)

These are never rendered into the target language, in any glossary. Listed here so a
bootstrap doesn't need to rediscover this; see `global/rules.md` for the underlying rule.

- Ruby, JavaScript, Python, C# (programming languages' names, which are also most tracks' names)
- GitHub, Discord, Stripe, PayPal (third parties)
- Hashtags and campaign names (`#12in23`, `#48in24`)
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
- Programming keywords (`def`, `function`, `if`, `for`, ...)
- Strings an exercise's tests compare against ("Test-compared strings" in `global/rules.md`)
