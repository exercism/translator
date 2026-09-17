// routes.mjs: for every content type in the i18n registry, the how-to that
// governs it and the command that reaches it.
//
// The i18n repo's scripts/lib/content-types.mjs is the one place a PATH PATTERN
// lives, and the type of a file is always derived from its source path through
// that registry (`typeForPath`), never declared here. What the registry has no
// business knowing is this repo's layout: which file under content-types/
// explains a type to the model, and which slash command an operator types. That
// is all this table holds.
//
// scripts/check-routes.mjs asserts that every registry type appears here exactly
// once, that the how-to and the command exist, and that scripts/translate.mjs
// itself agrees it can run the type. A type with no route does not fail, it
// silently never happens, so run the check whenever the registry changes.
//
// SOURCES is the other half: where English comes from, which is what the
// commands are split by. `kind` is a REPO_KINDS id in the i18n repo's
// scripts/lib/source-repos.mjs.

export const SOURCES = {
  website: { kind: "website", command: "translate-website", catalogs: true },
  track: { kind: "track", command: "translate-track", named: true },
  "problem-specifications": { kind: "problem-specifications", command: "translate-problem-specifications" },
  docs: { kind: "docs", command: "translate-docs" },
  blog: { kind: "blog", command: "translate-blog" },
  "website-copy": { kind: "website-copy", command: "translate-website-copy" }
};

export const ROUTES = {
  // ---------------------------------------------------------------- website --
  "website-backend": { howto: "website-backend", source: "website" },
  "website-frontend": { howto: "website-frontend", source: "website" },

  // ------------------------------------------------------------ track repos --
  "exercise-instructions": { howto: "exercise-docs", source: "track" },
  "exercise-introduction": { howto: "exercise-docs", source: "track" },
  "exercise-instructions-append": { howto: "appends", source: "track" },
  "exercise-introduction-append": { howto: "appends", source: "track" },
  "exercise-hints": { howto: "hints", source: "track" },
  "exercise-shared-docs": { howto: "track-docs", source: "track" },
  "concept-about": { howto: "concepts", source: "track" },
  "concept-introduction": { howto: "concepts", source: "track" },
  "track-docs": { howto: "track-docs", source: "track" },

  // ------------------------------------------------ problem-specifications --
  "problem-specification": { howto: "problem-specifications", source: "problem-specifications" },

  // ------------------------------------------------------------------- docs --
  "docs-using": { howto: "docs", source: "docs" },
  "docs-building": { howto: "docs", source: "docs" },
  "docs-programming": { howto: "docs", source: "docs" },
  "docs-mentoring": { howto: "docs", source: "docs" },
  "docs-community": { howto: "docs", source: "docs" },

  // ------------------------------------------------------------------- blog --
  "blog-post": { howto: "blog", source: "blog" },
  "community-story": { howto: "blog", source: "blog" },

  // ----------------------------------------------------------- website-copy --
  "analyzer-comments": { howto: "analyzer-comments", source: "website-copy" },

  // --------------------------------------------------------------- metadata --
  //
  // Names, titles and blurbs: the text that is NOT a whole file, which sits in
  // config.json and metadata.toml among data. The registry declares these with
  // `unit: "metadata"`, and they are not translated file by file: the i18n repo's
  // scripts/lib/metadata.mjs extracts ONE keyed catalog per source repo
  // (`locales/<locale>/metadata/<repo>.json`), and that catalog is the unit of
  // work. So all of one source's metadata types share a route, and
  // `--type=metadata` (or any one of these ids) runs that source's catalog.
  "exercise-metadata": { howto: "metadata", source: "track", metadata: true },
  "concept-metadata": { howto: "metadata", source: "track", metadata: true },
  "track-metadata": { howto: "metadata", source: "track", metadata: true },
  "track-docs-metadata": { howto: "metadata", source: "track", metadata: true },
  "problem-specification-metadata": { howto: "metadata", source: "problem-specifications", metadata: true },
  "docs-metadata": { howto: "metadata", source: "docs", metadata: true },
  "blog-metadata": { howto: "metadata", source: "blog", metadata: true }
};

// Nothing is a deliberate gap today. The shape stays, because the route check
// must be able to tell a declared gap (a type id and the reason nothing reaches
// it) from an oversight, and the next type that lands half-built will need it.
export const GAPS = {};

// TODO(iHiD): OPEN. Whether contributor-facing `building/` docs (155 of the 212
// served pages) and mentor-facing `mentoring/` docs are translated is undecided
// in the i18n repo, which keeps both types live. They are routed here like any
// other type so that the decision is NOT made by this repo either way; the
// /translate-docs command says out loud that both are included. Dropping one is
// a change to the i18n registry, which this table then follows.
export const SCOPE_UNDECIDED = ["docs-building", "docs-mentoring"];
