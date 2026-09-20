# Hebrew (he) language guide

The Hebrew-specific realization of `global/voice.md`: script and direction, formality,
grammar, and worked examples. Term choices are in `glossary.md` and are binding.

## Script and direction (critical)

- **Write in Hebrew script, right-to-left.** Never transliterate Hebrew into Latin letters.
- **Numerals stay Western (0-9).** `30`, not any other form. The decimal separator is a
  period and the thousands separator is a comma (`2.5`, `1,000`), except in years (`2003`).
  Numeric ranges run right-to-left, small number first: `פרקים 5–12`, never `12–5`.
- **Punctuation is the ordinary Latin set** (`, . ? ! : ;`), no space before, one space
  after.
- **There is no capitalization in Hebrew, and no italics.** Where English uses italics or
  title case for emphasis or for a title, Hebrew uses **double quotation marks** (`"…"`) or
  **bold**. So `*italic*` in an English source does not survive into Hebrew as italics:
  convert it to quotes or bold. The one exception is a Latin-script English word given where
  the English itself explains a term, which stays italic because it is Latin script, not
  Hebrew.
- **Never put quotation marks around text the learner has to type.** They will type the
  quotes. This matters most for sentinel values and exact expected output, which
  `global/rules.md` already requires you to reproduce verbatim.
- **Gershayim (״) and geresh (׳) are abbreviation marks, not quotation marks.** Prefer
  writing words out (`על ידי`, not `ע"י`) rather than abbreviating at all.
- **No niqqud.** Adult prose is unvocalised, in כתיב מלא (plene spelling). Partial ניקוד עזר
  is allowed only where a word would genuinely be misread.

## Audience specifics

The general audience profile is in `global/voice.md`. In addition, for Hebrew:

- Readers are in Israel and read English technical terms comfortably. See "Loanword
  policy" below.
- **Where school CS Hebrew and adult industry Hebrew diverge, write adult industry
  Hebrew.** The Ministry of Education's school-textbook vocabulary is not the target
  register.

## Formality and address (critical)

Hebrew has no formal/informal pronoun split, but it has no gender-neutral second person
either, so every sentence addressed to the reader forces a choice of grammatical gender.

- **Address the reader in the plural: `אתם`, `תוכלו`, `לחצו`.**
- **Never use slash, dot, or blended inclusive forms** (`משתמש/ת`, `סטודנטים.ות`,
  `כתוֹב/י`).
- **Never use masculine singular** (`לחץ`, `נסה`) for the generic reader.
- **Prefer first person plural for anything framed as "let's":** `נסתכל`, `נתחיל`,
  `נכתוב`. It is genderless, and it matches the warm, we-are-doing-this-together voice. This is the workhorse form.
- **Never mix forms on one page** (`לחץ` alongside `לחצו`). One form, start to finish.

### Imperatives

- **Default step form: plural true imperative.** `נסו`, `כתבו`, `לחצו`, `הריצו`, `בדקו`,
  `הוסיפו`, `שימו לב`.
- **Future-as-imperative** (`תנסו`, `תריצו`) is a deliberate softener. Use it for an aside or
  a reassurance, never as the default.
- **Negative imperative is always `אל` plus future**: `אל תדאגו`, `אל תשכחו`. `אין לכתוב` is
  a regulation and fits hard rules only; `לא לכתוב` is curt and parental.
- **UI labels are not imperatives.** A button or control takes a verbal noun (`הרצה`,
  `שמירה`, `איפוס`), not `הרץ`/`שמור`. The same English verb therefore takes one form in a
  button label and another in a prose step: the button says `הרצה`, the sentence says
  `הריצו`. Headings likewise take a verbal noun.
- **Hortative:** bare first person plural (`נתחיל`, `נסתכל`) is the default. `בואו נתחיל`
  is warm, but use it **sparingly**: do not render every English "Let's" as `בואו נ…`.
  Never `הבה נתחיל`, which is literary and stilted for this audience.

### Register levers

What separates stiff Hebrew from warm Hebrew, in descending order of leverage:

- **Vocabulary layer.** `כעת`/`אולם`/`טרם`/`רכש` are the high-register siblings of
  `עכשיו`/`אבל`/`לפני`/`קנה`. Use the everyday ones.
- **`תכלית` reads as formal "the main reason/purpose"**, too heavy for this casual voice.
  Prefer an "actually" framing (`תכנות הוא למעשה...`) or a "whole thing with X" framing
  (`כל הקטע עם תכנות הוא...`).
- **Light-verb periphrasis is the main stiffness generator.** `לעשות שימוש` becomes
  `להשתמש`; `לקבל גישה` becomes `לגשת`; `לבצע התאמה אישית` becomes `להתאים אישית`;
  `יש אפשרות` becomes `יכול`; `כמו כן` becomes `בנוסף`.
