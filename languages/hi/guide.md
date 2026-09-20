# Hindi (hi) language guide

The Hindi-specific realization of `global/voice.md`: formality, register, grammar, and
worked examples. Term choices are in `glossary.md` and are binding.

## Audience specifics

The general audience profile is in `global/voice.md`. In addition, for Hindi:

- Readers are across India, especially the Hindi-belt states (UP, Bihar, MP, Rajasthan and
  others). Many recognise English technical words when they hear them spoken, but they are
  not fluent *readers* of English prose. That is the whole reason this is translated into
  Hindi at all.
- **So Devanagari has to carry the entire page.** A reader who cannot comfortably read
  English prose cannot decode a Latin-script word dropped into the middle of a Hindi
  sentence either. Borrowed technical words are therefore written *in Devanagari* so that
  they can be read at all (फंक्शन, वेरिएबल, लूप). Bare Latin script is reserved for things
  that are literally code, and for names.
- Many readers are meeting technical instruction in their own language for the first time,
  alongside meeting the concepts themselves. Keep the tone warm and unintimidating.
- **Model the writing on written Hindi technical instruction**, the register of a good
  Hindi tutorial text, a science textbook, or Hindi Wikipedia: clear, plain, and
  explanatory. Do not model it on spoken Hinglish or on a video script. Spoken Hindi tech
  talk drifts into English syntax and into a lexicon our readers do not read; written
  instruction does not.

## Formality (critical)

Hindi's address system is three-way (आप / तुम / तू), and the axis is as much about
*familiarity* as about *formality*.

- **Use आप (aap) throughout, never तुम or तू.** आप is the unmarked way to address a
  stranger-audience in Hindi, so it carries no stiffness; तुम reads as presumptuous for
  someone you have never met, and तू never belongs here at all.
- **Conjugate consistently in आप-form throughout a document.** आप takes the same verb
  form regardless of the addressee's gender (e.g. "आप करते हैं" for anyone), which keeps
  prose simple and avoids gendering the reader. Never slip into तुम endings mid-document,
  even where casual Hindi source material does.
- **Warmth comes from tone, encouragement and the physical metaphors, not from downgrading
  the pronoun.** Warm asides, humour and concrete examples all sit normally alongside आप.
