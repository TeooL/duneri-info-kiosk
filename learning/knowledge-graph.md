# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## git
- status: understood
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-24
- evidence: correctly explained add vs commit and executed the first real commit unaided on 2026-08-05 (539a0aa); 3 days later on 2026-08-08, independently ran git add/commit again for Section 2's commit (1edfe93) with no prompting or hints — genuine multi-day retention, not just same-session performance; on 2026-08-24, correctly predicted git status's output before running it, wrote a real, accurate commit message describing the day's change unaided (a72428e), correctly predicted git push would send the commit to the remote and that GitHub itself is where to verify it, then confirmed the push landed there

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
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-24
- evidence: correctly explained, unprompted, that the frontend is what users see/click and the backend controls requests/data/permissions, during /start-project trunk check (2026-08-05); on 2026-08-09, the boundary became real code — the Races page never touches Prisma directly, only talks to /api/races over real HTTP, and they correctly predicted both sides of that boundary; on 2026-08-24, after a 2-week gap, correctly recalled unprompted that the database lives on the backend side, right before a task that moves several pages from fetching their own API route to querying Prisma directly

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
- status: practicing
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-14
- evidence: agreed rolling custom auth is not appropriate for a first project; chose NextAuth.js over Clerk/custom (2026-08-05); on 2026-08-14, walked through a real Discord OAuth login end-to-end (consent screen, authorize, redirect back, session established) and could describe each step

## vercel-deployment
- status: practicing
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-24
- evidence: confirmed understanding that deployment moves the app from laptop-only to a real URL others can use; on 2026-08-24, created a real Vercel project connected to GitHub, correctly identified and fixed the Root Directory setting (app lives in web/, not repo root) after correctly predicting deploying without it would fail since Vercel wouldn't find package.json at the root; ran two real deploys, diagnosed a genuine "generated Prisma Client not committed" build failure (fixed via a postinstall script), then correctly traced a second failure's "Can't reach database server at 127.0.0.1:5432" error back to the missing production DATABASE_URL unaided; same day, added all four production environment variables in the Vercel dashboard, asked a sharp clarifying question about not including the .env file's quote marks in the raw values, and confirmed the live deployed site actually shows real data and a working Discord login end to end

## writing-a-good-plan
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-24
- evidence: co-authored the MVP scope trim (using real DM interview notes) and the 9-section build sequence this session; on 2026-08-24, during the final smoke test, noticed the app was missing edit/delete UI for Items/Races/Lore (only the backend routes exist) against Section 7's original deliverable text, and made a real, deliberate scope call to defer it to a "v2" rather than treating it as a blocking bug — genuine prioritization judgment, not something handed to them

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
- last-reviewed: 2026-08-14
- evidence: correctly edited the Home() component's JSX themselves (removed a TODO comment, added real text inside the <p> tag) and predicted/confirmed how fast refresh shows the change live; on 2026-08-14, correctly recalled after a multi-day gap that a component is a reusable function returning UI

## jsx
- status: practicing
- depends-on: react
- introduced: 2026-08-05
- last-reviewed: 2026-08-24
- evidence: correctly wrote plain text as JSX children between <p> and </p> without guidance (2026-08-05); on 2026-08-08, correctly embedded a variable with {title} after one hint distinguishing it from a previous static-text fill-in; on 2026-08-24, correctly predicted that a bare newline between two adjacent JSX tags (no other text) collapses to zero space rather than one space, confirmed live; then, on the harder follow-up case (a newline sitting directly next to a tag but with real text on the same line, e.g. "roll for" then a line break into <GlossaryTerm>), incorrectly predicted the added spaces would be enough — a real gap, self-diagnosed only after seeing the actual squished rendering and being shown the newlines-adjacent-to-tags rule, then fixed correctly by removing the line breaks

## npm-package-json
- status: practicing
- depends-on: none
- introduced: 2026-08-05
- last-reviewed: 2026-08-14
- evidence: correctly explained node_modules as where installed packages live and that it's never hand-edited (2026-08-05); on 2026-08-14, review revealed a real misconception — thought devDependencies was about where packages physically live rather than when they're needed (build-time vs runtime); given a refresher, not yet re-confirmed

