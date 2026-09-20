# Bangla (bn) glossary

The agreed term list for Bangla. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Bangla | Use (bn/en) | Notes |
|---------|--------|----------|-------|
| programming / coding | প্রোগ্রামিং | bn | |
| developer | ডেভেলপার | bn | |
| streak | ধারাবাহিকতা | bn | Daily-use-streak sense (learning-platform). Not phonetically self-evident, so it takes the an explanation in the English gloss (see guide § Glossing an explanation in the English). |
| tech / tech industry | টেক ইন্ডাস্ট্রি | bn | |
| pitfall | বিপদ | bn | Takes the an explanation in the English gloss. |
| common | কমন | bn | Phonetic transliteration, not a translated word. Confirmed by native-speaker review (see notes). |
| game | গেম | bn | Phonetic transliteration, not খেলা. Confirmed by native-speaker review (see notes). |
| draw (a tied result) | ড্র | bn | Phonetic transliteration, not টাই or সমতা. Confirmed by native-speaker review (see notes). |
| Rock, Paper, Scissors (the game's name) | রক, পেপার, সিজার | bn | Phonetic transliteration. In a heading or title, phonetic only. On first mention in body prose, add the literal gloss in brackets: রক, পেপার, সিজার (পাথর, কাগজ, কাঁচি). The individual moves as objects stay পাথর / কাগজ / কাঁচি. |
| left (direction) | বাম | bn | Never বাঁ or any of its inflections (বাঁয়ে, বাঁয়ের, বাঁ দিকে). Inflect as বামে, বামের, বাম দিকে. বাঁ is too formal for this friendly register; বাম is what is said in everyday speech. Pairs with ডান for "right". Confirmed by native-speaker review (see notes). |
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
| condition | শর্ত | bn | Not phonetically self-evident, so it takes the an explanation in the English gloss. |
| if statement | `if` স্টেটমেন্ট | bn | Keep the keyword `if` in code font (it is a real keyword); pair with স্টেটমেন্ট. |
| comparison | তুলনা | bn | Stands alone; no gloss needed. |
| expression | এক্সপ্রেশন | bn | |
| operator | অপারেটর | bn | |
| statement (executable) | স্টেটমেন্ট | bn | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | বিবৃতি | bn | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. Not phonetically self-evident, so it takes the an explanation in the English gloss. |
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
| interpreter | ইন্টারপ্রেটার | bn | The program that runs the code. Do not reach for দোভাষী (a spoken-language interpreter). |
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
| element | এলিমেন্ট | bn | An item inside an array. |
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
| greeting (email opener) | স্বাগতম! | bn | Never নমস্কার, which reads as a Hindu-coded religious greeting; this content is secular. Confirmed by native-speaker review (see notes). |
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
source an explanation in the Englishs the term).

| Term | Bangla word, where the English explains the term | Notes |
|------|--------------------------------------|-------|
| API | "একটি প্রোগ্রাম অন্য প্রোগ্রামের সাথে কথা বলার নিয়ম" (the rules by which one program talks to another) | Not a word a beginner knows; explain the concept in Bangla, not just the acronym. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Bengali has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Bengali | Use (bn/en) | Notes |
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