- Encouraging imperatives, in आप-form:
  - "आइए देखते हैं" (Let's look at / Let's see)
  - "कोशिश कीजिए" (Try it out)
  - "चलिए शुरू करते हैं" (Let's begin)
  - "अब खुद करके देखिए" (Now try it yourself)

### Which imperative: -इए or -एं

Both are आप-form and both are correct. -इए is the politer form; -एं is polite but direct.
Choose by what the text is doing, not by which file it sits in.

- **Asking the learner to do something takes -इए**: teaching prose, exercise instructions,
  hints, and anything phrased as a request. "इस कोड को चलाइए", "अब खुद करके देखिए".
- **Titles take -इए**: exercise and section titles. -एं in a title reads as
  rude. "भूलभुलैया से बाहर निकलिए", "विजेता तय कीजिए", "अपने फंक्शन बनाइए".
- **The interface's own short labels take -एं**: buttons, menu items, links, and the short
  messages the app shows in reply to what the learner just did. -इए on a button reads odd.
  "कोड चलाएँ", "सभी चैलेंज देखें", and "फिर से कोशिश करें" on a failed run.

The two pull in different directions on a short piece of teaching text, and there the
request wins: a hint that asks something of the learner is -इए however short it is.

## Register (critical)

Hindi's vocabulary comes from two directions, and the single biggest way Hindi translation
goes wrong is picking one of them wholesale. Leaning on the Perso-Arabic side produces
prose that is really Urdu written in Devanagari; leaning on the Sanskritic side produces
prose that reads like a government notice and that Hindi-medium students report as unusable.
Neither is what our reader reads.

**The choice is made per word, by part of speech.** Decide which of these three kinds of
word you have, then apply its rule.

### 1. Ordinary vocabulary: plain middle Hindi

Everyday verbs, nouns and connectives take the plain word real written Hindi instruction
uses. Prefer the left-hand word in each pair:

- शुरू (not प्रारंभ), मदद (not सहायता), कोशिश (not प्रयास), तरीका (not विधि), जगह, चीज़,
  खास, आसान, ध्यान, समझना, दिखाना, बताना, बदलना.
- Sanskritic wins only for abstract or quantitative vocabulary, where it is genuinely the
  ordinary written form: अधिक (not ज़्यादा), उपयोग / प्रयोग for the abstract sense of
  "use", आवश्यक, परिणाम, उद्देश्य, वातावरण, परिचित, स्थिति, विशेषता, वास्तविक, समय.
  इस्तेमाल is fine for the concrete, everyday sense ("इसे इस्तेमाल कीजिए").

**Never use the marked Perso-Arabic vocabulary.** These words do not appear in written
Hindi technical instruction at all, and every one of them is the giveaway that a page has
drifted into Urdu:

| Do not write | Write instead |
|--------------|---------------|
| मक़सद | उद्देश्य |
| माहौल | वातावरण |
| वाक़िफ़ | परिचित |
| ताक़त, ताक़तवर | शक्ति; शक्तिशाली, या "बहुत काम का" |
| वक़्त | समय |
| अमल (करना) | पालन करना, अनुसरण करना |
| आख़िर | अंत |
| असल, असली | वास्तविक |
| ख़ुलासा, तसल्ली, दरअसल, बहरहाल | plain Hindi equivalents |

**Each row bans the root and every word built on it**, not only the exact spelling printed.
A derived or inflected form of a banned word is banned too, and so is a compound containing
it: आख़िरी and आख़िरकार fall under आख़िर, असलियत under असल, वाक़फ़ियत and नावाक़िफ़ under
वाक़िफ़, बेवक़्त and वक़्ती under वक़्त, अमली and बदअमली under अमल. Read the row as the root,
then reject anything that is recognisably the same word wearing a suffix or a prefix.

That list is not exhaustive. The test is simple: if a word would be spelled the same in
Urdu and would look at home in an Urdu sentence, and a plain Hindi word exists, use the
plain Hindi word.

**The exception is a loanword that is common everywhere.** Hindi is one language with many
dialects, and it carries loanwords (Perso-Arabic and others) that are everyday in one region
and unfamiliar in another. So the default stays the plain Hindi word. A loanword is
acceptable where it is genuinely common across the whole Hindi-speaking area rather than
regional: किरदार is one of those, and on its own it is not evidence that a page has drifted
into Urdu. Where `glossary.md` has already agreed the plain Hindi term, that agreement still
binds; this exception covers ordinary
vocabulary the glossary does not settle.

### 2. Technical nouns: borrow, and write them in Devanagari

The names of programming things are borrowed from English and written in Devanagari:
फंक्शन, वेरिएबल, लूप, स्ट्रिंग, एरर, ऐरे, ऑब्जेक्ट, क्लास, इंडेक्स, पैरामीटर. This is
what real Hindi programming instruction does, and it is what makes the term readable to
someone who cannot read Latin script.

- Do **not** substitute a Sanskritic coinage where the borrowed noun is what is actually
  written: फलन, चर, पुनरावृत्ति and सरणी are not used in Hindi programming prose and सरणी
  in particular is not used anywhere.
- Do **not** leave the noun in bare Latin script. `glossary.md` gives the agreed Devanagari
  spelling for each term; use it exactly, and never write the same term two ways on one
  page.
- A handful of concepts have an ordinary Hindi word a beginner already knows, and those
  take it instead of a borrowing: संख्या (number), अक्षर (character), शर्त (condition),
  पूर्णांक (integer), भाषा (language), पाठ (lesson), अभ्यास (exercise). `glossary.md` is
  the authority, term by term.
- For a term not yet in the glossary, transliterate it into Devanagari and flag it in the
  proposed delta. Do not invent a Sanskritic coinage, and do not fall back to bare Latin.

### 3. Verbs and verbal adjectives: Hindi, not a transliterated English verb

What *happens* to those nouns is described in Hindi. Write "वेरिएबल घोषित किया गया", not
"वेरिएबल डिक्लेयर किया गया".

- प्रदर्शित करना (to display), घोषित करना (to declare), निष्पादित करना (to execute, in a
  formal explanation), परिभाषित करना (to define), संग्रहीत करना (to store).
- The warm everyday verb is usually better than the formal one where both exist, and the
  glossary records which we use: चलाना (to run), बनाना (to define a function), बढ़ाना (to
  increment), जोड़ना (to add).
- **A hybrid X-करना verb is a last resort, not a default.** Where an ordinary Hindi verb
  carries the action, use it: a फंक्शन एक वैल्यू **लौटाता है**, it does not "रिटर्न करता
  है". The glossary keeps a short list of hybrids for actions Hindi has no ordinary verb
  for (कॉल करना, असाइन करना, क्लिक करना); do not extend the pattern to any verb the
  glossary has not agreed.

## Script convention

**Devanagari is the default for everything, including borrowed technical nouns.** Bare
Latin script is used only for:

- code, keywords, and identifiers (`move()`, `turnLeft`, `if`, `for`, `repeat`), which are
  never translated or transliterated, per `global/rules.md`;
- literal UI labels the learner sees on screen (**Run Code**);
- product, language and brand names (JavaScript, Python, React, Exercism);
- acronyms pronounced as letters (API, CLI, HTML, JSON).

Everything else is Devanagari. `glossary.md` § "Keep in English" lists the exceptions
exhaustively; a term that is not on that list is written in Devanagari.

Do not mix scripts inside a single phrase: write "फंक्शन एक वैल्यू लौटाता है", never
"function एक value लौटाता है".

## Orthography

- **Numerals: use Western digits (1, 2, 3), not Devanagari digits (१, २, ३).**
- **Nukta: decided per word, not by a blanket policy.** Apply these three rules in order:
  - **Write सिर्फ with no nukta.** Settled; do not re-decide it per page.
  - **Keep the nukta on ज़** (ज़रूरी, ज़्यादा, ज़ंजीर). ज़ is a distinct sound in standard
    Hindi and is normally written.
  - **Everywhere else, drop it** (फिर, तरफ, फाइल, सॉफ्टवेयर, प्लेटफॉर्म, मुकाबला). This keeps
    two Hindi pages from spelling the same word two ways. If a word looks wrong without its
    nukta, say so in the pass report instead of silently spelling it either way.
- **Nasalization: write the chandrabindu (ँ) where the word takes it.** यहाँ, वहाँ, कहाँ,
  जहाँ, हाँ, हूँ, जाँच, पहुँचना, पाँच, ढूँढना, ऊँट, ऊँचाई, बाएँ, दाएँ, फँसना, हालाँकि,
  जाएँ, बनाएँ, संख्याएँ, शुभकामनाएँ, पट्टियाँ. Do not re-decide it per page.
  - **The anusvara (ं) is not an alternative spelling of those words**, and the two marks
    are not interchangeable: हँसना (to laugh) is a different word from हंस (swan).
  - **Write the anusvara where the nasal is a real consonant before another consonant**, and
    the word never had a chandrabindu to begin with: हैं, में, मैं, नहीं, अंत, अंदर, बंद,
    संख्या, संदेश, हिंदी, प्रोग्रामिंग, फंक्शन, स्ट्रिंग, इंडेक्स, केंद्र, चिंता, घंटा.
  - **The anusvara also stays wherever the vowel sign sits above the line** (ि ी े ै ो ौ),
    which is where Devanagari has no room for a chandrabindu: करें, देखें, दोनों, क्यों,
    लोगों, बाईं, दाईं, उन्हें, खींचना, ईंटें, वीं, हों. This is the standard convention, not
    a house preference. So a verb can carry both marks in different forms: जाँचिए but
    जाँचें, पहुँचना but पहुँचें.
  - The practical test is the vowel: a nasalized अ / आ / उ / ऊ / ए (जाएँ, बाएँ) takes the
    chandrabindu; a homorganic nasal consonant, or an above-line matra, takes the anusvara.
    Where a word is genuinely unclear, say so in the pass report rather than picking one
    silently.
- **Sentence-final punctuation: use the danda (।)**, not the Western period, to end an
  ordinary Hindi sentence. A Western period is fine where a sentence ends on a Latin-script
  token, a code span or an abbreviation, since a danda immediately after Latin text reads
  awkwardly. Question marks (?) and exclamation marks (!) work exactly as in English.
- **No capitalization system exists in Devanagari.** Case-based emphasis rules from English
  do not apply. Latin-script terms inside Hindi prose keep their normal English
  capitalization: "JavaScript", "React", "Boolean".

## Grammar

Hindi-specific rules that English speakers (and literal machine translation) get wrong:

- **Word order: Hindi is SOV (subject-object-verb), not SVO.** The verb comes last.
  - EN: "The function returns a value" → HI: "यह फंक्शन एक वैल्यू लौटाता है।"
- **Postpositions, not prepositions.** Hindi marks grammatical relationships with
  particles that follow the noun, not English-style prepositions before it.
  - "in the code" → "कोड में"
  - "to the function" → "फंक्शन को" (the object/dative marker)
  - "with React" → "React के साथ"
  - "from the array" → "ऐरे से"
- **Ergative case (ने) in the simple past for transitive verbs.** When a transitive verb
  is in simple past tense, the subject takes ने and the verb agrees with the object, not
  the subject.
  - "The mentor explained the concept" → "मेंटर ने कॉन्सेप्ट समझाया।" (not "मेंटर समझाया"; the ने
    is required)
  - This does not apply to intransitive verbs or to non-past tenses: "the mentor explains" →
    "मेंटर समझाता है।" (no ने)
- **Gender agreement is unavoidable and must be consistent.** Every Hindi noun is
  masculine or feminine, including every borrowed technical noun, and verbs, adjectives
  and postpositions all agree with it. `glossary.md` records the gender of every noun in
  its own column; use it, and keep agreement consistent across a whole document. For a noun
  the glossary does not list, pick one gender, use it consistently within the page rather
  than alternating, and flag it in the pass report.
  - एरर is **feminine**: "एक एरर मिलती है, जो कहती है..." (never "एक एरर मिलता है").
- When addressing the reader (आप), verb forms are gender-neutral, so gender never affects
  how the reader is described, only how code concepts are.
- **A "more X than Y" comparison needs the ज़्यादा *after* the standard, not before it.**
  English puts the comparative first ("more work than I want to do"); Hindi states the
  standard first and closes with उससे ज़्यादा. Reordering the English word by word produces a
  sentence that says the opposite of what is meant, or nothing at all.
  - EN: "this is more work and more maths than I want to do"
  - Wrong: "यह ज़्यादा मेहनत और ज़्यादा गणित है, जितना मैं करना चाहता हूँ।" (the जितना clause
    dangles; the comparison never lands)
  - Right: "यह मैं जितना मेहनत और गणित करना चाहता हूँ उससे ज़्यादा है।"
- **A bare English "it" usually has to become its noun.** English carries a referent across
  sentences with a pronoun; Hindi leaves the reader hunting for it, especially when the
  referent was the topic of the previous sentence rather than its object. Name the thing.
  - EN: "So instead, we can tell the computer to do it for us."
  - Wrong: "हम कंप्यूटर से कह सकते हैं कि वह खुद कर ले।" (कर ले what?)
  - Right: "हम कंप्यूटर से कह सकते हैं कि वह गणित खुद कर ले।"
- **Do not carry an English plural over onto a borrowed noun.** Hindi does not mark a plural
  with an `-s`, and transliterating one (कैनापेज़ for "canapés") produces a word that is not
  Hindi. Many borrowed nouns are the same form in the singular and the plural, and the
  plurality is carried by the verb, an adjective or a quantifier instead: निर्देश is both
  "instruction" and "instructions", and कैनेपे is likewise its own plural.
  Where the glossary records a plural for a term, use it; where it does not, prefer the
  unchanged form over an invented one. This is a rule about not inventing plurals, not a
  claim that no Hindi noun ever inflects: masculine nouns in -आ do take -ए, and the oblique
  plural takes -ओं as usual.

## Sentence structure (critical)

Correct vocabulary is not enough. A long English sentence whose clauses are simply reordered
into SOV comes out grammatical, with every word right, and still reads as translated English.

**Translate the meaning, not the sentence.** Work out what the English tells the learner,
then stop looking at it and write that in Hindi. The test is whether a reader who knows both
languages could lay the two sentences side by side and match them piece for piece. If they
could, the English shape has survived, however good the Hindi words are, and the sentence
needs writing again.

Short sentences look after themselves. **Apply this to every sentence long enough to carry a
subordinate clause, an aside, or a comma.**

**No construction is a template.** There is no Hindi shape that English sentences convert
into. Every rewrite below belongs to the sentence it was written for, and reaching for the
same construction on the next sentence is the same fault as keeping the English one: it
produces a page where every sentence is built the same way, which is what readers notice
first. Decide again for each sentence.

What Hindi has available, to use where a particular sentence calls for it:

- **A whole sentence, or two.** An English sentence with an embedded clause usually becomes
  two or more Hindi sentences, and a comma joining two clauses in the English is usually the
  place to cut. Do not fold the whole English sentence into one long SOV sentence with the
  verb stranded at the end, and do not splice two clauses together with a comma.
- **The obligation construction (आपको ... करना है)** for a task the learner owes, instead of
  naming the task with a noun and attaching it with a copula.
- **A fronted correlative (जो ... , उसे ...)** for a relative clause, which is how Hindi
  builds one, instead of an English-style appositive sitting between commas.
- **The noun again, where English would use a pronoun.** English leans on "it" and "they"
  across a clause boundary; Hindi instructional prose restates the noun and reads clearer
  for it. Write "वह पात्र उन निर्देशों का पालन करता है", not "वह उनका पालन करे".
- **A verb, where English uses an abstract noun.** English says what a thing *is* with nouns
  ("the input", "the output", "the return value"); Hindi says what it *does*. Write "यह
  फंक्शन दो संख्याएँ लेता है और उनका जोड़ देता है", not "इस फंक्शन का इनपुट दो संख्याएँ हैं
  और आउटपुट उनका जोड़ है". Keep the noun only where the sentence genuinely needs one (a
  a heading, a term being named).
