# Bangla (bn) language guide

The Bangla-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Term choices are in `glossary.md` and are binding.

## Audience specifics

- Readers are in Bangladesh and West Bengal (India), and other Bangla-speaking
  communities. Write in the modern written standard (চলিত ভাষা) that both regions use for
  educational and technical prose; do not lean into region-specific colloquialisms.
- Many readers are meeting a formal instructional register in their own language for a
  technical subject for the first time, alongside meeting the concepts themselves. Keep
  the tone warm and unintimidating.

## Formality (critical)

Bangla has three address forms: তুই (intimate), তুমি (informal/friendly), and আপনি
(formal/respectful).

- **Use আপনি throughout, not তুমি.** This overrides the "informal address" wording in
  `global/voice.md`: আপনি is the register modern Bangla online tutorials and programming
  blogs use for an unknown learner, and it is what reads as warm-but-respectful to a
  stranger. Do not "correct" it to তুমি.
- **Never use তুই.** It is wrong for addressing an unknown learner and can read as
  presumptuous or condescending.
- **Warmth comes from tone, encouragement, and the physical metaphors, not from
  downgrading the pronoun.** Warm asides, humor, and concrete examples all sit normally
  alongside আপনি; formality of pronoun does not require dry or distant phrasing.
- Encouraging imperatives, in the আপনি conjugation:
  - "চলুন দেখি" (Let's look at [this])
  - "নিজে চেষ্টা করে দেখুন" (Try it yourself)
  - "চলুন শুরু করি" (Let's begin)

## Grammar

Bangla-specific rules that English speakers get wrong:

- **Word order: Bangla is SOV (subject-object-verb), not English SVO.** The verb comes
  last.
  - EN: "The function returns a value." → BN: "ফাংশনটি একটি মান রিটার্ন করে।"
    (function-the one value return does)
- **No grammatical gender, no articles.** Bangla has no "a/the" the way English does.
  Definiteness and countability are marked with classifier suffixes instead:
  - Indefinite: একটি ফাংশন (a function, "one" + general classifier)
  - Definite: ফাংশনটি (the function, noun + definite classifier টি/টা)
  - টা is the more everyday classifier, টি the slightly more careful/written one; prefer
    টি in written tutorial prose.
- **Postpositions and case suffixes, not prepositions.** Bangla attaches a case ending or
  follows the noun with a postposition, it does not put a word in front like English "in"
  or "for":
  - "in the code" → কোডে (code + locative -এ)
  - "for the function" → ফাংশনের জন্য (function + genitive -এর + জন্য, "for")
  - "with the loop" → লুপের সাহায্যে / লুপ দিয়ে
- **Verb conjugation carries both tense and the address register.** The same verb takes a
  different ending depending on whether you are using আপনি, তুমি, or তুই. Use the আপনি
  conjugation consistently: e.g. করেন (does, আপনি present) vs করো (তুমি) vs করিস (তুই).
  Keep the subject pronoun (আপনি) present at the start of a sentence when it reads more
  naturally with it, since dropping it can blur which register is intended.
- **Negation follows the verb, it does not precede it like English "not".**
  - "does not return a value" → মান রিটার্ন করে না (value return does NOT, না goes after
    করে)
- **Loanwords enter Bangla verb phrases via করা ("to do").** An English-derived technical
  noun becomes a verb by pairing it with করা: "to run [code]" → রান করা, "to loop" →
  লুপ করা. Use it freely for verbs built on glossary nouns.

## Punctuation and script conventions

- **Use দাঁড়ি (।), the Bengali sentence-final mark, to end ordinary Bangla sentences**,
  not the Western period. A Western period is acceptable where a sentence ends right on an
  English word, code token, or abbreviation, since mixing a দাঁড়ি directly onto Latin text
  reads awkwardly; use judgment sentence by sentence rather than mixing marks within one
  clause.
- Question marks (?) and exclamation marks (!) are used the same way as in English.
- **Spell "sixteen" as ষোল, never ষোলো.** Bangla Academy's current spelling standard drops
  the trailing ো here, and ষোল is what is written in practice.
- **Hyphenate a Bangla suffix onto a long transliterated loanword** where writing them
  solid would be hard to read at a glance: ইনপুট-সহ, not ইনপুটসহ. Short, familiar
  loanwords take the suffix directly.
- No case distinction exists in Bengali script; nothing to decide there.
- **Clock times keep Latin digits** (`6:35`, `11:04`, `23:32`), never Bengali numerals
  (৬:৩৫, ১১:০৪, ২৩:৩২). A time is read as a value the learner sees on screen, so it stays
  in the same digits the exercise itself shows. Ordinary counting numerals inside running
  prose (১২-ঘণ্টার ফরম্যাট, ১৫ মিনিট) are unaffected and stay Bengali.

## Terminology and code-switching

The single test for every word is the one in `global/voice.md`: **use the word a real Bangla
speaker actually uses for that thing.** In Bangla that test lands in two different places
depending on what kind of word it is, and the two are not in competition. Decide which kind
of word you have first, then apply its default.

- **CS jargon takes the English loanword, transliterated into Bengali script**, not a
  native or Sanskrit-derived coinage and not Latin script either. Never reach for the
  Sanskritized vocabulary of formal school ICT textbooks (e.g. চলক for "variable"): that is
  exam-syllabus register, not tutorial register.
- **Ordinary vocabulary takes the ordinary Bangla word**, and that includes curriculum,
  pedagogy and physical-metaphor words. These are not CS jargon; they are everyday things a
  beginner already has a word for, so transliterating them (এক্সারসাইজ, ল্যাঙ্গুয়েজ) would
  be reaching for a foreign word the reader does not use. **This is settled, not a carve-out
  to re-argue per page.**
- A few genuine CS concepts have a **native/Sanskrit-derived** word that is nonetheless
  *more* common than the loanword in real tutorial content. These are the real exceptions
  inside the jargon default; the glossary marks them. Use the glossary's choice exactly;
  never re-derive it from the general pattern.
- When the two defaults could both plausibly claim a word, ask which register the *reader*
  would use talking about the thing out loud, and follow that. If it is genuinely unclear,
  translate with the glossary's existing choice and flag the term in the pass report rather
  than switching it silently.
- **Acronyms (API, CLI, HTML, ...) and product/language names (JavaScript, Python, React)
  stay in Latin script**, exactly as in English, even inside Bangla prose. Where the English
  itself explains one, explain the concept in Bangla per the "Keep in English" table in
  `glossary.md`; do not assume the acronym is self-explanatory to a beginner.

### Glossing a term the English explains

`global/voice.md` defines when a term is introduced (only where the English itself stops to
explain it). What that produces in Bangla depends on the rendering, and the rule is
mechanical:

- **Transliterated loanword: no gloss at all.** ইন্টারপ্রেটার, এরর, ফাংশন, স্ট্রিং and the
  rest are phonetic Bengali-script renderings of the English word, so a bracketed
  "(function)" after ফাংশন teaches nothing. Drop the tag and leave the prose alone. This is
  the common case, and a page whose every explained term is a loanword correctly ends up with no
  glosses anywhere; that is not an omission, and it does not need re-deciding page by page.
- **Native or Sanskrit-derived word: give the gloss, once, where the tag is.** Format: the
  Bangla term, then the English in italics inside brackets after the marker word ইংরেজিতে
  ("in English"), e.g. শর্ত (ইংরেজিতে _condition_), ধারাবাহিকতা (ইংরেজিতে _streak_). The
  glossary's Notes column says which terms these are.
- **An explained acronym or product name** follows the "Keep in English" table in
  `glossary.md`: explain the concept in Bangla where that table gives an explanation
  (notably API), never merely re-spell the acronym.
- **An acronym spelled out letter by letter: English first, then one combined gloss.**
  Where the English expands the letters of an acronym (RGB, HSL,
  ...), do not gloss them one at a time. Write the expansion in English, capitalised and
  comma-separated as in the source, then a single Bangla gloss for the whole set in
  brackets after অর্থাৎ. Attach the case ending to the acronym with a hyphen. So:
  RGB-এর পুরো অর্থই তাই: Red, Green, Blue (অর্থাৎ লাল, সবুজ আর নীল)। and
  HSL-এর পুরো অর্থ: Hue, Saturation, Lightness (অর্থাৎ হিউ, স্যাচুরেশন আর লাইটনেস)।
  Never the per-word (ইংরেজিতে _X_) form here, and never repeat the letter in brackets.

## Style notes

- **Em dashes:** in Bangla prose, use a comma for a mid-sentence aside, or split into two
  sentences.
- **Rhetorical asides** ("So what does this look like in code?") are a natural and common
  device in real Bangla tutorial writing; keep them, phrased as a natural Bangla question,
  e.g. "তাহলে কোডে এটা কেমন দেখতে হবে?"
- **A shape drawn around a centre point takes plain কেন্দ্রে**, never কেন্দ্র অবস্থানে:
  "(centerX, centerY) কেন্দ্রে একটি বৃত্ত আঁকে". অবস্থানে belongs with a corner-anchored
  position ("(left, top) অবস্থানে").
- **A built-in function's `description` and `category` are fixed strings, not per-exercise
  prose.** Where the English is identical across exercises, the Bangla must be identical too,
  word for word. Reuse the wording already in use rather than rephrasing it: `rectangle` is
  "নির্দিষ্ট প্রস্থ, উচ্চতা ও রং দিয়ে (left, top) অবস্থানে একটি আয়তক্ষেত্র আঁকে", `circle` is
  "নির্দিষ্ট ব্যাসার্ধ ও রং দিয়ে (centerX, centerY) কেন্দ্রে একটি বৃত্ত আঁকে", `triangle` is
  "তিনটি শীর্ষবিন্দু ও একটি রং দিয়ে একটি ত্রিভুজ আঁকে", and the category for all three is
  "আকৃতি আঁকা". Vary the Bangla only where the English itself varies. A triangle's corner
  points are শীর্ষবিন্দু in this description, not কোণার বিন্দু.
- **Past-tense lines narrating what the code did are agentless in
  English, so they are passive in Bangla.** Use the impersonal passive, never the active
  third-person perfect: "drew a rectangle ..." is "... একটি আয়তক্ষেত্র আঁকা হয়েছে", not
  "... এঁকেছে". The same applies to every other such verb: মুছে ফেলেছে → মুছে ফেলা হয়েছে,
  রূপান্তর করেছে → রূপান্তর করা হয়েছে.

## Worked examples

Concrete Bangla for the principles in `global/voice.md`.

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid a stiff calque of "A new way to learn to code" → prefer "কোড শেখার নতুন একটি পথ"
  (natural Bangla word order, SOV)

**Calls to action** (specific, action-oriented):
- Signup: "এখনই শুরু করুন" (Start now) / "রেজিস্ট্রেশন করুন" (Register), not the vague
  "আমাদের সাথে যুক্ত হোন" (Join us)
- Trying: "নিজে চেষ্টা করে দেখুন" (Try it yourself)

**Natural phrasing** (good vs stiff/literal):
- "Let's learn functions" → "চলুন ফাংশন শিখি" (SOV, not a literal English-order calque)
- "First, install Node.js" → "প্রথমে Node.js ইনস্টল করুন" (আপনি imperative, loanword verb
  via করা)
- "Try running this code" → "এই কোডটি চালিয়ে দেখুন" (natural verb-final imperative)

**Common EN→BN pitfalls:**
- Do not keep English SVO order and just swap words; the verb must move to the end.
- Do not drop the আপনি conjugation partway through a document because a sentence "sounds
  more natural" less formally; if a sentence genuinely reads awkwardly in আপনি, rephrase
  it, do not switch register.
- Do not use তুমি or তুই forms even in a single aside "for warmth".
