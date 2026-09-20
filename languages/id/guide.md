# Indonesian (id) language guide

The Indonesian-specific realization of `global/voice.md`: formality, grammar, and style.

Write standard (baku) Bahasa Indonesia for readers in Indonesia, in the warm tutorial
register of Indonesian dev-education content, not the formal register of software and
product localization.

## Formality (critical)

- **Use the informal "kamu" / "-mu" throughout.**
  - "You need to learn this" → "Kamu wajib mempelajari ini"
  - "Write your answer in the comments" → "Tulis jawabanmu di kolom komentar"
- **Never use "Anda"** (formal, capitalized): not "Anda perlu mempelajari hal ini", not
  "Tulis jawaban Anda...".
- **Never use Jakarta-colloquial slang** ("gue" for "I", "lo"/"lu" for "you"). Standard
  grammar and spelling stay baku throughout; only the address form is informal.
- Use **"kalian"** (informal plural) only when addressing the reader as part of a group;
  default to singular "kamu".
- Encouraging imperatives:
  - **"Mari kita..."** for "let's..." ("Mari kita mulai" = Let's begin; "Mari kita lihat
    contohnya" = Let's look at the example)
  - **"Silakan..."** for a polite invitation to act ("Silakan buka teks editor" = Go ahead
    and open your text editor)
  - **"Coba..."** for "try..." ("Coba jalankan kodenya" = Try running the code)
  - **"Ayo..." / "Yuk..."** and the **"-lah"** suffix add warmth but are flourishes, not
    defaults; use them occasionally, not on every instruction.

## Grammar

Indonesian-specific rules that English speakers get wrong:

- **Word order is SVO**, but modifiers and possessives follow the noun, the reverse of
  English ("described, then description"):
  - "a red bag" → "tas merah" (bag red), never "merah tas"
  - "your book" → "bukumu" (book-your); "your answer" → "jawabanmu", never a separate
    possessive word before the noun
- **No inflection, no grammatical gender, no verb tense marking by conjugation.** Time and
  aspect are carried by context or adverbs ("sudah" = already, "akan" = will), not verb
  endings.
- **Plurals via reduplication** ("buku-buku" = books) exist but are used sparingly. If a
  number or context already makes plurality clear, don't reduplicate; it reads stiff.
  "Para" marks plurality for people ("para pengguna" = users).
- **Prefer active voice.** Indonesian has a productive passive ("di-" prefix) and uses it
  naturally, but don't carry over English's heavy nominal chains ("the implementation of
  the configuration of..."). Rebuild them as verb-led active clauses.
- **Sentences may open with a conjunction** ("Tapi...", "Jadi...", "Dan...") for a
  friendlier, less formal tone. This is normal in Indonesian and a useful tool for the
  warm mentor voice; don't avoid it out of English-style habit.
- **Drop possessives Indonesian would drop.** English leans on "your"/"its" more than
  Indonesian does; when context already makes ownership clear, omit the possessive rather
  than translating it every time.
- **"We" is two different words: use inclusive "kita" by default.** Indonesian splits
  English "we" by whether the person being addressed is included.
  - **"Kita"** includes the reader. This is the normal case in this course, where "we" means
    the reader and the writer working through something together: "Semua hal ini akan kita bahas"
    (we'll cover all of this), "Mari kita mulai" (let's begin).
  - **"Kami"** excludes the reader: the authors and someone else, doing
    something the learner is not part of. Use it for things done *for* the learner, not
    *with* them: "tiga instruksi pertama sudah kami tuliskan" (we've already written the
    first three instructions for you).
  - Getting this backwards is jarring to a native reader, and English gives no signal, so
    decide it explicitly every time: ask "is the learner doing this too?" If yes, "kita".
- **Don't force "adalah" (is) onto every English copula.** "Python adalah bahasa
  pemrograman" is natural for a definition, but not every "is" needs "adalah."

## Style notes

- **Em dashes:** use a comma for a mid-sentence aside, or split into two sentences.
- **Punctuation and numbers in prose** (never inside code, output, or numeric literals in
  code): decimal separator is a **comma**, thousands separator is a **period**
  ("Rp1.000.000,50", not "1,000,000.50"). Quotation marks are curly doubles `“…”`, with
  curly singles `‘…’` for a nested quote.
- **Headings use sentence case** (capitalize the first word and proper nouns only), not
  English-style Title Case: "Cara membuat fungsi pertamamu", not "Cara Membuat Fungsi
  Pertamamu".
- **Rhetorical asides** ("So what do these conditions look like?") stay natural rhetorical
  questions in Indonesian: "Nah, seperti apa sih kondisi-kondisi ini?"
