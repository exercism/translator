# Polish (pl) language guide

The Polish-specific realization of `global/voice.md`: formality, grammar, typography, and
worked examples. Term choices are in `glossary.md` and are binding.

## Formality (critical)

- **Use the informal "Ty" form throughout**, capitalized (Ty, Tobie, Ciebie, Twój/Twoja/
  Twoje).
- **Never use "Pan"/"Pani"/"Państwo"** (formal address). They are wrong for this context.
- **Split by sentence purpose, not blanket "you"-mapping every English sentence:**
  - Direct, step-by-step instructions and calls to action use "Ty" with an imperative
    verb: „Kliknij tutaj”, „Spróbuj sam”.
  - General conceptual explanation takes **impersonal or się constructions** instead of
    literal "you"-address: „W tym przypadku używa się instrukcji `if`”, not „Ty używasz
    instrukcji `if`”; „Ten przypadek działa nieco inaczej, niż mogłoby się wydawać”, not a
    forced "you" address.
- **Avoid gendered past-tense direct address.** Polish past-tense verbs agree with the
  addressee's grammatical gender when used with "Ty" (_zrobiłeś_ vs _zrobiłaś_), and the
  learner's gender is unknown. Prefer present tense, imperative, or infinitive phrasing
  over past-tense "you did X" constructions. If a past event must be described, phrase it
  impersonally rather than from the reader's point of view.
- **The same applies to future-tense "will be able to" constructions.** Do not write
  „będziesz potrafić budować” (a bare infinitive after `będziesz` reads as off), and do not
  pick between „będziesz potrafił budować” and „będziesz potrafiła budować” (they force a
  gender choice we cannot make). Rephrase with a verb construction that carries no gender
  marking, e.g. „nauczysz się budować”.

## Grammar

Polish-specific rules that English speakers get wrong:

- **Word order is free, so use it for emphasis: new information goes last.** The seven
  cases carry the grammatical roles, so follow **theme before rheme**: known or contextual
  information first, new or important information toward the **end**. Do not mechanically
  preserve English clause order. Where English fronts the important element for emphasis
  ("It's the value that changes"), Polish moves it to the end rather than using a cleft:
  „Zmienia się właśnie wartość.”
- **Case governs prepositions and verb complements**, not English-style fixed prepositions:
  - "in the code" → „w kodzie” (locative)
  - "to the function" → „do funkcji” (genitive)
  - "with React" → „z Reactem” (instrumental)
  - "Let's learn functions" → „Nauczmy się funkcji” (genitive after _uczyć się_; not
    „Nauczmy się o funkcjach”, which reads as translated)
- **Never put _o_ after _pytać_/_zapytać_/_spytać_ before a subordinate clause.** English
  "ask about" takes _o_ only before a noun („zapytaj o wiek”, „zadawaj pytania o swój
  kod”), which is correct and stays. Before a clause opened by _jak_, _co_, _dlaczego_,
  _czy_ and the like, the verb takes the clause directly:
  - "Ask about how to approach this exercise" → „Zapytaj, jak podejść do tego ćwiczenia”
    (not „Zapytaj o, jak...”)
  - "Ask about what this error means" → „Zapytaj, co oznacza ten błąd”
- **Untranslated English tech nouns (React, JavaScript, ...) should not be declined
  directly.** Precede them with a Polish classifier noun that carries the case ending
  instead, leaving the English word closer to its bare form:
  - "with the React library" → „z biblioteką React” („z biblioteką” carries the
    instrumental case)
  - "in JavaScript" → „w języku JavaScript” (not „w JavaScripcie” as a default choice)
  - Where declining the bare English word directly is genuinely more natural (as in „z
    Reactem” above, which is common and fine), follow standard Polish spelling rules for
    it: an apostrophe before the ending if the word ends in a silent letter, no apostrophe
    if the final letter is pronounced.
  - This rule covers **unnaturalised** English names only (product and language names).
    Loanwords that Polish has absorbed and spells as its own words (_interpreter_,
    _komponent_, _moduł_, _operator_, _framework_) are ordinary Polish nouns: decline them
    normally (_interpretera_, _interpreterem_, _interpreterowi_) and do not prop them up
    with a classifier noun.
- **Aspect (perfective vs imperfective) has no English equivalent and matters for
  imperatives.** A one-off instructional imperative wants the **perfective** aspect; the
  imperfective reads as nagging or "keep doing this repeatedly":
  - "Click here" → „Kliknij tutaj” (perfective; not „Klikaj tutaj”, which reads as
    impatient/repetitive)
  - "Try it out" → „Spróbuj” (perfective, one-off). Use „Próbuj” only for genuinely
    repeated practice, e.g. „Ćwicz codziennie” (Practice every day).
  - "Try running this code" → „Spróbuj uruchomić ten kod”
  - "Let's look at the following code" → „Zobaczmy poniższy kod” (perfective,
    1st-person-plural)
  - "Let's begin" → „Zacznijmy”
  - When translating any imperative, ask "is this a single instruction or an
    ongoing/repeated action?" and pick the aspect accordingly; do not default to one
    aspect out of habit.
- **Gender agreement** applies to adjectives, pronouns, and past-tense verbs. Each noun has
  a fixed grammatical gender that any modifying adjective must agree with, so check the
  glossary's gender note before attaching an adjective to a term.

## Style notes

- **Em dashes:** in Polish prose the natural replacements are a **comma** for a
  mid-sentence aside, or two separate sentences. A **hyphen (-)** is also acceptable where
  it reads better, keeping its normal jobs: compound words and any suffixing directly onto
  a code token or number.
- **Quotation marks:** use Polish quotes, „ (U+201E) opening and ” (U+201D) closing:
  „przykład”. Never straight `"` or English-style curly quotes. A full stop goes **after**
  the closing quotation mark, never before.
- **Headings and titles use sentence case, not English Title Case.** Capitalize only the
  first word (and any proper nouns within it). Do not carry over English heading
  capitalization patterns.
- **Numbers, if they appear in prose or examples:** decimal comma, not period (`1,5` not
  `1.5`); a space as the thousands separator, not a comma (`16 384` not `16,384`). This
  does not apply to numbers inside code, which stay exactly as written in the source.
- **Latin-script product names** take standard Polish endings where a sentence needs them.
  Flag if an inflected form reads awkwardly in a specific sentence.
- **Calls to action** are specific and perfective: „Zacznij teraz!”, „Rozpocznij naukę!”,
  „Spróbuj sam!”, „Przetestuj za darmo!”, never the vague „Dołącz do nas!”.

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Polish noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Polish normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Polish
  speaker has reviewed a real interpolated string here yet.
