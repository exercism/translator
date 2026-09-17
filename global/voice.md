# Voice and audience

## Audience

- Complete programming beginners, with no assumed prior knowledge.
- Primarily ages 18-35, but the writing stays accessible to all ages.
- They expect modern, friendly, web-native communication, the tone of a good online
  learning platform, not a textbook or a dry manual.
- They value clear, structured, supportive learning.

Write as if you are a programming mentor warmly welcoming a new student.

## Voice and tone

- **Warm, supportive, conversational**, as if teaching a friend.
- **Modern and informal.** Where a language distinguishes formal and informal address,
  use the informal register that modern online and educational content uses. The exact
  form is defined in each language guide.
- **Encouraging.** Use inviting imperatives ("Let's look at...", "Try it out",
  "Let's begin") rather than distant or clinical phrasing.
- **Confident but not dramatic.** Enthusiasm, yes; hype and melodrama, no.

## Writing principles

- **Translate intent, not words.** See `rules.md`.
- **Use natural word order.** Do not carry English sentence structure into the target
  language. Break long English sentences when the target language reads better shorter.
- **Titles and headlines:** natural word order, no melodrama, no redundancy.
- **Calls to action:** specific and action-oriented ("Start now!") rather than vague
  ("Join us!"). Keep energy and enthusiasm in closing sections while staying natural.
- **Acronyms and foreign terms:** do not assume the reader knows English acronyms.
  Explain them in the target language rather than transliterating or leaving them bare.
- **Default to the ordinary, common word.** If a word is normal and common in the
  language, that is what to use, whatever its etymology. Do not prefer a purist coinage,
  a rare form, or an invented native equivalent over the word real speakers and real
  developer writing in that language actually use. This cuts both ways: where a language's
  own technical writing genuinely uses the English word, the English word *is* the ordinary
  word and is the right choice; where it does not, the native word is. The test is what the
  reader already says, never where the word came from. This applies to all vocabulary, not
  just technical terms.
- **Consistency:** phrasing and register stay consistent too, not just terms (which the
  glossary enforces; see `rules.md`).

## Introducing terms: the source markup model

The English source pages carry two custom inline tags that tell the translator how to
handle a term. They are authored in the front-end and reach a pass through whichever copy of
the English it reads. They are the **only** trigger for clarifying a term.

- `<define>X</define>` marks the one spot, chosen by the author, where term `X` is
  introduced or clarified. There is no "first use" auto-detection: the author decides where
  by placing the tag, and it happens exactly once, exactly there.
- `<literal>X</literal>` marks `X` to be kept verbatim, with no gloss.

A `<define>` may carry an optional `info` attribute, `<define info="...">X</define>`, giving
the author's plain-English hint about what `X` means. Use it to write the gloss when the term
is opaque on its own, typically a code identifier whose meaning is not obvious from the name,
e.g. `<define info="Math means maths; randomInt means random integer">`Math.randomInt`</define>`.
Translate the hint's meaning into the target language for the gloss; do not copy the English
hint verbatim. The attribute is advisory, not a script: if the natural gloss differs, follow
the language guide. `info` is stripped along with the tag, so it never reaches any reader.

A `<define>` may instead carry an `en` attribute, `<define en="...">X</define>`, which is the
opposite of `info`: **prescriptive, not advisory.** Its value is the exact English text to
place in the bracketed English gloss, honoured **verbatim**, never reworded, translated, or
dropped. Use it when the gloss must show something more than the bare term, e.g. tying an
acronym letter to its word: `<define en="red (R)">red</define>` renders (target-primary,
Hungarian shown) as `piros (_red (R)_ angolul)`. The rest of the format is unchanged: the
English text is italic, and the marker word and its position (suffix, prefix, or none) still
come from the language guide, so `en` sets only *what* English appears in the brackets, not
*where* the marker goes. Use `en` (not `info`) whenever the exact bracket content matters;
`en` is stripped with the tag and never reaches any reader as markup.

**Never auto-gloss.** Do not introduce, clarify, or parenthesise any term on your own
initiative. Add a bracketed gloss **only** where the source has a `<define>`. Every other
glossary term, even a jargon term, is used in its primary language with **no** parenthetical,
however technical it is. Emitting something like "értelmező (interpreter)" where the source
has no `<define>` is forbidden.

**Direction comes from the glossary.** Each glossary term records, in its `Use (hu/en)`
column, which language is primary in prose: `hu`-style (the target language is primary) or
`en` (English is kept primary). A `<define>` renders the primary form first, then the other
language once in brackets, in that direction.

**Format principle** (each language guide gives the concrete marker word and examples):

- The English term is **always** set in italics, whether it is the primary form or the
  bracketed gloss.
- When the primary is the **target language** and the English is the bracketed gloss, mark
  the English term as English inside the brackets. How it is marked (a suffix, a prefix, or
  nothing at all when the term is simply transliterated) is a language-specific convention,
  defined in each language's guide.
- Code identifiers (variable and function names) are shown in code spans (backticks), never
  italics. Their one-time `<define>` gloss is the identifier's **meaning** in the target
  language, in brackets, with **no** "in English" marker.

**Skip a gloss that would teach nothing.** A `<define>` invites a one-time gloss, but if the
gloss in *this* language would merely restate the English term as a near-identical loanword in
the **same script the reader already reads**, drop the parenthetical and leave the term as it
is. Hungarian `"hello"` glosses to _helló_, which adds nothing, so it is not glossed at all.
Keep the gloss only where it genuinely differs from the English, most clearly when it renders
the term in a script that makes it legible: Japanese `"hello"` → こんにちは, or `"coat"` →
コート, are worth keeping even though コート is itself a loanword, because the katakana is what
lets that reader read the term. This is a per-language call made at expansion time, never a
reason to leave the term untagged in the source.

Translated files are **tag-free**: the pass expands each tag and strips it (see
`global/translating.md`).
