#!/usr/bin/env node
//
// check-routes: does every content type have a how-to, a command, and something
// that writes the words?
//
// Usage:
//   node scripts/check-routes.mjs
//
// Exit codes: 0 every type is routed (or a declared gap), 1 otherwise.
//
// A type with no route produces no error, no failed run and no missing file,
// only a count that never moves. Nothing runs this automatically (this repo has
// no CI), so it is a step of a pass: run it whenever the i18n registry, a how-to
// or a command changes. The routes are declared in scripts/lib/routes.mjs.
//
// It ASKS rather than trusting the declaration. The type ids come from the i18n
// checkout's registry, not from a list here; "can the script run this type?" is
// asked of scripts/translate.mjs itself (`--list-types`); and the how-to a type
// is routed to must exist on disk. What is checked, per type:
//
//   1. it is in ROUTES or GAPS, and not both
//   2. content-types/<howto>.md exists
//   3. its source has a command, .claude/commands/<command>.md exists, and that
//      command names scripts/translate.mjs and its own source
//   4. scripts/translate.mjs --list-types includes it
//   5. (whole files only) a path of that type really derives to it through the
//      registry's typeForPath, within the kind of repo its source reads
//
// And the other way round: nothing in ROUTES or GAPS that the registry has never
// heard of, no how-to on disk that no type reaches, and every governance command
// the repo documents exists.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { GAPS, ROUTES, SOURCES } from "./lib/routes.mjs";

const GOVERNANCE_COMMANDS = ["work-issue", "fix-translation", "action-forum-post", "update-guide-and-glossary", "announce-glossary-change", "bootstrap-language", "translation-status"];

const lib = await i18n();
const problems = [];
const rows = [];

const registry = [...lib.contentTypes.CATALOG_TYPE_IDS, ...lib.contentTypes.CONTENT_TYPE_IDS];
const listed = spawnSync("node", [path.join(ROOT, "scripts", "translate.mjs"), "--list-types"], { encoding: "utf8" }).stdout.split("\n").filter(Boolean);
const exists = (relative) => fs.existsSync(path.join(ROOT, relative));
const usedHowtos = new Set();

for (const id of registry) {
  const route = ROUTES[id];
  if (route && GAPS[id]) problems.push(`${id}: both routed and declared a gap`);
  if (!route) {
    if (GAPS[id]) rows.push([id, "GAP", GAPS[id]]);
    else problems.push(`${id}: in the i18n registry with NO route and no declared gap. It will silently never be translated.`);
    if (GAPS[id] && listed.includes(id)) problems.push(`${id}: declared a gap, but scripts/translate.mjs says it can run it`);
    continue;
  }

  const source = SOURCES[route.source];
  if (!source) {
    problems.push(`${id}: routed to unknown source "${route.source}"`);
    continue;
  }
  usedHowtos.add(route.howto);
  if (!exists(`content-types/${route.howto}.md`)) problems.push(`${id}: how-to content-types/${route.howto}.md does not exist`);

  const commandFile = `.claude/commands/${source.command}.md`;
  if (!exists(commandFile)) problems.push(`${id}: command ${commandFile} does not exist`);
  else {
    const text = fs.readFileSync(path.join(ROOT, commandFile), "utf8");
    if (!text.includes(`scripts/translate.mjs ${route.source}`)) problems.push(`${id}: ${commandFile} never runs \`scripts/translate.mjs ${route.source}\``);
  }

  if (!listed.includes(id)) problems.push(`${id}: scripts/translate.mjs --list-types does not include it`);

  const entry = lib.contentTypes.CONTENT_TYPES[id];
  if (entry) {
    if (entry.kind !== source.kind) problems.push(`${id}: the registry says it lives in a "${entry.kind}" repo, but it is routed to the "${route.source}" source`);
    if (entry.unit === "metadata" && !route.metadata) problems.push(`${id}: a metadata type, routed as if it were a whole file`);
    if (entry.unit === "file" && route.metadata) problems.push(`${id}: a whole-file type, routed as metadata`);
  }
  rows.push([id, `/${source.command}`, `content-types/${route.howto}.md`]);
}

for (const id of [...Object.keys(ROUTES), ...Object.keys(GAPS)]) {
  if (!registry.includes(id)) problems.push(`${id}: routed here, but the i18n registry has no such type (renamed or removed there?)`);
}
for (const file of fs.readdirSync(path.join(ROOT, "content-types"))) {
  if (file.endsWith(".md") && !usedHowtos.has(file.slice(0, -3))) problems.push(`content-types/${file}: no type is routed to this how-to`);
}
for (const command of [...new Set(Object.values(SOURCES).map((source) => source.command)), ...GOVERNANCE_COMMANDS]) {
  if (!exists(`.claude/commands/${command}.md`)) problems.push(`.claude/commands/${command}.md does not exist`);
}
for (const source of Object.values(SOURCES)) {
  if (!lib.sourceRepos.REPO_KINDS[source.kind]) problems.push(`source kind "${source.kind}" is not one of the i18n repo's REPO_KINDS`);
}

const width = Math.max(...rows.map((row) => row[0].length));
for (const [id, command, howto] of rows) console.log(`${id.padEnd(width)}  ${command.padEnd(34)} ${howto}`);
console.log(`\n${registry.length} type(s) in the i18n registry at ${lib.dir}: ${rows.filter((row) => row[1] !== "GAP").length} routed, ${rows.filter((row) => row[1] === "GAP").length} declared gap(s).`);
if (problems.length > 0) {
  for (const problem of problems) console.log(`ERROR ${problem}`);
  process.exit(1);
}
console.log("Every type has a how-to, a command that reaches it, and a script that runs it.");