- **The words that make the situation concrete.** Hindi often wants a participle or a short
  phrase that the English leaves implicit. Saying the पात्र is *stuck in* the भूलभुलैया, or
  that **Run Code** is a *button*, costs two words and makes the sentence land. Adding them
  is not a liberty; translating intent is the job (`global/voice.md`).

**Then read the Hindi on its own**, not against the English. If it only makes sense with the
English sentence in mind, write it again.

**Worked example: the English noun framing goes, and the sentence rebuilds around the task.**

English: "Your job is to solve the maze on the left by giving instructions to the little
character."

- Do not write: "आपका काम है, बाईं ओर दिख रही भूलभुलैया को उस छोटे पात्र को निर्देश देकर हल
  करना।"
- One sentence that works: "आपको अपने पात्र को भूलभुलैया में से निकालकर हरे रंग के लक्ष्य
  वाले खाने तक पहुँचाना है।"

"Your job is to ..." is what pushed a noun to the front and left a comma holding two clauses
together. Saying instead what the learner has to do (आपको ... पहुँचाना है) removes the second
clause entirely, so there is nothing left to join and no connective needed. The task is also
restated as what it actually is: you get the पात्र *out*, you do not "solve" the भूलभुलैया
(see `glossary.md`).

**Worked example: one long sentence becomes two, and the second stands on its own.**

