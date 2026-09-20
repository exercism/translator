# Arabic (ar) language guide

The Arabic-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Term choices are in `glossary.md` and are binding.

## Audience specifics

The general audience profile is in `global/voice.md`. In addition, for Arabic:

- Readers are across the Arab world (Mashriq and Maghreb). Do not assume familiarity with
  English technical jargon; explain, don't just gloss.
- **One variety for everyone: Modern Standard Arabic (MSA, الفصحى).** Never write a
  regional dialect (Egyptian, Gulf, Levantine, Maghrebi) in instructional prose.

## Formality and register (critical)

MSA has no formal-informal (T-V) pronoun split: أنتَ/أنتِ are the only second-person
pronouns and are used at any register. The register choice that matters for Arabic is
modern versus classical, not formal versus informal.

- **Use modern, simplified MSA, not classical/literary MSA**: short sentences, direct
  address, everyday vocabulary, technical loanwords used naturally where established.
  Avoid ornate classical constructions, rare vocabulary, and the dense subordination
  typical of formal literary Arabic.
- **Grammatical gender on second-person forms.** Arabic verbs, pronouns, and imperatives
  agree in gender with the person addressed (أنتَ / جرّبْ for masculine vs. أنتِ / جرّبي for
  feminine). Since the reader is unknown, **default to masculine grammatical
  forms** for generic "you" and imperatives. Never switch mid-document between masculine
  and feminine forms for the same generic reader.
