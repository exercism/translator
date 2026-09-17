# French (fr) glossary

The agreed term list for French. Every term here is binding: use it exactly, with no
synonyms and no mixing within a document. Rows whose Notes begin "Unconfirmed draft" are
still binding for consistency, but no native speaker has checked them yet, so they are the
ones to raise on the forum. Why each term was chosen is in the decision log
(`glossary-notes.md`).

## Core decisions

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| streak | série | fr | A run of consecutive days, as in the learning-platform sense. |
| foot-gun | piège involontaire | fr | Settled 2026-08-10 on topic 314; do not reopen. On the first mention in a document, keep the English source's own explanation alongside it: _un « piège involontaire », de quoi se tirer une balle dans le pied sans le vouloir_. Later mentions in the same document may shorten to _piège_. Never _fonctionnalité pénalisante_, _effet de bord_ or _faux ami_. |
| Solve the Maze (exercise title) | Évade-toi du labyrinthe | fr | Title only, and no exclamation mark. Prose about the maze keeps "faire sortir le personnage du labyrinthe". |
| Take a Walk (exercise title) | Fais un tour | fr | Confirmed 2026-08-12 by mirina (topic 1241). Title only. The English is a call to action, so the French title is imperative; the earlier _Une petite marche_ read as the descriptive "a short walk". Never _Va faire un tour_: mirina flags it as harsh and derogatory in spoken French ("get lost"). |
| Loopy Maze (exercise title) | Le labyrinthe, version boucles | fr | Settled 2026-08-06 by an owner-authorised ruling after three native speakers did not converge (topic 314). Title only. Do not reopen. The title must not describe the maze itself as looping. |
| UI button label quoted in prose | the app's own `fr` catalog string | fr | Unconfirmed draft (agent, 2026-08-03). When prose tells the learner to press a button, quote the string the French app actually shows, in guillemets and italics: _« Exécuter le code »_. Never invent a fresh rendering of an English button label. |

## Localize (use the French term)

