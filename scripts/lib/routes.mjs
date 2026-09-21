// routes.mjs: for every content type in the i18n registry, the how-to that
// governs it and the command that reaches it.
//
// The i18n repo's scripts/lib/content-types.mjs is the only place path patterns
// are defined, and a file's type is always derived from its source path through
// that registry (`typeForPath`), never declared here. This table holds only what
// belongs to this repo's layout: which file under content-types/ explains a
// type to the model, and which slash command an operator types.
//
// scripts/check-routes.mjs checks that every registry type appears here exactly
// once, that the how-to and the command exist, and that scripts/translate.mjs
// can run the type. A type with no route is skipped without any error, so run
// the check whenever the registry changes.
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
  // Names, titles and blurbs: short text stored among data in config.json and
  // metadata.toml. The registry declares these with `unit: "metadata"`. They are
  // translated as one keyed catalog per source repo, which the i18n repo's
  // scripts/lib/metadata.mjs extracts (`locales/<locale>/metadata/<repo>.json`).
  // So all of one source's metadata types share a route, and `--type=metadata`
  // (or any one of these ids) runs that source's catalog.
  "exercise-metadata": { howto: "metadata", source: "track", metadata: true },
  "concept-metadata": { howto: "metadata", source: "track", metadata: true },
  "track-metadata": { howto: "metadata", source: "track", metadata: true },
  "track-docs-metadata": { howto: "metadata", source: "track", metadata: true },
  "problem-specification-metadata": { howto: "metadata", source: "problem-specifications", metadata: true },
  "docs-metadata": { howto: "metadata", source: "docs", metadata: true },
  "blog-metadata": { howto: "metadata", source: "blog", metadata: true }
};

// There are no declared gaps today. GAPS stays so that the route check can tell
// a declared gap (a type id and the reason nothing reaches it) from an
// oversight, for the next type that arrives before it can be translated.
export const GAPS = {};

// TODO(iHiD): open. It is undecided whether contributor-facing `building/` docs
// (155 of the 212 served pages) and mentor-facing `mentoring/` docs are
// translated. The i18n repo keeps both types live, and they are routed here like
// any other type so that this repo does not make the decision either way. The
// /translate-docs command says that both are included. Dropping one is a change
// to the i18n registry, which this table then follows.
export const SCOPE_UNDECIDED = ["docs-building", "docs-mentoring"];
