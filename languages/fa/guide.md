# Persian / Farsi (fa) language guide

The Persian-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

## Audience specifics

The general audience profile is in `global/voice.md`. In addition, for Persian:

- Readers are primarily in Iran. This guide targets Iranian Persian (Farsi) specifically,
  not Dari (Afghanistan) or Tajik (Tajikistan, Cyrillic script); those are different
  locales with their own conventions, not covered here.

## Formality (critical)

- **Use the formal "شما" (shomā) throughout, never "تو" (to).**
- Keep verb conjugations in **second-person plural/formal (شما)** consistently, start to
  finish. Never mix in a تو conjugation for the same generic reader.
- Encouraging imperatives:
  - "بیایید این کد را با هم ببینیم" (Let's look at this code together)
  - "خودتان امتحان کنید" (Try it yourself)
  - "بیایید شروع کنیم" (Let's begin)

## Grammar

Persian-specific rules that English speakers get wrong:

- **SOV word order**, not English SVO: the verb comes last. "The function returns a
  value" → "تابع یک مقدار برمی‌گرداند" (function - a value - returns; verb-final).
- **Ezāfe construction over prepositional phrases.** Where English uses "of" or "the X's
  Y", Persian normally links two nouns with the unwritten-but-pronounced ezāfe (-e/-ye):
  "the function's input" → "ورودی تابع" (input-e function), not a literal preposition
  chain. Use ezāfe freely; it is the ordinary, unmarked way to express possession/
  belonging in Persian technical prose.
- **Compound (light) verbs are the norm**, not single native verbs, for most technical
  actions. "to define" is "تعریف کردن" (definition + "to do"), "to update" is "به‌روزرسانی
  کردن", "to call (a function)" is "فراخوانی کردن". Do not force a single-word verb where
  the natural Persian phrasing is noun + کردن/شدن.
- **No grammatical gender.** Persian nouns, pronouns, and verbs do not mark gender: there
  is no masculine/feminine agreement to track on imperatives or generic "you." Do not
  import a gendered default by habit.
- **Given-before-new**: known information opens the sentence, the newest or most important
  information sits closer to the verb-final position. Reorder for natural emphasis rather
  than mapping English clause order directly; a long English sentence usually reads better
  broken into two shorter Persian ones than translated as one long chain.
- **Nested clauses use که** (that/which/who): where English can juxtapose a noun and a
  describing clause with a colon or a dropped relativizer, Persian needs an explicit که
  linking them. "There's one more thing that checks whether two values are equal" → "یک مورد
  دیگر هم هست **که** بررسی می‌کند آیا دو مقدار برابرند یا نه", not a colon-juxtaposed
  construction.
- **The object marker را sits immediately after the object it marks**, never after a trailing
  که-clause. "run the same section of code lots of times" → «یک بخش یکسان را از کد بارها …
  اجرا کند», not «یک بخش یکسان از کد را …»; "do the next thing I say 10 times" → «کار بعدی را
  که می‌گویم ۱۰ بار انجام بده», not «کار بعدی که می‌گویم را …». Sweep for any noun + که-clause
  + را chain and move the را forward.
- **No comma before و.** Unlike English, Persian does not put a comma before the conjunction
  و: «یک برچسب روی آن بگذارد و چیزی در آن قرار دهد». If the clause chain gets long enough to
  need a break, start a new sentence instead of adding a comma.
- **Naming a class of thing takes the singular**, even where English uses the plural: "We call
  these repeat instructions loops" → «ما به این دستورهای تکرار، حلقه می‌گوییم», not «حلقه‌ها
  می‌گوییم». This includes the page's own `title` in the frontmatter, which names the class:
  "Arrays" → «آرایه», not «آرایه‌ها».
- **An adjective or ordinal standing alone needs its noun.** Persian does not let a bare
  adjective carry the object slot the way English's "the first" does: "if we want to get the
  first out" → «اگر بخواهیم اولین **عنصر** را بیرون بیاوریم», never «اگر بخواهیم اولین را
  بیرون بیاوریم». Sweep for any اولین/دومین/آخرین (or a bare descriptive adjective) sitting
  directly before را or a verb, and supply the noun it describes.
- **Never reach for چیز (thing) by default.** Work out what the sentence actually means and
  use the specific word: «موارد مختلف را به هم بچسباند», «اطلاعات را به خاطر بسپارد»، «به
  همه‌ی این موارد می‌پردازیم». Where English's "thing/things/anything" is genuinely vague and
  no specific noun fits, prefer a construction that drops the noun entirely («می‌توانند هرچه
  باشند», not «می‌توانند هر چیزی باشند») over stacking چیز through a paragraph. English uses
  "thing" far more freely than Persian does, so a 1:1 mapping always over-produces it.
- **Drop a trailing را where the marked object already ends the clause** in a short
  contrastive tail: «نه فقط یک چیز», not «نه فقط یک چیز را». This is about the tail
  specifically; a normal object mid-sentence keeps its را per the rule above.
- **Don't double up on این (this).** A sentence explaining the purpose of "this X" needs
  only one این: "هدف تمرین این است که..." (the goal of the exercise is that...), not "هدف
  این تمرین این است که..." (goal-of-this-exercise this is that...). Check any "هدف/منظور ...
  این است" construction for a stray extra این before it. Equally, do not let این stand in as
  a filler for a concept you have just named: name it again. «نوع داده‌ی ترکیبی نوع داده‌ای
  است که می‌تواند چندین چیز را در خود نگه دارد», not «این نوع داده‌ای است که…».

## Numerals (critical)

**Use Persian-native digits (۰۱۲۳۴۵۶۷۸۹) in running prose, never Western digits (0-9) and
never Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩).** Persian and Arabic-Indic digits look similar but
differ in Unicode code point for 4, 5, and 6 specifically; never emit a lookalike
Arabic-Indic character.

This rule applies only to prose. Code blocks, inline code, and any literal output a program
prints stay exactly as the source has them (Western digits), per the global rule that code
is never altered. "خروجی برابر با ۳۰ است" (the output equals 30) in prose; `return 30` in
code stays `return 30`.

**Where each digit set goes, exactly:**

- **Persian digits** in all running prose, including headings, list items, and `alt` text
  (alt text is prose a reader hears): "وقتی ۳۴ سال پیش برنامه‌نویسی یاد گرفتم".
- **Western digits** in everything machine-read: frontmatter values (`en_md5`, any numeric
  field), HTML/JSX attribute values such as `width="421"` and `height="400"`, URLs, file
  paths, and code. Never convert these; a Persian digit there breaks the value.
- **Western digits in any value the learner must reproduce exactly**, even when it sits in
  the middle of a Persian sentence and carries no code formatting. A digit is part of the
  string the checker compares, so converting it makes the exercise unpassable. Write
  «۶:۳۵ را به‌صورت "6:35am" نمایش دهید»: the time being described takes Persian digits, the
  literal the learner must produce keeps Western ones.

Quotation marks never decide this. A value in guillemets or bare quotes is the same string
to the checker as one in backticks, so the absence of code formatting is never a reason to
convert its digits. See the sentinel rule in `global/rules.md`.

## Right-to-left text and embedded Latin-script code (critical)

Handling Latin-script code tokens inside RTL Persian prose:

- **No manual bidi markers needed.** Never insert directional-override characters around
  an embedded Latin token; the renderer's native bidi algorithm handles the mixed-direction
  text.
- **Use inline code formatting (backticks) for every code token.** In RTL prose the
  monospace/code styling is what visually separates an embedded LTR token (a variable
  name, a keyword like `if`, a function name) from the surrounding Persian text. Never
  leave a code token as bare unformatted Latin text inside Persian prose.
- **Keep the surrounding Persian sentence grammatically whole around the embedded token**,
  using ezāfe or a normal noun phrase the same way you would with any Persian noun:
  "از کلیدواژه‌ی `if` استفاده کنید" (use the keyword `if`) reads naturally; do not
  restructure a sentence awkwardly just to avoid placing a Latin token mid-sentence.

## Loanword policy: native Persian primary for core CS vocabulary

- **Use the glossary's native Persian term as primary in prose**, not the English word.
- **Never put the English term in brackets after the Persian one**, anywhere, for any term,
  including where the English itself explains the term. The Persian term always stands alone,
  however technical it is: "تابع", not "تابع (function)" and not "تابع (_function_ به
  انگلیسی)".
