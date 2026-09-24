// checks.mjs: the few mechanical checks this repo adds to the i18n checker's.
//
// The main checker is exercism/i18n's scripts/lib/checks.mjs, and
// scripts/translate.mjs runs a candidate through it first. The checks here cover
// Exercism-specific Markdown rules that the i18n checker cannot apply, because
// it files content by blob id and does not know what kind of document a blob
// is. The website relies on each of these to render the page, so each one
// rejects the answer instead of warning:
//
//   - a fenced code block is reproduced byte for byte (global/rules.md). The
//     exception is an `exercism/note`, `exercism/caution` or `exercism/advanced`
//     fence, which is an admonition containing prose, and is translated. A
//     code block inside an admonition is code again.
//   - where the English starts `## 1. ...` headings with numbers, the
//     translation has the same numbers in the same order. The website matches a
//     concept exercise's hints to its tasks by that number
//     (content-types/hints.md). Headings are not compared when the English has
//     no numbers, because languages like Hungarian put the ordinal first, so
//     `## Rule 1` becomes `## 1. szabály`.
//   - every reference-style link still resolves: `[text][label]` needs a
//     `[label]: url` definition, and no definition's URL may change.
//   - no inline code span English has is lost.
//   - `%{...}` tokens are the same set, including dotted names. The i18n checker
//     matches `%{\w+}`, which is what the website interpolates, but real analyzer
//     comments also contain `%{method.name}` and `%{export.name}`, and translating
//     the name inside those is just as wrong.
//   - the answer is not the English handed back.
//
// Pure functions of two strings, so scripts/test.mjs can assert every one.

// A fence opens at any indentation, so a code block inside a list item counts,
// which is also how the i18n checker counts fence lines. A backtick fence's
// info string cannot contain a backtick: a line like ```` ```ls``` ```` is an
// inline code span, not a fence (CommonMark 4.5).
const FENCE = /^(\s*)(`{3,}|~{3,})(.*)$/;

const fenceLine = (line) => {
  const match = FENCE.exec(line.replace(/\r$/, ""));
  if (!match || (match[2][0] === "`" && match[3].includes("`"))) return null;
  return { marker: match[2], info: match[3].trim() };
};

/**
 * Top-level fenced blocks, in order, as `{ info, body, start, end, opener, closer, admonition }`.
 *
 * `body` is `text.slice(start, end)` and includes both fence lines. `opener` and
 * `closer` are those two lines (`closer` is null for a block left open at the
 * end of the text). `offset` is added to every position, for a block parsed out
 * of a larger text.
 */
export function fencedBlocks(text, offset = 0) {
  const blocks = [];
  let open = null;
  let at = 0;
  const finish = (end, closer) => {
    blocks.push({ ...open, body: text.slice(open.start, end), start: open.start + offset, end: end + offset, closer });
    open = null;
  };
  for (const line of text.split("\n")) {
    const fence = fenceLine(line);
    const lineEnd = at + line.length;
    if (open === null) {
      if (fence) open = { info: fence.info, marker: fence.marker, opener: line, start: at, admonition: fence.info.startsWith("exercism/") };
    } else if (fence && fence.marker[0] === open.marker[0] && fence.marker.length >= open.marker.length && fence.info === "") {
      finish(lineEnd, line);
    }
    at = lineEnd + 1;
  }
  if (open !== null) finish(text.length, null);
  return blocks.map(({ marker, ...block }) => block);
}

/**
 * Every fenced block that the rules govern, in document order: the top-level
 * ones, and inside an `exercism/` admonition (which is prose, and translated)
 * the blocks it contains, to any depth.
 */
export function codeBlocks(text) {
  const out = [];
  const walk = (body, offset) => {
    for (const block of fencedBlocks(body, offset)) {
      out.push(block);
      if (!block.admonition) continue;
      const innerStart = block.opener.length + 1;
      const innerEnd = block.closer === null ? block.body.length : block.body.length - block.closer.length - 1;
      if (innerEnd > innerStart) walk(block.body.slice(innerStart, innerEnd), block.start + innerStart);
    }
  };
  walk(text, 0);
  return out;
}

/**
 * The text with every fenced code block blanked out: each character becomes a
 * space and each newline stays, so every position still means the same place in
 * the original. Admonitions are kept, because they are prose.
 */
export function withoutCode(text) {
  let out = "";
  let from = 0;
  for (const block of codeBlocks(text).filter((one) => !one.admonition)) {
    out += text.slice(from, block.start) + text.slice(block.start, block.end).replace(/[^\n]/g, " ");
    from = block.end;
  }
  return out + text.slice(from);
}

/**
 * Inline code spans outside fenced code, in order, as `{ start, end, raw, content }`.
 *
 * `raw` is the span with its backticks. A span may run on to the next line of
 * its paragraph, but not over a blank line or into a list item, heading,
 * quote or table row. `content` has each line break as a space, as the page
 * renders it, so reflowing a span's line does not change it.
 *
 * A backslash-escaped backtick is a literal backtick and opens nothing, so this
 * walks the text left to right and steps over each escape. One pass of a
 * pattern cannot do that. Prose that mentions backticks (`` When using
 * backticks (\`) ... ``) otherwise reads as a span covering the sentence
 * between two of them, and the checker then demands that the translation
 * reproduce that sentence in English. The walk stops honouring escapes inside a
 * span, where CommonMark gives a backslash no meaning, so `` `a\` `` is a span
 * whose content ends in a backslash.
 */
export function codeSpans(text) {
  // Sticky, so it asks only whether a span opens at the position the walk has
  // reached. It needs no lookbehind for a backtick, because the walk only ever
  // stops at the start of a whole run. It must not have one either: a run may
  // sit directly after an escaped backtick (``\``x`\```), and a lookbehind
  // cannot tell that one from a delimiter.
  const pattern = /(`+)(?!`)((?:(?!\r?\n[ \t]*(?:\r?\n|[-*+][ \t]|\d{1,9}[.)][ \t]|#{1,6}[ \t]|>|\|))[\s\S])*?[^`\r\n])\1(?!`)/y;
  // Only a backslash or a backtick can start anything, so the walk jumps from
  // one to the next and skips the text in between.
  const interesting = /[\\`]/g;
  const source = withoutCode(text);
  const spans = [];
  let at = 0;
  while (at < source.length) {
    interesting.lastIndex = at;
    const found = interesting.exec(source);
    if (found === null) break;
    at = found.index;
    // The escaped character cannot be a delimiter, whatever it is, so two
    // characters are always safe to step over.
    if (source[at] === "\\") {
      at += 2;
      continue;
    }
    let run = 1;
    while (source[at + run] === "`") run += 1;
    pattern.lastIndex = at;
    const match = pattern.exec(source);
    // A run that opens nothing is literal text, so the walk resumes after it
    // and a later backtick may still open a span.
    if (match === null) {
      at += run;
      continue;
    }
    const end = match.index + match[0].length;
    spans.push({
      start: match.index,
      end,
      raw: text.slice(match.index, end),
      content: match[2].replace(/[ \t]*\r?\n[ \t]*/g, " ")
    });
    at = end;
  }
  return spans;
}

