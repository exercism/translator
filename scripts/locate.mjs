#!/usr/bin/env node
//
// locate: from "track, exercise, file, locale" to the blob-keyed file, and back
// again to check it after a hand edit.
//
// Usage:
//   node scripts/locate.mjs <source> [<track>] <locale> <exercise-or-concept> <file> [--check]
//   node scripts/locate.mjs <source> [<track>] <locale> <repo-relative-path>      [--check]
//   node scripts/locate.mjs <source> [<track>] <locale> --key=<unit id>           [--check]
//
//   <file>  instructions | introduction | hints | instructions.append |
//           introduction.append | about (a concept) | a docs file name such as TESTS
//
// Examples:
//   node scripts/locate.mjs track ruby hu bob instructions
//   node scripts/locate.mjs track ruby hu basics about --check
//   node scripts/locate.mjs docs hu using/faqs.md
//   node scripts/locate.mjs website hu --key=tracks.show.title --check
//
// A translated file's path says nothing about where its English came from, on
// purpose: it is the git blob id of that English. So a reviewer's "the Ruby Bob
// instructions say X in Hungarian" cannot be turned into a file by looking. This
// resolves it, through the same registry and the same ref scripts/translate.mjs
// reads, and prints where the translation is.
//
// ## A fix OVERWRITES the blob-keyed file, and that is allowed
//
// "Nothing under locales/ is ever deleted" does not mean a file is immutable. A
// blob id pins which ENGLISH a file translates, forever; it does not pin the
// translation's wording. Correcting a translation in place is an update, which
// the i18n repo's no-deletions check permits and which its S3 layout expects (a
// content object sits at a stable path precisely so that it can be corrected).
//
// One blob id serves every track whose English is byte-identical, so a fix to
// two-fer's instructions is a fix for every track that carries them. That is
// almost always what the reviewer wants. `shared-by` below says when it applies
// within this repo; across repos it cannot be known from here, so treat any
// practice exercise's instructions as shared.
//
// --check puts the file on disk through the same checks a pass would: the i18n
// repo's checkContentFile against the English blob, then scripts/lib/checks.mjs.
// For a catalog key it runs the i18n repo's validate.mjs for that catalog. It
// never writes, and it never stamps: a hand edit to a catalog unit leaves its
// English, and therefore its stamp, exactly as they were.
//
// Exit codes: 0 found (and, with --check, clean), 1 not found or the check failed,
// 2 found but not translated yet (nothing to fix: run the translate command).

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT, die, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { SOURCES } from "./lib/routes.mjs";
import { checkMarkdown } from "./lib/checks.mjs";

const { flags, positional } = parseArgs(process.argv.slice(2));
const sourceId = positional[0];
if (!SOURCES[sourceId]) die(`usage: locate.mjs <${Object.keys(SOURCES).join("|")}> [<track>] <locale> <item> [<file>] [--check]`);
const named = SOURCES[sourceId].named;
const name = named ? positional[1] : sourceId;
const [locale, item, fileName] = positional.slice(named ? 2 : 1);
if (!locale || (!item && typeof flags.key !== "string")) die("usage: locate.mjs <source> [<track>] <locale> <item> [<file>] [--check]");

const lib = await i18n();
const kindId = SOURCES[sourceId].kind;
const candidates = [typeof flags.repo === "string" ? flags.repo : null, path.join(ROOT, ".source", name), path.resolve(ROOT, "..", name)].filter(Boolean);
const repo = candidates.map((dir) => path.resolve(dir)).find((dir) => fs.existsSync(path.join(dir, ".git")) || fs.existsSync(path.join(dir, "HEAD")));
if (!repo) die(`no checkout of exercism/${name}. Fetch one: node scripts/source-checkout.mjs ${name}`);
const ref = typeof flags.ref === "string" ? flags.ref : lib.sourceRepos.defaultRef(repo);
const relative = (file) => path.relative(lib.dir, file);

