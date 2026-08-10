# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## git
- status: understood
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-08
- evidence: correctly explained add vs commit and executed the first real commit unaided on 2026-08-05 (539a0aa); 3 days later on 2026-08-08, independently ran git add/commit again for Section 2's commit (1edfe93) with no prompting or hints — genuine multi-day retention, not just same-session performance

## gitignore
- status: introduced
- depends-on: git
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: walked through web/.gitignore together and confirmed node_modules/ and .next/ correctly stayed out of `git status` and the staged file list; not yet checked in their own words

## javascript
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## typescript
- status: introduced
- depends-on: javascript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained TypeScript as "JavaScript with typing enforced to prevent more errors" when asked directly in /plan-journey

## react
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

## nextjs
- status: seed
- depends-on: react, typescript
- introduced: —
- last-reviewed: —
- evidence: —

## frontend-backend-separation
- status: introduced
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained, unprompted, that the frontend is what users see/click and the backend controls requests/data/permissions, during /start-project trunk check

## postgresql
- status: introduced
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: agreed PostgreSQL fits after reasoning through how connected the data is (Character → Race, Class, Spell)

## relational-database-design
- status: introduced
- depends-on: postgresql
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: built Character's connections to both User and Race in schema.prisma, and added the required reverse-side field on Race; not yet asked to explain the overall design in their own words

## prisma
- status: introduced
- depends-on: postgresql, typescript
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: confirmed understanding that an ORM lets TypeScript talk to the database and auto-generates matching types

## nextauth
- status: introduced
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: agreed rolling custom auth is not appropriate for a first project; chose NextAuth.js over Clerk/custom

## vercel-deployment
- status: introduced
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: confirmed understanding that deployment moves the app from laptop-only to a real URL others can use

## writing-a-good-plan
- status: introduced
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: co-authored the MVP scope trim (using real DM interview notes) and the 9-section build sequence this session

## reviewing-a-diff
- status: seed
- depends-on: git
- introduced: —
- last-reviewed: —
- evidence: —

## agent-memory-and-project-docs
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## nextjs-project-structure
- status: introduced
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: shown that src/app/page.tsx's file location determines it's the root-URL page; not yet checked in their own words

## react-components
- status: practicing
- depends-on: react
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly edited the Home() component's JSX themselves (removed a TODO comment, added real text inside the <p> tag) and predicted/confirmed how fast refresh shows the change live

## jsx
- status: practicing
- depends-on: react
- introduced: 2026-08-05
- last-reviewed: 2026-08-08
- evidence: correctly wrote plain text as JSX children between <p> and </p> without guidance (2026-08-05); on 2026-08-08, correctly embedded a variable with {title} after one hint distinguishing it from a previous static-text fill-in

## npm-package-json
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained node_modules as where installed packages live and that it's never hand-edited, after walking through package.json/package-lock.json/node_modules together

## dev-server
- status: practicing
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-05
- evidence: correctly explained, unprompted, that the running `npm run dev` process listens for browser requests and sends back the page, after seeing it work live at localhost:3000

