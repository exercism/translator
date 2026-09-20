# German (de) language guide

The German-specific realization of `global/voice.md`: formality, grammar, typography, and
worked examples. Term choices are in `glossary.md` and are binding.

Readers are in Germany, Austria, and German-speaking Switzerland: write standard German,
not a regional variant.

## Formality (critical)

- **Use the informal "du" throughout, always lowercase.** Never capitalize
  "du/dich/dein/dir".
- **Never use "Sie"** (formal).
- **Do not imitate the impersonal or formal register** of print-era German programming
  textbooks.
- Encouraging imperatives use the **du-imperative** or the **adhortative wir-form**:
  - "Schauen wir uns den folgenden Code an" (Let's look at the following code)
  - "Probier es aus" (Try it out)
  - "Fangen wir an" / "Legen wir los" (Let's begin)

## Grammar

German-specific rules that English speakers get wrong:

- **Verb-second (V2) in main clauses:** the finite verb is always the second element.
  Fronting an adverb pushes the subject after the verb: "Jetzt öffnen wir die Datei", not
  "Jetzt wir öffnen die Datei".
- **Verb-final in subordinate clauses:** after `weil`, `dass`, `wenn`, `ob`, the finite verb
  moves to the end of the clause: "..., weil das Programm den Wert zurückgibt."
- **Separable verbs:** the prefix detaches to the end of a main clause and reunites in
  subordinate clauses and infinitives. This is common in instructional verbs: "Wir schauen
  uns das an." / "Gib den Wert zurück." / "Führe das Programm aus."
- **Position of "nicht":** whole-sentence negation goes late, at the end of the clause but
  before any clause-final non-finite verb part: "Ich rufe die Funktion heute nicht auf."
  Partial negation goes immediately before the negated element: "Nicht die Zahl ist das
  Problem, sondern der Text."
- **Mandatory comma before subordinate and infinitive clauses**, unlike English, which
  often drops it: "Ich freue mich, dass du wieder da bist." / "Er antwortete, ohne gefragt
  worden zu sein."
- **Compound nouns close up.** German tech compounds are written as one word, never
  spaced: `Rückgabewert`, `Datentyp`, `Fehlermeldung`. When combining an English loanword
  or acronym with a German element, use a hyphen: `JavaScript-Datei`, `HTTP-Anfrage`.
- **Noun capitalization.** All nouns are capitalized, including nominalized infinitives
  and adjectives: "das Programmieren", "etwas Wichtiges".

## Style notes

- **Em dashes:** German's own dash, the Halbgeviertstrich (–), is set with spaces on both
  sides and can be used as one replacement, but a comma, colon, or separate sentence is
  usually cleaner and more in keeping with house style. Do not reach for the em dash.
- **Quotation marks:** use German-style quotes, „…“ (low-opening, high-closing), not
  straight English `"…"`.
- **Sentence rhythm:** favor short, direct sentences (roughly 9-15 words) over long
  English-style subordination chains. Break a long English sentence into two German ones
  rather than nesting clauses (Schachtelsätze) that separate subject from verb.
- **Verbalstil over Nominalstil, active over passive.** Prefer a plain verb to a
  bureaucratic noun-plus-pale-verb construction:
  - Stiff: "Die Installation erfolgt durch Ausführen des Skripts." → Natural: "Installiere
    das Programm, indem du das Skript ausführst."
  - Passive: "Die Datei wird vom Programm geöffnet." → Active: "Das Programm öffnet die
    Datei."
- **Calque traps to avoid:** "macht Sinn" (prefer "ergibt Sinn" / "ist sinnvoll"); dropping
  the preposition before a bare year ("2024", not "in 2024"); "einmal mehr" as a stiff
  calque of "once more" (prefer "noch einmal").

## Worked examples

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid: "Die Geburt von Exercism" (too dramatic) → Prefer: "Exercism ist da" /
  "Willkommen bei Exercism"
- Avoid: "Ein neuer Weg, um das Programmieren zu lernen" (stiff, over-literal) → Prefer:
  "Programmieren lernen, neu gedacht" / "So lernst du Programmieren"

**Calls to action** (specific, action-oriented):
- Signup: "Leg jetzt los!" / "Starte jetzt!" (not the vague "Mach mit!")
- Trying: "Probier es aus!" / "Jetzt kostenlos testen!"
