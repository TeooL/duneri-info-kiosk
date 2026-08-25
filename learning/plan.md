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

## v2 backlog (deferred, not started)
- Edit/delete UI (buttons/forms) for Items, Races, Lore, and Characters — backend routes already exist and work, just no frontend hookup yet
- Promote the actual DM's account from PLAYER to DM via Prisma Studio once they've logged in at least once