## http-requests
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —
- note: HTTP status codes (e.g. the "200" in the dev server's request log) were named in passing on 2026-08-05 but deliberately parked, not taught — full concept comes due in Section 4

## css-styling
- status: practicing
- depends-on: none
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: wrote a valid color declaration correctly first try; then independently noticed black title text was invisible against globals.css's dark-mode background and fixed it by changing the color value to darkblue, without being told there was a problem

## css-modules
- status: introduced
- depends-on: css-styling
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: shown that .title in page.module.css becomes styles.title in page.tsx, scoped uniquely by Next.js; not yet checked in their own words

## tailwind-css
- status: seed
- depends-on: css-styling
- introduced: —
- last-reviewed: —
- evidence: —
- note: explicitly named as a future interest on 2026-08-08 when we chose plain CSS/CSS Modules for now — good candidate to revisit once css-styling reaches understood

## nextjs-link
- status: practicing
- depends-on: nextjs-routing
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly predicted that Link navigation would feel instant rather than causing a full-page reload/flash, correctly described the interception mechanism in their own words, and confirmed it by clicking through the site; independently added the third Link (to /races) and wired <Nav /> into both items/page.tsx and races/page.tsx unaided

## arrow-function-implicit-object-return
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —
- note: on 2026-08-08, asked a sharp clarifying question about `() => ({ ... })` syntax (thought parens were about JSX returns); given a full explanation of the concise-body-vs-block-body arrow function ambiguity, but chose to defer confirming understanding until it shows up in real code — deliberate, not a struggle

## react-props
- status: practicing
- depends-on: react-components
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly wrote `return <h1>{title}</h1>;` after one syntax hint, correctly destructuring the title prop; unprompted, correctly predicted the homepage title would lose its color/size since PageHeader doesn't know about page.module.css

## nextjs-routing
- status: practicing
- depends-on: nextjs-project-structure
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly predicted /items as the URL for a new items/ folder with a page.tsx; correctly recalled the folder+page.tsx pattern for /races unprompted (minor "file" vs "folder" wording slip, self-evident from correct description); independently authored the entire races/page.tsx file from scratch, correctly

## component-composition
- status: practicing
- depends-on: react-components
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: independently wrote <PageHeader title="Races" /> in a brand-new file, reusing the shared component with a different prop value, unaided

## prisma-schema
- status: practicing
- depends-on: prisma
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly wrote the Item model mirroring Race's field pattern unaided; correctly answered what @updatedAt would contain after a later edit; correctly identified ownerId/raceId (not owner/race) as the real database columns; correctly predicted what `prisma validate` checks and ran it themselves to a clean result

## database-migrations
- status: practicing
- depends-on: prisma-schema
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: correctly predicted `prisma migrate dev` would change both local files and the remote database, then ran it themselves and confirmed real tables were created in the live Neon database via the generated migration.sql

## foreign-keys
- status: practicing
- depends-on: relational-database-design
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly identified, unprompted, that ownerId and raceId (not the owner/race relation fields) are the actual columns that would exist in the real database table; on 2026-08-09, correctly predicted that inserting a Character with an invalid ownerId would be rejected with an error by the database's foreign key constraint

## seed-data
- status: practicing
- depends-on: prisma-schema
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: wrote a real prisma.item.create() call mirroring the given Race pattern; predicted `prisma studio` would show real data, then confirmed both seeded rows (Race "Human", Item "Longsword") visible in Studio

## prisma-driver-adapters
- status: introduced
- depends-on: prisma
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: shown that Prisma 7 requires an explicit adapter (PrismaPg wrapping the pg driver) passed to PrismaClient's constructor; this was new/unpredictable architecture I wired in directly, not yet explained by them in their own words

## reading-error-messages
- status: practicing
- depends-on: none
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: independently found and fixed a real "Cannot find module" error by reasoning through a file listing (proposed adding /client to the import path); separately, independently caught and fixed their own prisma.item.creaet() typo with no hint from me while I was investigating a different bug

## environment-variables
- status: practicing
- depends-on: none
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly created web/.env with a properly formatted DATABASE_URL line after one explanation; independently declined to paste the real connection string into chat, unprompted, showing real grasp of why secrets shouldn't be shared/committed

## nextjs-api-routes
- status: seed
- depends-on: nextjs-project-structure
- introduced: —
- last-reviewed: —
- evidence: —

## async-await
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

## json
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## query-parameters
- status: seed
- depends-on: http-requests
- introduced: —
- last-reviewed: —
- evidence: —

## filtering-with-prisma
- status: seed
- depends-on: prisma-schema
- introduced: —
- last-reviewed: —
- evidence: —

## debouncing
- status: seed
- depends-on: javascript
- introduced: —
- last-reviewed: —
- evidence: —

## sessions
- status: seed
- depends-on: nextauth
- introduced: —
- last-reviewed: —
- evidence: —

## protected-routes
- status: seed
- depends-on: nextauth, nextjs-api-routes
- introduced: —
- last-reviewed: —
- evidence: —

## role-based-rendering
- status: seed
- depends-on: sessions
- introduced: —
- last-reviewed: —
- evidence: —

## server-side-permission-checks
- status: seed
- depends-on: protected-routes, frontend-backend-separation
- introduced: —
- last-reviewed: —
- evidence: —

## react-forms
- status: seed
- depends-on: react-components
- introduced: —
- last-reviewed: —
- evidence: —

## controlled-inputs
- status: seed
- depends-on: react-forms
- introduced: —
- last-reviewed: —
- evidence: —

## http-post-put-delete
- status: seed
- depends-on: http-requests
- introduced: —
- last-reviewed: —
- evidence: —

## rich-text-editor
- status: seed
- depends-on: react-components
- introduced: —
- last-reviewed: —
- evidence: —

## sanitizing-rich-text
- status: seed
- depends-on: rich-text-editor
- introduced: —
- last-reviewed: —
- evidence: —

## basic-testing
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## ownership-checks
- status: seed
- depends-on: server-side-permission-checks
- introduced: —
- last-reviewed: —
- evidence: —

## relational-joins
- status: seed
- depends-on: prisma-schema, foreign-keys
- introduced: —
- last-reviewed: —
- evidence: —

## modals-popups
- status: seed
- depends-on: react-components
- introduced: —
- last-reviewed: —
- evidence: —

## reusable-components
- status: seed
- depends-on: component-composition
- introduced: —
- last-reviewed: —
- evidence: —

## production-migrations
- status: seed
- depends-on: database-migrations, vercel-deployment
- introduced: —
- last-reviewed: —
- evidence: —
