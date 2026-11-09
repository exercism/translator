// paragraphs.mjs: revise an existing translation one paragraph at a time.
//
// A paragraph is a run of non-blank lines, or one fenced code block. When the
// previous English, the new English and the current translation have the same
// number of paragraphs, the Nth paragraph of each says the same thing, so only
// the paragraphs whose English changed need the model:
//
//   - a code block is copied from the new English, since code is never
//     translated;
//   - a prose paragraph whose English changed only in whitespace is kept;
//   - every other changed prose paragraph is sent, as its old English, its new
//     English and its current translation, and the model answers with its new
//     translation, or null where the translation already says the right thing.
//
// Everything else in the translation is kept byte for byte. When the counts
// differ, `plan` returns null and the caller uses another path.

import { splitLines } from "./patch.mjs";

/**
 * The paragraphs of a text, as `{ from, to, code }` line ranges (to is exclusive).
 *
 * An `exercism/` admonition (~~~~exercism/note) is fenced but holds prose, which
 * is translated, so its fence lines are ordinary lines of the paragraphs around
 * them. A code block inside it is still code.
 */
export function paragraphs(lines) {
  const out = [];
  let start = null;
  let fence = null;
  const admonitions = [];
  lines.forEach((line, index) => {
    const marker = /^\s*(`{3,}|~{3,})(.*)$/.exec(line);
    if (fence !== null) {
      if (marker && marker[1][0] === fence && marker[2].trim() === "") {
        out.push({ from: start, to: index + 1, code: true });
        start = null;
        fence = null;
      }
      return;
    }
    const opensAdmonition = marker && marker[2].trim().startsWith("exercism/");
    const top = admonitions.at(-1);
    const closesAdmonition = marker && top && marker[1][0] === top[0] && marker[1].length >= top.length && marker[2].trim() === "";
    if (opensAdmonition) admonitions.push(marker[1]);
    else if (closesAdmonition) admonitions.pop();
    else if (marker) {
      if (start !== null) out.push({ from: start, to: index, code: false });
      start = index;
      fence = marker[1][0];
      return;
    }
    if (line.trim() === "") {
      if (start !== null) out.push({ from: start, to: index, code: false });
      start = null;
    } else if (start === null) start = index;
  });
  if (start !== null) out.push({ from: start, to: lines.length, code: fence !== null });
  return out;
}

// Whitespace inside a line does not render, but a line break can: splitting a
// line can start a new list item. So lines are compared one by one.
const squash = (text) => text.split("\n").map((line) => line.replace(/\s+/g, "")).join("\n");

/**
 * What to send and what to copy, or null when the three texts do not line up
 * paragraph for paragraph. Pure.
 */
export function plan({ previousEnglish, english, translation }) {
  const old = splitLines(previousEnglish).lines;
  const now = splitLines(english).lines;
  const tr = splitLines(translation).lines;
  const [O, E, T] = [paragraphs(old), paragraphs(now), paragraphs(tr)];
  if (O.length !== E.length || E.length !== T.length) return null;
  const text = (lines, p) => lines.slice(p.from, p.to).join("\n");
  const copies = [];
  const send = [];
  for (let i = 0; i < E.length; i++) {
    if (E[i].code !== T[i].code || E[i].code !== O[i].code) return null;
    if (E[i].code) {
      if (text(now, E[i]) !== text(tr, T[i])) copies.push({ index: i, text: text(now, E[i]) });
    } else if (squash(text(old, O[i])) !== squash(text(now, E[i]))) {
      send.push({ index: i, oldEnglish: text(old, O[i]), english: text(now, E[i]), translation: text(tr, T[i]) });
    }
  }
  return { copies, send, ranges: T };
}

/** The translation with the given paragraphs replaced. Pure. */
export function applyParagraphs(translation, ranges, replacements) {
  const { lines, eol, final } = splitLines(translation);
  const result = [...lines];
  for (const { index, text } of [...replacements].sort((a, b) => b.index - a.index)) {
    const range = ranges[index];
    result.splice(range.from, range.to - range.from, ...text.split(/\r?\n/));
  }
  return result.join(eol) + (final ? eol : "");
}

/** The model's answer as `{ id: text | null }`, or `{ error }`. Pure. */
export function parseParagraphs(answer, ids) {
  const text = answer.trim().replace(/^```(?:json)?\s*\n/, "").replace(/\n```\s*$/, "");
  let parsed;
  try {
    parsed = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
  } catch (error) {
    return { error: `the answer is not valid JSON: ${error.message}` };
  }
  const map = parsed?.paragraphs;
  if (!map || typeof map !== "object") return { error: "the answer has no `paragraphs` object" };
  for (const id of ids) {
    if (!(id in map)) return { error: `the answer leaves out paragraph ${id}` };
    if (map[id] !== null && (typeof map[id] !== "string" || map[id].trim() === "")) return { error: `paragraph ${id} is neither text nor null` };
  }
  return { map };
}