- **A small set of terms stay in Latin-script English inside Persian prose**: see the
  glossary's "Keep in English" table (API, CLI, framework, and similar terms real Iranian
  developers keep in English day to day). Where such a term is an acronym, do not leave it
  bare or merely transliterated; explain what it means in Persian, per the acronym rule in
  `global/voice.md`. Nothing else earns a bracketed gloss.

## Describers (the timeline of what the learner's code did)

- **Write a past-tense describer in the passive, never in the third-person active.** These
  strings narrate an action with no doer named ("drew a rectangle…", "returned Yuki's
  choice"), and a Persian active verb leaves the reader hunting for a subject that was never
  mentioned. «مستطیلی … رسم شد», not «مستطیلی … رسم کرد»; «یوکی به عنوان خروجی برگردانده شد»,
  not «انتخاب یوکی را برگرداند»; «نتیجه‌ی بازی … اعلام شد», not «… اعلام کرد».
- **Drop a possessive that Persian does not need.** "Returned Yuki's choice" becomes «یوکی به
  عنوان خروجی برگردانده شد», not «گزینه‌ی یوکی برگردانده شد»: naming what was returned is
  enough, and the possessive construction reads as translationese.
- **A describer that says a surface was emptied is stated as a fact, not as an action**, because
  the passive of "cleared" reads clumsily: «الان بوم خالی است» (the canvas is now empty), not
  «بوم پاک شد».
- **This applies only where the English is a past-tense record.** Where a describer is a
  present-tense description of what an instruction does ("Move the character forward one
  cell"), keep the Persian present indicative («شخصیت را یک خانه به جلو می‌برد») and do not
  make it passive.

## Style notes

- **Em dashes:** in Persian prose the natural replacements are a **comma (،)** for a
  mid-sentence aside, a separate sentence, or parentheses for a genuine aside.
- **Punctuation:** use Persian-specific marks in prose: `،` (the Persian comma) and `؟`
  (the Persian question mark). Do not use the Latin comma or question mark in Persian
  prose. This does not apply inside code blocks or inline code, which are reproduced byte
  for byte per `global/rules.md`.
- **Quotation marks: always Persian guillemets «…»**, for quoted speech, quoted titles, and
  quoted phrases alike. These are the standard Persian marks. Never use `"…"`, `'…'`, or the
  German-style low quotes `„…"`, whatever the English source uses. Punctuation that belongs
  to the quoted sentence stays inside the guillemets: «اگر این اتفاق افتاد، پس باید این کار
  را بکنم.» This includes named UI elements referenced in prose (a button, a menu item, a
  specific in-app command): wrap the name in «…» so it reads as a specific, quoted name
  rather than as an ordinary word carrying its everyday meaning.
- **A term being introduced for the first time goes in guillemets**: the first time a page
  names a term the learner has not met before, wrap it in «…» so it reads as the name of a
  new thing rather than as an ordinary word: «کلیدواژه»، «بلوک کد»، «حلقه». Only the
  introduction is marked; later mentions on the same page are written plain.
- **Boolean values go in guillemets**: write «درست» and «غلط» whenever they name the boolean
  values rather than the everyday words, and put «منطقی» in guillemets on its first mention
  on a page. Without them a Persian reader cannot tell a boolean value from ordinary "true"/
  "correct" usage, or the data type from the everyday adjective "logical".
- **English "so" is not always پس.** It covers consequence, sequence, contrast and mere
  linking; translate the sense, not the word. "So how do we do this…" → «حالا چطور …»; "So
  he gets out his pen" → «بعد از این کارها …»; "So what do these conditions look like?" (a
  contrast) → «اما این شرط‌ها …». Reserve پس for a genuine consequence.
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Persian rhetorical questions: «پس این در کد چه شکلی است؟»
- **Latin-script product names** stay in Latin script. Ezafe and possessive constructions
  attach to them as to any Persian noun, and there is no reason to restructure a sentence
  around a name.

## Worked examples

Concrete Persian for the principles in `global/voice.md`.

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid an overly dramatic register for a launch announcement; prefer a simple, warm one
  («… را بشناسید», "meet …", or «… شروع به کار کرد», "… has started").
- Prefer natural, concise word order: «روشی تازه برای یادگیری برنامه‌نویسی» (a new way to
  learn programming), not a redundant doubling like «تمرین‌های عملی و کاربردی» where one
  adjective already covers the meaning.

**Calls to action** (specific, action-oriented):
- Signup: «همین حالا شروع کنید» (Start now) / «همین حالا ثبت‌نام کنید» (Register now), not
  the vague «به ما بپیوندید» (Join us).
- Trying: «خودتان امتحان کنید» (Try it yourself) / «رایگان امتحان کنید» (Try it for free).

**Natural phrasing** (good vs. stiff/literal):
- "Let's learn React" → «بیایید React را یاد بگیریم» (product name stays English, verb and
  structure are natural Persian).
- "First, install Node.js" → «اول، Node.js را نصب کنید» (شما-form imperative, product name
  unchanged).
- "Try running this code" → «این کد را اجرا کنید و ببینید» (natural, shomā-form), not a
  stiff literal «سعی کنید این کد را اجرا کنید».
