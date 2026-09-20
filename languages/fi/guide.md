# Finnish (fi) language guide

The Finnish-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

## Audience specifics

Readers are in Finland. The general audience profile is in `global/voice.md`. Aim at the
register of Finnish-language university programming teaching: warm, plain, short-sentenced,
and almost entirely in Finnish even where the reader knows English perfectly well. Do not
reach for English because "developers say it anyway"; Finnish developer writing is more
Finnish than most languages' is.

## Formality (critical)

- **Use sinuttelu (2nd person singular) throughout**, with the imperative. It is neutral
  and polite in modern Finnish, not casual.
- **Never teititellä.** `te`, `olette`, `-nne` addressed to one reader is officialdom, and
  it is wrong for this course.
- **Three registers, used together**:
  - **Imperative singular** for "do this now": ”Kokeile.”, ”Huomaa, että…”, ”Suorita
    ohjelma.”
  - **The `-taan/-tään` inclusive form** for English "Let's...": ”Aloitetaan.”,
    ”Tarkastellaan seuraavaa koodia.”, ”Katsotaan, mitä tapahtuu.” Do not read this as the
    English passive; it is a warm, inclusive "we", and it is the natural Finnish rendering
    of "Let's look at...".
  - **2nd person for what the reader now knows or has done**: ”Osaat käyttää…”,
    ”Olet kirjoittanut ensimmäisen ohjelmasi.”
- **Nollapersoona** (zero person: ”Laskujärjestykseen voi vaikuttaa sulkujen avulla.”) is
  the third native tool, and it is what Finnish usually says where English says "you can".
  Use it instead of a hedged ”voit…” whenever the sentence is not really an instruction.

## Grammar

- **Drop the pronouns.** Finnish marks person in the verb ending and possession with a
  possessive suffix. `sinun ohjelmasi` is just **`ohjelmasi`**; `sinä kirjoitat` is just
  `kirjoitat`. Pronoun-stuffing is the single loudest sign that a text came from English.
- **Case endings, not prepositions.** "in the code" → `koodissa`, "to the function" →
  `funktiolle`, "inside the brackets" → `sulkeiden sisällä`, "with React" → `Reactilla`.
- **Compounds are written closed.** `tietotyyppi`, `merkkijono`, `paluuarvo`,
  `ohjelmointikieli`, `funktiokutsu`. Splitting a compound (`*tieto tyyppi`) is the classic
  yhdyssanavirhe and reads as machine output. A genitive plus a noun stays two words
  (`silmukan runko`, `funktion runko`).
- **Attaching Finnish endings to code and English tokens.** Prefer to hang a Finnish head
  noun off the token so the ending lands on the Finnish word: **`` `print`-komento ``,
  `` `repeat`-lohko ``, `` `if`-lause ``, `` `for`-silmukka ``, `String`-tyyppinen**. The
  hyphen is required. Only where no head noun fits do you inflect the token itself, and
  then:
  - A token that reads as a Finnish-pronounceable word takes the ending directly:
    `Pythonissa`, `Windowsin`, `GitHubissa`, `stringin`.
  - An abbreviation, an acronym, or a dotted name takes a **colon**: `API:n`, `HTML:ää`,
    `CSS:ssä`, `Node.js:n`.
  - **Never an apostrophe.** The apostrophe belongs only to names written with a final
    consonant but pronounced with a final vowel (`Bordeaux'ssa`), which never happens here.
- **Numerals take the ending after a colon:** ”palauttaa 30:n”, ”5:llä”, ”7 %:iin”. Plural
  `i` is written out: `km:ien`.
- **Multi-word English names take a space and a hanging hyphen:** `Visual Studio Code
  -editori`, not `*Visual Studio Code-editori`.
- **Verbs govern their own cases.** `kutsua funktiota` (not `*kutsua funktioon`), `klikata
  nappia`, `sijoittaa arvo muuttujaan`. Carrying the English preposition over is a
  giveaway.

## The passive implies a person, so use `-utua/-ytyä` for what the machine does

Finnish passive implies a **human** agent. ”Arvo tulostetaan ruudulle” tells the reader
*they* print it. Where the machine or the program does something by itself, use the
automatic derivation or name the actor:

- ”arvo **tulostuu** ruudulle” (the value gets printed), not ”arvo tulostetaan ruudulle”.
- ”`while` **suorittaa** lohkon viisi kertaa”, ”ohjelma **lukee** seuraavan rivin”.

Name the thing that acts: ”ohjelma suorittaa koodin” beats ”koodi suoritetaan” every time.

## Information structure and natural rhythm

Do **not** map English clause by clause. Finnish word order carries information structure
rather than grammar, so a word-for-word rendering is grammatical and still subtly
wrong-footed.

Workflow: translate a paragraph, then read the Finnish aloud and ask "does the sentence
start where a Finnish writer would have started it?" If not, reorder.

### Concrete techniques

- **Known thing first, new thing last.** The topic opens the clause; the point of the
  sentence lands at the end. ”Ehtorakenteen sisällä oleva koodi suoritetaan vain, jos ehto
  on tosi.”
- **Keep sentences short.** Finnish teaching prose is one clause plus at most one
  subordinate. Break English chains of "…, which means…, so that…" into two or three
  sentences.
- **Prefer a participle to a `joka` clause** in expository prose: ”aiemmin esitellyt
  säännöt” over ”säännöt, jotka esiteltiin aiemmin”. A `joka` after every noun is a
  translation smell. Do not stack participles either; beginner prose stays light.