These are terms where the French is used in prose, so the "Use (fr/en)" column is `fr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| true / false | vrai / faux | fr | Not capitalised in prose. Keywords `true`/`false` stay English in code (code font, not italics). Where prose uses the bare English word itself rather than translating it to _vrai_/_faux_ or referencing the literal code value, **always italicize it**: _true_, _false_. Same treatment as _string_ below (2026-08-16, topic 314). |
| float / decimal | nombre décimal | fr | Use _nombre à virgule flottante_ only when the IEEE-754 floating-point nature specifically matters. |
| array / list | tableau | fr | Exercise prose sometimes says "list" informally for the same concept; render both as _tableau_, do not introduce a separate word. |
| dictionary | dictionnaire | fr | In JS-specific prose this is usually an _objet_ or a `Map`; use the concept word _dictionnaire_ only when teaching the general idea. |
| index | indice | fr | Not "index", which carries a book/database sense in French. "par son indice". |
| Boolean | booléen | fr | The code type name `Boolean` stays as-is in code. |
| number / digit | nombre / chiffre | fr | _nombre_ for a number of any size (the value or the type); _chiffre_ only for a single digit symbol, as in _deux chiffres après la virgule_ (two digits after the decimal point). Both masculine. |

### Functions & control flow

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| if statement | instruction `if` | fr | Keep `if` as the real keyword. |
| NOT operator / logical negation | opérateur NON / négation logique | fr | The `!` symbol stays as-is in code. On a concept-page title, the operator word in the parenthetical is upper-case, matching `||` (OU) and `&&` (ET): "L'opérateur `!` (PAS)". In body prose the `not` keyword is glossed lower-case, "`not` (pas)". |
| statement (executable) | instruction | fr | The imperative sense: a line of code that does something and gets executed. Deliberate overlap with _instruction_ (given to Jiki) below: the contexts never compete on a page. |
| statement (logical claim) | assertion | fr | The proposition sense: a claim that is true or false; also a test assertion. Deliberately distinct from _instruction_ above. |
| function | fonction | fr | The *keyword* `function` in code stays English; the concept in prose is _fonction_. |
| parameter | paramètre | fr | Declaration-site name. |
| argument | argument | fr | Call-site value. |
| input(s) (beginner framing of what you give a function) | entrée(s) | fr | Unconfirmed draft (agent, 2026-08-03). Feminine: _une entrée_, _les entrées_. Use it where the English source itself says "input" in beginner prose (_la fonction `triangle` prend 7 entrées_). It does **not** replace _paramètre_ or _argument_ above: keep those where the English says "parameter"/"argument", which is the precise register. The two are in tension in practice, and the `draw` family catalog currently says _arguments_ in six places and _entrée_ in two, so this row is the open question, not a settled split. |
| to return (a value) | renvoyer | fr | "La fonction renvoie 30." Not "retourner". |
| return value | valeur de retour | fr | Noun form; keep distinct from the verb _renvoyer_ above. |
| brackets (the two after a function name) | parenthèses | fr | The `()` pair written after a function name to call it: _écris son nom, puis ces parenthèses_. French names the bracket type, so always say which; see the Brackets section below. |

### Loops, state & program flow

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | interprète | fr | **The person who interprets, not a piece of software.** On concept pages Jiki *is* the interpreter ("son travail consiste à interpréter le code que tu écris"). Not _interpréteur_, which in French only ever names the program. |
| instruction (given to Jiki) | instruction | fr | A single thing the learner tells Jiki to do: _donner à Jiki les bonnes instructions_, _écrire des instructions sur le tableau blanc_. Everyday word, not a formal/legal register one. See the note on _statement (executable)_ above about the shared word. |
| (programming) language | langage (de programmation) | fr | _langage_ for a programming language (_langage de programmation_ on first mention, then _langage_). Use _langue_ only for the human-language framing ("une langue que l'ordinateur comprend"), which is what French actually distinguishes; never mix the two words for the same sense on one page. |
| assignment | affectation | fr | Not "assignation", which is a flagged anglicism in French. |
| to assign | affecter | fr | Matches _affectation_ above: "affecter une valeur à une variable." |
| code block | bloc de code | fr | Deliberately distinct from _portée_ (scope) below. Never _bloc d'instructions_, which excludes expressions. |
| iteration | itération | fr | Verb: _itérer_; "parcourir" also natural for iterating over a collection. |
| break (loop control) | instruction `break` | fr | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| modulo / remainder operator | modulo (opérateur) / le reste (valeur) | fr | _modulo_ for the `%` operator; _le reste (de la division)_ for the resulting value. |
| toggle | basculer | fr | Verb only; no crisp noun exists. "basculer une valeur booléenne." |
| state / stateful | état / à état | fr | "à état" or "avec état" for "stateful". |
| scope | portée | fr | Deliberately distinct from _bloc de code_ (code block) above. |

### Tooling & engineering

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| auth (authentication / authorization) | authentification / autorisation | fr | Pick by meaning. |
| tool / tooling | outil / outillage | fr | _outils_ reads more naturally than _outillage_ in most prose; _outillage_ for the collective sense ("toolchain" = _chaîne d'outils_). |
| edge case | cas limite | fr | The agreed rendering; no official French ruling exists, so do not coin an alternative. |
| backwards compatibility | rétrocompatibilité | fr | Not "compatibilité descendante". |
| refactor | réécrire | fr | Unconfirmed draft (agent, 2026-08-03). Noun form: _réécriture_. Never the anglicism _refactoriser_/_refactoring_ in learner-facing prose. |
| standard library (level stdlib) | bibliothèque standard du niveau | fr | Flagged by native-speaker review (resu-xunil, t/1620, 2026-08-15): some exercises had drifted to "stdlib du niveau"; standardized on the majority spelled-out form. |
| clean / neat and tidy (of code: readable, well-formatted, sound) | propre | fr | _code propre_ is the established French collocation and what beginners meet in tutorials and job ads. Use it wherever the English means the code is readable, well-indented, or free of mess ("clean, satisfying code", "keeping your code neat and tidy"). Never _élégant_ for this sense. |
| neat / elegant (of a solution or a way of doing something: economical, pleasingly short) | élégant | fr | The other sense of English "neat": a solution that does the job with less, not one that is merely tidy. French _élégant_ carries exactly that economy of means (CNRTL, Wikipédia: « l'économie de moyens »). Never _propre_ here: _propre_ names readability, which these sentences usually treat as a *separate* axis ("a neat solution at 29 lines... you can get lower, but the code tends to become less readable"). Applies to "une façon plus élégante de faire" too. |

### Platform & curriculum vocabulary

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| feature (platform capability) | fonctionnalité | fr | Deliberately distinct from _fonction_ (function) to avoid collision. |
| course | cours | fr | The whole Jiki course the learner is taking: _dans ce cours_. Keep distinct from _leçon_ (lesson) and _programme_ (curriculum). |
| curriculum | programme | fr | Avoid the false friend "curriculum", which in French means a CV/résumé. |
| pathway | parcours | fr | A structured learning sequence. Deliberately distinct from _voie_ (track) below. |
| track (curriculum path) | voie | fr | Confirmed by a native speaker (2026-08-06), replacing the earlier unconfirmed _filière_. Deliberately distinct from _parcours_ (pathway) above. Feminine: _une voie_, _la voie_, e.g. "Choisis ta voie !". |
| syllabus | programme (du cours) | fr | Note the deliberate overlap with _curriculum → programme_; disambiguate with "du cours" when both appear in the same context. |
| challenge (platform content type) | défi | fr | Confirmed by a native speaker (2026-08-11, topic 314) and by the app's own French copy, which already says it: the sidebar item _Défis_, the heading _Défis associés_, _Défis récents_, and _Relève des **défis** plus difficiles_. Gender: _un défi_, plural _des défis_. The Jiki content type, capitalised _Défis_ where the English capitalises Challenges. Distinct from `puzzle`, which uses _casse-tête_/_énigme_/_défi_ depending on context: see that row, and avoid _défi_ for the puzzle sense wherever the platform sense could be read on the same screen. |
| Not started (progress status) | Non commencé / Non commencés | fr | Never _Pas commencé_. Agree in number with what the label describes: singular _Non commencé_ on a status badge for one item (e.g. one challenge), plural _Non commencés_ on a filter tab covering a list of items. |

## Keep in English

These stay in English in prose, because a beginner reader already knows the English form
of them from surrounding tooling, or the French official term is not what French
developers actually say. Where the source `<define>`s one of these terms, use the French
in the gloss column below; with no `<define>`, use the English bare, no gloss.

| Term | French gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _chaîne de caractères_ | Confirmed by native speakers (2026-08-14, topic 314), closing the open question. **Always italicize the bare English term in prose: _string_, _strings_.** In the string concept itself, use _chaîne de caractères_ where the source defines it, then _string_ throughout. Keeping it English leaves _chaîne_ free for the array chain metaphor. _chaîne de caractères_ may still be used sporadically in prose where it reads better, but never repeatedly through the same page, which reads as tedious. Three carve-outs where underscores would render literally rather than as italics: a page's frontmatter `description` field (the card component does not parse Markdown), video subtitles (`.vtt`), and HTML `alt=`/`src=` attributes (not parsed as Markdown either, so a screen reader would read the underscores aloud). |
| API | explain what it is in French | Where the source defines it, explain the concept in French, not just gloss the acronym. Gender: _une API_ (feminine). |
| framework | _cadre de développement_ | Where the source defines it, explain it means a reusable _cadre de développement_, then use _framework_ freely. |
| workflow | _flux de travail_ | The software-engineering sense (a sequence of dev tasks). Where the source defines it, explain it means _flux de travail_, then use _workflow_. |
| template literal | _littéral de gabarit_ | Where the source defines it, explain it as a _littéral de gabarit_ (the official term), then use _template literal_. **Italicize the bare English term in prose**, same as _string_ (2026-08-14, topic 314). Same `.vtt`, frontmatter, and HTML-attribute carve-outs. |
| template (bare, short for template literal) | (no separate gloss; see _template literal_) | The informal short form used once a page has already introduced _template literal_. **Italicize in prose**: _template_. Same carve-outs as _string_ (2026-08-16, topic 314). |
| template strings | (no separate gloss; see _template literal_) | An informal English name for the same construct as _template literal_. **Italicize in prose**: _template strings_. Same carve-outs as _string_ (2026-08-16, topic 314). |
| params (informal for parameter) | (no gloss) | The informal English shorthand developers use for _parameter_, distinct from the precise-register _paramètre_/_argument_ rows above, which stay the default. Only use _params_ where the English source itself uses that exact informal shorthand. **Italicize in prose**: _params_. Same carve-outs as _string_ (2026-08-16, topic 314). |
| CLI (the concept) | _interface en ligne de commande_ | Where the source defines it, explain CLI as _interface en ligne de commande_ (command-line interface), then "la CLI". Gender: _la CLI_ (feminine). |
| canvas (graphics exercises) | _zone de dessin_ | The drawing surface in creative-coding exercises. Where the source defines it, explain it as the _zone de dessin_ (the `canvas` element), then use _canvas_. |
| camel case | (no gloss; the spelling is the example) | Always write the term itself as one word, in code style: `camelCase`. Never the two-word phrase « camel case », in guillemets or otherwise: the capital C is the whole point, so the term has to *show* the rule it names. Where the source explains it, keep the explanation (camel = chameau, case = casse, and the chameau/bosses metaphor), which still reads correctly against `camelCase`. Same for any other named case style: `snake_case`, `kebab-case`. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

### Titles that stay as they are

Page and exercise titles whose French is the same text as the English, either because the
word is identical in both languages or because the title is a name, a named work or
wordplay. The body and the description are still translated as normal; only the title
stands. Settled 2026-08-13 by iHiD; see `glossary-notes.md`.

| English | French | Use (fr/en) | Notes |
|---------|--------|-------------|-------|
| Animation (concept title) | Animation | en | Title only. The French word is spelled the same; prose about animation still uses _animation_ normally. |
| Hello (exercise title) | Hello | en | Title only. The exercise is named after the `"Hello"` string it returns, so the title has to match the code. |
| Luhn (exercise title) | Luhn | en | Title only. Hans Peter Luhn's surname; also used in prose as _la formule de Luhn_. |
| Space Invaders (exercise title) | Space Invaders | en | Title only. Decided 2026-08-14 (topic 1244): the 1978 arcade game's name, kept as a deliberate reference rather than translated to _Les envahisseurs de l'espace_. |
| Triangle (exercise title) | Triangle | en | Title only. The French word is spelled the same. |
| Two-Fer (exercise title) | Two-Fer | en | Title only. English wordplay ("two for one") that carries the exercise's `"One for you, one for me."` line; there is no French equivalent that keeps both. |
| Hello, World! 👋 (blog post title) | Hello, World! 👋 | en | Title only. The canonical first-program phrase, used as-is by French developers. |
| Lunchbox (exercise title) | La lunchbox | en | Title only. mirina (2026-08-29, topic 1671) confirmed a literal rendering ("La boîte à repas") doesn't sound appealing and isn't what the target audience actually says (kids say "goûter", teens "la bento"/"la boîte", adults "tup"), and preferred keeping "Lunchbox" in English, the same reasoning that kept `Space Invaders` English. resu-xunil then proposed prefixing the French article, "La lunchbox", and mirina agreed ("Just excellent!"). Body prose keeps translating "lunchbox" normally as _la boîte à repas_ (the physical-object metaphor); only the title stands. |

## Brackets

Default to naming the bracket type. When a specific bracket type matters, name it and show the glyph in a code tag immediately after: _crochets (`[]`)_.

| Glyph | French | Notes |
|-------|--------|-------|
| `()` | parenthèses | Default bracket word. Gender: _une parenthèse_ (feminine). The plural already implies the pair, so write _des parenthèses_, never _une paire de parenthèses_. |
| `[]` | crochets | |
| `{}` | accolades | |
| `<>` | chevrons | Or name the signs directly (_signes inférieur et supérieur_) when clearer. |

Example: _pour appeler une fonction, écris son identifiant, suivi de parenthèses (`()`)._