## dev-server
- status: practicing
- depends-on: nextjs
- introduced: 2026-08-05
- last-reviewed: 2026-08-14
- evidence: correctly explained, unprompted, that the running `npm run dev` process listens for browser requests and sends back the page, after seeing it work live at localhost:3000; correctly recalled both the request/response loop and fast refresh after a multi-day gap on 2026-08-14

## http-requests
- status: practicing
- depends-on: none
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: correctly predicted a raw JSON array would appear when visiting /api/races directly in the browser, then correctly predicted the Races page itself would show exactly one list item, both confirmed correct
- note: HTTP status codes (e.g. the "200" in the dev server's request log) were named in passing on 2026-08-05 but deliberately parked, not taught — full concept comes due in Section 4

## css-styling
- status: practicing
- depends-on: none
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: wrote a valid color declaration correctly first try; then independently noticed black title text was invisible against globals.css's dark-mode background and fixed it by changing the color value to darkblue, without being told there was a problem

## semantic-html
- status: practicing
- depends-on: none
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: used <h3> as a direct child of <ul> (works visually, but violates the ul/li contract); correctly fixed it to <li> after one explanation of why the structure matters

## css-modules
- status: introduced
- depends-on: css-styling
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: shown that .title in page.module.css becomes styles.title in page.tsx, scoped uniquely by Next.js; not yet checked in their own words

## tailwind-css
- status: introduced
- depends-on: css-styling
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: explicitly named as a future interest on 2026-08-08 when we chose plain CSS/CSS Modules for now; locked in as the v2 styling decision on 2026-08-24 for the dedicated UI pass (Section 14), and correctly explained in their own words that Tailwind applies utility classes directly in JSX instead of writing selectors in a separate stylesheet like CSS Modules

## nextjs-link
- status: practicing
- depends-on: nextjs-routing
- introduced: 2026-08-08
- last-reviewed: 2026-08-24
- evidence: correctly predicted that Link navigation would feel instant rather than causing a full-page reload/flash, correctly described the interception mechanism in their own words, and confirmed it by clicking through the site; independently added the third Link (to /races) and wired <Nav /> into both items/page.tsx and races/page.tsx unaided; on 2026-08-09, added the Lore link to Nav.tsx entirely on their own initiative, with zero prompting from this lesson; on 2026-08-24, during the final smoke test, correctly predicted the long-dead "DM Tools" Link (pointing at a /dm page that was never built) would 404, confirmed it live, and correctly removed the dead Link themselves rather than building an unnecessary page

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
- last-reviewed: 2026-08-09
- evidence: correctly predicted /items as the URL for a new items/ folder with a page.tsx; correctly recalled the folder+page.tsx pattern for /races unprompted; independently authored races/page.tsx from scratch; on 2026-08-09 built lore/page.tsx (routing + real data fetch combined) after one hint pointing to items/page.tsx as a reference

## component-composition
- status: practicing
- depends-on: react-components
- introduced: 2026-08-08
- last-reviewed: 2026-08-24
- evidence: independently wrote <PageHeader title="Races" /> in a brand-new file, reusing the shared component with a different prop value, unaided; on 2026-08-24, after a 2-week gap, correctly recalled unprompted that props are the mechanism letting the same component render differently in different places, using PageHeader as their own example

## prisma-schema
- status: practicing
- depends-on: prisma
- introduced: 2026-08-08
- last-reviewed: 2026-08-24
- evidence: correctly wrote the Item model mirroring Race's field pattern unaided; correctly answered what @updatedAt would contain after a later edit; correctly identified ownerId/raceId (not owner/race) as the real database columns; correctly predicted what `prisma validate` checks and ran it themselves to a clean result; on 2026-08-24, after a 2-week gap, correctly recalled unprompted that schema.prisma and the live database aren't automatically in sync — a real command (a migration) is what bridges them; same day, wrote the Spell model mirroring Item's shape, initially forgot the `type` field (self-caught when asked to recount against the spec) and wrote `Integer` instead of Prisma's real `Int` type (self-corrected after reading the real prisma validate error)

## database-migrations
- status: practicing
- depends-on: prisma-schema
- introduced: 2026-08-09
- last-reviewed: 2026-08-24
- evidence: correctly predicted `prisma migrate dev` would change both local files and the remote database, then ran it themselves and confirmed real tables were created in the live Neon database via the generated migration.sql; on 2026-08-24, after a 2-week gap, correctly recalled unprompted that a migration is what actually turns schema.prisma's models into real tables/columns in the database — editing the schema file alone changes nothing live; same day, ran `prisma migrate dev --name add_spell` for Spell, hit a real transient connection error, retried successfully, then correctly recalled that `prisma generate` is still a separate step migrate dev doesn't run automatically

## foreign-keys
- status: practicing
- depends-on: relational-database-design
- introduced: 2026-08-08
- last-reviewed: 2026-08-24
- evidence: correctly identified, unprompted, that ownerId and raceId (not the owner/race relation fields) are the actual columns that would exist in the real database table; on 2026-08-09, correctly predicted that inserting a Character with an invalid ownerId would be rejected with an error by the database's foreign key constraint; on 2026-08-24, after a 2-week gap, gave a muddled definition ("an identifier for a different table to recognize what data it is pulling from") — the core idea of cross-table linking was there but imprecise, needed the "stores another table's actual primary key value" framing spelled out again

## seed-data
- status: practicing
- depends-on: prisma-schema
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: wrote a real prisma.item.create() call mirroring the given Race pattern; predicted `prisma studio` would show real data, then confirmed both seeded rows (Race "Human", Item "Longsword") visible in Studio; on 2026-08-09, independently wrote prisma.loreEntry.create() with correct field names, and correctly predicted that re-running the seed script would duplicate Race/Item rows since nothing prevents it

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
- last-reviewed: 2026-08-24
- evidence: independently found and fixed a real "Cannot find module" error by reasoning through a file listing (proposed adding /client to the import path); separately, independently caught and fixed their own prisma.item.creaet() typo with no hint from me while I was investigating a different bug; on 2026-08-14, correctly diagnosed why `npm install` at the wrong directory level created a stray package.json/node_modules, and cleanly recovered; on 2026-08-17, worked through a multi-step DevTools debugging session (checking Console, then Network tab, request status, then a bisection with checkpoint logs) that correctly narrowed the issue down to a Console "Verbose" filter hiding their own console.log output; same day, used DOM inspection (Inspect Element) twice in a row to correctly report the exact HTML structure behind two separate CSS display bugs, giving the actual evidence needed to diagnose both; on 2026-08-24, read two real Vercel build logs and correctly connected "Can't reach database server at 127.0.0.1:5432" back to a missing DATABASE_URL environment variable unaided

## environment-variables
- status: practicing
- depends-on: none
- introduced: 2026-08-08
- last-reviewed: 2026-08-08
- evidence: correctly created web/.env with a properly formatted DATABASE_URL line after one explanation; independently declined to paste the real connection string into chat, unprompted, showing real grasp of why secrets shouldn't be shared/committed

## nextjs-api-routes
- status: practicing
- depends-on: nextjs-project-structure
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: shown the route.ts + exported GET() pattern for Races; independently wrote the entire api/items/route.ts file themselves mirroring it correctly, and correctly predicted /api/items's JSON output; on 2026-08-09, independently wrote api/lore/route.ts correctly on the first attempt, adapting the model name (loreEntry) without a hint

## async-await
- status: practicing
- depends-on: javascript
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: independently wrote export async function GET() and an async page component with two await calls (fetch, then .json()) for Items, unaided

## json
- status: practicing
- depends-on: none
- introduced: 2026-08-09
- last-reviewed: 2026-08-09
- evidence: independently wrote const items = await res.json() themselves in items/page.tsx, correctly, mirroring the Races pattern with no prompting on that specific line

## query-parameters
- status: practicing
- depends-on: http-requests
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: correctly predicted /api/items?q=sword would return matching items and /api/items?q=xyz would return an empty array, both confirmed against real output

## filtering-with-prisma
- status: practicing
- depends-on: prisma-schema
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: independently wrote the where: { OR: [...] } filter with contains/mode: "insensitive" across two fields, correctly, from a shape description in a comment; independently noticed lore/route.ts's filter only covered title (not body), correctly predicted the resulting search gap, and fixed it themselves by adding a matching OR condition

## debouncing
- status: practicing
- depends-on: javascript
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: correctly predicted, before typing, that search results would update only after a brief pause rather than instantly per keystroke, and confirmed it working exactly that way

## client-components
- status: practicing
- depends-on: react-components
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: shown "use client" and the Server/Client split in ItemSearch.tsx (written by me); independently wrote the entire "use client" RaceSearch.tsx file themselves after one hint; independently built LoreSearch.tsx entirely unprompted, with zero hints, before this task even started

## react-state
- status: practicing
- depends-on: javascript
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: filled in the fetch/setItems call in ItemSearch.tsx (hooks written by me); independently wrote useState/useRef declarations themselves in RaceSearch.tsx after one hint; did the same fully unprompted for LoreSearch.tsx

## sessions
- status: practicing
- depends-on: nextauth
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: shown auth() returning a session object on the homepage; independently adapted it into Nav.tsx themselves after one hint (async function, auth() call, session-branching JSX), confirmed working site-wide

## server-actions
- status: practicing
- depends-on: javascript
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: shown "use server" inline in a form's action on the homepage; independently copied and correctly adapted the same pattern into Nav.tsx after one hint, verified working across every page

## nextauth-callbacks
- status: practicing
- depends-on: nextauth, sessions, prisma-schema
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: correctly filled in the jwt callback's TODO (attaching dbUser.role onto the token) matching the given session-callback pattern; correctly predicted the role would show nothing on a stale pre-existing token, then confirmed a fresh sign-in correctly showed "PLAYER" — real understanding of the signIn→jwt→session data flow, not just pattern-matching; on 2026-08-17, independently extended the same pattern to attach dbUser.id, correctly predicted a re-login was needed, and verified it via /api/auth/session's raw JSON

## oauth
- status: practicing
- depends-on: none
- introduced: 2026-08-14
- last-reviewed: 2026-08-24
- evidence: completed a real Discord OAuth flow themselves and accurately narrated each step (consent screen, authorize, redirect back); on 2026-08-24, a real gap — couldn't recall in their own words what a redirect URI is or why Discord requires pre-registering it, needed a full refresher before registering a second one for production; same day, after the refresher, correctly predicted the production Discord login would prompt and redirect back to the live app, then registered the real redirect URI and confirmed the full flow actually worked on the deployed site

## protected-routes
- status: introduced
- depends-on: nextauth, nextjs-api-routes
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: correctly reasoned that hiding the DM Tools link does not protect /dm — a Player typing the URL directly would still reach it, since nothing server-side blocks it yet; correctly named this as Section 7's job, not solved yet

## role-based-rendering
- status: practicing
- depends-on: sessions
- introduced: 2026-08-14
- last-reviewed: 2026-08-14
- evidence: independently wrote the {(session?.user as any)?.role === "DM" && <Link .../>} conditional themselves, correctly, and verified it appears only for a DM-role session

## server-side-permission-checks
- status: practicing
- depends-on: protected-routes, frontend-backend-separation
- introduced: 2026-08-17
- last-reviewed: 2026-08-24
- evidence: caught two real self-authored bugs in the permission check (checking the function reference `if (!requireDM)` instead of its result, then `await !requireDM()` operator-precedence issue) purely through reasoning about what each expression evaluates to; verified the fix genuinely blocks unauthenticated requests via a real curl test returning 403; on the Races POST rep, correctly identified a third variant (a missing `await` entirely, leaving `permission` as an always-truthy Promise) when asked what the un-awaited value actually was; on 2026-08-24, after a week gap, correctly recalled unprompted that a hidden Nav link is not real protection since a user could just enter the URL directly — the backend is what actually has to enforce it

## react-forms
- status: practicing
- depends-on: react-components
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: built a real working create form (ItemCreateForm.tsx) with onSubmit/e.preventDefault(), correctly wired end-to-end to a POST endpoint; independently built RaceCreateForm.tsx, correctly omitting the "type" field since Race's schema doesn't have one — real schema awareness, not blind copying

## controlled-inputs
- status: practicing
- depends-on: react-forms
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: correctly applied the value/onChange pattern for all three fields, and correctly identified textarea as the more semantically correct element than input for a multi-line description field; genuinely struggled with the <select>/<option> variant (put the races.map() inside the onChange prop instead of as children), needed the corrected snippet shown directly rather than self-correcting — a real gap, not yet solid on this specific form-element variant

## http-post-put-delete
- status: practicing
- depends-on: http-requests
- introduced: 2026-08-17
- last-reviewed: 2026-08-24
- evidence: correctly predicted an unauthenticated curl POST would be blocked, confirmed via real 403 response; understands POST reads its data from the request body, not query params; built real PUT/DELETE handlers, correctly reasoned that DELETE's broken (id: string) signature would actually receive the raw Request object (not an id) once shown the mismatch against PUT's correct shape, and fixed it; verified both against a real item via authenticated browser console requests; on the Races rep, independently wrote fully correct PUT/DELETE with zero bugs, verified live; on 2026-08-24, tested Characters PUT/DELETE against real requests via authenticated browser console fetch, correctly predicted both outcomes before running (including how to verify the delete actually worked, not just that the request didn't error) and confirmed both live

## nextjs-dynamic-routes
- status: practicing
- depends-on: nextjs-routing
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: independently wrote the PUT handler's params type ({ params }: { params: Promise<{ id: string }> }) correctly on the second attempt after one real self-caught TS7031 error; reused the pattern correctly for DELETE once shown the signature mismatch; on the Races rep, wrote a complete, correct races/[id]/route.ts (both PUT and DELETE, both correct params typing) entirely unaided, zero errors

## rich-text-editor
- status: practicing
- depends-on: react-components
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: independently added the BulletList toolbar button matching the given Bold pattern; genuinely used the working editor and correctly diagnosed two real CSS bugs affecting it (missing bullet markers from a global padding:0 reset, marker/text split from TipTap's <li><p> structure) through DOM inspection, not guessing

## sanitizing-rich-text
- status: practicing
- depends-on: rich-text-editor
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: correctly predicted a real XSS attempt (<script> tag sent via DevTools Console fetch, bypassing the UI entirely) would be stripped by sanitize-html, then confirmed it via a live test — the <p> tag survived, the <script> tag did not

## dangerously-set-inner-html
- status: practicing
- depends-on: sanitizing-rich-text, jsx
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: discovered raw HTML tags rendering as literal text in LoreSearch (JSX's default auto-escaping); after one explanation, correctly applied dangerouslySetInnerHTML={{ __html: entry.body }} themselves and verified real formatting rendered correctly

## basic-testing
- status: practicing
- depends-on: javascript
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: correctly wrote a third test case (DM session → true) independently, matching the given describe/it/expect/vi.mock pattern; correctly predicted 3/3 passing before running, then correctly predicted the exact failure mode (false→true mismatches) when the underlying code was deliberately broken, and confirmed the fix restored a clean pass — real understanding that a test only has value if it can actually fail

## ownership-checks
- status: understood
- depends-on: server-side-permission-checks
- introduced: 2026-08-17
- last-reviewed: 2026-08-24
- evidence: correctly identified two real bugs when prompted (missing await on request.json(), and the critical missing data.ownerId = session.user.id override); correctly predicted the created character would carry the real session owner id despite never sending one, confirmed live, and confirmed GET correctly scopes results to only the caller's own characters; on 2026-08-24 (multi-day gap), wrote DELETE for characters/[id]/route.ts mirroring the ownership-check pattern from PUT, correctly reasoned through a guiding question why leftover request.json()/data.ownerId lines copied from PUT were both unused and would break a real bodyless DELETE request, and removed them unaided; then, without being asked, tested the negative case directly — attempted to delete a character that didn't match their own ownerId and confirmed it correctly returned 403 Forbidden, real proactive security-mindset testing

## relational-joins
- status: practicing
- depends-on: prisma-schema, foreign-keys
- introduced: 2026-08-17
- last-reviewed: 2026-08-17
- evidence: independently added include: { race: true } to the characters GET query after one explanation, correctly placed alongside where; confirmed the resulting character.race.name was available and rendered it correctly in the list

## modals-popups
- status: practicing
- depends-on: react-components
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: built GlossaryTerm.tsx, a component that toggles visibility of hidden content via a useState boolean flipped on click; wrote the useState declaration and the conditional render ({open && definition}) correctly unaided; genuinely struggled with the onClick handler — wrote onClick={setOpen(!open)} (calling the state setter immediately during render instead of deferring it) and needed the bug pointed to an existing pattern in their own RichTextEditor.tsx toolbar buttons before writing the correct onClick={() => setOpen(!open)}; verified live in the browser that clicking the term correctly reveals its definition

## reusable-components
- status: practicing
- depends-on: component-composition
- introduced: 2026-08-17
- last-reviewed: 2026-08-24
- evidence: used CharacterCreateForm as a props-driven reusable form component (races passed in), same idea as PageHeader; not yet independently explained in own words; on 2026-08-24, wired the new GlossaryTerm component into three real usages on the same page (HP/Initiative/MP), each with different definition and children props — real reuse of one component across multiple real call sites, not just a single instance

## server-fetch-vs-direct-query
- status: practicing
- depends-on: nextjs-api-routes, frontend-backend-separation
- introduced: 2026-08-17
- last-reviewed: 2026-08-24
- evidence: shown (with an empirical scratch test proving it) that a Server Component's own fetch() to an authenticated API route does not carry the login cookie, and that querying Prisma directly in the Server Component sidesteps the problem; confirmed the resulting page correctly showed their own characters — not yet independently explained or diagnosed by them; on 2026-08-24, applied the same fix themselves to fix hardcoded localhost:3000 URLs across Races/Items/Lore/Characters pages ahead of deployment — Items and Lore were converted correctly on the first try (right model name, awaited); Races initially had two self-corrected bugs (wrong model — prisma.character instead of prisma.race, and a missing await, both caught via guiding questions); Characters required a real refocus after losing track of which file was being edited, then completed correctly

## ssl-tls-verification
- status: practicing
- depends-on: environment-variables
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: surfaced a real dev-console warning about pg's sslmode=require aliasing to verify-full today but not in a future major version; correctly explained, in their own words, that an encrypted-but-unverified connection could still be exploited by an attacker impersonating the real database server; edited DATABASE_URL themselves to sslmode=verify-full, restarted the dev server, and confirmed the warning was gone

## serverless-database-cold-starts
- status: introduced
- depends-on: database-migrations
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: hit a real P1001 "Can't reach database server" error running `prisma migrate dev` against Neon's direct connection locally for the first time; retried the exact same command on my suggestion and it succeeded, then was shown the explanation (Neon's free tier "scales to zero" when idle, so the first connection after quiet time has to wait for it to wake up) — not yet independently diagnosed or explained in their own words

## edit-vs-create-forms
- status: seed
- depends-on: react-forms, controlled-inputs
- introduced: —
- last-reviewed: —
- evidence: —
- note: seeded 2026-08-24 for v2 Section 12 — the distinction between a create form (empty defaults, POSTs) and an edit form (pre-filled from existing data, PUTs)

## production-migrations
- status: practicing
- depends-on: database-migrations, vercel-deployment
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: correctly predicted `prisma migrate status` would report the production database as up to date, since it's the same Neon database used in local dev, then confirmed it live; correctly identified the two commands needed to wire migrations into the deploy pipeline (prisma migrate deploy, next build) though needed the `&&` chaining syntax explained; wired "build": "prisma migrate deploy && next build" into package.json, verified in a real Vercel build log showing "1 migration found... No pending migrations to apply" exactly as predicted; hours later, a real production build failure surfaced this pipeline's one gap — after the fix (below), correctly predicted the rebuilt migration step would succeed through the direct connection, confirmed it live in a second real build log

## connection-pooling
- status: practicing
- depends-on: production-migrations, environment-variables
- introduced: 2026-08-24
- last-reviewed: 2026-08-24
- evidence: real production incident — a Vercel build failed with a P1002 advisory-lock timeout because prisma migrate deploy was running through Neon's pooled (PgBouncer transaction-mode) connection, which can't reliably hold a session-scoped lock; after the concept was explained (pooled connections may hand queries to different underlying connections between transactions, breaking anything that needs a persistent session), correctly predicted `prisma migrate status` would still report up to date locally once pointed at a direct connection, then correctly predicted the next Vercel build's migration step would succeed through the direct connection — confirmed in a real build log
