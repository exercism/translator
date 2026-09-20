# Ukrainian (uk) language guide

The Ukrainian-specific realization of `global/voice.md`: formality, orthography, and
term-clarification rules.

## Formality (critical)

Ukrainian has a full ти (informal singular) / ви (formal, or plural) distinction.

- **Use the collective "ми" (we) plus inclusive imperative forms throughout**: "Спробуймо"
  (Let's try), "Розглянемо" (Let's look at), "Почнімо" (Let's begin).
- **Do not use direct "ти"** address.
- **Avoid pure formal "ви"** as the primary register.
- **In practice this means a page can contain no second-person direct address at all.**
  English "you" becomes "ми" ("when you write code" -> _коли ми пишемо код_), and English
  imperatives become inclusive first-person-plural ones. A finished page with zero ти and
  zero ви in it is correct, not an omission.
- **Exception: a discrete task handed off to the learner to do themselves.** When a
  sentence's whole job is to instruct the learner to go and do one specific, discrete thing
  on their own (a standalone exercise instruction, not narrative prose), use the plain
  imperative addressed to the learner (додайте ще вказівок) rather than the inclusive form
  (додаймо ще вказівок), which leaves it ambiguous who is actually meant to act. The
  surrounding prose stays inclusive. This is a separate, narrower device (imperative mood,
  no "ти"/"ви" pronoun implied) used only for these handoff instructions; it does not
  reopen the ти/ви question above. **An exercise's message catalog counts too.** A message
  that tells the learner what to go and change in their own solution (a check's failure
  message, a "you're almost there" nudge) is a handoff instruction and takes the plain
  imperative: Спробуйте не вкладати один цикл в інший, Винесіть пошук в окрему функцію. A
  hint that instead walks through an approach alongside the learner is narrative and stays
  inclusive (Пройдімося циклом по..., Для кожної літери перевірмо...).

## Orthography

Ukrainian-specific mechanical rules that are easy to get wrong from outside the language:

- **Quotation marks.** The primary quotation marks are **angular « »** ("лапки-ялинки").
  Use „ " only for a quote nested inside another quote. Do not carry over the „ "-primary
  convention that some other languages use.
- **Capitalization.** Ukrainian titles and headings use sentence case (capitalize only the
  first word and proper nouns), never English-style title case.
- **The apostrophe.** Use the modifier letter apostrophe **ʼ (U+02BC)**, not a straight `'`
  or a curly `'`. It is written after hard б, п, в, м, ф (and after г, к, х, ж, ч, ш, р in
  loanwords) before я, ю, є, ї when they carry a full [й + vowel] sound: обʼєкт, компʼютер,
  сімʼя. It is *not* written when a labial is itself preceded by another consonant (except
  р): свято, морквяний. Keep this glyph consistent everywhere the sound occurs, including
  inside the glossary itself and inside the examples in this guide.

## Grammar and structure

Structural constraints that come up in every page and are easy to get wrong from outside
the language.

- **Copula sentences take a dash, and in Ukrainian that dash is grammar, not style.**
  Ukrainian has no present-tense "to be", and the dash standing in for the omitted copula
  marks the predicative relationship between subject and predicate. Prefer a rephrase that
  carries the predicate with a verb, which is usually the more natural sentence anyway:
  - "In this course, your interpreter is the browser" -> _У цьому курсі роль інтерпретатора
    виконує браузер._

  **But when the sentence cannot be recast without losing it, write the dash.** This is the
  Ukrainian exception to the no-em-dash rule in `global/rules.md`, agreed with native
  reviewers: that rule was written against an English AI-writing tell, and it never meant
  "write ungrammatical Ukrainian". Two shapes need it, and a colon is not a substitute in
  either (a colon announces an enumeration or a clarification of what precedes it, so
  putting one between a subject and its predicate is syntactically wrong, not merely odd):
  - **Subject plus an infinitive or noun predicate**, especially in short aphoristic lines
    where a rephrase would flatten the shape: _Найкращий спосіб навчитися - навчати
    інших._, _Найкращий спосіб навчитися - створювати!_
  - **A wrap-up after a list**, where _це_ links back to what was just enumerated:
    _Пройтися циклом по чомусь, зібрати потрібні частини в новий масив і повернути його -
    це прийом, до якого ми будемо звертатися знову і знову._ (Reversed, predicate first,
    the same sentence would take a colon.)

  **Write it as a spaced ASCII hyphen (` - `), never an em dash (—).** That is the form
  already agreed and live across Ukrainian content.
- **Replacing an em dash elsewhere.** Outside the copula cases above, for a mid-sentence
  aside, the natural Ukrainian replacement is a comma, or two separate sentences.
  - **A repeated predicate** ("X is ..., and Y is ...") drops the second verb and marks the
    gap with a dash: "у якому ключами є слова, а значеннями **-** їхні частоти". Repeating
    _є_ in both halves is wrong, and a dashless rephrase (_слугують_) was rejected by the
    reviewer.
  - **A cause-pointing aside** ("if X, [dash] Y follows") takes the correlative **то**
    instead of a dash: "Якщо це літера, цифра або апостроф, **тоді** символ належить..."
    (lower-case _тоді_; an earlier attempt with _то_ was rejected by the reviewer).
- **Dative case: -ові/-еві vs -у/-ю.** The -ові/-еві ending is for people and other
  living/sentient referents (_другові_, _братові_). For inanimate objects, the -у/-ю ending
  reads more natural (_інтерпретатору_, not _інтерпретаторові_, when the sentence is
  treating "interpreter" as a role/object rather than addressing a person by name). This
  applies generally, not just to "interpreter": check any dative noun against whether its
  referent is a person or a thing.
- **Conjunction euphony: і vs й.** Ukrainian avoids awkward consonant clusters at word
  boundaries: use **й** before a word starting with a vowel, and **і** (not й) before a
  word starting with "в" or with two or more consonants in a row, e.g. _створювати і
  власні машини_ (not _й власні_), because "власні" starts with в.
- **Future tense: prefer the analytic form.** Ukrainian has two future tenses for
  imperfective verbs: a synthetic one-word form (_використовуватимемо_) and an analytic
  "будемо + infinitive" form (_будемо використовувати_). Prefer the analytic form unless
  the synthetic form is clearly more natural in a specific sentence.
- **A Latin-script name ending in -i is indeclinable.** Ukrainian gives it no case endings
  and no added ending in the genitive, dative, or instrumental; the bare form is correct and
  complete, and is not an evasion of a missing form, so do not paraphrase around it. Case is
  carried by the surrounding words.
- **Where a narrated actor is male, every verb describing his actions takes the masculine
  form.** This is easy to miss where the verb is the first word of a string:
  _намалював_, _очистив_, _перетворив_, _оголосив_, _повернув_ (never _намалювала_,
  _очистила_, and so on).

## Style notes

- **Logical operators `&&` and `||`.** Spell the operator out in full at its first
  occurrence in a page: `&&` (логічне і), `||` (логічне або). Every later occurrence on
  that same page uses the short form only: `&&` (і), `||` (або).
- **"Stick things together" / combine, join:** when the English is describing an abstract
  capability (combining or joining values, string concatenation), use _поєднувати_, not
  _склеювати_. _Склеювати_ is literally glue-stick gluing and is reserved for passages that
  actually depict physical gluing; plain "combine things" prose is not that.
- **"To look like" / "to have the appearance of":** never _виглядати_. Use _мати вигляд_
  (e.g. "Готова стіна повинна мати такий вигляд:", not "Готова стіна має виглядати так:").
- **Code the learner writes never _зʼявляється_.** _Зʼявитися/зʼявлятися_ implies something
  turning up on its own, which is wrong for a line the learner types. Use _використати_ or
  _застосувати_ instead (e.g. "Функцію `rectangle` можна використати в коді лише один раз!",
  not "Функція `rectangle` може зʼявитися в коді лише один раз!").
