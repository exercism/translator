// carry-over: apply an edit to the English of a file to its previous translation
// without calling the model, when the edit only touches lines the translation
// keeps word for word.
//
// The case this exists for is exercism/docs building/tracks/icons.md: a table of
// several hundred exercise slugs and <img> tags, kept verbatim in every locale.
// Each new exercise adds one row, and without this every locale would pay for the
// whole page again and the issue would wait above the word cap.
//
// The rules are deliberately narrow, and when any of them fails we return null
// and the file goes to the model as usual:
//
// - The previous translation has exactly as many lines as the previous English,
//   so line i of one is line i of the other.
// - A line removed from the English must have been kept verbatim in the
//   translation.
// - A line whose only change is whitespace keeps the translation's line, or
//   takes the new English line if the translation had kept it verbatim.
// - A line added to the English must be blank, a table's separator row
//   (`| --- | :-: |`), or a table row that contains a URL, an HTML tag or
//   inline code and has the same shape as at least three rows of the previous
//   English, every one of which the translation kept verbatim. A table whose
//   rows were translated never matches, and neither does a row of plain words.
//
// The result still goes through the checker before it is written.

const MIN_VERBATIM_ROWS = 3;
// Lines left once the common head and tail are trimmed. The diff below is
// quadratic in this, and an edit this large is not a row being added.
const MAX_CHANGED_REGION = 4000;

const collapse = (line) => line.replace(/\s+/g, " ").trim();

// Every run of word characters, digits, underscores and hyphens becomes one
// token, so "accumulate" and "affine-cipher" give the same shape.
const shape = (line) => collapse(line.replace(/[A-Za-z0-9_-]+/g, "w"));

const isTableRow = (line) => /^\s*\|.*\|\s*$/.test(line);
const hasMarkup = (line) => /https?:\/\/|<[A-Za-z][^>]*>|`[^`]+`/.test(line);
const isSeparatorRow = (line) => isTableRow(line) && /^[\s|:-]+$/.test(line) && line.includes("-");

/**
 * The new translation, or null if this edit has to go to the model.
 *
 * Pure. `oldEnglish` and `oldTranslation` are the previous version and its
 * translation; `newEnglish` is the English to translate now.
 */
export function carryOver({ oldEnglish, newEnglish, oldTranslation }) {
  const before = oldEnglish.split("\n");
  const after = newEnglish.split("\n");
  const held = oldTranslation.split("\n");
  if (before.length !== held.length) return null;

  const verbatim = before.map((line, i) => held[i] === line);

  const safeShapes = new Map();
  for (let i = 0; i < before.length; i++) {
    if (!isTableRow(before[i])) continue;
    const key = shape(before[i]);
    const seen = safeShapes.get(key) ?? { verbatim: 0, translated: 0 };
    if (verbatim[i]) seen.verbatim += 1;
    else seen.translated += 1;
    safeShapes.set(key, seen);
  }
  const safeToAdd = (line) => {
    if (line.trim() === "" || isSeparatorRow(line)) return true;
    if (!isTableRow(line) || !hasMarkup(line)) return false;
    const seen = safeShapes.get(shape(line));
    return Boolean(seen) && seen.translated === 0 && seen.verbatim >= MIN_VERBATIM_ROWS;
  };

  const ops = diff(before.map(collapse), after.map(collapse));
  if (!ops) return null;

  const out = [];
  for (const op of ops) {
    if (op.kind === "same") out.push(verbatim[op.from] ? after[op.to] : held[op.from]);
    else if (op.kind === "removed") {
      if (!verbatim[op.from]) return null;
    } else {
      if (!safeToAdd(after[op.to])) return null;
      out.push(after[op.to]);
    }
  }
  return out.join("\n");
}

/**
 * A line diff of two arrays: a list of { kind: "same" | "removed" | "added",
 * from, to }, or null if the changed region is too large to diff.
 */
function diff(a, b) {
  let head = 0;
  while (head < a.length && head < b.length && a[head] === b[head]) head++;
  let tail = 0;
  while (tail < a.length - head && tail < b.length - head && a[a.length - 1 - tail] === b[b.length - 1 - tail]) tail++;

  const midA = a.slice(head, a.length - tail);
  const midB = b.slice(head, b.length - tail);
  if (midA.length > MAX_CHANGED_REGION || midB.length > MAX_CHANGED_REGION) return null;

  // Longest common subsequence, filled from the end so the walk below goes forwards.
  const n = midA.length;
  const m = midB.length;
  const lcs = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      lcs[i][j] = midA[i] === midB[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }

  const ops = [];
  for (let k = 0; k < head; k++) ops.push({ kind: "same", from: k, to: k });
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && midA[i] === midB[j]) {
      ops.push({ kind: "same", from: head + i, to: head + j });
      i++;
      j++;
    } else if (j < m && (i === n || lcs[i][j + 1] >= lcs[i + 1][j])) {
      ops.push({ kind: "added", to: head + j });
      j++;
    } else {
      ops.push({ kind: "removed", from: head + i });
      i++;
    }
  }
  for (let k = 0; k < tail; k++) ops.push({ kind: "same", from: a.length - tail + k, to: b.length - tail + k });
  return ops;
}
