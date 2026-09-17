// issue-scope.mjs: what ONE pull request changed, worked out from git.
//
// The issue a PR opens lists the English files it touched, and that list is NOT
// read: it is text in an issue, and an issue is data that no decision is taken
// from (scripts/lib/issues.mjs). The scope of a run is derived here instead, from
// the source repo itself, given only the verified sha:
//
//   paths   files whose blob id differs between the merge base and the sha. By
//           blob id, so a rename or a mode change requires nothing.
//   units   catalog units (the website's two catalogs, or this repo's metadata
//           catalog) whose English differs between the two, found by building
//           the English at both commits with the i18n repo's own builders.
//
// The merge base is taken against the default branch as the checkout has it, so a
// PR that is behind main is not charged with main's changes.

import { SOURCES } from "./routes.mjs";

export async function scopeOf(lib, { source, repo, sha }) {
  const git = (args) => lib.git.git(args, repo).trim();
  const base = git(["merge-base", lib.sourceRepos.defaultRef(repo), sha]);

  const kindId = SOURCES[source].kind;
  const sparse = lib.sourceRepos.REPO_KINDS[kindId].sparse ?? [];
  const idsAt = (ref) => new Map(lib.git.lsTree(repo, ref, sparse).map((entry) => [entry.path, entry.id]));
  const [before, after] = [idsAt(base), idsAt(sha)];
  const paths = [...after].filter(([file, id]) => before.get(file) !== id).map(([file]) => file);

  const englishAt = async (ref) => {
    if (source === "website") {
      const built = await lib.websiteEnglish.buildWebsiteEnglish(lib.git.refReader(repo, ref));
      return { backend: built.backend.catalog, frontend: built.frontend.catalog };
    }
    if (!lib.metadata.METADATA_REPO_KINDS.includes(kindId)) return {};
    return { metadata: lib.metadata.buildMetadataEnglish(kindId, lib.git.lsTree(repo, ref), lib.git.refReader(repo, ref).readMany).catalog };
  };
  const [englishBefore, englishAfter] = [await englishAt(base), await englishAt(sha)];
  const units = [];
  for (const [kind, catalog] of Object.entries(englishAfter)) {
    const old = englishBefore[kind] ?? {};
    for (const unit of lib.catalogs.englishUnits(kind, catalog).values()) {
      if (unit.keys.some((key) => catalog[key] !== old[key])) units.push(unit.id);
    }
  }
  return { base, paths, units };
}