- Do not write: "आप वे सारे निर्देश लिखते हैं जिनका पात्र को पालन करना है, फिर **Run Code**
  पर क्लिक करते हैं ताकि वह उनका पालन करे।"
- One rewrite that works: "आप वे सारे निर्देश लिखते हैं जिनका पात्र को पालन करना है। फिर
  **Run Code** बटन पर क्लिक करने से वह पात्र उन निर्देशों का पालन करता है।"

The cut is exactly at the comma. "वह उनका" becomes "वह पात्र उन निर्देशों का", so the second
sentence needs nothing from the first. "बटन" is added, so the reader knows **Run Code** is a
thing to click and not a phrase to read.

**Worked example: a sentence that is wrong even though every word is right.**

- "आपका काम यह है कि 100 खड़ी पट्टियों से एक सुंदर इंद्रधनुष पैटर्न बनाइए।"

Nothing here is a vocabulary error, and it carries no comma splice. It still fails, because
it tracks "Your task is to make a beautiful rainbow pattern made up of 100 vertical bars"
word group by word group: the English's noun-plus-copula opening was kept and a connective
was bolted onto it. No replacement wording is given here on purpose. Write what the sentence
tells the learner to do, in whatever shape that sentence wants, and do not carry this
opening, or the one from the maze example above, onto the next sentence you translate.

