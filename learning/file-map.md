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
- .env — known (2026-08-08) — holds the real Neon/Postgres connection string; gitignored, never committed, never shared in chat → [[environment-variables]]
- prisma.config.ts — known (2026-08-08) — tells the Prisma CLI where the schema/migrations live, how to read DATABASE_URL from .env, and (as of 2026-08-09) how to run the seed script → [[prisma]] [[seed-data]]
- prisma/schema.prisma — known (2026-08-08) — the full MVP schema: Race, Item, LoreEntry, User (with Role enum), and Character (linked to both User and Race via foreign keys), trimmed from schema.md's fuller vision → [[prisma-schema]] [[foreign-keys]] [[relational-database-design]]
- prisma/migrations/ — known (2026-08-09) — versioned history of real SQL changes applied to the live Neon database; each folder is one migration, never hand-edited after the fact → [[database-migrations]]
- prisma/seed.ts — known (2026-08-09) — script that inserts sample Race/Item/LoreEntry rows for local testing; written together, including a real typo you found and fixed yourself, plus an independently-written LoreEntry.create() call → [[seed-data]] [[reading-error-messages]]
- src/generated/prisma/ — generated — the actual Prisma Client code (TypeScript), rebuilt from schema.prisma by `npx prisma generate`; never hand-edited → [[prisma-schema]]
- .agents/skills/, .claude/skills/, .windsurf/skills/, skills-lock.json (inside web/) — generated — AI-assistant skill files auto-installed by `npx prisma init` (published by Prisma, help AI tools use Prisma correctly); same idea as the repo-root learning skills, never hand-edited
- package.json — known (2026-08-05) — project's dependency list and npm script shortcuts (`npm run dev`, etc.) → [[npm-package-json]]
- package-lock.json — generated — exact locked versions of every installed package; never hand-edited
- node_modules/ — generated — the actual downloaded package code (282 packages); never edit, rebuildable via `npm install` → [[npm-package-json]]
- .next/ — generated — build cache created by `npm run dev`; never edit, rebuildable by re-running the dev server → [[dev-server]]
- src/app/page.tsx — known (2026-08-05) — the homepage component; shows real "Duneri Campaign Wiki" content, authored by you → [[react-components]] [[jsx]] [[nextjs-project-structure]]
- src/app/layout.tsx — known (2026-08-05) — shared wrapper (html/body) rendered around every page → [[nextjs-project-structure]]
- src/components/PageHeader.tsx — known (2026-08-08) — reusable heading component that takes a title prop, used on the homepage, Items, and Races pages → [[react-props]] [[component-composition]]
- src/app/items/page.tsx — known (2026-08-14) — the Items page; still a Server Component doing the initial fetch, now hands data off to <ItemSearch /> for the interactive search UI → [[nextjs-routing]] [[nextjs-link]] [[nextjs-api-routes]] [[http-requests]] [[async-await]] [[json]] [[client-components]]
- src/app/api/items/route.ts — known (2026-08-14) — GET endpoint returning Items as JSON, now filterable by a ?q= search query via Prisma's OR/contains → [[nextjs-api-routes]] [[query-parameters]] [[filtering-with-prisma]]
- src/components/ItemSearch.tsx — known (2026-08-14) — Client Component: debounced search input over Items, calls /api/items?q= client-side and updates the list without a page reload → [[client-components]] [[react-state]] [[debouncing]]
- src/app/api/lore/route.ts — known (2026-08-14) — GET endpoint returning LoreEntry rows as JSON, filterable by ?q= across both title and body; entirely unprompted, including self-diagnosing and fixing a title-only search gap → [[nextjs-api-routes]] [[query-parameters]] [[filtering-with-prisma]]
- src/components/LoreSearch.tsx — known (2026-08-14) — Client Component: debounced search input over Lore; written entirely unprompted, no hints needed → [[client-components]] [[react-state]] [[debouncing]]
- src/app/lore/page.tsx — known (2026-08-14) — the Lore page; still a Server Component doing the initial fetch, now hands data off to <LoreSearch /> for interactive search, wired up entirely unprompted → [[nextjs-routing]] [[nextjs-api-routes]] [[semantic-html]] [[client-components]]
- src/app/races/page.tsx — known (2026-08-14) — the Races page; still a Server Component doing the initial fetch, now hands data off to <RaceSearch /> for interactive search — uses a hardcoded localhost:3000 URL, a known dev-only simplification to fix in Section 9 → [[nextjs-routing]] [[nextjs-link]] [[nextjs-api-routes]] [[http-requests]] [[client-components]]
- src/app/api/races/route.ts — known (2026-08-14) — GET endpoint returning Races as JSON, now filterable by ?q=; rewritten by you after one hint pointing to the Items version → [[nextjs-api-routes]] [[frontend-backend-separation]] [[query-parameters]] [[filtering-with-prisma]]
- src/components/RaceSearch.tsx — known (2026-08-14) — Client Component: debounced search input over Races; written entirely by you after one hint → [[client-components]] [[react-state]] [[debouncing]]
- src/lib/prisma.ts — known (2026-08-09) — one shared Prisma Client + adapter instance, reused by every API route instead of repeating the setup → [[prisma-driver-adapters]]
- src/components/Nav.tsx — known (2026-08-09) — reusable navigation links (Home/Items/Races/Lore) using next/link for instant client-side navigation, used on every page; Lore link added entirely on your own initiative → [[nextjs-link]] [[component-composition]]
- src/app/page.module.css — known (2026-08-08) — your homepage's styling: layout, title, and tagline rules, written by you → [[css-styling]] [[css-modules]]
- src/app/globals.css — known (2026-08-08) — site-wide defaults (background/text colors, including the dark-mode variant that caused today's invisible-text bug) → [[css-styling]]
- src/app/favicon.ico — parked (revisit: Section 2) — placeholder browser-tab icon from the starter template
- public/*.svg — parked (revisit: Section 2) — placeholder image assets from the starter template
- .gitignore — known (2026-08-05) — tells git which files/folders to never track (node_modules/, .next/, env files); read and confirmed together before the first commit → [[git]] [[gitignore]]
- README.md, next.config.ts, tsconfig.json, eslint.config.mjs, next-env.d.ts — parked (revisit: as needed) — generated config defaults, named but not deep-dived yet
