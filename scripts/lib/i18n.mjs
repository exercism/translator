// i18n.mjs: the exercism/i18n repo's own modules, loaded from its checkout.
//
// This repo holds NO copy of anything the i18n repo decides: which paths are
// translatable and what type each is (content-types.mjs), where a translation is
// filed (contentPath), what a catalog unit is and how it is stamped
// (catalogs.mjs), which names, titles and blurbs a source repo shows a user and
// what each one's key is (metadata.mjs), which plural categories a locale needs (plurals.mjs), how the
// website's English flattens (website-english.mjs), and every mechanical check
// (checks.mjs). A second copy of any of them is a second answer to the same
// question, and the two drift. So they are imported, from the checkout config.json
// names, and a pass checks its candidate with exactly the functions CI will run.
//
// The i18n scripts resolve their own tree from EXERCISM_I18N_ROOT, else from
// where they live. scripts/test.mjs here uses that to point a fixture run at a
// temp tree, exactly as the i18n repo's own tests do.

import path from "node:path";
import { pathToFileURL } from "node:url";
import { i18nRepo } from "./config.mjs";

let LOADED = null;

export async function i18n() {
  if (LOADED) return LOADED;
  const dir = i18nRepo();
  const load = (name) => import(pathToFileURL(path.join(dir, "scripts", "lib", name)).href);
  const [constants, contentTypes, git, sourceRepos, catalogs, checks, plurals, websiteEnglish, completeness, contentStore, metadata] = await Promise.all(
    ["constants.mjs", "content-types.mjs", "git.mjs", "source-repos.mjs", "catalogs.mjs", "checks.mjs", "plurals.mjs", "website-english.mjs", "completeness.mjs", "content-store.mjs", "metadata.mjs"].map(load)
  );
  LOADED = { dir, constants, contentTypes, git, sourceRepos, catalogs, checks, plurals, websiteEnglish, completeness, contentStore, metadata };
  return LOADED;
}