- **A colon introduces an explanation**, and it is very idiomatic: ”Laskuoperaatiot ovat
  tuttuja: yhteenlasku `+`, vähennyslasku `-`, kertolasku `*` ja jakolasku `/`.”
- **Give conditions a full predicate.** A bare ”Jos tämä, tee tämä” is unfinished. A
  condition is a claim that is true or false, so say so: ”Jos ehto on **tosi**, koodi
  suoritetaan.”
- **Turn English noun phrases into verbs.** "the creation of a variable" → ”kun luot
  muuttujan”, not ”muuttujan luominen” everywhere.

### Anti-patterns (signs you tracked English)

- **`sinä` / `sinun` written out** where the verb ending or possessive suffix already says
  it.
- **`voit`** in front of every instruction, where Finnish would use the imperative or the
  nollapersoona.
- **A split compound** (yhdyssanavirhe) anywhere at all.
- **`numero` for "number"** (see the glossary; `numero` is a digit).
- **The plain passive for what the machine does** (”arvo tulostetaan”) instead of
  `tulostuu` or a named actor.
- **English comma habits.** Finnish puts a comma before every subordinate clause (`että`,
  `jos`, `kun`, `joka`) where English often omits it. There is no Oxford comma.
- **A code token inflected with a colon** where a Finnish head noun would have carried the
  ending (`` `print`:iä `` instead of `` `print`-komentoa ``).

## Style notes

- **Em dashes:** Finnish does not use them. The Finnish ajatusviiva is an **en dash (–)
  with a space on each side**, and it is used sparingly. Prefer a comma, a
  parenthesis, or two sentences. In ranges and name pairs the en dash takes no spaces:
  `20–29-vuotiaat`. The hyphen keeps its own jobs: compounds and endings on code and
  foreign tokens.
- **Quotation marks:** Finnish uses `”…”`, the same high curved mark at both ends. Never
  the English `“…”`. A quote inside a quote uses `’…’`. Quotation marks go around the whole
  inflected word: `”leasingin”`, not `”leasing”in`.
- **Capitalization:** sentence case everywhere. Only the first word of a heading and proper
  names take a capital, and a heading never ends in a full stop. Never title case. Language
  names, weekdays and months are lowercase (`suomi`, `maanantai`, `heinäkuu`).
- **Decimal comma**, and a non-breaking space as the thousands separator: `3,14`,
  `1 000 000`.
- **Brackets in prose:** default to plain _sulkeet_. Only name the specific bracket type
  when it matters, and then show the glyph in a code tag immediately after: _hakasulkeet
  (`[]`)_. The glyph-to-word mappings themselves are in `glossary.md`.
  - ”kun haluat kutsua funktiota, kirjoita sen nimi ja sen perään sulkeet (`()`).”
- **Rhetorical asides** ("So what do these conditions look like?") stay natural Finnish
  questions: ”Miltä nämä ehdot sitten näyttävät?”
- **Inflecting a Latin-script proper name.** A foreign name takes ordinary Finnish endings,
  picked by its vowels: a front/neutral-vowel name takes front endings (`-llä`, `-ssä`,
  `-ä`). **No consonant gradation**: a native Finnish `-ki` noun would gradate (mäki → mäen),
  but foreign and modern proper names are exempt, exactly as `Niki → Nikin`. A hyphenated
  compound inflects on the second part only.

## Worked examples

**Titles and headlines** (sentence case, natural order, no drama):
- Avoid: "Exercism on syntynyt" (melodramatic) → Prefer: "Exercism on täällä" /
  "Julkaisimme Exercismin"
- Avoid: "Uusi tapa oppia koodaamaan" is fine; avoid the calqued "Uusi tie kohti koodausta"
- Avoid: "käytännön harjoitustehtäviä" (redundant) → Prefer: "käytännön harjoituksia"

**Calls to action** (specific, action-oriented):
- Signup: "Aloita nyt!" / "Luo tunnus" / "Aloita ohjelmointi tänään" (not the vague "Tule
  mukaan!")
- Trying: "Kokeile itse!" / "Kokeile ilmaiseksi"

**Acronyms** (explain in Finnish, don't transliterate):
- "PPP pricing" → "hinnat sovitettuna oman maasi ostovoimaan"
- "Q&A" → "kysymyksiä ja vastauksia"

**Natural phrasing** (good vs stiff/literal):
- "Let's learn React" → "Opetellaan Reactia" (not "Annetaan meidän oppia React")
- "First, install Node.js" → "Asenna ensin Node.js" (not the officialese "Asentakaa
  Node.js")
- "Try running this code" → "Kokeile suorittaa tämä koodi" (not "Voit yrittää suorittaa
  tämän koodin")
- "This is where it gets interesting" → "Tästä se alkaa käydä kiinnostavaksi"

**Common EN→FI pitfalls:**
- "we worked hard" → not ”työskentelimme kovasti”; use ”teimme tämän eteen paljon töitä”
- "from zero to confident beginner" → ”nollasta itsevarmaksi aloittelijaksi”
- "they hit a wall because they lacked the fundamentals" → ”he juuttuivat, koska perusteet
  puuttuivat” (not the literal ”törmäsivät seinään”)

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Finnish noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Finnish normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Finnish
  speaker has reviewed a real interpolated string here yet.
