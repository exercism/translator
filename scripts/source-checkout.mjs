#!/usr/bin/env node
//
// source-checkout: fetch one source repo into .source/, to read English from.
//
// Usage:
//   node scripts/source-checkout.mjs <name> [--pr=<number>] [--full | --blobless]
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
// The clone is bare. History is kept (no --depth) because the previous version
// of an edited file is found by walking it.
//
// Locally the clone is full, blobs included, so a translation pass reads
// everything from disk and never fetches in the middle of a run. An existing
// blobless clone is converted: its filter is dropped and, when the history at
// origin/main is missing blobs, everything is fetched again, once. On GitHub Actions the clone is blobless, because each job starts
// from nothing and translates only what one PR changed: trees give each file's
// path and blob id, and scripts/translate.mjs fetches the few blobs it needs in
// one request. `--full` or `--blobless` picks one explicitly.
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
if (!name || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(name)) die("usage: source-checkout.mjs <repo-name> [--pr=<number>] [--full | --blobless]");
if (flags.pr !== undefined && !/^\d+$/.test(String(flags.pr))) die("--pr takes a PR number");
if (flags.full && flags.blobless) die("--full and --blobless cannot both be given");
const blobless = flags.blobless ? true : flags.full ? false : process.env.GITHUB_ACTIONS === "true";

const dir = path.join(ROOT, ".source", name);
const url = `https://github.com/${config().github.org}/${name}.git`;

function git(args, cwd) {
  const result = spawnSync("git", args, { cwd, stdio: ["ignore", "inherit", "inherit"] });
  if (result.status !== 0) die(`git ${args.slice(0, 2).join(" ")} failed`);
}

const read = (args, cwd) => spawnSync("git", args, { cwd, encoding: "utf8" }).stdout.trim();

if (!fs.existsSync(dir)) {
  fs.mkdirSync(path.dirname(dir), { recursive: true });
  git(["clone", "--bare", ...(blobless ? ["--filter=blob:none"] : []), url, dir]);
  // A bare clone maps heads to refs/heads/*; give it origin/* too, so the i18n
  // repo's defaultRef() finds `origin/main` exactly as it does in a working copy.
  git(["config", "remote.origin.fetch", "+refs/heads/*:refs/remotes/origin/*"], dir);
}

// A clone that was ever blobless stays a partial clone, so an object that is
// somehow missing can still be fetched on demand, and git records the filter
// again whenever it does. Locally the filter is dropped before every fetch.
if (!blobless && read(["config", "--get", "remote.origin.partialclonefilter"], dir) !== "") git(["config", "--unset", "remote.origin.partialclonefilter"], dir);
const filter = blobless ? [] : ["--no-filter"];
git(["fetch", "--no-tags", "--prune", ...filter, "origin"], dir);
if (flags.pr !== undefined) git(["fetch", "--no-tags", ...filter, "origin", `+refs/pull/${flags.pr}/head:refs/remotes/origin/pr/${flags.pr}`], dir);

// A full clone must hold every object of the history English is read from.
// An ordinary fetch does not bring back blobs for commits the clone already
// has, so a clone made blobless is filled by fetching everything again, once.
const ref = read(["rev-parse", "--verify", "--quiet", "origin/main"], dir) ? "origin/main" : "HEAD";
const missing = () => read(["rev-list", "--objects", "--missing=print", ref], dir).split("\n").filter((line) => line.startsWith("?")).length;
let refetched = false;
if (!blobless && missing() > 0) {
  git(["fetch", "--no-tags", "--refetch", "--no-filter", "origin"], dir);
  refetched = true;
  const still = missing();
  if (still > 0) die(`${still} object(s) of ${ref} are still missing from ${path.relative(ROOT, dir)}. Delete it and run this again.`);
}

console.log(`${config().github.org}/${name} -> ${path.relative(ROOT, dir)} (${blobless ? "blobless" : "full"}${refetched ? ", blobs fetched" : ""})${flags.pr !== undefined ? ` (PR ${flags.pr} at origin/pr/${flags.pr})` : ""}`);
