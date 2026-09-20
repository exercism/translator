# Hindi (hi) glossary

The agreed term list for Hindi. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`). See `guide.md` § "Register" for the three-way policy
this glossary applies, and § "Script convention" for why almost every row is Devanagari.

The **Gender** column is binding: Hindi verbs, adjectives and postpositions all agree with
a noun's gender, including for borrowed nouns, so a wrong gender is a grammatical error on
every sentence the term appears in. `m` = masculine, `f` = feminine, `m/f` = agrees with the
person referred to, `-` = not a noun.

## Core decisions

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| coding | कोडिंग | f | hi | Follow the source: render "programming" as प्रोग्रामिंग and "coding" as कोडिंग in the same document, exactly where the English uses each. |
| programming | प्रोग्रामिंग | f | hi | |
| code (the noun, in prose) | कोड | m | hi | Devanagari, not bare Latin. Distinct from the literal UI label / token `Code`, which stays English (see "Keep in English"). |
| developer | डेवलपर | m/f | hi | Agrees with the person: "एक डेवलपर ने लिखा" / "एक डेवलपर ने लिखी" as appropriate. |
| streak | स्ट्रीक | f | hi | |
| pitfall | आम गलती | f | hi | Literally "common mistake". |

## Localize (use the Hindi term)

These are used in Hindi prose, either as the agreed Devanagari spelling of a borrowed term
or as an ordinary Hindi word. They are Hindi-primary: used bare in prose, with the italic
English in brackets only where the source an explanation in the Englishs the term (see `guide.md` § "Term
clarification"). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| value | वैल्यू | f | hi | "वैल्यू रखी जाती है", "वैल्यू बदल जाती है". मान is the school-maths word for the same idea; we use वैल्यू for consistency with the other borrowed technical nouns. |
| number | संख्या | f | hi | Ordinary Hindi word; no borrowing. |
| integer | पूर्णांक | m | hi | Ordinary school-maths word. |
| float / decimal | दशमलव संख्या | f | hi | |
| character (in text) | अक्षर | m | hi | A written letter/character. Kept distinct from पात्र (the on-screen character) below. |
| true / false | सही / गलत | - | hi | Not capitalised in prose. Distinct from the literal code values `true`/`false`, which stay as-is in code. |
| Boolean | बूलियन | m | hi | The सही/गलत data type. |
| data type | डेटा टाइप | m | hi | |
| string | स्ट्रिंग | f | hi | |
| array / list | ऐरे | m | hi | The Devanagari spelling of "array"; सरणी is never used in real Hindi programming prose. Exercise prose sometimes says "list" informally for the same concept; treat as one term. |
| element | एलिमेंट | m | hi | An item inside an ऐरे. |
| index | इंडेक्स | m | hi | The position number of an element. |
| dictionary | डिक्शनरी | f | hi | The key-value data type. शब्दकोश is the everyday word behind the metaphor and can carry the explanation where the source gives one. |
| key-value pair | की-वैल्यू जोड़ा | m | hi | |
| template literal | टेम्पलेट लिटरल | m | hi | Where the source explains it: "एक तरह की स्ट्रिंग जिसमें एक्सप्रेशन इस्तेमाल कर सकते हैं". |

### Functions & control flow

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| function | फंक्शन | m | hi | फलन is not used in Hindi programming prose. Where the source explains the concept, tie it to the machine metaphor: "एक ऐसी मशीन जैसा कोड जो इनपुट लेकर आउटपुट देता है". The keyword `function` in code always stays English. |
| to define (a function) | बनाना | - | hi | "आप एक फंक्शन बनाते हैं". परिभाषित करना is the formal alternative; use it only where the source is being formal. |
| to call (a function) | कॉल करना | - | hi | "फंक्शन को कॉल करना". |
| parameter | पैरामीटर | m | hi | The declaration-site name: "फंक्शन बनाते समय दिया गया नाम". Kept distinct from आर्गुमेंट. |
| argument | आर्गुमेंट | m | hi | The call-site value: "फंक्शन को कॉल करते समय दी गई वास्तविक वैल्यू". Kept distinct from पैरामीटर. |
| input (to a function) | इनपुट | m | hi | The noun, for where a noun is needed (an explanation in the English, a heading, the इनपुट स्लॉट metaphor). In ordinary prose say what the फंक्शन does instead: "फंक्शन दो संख्याएँ लेता है", not "फंक्शन का इनपुट दो संख्याएँ हैं" (see `guide.md` § "Sentence structure"). |
| output | आउटपुट | m | hi | As इनपुट above; in prose, "फंक्शन जोड़ देता है" rather than "फंक्शन का आउटपुट जोड़ है". |
| to return (a value) | लौटाना | - | hi | "यह फंक्शन एक वैल्यू लौटाता है।" Transitive (लौटाना), never the intransitive लौटना or the redundant वापस लौटना. वापस देना is fine where the prose is leaning on the machine metaphor. **Never रिटर्न करना.** |
| return value | रिटर्न वैल्यू | f | hi | Noun form, for where a noun is needed. In prose prefer the verb: "जो वैल्यू यह फंक्शन लौटाता है". |
| pure function | प्योर फंक्शन | m | hi | Advanced term. |
| condition | शर्त | f | hi | Ordinary Hindi word; stands alone. |
| comparison | तुलना | f | hi | |
| if statement | `if` स्टेटमेंट | m | hi | The `if` keyword itself stays in code font; the surrounding noun is Devanagari. |
| statement (executable) | स्टेटमेंट | m | hi | The imperative sense: a line of code that does something. Kept distinct from दावा below. |
| statement (logical claim) | दावा | m | hi | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| expression | एक्सप्रेशन | m | hi | A piece of code that produces a वैल्यू. |
| operator | ऑपरेटर | m | hi | A sign used to calculate or compare. |
| brackets (the two after a function name) | ब्रैकेट | m | hi | The `()` pair, e.g. "उसका नाम लिखिए और उसके बाद वे दो ब्रैकेट लगाइए". Where round and square must be distinguished, say गोल ब्रैकेट (round) and चौकोर ब्रैकेट (square). |
| code block | कोड ब्लॉक | m | hi | Some lines of code that run together. |
| keyword | कीवर्ड | m | hi | A word of the language's own special vocabulary, such as `if` or `for`. |

### Loops, state & program flow

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| loop | लूप | m | hi | पुनरावृत्ति is not used. |
| for loop | `for` लूप | m | hi | Keep `for` in code font (a real keyword) + लूप. |
| while loop | `while` लूप | m | hi | As above, with `while`. |
| for-of loop | `for-of` लूप | m | hi | As above, with `for-of`. |
| loop body | लूप के अंदर का कोड | m | hi | |
| iteration | इटरेशन | m | hi | One round of a loop; where the source explains it, "लूप का एक चक्कर". |
| nested | नेस्टेड | - | hi | e.g. "नेस्टेड लूप". Where the source explains it, "एक के अंदर एक". |
| break (loop control) | `break` | - | hi | The keyword stays English in code; in prose, "लूप से बाहर निकलना". |
| variable | वेरिएबल (singular), वेरिएबलो (plural) | m | hi | चर is not used in Hindi programming prose. Where the source explains the concept, tie it to the box metaphor: "एक डिब्बा जिसमें वैल्यू रखी जाती है". Plural is वेरिएबलो, never the English-pluralized वेरिएबल्स. Confirmed by native-speaker review (see notes). |
| to assign | असाइन करना | - | hi | |
| assignment (noun) | असाइनमेंट | m | hi | Collides with the school sense of "homework"; prefer rephrasing with the verb ("वैल्यू असाइन करना") wherever the source allows it. |
| to run / execute (code) | चलाना | - | hi | रन करना is an accepted alternative. निष्पादित करना is the formal textbook verb; use it only where the source is being formal. |
| to display | प्रदर्शित करना | - | hi | Not "डिस्प्ले करना". दिखाना is fine in warmer, less formal prose. |
| to declare | घोषित करना | - | hi | Not "डिक्लेयर करना". |
| to store | संग्रहीत करना | - | hi | रखना is fine, and warmer, in ordinary prose. |
| increment | बढ़ाना | - | hi | इंक्रीमेंट is the technical alternative, glossed only where the English itself explains the term. |
| error | एरर | f | hi | **Feminine**, confirmed by real usage: "एक एरर मिलती है, जो कहती है...". Never "एरर मिलता है". |
| exception | एक्सेप्शन | m | hi | A special kind of एरर that code can catch. |
| state | स्थिति | f | hi | The information present in the code at a given moment. |
| toggle | टॉगल | m | hi | An on/off style change. |
| scope | स्कोप | m | hi | Where a वेरिएबल can be used. Kept distinct from कोड ब्लॉक. |
| interpreter | इंटरप्रेटर | m | hi | The program that runs the code. Not दुभाषिया, which is a human language interpreter, a different job. |
| mental model | सोचने का तरीका | m | hi | Not मेंटल मॉडल, which is jargon a beginner has not met. |
| (programming) language | भाषा | f | hi | Used both for a programming language and for "a language the computer understands". Use it throughout a page; do not mix in लैंग्वेज. |
| algorithm | एल्गोरिदम | m | hi | |

### Objects & structure

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| object | ऑब्जेक्ट | m | hi | Data representing something from the real world. |
| class | क्लास | f | hi | A blueprint for something: "किसी चीज़ का खाका". |
| method | मेथड | m | hi | A फंक्शन attached to an ऑब्जेक्ट. |
| property | प्रॉपर्टी | f | hi | A विशेषता or piece of information belonging to an ऑब्जेक्ट. Kept distinct from फीचर (a platform capability). |
| encapsulation | एनकैप्सुलेशन | m | hi | Advanced/OOP term. |
| module | मॉड्यूल | m | hi | A separate, reusable piece of code. |
| component | कंपोनेंट | m | hi | A small, reusable part of a page. |

### Tooling & engineering

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| to deploy | डिप्लॉय करना | - | hi | |
| framework | फ्रेमवर्क | m | hi | A ready-made structure for building programs. |
| tool / tooling | टूल | m | hi | Programs made to make work easier. |
| workflow | वर्कफ्लो | m | hi | The way or order in which work gets done. |
| auth (authentication / authorization) | ऑथेंटिकेशन | m | hi | The identity-check concept: "पहचान जाँचने की प्रक्रिया". |
| edge case | एज केस | m | hi | Where the source explains it: "कोई असामान्य स्थिति जिसका होने का अवसर कम होता है लेकिन हो सकता है". |
| backwards compatibility | बैकवर्ड कंपैटिबिलिटी | f | hi | |

### Platform & curriculum vocabulary

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| exercise | अभ्यास | m | hi | Masculine: "आपके पहले अभ्यास में आपका स्वागत है!". Use it in both instructions and message catalogs; never mix with a bare Latin "exercise" on the same page or across an exercise's files. |
| lesson | पाठ | m | hi | |
| level | लेवल | m | hi | |
| course | कोर्स | m | hi | The whole course the reader is taking, e.g. "इस कोर्स में". Kept distinct from पाठ (lesson) and पाठ्यक्रम (curriculum). |
| curriculum | पाठ्यक्रम | m | hi | |
| syllabus | सिलेबस | m | hi | Kept distinct from पाठ्यक्रम (curriculum) per `global/terms.md`. |
| milestone | पड़ाव | m | hi | "A stop/stage on a journey." |
| mentor / mentoring | मेंटर | m/f | hi | Agrees with the person. |
| tutorial | ट्यूटोरियल | m | hi | Kept distinct from पाठ (lesson). |
| solution (learner's submission) | हल | m | hi | |
| challenge (an optional harder exercise) | चैलेंज | m | hi | Never चुनौती for this sense. **Masculine**, so the agreement changes with the word: "चैलेंज पूरा हुआ", never "चुनौती पूरी हुई". Same form in the plural (चैलेंज), oblique plural चैलेंजों. The verb "to challenge yourself" is a different thing and is not this row; write खुद को परखना rather than mixing चुनौती back into a sentence about चैलेंज. |
| page (of the site or app) | पेज | m | hi | Never पृष्ठ, which carries the "page of a book" meaning. |
| canvas (graphics exercises) | कैनवास | m | hi | The drawing surface in creative-coding exercises. |
| feature (platform capability) | फीचर | m | hi | Kept distinct from फंक्शन; no collision risk in Hindi. सुविधा is a good alternative in warmer prose. |
| character (the on-screen figure) | पात्र | m | hi | The little figure the learner moves in an exercise. Never किरदार (see `guide.md` § "Register"). Kept distinct from अक्षर (a text character). |
| maze | भूलभुलैया | f | hi | Always spelled भूलभुलैया. Never "solved" (see the row below). |
| to solve a maze / get through a maze | भूलभुलैया से बाहर निकलना | - | hi | **Never भूलभुलैया हल करना.** Hindi does not say you solved a maze; you got out of it or found a way out. Applies to the title ("भूलभुलैया से बाहर निकलिए"), to the exercise description, and to every later sentence about the task. Transitive, where the learner gets the पात्र out: "पात्र को भूलभुलैया से बाहर निकालना". हल stays correct for a learner's solution to an exercise (see `solution` above). |

### Drawing & colour (creative-coding exercises)

The shapes, colour components and orientations the drawing exercises are built on, used
consistently across every drawing exercise and the shared `draw` category catalog.

**Every geometry term carries the English in bare brackets on first use** (आयत (rectangle)),
per `guide.md` § "Geometry terms carry an English gloss".

| English | Hindi | Gender | Use (hi/en) | Notes |
|---------|-------|--------|-------------|-------|
| rectangle | आयत | m | hi | The school-geometry word. Glossed: "आयत (rectangle)". |
| circle | वृत्त | m | hi | **Never गोला for the `circle` function**: गोला is "round", not "circle". गोला stays the maze's green target ("हरे गोले तक"), which is a ball on screen and not a named shape. Glossed: "वृत्त (circle)". |
| triangle | त्रिभुज | m | hi | Glossed: "त्रिभुज (triangle)". |
| ellipse | दीर्घवृत्त | m | hi | Glossed: "दीर्घवृत्त (ellipse)". |
| line (drawn on the canvas) | रेखा | f | hi | "एक रेखा खींची". Kept distinct from a line of code, which is लाइन. |
| radius | त्रिज्या | f | hi | The school-geometry word. The `radius` parameter name itself stays in code font, as any identifier does. |
| hue | मूल रंग | m | hi | **Never रंगत**, which also means a person's complexion. **Masculine** (रंग), so the agreement follows: "मूल रंग 0 से 360 के बीच होना चाहिए", never "होनी चाहिए". प्राथमिक रंग is an equally acceptable alternative; we use मूल रंग throughout for consistency. |
| saturation | संतृप्ति | f | hi | |
| lightness | हल्कापन | m | hi | **Never चमक**, which mainly means the shine of an object. **Masculine**: "हल्कापन 0 से 100 के बीच होना चाहिए". Kept distinct from मूल रंग and संतृप्ति; the three always appear together. |
| hex (colour) | हेक्स | - | hi | Devanagari, per `guide.md` § "Script convention": "हेक्स रंग", "हेक्स स्ट्रिंग". The `#` and the hex digits themselves are code and stay as they are. |
| horizontal / vertical | आड़ी रेखा / खड़ी रेखा | f | hi | Name the noun, so it is clear the adjective describes the line. Not क्षैतिज / ऊर्ध्वाधर, which are the textbook-formal pair. **Where the thing is not a line, keep the adjective and use that thing's own noun**: "खड़ी पट्टियाँ" (vertical stripes), "आड़ी त्रिज्या / खड़ी त्रिज्या" (horizontal / vertical radius), "आड़ी स्थिति" (horizontal position). Never a bare आड़ी / खड़ी with no noun after it. |

## Keep in English (Latin script)

These, and only these, stay in Latin script inside Hindi prose. Anything not listed here is
written in Devanagari, per `guide.md` § "Script convention".

| Term | Notes |
|------|-------|
| API | Where the English itself explains the term, explain the concept in Hindi ("दो प्रोग्राम के आपस में बात करने का तरीका"), not just the acronym. |
| CLI (the concept) | Where the English itself explains the term: "कमांड लिखकर कंप्यूटर से बात करने का तरीका". |
| CPU, RAM, USB, HTML, CSS, JSON | Acronyms pronounced as letters. |
| JavaScript, Python, React | Product/language names, never translated or transliterated. |
| Debug, Test, Code, Bug, Frontend, Backend | Only the literal UI label / technical token. The everyday noun "code" in prose is कोड, in Devanagari (see "Core decisions"). |
| Run Code and other on-screen button labels | Whatever the interface actually shows, verbatim. |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | Always English, including inside prose. Translate only the surrounding explanation. |
| Latin-script product names | Kept in Latin script; see `guide.md` § "Style notes" for attaching Hindi postpositions. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Hindi has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Hindi | Use (hi/en) | Notes |
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
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