const taskNumbers = (text) => [...withoutCode(text).matchAll(/^##\s+(\d+)\./gm)].map((match) => match[1]);

const inlineCode = (text) => codeSpans(text).map((span) => span.content).sort();

const definitions = (text) =>
  [...withoutCode(text).matchAll(/^ {0,3}\[([^\]\n]+)\]:\s*(\S+)/gm)]
    .filter((match) => !match[1].startsWith("^"))
    .map((match) => ({ label: match[1].trim().toLowerCase(), url: match[2] }));
// Footnotes (`[^1]: text`) look like link definitions, but their text is prose
// and is translated. Only their labels have to survive.
const footnotes = (text) => [...withoutCode(text).matchAll(/^ {0,3}\[(\^[^\]\n]+)\]:/gm)].map((match) => match[1]);

const referenceUses = (text) =>
  [...withoutCode(text).replace(/`[^`\n]*`/g, "").matchAll(/\[[^\]\n]+\]\[([^\]\n]*)\]/g)].map((match) => match[1].trim().toLowerCase()).filter(Boolean);

export const wordCount = (text) => (withoutCode(text).match(/\p{L}[\p{L}\p{N}'’-]*/gu) ?? []).length;

// Words that carry no meaning on their own. A handful of them together makes a
// piece of text an English sentence, and not a name, a signature or a line of
// output.
const FUNCTION_WORDS = new Set([
  "a", "about", "after", "all", "also", "an", "and", "any", "are", "as", "at", "be", "been", "before", "between", "but", "by", "can", "do", "does", "each", "for", "from", "had", "has", "have", "how", "if", "in", "into", "is", "it", "its", "just", "more", "most", "no", "not", "of", "on", "only", "or", "other", "out", "over", "should", "so", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "those", "to", "up", "was", "we", "were", "what", "when", "where", "which", "who", "why", "will", "with", "would", "you", "your"
]);

/**
 * Warnings about the English itself, as strings. Empty means none.
 *
 * A span of code in English that reads as a sentence is usually a pair of
 * backticks that has swallowed the prose between them, from an apostrophe
 * (``the type of `a' is `String` ``) or from two spans of the same name on one
 * line. The page shows the sentence in a code font, and a pass then has to
 * reproduce it in English, because code is copied byte for byte. Fixing it
 * means editing the source repo, which a pass cannot do, so this is a warning
 * for a person to act on and never a reason to reject a translation.
 *
 * @param {string} english
 */
export function englishWarnings(english) {
  const clean = (word) => word.replace(/[.,;:!?]+$/, "");
  return codeSpans(english)
    .filter((span) => {
      // A span that neither opens nor closes on whitespace has boundaries an
      // author chose. One that does has swallowed the space around a word.
      if (!/^\s|\s$/.test(span.content)) return false;
      const words = span.content.trim().split(/\s+/).map(clean).filter((word) => /^[A-Za-z][A-Za-z'’]*$/.test(word));
      return words.length >= 4 && words.filter((word) => FUNCTION_WORDS.has(word.toLowerCase())).length >= 2;
    })
    .map((span) => `the English reads as prose inside backticks, so the page shows it as code: \`${span.content}\``);
}

/**
 * Problems with one translated Markdown file, as strings. Empty means none.
 *
 * @param {string} english
 * @param {string} translated
 */
export function checkMarkdown(english, translated) {
  const problems = [];

  if (translated.trim() === english.trim() && wordCount(english) > 20) {
    return ["the answer is the English text unchanged"];
  }

  const [enBlocks, targetBlocks] = [codeBlocks(english), codeBlocks(translated)];
  if (enBlocks.length !== targetBlocks.length) {
    problems.push(`fenced blocks: English has ${enBlocks.length}, translation has ${targetBlocks.length}`);
  } else {
    enBlocks.forEach((block, index) => {
      const other = targetBlocks[index];
      if (block.info !== other.info) problems.push(`fenced block ${index + 1}: info string changed ("${block.info}" to "${other.info}")`);
      else if (!block.admonition && block.body !== other.body) problems.push(`fenced block ${index + 1} (${block.info || "no language"}): code was altered; code is reproduced byte for byte`);
    });
  }

  const [enTasks, targetTasks] = [taskNumbers(english), taskNumbers(translated)];
  if (enTasks.length > 0 && enTasks.join(",") !== targetTasks.join(",")) problems.push(`numbered "## N." headings differ: English ${enTasks.join(",")}, translation ${targetTasks.join(",") || "none"}`);

  const [enCode, targetCode] = [inlineCode(english), inlineCode(translated)];
  const lostCode = enCode.filter((span) => !targetCode.includes(span));
  if (lostCode.length > 0) problems.push(`inline code in English and not in the translation: ${[...new Set(lostCode)].slice(0, 5).map((span) => `\`${span}\``).join(", ")}`);

  const tokens = (text) => [...new Set(text.match(/%\{[^}\s]+\}/g) ?? [])];
  const [enTokens, targetTokens] = [tokens(english), tokens(translated)];
  const changedTokens = enTokens.filter((token) => !targetTokens.includes(token)).concat(targetTokens.filter((token) => !enTokens.includes(token)));
  if (changedTokens.length > 0) problems.push(`\`%{...}\` tokens differ from English: ${changedTokens.join(" ")}`);

  const [enDefs, targetDefs] = [definitions(english), definitions(translated)];
  const targetUrls = new Set(targetDefs.map((def) => def.url));
  const lostUrls = enDefs.filter((def) => !targetUrls.has(def.url));
  if (lostUrls.length > 0) problems.push(`link definition(s) lost or changed: ${lostUrls.slice(0, 3).map((def) => `[${def.label}]: ${def.url}`).join(", ")}`);
  const targetNotes = new Set(footnotes(translated));
  const lostNotes = footnotes(english).filter((label) => !targetNotes.has(label));
  if (lostNotes.length > 0) problems.push(`footnote(s) lost: ${lostNotes.slice(0, 5).map((label) => `[${label}]`).join(", ")}`);
  const defined = new Set(targetDefs.map((def) => def.label));
  // Only checked when the English's own references all resolve. Some real files
  // have a dangling reference, and the translation is not expected to fix it.
  const enDefined = new Set(enDefs.map((def) => def.label));
  if (referenceUses(english).every((label) => enDefined.has(label))) {
    const dangling = referenceUses(translated).filter((label) => !defined.has(label));
    if (dangling.length > 0) problems.push(`reference link(s) with no definition: ${[...new Set(dangling)].slice(0, 5).join(", ")} (a link LABEL is not translated)`);
  }

  return problems;
}
