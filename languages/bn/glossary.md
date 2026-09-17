# Bangla (bn) glossary

The agreed term list for Bangla. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| programming / coding | প্রোগ্রামিং | bn | |
| developer | ডেভেলপার | bn | |
| streak | ধারাবাহিকতা | bn | Daily-use-streak sense (learning-platform). Not phonetically self-evident, so it takes the `<define>` gloss (see guide § Glossing a `<define>`). |
| tech / tech industry | টেক ইন্ডাস্ট্রি | bn | |
| pitfall | বিপদ | bn | Takes the `<define>` gloss. |
| common | কমন | bn | Phonetic transliteration, not a translated word. Confirmed by native-speaker review (see notes). |
| game | গেম | bn | Phonetic transliteration, not খেলা. Confirmed by native-speaker review (see notes). |
| draw (a tied result) | ড্র | bn | Phonetic transliteration, not টাই or সমতা. Confirmed by native-speaker review (see notes). |
| Rock, Paper, Scissors (the game's name) | রক, পেপার, সিজার | bn | Phonetic transliteration. In a heading or title, phonetic only. On first mention in body prose, add the literal gloss in brackets: রক, পেপার, সিজার (পাথর, কাগজ, কাঁচি). The individual moves as objects stay পাথর / কাগজ / কাঁচি. |
| left (direction) | বাম | bn | Never বাঁ or any of its inflections (বাঁয়ে, বাঁয়ের, বাঁ দিকে). Inflect as বামে, বামের, বাম দিকে. বাঁ is too formal for Jiki's friendly register; বাম is what is said in everyday speech. Pairs with ডান for "right". Confirmed by native-speaker review (see notes). |
| Scroll and Shoot (the exercise's name) | স্ক্রল অ্যান্ড শুট | bn | Transliterate the whole title, "and" included (অ্যান্ড). Never translate the conjunction (স্ক্রল আর শুট). Confirmed by native-speaker review (see notes). |

## Localize (use the Bangla term)

Bangla renders core CS vocabulary as English loanwords transliterated into Bengali script.
Ordinary, everyday vocabulary (including curriculum and pedagogy words) uses the ordinary
Bangla word. Which default applies to which kind of term is set out in the guide
(§ Terminology and code-switching); this file records the resulting choice per term. Split
by theme for readability; every table below follows the same columns.

### Values & data types

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| value | মান | bn | |
| number | সংখ্যা | bn | |
| true / false | ট্রু / ফলস | bn | Not capitalized in prose. |
| character | ক্যারেক্টার | bn | |
| integer | ইন্টিজার | bn | |
| float / decimal | ফ্লোট / দশমিক সংখ্যা | bn | ফ্লোট (loanword) when the floating-point nature matters; দশমিক সংখ্যা ("decimal number", ordinary compound) otherwise. |
| string | স্ট্রিং | bn | |
| Boolean | বুলিয়ান | bn | |
| data type | ডেটা টাইপ | bn | |
| array / list | অ্যারে | bn | |
| factor (of a number) | গুণনীয়ক | bn | The arithmetic sense ("divisible by its factors"). Never উৎপাদক, which is the algebraic factor (as in factorising an expression). |

### Functions & control flow

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| condition | শর্ত | bn | Not phonetically self-evident, so it takes the `<define>` gloss. |
| if statement | `if` স্টেটমেন্ট | bn | Keep the keyword `if` in code font (it is a real keyword); pair with স্টেটমেন্ট. |
| comparison | তুলনা | bn | Stands alone; no gloss needed. |
| expression | এক্সপ্রেশন | bn | |
| operator | অপারেটর | bn | |
| statement (executable) | স্টেটমেন্ট | bn | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | বিবৃতি | bn | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. Not phonetically self-evident, so it takes the `<define>` gloss. |
| function | ফাংশন | bn | The *keyword* `function` in code stays English; the concept in prose is ফাংশন. |
| to call (a function) | কল করা | bn | Loanword verb via করা (see guide § Grammar). |
| to define (a function) | ডিফাইন করা | bn | Loanword verb via করা. |
| parameter | প্যারামিটার | bn | The declaration-site name. |
| argument | আর্গুমেন্ট | bn | The call-site value. Used near-interchangeably with parameter in casual Bangla dev writing, but keep them distinct per the English meanings. |
| input (to a function) | ইনপুট | bn | |
| output | আউটপুট | bn | |
| to return (a value) | রিটার্ন করা | bn | Loanword verb via করা. |
| return value | রিটার্ন ভ্যালু | bn | |
| brackets (the two after a function name) | বন্ধনী | bn | Use plain বন্ধনী for the `()` pair when the code is visible beside the prose ("তার নাম লিখবেন, তারপর ওই বন্ধনী দুটি"). Where the *kind* of bracket must be distinguished, use the standard Bangla maths names: প্রথম বন্ধনী `()`, দ্বিতীয় বন্ধনী `{}`, তৃতীয় বন্ধনী `[]`. |

### Loops, state & program flow

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| keyword | কিওয়ার্ড | bn | |
| interpreter | ইন্টারপ্রেটার | bn | **A person doing a job, not a program**: on concept pages Jiki *is* the interpreter ("এই কোর্সে আপনার ইন্টারপ্রেটার হলো জিকি"). Never add যন্ত্র or a similar device word, and do not reach for দোভাষী (a spoken-language interpreter). |
| instruction (given to Jiki) | নির্দেশ | bn | Not নির্দেশনা (guidance) and not the legal/administrative register আদেশ. E.g. "জিকিকে সঠিক নির্দেশ দেওয়া". |
| mental model | মানসিক মডেল | bn | |
| (programming) language | (প্রোগ্রামিং) ভাষা | bn | Use প্রোগ্রামিং ভাষা for the programming sense and plain ভাষা for "a language a computer understands". Never the transliteration ল্যাঙ্গুয়েজ, and never mix the two inside one page. |
| variable | ভ্যারিয়েবল | bn | |
| assignment | অ্যাসাইনমেন্ট | bn | Confirmed by native-speaker review (see notes). |
| to assign | অ্যাসাইন করা | bn | Loanword verb via করা. |
| code block | কোড ব্লক | bn | |
| loop | লুপ | bn | |
| error | এরর | bn | |
| nested | নেস্টেড | bn | Confirmed by native-speaker review (see notes). |
| iteration | ইটারেশন | bn | Confirmed by native-speaker review (see notes). |
| element | এলিমেন্ট | bn | On the chain metaphor specifically, see "Jiki physical metaphors" below for how an element is described. |
| class | ক্লাস | bn | |
| object | অবজেক্ট | bn | |
| key (dictionary) | কী (key) | bn | Always gloss with the English word in parentheses, every occurrence, on any page that uses কী for a dictionary key. কী alone is ambiguous with the interrogative "what"; the gloss removes the ambiguity. Confirmed by native-speaker review (see notes). |
| to run / execute (code) | রান করা / চালানো | bn | রান করা (loanword verb) is standard; চালানো (native verb, "to run/operate") also natural, especially for "run a loop". Either is fine; do not mix both for the same sentence's action. |
| shift (cipher operation: move a letter N positions in the alphabet) | শিফট / শিফট করা | bn | Phonetic transliteration, not the native verb সরান/সরানো ("move"), which reads awkwardly for this specific technical operation. Confirmed by native-speaker review (see notes). |

### Platform & curriculum vocabulary

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| course | কোর্স | bn | Keep distinct from lesson and curriculum. |
| exercise | অনুশীলনী | bn | Curriculum and pedagogy vocabulary takes the ordinary Bangla word, not the transliteration default that applies to CS jargon (see guide § Terminology and code-switching). |
| snowman (exercise theme object) | তুষারমানব | bn | Native compound ("snow-man"), not the phonetic loanword স্নোম্যান. Same default as "exercise" → অনুশীলনী: ordinary curriculum/theme vocabulary, not CS jargon. Standardized across relational-snowman, snowman and snowman-basic after one of them mixed both terms internally. Confirmed by native-speaker review (see notes). |
| relational (exercise-family theme, "relational-*") | আনুপাতিক | bn | Not আপেক্ষিক ("relative"). আনুপাতিক ("proportional") is the native speaker's preferred rendering for this exercise family's "things must scale together" theme. Standardized across relational-sun, relational-snowman and relational-traffic-lights after some used আপেক্ষিক instead. Confirmed by native-speaker review (see notes). |
| greeting (email opener) | স্বাগতম! | bn | Never নমস্কার, which reads as a Hindu-coded religious greeting; Jiki is secular. Confirmed by native-speaker review (see notes). |
| "For the bonus, ..." (lead-in label) | বোনাস: ... | bn | As a label opening a sentence, use the bare noun plus a colon. Never বোনাসের জন্য:, which is unnatural. The prepositional sense mid-sentence ("for this bonus, tidy it up") is unaffected. |
| weekday (name of a day of the week) | বার | bn | "Monday", "Tuesday" etc. as named days of the week are বার, never দিন. দিন is the calendar-day sense and also reads as the verb "give", so using it for a weekday name forces the reader to disambiguate. Confirmed by native-speaker review (see notes). |
| "Have fun!" / "Good luck!" (closing line) | শুভকামনা! | bn | Never মজা করুন! (reads as an invitation to a party) and never a literal translation of either English phrase; শুভকামনা! ("best wishes") is the natural Bangla closing wish regardless of which English phrase it renders. Confirmed by native-speaker review (see notes). |
| Type Conversion (function category label) | টাইপ কনভার্সন (ডেটা টাইপ রূপান্তর) | bn | The transliteration is what a developer says, so it leads; the bracketed Bangla is there so a beginner meeting the category for the first time knows what it means. Confirmed by native-speaker review (see notes). |
| email | ইমেইল | bn | Never ইমেল (single ই). "Email address" is never rendered with a separate word for "address" either, just ইমেইল alone; adding one reads as unnatural. Confirmed by native-speaker review (see notes). |
| drawing (noun: a drawing exercise/task) | ড্রয়িং | bn | The gerund-noun transliteration, not the verb আঁকা ("to draw") or a calque like "আঁকার অনুশীলনী". Reads more natural and more professional as a noun/heading. Distinct from the verb "to draw", which stays আঁকা. Confirmed twice by native-speaker review (see notes). |
| drawer (item of furniture: a chest of drawers) | ড্রয়ার | bn | Phonetic transliteration, not দেরাজ. The English loanword is what everyone says for this everyday household item. Confirmed by native-speaker review (see notes). |

## Keep in English

These stay in Latin script in prose (acronyms and product/language names), per real Bangla
technical-writing convention, with the Bangla explanation to use for each (where the
source `<define>`s the term).

| Term | Bangla explanation (on `<define>`) | Notes |
|------|--------------------------------------|-------|
| API | "একটি প্রোগ্রাম অন্য প্রোগ্রামের সাথে কথা বলার নিয়ম" (the rules by which one program talks to another) | Not a word a beginner knows; explain the concept in Bangla, not just the acronym. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry
technical language.

| English metaphor | Bangla rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | বাক্স | |
| chain (array metaphor) | চেইন | An element sitting on the chain: চেইনের একটি অংশ ("a part/link of the chain"). Not independently source-confirmed; flagged for native-speaker review (a plausible native alternative is শিকল). |
| input slot | ইনপুট স্লট | Not independently source-confirmed; flagged for native-speaker review. |
| return chute | রিটার্ন স্লাইড | Flagged for native-speaker review, since "chute" and "playground slide" are close but not identical images. |
| machine (function metaphor) | মেশিন | A function modelled as a machine with an input slot and a return chute. |
| crank (machine crank) | হাতল | Cranking it to start the machine: হাতল ঘুরিয়ে চালু করা. |
| shelves (storage) | তাক | Jiki's machines sit on a তাক. |
| warehouse (Jiki's warehouse) | গুদাম | The place Jiki hangs out and keeps his machine shelf (জিকির গুদাম). |
| board / whiteboard | বোর্ড | **One object, one word.** The same বোর্ড is what the learner writes instructions on for Jiki to follow, and what a function keeps its own instructions and notes on. Never use হোয়াইটবোর্ড alongside it; never invent a second word for the other use. |
