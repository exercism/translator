# Russian (ru) language guide

The Russian-specific realization of `global/voice.md`: formality, grammar, and style.

Readers are in Russia and in Russian-speaking communities elsewhere.

## Formality (critical)

- **Use the formal "вы" (vy) throughout**, and keep verb conjugations in **second person
  formal** consistently, start to finish, within a single piece. вы is the neutral,
  unmarked register of written Russian; it does not read as cold or distant the way English
  "sir/madam" formality would, so it is what realizes the "modern, informal address"
  principle of `global/voice.md` here.
- **Never use "ты" (ty)** for sustained address.
- **Get the warmth from three levers instead of from ты** (this is the important bit):
  - **Inclusive "давайте" + a perfective verb** for anything framed as a shared activity:
    "Давайте посмотрим", "Давайте попробуем", "Давайте начнём" (Let's look/try/begin). This
    reads exactly as warm as an English "Let's..." opener and pairs naturally with вы.
  - **Rhetorical questions** addressed to the reader: "А что, если у нас несколько
    значений?" (So what if we have several values?).
  - **Short, spoken-voice sentences and repetition for emphasis.**
- Reserve plain вы-imperatives ("Попробуйте", "Установите") for direct one-off
  instructions, and lean on "давайте" for anything framed as a shared activity.

## Grammar

Russian-specific rules that are easy to get wrong when translating from English:

- **Six-case declension.** Nouns, including technical ones, change form by grammatical
  role, not just by adding a preposition the way English does: "функция" (nominative) →
  "функции" (dative/genitive, e.g. "у функции", "к функции") → "функцию" (accusative, e.g.
  "вызвать функцию") → "функцией" (instrumental) → "о функции" (prepositional). Never treat
  a technical noun as invariant across a paragraph.
- **Gender agreement.** Adjectives and past-tense verbs agree in gender with their noun.
  "переменная" (variable) is feminine: "новая переменная", "переменная была объявлена".
  "массив" (array) is masculine: "новый массив", "массив был создан". "значение" (value)
  is neuter: "новое значение". Track each noun's gender consistently; don't default to one
  pattern across the whole document.
- **Verb aspect for imperatives and instructions.** Russian verbs come in
  perfective/imperfective pairs; match the aspect to what is actually being asked.
  - A one-off, complete instruction ("Install this", "Try it") takes the **perfective**:
    "Установите", "Попробуйте".
  - "давайте" for a one-time shared action also takes a **perfective** infinitive:
    "Давайте посмотрим" (let's look, once).
  - A genuinely repeated or habitual action takes the **imperfective**: "обычно вы будете
    использовать..." (you'll usually use...).
  - A stray imperfective on a one-shot instruction reads oddly, the way "be trying it"
    would in English.
- **Word order is topic-then-comment, not fixed SVO.** Known or contextual information
  tends to open the sentence, with the newer or more important information moving toward
  the end. Literal English word order is usually still grammatical Russian, but reads
  translated. Reorder for natural emphasis rather than mapping English clause-by-clause.
- **Numeral-noun case agreement.** The case (and sometimes gender) of a noun after a
  number depends on the number itself: "один элемент" (one element, nom.), "два элемента"
  (two elements, genitive singular), "пять элементов" (five elements, genitive plural).
  Don't treat the noun after a number as invariant.

## Style notes

- **The "X — is Y" trap (read this before translating any definition sentence).** Standard
  Russian punctuation *requires* a dash before "это" in a zero-copula definition ("Функция
  — это блок кода..."), which is exactly the sentence shape used constantly to define a
  term, and `global/rules.md` bans that dash. A bare comma does not substitute, so do not
  write the sentence and drop the dash. Restructure instead:
  - **Use a real verb**: "Функция **представляет собой** блок кода, который..." instead of
    "Функция — это блок кода...".
  - **Open with a rhetorical question**, which also suits the warm, spoken-voice register:
    "Что такое функция? Это блок кода, который..." (the "это" here answers a question
    rather than filling a subject-predicate dash slot, so no dash is required).
  - **Recast as a comparison** when the English defines by likeness, which teaching prose
    does constantly: "Functions are like little machines..." → "Функции похожи на
    маленькие автоматы...". The plural plus "похожи на" removes the copula slot entirely.
    This is usually the most natural of the three on concept pages.
  - Reach for these patterns by default whenever the English source defines something with
    "X is Y". Expect to restructure most definition sentences on a page, not just one.
- **Always say which brackets.** Say _круглые скобки_ in full on first mention, then short
  _скобки_ for the rest of the piece once the reader knows which ones are meant: "напишите
  `move`, а после него две круглые скобки" ... "написали `turnLeft`, а после него скобки".
- **Don't render English "a"/"one" as "один".** "One new way to learn programming" is
  "Новый способ изучать программирование", not "Один новый способ изучения
  программирования".
- **Quotation marks.** Use **angular « »** ("ёлочки") as the primary quotation marks.
  Use „ " only for a quote nested inside another quote.
- **Capitalization.** Russian titles and headings use sentence case (capitalize only the
  first word and proper nouns), never English-style title case.
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Russian rhetorical questions: "А как это выглядит в коде?"
- **Latin-script product names.** Keep them in Latin script and treat them as
  indeclinable: use a preposition to carry the grammatical role instead of a case suffix
  ("на Exercism", "с Exercism"), never an invented Cyrillic-style ending.

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Russian noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Russian normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Russian
  speaker has reviewed a real interpolated string here yet.
