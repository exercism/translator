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
//     fence, which is an admonition containing prose, and is translated.
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

const FENCE = /^( {0,3})(`{3,}|~{3,})(.*)$/;

/** Fenced blocks as `{ info, body }`, in order. `body` includes both fence lines. */
export function fencedBlocks(text) {
  const blocks = [];
  let open = null;
  for (const line of text.split("\n")) {
    const match = FENCE.exec(line);
    if (open === null) {
      if (match) open = { marker: match[2], info: match[3].trim(), lines: [line] };
      continue;
    }
    open.lines.push(line);
    if (match && match[2][0] === open.marker[0] && match[2].length >= open.marker.length && match[3].trim() === "") {
      blocks.push({ info: open.info, body: open.lines.join("\n") });
      open = null;
    }
  }
  if (open !== null) blocks.push({ info: open.info, body: open.lines.join("\n") });
  return blocks;
}

const isAdmonition = (block) => block.info.startsWith("exercism/");

/** The text with every fenced code block removed. Admonitions are kept, because they are prose. */
export function withoutCode(text) {
  let out = text;
  for (const block of fencedBlocks(text)) if (!isAdmonition(block)) out = out.replace(block.body, "");
  return out;
}

const taskNumbers = (text) => [...withoutCode(text).matchAll(/^##\s+(\d+)\./gm)].map((match) => match[1]);

const inlineCode = (text) => [...withoutCode(text).matchAll(/(`+)(?!`)([^\n]*?[^`\n])\1(?!`)/g)].map((match) => match[2]).sort();

const definitions = (text) => [...withoutCode(text).matchAll(/^ {0,3}\[([^\]\n]+)\]:\s*(\S+)/gm)].map((match) => ({ label: match[1].trim().toLowerCase(), url: match[2] }));

const referenceUses = (text) =>
  [...withoutCode(text).replace(/`[^`\n]*`/g, "").matchAll(/\[[^\]\n]+\]\[([^\]\n]*)\]/g)].map((match) => match[1].trim().toLowerCase()).filter(Boolean);

export const wordCount = (text) => (withoutCode(text).match(/\p{L}[\p{L}\p{N}'’-]*/gu) ?? []).length;

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

  const [enBlocks, targetBlocks] = [fencedBlocks(english), fencedBlocks(translated)];
  if (enBlocks.length !== targetBlocks.length) {
    problems.push(`fenced blocks: English has ${enBlocks.length}, translation has ${targetBlocks.length}`);
  } else {
    enBlocks.forEach((block, index) => {
      const other = targetBlocks[index];
      if (block.info !== other.info) problems.push(`fenced block ${index + 1}: info string changed ("${block.info}" to "${other.info}")`);
      else if (!isAdmonition(block) && block.body !== other.body) problems.push(`fenced block ${index + 1} (${block.info || "no language"}): code was altered; code is reproduced byte for byte`);
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
