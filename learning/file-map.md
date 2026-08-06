# File map

<!-- Every file/folder is either explained or parked — no mystery boxes. -->
<!-- known: explained in the learner's own words | parked: honest one-liner for now, deep dive scheduled | generated: machine-made, never edit, always rebuildable -->

## /
- learning/project.md — known (2026-08-05) — your project, MVP, and trunk → [[frontend-backend-separation]]
- learning/plan.md — known (2026-08-05) — the locked stack decisions and 9-section build plan
- learning/knowledge-graph.md — known (2026-08-05) — the living map of what you actually know
- learning/file-map.md — known (2026-08-05) — this file: why every file in the repo exists
- spec.md — parked (revisit: Section 1) — original AI-drafted project spec written before this planning session; some of its claims (e.g. "FastAPI is the author's existing strength") turned out inaccurate and were corrected in learning/project.md — superseded by learning/plan.md for the stack, and by the MVP trim in learning/project.md for scope
- roadmap.md — parked (revisit: Section 1) — original AI-drafted week-by-week build roadmap, written for the old FastAPI+Next.js two-language stack — needs reconciling against the new one-language TypeScript plan once building starts
- schema.md — parked (revisit: Section 3) — original database schema draft (Race, Item, Class, Character, LoreEntry, etc.) — will be walked through and turned into the actual Prisma schema
- skills-lock.json — generated — records which learning-method skills (adopt-project, start-project, plan-journey) are installed and their versions
- .agents/ — generated — installed skills in a universal format usable by other AI coding tools (Codex, Copilot, etc.)
- .claude/ — generated — installed skills in the format Claude Code reads

## /web
- package.json — known (2026-08-05) — project's dependency list and npm script shortcuts (`npm run dev`, etc.) → [[npm-package-json]]
- package-lock.json — generated — exact locked versions of every installed package; never hand-edited
- node_modules/ — generated — the actual downloaded package code (282 packages); never edit, rebuildable via `npm install` → [[npm-package-json]]
- .next/ — generated — build cache created by `npm run dev`; never edit, rebuildable by re-running the dev server → [[dev-server]]
- src/app/page.tsx — known (2026-08-05) — the homepage component; shows real "Duneri Campaign Wiki" content, authored by you → [[react-components]] [[jsx]] [[nextjs-project-structure]]
- src/app/layout.tsx — known (2026-08-05) — shared wrapper (html/body) rendered around every page → [[nextjs-project-structure]]
- src/app/page.module.css, src/app/globals.css — parked (revisit: Section 2) — page/global styling, not yet covered
- public/*.svg — parked (revisit: Section 2) — placeholder image assets from the starter template
- .gitignore, README.md, next.config.ts, tsconfig.json, eslint.config.mjs, next-env.d.ts — parked (revisit: as needed) — generated config defaults, named but not deep-dived yet
