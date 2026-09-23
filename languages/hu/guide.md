# Hungarian (hu) language guide

The Hungarian-specific realization of `global/voice.md`: formality, grammar, information
structure, and style.

## Formality (critical)

- **Use the informal „te” (tegező) form throughout.** It is the standard for Hungarian
  online tutorials and learning platforms. That covers everything: exercise text, docs, UI
  strings, emails, mentoring copy and analyzer comments alike.
- **Never use „ön” or „maga”** (formal). They are wrong for this context.
- Keep verb conjugations in **second person informal** consistently, start to finish.
- Encouraging imperatives:
  - „Nézzük meg a következő kódot” (Let's look at the following code)
  - „Próbáld ki” (Try it out)
  - „Kezdjük el” (Let's begin)
  - „Először telepítsd a Node.js-t” (not the formal „Telepítse a Node.js-t”)
  - „Próbáld ki ezt a kódot” (not the stiff „Futtassa le ezt a kódot”)

## Grammar

- **Word order:** Hungarian is topic-prominent and flexible, not English SVO.
  - EN: "The function returns a value" → HU: „A függvény egy értéket ad vissza.”
- **Agglutination:** use suffixes, not English-style prepositions.
  - "in the code" → „a kódban” (-ban)
  - "to the function" → „a függvénynek” (-nek)
  - "in the function" → „a függvényben”
- **Definite vs indefinite conjugation:** match the object's definiteness.
  - Indefinite: „Egy értéket ad vissza” (Returns a value)
  - Definite: „Az értéket adja vissza” (Returns the value)
- **Articles:** „a” before a consonant, „az” before a vowel; „egy” for indefinite.
- **Accusative (-t)** for direct objects: „Telepítsd a Node.js-t.”
- **Suffixes on code, names and numerals:** pick the suffix vowel by vowel harmony
  („30-at ad vissza”, „12-t ad vissza”, „21 éves vagy idősebb”). A **hyphen** attaches
  the suffix to a code span, a Latin-script name or a numeral: „`repeat`-et”,
  „Node.js-t”, „30-at”. Where the Hungarian spelling takes the suffix directly, write it
  without a hyphen: „a Reacttel”, „template stringben”, „Tanuljuk meg a Reactet”.
  A Latin loanword's harmony class follows how it is pronounced in Hungarian, not how it
  is spelled: _Boolean_ is **back**-harmony, so „Boolean-ok”, „Boolean-okat”, never
  „Boolean-ök” or „Boolean-öket”.
- **Interpolated values take no suffix and no fixed article.** A UI string or an analyzer
  comment is given a value you cannot see (`%{track_title}`, `{{handle}}`, `%{name}`), and
  both the article and the suffix vowel depend on that word.
  - Article: write **„a(z)”** before an interpolated value, because „a” or „az” depends on
    its first sound: „a(z) %{track_title} kurzus”.
  - Suffix: never attach a case suffix to the placeholder (`%{year}-ban` is wrong for half
    the values). Rephrase so that a Hungarian noun carries the suffix: not
    „a(z) %{track_title}-ban”, but „a(z) %{track_title} kurzusban”; not „{{handle}}-nak”, but
    „{{handle}} felhasználónak”.
  - Counts: after a numeral the noun stays singular („{{count}} iteráció”, never
    „{{count}} iterációk”), so a plural group's forms usually differ only where English
    spelled the number out.

## Information structure and emphasis

Do **not** map English clause-by-clause. That produces grammatically correct Hungarian with
**the emphasis in the wrong place**. Instead: read a whole English paragraph, understand
what each sentence is really emphasising, then rebuild it in Hungarian so that emphasis
lands in the Hungarian focus position.

Workflow: translate a paragraph, then re-read the Hungarian aloud and ask "does the
stress land on the right word?" If not, reorder.

### Focus goes immediately before the verb

The **most important / newest / contrastive** element in a Hungarian clause goes
**directly in front of the finite verb** (the "focus position"). Known or contextual
information (the topic) goes first; the verb and the rest follow.

> **Topic (old info) → FOCUS (the point) → verb → rest**

When you translate a sentence, ask: **"what is this sentence actually asserting or
contrasting?"** That element must sit right before the verb. Two signs you tracked English
order instead: the clause **starts with the verb**, or a **bland verb** (teszünk, van,
használjuk) sits in focus while the interesting noun trails after it. Both mean the
sentence is mis-paced; move the real focus in front of the verb.

| English | Mis-paced (English order) | Correct (Hungarian focus) |
|---|---|---|
| "We put some information in the brackets." | Teszünk némi információt a zárójelek közé. | A zárójelek közé írunk valamit. (brackets = topic, the placing is the point) |
| "hello with a capital H is not equal to hello with a small h" | A „hello” nagy H-val nem egyenlő a „hello” kis h-val. | A nagy H-s „hello” **nem ugyanaz**, mint a kis h-s. (contrast is capital-vs-small; put it in focus) |
| "we use **three** equal signs in a row" | Három egyenlőségjelet írunk egymás után. | **Három** egyenlőségjelet írunk egymás után. (három is the surprising bit; keep it glued to the verb) |

### Concrete techniques

- **Front the topic, not the subject.** Start the sentence with what is already being
  talked about (often not the grammatical subject). "In these situations we'll use `if`"
  → „Ezekben a helyzetekben az `if` kulcsszót használjuk” (the situation is old info,
  `if` is the new point and sits before the verb).
- **English clefts → Hungarian focus-fronting, not literal.** "It's the capital H that
  makes them different" → „A nagy H **teszi** őket különbözővé”, not „Az a helyzet,
  hogy…”.
- **Negation pulls focus.** Hungarian _nem_ immediately precedes the focused element:
  „**nem ugyanaz**”, „**nem** a méret számít”. Put _nem_ right before the word being
  denied, never floating mid-clause.
- **Attach descriptive clauses with a relative pronoun (_ami_/_amely_/_aki_).** Hungarian
  cannot juxtapose a noun and a describing clause the way English can with a colon or a
  dropped relativizer. If a clause describes or acts on a just-mentioned thing, link it
  explicitly:
  - „És van még egy, **ami** azt ellenőrzi, hogy két dolog ugyanaz-e.” (the `ami` binds
    the clause to `egy`)
  - Not: „És van még egy: azt ellenőrzi, hogy két dolog ugyanaz-e.” (colon-juxtaposition
    feels broken)

  Rule: if in English you could insert "which/that/who" (even where English omits it),
  Hungarian **requires** _ami/amely/aki_. Use **ami** for things (default), **amely** in
  more formal registers, **aki** for people.

- **Set up a `hogy`-clause with an explicit correlative pronoun** (_azt_, _annyit_,
  _arra_, _abból_, ...). Where English introduces a subordinate clause with a bare colon
  or a dropped object, Hungarian needs a pronoun in the main clause that points forward
  to the `hogy`-clause.
  - „Csak **azt** jegyezd meg, **hogy** összehasonlításhoz három egyenlőségjel kell.”
  - „Csak **annyit** jegyezz meg, **hogy** …” (_annyit_ = "just this much")
  - Not: „Csak jegyezd meg: összehasonlításhoz három egyenlőségjel kell.” (missing
    object; feels like a dropped subject)

  The correlative agrees with the verb's case frame: _megjegyez valamit_ → **azt/annyit**;
  _emlékszik valamire_ → **arra**; _következik valamiből_ → **abból**. Pattern: **pronoun
  + verb, hogy + clause**.

- **Give conditions a full predicate.** English can compress a condition to a bare "this":
  "If this, then do this." In Hungarian a bare „Ha ez, akkor…” feels unfinished, because a
  condition is a statement that is true or false, so it needs an explicit predicate
  (usually _igaz_, or a spelled-out claim).
  - „Ha ez **igaz**, akkor csináld ezt.” (not „Ha ez, akkor csináld ezt.”)

- **Don't stack subordinate clauses the way English does.** English chains "…, which
  means…, so that…". Hungarian reads better as shorter, re-ordered sentences. Split a
  long comma-chained English sentence into two Hungarian ones when it lets the focus
  breathe.
- **Given-before-new.** Old/known info goes leftward, new/important info goes rightward
  toward the verb. A sentence that opens with brand-new information usually feels abrupt.

## Style notes

- **Quotation marks:** use Hungarian pairs, **„** (U+201E) to open and **”** (U+201D) to
  close: „Próbáld ki”. Never the straight ASCII `"`, and never the English `“ ”` pair. For a
  quote inside a quote use **»…«**: „Írd le, hogy »Helló«”.
- **Em dashes:** in Hungarian prose the natural replacements are a **comma** for a
  mid-sentence aside, or two separate sentences. A **hyphen (-)** is also allowed where it
  reads better, alongside its normal jobs (compound words, and the case suffixes covered
  under Grammar).
- **Brackets in prose:** default to plain _zárójel_. Only name the specific bracket type
  when it matters, and then show the glyph in a code tag immediately after: _szögletes
  zárójel (`[]`)_. The glyph-to-word mappings themselves are in `glossary.md`.
  - „hogy meghívj egy függvényt, írd le a függvény azonosítóját, utána tegyél egy nyitó és
    egy csukó zárójelet (`()`).”
- **Rhetorical asides** ("So what do these conditions look like?") → keep them as natural
  Hungarian rhetorical questions: „Na de hogy néznek ki ezek a feltételek?”
- **The name „Exercism”:** it takes „az” („az Exercism”). Keep the name whole and attach
  every case suffix after a hyphen. Choose the suffix vowel as if the name ended in „ö”
  (it is pronounced „ekszörszizöm”): „az Exercism-öt”, „az Exercism-ön”, „az
  Exercism-höz”, „az Exercism-mel”, and the front forms of the rest („az Exercism-nek”,
  „az Exercism-ben”, „az Exercism-ről”). Never write „Exercismet”, „Exercismen” or any
  other form without the hyphen. Product names that stay English (Insiders, representer)
  follow the suffix rules under Grammar.
- **Calques to avoid:** "worked hard" is not „Keményen dolgoztunk”; use „Sokat dolgoztunk”
  or „Rengeteg munkát fektettünk bele”.
- **Headlines:** „Elindult az új szerkesztő” or „Bemutatkozik az új szerkesztő”, not the
  melodramatic „Megszületett az új szerkesztő”; „A programozás tanulásának új módja”, not the
  calqued „Egy új módja a kódolás tanulásának”.
- **Watch same-root repetition.** „gyakorlati gyakorlatokon” is redundant; use „gyakorlati
  feladatokon” or „interaktív gyakorlatokon”.
