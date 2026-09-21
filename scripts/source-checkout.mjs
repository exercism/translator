#!/usr/bin/env node
//
// source-checkout: fetch one source repo into .source/, to read English from.
//
// Usage:
//   node scripts/source-checkout.mjs <name> [--pr=<number>] [--full]
//
// Examples:
//   node scripts/source-checkout.mjs website-copy      # exercism/website-copy, default branch
//   node scripts/source-checkout.mjs python            # a track
//   node scripts/source-checkout.mjs ruby --pr=1809    # also fetch that PR's head
//
// English is never stored in this repo. It is read from a checkout of the repo
// where it is written, as git objects and never as a working tree, the same way
// the i18n repo reads it (see its ENGLISH-SOURCE.md). .source/ is gitignored and
// can be rebuilt.
//
// The clone is bare and blobless. Trees give each file's path and blob id, which
// is all that is needed to work out what is missing, and scripts/translate.mjs
// fetches the blobs it is about to translate in one request. History is kept
// (no --depth) because the previous version of an edited file is found by
// walking it. `--full` fetches blobs too, for working offline.
//
// Apart from scripts/run-issue.mjs, which commits and pushes in the i18n
// checkout, this is the only script here that runs a git command that changes
// anything, and it only touches .source/ inside this repo. It never runs git in
// a sibling checkout, which may be shared with a live session.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT, config, die, parseArgs } from "./lib/config.mjs";

const { flags, positional } = parseArgs(process.argv.slice(2));
const name = positional[0];
if (!name || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(name)) die("usage: source-checkout.mjs <repo-name> [--pr=<number>] [--full]");
if (flags.pr !== undefined && !/^\d+$/.test(String(flags.pr))) die("--pr takes a PR number");

const dir = path.join(ROOT, ".source", name);
const url = `https://github.com/${config().github.org}/${name}.git`;

function git(args, cwd) {
  const result = spawnSync("git", args, { cwd, stdio: ["ignore", "inherit", "inherit"] });
  if (result.status !== 0) die(`git ${args.slice(0, 2).join(" ")} failed`);
}

if (!fs.existsSync(dir)) {
  fs.mkdirSync(path.dirname(dir), { recursive: true });
  git(["clone", "--bare", ...(flags.full ? [] : ["--filter=blob:none"]), url, dir]);
  // A bare clone maps heads to refs/heads/*; give it origin/* too, so the i18n
  // repo's defaultRef() finds `origin/main` exactly as it does in a working copy.
  git(["config", "remote.origin.fetch", "+refs/heads/*:refs/remotes/origin/*"], dir);
}
git(["fetch", "--no-tags", "--prune", "origin"], dir);
if (flags.pr !== undefined) git(["fetch", "--no-tags", "origin", `+refs/pull/${flags.pr}/head:refs/remotes/origin/pr/${flags.pr}`], dir);

console.log(`${config().github.org}/${name} -> ${path.relative(ROOT, dir)}${flags.pr !== undefined ? ` (PR ${flags.pr} at origin/pr/${flags.pr})` : ""}`);