// ------------------------------------------------------------ a catalog key --
if (typeof flags.key === "string") {
  const key = flags.key;
  let file;
  let validate;
  if (sourceId === "website") {
    const kind = key.includes(":") ? "frontend" : "backend";
    file = lib.catalogs.catalogPath(locale, kind);
    validate = [`--type=website-${kind}`, `--source-repo=${repo}`, `--source-ref=${ref}`];
  } else {
    file = lib.metadata.metadataPath(locale, name);
    validate = ["--type=metadata", `--content-repos=${repo}:${kindId}@${ref}`];
  }
  const flat = fs.existsSync(file) ? lib.catalogs.flattenCatalog(sourceId === "website" ? (key.includes(":") ? "frontend" : "backend") : "metadata", JSON.parse(fs.readFileSync(file, "utf8"))) : {};
  const present = Object.keys(flat).filter((one) => one === key || one.startsWith(`${key.replace(/[.*_]+$/, "")}`)).filter((one) => one === key || /[._](zero|one|two|few|many|other)$/.test(one));
  console.log(`catalog:     ${relative(file)}`);
  console.log(`key:         ${key}${present.length === 0 ? "   (NOT TRANSLATED YET)" : present.length > 1 ? `   (plural group: ${present.join(", ")})` : ""}`);
  if (present.length === 0) process.exit(2);
  if (flags.check) {
    const result = spawnSync("node", [path.join(lib.dir, "scripts", "validate.mjs"), locale, ...validate], { encoding: "utf8" });
    const lines = result.stdout.split("\n").filter((line) => /^\s+ERROR /.test(line));
    console.log(lines.length === 0 ? "check:       clean (no ERROR in this catalog)" : `check:       ${lines.length} ERROR line(s) in this catalog:\n${lines.join("\n")}`);
    process.exit(lines.length === 0 ? 0 : 1);
  }
  process.exit(0);
}

// ------------------------------------------------------------ a whole file --
const entries = lib.completeness.translatableFiles(kindId, lib.git.lsTree(repo, ref, lib.sourceRepos.REPO_KINDS[kindId].sparse ?? []));
let matches;
if (item.includes("/")) {
  matches = entries.filter((entry) => entry.path === item);
} else if (fileName) {
  const wanted = [
    new RegExp(`^exercises/(?:practice|concept)/${item}/\\.docs/${fileName.replace(/\./g, "\\.")}\\.md$`),
    new RegExp(`^concepts/${item}/${fileName}\\.md$`)
  ];
  matches = entries.filter((entry) => wanted.some((pattern) => pattern.test(entry.path)));
} else {
  matches = entries.filter((entry) => path.basename(entry.path, ".md").toLowerCase() === item.toLowerCase());
}
if (matches.length === 0) die(`nothing translatable matches "${[item, fileName].filter(Boolean).join(" ")}" in exercism/${name} at ${ref}. It is a path, or an exercise/concept slug and a file name.`);
if (matches.length > 1) die(`that is ambiguous:\n${matches.map((entry) => `  ${entry.path}`).join("\n")}\nGive the full path.`);

const [entry] = matches;
const target = lib.contentTypes.contentPath(locale, entry.id, entry.extension);
const sharedBy = entries.filter((other) => other.id === entry.id && other.path !== entry.path).map((other) => other.path);
console.log(`english:     exercism/${name}:${entry.path} @ ${ref}`);
console.log(`type:        ${entry.type}`);
console.log(`blob id:     ${entry.id}`);
console.log(`translation: ${relative(target)}${fs.existsSync(target) ? "" : "   (NOT TRANSLATED YET)"}`);
console.log(`absolute:    ${target}`);
if (sharedBy.length > 0) console.log(`shared-by:   ${sharedBy.join(", ")}`);
if (!fs.existsSync(target)) process.exit(2);

if (flags.check) {
  const english = lib.git.readBlobs(repo, [entry.id]).get(entry.id);
  if (!english) die("the English blob could not be read from the checkout");
  const bytes = fs.readFileSync(target);
  const found = lib.checks.checkContentFile({ id: entry.id, extension: entry.extension, bytes }, english);
  const errors = found.filter((one) => one.level === lib.checks.ERROR).map((one) => one.message).concat(checkMarkdown(english.toString("utf8"), bytes.toString("utf8")));
  for (const warning of found.filter((one) => one.level === lib.checks.WARN)) console.log(`check:       WARN ${warning.message}`);
  console.log(errors.length === 0 ? "check:       clean" : `check:       ${errors.length} problem(s):\n${errors.map((error) => `  ERROR ${error}`).join("\n")}`);
  process.exit(errors.length === 0 ? 0 : 1);
}
