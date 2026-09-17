# Portuguese (pt) family guide

The Portuguese realization of `global/voice.md` shared across every Portuguese locale:
Brazilian Portuguese (`pt-BR`) and European Portuguese (`pt-PT`). It covers the grammar,
term-clarification mechanics, and style rules that hold for both. Read `global/voice.md`,
`global/rules.md`, and the relevant `content-types/*.md` alongside it, together with the
locale's own `guide.md`. Term choices are in this file's `glossary.md` plus each locale's
own `glossary.md`; together they are binding, and are applied exactly.

Formality and its grammatical consequences are never shared: they live entirely in each
locale's own guide.

## Grammar

Rules that hold across every Portuguese locale:

- **Portuguese is a null-subject language.** Drop the subject pronoun when it is
  recoverable from context: English "it" as a syntactic subject usually disappears
  entirely rather than being translated as "ele"/"ela", unless contrast genuinely requires
  it.
- **Contractions are mandatory.** `de + o = do`, `de + a = da`, `em + o = no`, `em + a = na`,
  `a + o = ao`, `a + a = à`. "de o código" is wrong; "do código" is the only form. The same
  holds for every preposition + article pair: "in the code" → "no código", "of the function"
  → "da função", "to the value" → "ao valor".
- **Sentence rhythm.** Portuguese reads better in shorter sentences than English. When a
  long English sentence chains two ideas with "which means that", split it into two
  Portuguese sentences.
- **Avoid comma-chained subordinate clauses** that mirror English subordination. Break
  them into two sentences where the target reads more naturally that way.

## Term clarification

When introducing an English term under Portuguese-primary (see `global/voice.md`), append
_em inglês_ after the italic English term inside the parentheses, e.g. a função (_function_
em inglês).

## Style notes

- **Em dashes.** The global no-em-dash rule (`global/rules.md`) applies. In Portuguese the
  natural replacements are a comma for a mid-sentence aside, two separate sentences, or a
  colon to introduce an explanation.
- **Accents are never optional.** `é`, `ã`, `ç`, `ú`, `â`, etc. are always written. Never
  strip accents to simplify.
- **Rhetorical questions** (e.g. "So what does a loop do?") → keep them as natural
  rhetorical questions in the target register; do not flatten them into statements.
- **Jiki name and definite articles.** "Jiki" is invariable in Portuguese (no inflection
  needed). Portuguese also uses the definite article with proper names more freely than
  English; use it with "Jiki" in mid-sentence where it reads naturally ("o Jiki aparece"),
  and drop the article in titles and direct address.
