# Urdu (ur) language guide

The Urdu-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

Readers are in Pakistan: write the standard written Urdu that Pakistani students read
and write in for school, media, and formal communication.

## Script and direction (critical)

- **Write in Nastaliq-style Urdu script, right-to-left (RTL).** Never produce "Roman
  Urdu" (Urdu phonetically spelled in Latin letters).
- **Numerals stay Western Arabic (0-9), not Eastern Arabic-Indic digits**, including
  mid-sentence in running prose. Write `30`, not `۳۰`.
- **Punctuation:** use `۔` (a small circle) as the Urdu full stop and `،` (a reversed
  comma) as the Urdu comma. For quoted speech (Jiki saying something, a quoted line of
  reasoning) use the Urdu quotation pair `”…“`, opening with `”` and closing with `“`,
  which is the right-to-left mirror of the English convention. Never use `"…"`. There is no
  capitalization system in the script; do not try to simulate one.
- **Code stays Latin script, inline, per `global/rules.md`.** Code, keywords, variable and
  function names, and CLI commands are never transliterated or translated, even embedded
  mid-sentence in RTL prose. Where the platform's Markdown renderer doesn't already
  isolate inline code direction, wrap a bare (non-backticked) English token in backticks
  rather than leaving it as bare Latin text in the middle of an RTL line.
- **Brackets and mirrored punctuation.** Bracket pairs `()`, `[]`, `{}` inside RTL prose
  are mirrored automatically by the Unicode bidi algorithm when rendered correctly; do not
  manually reverse them yourself. This applies only to brackets used as prose punctuation;
  brackets inside a code span are code and are never touched.

## Formality (critical)

- **Use the formal/polite "آپ" (aap) throughout, never "تم" (tum) or "تو" (tu).**
  In real Urdu digital and educational writing, "آپ" **is** the modern, warm, everyday-appropriate
  register, not a distant or stiff one.
- Keep verb conjugations in **second person formal ("آپ")** consistently, start to finish.
- Warmth comes from word choice, encouragement, and the physical metaphors, not from
  downgrading the pronoun.

## Grammar

Urdu-specific rules that English speakers get wrong:

- **SOV word order**, not English SVO: the verb comes last. "The function returns a
  value" → "فنکشن ایک قدر واپس کرتا ہے" (function - one value - returns; verb-final).
- **Postpositions, not prepositions.** Urdu marks grammatical relations with a postposition
  after the noun, not a preposition before it: "in the code" → "کوڈ میں" (code + میں
  "in"), "to the function" → "فنکشن کو" (function + کو, the object/dative marker).
- **Grammatical gender.** Nouns are masculine or feminine and verbs, adjectives, and
  postpositions agree with them. Track a technical noun's gender consistently:
  "متغیر" (variable) is masculine, "قدر" (value) is feminine, e.g. "قدر بدل جاتی ہے"
  (the value changes, feminine agreement) versus "متغیر بن جاتا ہے" (the variable becomes,
  masculine agreement).
- **Ergative-like split with perfective past.** Transitive verbs in the perfective past
  take "نے" on the subject ("اس نے فنکشن بنایا" - they made the function) while the
  present/habitual does not ("وہ فنکشن بناتا ہے" - they make a function). This trips up
  literal English-order translation more than almost anything else; check perfective
  clauses for a missing or misplaced "نے".
- **Compound/light verbs are the norm**, not single Latin-style verbs. "to run (code)" is
  "چلانا" but many technical actions are phrased as noun + light verb: "to assign" is
  "تفویض کرنا" (assignment + "to do"), "to define" is "تعریف کرنا" (definition + "to
  do"). Do not force a single-word verb where the natural Urdu phrasing is noun + کرنا/
  ہونا.
- **Given-before-new, like Hungarian's focus position but looser.** Known information
  opens the sentence; the newest or most important information sits closer to the
  verb-final position. Literal English clause order is usually still grammatical but reads
  translated; reorder for natural emphasis rather than mapping English clause-by-clause.

## Term clarification

When introducing an English term under Urdu-primary (see `global/voice.md`), use bare
parentheses with no marker word around the italic English term, since Urdu typically
transliterates the term itself into Nastaliq, e.g. فنکشن (_function_).

A term being a settled transliteration the reader may well recognize (فنکشن,
لوپ, سٹرنگ) is **not** a reason to drop the gloss.

## Brackets

(For how brackets *render* inside RTL prose, see the Script section above.)

- **"قوسین" is a dual form: it already means the pair.** So a counting word in front of it
  is redundant. Where English says "those two brackets" or "the brackets", write "وہ
  قوسین" / "قوسین", not "دو قوسین".
- Only name the kind when the source is distinguishing kinds: "گول قوسین" (round) versus
  "مربع قوسین" (square). Do not qualify it by default; on the function-call pages plain
  "قوسین" is the right register.

## Style notes

- **Em dashes:** in Urdu prose the natural replacements are a separate sentence, a comma
  (`،`), or a parenthetical aside using Urdu-style brackets. Do not use an em dash even
  where informal Urdu web writing sometimes borrows one from English.
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Urdu rhetorical questions, e.g. "تو یہ کوڈ میں کیسا نظر آتا ہے؟"
- **Jiki-name handling:** treat "Jiki" as a foreign proper noun, kept in Latin script (it
  is a brand/character name, per the "never translated" list in `global/terms.md`).
  Attach Urdu postpositions directly after it with no transliteration of the name itself,
  e.g. "Jiki کو" (to Jiki), "Jiki نے" (Jiki [did]).

## Worked examples

Concrete Urdu for the principles in `global/voice.md`.

**Titles and headlines**:
- Avoid an overly dramatic register ("Jiki is born") → prefer a simple, warm announcement
  register: "Jiki سے ملیے" (Meet Jiki) / "Jiki شروع ہو گیا" (Jiki has started).
- Keep titles verb-final and concise; do not front-load an English-style gerund clause.

**Calls to action**:
- Signup: "ابھی شروع کریں" (Start now) / "ابھی رجسٹر کریں" (Register now), not a vague
  "ہمارے ساتھ جڑیں" (Join us).
- Trying: "اسے آزمائیں" (Try it) / "مفت میں آزمائیں" (Try it for free).

**Acronyms** (explain the concept in Urdu, don't just expand the letters):
- "CLI" → explain it as the text-based way of controlling a computer, not assumed
  knowledge: "کمانڈز لکھ کر کمپیوٹر کو ہدایات دینے کا طریقہ".

**Natural phrasing** (good vs stiff/literal):
- "Let's look at the following code" → "آئیے، اگلا کوڈ دیکھتے ہیں" (natural hortative),
  not a stiff literal "ہم اگلا کوڈ دیکھیں گے" (we will look at the next code).
- "Try running this code" → "یہ کوڈ چلا کر دیکھیں" (try running this code, natural), not
  a clunky literal "اس کوڈ کو چلانے کی کوشش کریں".
- "First, install Node.js" → "سب سے پہلے Node.js انسٹال کریں" (aap-form imperative,
  code stays Latin).
