# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## git
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

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
- status: seed
- depends-on: postgresql
- introduced: —
- last-reviewed: —
- evidence: —

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
- last-reviewed: 2026-08-05
- evidence: correctly wrote plain text as JSX children between <p> and </p>, replacing a TODO comment, without guidance on syntax

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
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## react-props
- status: seed
- depends-on: react-components
- introduced: —
- last-reviewed: —
- evidence: —

## nextjs-routing
- status: seed
- depends-on: nextjs-project-structure
- introduced: —
- last-reviewed: —
- evidence: —

## component-composition
- status: seed
- depends-on: react-components
- introduced: —
- last-reviewed: —
- evidence: —

## prisma-schema
- status: seed
- depends-on: prisma
- introduced: —
- last-reviewed: —
- evidence: —

## database-migrations
- status: seed
- depends-on: prisma-schema
- introduced: —
- last-reviewed: —
- evidence: —

## foreign-keys
- status: seed
- depends-on: relational-database-design
- introduced: —
- last-reviewed: —
- evidence: —

## seed-data
- status: seed
- depends-on: prisma-schema
- introduced: —
- last-reviewed: —
- evidence: —

## environment-variables
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

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
