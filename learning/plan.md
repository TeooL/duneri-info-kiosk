# Learning plan: Duneri Campaign Wiki

## Locked decisions
- Language/stack: TypeScript + Next.js end-to-end (frontend pages and backend API routes, one language) — avoids learning two languages/ecosystems at once on a genuine first project
- Database: PostgreSQL — the data is fundamentally relational (Character → Race, Class, Spell), so a relational database fits its natural shape
- ORM: Prisma — the standard TypeScript ORM for Next.js, generates matching types automatically, huge community/docs
- Authentication: NextAuth.js (Auth.js) — the standard Next.js auth library; handles the security-critical parts safely rather than rolling custom auth
- Hosting: Vercel + Vercel Postgres — built by the Next.js team, minimal setup, one dashboard for app + database

## Sections

### 1. First page running locally  [x] done
**Deliverable:** A Next.js + TypeScript project running on your own machine, showing a basic "Duneri Wiki" home page in the browser.
**Concepts:** git, npm-package-json, nextjs-project-structure, react-components, jsx, dev-server

- [x] Check your environment (Node.js and npm installed)
- [x] Scaffold the Next.js + TypeScript project
- [x] Tour the generated project files
- [x] Run the dev server and see it live in the browser
- [x] Replace the placeholder homepage with your own "Duneri Wiki" content
- [x] Commit the first working version to git (539a0aa)

### 2. Styling & static pages  [x] done
**Deliverable:** A styled home page plus a few Item/Race pages with real (hardcoded) content, clickable between via navigation.
**Concepts:** css-styling, react-props, nextjs-routing, component-composition

- [x] Style the homepage with CSS Modules
- [x] Build a reusable PageHeader component that takes a title prop
- [x] Create Items and Races pages with hardcoded content, reusing PageHeader
- [x] Add navigation links between Home/Items/Races
- [x] Commit the styled, multi-page site (1edfe93)

### 3. The database & schema  [x] done
**Deliverable:** A running PostgreSQL database with Race/Item/Lore/User/Character tables built via Prisma, plus seed data visible in Prisma Studio.
**Concepts:** prisma-schema, database-migrations, foreign-keys, relational-database-design, seed-data, environment-variables

- [x] Create a free Postgres database (Neon) and store the connection string in a .env file
- [x] Install and initialize Prisma
- [x] Define the schema (User, Race, Item, LoreEntry, Character) trimmed from schema.md to MVP scope
- [x] Run the first migration to create real tables
- [x] Seed sample data and view it in Prisma Studio

### 4. Reading real data  [x] done
**Deliverable:** Browse pages pull real Item/Race/Lore data from the database through backend API routes, replacing the hardcoded content from Section 2.
**Concepts:** nextjs-api-routes, http-requests, json, async-await, frontend-backend-separation

- [x] Build the Races API route and connect the Races page to real data
- [x] Build the Items API route and connect the Items page to real data
- [x] Seed a LoreEntry, then build a Lore API route and new Lore page reading real data
- [x] Add Lore to the nav
- [x] Commit (437b3e1)

### 5. Search  [x] done
**Deliverable:** A working search bar that filters Items/Races/Lore by name/content across the site — the DM's #1 stated pain point.
**Concepts:** query-parameters, filtering-with-prisma, debouncing, client-components, react-state

- [x] Add search filtering to the Items API route (query param + Prisma filtering)
- [x] Build a debounced search input Client Component for the Items page
- [x] Apply the same search pattern to the Races page
- [x] Apply the same search pattern to the Lore page
- [x] Commit (6f05d8c)

### 6. Login & roles  [x] done
**Deliverable:** Login/logout works, with DM and Player roles, and the page shows who's currently logged in.
**Concepts:** nextauth, sessions, protected-routes, role-based-rendering

- [x] Install and configure NextAuth.js with Discord sign-in
- [x] Show sign-in/sign-out and the current session in the Nav
- [x] Connect NextAuth users to the Prisma User model with a Role
- [x] Role-aware rendering (hide/show something based on DM vs Player)
- [ ] Commit

### 7. DM content management  [x] done
**Deliverable:** A logged-in DM can create/edit/delete a Race/Item/Lore entry through a form, with rich text (bold/bullets/links) saved and displayed correctly, and the permission check enforced on the backend — not just hidden in the UI.
**Known gap (found 2026-08-24, deferred to v2):** only create actually shipped a form — edit/delete only exist as backend PUT/DELETE routes (tested via raw fetch calls), with no UI button anywhere. Same story for Characters in Section 8. A deliberate scope call, not an oversight.
**Concepts:** react-forms, controlled-inputs, http-post-put-delete, server-side-permission-checks, rich-text-editor, sanitizing-rich-text, basic-testing

