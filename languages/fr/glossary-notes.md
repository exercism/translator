# French (fr) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing in this entry is a native speaker's decision)

This glossary was forked from Jiki's French glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the French
language itself was kept, including the ones a native speaker made.

Two rows are left exactly as they stand although the reasoning behind them has gone with the
fork, because changing a native-speaker-adjacent row is not an agent's call: `interpreter` →
_interprète_ (see the 2026-07-30 entry, which explains why this one needs an answer) and
`course` → _cours_.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
French has been asked yet, and an agent's invented rendering would read as an agreed one.
`challenge` is not in that block, because French already has an agreed row for it.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have (exercise stories, physical teaching
metaphors, a different product's curriculum paths), so the rows are gone. The decisions are
kept here because most of them are native speakers' and because the French reasoning stands
if any of these words is ever needed again.

- **`track (curriculum path)` → _voie_.** mirina, 2026-08-06. She rejected _filière_ as
  naming an academic or professional field (_filière informatique_), which imports an
  institutional, rigid connotation; _voie_ reads as a dynamic progression and carries the
  "freedom" sense of _la voie est libre_, and she wrote the sample tagline "Choisis ta voie !"
  around it. _chemin_ was her second option, framed as more step-by-step. **This is the
  strongest starting point for Exercism's own `track`**, which is proposed afresh in the
  empty block because the thing it names is different.
- **`puzzle` → _casse-tête_ / _énigme_ / _défi_ by context, never _puzzle_.** resu-xunil,
  2026-08-11. Bare _puzzle_ reads as a jigsaw in French (CNRTL: "jeu de patience fait d'un
  grand nombre de pièces découpées"). _défi_ is available but collides with the platform
  sense, so the split was contextual rather than fixed.
- **`skyline` → _la ligne d'horizon_** (orchestrator, on resu-xunil's own wording,
  2026-08-10), with _une silhouette de bâtiments_ where the English means a skyline made of
  buildings rather than a city's own. _profil urbain_ was rejected as architectural-drawing
  register.
- **`inset` → _en retrait_ / _le retrait_.** resu-xunil, 2026-08-05, confirming an agent
  draft without correction.
- **`unit (distance moved)` → _unité_, and `step` is context-dependent.** resu-xunil,
  2026-08-05. _unité_ is right for "unit"; "step" can be _étape_, _pas_ or _marche_ by sense,
  and conflating the two English words under one term would have been wrong the first time a
  source said "step".
- **`nose` → _le museau_ for a snouted animal, `beak` → _le bec_ for a bird.** mirina and
  resu-xunil, 2026-08-04 and 2026-08-05. _truffe_ is the pet-nose tip and reads as pigs and
  boars for a fox; French does not use _nez_ of a bird at any register.
- **`piece of paper` → _bout de papier_.** myrtarazona, 2026-08-03: _morceau de papier_ is
  correct but sounds strange in casual French, and _feuille de papier_ reads as an A4 sheet.
  _morceau_ stays correct elsewhere (_morceaux de texte_, _morceaux de code_).
- **`to fill / plug (a hole)` → _combler_, `to cover (a hole with a shape)` → _recouvrir_.**
  resu-xunil, 2026-08-06: _boucher_ carries "stuff up, block", and _couvrir_ undersells
  placing a shape precisely over a gap.
- **`alien` → _alien_** (over the four-syllable _extraterrestre_, which sits badly in an
  arcade register), **`penguin` → _pingouin_** (the cartoon image everyone looking at it
  names, not the zoological _manchot_), **`to shoot down` → _abattre_** (over _vaincre_,
  which is defeating an opponent in a contest). All three confirmed by mirina and resu-xunil,
  2026-08-04.
- **`gold panning` → _orpaillage_ / _orpailler_, with _batée_ the tool only.** resu-xunil and
  mirina, 2026-09-04. The words are current French (Vikidia writes for 8-13 year olds under
  the title _Orpaillage_), but counting actions as _batées_ reads as counting bowls, so an
  action is _un passage à la batée_.
- **`guess` → _une proposition_, never _essai_.** resu-xunil, 2026-08-30: _essai_ is a try or
  an attempt (and a rugby try), so it names the act rather than the word submitted. The verb
  _essayer_ is unaffected.
- **The teaching metaphors** `input slot` → _entonnoir_ and `return chute` → _tapis roulant_
  (myrtarazona, resu-xunil and williamapc, 2026-08-01, after _fente_ was flagged by two
  speakers as carrying a sexual connotation in slang French), plus `box`, `chain` and
  `board / whiteboard` → _tableau blanc_ (iHiD, 2026-07-30, always written in full so it
  never collides with _tableau_ for an array).
- **Exercise titles**, all decided by speakers and all naming exercises Exercism does not
  have: _Évade-toi du labyrinthe_ (a three-speaker ranking vote, 2026-08-03, no exclamation
  mark because the English titles carry none); _Fais un tour_ (mirina, 2026-08-12, with
  **_Va faire un tour_ permanently rejected**: in spoken French it is used verbatim to tell
  someone to get lost, and _Va te promener_ carries the same reading); _Le labyrinthe,
  version boucles_ (an owner-authorised ruling after three speakers did not converge); "Space
  Invaders" and "La lunchbox" kept in English with a French article where usage wants one
  (mirina and resu-xunil, 2026-08-14 and 2026-08-29). The general principle they produced,
  which kinds of title stay in English, is kept in `glossary.md`.
- **`item` against `element`.** mirina, 2026-08-29, which is language guidance rather than a
  retired row: where English says "item" for a physical thing, French is _objet(s)_, and
  _élément(s)_ is kept for the data-structure sense, used only where the English itself says
  "element". _article_ reads as a retail or shop-catalog item.

## 2026-09-05: interpreter argument-count messages say _prend_, not _a_

**Decided by:** resu-xunil, a native speaker, on the forum. **Terms affected:** none
(a grammar rule, recorded in the guide).

He asked for _"Cette fonction n'a qu'un seul paramètre"_ and was told the negation cannot live
in a shared phrase, because it is shared between the exact message and the "needs at least" one, where _au moins un seul paramètre_ is wrong. He came back with the reason the
plain form actually bothers him, which is a better diagnosis than the negation was a fix: _a_
and _à_ are homophones, and _une fonction à deux paramètres_ is the standard French way of
describing a signature, so _Cette fonction a un paramètre_ can be parsed as a noun phrase
rather than an assertion. His proposal, _Cette fonction prend un paramètre_, fixes that without
touching the shared phrase at all: the verb sits in the parent message, which is not shared, so
the exact and range messages can take _prend_ while the "at least" ones keep _a besoin d'au
moins_. That is what was applied, and it is now a general grammar rule in the guide. The count-of-zero slot became _zéro paramètre_ rather than
_0 paramètre_ in the same edit, since a spelled-out word reads as prose after _prend_.


## 2026-09-04 (later the same day): refined into two senses, `clean` → _propre_, `neat/elegant` → _élégant_

**Decided by:** the translator, on the linguistic evidence, after mirina (post 6554) and
resu-xunil (posts 6559-6574) argued opposite sides in the forum.
**Status:** settled. Supersedes the single-row decision logged directly below, which is kept
for the record because its reasoning is still half of the answer.
**Terms affected:** the one `neat / clean (of code or a solution)` row is replaced by two
rows, one per sense ("Tooling & engineering").
**Files affected:** `glossary.md`, `exercise/matching-socks.md`,
`../../../i18n/locales/fr/curriculum/exercises/matching-socks/instructions.md`.

resu-xunil's objection was that _propre_ and _élégant_ are not two candidate translations of
one idea, they are two different qualities, and English says so too: code can be clean (no
mess, no bugs) without being neat (pleasingly minimal), and the source author wrote "neat",
not "clean", on purpose. He backed _élégant_'s language-quality sense from CNRTL and from
the Wikipédia definition that pins élégance to « l'économie de moyens », and pointed out
that his own three-way code example (badly indented / properly indented / reduced to
`return condition;`) needs both adjectives to describe, not one.

What decided it was not the dictionaries on either side but the sentence itself, and the
rest of the French corpus:

- The Bonus paragraph puts the two qualities in *contrast*: "there's a pretty neat solution
  at 29 lines of code... You can get lower, but the code tends to become **less readable**".
  Readability is the axis that gets worse below 29 lines, so it cannot also be the quality
  the 29-line solution is being praised for. Rendering "neat" as _propre_ produced "une
  solution plutôt **propre** ... mais le code a alors tendance à devenir de moins en moins
  **lisible**", which sets up an opposition between two words a French developer reads as
  near-synonyms. _élégante ... mais moins lisible_ is a real contrast; _propre ... mais moins
  lisible_ is close to a contradiction.
- The corpus already draws exactly this line, consistently, and matching-socks was the only
  file out of step after the earlier change. `exercise/space-invaders-repeat` translates
  English "there's a **neater way** to do this... in only 7 lines of code" as "une façon
  plus **élégante** de faire", the identical do-more-with-less sense. `concepts/repeat`
  translates "keeping your code **neat and tidy**" as "garder un code **propre** et bien
  rangé", and `exercise/build-wall` translates "**clean**, satisfying code" as "un code
  **propre** et satisfaisant". Same English word, two senses, and French was already
  splitting them correctly.
- The laundry echo is a smaller point but pushes the same way: this exercise says _propre_
  three times in its literal sense (les vêtements propres, le panier propre), so "une
  solution plutôt propre" lands in the middle of a text about clean washing.

mirina's argument is not overturned, it is scoped. She is right that _code propre_ is the
collocation French developers and job ads use, right that beginners will meet it constantly,
and right that it should be introduced early rather than late. That is exactly what the
first row now fixes, and beginners meet it earlier than this exercise anyway, in
`concepts/repeat` and `exercise/build-wall`. Her instinct that a beginner would not reach
for _élégant_ to praise their own code is also correct; the point is that this sentence is
not praising code quality, it is praising concision.

Where each side was right, in one line: mirina identified the correct word for the quality
French names _propre_, resu-xunil identified that this sentence is not about that quality.

Not swept: nothing needed sweeping. The other _élégant_ uses in the fr corpus
(`exercise/space-invaders-repeat`, `concepts/logical-not`, `concepts/function-composition`,
`videos/using-multiple-functions-together`, `videos/remainder`) are all the economy sense
and are correct under the new second row; the _propre_ uses (`concepts/repeat`,
`exercise/build-wall`, `concepts/function-composition`) are all the readability sense and are
correct under the first. `exercise/alphanumeric` ("quelques lignes de plus donneraient sans
doute un résultat plus élégant") is the one place where more lines are called _more_
élégant, which reads oddly against the 29-line argument here but matches its own English
source and is a different point (production-quality code vs a golf target); left alone.


## 2026-09-04: `neat` / `clean` (of code) → _propre_, never _élégant_

**Decided by:** mirina, the forum, post 8, reviewing
`exercise/matching-socks`.
**Status:** settled.
**Terms affected:** `neat / clean (of code or a solution)` (new row, "Tooling &
engineering").
**Files affected:** `glossary.md` (Tooling & engineering),
`languages/fr/exercise/matching-socks.md`,
`../i18n/locales/fr/curriculum/exercises/matching-socks/instructions.md`.

The Bonus paragraph rendered the English "a pretty **neat** solution at 29 lines of code" as
"une solution plutôt **élégante**". mirina's point is that _élégant_ applied to code is
possible in French but uncommon, and wrong for this audience: for a French speaker _élégant_
belongs to a dress, a way of walking, handwriting, a dance move. The adjective French
developers actually use for code quality, readability and best practice is _propre_, and
_code propre_ (sometimes even the English "clean code" alongside it) is the fixed
collocation. She backed it with screenshots of French programming material and of job ads
listing "code propre" among required skills, and made the audience argument explicitly:
these are beginners, and _propre_ is a word they will meet constantly from here on, so it is
worth introducing from the start.

She offered three phrasings and said the important part was the adjective, not the frame.
Took "une solution plutôt propre", which keeps resu-xunil's own sentence structure from post
5 (fronted "Cependant", "qui tient en", the colon, "donc") intact and changes only the one
word. Declined the "que nous avons retenu" half of her phrasings: the guide's Formality
section fixes **"on"** as this content's collective voice, so "qu'on s'est fixé" stays.

Noted and accepted that this exercise already uses _propre_ several times in its literal
laundry sense (le panier propre, "Rien de propre"). It is a different section and a
different subject (lines of code, not washing), the Bonus paragraph reads unambiguously, and
the faint echo is harmless rather than confusing.

Scope kept to this item, deliberately. The row forbids _élégant_ for the *quality of code or
of a solution*; the other French uses of _élégant_ in the corpus
(`exercise/space-invaders-repeat`, `concept/logical-not`, `concept/function-composition`,
`videos/remainder`) are all "une façon plus élégante de faire" — an elegant *way* of doing
something, which is idiomatic French and not what mirina objected to. The one genuine
borderline case is `exercise/alphanumeric` ("quelques lignes de plus donneraient sans doute
un résultat plus élégant"), which nobody has reviewed; left as-is for now rather than swept
unasked.

## 2026-08-18: CLI gender reverted back to feminine (_la CLI_, not _le CLI_) — team consensus

**Decided by:** a converged consensus of all three active fr reviewers, the forum: mirina (post 106, the original masculine proposal), then
resu-xunil and williamapc (posts 108-109, pushing back for feminine), then mirina again
(post 111, conceding). This reverses the 2026-08-17 entry below, whose masculine change is
kept in this log rather than deleted, per the file's convention of a permanent decision
record.

**The sequence.**
- **Post 106 (mirina):** proposed _le CLI_ (masculine), arguing borrowed tech anglicisms
  default to masculine in French regardless of the spelled-out French equivalent's own
  gender (_le wi-fi_, _le web_, _le CSS_), backed by usage examples, a video, and a Reddit
  discussion. Actioned directly per "no approval needed for native-speaker calls," which
  produced the 2026-08-17 change below.
- **Posts 108-109 (resu-xunil, williamapc):** both reported they personally use feminine
  (_la CLI_ / _une CLI_). resu-xunil backed this with screenshots of real French technical
  documentation — Symfony, Docker, and AWS docs — all consistently using _la CLI_, direct
  evidence against mirina's masculine-anglicism pattern for this specific term.
- **Post 111 (mirina):** replied again, this time not rebutting resu-xunil's documentation
  evidence. She argues the team has always understood _la CLI_ (feminine) without any
  confusion, and that keeping feminine serves clarity and consistency better than the
  strict technical-correctness argument she made in post 106. This reads as her withdrawing
  the masculine push, not merely deferring to the others.

**Why this is a genuine team consensus, not an orchestrator call.** All three currently
active fr reviewers — mirina, resu-xunil, williamapc — now independently agree on feminine:
resu-xunil and williamapc from the start (with documentary evidence), and mirina by her own
final post. No judgement was exercised here beyond reading that convergence; the reversal
follows "guide defers to humans" the same way the original masculine change did.

**Change.** `CLI (the concept)` row (Keep in English section): gender reverted from _le CLI_
back to _la CLI_. The rest of the row (explain it as _interface en ligne de commande_ where
the source defines it, then use `CLI`) is unchanged.

**Sweep of already-published content.** Checked `../i18n/locales/fr/` for masculine-agreement
CLI usages (_le CLI_, _un CLI_, _ce CLI_, and other masculine adjective/possessive
agreement) that may have been produced during the brief window the masculine form was live,
and reverted any found to feminine. See the sweep report below for the file list and counts.

## 2026-08-17: CLI gender corrected from feminine to masculine (_le CLI_, not _la CLI_)

**Decided by:** mirina, the forum, post 106 (post_id
5242), actioned directly on her evidence per "no approval needed for native-speaker calls."
She tagged resu-xunil and williamapc for their views too, so this could still get contested
feedback later, but her post itself reads as a clear, well-evidenced recommendation rather
than an open question, so it was actioned on her word alone.

**Her reasoning.** The glossary's existing _la CLI_ (feminine) followed the grammatical
gender of the spelled-out French phrase (_une interface_ is feminine). mirina argues that is
not how French actually genders this kind of borrowed tech anglicism: usage defaults such
loanwords to masculine regardless of the spelled-out equivalent's own gender, and cited the
same pattern elsewhere in the glossary's own territory: _le wi-fi_ (though _une onde_ is
feminine), _le web_ (though _la toile_ is feminine), _le CSS_ (though _une feuille de style_
is feminine). She backed the CLI case specifically with real usage ("le CLI d'Angular", "Le
CLI de Vue.js est buggé"), a video example, and a Reddit discussion showing native-speaker
consensus.

**Change.** `CLI (the concept)` row (Keep in English section): gender changed from _la CLI_
to _le CLI_. The rest of the row (explain it as _interface en ligne de commande_ where the
source defines it, then use `CLI`) is unchanged.

**Sweep of already-published content.** Checked `../i18n/locales/fr/` for feminine-agreement
CLI usages (_la CLI_, _une CLI_, _cette CLI_, and other feminine adjective/possessive
agreement) and fixed them to masculine. See the sweep report for the file list and counts.

## 2026-08-16: italics rule extended to `true`/`false`/`template`/`template strings`/`params`; `API`/`framework`/`workflow`/`CLI`/`canvas`/`code`/`bug`/`frontend`/`backend`/`debug` confirmed to stay un-italicized

**Decided by:** resu-xunil, the forum, post 102, answering
our own open question from post 100 (see the 2026-08-14 entry below): when the `string`/
`template literal` italics rule was settled, we explicitly asked whether it should extend
to the other terms we keep in English (`framework`, `workflow`, `canvas`, `API`, `CLI`), or
only to terms with a natural French equivalent, and said we had not decided it because he
had not raised it.

resu-xunil answered directly, flagged explicitly as his own opinion but a clear
recommendation with no hedging:

- **Leave un-italicized**: `API`, `framework`, `workflow`, `CLI`, `canvas`, `code`, `bug`,
  `frontend`, `backend`, `debug`. His reasoning (implicit in the split he drew): these are
  the terms with no real French equivalent a developer would reach for instead, so there is
  nothing for the italics to be disambiguating against.
- **Should be italicized, same treatment as `string`/`template literal`**: `true`, `false`,
  `template`, `template strings`, `params`.

**Why `true`/`false` needs a narrower reading than the others.** Unlike `string`, the
glossary already translates `true`/`false` to _vrai_/_faux_ in ordinary prose, and the
literal JS keywords already stay in code font (backticks) per the pre-existing row, which is
a different mechanism from italics (code font marks it as syntax being referenced; italics
marks an English loanword sitting in a French sentence). resu-xunil's answer is read as
adding a third case: where prose uses the bare English word `true`/`false` itself, as a
loanword, rather than translating it or pointing at the literal code value, it should now be
italicized rather than left bare. The glossary row is written to keep de three cases
distinct.

**Sweep of already-published content.** Checked every `.md` file under `../i18n/locales/fr/`
for `true`, `false`, `template`, and `params` (case- and word-boundary sensitive, and
re-checked without the boundary restriction to catch anything already wrapped in
underscores). Result: **no files needed editing.**

- Every existing bare `true`/`false` occurrence in published fr content is already inside
  backticks (a code-value reference), consistent with the pre-existing rule, with one
  exception: `curriculum/exercises/luhn/instructions.md` has a bare, unmarked "false" ("tu
  dois renvoyer false.") where the rest of the same file backticks it. This reads as a
  missing-backtick slip against the file's own established convention, not a case for
  italics, so it was left untouched and is flagged here rather than fixed as part of this
  pass, which is scoped to the italics rule, not a general backtick audit.
- Every existing `template` and `template string(s)` occurrence in published fr content
  (`curriculum/concepts/string-templates/page.md`, `curriculum/exercises/raindrops/
  instructions.md`, `curriculum/exercises/tile-rack/instructions.md`,
  `curriculum/concepts/function-composition/page.md`) is **already italicized**, ahead of
  this rule being written down formally. The one non-italicized `template` (in
  `string-templates/page.md`'s HTML `alt=` attribute) is correctly left bare: it is the
  pre-existing HTML-attribute carve-out (screen readers would read literal underscores).
- The one `params` occurrence (`curriculum/exercises/spotify/instructions.md`, "params doit
  toujours être un dictionnaire vide") refers to the literal named parameter of the
  `fetch(url, params)` signature quoted in the same sentence, so it reads as a missing-
  backtick slip (should be `` `params` ``) rather than the informal-shorthand loanword sense
  resu-xunil described. Left untouched for the same reason as the luhn line above, and
  flagged here rather than fixed.

**Terms affected:** `true`/`false` (row updated, Values & data types), `template`, `template
strings`, `params` (new rows, Keep in English). `API`, `framework`, `workflow`, `CLI`,
`canvas`, `code`, `bug`, `frontend`, `backend`, `debug` are unchanged: their existing rows
already document them as staying un-italicized by omission, and this entry is the record of
that now being a confirmed answer rather than an open question, so no glossary.md edit was
needed for them.

**Files affected:** `glossary.md` (the `true / false` row and three new rows in "Keep in
English"), this file. No files under `../i18n` needed changes.

## 2026-08-14: the `string` open question, closed (bare English terms now italicized)

**Decided by:** resu-xunil and williamapc, the forum, posts 94-96.

The glossary had recorded a tension: `string` was kept English so _chaîne_ stayed free for
the array-chain metaphor, but the ordinary-word principle pointed at _chaîne de caractères_,
which French dev writing genuinely uses. resu-xunil reopened it (post 94), reporting that
bare English `string` sitting unmarked in French sentences read uncomfortably, and proposed
either italicizing it or switching to _chaîne de caractères_ outright, preferring the
former. williamapc agreed (post 95) and added the limiting condition from the other side:
the repetition _chaîne de caractères_ forces is fine when sporadic, tedious when it recurs
through a page.

The two positions combine into one rule rather than competing, so the original
English-keeping call stands and gains a typographic marker that answers the discomfort:
`string` stays English and is always italicized in prose, and _chaîne de caractères_ stays
available for occasional use where it reads better but must not repeat through the same
page. resu-xunil extended the same treatment to `template literal` (post 96). Whether it
extends to the other kept-English terms (`API`, `framework`, `workflow`, `CLI`, `canvas`)
was not asked and is not decided here.

Two mechanical carve-outs surfaced in posts 98-99, where the same italic markup would reach
the reader as literal underscore characters rather than as italics: a page's frontmatter
`description` field (not parsed as Markdown by the card component) and video subtitles
(`.vtt`). Both stay unitalicized.

**Terms affected:** `string`, `template literal` (glossary rows updated in the "Keep in
English" table).

## 2026-08-11: `build` stays contextual, no glossary row (settled, question closed)

**Decided by:** resu-xunil, the forum, post 83,
confirmed by mirina in post 92.
**Status:** settled. The question is closed, not open to a further round.
**Terms affected:** none. `build` deliberately has **no** row in
`languages/fr/glossary.md`, and adding one would contradict this decision.
**Files affected:** `languages/fr/glossary-notes.md` only.

**What was asked.** mirina had reported that `build` ("build a wall", "build a house",
"build a solution") recurs across exercise instructions and that she re-decided it every
time (_construire_, _réaliser_, _créer_, _concevoir_), which risked two translators
diverging on one English word. The thread was asked to choose between fixing one French
verb everywhere and writing "context decides" into the glossary. Either answer settled it.

**The answer.** resu-xunil answered "context decides" (post 83). mirina, who raised the
concern in the first place, then withdrew it in favour of his position: "in the end, it
comes that I totally agree with @resu-xunil, he's right => 'context decides' is the best
and most relevant approach" (post 92). Two native speakers, one of them the person who
opened the question, agree that no fixed rendering is wanted.

**What that means for a translation pass.** Judge `build` per instance, from what is being
built and how the sentence reads, exactly as any unglossed word is judged. The absence of a
row here is a decision, not a gap: a future pass that meets `build` should not treat it as
an unanswered question, propose a delta for it, or re-raise it on the thread. Nothing in
`i18n` needed re-translating, because no fixed term was imposed to apply.

## 2026-08-11: "challenge" (platform content type) → _défi_ gets its own row (settled)

**Decided by:** mirina, the forum, post 90.
**Status:** settled.
**Terms affected:** new row `challenge (platform content type)` → _défi_ in
`languages/fr/glossary.md` (Platform & curriculum vocabulary); the existing
`puzzle (the thing the learner has to solve)` row now cross-references it instead of only
mentioning the collision in passing.
**Files affected:** `languages/fr/glossary.md`, `languages/fr/glossary-notes.md`.

**What was asked.** Earlier the same day, the `puzzle` resolution settled that French has
no single word for "puzzle" and picks _casse-tête_/_énigme_/_défi_ by context. That left an
open question: _défi_ is also the app's own word for the platform content type "Challenge",
so does "challenge" deserve a glossary row of its own rather than a passing note inside the
`puzzle` row?

**mirina's answer.** She agreed, on one condition: that "challenge" has a specific meaning
that flows throughout the course, rather than being an ordinary English word used loosely.

**Why the condition is already satisfied.** It is not a judgement call: the French app copy
already treats Challenge as a named content type and already renders it _défi_. The
`fr` app catalog has the sidebar item _Défis_, the section headings _Défis associés_ and
_Défis récents_, the page title _Défis_, and the marketing line _Relève des **défis** plus
difficiles_. A content type the learner navigates by name, in the sidebar, is exactly the
kind of term that has to be fixed once and never drift, so it earns a row.

**How the two rows now relate.** They are separate senses of one French word, and the
glossary says so from both sides: `challenge` is the platform noun and is always _défi_;
`puzzle` picks its word by context and may land on _défi_, but must not where the platform
sense could be read on the same screen.

## 2026-08-11: "partner in crime" → _compagnon_ on `concept/else` (settled, reverses _acolyte_)

**Decided by:** orchestrator, on the strength of two native speakers' picks, the forum: williamapc ranked _compagnon_ first (post 4086) and
mirina's final word was _compagnon_ (posts 4352, 4353). resu-xunil, who argued for
_acolyte_, said twice he was happy with whichever word won (posts 4103, 3316) and himself
agreed _acolyte_ is not in younger learners' everyday lexicon (post 4355).
**Status:** settled. This reverses the earlier _acolyte_ pick, which had been marked
resolved on 2026-08-10 (post 4235) after resu-xunil confirmed it; mirina's review, already
written before that mark, arrived the next day and reopened the question with an argument
nobody had answered.
**Terms affected:** none; still no glossary row. "partner in crime" occurs exactly once in
the whole curriculum (`curriculum/src/concepts/else/source.md`), so it does not earn one.
**Files affected:** `../i18n/locales/fr/curriculum/concepts/else/page.md`,
`languages/fr/concept/else.md`.

The sentence is now _Découvrons maintenant son compagnon, l'instruction `else`
(« sinon »)._, keeping resu-xunil's possessive construction (post 3307), which carries the
"`else` cannot exist without `if`" idea regardless of which noun follows.

**Why _compagnon_ won.** The deciding rule is naturalness for the actual audience:
absolute beginners, many of them young, so the register has to be everyday spoken French,
not literary French. _compagnon_ is understood across ages and education levels
(mirina), carries the belong-together, go-as-a-pair sense (_les compagnons de toujours_),
and was independently the first choice of both native speakers who ranked the candidates.

**Why the alternatives lost.** _acolyte_ and _compère_ are the closest literal matches for
"partner in crime" and _acolyte_ additionally carries the subordinate-helper sense
resu-xunil valued (CNRTL: "companion and usual servant of a person to whom he is
subordinate"), but both are formal/literary and rare in everyday speech, especially among
younger speakers, which is precisely the audience this page is written for. mirina's
concession that _acolyte_ is "by far the best" match is about the English idiom in
isolation, not about the sentence's readers, and the English idiom is itself playful rather
than technical, so a close idiomatic match is worth less here than an accessible word.
_camarade_ has the right register but misses the mutual dependency. _partenaire_ (mirina's
intermediate proposal) captures the pairing well but reads as a work/sport partner and was
not her final pick. _complice_ was the original draft wording and nobody defended it.


## 2026-08-11: `encrypt` → _chiffrer_, `encode` → _encoder_ (cryptography vs format)

**Decided by:** resu-xunil, native speaker, on the forum, post 86, while reviewing `caesar-cipher`.
**Status:** settled.
**Terms affected:** `encrypt` / `encode`. No glossary row: the split is exercise-scoped and
recorded as a terminology bullet in `languages/fr/exercise/caesar-cipher.md`.
**Files affected:** `languages/fr/exercise/caesar-cipher.md` only.

French keeps a strict distinction that English blurs. _Chiffrer_ is cryptography: a key or
secret algorithm turns readable text into unreadable text, with the intent to hide it (the
cipher itself is _un chiffre_). _Encoder_ is representation only: Base64, UTF-8, ASCII, URL
encoding, run-length encoding, where anyone holding the rule can read the result. Translating
"encode a message" literally in a Caesar cipher context is a technical mistake in French: a
French developer reads it as "convert this to Base64". So the exercise's prose uses
_chiffrer / chiffré / chiffre_ throughout, while the identifiers `encode(message, shift)` and
`encodeMessage` stay English because they are code. _Encoder_ remains correct everywhere the
sense really is format-only, so this is not a sweep.

williamapc added a usage note (post 87) that does not change the decision. In everyday
professional French, especially among practitioners under 35, _encrypter / décrypter_ (and
_crypter_) are what people actually say, and _encrypter_ now has a Larousse entry; he reports
meeting only one developer in twenty years who said _chiffrer_. But his own citation settles
it the other way: Larousse calls _chiffrer_ "le terme technique correct en français, à
préférer à l'anglicisme crypter". The course teaches the correct technical term, so
_chiffrer_ stands. Recorded here as real-world colour in case the choice is ever revisited.

## 2026-08-10: `foot-gun` → _piège involontaire_ (owner-authorised ruling)

**Decided by:** the orchestrator, on Jeremy's explicit instruction to make the final call,
after ten days without convergence on the forum, posts 24
to 80, involving resu-xunil, astyanax, williamapc and mirina, all native speakers.
**Status:** settled. Do not reopen.
**Terms affected:** `foot-gun`.
**Files affected:** `glossary.md` (Core decisions). No translated content was touched: the
term had not yet reached a French page, so the ruling lands before the first pass that needs
it rather than after.

_piège involontaire_ was the standing entry and is confirmed rather than replaced. It is the
only candidate more than one participant accepted: resu-xunil proposed it, astyanax said he
would be "perfectly fine" with it, and mirina agreed with the case made for it. It is also
the most accurate reading of the coinage: a foot-gun is a trap nobody set on purpose, which
is precisely what _involontaire_ says, and unlike every rival it stays a countable noun that
drops into all three real source sentences ("Sensible Mode removes these foot-guns", "We call
some features foot-guns", "But I've removed the foot-guns").

Why the others lost, in the order they were floated:

- _fonctionnalité pénalisante_ (astyanax's own first choice, citing the French Wiktionary
  entry for "footgun") is natural French but semantically off-target: _pénalisant_ means
  disadvantageous or handicapping, so it describes a feature that costs you something, not one
  that hands you the means to hurt yourself. It also collides with the source's own phrasing:
  "we call some features foot-guns" becomes "nous appelons certaines fonctionnalités des
  fonctionnalités pénalisantes". Attestation in a dictionary is evidence a rendering exists,
  not evidence it reads well in our sentences.
- _fonctionnalité piégée_ / _piège à développeur_ were rejected by astyanax and mirina both.
  _fonctionnalité piégeuse_ (williamapc) is the best of that family and genuinely idiomatic,
  but it inherits mirina's objection that _fonctionnalité_ is too narrow, which matters
  because the blog uses the term for language behaviour generally, not only for listed
  features.
- _piège_ alone (mirina) is natural but is already this glossary's rendering of `pitfall`, and
  the source treats foot-gun as a coined term it stops to define. It survives as the permitted
  short form on later mentions, which is where the objection to heaviness really bites.
- _idée trompeuse_ / _idée minée_ (mirina) have no currency in French technical writing;
  _idée minée_ in particular is not an existing collocation.
- _effet de bord_ (williamapc) is a real and well-defined French CS term, but it means side
  effect. A foot-gun need not have side effects and a side effect need not be a foot-gun, so
  adopting it would teach learners the wrong concept under the right-sounding name.
- _une balle dans le pied_ (resu-xunil, williamapc) is the idiom French actually reaches for,
  but it is a verb phrase, not a noun for a thing the platform removes. It is kept, as the
  gloss attached to the first mention, which is exactly how the English source introduces the
  term too.
- Keeping "foot-gun" in English with a first-mention gloss (resu-xunil) was the fallback if
  nothing French fit. Something French does fit, and the term is a coinage rather than an
  established API word like `string`, so there is nothing to preserve by leaving it English.
- _piège classique_ and _faux ami_ (mirina, post 80, offered without endorsement) arrived last.
  _piège classique_ has the same clash with `pitfall`, and _faux ami_ is an established
  linguistics term for a deceptive cognate, which would actively mislead in a language-learning
  context.

resu-xunil's closing point on post 78, that context decides which expression fits, is honoured
by the row rather than overruled: the glossary now fixes the term for first mention, carries
the "balle dans le pied" idiom as its explanation, and lets later mentions shorten.

## 2026-08-08: « en dur » always in guillemets; X/Y/Z capitalised in prose parentheticals

**Decided by:** resu-xunil, a native speaker, across three forum threads,
reviewing `exercise/relational-snowman`, `exercise/relational-sun` and
`exercise/relational-traffic-lights`. **Status:** settled.
**Terms affected:** none (typography/house-style rules, not term mappings).
**Files affected:** `guide.md` (Style notes), the four exercises fixed in the same pass, and
`state/content-updates-needed.md` for the outstanding sweep.

**« en dur ».** _en dur_ is developer jargon inside otherwise beginner-facing prose, so it
reads as an unmarked oddity when written bare. resu-xunil asked for it to be set in
guillemets everywhere it appears, and for a short gloss on first use where the sentence has
room: "utiliser une valeur fixe au lieu d'une variable que l'on peut modifier à tout
moment". The guillemets do the same job the quotes around a term do in English: they mark it
as a named thing rather than an ordinary adjective phrase. Applied in this pass to
`relational-snowman`, `relational-sun` and `relational-traffic-lights`; other already-published
French files may still carry it bare, which is logged for the next pass.

**X/Y/Z in parentheticals.** The parenthetical glosses that explain a coordinate variable
("(position x du soleil)", "(y du rouge)") were writing the axis letter in lower case, which
reads as a stray letter rather than as the name of an axis. resu-xunil asked for it
capitalised, and separately asked for every exercise to be checked. Code identifiers are
untouched: `sunX` and `sunY` are the program's own names and keep their casing. The
repo-wide sweep is logged rather than done here.

## 2026-08-03: `code block` → `bloc de code` (reviewer retraction)

**Decided by:** native speaker (myrtarazona), the forum, retracting her own confirmation at three hours earlier. Corroborated by two further native
speakers on the same topic: williamapc and resu-xunil.
**Terms affected:** `code block` (`bloc d'instructions` → `bloc de code`), and the
cross-reference in the Notes of `scope` → `portée`.
**Files affected:** `glossary.md` (Loops, state & program flow).

myrtarazona confirmed `bloc d'instructions` on 2026-08-02 (see the superseded entry below),
then came back the same evening to say she had not been comfortable with that answer. Her
objection is one of precision, not of taste: `bloc d'instructions` names only the
statements, so a French explanation built on it teaches something narrower than the English
does. Her own worked example is the argument. "Dans une fonction, un bloc d'instructions
après un if contient uniquement des instructions à exécuter si la condition est vraie."
misleads a learner, because a block after an `if` also holds expressions such as
`x = 5 + 3`; "Dans une fonction, un bloc de code après un if peut contenir n'importe quel
code à exécuter si la condition est vraie, que ce soit des instructions, des expressions ou
des déclarations." is accurate. She also checked usage before writing, citing MDN's
French glossary (community-translated) and the French version of Coddy.Tech as evidence
that `bloc de code` is what French programming writing universally says, and noted the
practical cost of the narrower term: learners hitting the mismatch would ask about it on
the forum and Discord, which is avoidable confusion we would be generating ourselves.

williamapc agreed with her reasoning while considering both renderings usable ("I think you
are absolutely right", "you can mostly use both with the same meaning", "after a few days of
coding you won't notice any difference"), so his position argues against nothing here.
resu-xunil supported the substantive point from the other side: instructions exist
perfectly well without code (wiring diagrams, safety procedures, recipes, step-by-step
manuals all give instructions and contain no programming), so `instructions` is the weaker
half of the pair to build the term on. No reviewer argued for keeping `bloc d'instructions`.

**This is a correction of a retracted decision, not an overwrite of a live one.** The
protection on a native-speaker row exists so an agent's opinion cannot displace a speaker's
judgement; here the speaker who made the call withdrew it herself, on the record, in the
same thread, with two other reviewers weighing in and neither objecting. The owner
authorised actioning it. The row is protected again in its new form, and reopening it means
going back to that thread.

The `scope` → `portée` row cross-references this one to keep the two concepts apart, so its
Notes were updated in the same edit; the `portée` rendering itself did not change.

## 2026-08-03: "Not started" → `Non commencé` / `Non commencés`

**Decided by:** native speaker (mirina), agreed by a second native speaker (resu-xunil),
the forum.
**Terms affected:** the new `Not started (progress status)` row.
**Files affected:** `glossary.md` (Platform & curriculum vocabulary) and the French app
copy, whose progress-status keys now read `Non commencé` / `Non commencés`.

The app copy previously rendered the status as `Pas commencé` / `Pas commencés`. mirina
proposed `Non commencé` instead and resu-xunil agreed; nobody argued for keeping `Pas`.
`Non` is the form French uses to negate a participle used attributively, which is what a
status label is, whereas `Pas commencé` reads as a clipped spoken negation of a verb and
sits awkwardly as a standalone label.

Number agreement is part of the decision, because the string appears in two shapes in the
UI: singular on a status badge describing one challenge, plural on a filter tab covering a
list of them. That is why the row carries both forms rather than one, and it is the part a
future website-copy pass would otherwise flatten.

There was no glossary row for this at all before, so a future pass would have regenerated
`Pas commencé` and quietly undone the fix. The row is now protected: it is a native
speakers' decision and is not to be re-opened by a translation pass.

## 2026-08-03: Dictionaries page wording, settled between two reviewers

**Decided by:** mirina and resu-xunil on the forum. They reviewed the page independently, disagreed on seven
sentences, and were asked to settle those between themselves rather than have us pick a
side. mirina listed the resolutions in post 8 and resu-xunil accepted all of them in post 9
("That choice is perfect, I can't do better"), so every one of the seven is a two-speaker
agreement, not one reviewer's preference.
**Terms affected:** none. No glossary row changed; this is per-page wording plus one
existing standard being reaffirmed.
**Files affected:** `concept/dictionaries` reviewer notes and the `fr` translation of the
Dictionaries concept page.

The one decision with reach beyond this page is _récupérer_ for getting a value out of a
container. It was settled on the Arrays page first, and both reviewers chose the version
that matches it here (_d'en récupérer sa valeur_) over _en sortir_ and _en extraire_, so it
is now the consistent French verb for that action across concept pages.

Two points where the reviewers' reasoning is worth keeping. First, mirina refused to swap
_si tu veux_ for _si nécessaire_ in the same-values rule: to a complete beginner "if you
want" and "if needed" are different instructions, and the English says the former. Second,
the "in code" sentence was restructured with a colon rather than a semicolon; mirina's
two-clause structure won, but with her own later correction from semicolon to colon.

The straight-quote question that both reviewers raised separately was not put to them,
because `guide.md` already settles it: French uses guillemets. It was applied mechanically.

## 2026-08-02: "get (something) out" → `récupérer` confirmed

**Decided by:** two native speakers (myrtarazona and resu-xunil), the forum.

For the technical action of retrieving a value out of an array/string/box (English "get
something out"), `récupérer` is the agreed rendering, not `obtenir` (too generic/standard)
or the `sortir`/`ressortir` phrasing used inconsistently elsewhere on the page. Applied
throughout `concepts/arrays/fr.md`.

## 2026-08-02: `code block` → `bloc d'instructions` confirmed

**Superseded** by the 2026-08-03 entry "`code block` → `bloc de code` (reviewer retraction)"
above: myrtarazona retracted this confirmation herself on the same topic, and the row now
reads `bloc de code`. Kept here as the historical record of what was decided on the day.

**Decided by:** native speaker (myrtarazona), the forum.
**Terms affected:** `code block`. **No rendering changed.**

The row already read `bloc d'instructions`, deliberately distinct from `portée` (scope).
myrtarazona confirmed it should stay as-is: a generic programming concept common across
languages, worth keeping fixed early for consistent naming. The row is now protected.

## 2026-08-02: `camelCase`, written as one word, not « camel case »

**Decided by:** native speaker (williamapc), the forum ("[French Review] Concept:
Créer et utiliser des variables"), post #6.
**Terms affected:** `camel case`.
**Files affected:** `glossary.md` (Keep in English), `concept/variables` reviewer notes,
`concept/variables` translation.

The page named the convention as the two-word phrase « camel case ». williamapc pointed out
that French writing on the subject overwhelmingly writes `camelCase`, one word with the
capital, and that the spelling is doing teaching work: it demonstrates the rule at the same
moment it names it, which the spaced-out phrase cannot. That reasoning holds for any named
case style, so the row covers `snake_case` and `kebab-case` too.

This supersedes the earlier guillemets decision on this page (« camel case » at first
mention): the term is now code-styled rather than quoted. The two-word gloss that follows
it (camel = chameau, case = casse) stays, because the reader still needs to know what the
two English words mean, and it reads correctly against `camelCase`.

Note that the English source still writes "camel case" as two words. This is a French-side
call, not a divergence to be fixed by rewriting the source; if the English is ever changed
to match, nothing here needs to change.

## 2026-08-01: Stage 2 batch 2 proposed additions (unconfirmed drafts, not yet in the glossary)

**Decided by:** nobody yet. These are agent proposals from the Stage 2 batch 2 translation
pass (two-fer, strings, digital-clock, arrays, weather-symbols). Additive drafts awaiting
review; nothing has been written to `glossary.md`.

| English | Proposed target | Rationale / notes | Confidence |
|---------|-----------------|-------------------|------------|
| string (gender) | une string (feminine) | Existing "keep _string_ English" row records no gender. Feminine follows dev usage (by analogy with _chaîne_) and avoids the garment reading of "un string". Proposed independently by two workers. | high |
| input (value given to a function/program) | entrée (feminine) | Used across exercise hints and errors; _argument_, _donnée d'entrée_ or kept-English _input_ are all defensible. Proposed independently by two workers. | high |
| quotation marks (string delimiters) | guillemets (doubles) | Must mean the straight `"` characters code uses, not typographic « »; "guillemets droits/anglais" are defensible alternatives. | medium |
| compound data type | type de données composé | _composé_ vs _composite_ is a real fork across concept pages. | medium |
| template string | template string (kept English, une ~) | Parallel to the existing _template literal_ row, which does not obviously cover this phrasing. | medium |
| meridiem (am/pm indicator) | meridiem (kept English/Latin) | Where it is also the literal parameter name in code, a French prose rendering would split prose from code. | medium |
| indicator (the am/pm argument, prose sense) | indicateur | Overlaps with meridiem above; the pair should be settled together. | medium |
| "Expected X but got Y" (check-message formula) | On attendait « X » mais on a obtenu « Y » | Recurs across many exercise catalogs; attendu/reçu/obtenu variants would otherwise diverge. | medium |

Open questions flagged by the pass, not proposals: whether "la string vide" should instead
read "la chaîne vide" (the existing string row's open question applies with extra force
here), and whether guillemets or straight quotes should wrap sentinel strings inside catalog
values (guillemets were used this pass).

## 2026-08-01: Prefer a relative clause over a compressed modifier

**Decided by:** native speaker (resu-xunil), the forum ("[French Review] Exercise:
Arc-en-ciel", and the same reviewer's earlier threads.
**Files affected:** `guide.md` (Style notes), `exercise/rainbow` catalog, shared
draw-category catalog.

Two of the three suggestions on the forum were the same shape: "du code répétitif" ->
"du code qui se répète", and "une couleur hexadécimale commençant par #" -> "une couleur
hexadécimale qui commence par #". Neither original is wrong, but the compressed forms (an
adjective, a present participle) belong to a more formal, written register than the rest of
the page. A relative clause with **qui** is what a French speaker says out loud, and this prose is
meant to sound spoken. Recorded as a general style rule rather than two per-item
notes, because the participle pattern recurs constantly in translations from English.

The third suggestion, "Comment mettre la couleur..." -> "Comment mettre de la couleur...",
is a separate point: the partitive is right because the hint question is asked before any
particular colour has been introduced, so the definite article refers back to nothing.
Logged as a per-item note only.

## 2026-08-01: "C'est une égalité. Annonce-la correctement !" confirmed feminine

**Decided by:** us, answering a question from resu-xunil, the forum ("[French Review]
Exercise: Pierre-feuille-ciseaux",.
**Files affected:** none (no change made); `exercise/rock-paper-scissors` reviewer notes.

resu-xunil asked whether the pronoun should be "-le" (agreeing with an implied masculine
_résultat_) or "-la" (agreeing with _égalité_). The string is self-contained: the only noun
in it is "une égalité", in the sentence immediately before, so the antecedent is feminine
and "Annonce-la" is correct. _Résultat_ appears nowhere in that scenario description; it is
in the instructions, in a different string entirely. Left unchanged.

## 2026-08-01: "un espace", not "une espace"

**Decided by:** native speaker (resu-xunil), the forum ("[French Review] Concept:
Créer et utiliser des variables"), post #1.
**Files affected:** `guide.md` (Grammar), `concept/variables` translation.

The variables page said "deux mots séparés par une espace". The feminine _une espace_ is
genuine printers'/typographers' jargon for the blank itself, which is why it can look
defensible, but in ordinary prose (and to a beginner) the space between words is _un
espace_. resu-xunil corrected it in his review. Recorded as a grammar rule in `guide.md`
rather than as a per-item note, because the trap will recur on any page that talks about
spaces in names, whitespace, or indentation.

## 2026-08-01: Typography examples now carry the non-breaking spaces they mandate

**Decided by:** agent, applying the guide's own imperative rules over its own examples.
**Terms affected:** none.

The Typography section requires U+00A0 before `:`, `;`, `!` and `?` and immediately inside
each guillemet, but the guide contained no U+00A0 anywhere: every French example was written
with an ordinary space ("C'est parti !", "À toi de jouer !", "« comme ceci »", "la syntaxe
suivante :", "Tu es prêt ?", "Alors, à quoi ça ressemble ?"). A guide is loaded into the
prompt for every French item in every pass, so examples that contradict the rule teach the
wrong spacing. The rule wins: those six examples now use real non-breaking spaces. The
deliberately-wrong counter-examples ("la syntaxe suivante:", "Tu es prêt?") keep their
ordinary spacing, because that is the point of them.

Also, house style: an em dash in the "Decided by" line of the open-question entry below was
replaced with a comma, per the no-em-dash rule in `CLAUDE.md` and `global/rules.md`.

## 2026-08-01: `guide.md` trimmed to rules only (rationale moved here)

**Decided by:** owner (iHiD), as a repo-hygiene pass, not a term decision. **Terms
affected:** none changed; `CLI` gained a gender note moved out of the guide.

`languages/fr/guide.md` had drifted into recording the conversations that produced its
rules. It is loaded into the prompt for every French item in every pass, so the rationale,
provenance and duplication were being paid for thousands of times. Every behavioural
instruction was kept; what came out is recorded below. No rule was reworded into a
different rule, and no glossary row was changed except the `CLI` addition noted below.

**Why "tu", and the tutorial-culture research behind it.** The guide justified the
tutoiement choice with a survey of French online tutorial culture: OpenClassrooms,
Grafikart and Pierre Giraud, the established French tutorial platforms, all use "vous", and
we deliberately break from that convention. The models are Duolingo's French app and spoken
YouTube coding content, both of which use "tu" for a young, informal, modern audience. The
tone target was described as "closer in spirit to a modern app like Duolingo than to a
classic reference manual", which is `global/voice.md`'s audience principle rather than
anything French-specific. The rule itself ("use tu, never vous") survives in the guide; all
of this justification came out.

**Audience section removed entirely.** It said readers are primarily in France with a
secondary audience across other Francophone regions, which is the same fact as the guide's
opening instruction to write general international French and default to France's form
where usage splits. The rest of the section was the tutorial-culture research above.

**Native-speaker sourcing for two rules, previously cited inline in the guide.**

- **"Partir" takes "de" before a starting location** ("qui part **d'**en haut à gauche").
  Native-speaker feedback on the forum.
- **French doesn't "solve" a maze.** Confirmed by two native speakers on the same thread.
  The guide keeps the rule; the attribution lives here.

**"digital" → _numérique_** was attributed in the guide to Académie française guidance.
The rule stays; the attribution is here.

**The U+00A0 rendering check.** The guide justified keeping standard French spacing before
`; ! ?` with a rendering argument: the Markdown renderer passes U+00A0 through as an
ordinary Unicode character with no mangling, so there is no rendering reason to drop the
typography. That is research into the pipeline, not an instruction, and it is only worth
revisiting if the renderer changes.

**Why "qui" rather than "ceux qui" after a parenthetical gloss.** The parenthetical is an
aside, not a new sentence, so the relative clause should read as if it were never
interrupted. The rule stays in the guide; the reasoning is here.

**Removed as duplication (rule already lives elsewhere, nothing lost):**

- The `tableau` collision watch (reserve bare _tableau_ for the array) duplicated the
  `array / list` glossary row, which states it.
- The em-dash bullet restated `global/rules.md`'s house-style ban. Only the French-specific
  half survives in the guide: a hyphen is not an em-dash substitute in running prose.
- The whole **Worked examples** section. Its title/headline and call-to-action examples
  restated `global/voice.md` (plus the sentence-case rule already in the guide's typography
  section); its acronym examples restated the `CLI` and `API` glossary rows; its "natural
  phrasing" examples restated the formality section's tu-register and "on" framing; and its
  "common EN→FR pitfalls" re-ran three anglicisms (supporter, adresser, définitivement)
  already listed in the anglicisms section verbatim.
- Pointer sentences saying that the general audience profile is in `global/voice.md`, that
  the formality section realizes its "modern, informal address" principle, and that
  glossary terms are binding (`global/rules.md` says so).
- Emphasis-only framing on the sentence-rhythm section ("the single biggest quality lever,
  and where machine-produced translations characteristically fail"); the heading still says
  "(critical)".

**One term detail moved into the glossary:** the guide's acronym example carried the gender
of `CLI` (_la CLI_). That is a term fact, not a rule, so it moved verbatim into the `CLI`
row's Notes, matching how the `API` row records _une API_. No other row was touched.

**Gaps noticed and deliberately not filled** (they need native-speaker input, not an
agent's guess): reader gender agreement (the guide never says what to do when an adjective
or past participle has to agree with the reader, e.g. "tu es prêt(e)"); articles and
plurals for terms kept in English (_le framework_ / _les frameworks_, _une API_ is recorded
but the others are not); which apostrophe character to type (U+0027 vs U+2019) in elisions;
and the thousands separator in prose, where the decimal-comma rule has a counterpart the
guide does not state.

## 2026-08-01: Native-speaker review of the term list

**Decided by:** native speaker (myrtarazona) on the forum, post 6.
**Terms affected:** `edge case`, `(programming) language`, `backwards compatibility`,
`auth`, `API`, `()` (parentheses), and a new `number / digit` row.

A compilation post going through the glossary section by section. Most of it confirms what
is already there; three things changed.

- **Confirmations (rendering unchanged, rows now protected).** `edge case` → _cas limite_,
  called "the most appropriate"; its Notes no longer say it is awaiting confirmation.
  `(programming) language` → _langage (de programmation)_, with the _langue_ (a human
  language) / _langage_ (a programming language) split confirmed as the real French
  distinction, which the 2026-07-30 entry had flagged as unreviewed. `backwards
  compatibility` → _rétrocompatibilité_. `auth`, split by meaning into
  _authentification_ / _autorisation_, with the point that a beginner will not read a bare
  "auth" as _autorisation_, so it is always expanded.
- **`API` is feminine**, _une API_, added to its Notes. The row itself (kept English, the
  concept explained rather than the acronym expanded) is unchanged.
- **Never write _une paire de parenthèses_.** Technically correct but neither natural nor
  concise: the French plural _parenthèses_ already implies the pair. The example under the
  Brackets section used the "paire" phrasing and now reads _écris son identifiant, suivi de
  parenthèses_. Gender (_une parenthèse_) recorded on the `()` row.
- **New row `number / digit` → _nombre / chiffre_.** The reviewer raised the split as a
  trap for translators, and it is one: English "number" covers both. The rule recorded is
  the strict one, _chiffre_ for a single digit symbol and _nombre_ for a number of any size.
  The reviewer framed it as 0 to 9 being _chiffre_ and anything above 9 being _nombre_,
  which is the common informal shorthand rather than the actual distinction (5 is a _nombre_
  as much as 500 is, and their own example, _deux chiffres après la virgule_, is "two
  digits", not "two numbers"). **This wording of the row is not yet confirmed and should be
  put back to the reviewer.** `number` had been pruned on 2026-07-31 as an ordinary word;
  it earns a row again only because of the digit distinction, which is something to decide.
- **No action, consistent with the prune.** `programming / coding` (_programmation /
  codage_, and _développement (informatique)_ in everyday usage), `developer`
  (_développeur_ / _développeuse_), `tech / tech industry` (_la tech_, _secteur
  technologique_), `pitfall` (_piège_), `value` (_valeur_), `character` (_caractère_),
  `condition`, `comparison` (_comparaison_), `mental model` (_modèle mental_), `deploy`
  (_déployer_), `module`, `component` (_composant_). The reviewer's renderings match what
  the 2026-07-31 prune recorded, so they are confirmed as correct but stay out of the
  glossary as ordinary vocabulary with nothing to decide.
- **Open, not actioned:** `template literal`. The reviewer accepts keeping the English term,
  which is what the glossary does, but glosses it _littéral template_ / _template littéral_
  where the row uses the official _littéral de gabarit_. The French word only ever appears where
  the English itself explains the term, so this is narrow, but it is a genuine difference
  and needs the reviewer's view rather than a silent swap.

The post also links https://blog.stephane-robert.info/glossaire/, a free French DevOps
glossary (911 terms) worth consulting when a future term needs checking. It is a resource,
not a term decision.

## 2026-07-31: Pruned ordinary vocabulary

Removed 47 rows whose French rendering was the plain dictionary word with nothing to
decide (`programming`, `developer`, `tech industry`, `pitfall`, `value`, `number`,
`character`, `integer`, `element`, `key-value pair`, `condition`, `comparison`,
`expression`, `operator`, `to call`, `to define`, `input`, `output`, `pure function`,
`keyword`, `mental model`, `variable`, `error`, `nested`, `to run/execute`, `loop`, `for
loop`, `while loop`, `for-of loop`, `increment`, `concatenation/to concatenate`, `class`,
`method`, `property`, `object`, `deploy`, `module`, `algorithm`, `component`, `lesson`,
`exercise`, `scenario`, `level`, `milestone`, `mentor/mentoring`, `tutorial`, `solution`).
A reviewer might query cutting `for loop`/`while loop`/`for-of loop` and `variable`/`loop`
despite their gender or keyword notes: those notes were mechanical (keep the code keyword;
grammatical gender), not a translation choice, so the rows carried nothing worth keeping.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind French:

- **`interpreter` moved to `interprète`.** The framing behind that move was a course in
  which the interpreter is a character doing a job, so the word had to be able to name a
  person. The earlier choice was _interpréteur_, picked deliberately *to avoid* _interprète_
  on the reasoning that _interprète_ means a human (spoken-language) translator and would be
  misleading for a piece of software. **Exercism does not use that framing**, so the reason
  the row moved is gone while the row itself still reads _interprète_. It is left as it
  stands rather than changed by an agent: on Exercism an interpreter is the program that
  runs Ruby or Python, which is exactly what _interpréteur_ names, so this row needs a
  native speaker's answer before it moves either way.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: French glossary filled out for the concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the using-functions concept page: `mental model`, `brackets (the two
after a function name)`, and `course` for the platform-vocabulary section.

Worth flagging specifically: **`(programming) language`**, rendered `langage (de
programmation)`. This records a real trap: French splits _langue_ (a human language, as in
"une langue que l'ordinateur comprend") from _langage_ (a programming language), where
English uses "language" for both. The row instructs never mixing the two words for the
same sense on one page, but the split itself has not been reviewed by a native speaker.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, unambiguous rendering. |
| developer | Standard French equivalent. |
| tech / tech industry | Natural in French tech media; "industrie technologique" is heavier. |
| pitfall | Ordinary French word. |
| foot-gun | Settled by the dated entry above (2026-08-10). |

### Values & data types

| Term | Why |
|------|-----|
| value, number, character | Ordinary French words. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary French words, so they stand alone. |
| statement (executable) | French uses the same everyday word for the imperative-statement sense and for a single thing the reader is told to do; coining a second word would read worse than the overlap does. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Ordinary and current in French. |
| toggle | No crisp noun exists in French for this concept, so the term is verb-only. |

### Tooling & engineering

| Term | Why |
|------|-----|
| auth | Both _authentification_ and _autorisation_ are standard, unambiguous French terms; pick whichever meaning applies. |
| deploy | Standard, no loanword competition. |
| module | Identical form in French. |
| backwards compatibility | Unambiguous, unlike "compatibilité descendante", which requires knowing which direction "descendante" means. |
| component | Native French term, not a loanword, unlike in some other languages. |

### Keep in English

| Term | Why |
|------|-----|
| string | Kept English so _chaîne_ stays free for the array-chain metaphor. Always italicized in prose as of 2026-08-14 — see the dated entry below for how the open question was closed. |
| pattern | resu-xunil proposed keeping "pattern" in English rather than "motif", explicitly uncertain and tagged @mirina and @williamapc for a second opinion. Not yet settled either way. |
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| framework | Established loanword in French dev writing. |
| template literal | This is what real French developers actually say, even though an official French term exists. |