## Style notes

- **Em dashes:** in Hindi prose the natural replacements are a **comma** for a
  mid-sentence aside, or two separate sentences.
- **Rhetorical asides** ("So what does this look like in code?") → keep them as natural
  Hindi rhetorical questions: "तो यह कोड में कैसा दिखता है?"
- **Sentence length and shape** are covered in § "Sentence structure", which is where the
  rules for any sentence longer than a simple statement live.
- **A Latin-script product name stays in Latin script**, taking Hindi postpositions as
  needed: "Exercism को", "Exercism ने", "Exercism के साथ".

## Worked examples

Concrete Hindi for the principles in `global/voice.md`. Every example below is written in
the register this guide prescribes; match it.

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid "प्रोग्रामिंग सीखने का एक क्रांतिकारी तरीका" (too dramatic) → prefer "कोडिंग सीखने
  का नया तरीका" (a new way to learn coding)

**Calls to action** (specific, action-oriented):
- Signup: "अभी शुरू कीजिए" (Start now) / "मुफ्त में आज़माइए" (Try it free), rather than the
  vague "हमसे जुड़िए" (Join us)
- Trying: "अभी कोशिश कीजिए" / "इसे खुद करके देखिए"

**Acronyms** (explain in Hindi, don't just gloss the letters):
- "API" → first use: "API, यानी दो प्रोग्राम के आपस में बात करने का तरीका", then "API"
  alone after that.

**Natural phrasing** (good vs. stiff/literal):
- "Welcome to your first exercise!" → "आपके पहले अभ्यास में आपका स्वागत है!"
- "The aim of this exercise is to get you familiar with how the learning environment
  works." → "इस अभ्यास का उद्देश्य आपको यह समझाना है कि सीखने का यह वातावरण कैसे काम करता
  है।"
- "Let's learn functions" → "चलिए फंक्शन सीखते हैं" (not the stilted "आइए हम फलनों का
  अध्ययन करें")
- "First, install Node.js" → "सबसे पहले Node.js इंस्टॉल कीजिए"
- "Try running this code" → "इस कोड को चलाकर देखिए"
- "It's a good habit to run your code often." → "अपने कोड को बार-बार चलाकर देखना अच्छी आदत
  है।"

**Common EN→HI pitfalls:**
- Don't translate clause-by-clause. "This function, which takes two numbers, returns their
  sum" belongs in two Hindi sentences, not in one long SOV clause. See § "Sentence
  structure"; it is the most common failure in Hindi output whose vocabulary is already
  correct.
- Don't drift into the Perso-Arabic lexicon in the name of sounding informal. In Hindi,
  "informal" and "Urdu-leaning" are the same direction, and going that way produces a page
  that is no longer Hindi. See § "Register".
- Don't over-correct into heavy Sanskritised prose either. If a sentence reads like a
  government notice or an exam paper, it is also wrong.
- Don't leave a technical noun in bare Latin script because it "looks technical". It is
  unreadable to the reader this translation exists for.
- Don't mix आप and तुम verb endings within the same document.

## Interpolated values

- **An interpolated value takes no case ending and no fixed article.** A UI string or an
  analyzer comment is handed a word the translator cannot see (`%{track_title}`,
  `{{handle}}`, `%{name}`), and the ending, article or agreement it would need depends on
  that word.
  - **Never attach a case ending to the placeholder**: it will be wrong for half the values.
    Rephrase so that a Hindi noun beside it carries the ending: not "in `%{track_title}`",
    but "in the `%{track_title}` track", with the ending on the word for "track".
  - **Never let an article or an adjective agree with the placeholder** either. Put both on
    that same carrier noun.
  - After a numeral, use the form Hindi normally uses with a counted noun, whatever the
    number turns out to be.
- **The exact forms this produces still want a native speaker's eye**, since no Hindi
  speaker has reviewed a real interpolated string here yet.