- [x] Server-side permission check + POST /api/items + a simple create form for Items
- [x] Upgrade the description field to a real rich text editor, with sanitization
  - decided: TipTap + sanitize-html (verified against React 19/Next 16); ignored a Prisma-CLI-only deepmerge-ts audit warning after tracing it to config-loading code that never runs in the deployed app
- [x] Add edit (PUT) and delete (DELETE) for Items, DM-only
- [x] Apply the same full CRUD pattern to Races
- [x] Apply the same full CRUD pattern to Lore
- [x] Write a basic test for the server-side permission check
- [x] Commit (40f4038)

### 8. Characters & glossary  [x] done
**Deliverable:** A logged-in Player can create/edit their own Character (linked to a Race), and clicking a glossary term anywhere on the site pops up its plain-language definition.
**Concepts:** ownership-checks, relational-joins, modals-popups, reusable-components

- [x] Attach the real database user id to the session (extends the existing nextauth-callbacks pattern)
- [x] Character API: GET own characters, POST create (linked to raceId + ownerId)
- [x] Character page: form to create a Character (name + Race dropdown), list your own
- [x] Add PUT/DELETE for Characters with an ownership check (only the owning Player)
- [x] Build a reusable Glossary popup component, wire in a few real terms
- [x] Commit (c5841b3)

### 9. Going live  [x] done
**Deliverable:** The real app deployed to a real URL on Vercel, with the real Vercel Postgres database, that your DM and players can actually open and use.
**Concepts:** vercel-deployment, production-migrations

- [x] Fix the hardcoded localhost:3000 fetches in Races/Items/Lore pages (same direct-Prisma-query fix already used on the Characters page)
- [x] Push the latest commits to GitHub (a72428e)
- [x] Create a Vercel project connected to the GitHub repo and run the first deploy
- [x] Add production environment variables in Vercel (DATABASE_URL, Discord secrets, AUTH_SECRET) and update the Discord OAuth redirect URI for the real URL
- [x] Run a production database migration against the real database
- [x] Smoke-test the live URL end to end, then commit
  - found and fixed a real dead link ("DM Tools" → /dm, never built) during the smoke test
  - **post-launch incident (2026-08-24):** a later Vercel build failed with a P1002 advisory-lock timeout — `prisma migrate deploy` was running through Neon's pooled connection, which can't reliably hold the lock. Fixed by adding a DIRECT_URL (non-pooled) env var and pointing prisma.config.ts's datasource at it, leaving the app's own DATABASE_URL (pooled) untouched. Confirmed fixed in a real rebuilt deploy.

## v2 locked decisions
- Styling: Tailwind CSS for the UI/styling pass (Section 14) — the common, widely-used utility-class approach in the Next.js ecosystem, chosen over going deeper with plain CSS Modules since the explicit goal for v2 is a real UI push
- Design direction (2026-08-24): a minimalist, sleek D&D-wiki-fandom theme — Cinzel (via next/font/google, built into Next.js, no extra dependency) for headings, paired with the existing clean sans-serif for body text; deliberately avoiding heavy textures/parchment backgrounds/ornate borders to keep it sleek rather than busy

### 10. Spells  [x] done
**Deliverable:** A Spells page exists with real spell data, searchable like Items/Races/Lore, with DM-only create working — same pattern as Items and Races, applied to a new content type.
**Concepts:** prisma-schema, database-migrations, nextjs-api-routes, filtering-with-prisma, react-forms

- [x] Design and add a Spell model to schema.prisma, run the migration
- [x] Build the Spells API route (GET searchable, DM-only POST)
- [x] Build the Spells page + a debounced SpellSearch component
- [x] Build the DM-only SpellCreateForm
- [x] Seed a couple of real spell entries
- [x] Commit (035e6b7)

### 11. Click-to-view descriptions  [x] done
**Deliverable:** Clicking any Item/Race/Lore/Spell entry in a list opens its full description, instead of the list only ever showing the name.
**Concepts:** modals-popups, reusable-components, dangerously-set-inner-html
**Scope decision (2026-08-24):** consistency across all four content types — Items/Races currently show name-only (their real gap), while Lore/Spells currently always show full content inline; all four converge on the same name-first, click-to-expand pattern.