- **`ש־` over `אשר`**, and `שבו` over a bare inflected preposition (`כתב העת שבו התפרסם`,
  not `כתב העת בו התפרסם`).
- **Demonstratives.** `בתרגיל הזה` is warm; `בתרגיל זה` is documentation voice.
- **Filler to delete on sight:** `יש לציין כי`, `ראוי לציין ש־`, `כידוע`, `כמובן`,
  `בסופו של דבר`, `למעשה`.

**Outright errors, not merely stiff:** `בכדי` for purpose (write `כדי`), `במידה ו־` for "if"
(write `אם`), `באם`, `נחשב כ־` (write `נחשב ל־`), `כמו לדוגמה`.

## Grammar and sentence rhythm

- **Keep SVO.** After a fronted time or place adverbial, formal Hebrew inverts to
  verb-subject (`לאחר יום הולדתו קנה דני חתול`). That is correct but high register. For
  this voice keep subject first.
- **Time expressions go late.** English fronts them; Hebrew prefers them at the end.
- **סמיכות versus של.** Lexicalised construct chains are neutral and should be kept
  (`שם המשתנה`, `קוד המקור`, `שורת הפקודה`). Productive construct chains and bound possessive
  suffixes (`שמו`, `ערכהּ`) lift the register; analytic `של` (`השם שלו`) is modern and warm.
  Definiteness in a construct goes on the **second** noun only.
- **Drop possessives English repeats.** Where English says "your computer" over and over,
  Hebrew is happier with `המחשב` than `המחשב שלך`.
- **Split long English sentences.** Hebrew reads badly with English-style chained
  subordination. Break one English sentence into two or three Hebrew ones.
- **Repeat prepositions across coordinated objects:** `בחיפה, בירושלים ובתל אביב`, not
  `בחיפה, ירושלים ותל אביב`.
- **Prefer `ככה` over bare `זה` when a conditional or comparison needs to point at "this"
  and "that" as two separate things.** `אם זה קורה, אז אני צריך לעשות את זה` reads as "if it
  happens, then I should do it" (both halves collapse onto the same `זה`), not the intended
  "if this happens, then I do that". Write `אם קרה ככה, אז אני צריך לעשות ככה`.
- **Prefer concise Hebrew over English-length padded prose.** Israeli readers of
  instructional text are impatient with wordiness, and visibly padded text (a point restated
  for emphasis, a redundant clause) reads as low-effort machine translation rather than
  warmth. Where English restates a point, Hebrew can usually just make it once.

### Translationese (תרגמת) anti-patterns

Signs you tracked the English rather than rebuilding the sentence:

| English-tracking | Natural Hebrew |
|---|---|
| `הינו` / `הינה` as a copula | `הוא` / `היא`, or drop it |
| `עם` for instrumental "with" | `ב־` / `באמצעות` |
| `בעקבות` for "following" | `אחרי` / `לאחר` |
| `בלבד` for "only" | `רק` |
| `הכי טוב` | `הטוב ביותר` |
| `תחת בנייה` | `בבנייה` |
| English tense backshift (`אמר לה שהיא הייתה חזקה`) | `אמר לה שהיא חזקה` |
| הופעל-binyan passives copying an English passive | an active verb |
| Redundant `אשר`, `הוא`, `היא`, `כאשר` | delete |
| `X הזה` for an abstract shared noun ("this journey", "this course") | `X שלנו` ("our X") or `X שלפנינו` ("the X ahead") — e.g. `מסע התכנות שלנו` / `מסע התכנות שלפנינו`, not `מסע התכנות הזה` |

## Right-to-left text and embedded Latin-script code (critical)

Embedding Latin runs in Hebrew prose is normal. Parentheses around a Latin run follow
Hebrew order, and Latin script makes quotation marks unnecessary, so **never quote a code
token**.

- **Put every Latin run in backticks**: identifiers, function names, keywords, paths, flags,
  placeholders. Never leave a bare unformatted Latin token in Hebrew prose.
- **Put the whole token inside the backticks, including its own trailing punctuation, and
  nothing that is not part of it.** Write `` `move()` ``, not `` `move` ``(). Write
  `` `src/` ``, not `` `src` ``/. Write `` `Python 3` `` when the digit belongs to the name.
- **Keep sentence punctuation outside the backticks:** ``נשתמש בפונקציה `move()`.``
- **Never leave a bare Latin token immediately followed by a digit.** The digit gets absorbed
  into the Latin run and glues to it.
- **Never open a paragraph, heading, list item, table cell or link text with a bare Latin
  token.** Rephrase so a Hebrew word leads, or backtick the token.
- **A Hebrew prefix before a Latin run or a digit takes a maqaf `־` (U+05BE), with no
  spaces:** `ב־JavaScript`, `ל־Exercism`, `ה־12`, `מ־2005`. Use the true maqaf, not a plain
  hyphen.
