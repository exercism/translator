# Catalan (ca) language guide

The Catalan-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Term choices are in `glossary.md` and are binding.

Readers are spread across Catalonia, the Balearic Islands, Andorra and the Catalan-speaking
parts of the Valencian Community, so write the shared standard rather than a regional
variant.

## Formality (critical)

- **Use the informal "tu" form throughout**, and keep verb conjugations in **second person
  informal singular** consistently, start to finish.
- **Never use "vostè" or "vós"**, whatever the usual software-localization convention does.
- Encouraging imperatives:
  - "Mirem el codi següent" (Let's look at the following code)
  - "Prova-ho" (Try it out)
  - "Comencem" (Let's begin)

## Grammar

Catalan-specific rules English speakers get wrong:

- **Gender agreement:** every noun has grammatical gender, and adjectives, articles, and
  past participles agree with it. "the function is defined" → "la funció està definida"
  (funció is feminine); "the value returned" → "el valor retornat" (valor is masculine).
  Check gender when introducing a new glossary term, since English gives no clue, and keep
  agreeing with it for the rest of the page once it is established.
- **Acronyms and terms kept in English take the gender of their Catalan expansion**, and
  take the normal article and elision with it: API expands to _interfície_, so "una API",
  "l'API", "de l'API".
- **Contractions:** "a + el → al", "de + el → del" (the feminine article "la" never
  contracts). "the shelf's machines" → "les màquines del prestatge"; "the value of the
  variable" → "el valor de la variable" (no contraction, "la" doesn't elide this way).
- **Elision before vowels:** "el/la" and weak object pronouns elide to "l'" before a vowel
  or mute h. "the object" → "l'objecte" (not "la objecte"); "the interpreter" →
  "l'intèrpret"; "the list" → "la llista" stays as-is (consonant start).
- **Personal article before names:** Catalan puts an article before a person's given name in
  ordinary prose, so a person named in the text takes **"el"** or **"la"**, contracted as
  normal (del, al). Use the standard "el/la" form, not the colloquial "en/na". A bare name is
  correct only where it is a label rather than a person: a page title, a product name, or a
  heading.
- **Weak pronouns "hi" and "en":** used constantly in natural Catalan and easy to drop as
  an English speaker. "There are three ways to do this" → "Hi ha tres maneres de fer-ho"
  (not "Són tres maneres de fer-ho"); "En tens?" (Do you have any of it?). A sentence that
  is grammatical without them reads like a literal English translation.
- **"Cal" for "you need to":** "cal instal·lar el Node.js" (you need to install Node.js)
  reads more natural and less bossy in explanatory prose than a bare imperative. Reserve
  direct imperatives ("Instal·la...") for actual step-by-step instructions.
- **Word order is SVO but topic-fronting is common** for emphasis. Don't force every
  sentence into strict English subject-first order if fronting the point being made reads
  more natural in Catalan: "Això és el que fa la funció" fronts the point.
- **Attach a describing clause with "que", close to its antecedent.** Don't carry an
  English colon-juxtaposed or relativizer-dropped construction across: "una funció que
  retorna un valor".
- **Punctuation:** use «guillemets» for quotation («com aquesta»), never curly or English
  double quotes. This includes quoted speech inside prose: when a narrator or a character says
  something, it goes in guillemets, «Si passa això, aleshores he de fer allò». Lowercase
  after a colon unless what follows is a full quoted sentence.

## Style notes

- **Em dashes:** replace a mid-sentence aside with a comma, parentheses, or two separate
  sentences.
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Catalan rhetorical questions: "I com es veu, això, en codi?"
- **Gendered nouns for people** (developer, mentor, learner): default to the standard
  masculine generic form in flowing tutorial prose ("el programador", "el mentor"). Treat
  this as a first-pass default, not a hard rule; flag a specific page where an inclusive
  alternative reads better.

## Worked examples

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid: "Una nova manera d'aprendre a programar" (flat, literal) → Prefer: "Aprèn a
  programar d'una manera nova" / "Un nou camí per aprendre a programar"

**Calls to action** (specific, action-oriented):
- Signup: "Comença ara!" / "Registra't ara!" (not the vague "Uneix-te a nosaltres!")
- Trying: "Prova-ho!" / "Fes la prova gratis ara!"

**Natural phrasing** (good vs stiff/literal):
- "Let's learn React" → "Aprenem React" (not the stiff "Anem a aprendre React")
- "Try running this code" → "Prova d'executar aquest codi" (not the stiff "Intenteu
  executar aquest codi")