- [x] Build a reusable click-to-expand list-item component (generalizes GlossaryTerm's toggle pattern to a full entry, not just a definition string)
- [x] Apply it to ItemSearch
- [x] Apply it to RaceSearch
- [x] Apply it to LoreSearch (collapses its current always-shown body)
- [x] Apply it to SpellSearch (collapses its current always-shown fields)
- [x] Commit (2d2e697)

### 12. Edit/delete UI — Items  [x] done
**Deliverable:** A DM can click a real edit button on an Item, change its fields in a pre-filled form, and save — plus delete it — with no more raw fetch() calls needed to exercise the existing PUT/DELETE routes.
**Concepts:** react-forms, controlled-inputs, edit-vs-create-forms, http-post-put-delete

- [x] Thread `isDM` into ItemSearch as a prop (it doesn't receive it today)
- [x] Build ItemEditForm — pre-filled with the item's current values, submits PUT
- [x] Add a Delete button, wire both edit form and delete into ItemSearch's expanded view, DM-only
  - real event-bubbling bug found and fixed in ExpandableEntry itself (clicks inside the form were closing the entry)
- [x] Commit (da1611d)

### 13. Edit/delete UI — Races, Lore, Characters, Spells  [x] done
**Deliverable:** The same real edit/delete UI pattern from Section 12 applied across every remaining content type.
**Concepts:** edit-vs-create-forms, reusable-components

- [x] Races: thread isDM, build RaceEditForm, add Delete button, wire into RaceSearch
- [x] Lore: thread isDM, build LoreEditForm, add Delete button, wire into LoreSearch
- [x] Spells: thread isDM, build SpellEditForm, add Delete button, wire into SpellSearch
  - real gap found: api/spells/[id]/route.ts had never been built (Spells only got GET/POST in Section 10, before edit/delete existed) — built it now, PUT/DELETE, DM-only, sanitized
- [x] Characters: build CharacterEditForm (ownership-checked, not DM-only), add Delete button, wire into characters/page.tsx
- [x] Commit (133d51d)

### 14. UI/styling pass  [x] done
**Deliverable:** A visually consistent, polished site using Tailwind CSS across every page, plus a real category dropdown filter on Items/Spells (now genuinely useful with two categories to filter between).
**Concepts:** tailwind-css, query-parameters, filtering-with-prisma
**Idea to consider (noted 2026-08-24, during Section 12):** a side-panel detail view instead of inline click-to-expand — surfaced after testing edit forms inside ExpandableEntry felt cramped/awkward to interact with

- [x] Install and configure Tailwind CSS
  - **unplanned side quest (2026-08-24):** `npm install` for Tailwind surfaced a real, unrelated npm audit report (32 vulnerabilities). Correctly separated 2 real/fixable issues (@tiptap/core prototype pollution, fast-uri SSRF) from 2 unreachable Prisma-CLI-only ones (deepmerge-ts, mysql2 — same category as the Section 7 deepmerge-ts call), fixed the first two via `npm audit fix`. That fix left a duplicate @tiptap/core instance (starter-kit nested vs. top-level) causing real TS errors; resolved by upgrading @tiptap/react and @tiptap/pm to match. Down to 4 unreachable high-severity findings, left alone.
- [x] Style the shared layout (Nav, PageHeader, homepage) with Tailwind
- [x] Style the content pages (forms, lists, ExpandableEntry) with Tailwind
  - Cinzel font sitewide; ExpandableEntry restyled as a card (applies to every list site-wide, since it's shared); all 9 forms (Item/Race/Lore/Spell create+edit, Character create+edit) restyled as bordered panels; spacer divs added to all 5 content pages
  - **unresolved oddity (2026-08-24):** on ItemCreateForm, `mt-6` computed to 0px in DevTools despite the class being present — worked around with a plain spacer `<div className="h-6" />` instead of margin throughout. Real cause not confirmed (possible Tailwind v4 @layer interaction with globals.css's unlayered `* { margin: 0 }` reset, but not verified) — worth investigating for real before relying on margin utilities elsewhere
- [x] Add a category dropdown filter to Items and Spells (query param + Prisma `where` on `type`)
- [x] Commit (44bae1f)

## v3 parking lot (deferred, not started)
- Bulk content importer (Discord export / Google Docs → seed data) — a genuinely bigger, separate problem (file parsing pipeline)
- Item comparison view (side-by-side)
- Promote the actual DM's account from PLAYER to DM via Prisma Studio once they've logged in at least once — a one-off operational task, not really a "section"
- Classes page (noted 2026-08-24, during Spells work) — mirrors the same content-type pattern as Items/Races/Spells; not yet scoped (fields, relation to Spells if any)
- Bulk multi-select delete (noted 2026-08-24, during Section 12 planning) — needs both new frontend state (a "select mode" with checkboxes) and a new backend bulk-delete route, since DELETE only handles one item by id today; deliberately chose simpler per-row edit/delete buttons for v2 instead
- Icon library (noted 2026-08-24, during design direction discussion) — lucide-react is the likely pick when this comes up; deferred for now to keep the v2 UI pass minimalist

## v3 locked decisions (2026-09-10)
- File storage: Vercel Blob, paired with next/image for optimization — chosen over Cloudinary specifically to stay on one platform (already hosting on Vercel); next/image's automatic resizing/format conversion covers most of what Cloudinary would have added
- Weapon Tags: a separate, shared WeaponTag model with a many-to-many relation to Weapon, so a tag's definition is edited once and reflected everywhere it's used, not duplicated per weapon
- Spell components: kept as a flexible components String field (e.g. "Verbal, Somatic") plus a real manaCost Int, rather than a fixed boolean column per component type, since the exact set of possible components isn't finalized
- Spell's optional Summon Stat Block: kept as plain optional text for v3 — a real structured stat-block model is deferred to a future version
- UI: replacing ExpandableEntry's click-to-expand pattern with a split view (list on the left, detail panel on the right) across every content type; item comparison view stays parked until this and the new models are solid

### 15. Image upload infrastructure  [x] done
**Deliverable:** A test image can be uploaded through a form and displayed on a page, automatically optimized by Next.js.
**Concepts:** file-storage, vercel-blob, image-optimization, environment-variables
**Real incidents (2026-09-12):** the first Blob store was created Private, which broke uploads (public access is required for next/image to load a blob URL directly) — access mode turned out to be locked at store creation, so a second store had to be created Public instead, a real correction on my (the AI's) part, not the learner's; separately, `npm install @vercel/blob` surfaced a critical Next.js RCE specifically in the Image Optimization API (not just the usual unreachable Prisma-CLI noise), fixed by pinning `next@16.3.5` directly rather than a blind `audit fix --force`

- [x] Create a Vercel Blob store in the Vercel dashboard and add the token it gives you to .env
- [x] Install the @vercel/blob package
- [x] Build a minimal server-side upload API route that takes a file and stores it in Blob, returning its URL
- [x] Build a simple test upload form (file input + submit) that calls the route
- [x] Display the uploaded image with next/image and confirm it's optimized
- [x] Commit (815897a)

### 16. Weapon backend  [x] done
**Deliverable:** A working Weapon API (GET searchable, DM-only POST/PUT/DELETE) with a real WeaponTag many-to-many relation, verified via direct requests.
**Concepts:** many-to-many-relations, join-tables, prisma-schema, nextjs-api-routes, filtering-with-prisma
**Real incident (2026-09-13):** Prisma Studio's UI genuinely failed to seed WeaponTag rows twice (auto-generated cuid() id came back empty), unrelated to anything done wrong — routed around it by seeding through real code instead, same fallback pattern used for the two real Spell entries

- [x] Design and add the Weapon and WeaponTag models (many-to-many relation) to schema.prisma, run the migration
- [x] Seed a couple of real WeaponTag rows (e.g. "Reach", "Two-Handed")
- [x] Build the Weapon API GET route (searchable)
- [x] Build the Weapon API POST route (DM-only, creating a Weapon with tags attached)
- [x] Build the Weapon [id] API route (DM-only PUT/DELETE)
- [x] Verify all routes via direct requests, then commit

### 17. Weapon frontend  [ ] not started
**Deliverable:** A Weapons page where a DM can create a weapon with an uploaded icon and selected tags, and players can browse/search them.
**Concepts:** reusable-components, controlled-inputs, edit-vs-create-forms, file-storage

- [ ] Build the Weapons page + WeaponSearch component (browse/search, same pattern as Items/Spells)
- [ ] Build WeaponCreateForm's basic fields (DM-only, controlled inputs, no icon/tags yet)
- [ ] Add icon upload to WeaponCreateForm, reusing the Section 15 upload pipeline
- [ ] Add tag selection (checkboxes for existing WeaponTags) to WeaponCreateForm
- [ ] Build WeaponEditForm + Delete button, wire into WeaponSearch
- [ ] Commit

### 18. Spell model revision  [ ] not started
**Deliverable:** The Spell model, its migration, and its routes/forms reflect the DM's real fields (school, cast time, components, mana cost, icon, etc.), with the two existing real spells safely preserved.
**Concepts:** database-migrations, prisma-schema

### 19. Classes page  [ ] not started
**Deliverable:** A simple Classes page exists with real class data, following the same content-type pattern as Items/Races/Spells.
**Concepts:** prisma-schema, nextjs-api-routes, react-forms

### 20. Split-view UI overhaul  [ ] not started
**Deliverable:** Every content page shows a list on the left and a detail panel on the right that updates when you click an item, replacing the old inline-expand pattern site-wide.
**Concepts:** master-detail-layout, react-state, component-composition

### 21. Icons  [ ] not started
**Deliverable:** lucide-react is installed, with a few real icons showing up in the nav and/or content pages.
**Concepts:** npm-package-json, tailwind-css

## v4 parking lot (deferred, not started)
- Item comparison view (side-by-side) — deferred until v3's new models and the split-view UI are solid
- Bulk content importer (Discord export / Google Docs → seed data) — a genuinely bigger, separate problem (file parsing pipeline)
- Bulk multi-select delete
- Promote the actual DM's account from PLAYER to DM via Prisma Studio once they've logged in at least once