- **Do not hand-insert invisible bidi control characters** (RLM, LRM, LRE/RLE/PDF) into
  translated prose. Where markup is genuinely impossible (an HTML attribute, a catalog
  string, a subtitle) wrap the Latin run in LRI (U+2066) and PDI (U+2069), and never the
  deprecated embedding characters.

## Loanword policy

Native Hebrew is primary in prose, but there is no blanket rule in either direction:
follow the glossary term by term.

- **Never reach for an English word the glossary has localized**, and never nativise a term
  the glossary keeps as a loanword.
- **Leaving a term in Latin script mid-sentence is normal Israeli practice**, not a
  translation failure. See the glossary's "Keep in English" table for the list.
- **Software-workflow action verbs are transliterated into Hebrew characters and given a
  Hebrew verb conjugation, not kept in Latin script and not literally translated.** This is
  the same pattern already settled for `דיבוג` (not the literal `ניפוי שגיאות`, and not bare
  English `debug`): the Hebrew developer actually says a Hebrew-lettered, Hebrew-conjugated
  form. `merge` → `למרג'ג'`; "do a commit" → `לעשות קומיט` (`תעשה קומיט`); "compile it" →
  `לקמפל` (`תקמפל את זה`). Latin-script versions of these verbs read as breaking the flow of
  Hebrew reading, which is otherwise reserved for terms the reader would not recognise in
  Hebrew form.

## The שרשרת / מחרוזת collision: read this before writing about chains or strings

Three near-identical Hebrew words carry three unrelated ideas: `מחרוזת` (string), `שרשרת`
(the chain metaphor), and `שרשור` (string concatenation, same root as `שרשרת`). Everywhere
in Hebrew content here:

- **Never use bare `שרשרת` for the array metaphor.** Always use the qualified compound the
  glossary specifies.
- **Never swap `מחרוזת` and `שרשרת`**, however close their everyday meanings look.
- **Never shorten the qualified form for brevity.** If a pass is tempted to, flag it.
- **Keep concatenation and the chain metaphor visibly apart** on any page that has both.

## Style notes

- **Dashes:** prefer separate sentences, a comma, a colon, or parentheses. Where a dash
  genuinely reads best, use the Hebrew קו מפריד, an en dash with a space either side
  (`הריחוף מהיר – כמאה קילומטרים בשעה`). Never an em dash. Do not confuse either with the
  maqaf `־`, which joins and takes no spaces.
- **Rhetorical asides** ("So what does this look like in code?") stay as natural Hebrew
  rhetorical questions: `אז איך זה נראה בקוד?`

## Worked examples

Concrete Hebrew for the principles in `global/voice.md`. Each pair is stiff first, target
second.

**Instructional sentences:**
- "Let's look at the following code" → not `הבה נתבונן בקטע הקוד אשר לפנינו`, use
  `נסתכל על הקוד הבא:`
- "Try it out" → not `יש לנסות זאת`, use `נסו את זה!`
- "Let's begin" → not `הבה נחל`, use `נתחיל`
- "First, install Node.js" → not `ראשית, על המשתמש לבצע התקנה של Node.js`, use
  `קודם כול, התקינו את Node.js`
- "Try running this code" → not `נסה לבצע הרצה של הקוד דנן`, use `נסו להריץ את הקוד הזה`
- "Now you know how to write a function" → `עכשיו אתם יודעים לכתוב פונקציה` (dropping `כיצד`
  is the natural Hebrew)
- "Don't worry if this looks confusing" → not `אין להיבהל באם הדבר נראה מבלבל`, use
  `אם זה נראה לכם מבלבל, זה לגמרי בסדר`
- "In this exercise you'll build a small game" → `בתרגיל הזה תבנו משחק קטן`
- "This programming journey" → not the calque `מסע התכנות הזה`, use `מסע התכנות שלנו`
  ("our programming journey") or `מסע התכנות שלפנינו` ("the programming journey ahead")
- Where English repeats a Latin-script name across consecutive sentences, name it once and
  then carry it with `הוא`, rather than repeating the Latin run in every clause.
- "Do a commit" → not bare English `commit` and not a literal translation, use `תעשה קומיט`
- "Compile it" → `תקמפל את זה`; "merge" → `למרג'ג'`

**Titles and headlines** (natural word order, no drama, no redundancy):
- Prefer `דרך חדשה ללמוד לתכנת` over a literal rendering that doubles "practical" and
  "exercises".
- Prefer `מכירים את Exercism` or `Exercism יוצא לדרך` over an overdramatic literal "… is
  born".

**Calls to action** (specific and action-oriented):
- Signup: `התחילו עכשיו!` / `הירשמו עכשיו!`, not the vague `הצטרפו אלינו!`
- Trying: `נסו בעצמכם!`

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Hebrew noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Hebrew normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Hebrew
  speaker has reviewed a real interpolated string here yet.