- **Encouraging imperatives**, matching the warm-mentor tone from `global/voice.md`:
  - "لنلقِ نظرة على الكود التالي" (Let's look at the following code)
  - "جرّب ذلك بنفسك" (Try it out)
  - "لنبدأ" (Let's begin)

## Grammar and sentence rhythm

- **Word order: default to SVO**, subject first, not the verb-fronted classical VSO that
  MSA also allows ("الحلقات تسمح لنا بـ..." = "loops allow us to...").
- **Short sentences over long subordination.** Do not build the long chains of clauses
  joined with wa- (و) that classical prose favours; break them into shorter sentences.
  Don't force an English sentence's length onto Arabic either.
- **Definiteness (ال).** Arabic marks definiteness with the ال prefix, not a separate
  article word. A first mention of a concept in a paragraph is often indefinite (بدون ال)
  and later mentions definite (with ال), mirroring how English moves from "a function" to
  "the function." Get this right; leaving everything definite or everything indefinite
  reads as translated, not native.
- **Idafa (construct state) over prepositional phrases.** Where English uses "of" or "the
  X's Y", Arabic normally uses the idafa construction (a noun-noun compound, no article on
  the first noun): "the function's input" → "مدخل الدالة", not a literal "الإدخال لـ
  الدالة". Use idafa freely; it is the unmarked way to express possession in Arabic
  technical prose, not a special or formal register.
- **Non-human plurals take feminine singular agreement (جمع غير العاقل).** Plurals of
  non-humans (`الدوال`, `الطرق`, `الخصائص`, `المصفوفات`, `الأصناف`) agree as feminine
  singular: `الدوال تُرجع القيم`, never `الدوال يُرجعون`. Never use the human plural pronouns
  `هم`/`هن` or their verb forms for programming entities.
- **Agree the verb with the implied subject when a function, method or property acts.** A
  `دالة`, `طريقة` or `خاصية` is feminine singular, so `mentors.includes("DJ")` returning true
  is `ستُرجع`, not `سيُرجع`; a past-tense description of what `getYukiChoice` did is `أرجعت`,
  not `أرجع`. A property behaves exactly like a method here: `mentors.length` returning four
  is `فستُرجع`, because the implied subject is `الخاصية`. The plural `الخصائص` takes the
  feminine singular verb in either order (`الخصائص تُرجع القيم`, `تُرجع الخصائصُ القيمَ`).
  **The dual does not: its agreement depends on word order.** With the verb before the
  subject the verb stays singular (`تُرجع الخاصيتان الأبعاد`); with the subject before the
  verb, dual agreement is mandatory and the verb is `تُرجعان` (`الخاصيتان تُرجعان الأبعاد`),
  never `تُرجع`. Since this guide's default word order is subject-first, `تُرجعان` is the
  form a dual subject usually needs. Use the masculine form only where the subject really
  is masculine singular (`الكود يُرجع`).
- **Numerals: Western Arabic digits (0-9), not Eastern Arabic-Indic (٠-٩).** Use them
  consistently, in prose and in code alike. **Whether a number is written as a word or as
  a figure follows the English**: where the source spells it out ("it'll return four"),
  spell it out in Arabic (`فستُرجع أربعة`); where the source uses a figure, use a figure.
  Never write both (`أربعة (4)`): a bracketed figure the source does not have is an
  addition, the same as an unrequested gloss.
- **Punctuation.** Use the Arabic-specific marks in prose: الفاصلة العربية (،, the
  reversed comma) and علامة الاستفهام العربية (؟, the mirrored question mark). Do not use
  the Latin comma or question mark in Arabic prose.

## Right-to-left text and embedded Latin-script code (critical)

Code, keywords, and identifiers stay in Latin script inside Arabic prose. Embedding them
needs no special manual markup:

- **No manual bidi markers around code.** Embed English code and keywords directly in
  running Arabic prose; do not insert directional-override characters or `<bdi>`-style
  wrapping. The renderer's native bidi algorithm handles the mixed-direction text on its
  own.
- **Use inline code formatting (backticks) for every code token.** In RTL prose the code
  styling is also what visually separates an embedded LTR token (a variable name, a
  keyword like `if`, a function name) from the surrounding Arabic text, so never leave a
  code token as bare unformatted Latin text inside Arabic prose.
- **Keep the surrounding Arabic sentence grammatically whole around the embedded token**,
  the same way idafa or a normal noun phrase would work with any Arabic noun: "استخدم
  الكلمة المفتاحية `if`" (use the keyword `if`) reads naturally; do not restructure a
  sentence awkwardly just to avoid placing a Latin token mid-sentence.

## Loanword policy: Arabize by default

- **Arabize core CS vocabulary rather than keeping it in English.** The default for Arabic
  is the Arabic term; take it from the glossary, whose "Keep in English" list is
  deliberately short.
- **A bracketed English gloss appears only where the English text itself stops to explain
  the term**, never on first occurrence and never on your own initiative (the no-auto-gloss
  rule in `global/voice.md`). Elsewhere the Arabic term stands alone, however technical it
  is: _دالة_, not _دالة (function)_.
- **Where the English does explain a term, judge whether the English word teaches
  anything.** It is worth writing for genuine CS jargon a reader will need to map onto
  English they meet in code or docs (function, variable, loop, array, Boolean). An ordinary
  word that merely appears in a technical sentence (condition, comparison, value) gains
  nothing from a bracketed English term; test: "would a non-programmer already know this
  Arabic word?" If yes, drop the parenthetical and leave the term as it is (see "Skip a
  gloss that would teach nothing" in `global/voice.md`).

## The سلسلة collision

سلسلة is both the ordinary Arabic word for a physical chain and the root of the standard
term for "string". So: **never use bare سلسلة on its own.** Always use the qualified
compound the glossary gives for the sense you mean, and never shorten it back to bare
سلسلة for brevity, however often it repeats on a page. If a compound feels too
long in a sentence, flag it rather than shortening it.

## Style notes

- **Em dashes:** in Arabic prose the natural replacements are a comma (، ), a full stop
  and a new sentence, or parentheses for a genuine aside.
- **Rhetorical asides** ("So what does this look like in code?"): keep them as natural
  Arabic rhetorical questions, e.g. "فكيف يبدو هذا في الكود؟", matching the warm,
  conversational tone from `global/voice.md`.
- **Latin-script product names:** a name such as "Exercism" stays in Latin script; if it
  needs a grammatical role in an Arabic sentence (e.g. possession), treat it as an
  indeclinable foreign proper noun and use idafa around it rather than trying to inflect
  it: "دليل Exercism" (Exercism's guide), not an inflected Arabic form of the name itself.

## Worked examples

Concrete Arabic for the principles in `global/voice.md`.

**Titles and headlines:**
- "انطلاقة Exercism" / "تعرّف على Exercism", not an overly dramatic literal rendering of a
  launch announcement.
- "طريقة جديدة لتعلّم البرمجة" (a new way to learn programming), natural SVO.

**Calls to action:**
- Signup: "ابدأ الآن!" (Start now!) / "سجّل الآن!" (Sign up now!), not the vague "انضم
  إلينا!" (Join us!).
- Trying: "جرّبه بنفسك!" (Try it yourself!)

**Natural phrasing** (good vs. stiff/literal):
- "Let's learn React" → "لنتعلّم React" (product name stays English; verb and structure
  are natural Arabic).
- "First, install Node.js" → "أولًا، ثبّت Node.js" (informal imperative, masculine
  default, product name unchanged).
- "Try running this code" → "جرّب تشغيل هذا الكود", not a stiff literal "حاول أن تُشغّل
  هذا الكود".

**Demonstratives: always the full هذا/هذه/هذي, never the short ذا/ذه/ذي.** The short forms
belong to classical/literary Arabic and read as religious or literary register, not the
living everyday language this audience uses day to day.
