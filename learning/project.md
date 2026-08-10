# Project: Duneri Campaign Wiki

## About me
- Upcoming sophomore studying computer science in university
- Learning to code for real by building something that boosts my resume
- New to backend web frameworks (FastAPI) and frontend frameworks (React/Next.js) — this is a genuine first project on both, despite what the original spec doc claimed
- Comfortable using a terminal/command line already
- Anchored to a real hobby: building this for my friend's D&D campaign (they're the DM)

## The idea
A campaign wiki for my friend's D&D campaign — lets players browse and search races, items, and lore, lets the DM manage that content, and lets players manage their own character records. Modeled loosely on "Wikipedia + Google Docs, but more interactive," per direct feedback from the DM.

## MVP
### In
- Wiki-style browse of Races, Items, and Lore, with category dropdown filters
- Global search across all content — the DM's #1 stated pain point (forgetting what items do, slow lookups)
- Rich text editing/display for descriptions (bold, bullet points, links between entries) — direct DM request, matches the `content` field already in schema.md
- Glossary popups that define terms (e.g. item categories) on click/hover
- DM-only create/edit/delete on Races, Items, Lore
- Login with roles (DM / Player)
- Player-owned Character records (create, view, edit own)

### Parking lot (v2)
- RAG/AI lore chatbot (embeddings, vector search, LLM integration) — deliberately deferred; this is a second project's worth of new concepts (AI engineering) on top of a first project's worth (web dev), and stacking both at once is a common way beginners burn out
- Semantic search integrated into main site search
- Item comparison view (side-by-side)
- Player feedback/ranking on content — notes from the DM interview were vague here; needs clarification before it's scoped
- Managed auth provider polish
- Quest logs, party/social features, richer inventory management
- Swapping local LLM for a hosted paid API
- Bulk content importer (Discord export + Google Docs → seed data) — cut from the original spec's Week 1 plan during MVP trim; manual entry through the DM tools works for now, but flagged on 2026-08-08 as a real pain point given how much existing content there is to migrate

### Explicitly out of scope (not just deferred)
- Map-making / storyboarding tools — a different kind of tool (drawing/diagramming), not a wiki feature; would be its own separate project
- A "balance calculator" for items/weapons/enemies — DM design judgment, not something software solves directly (search + future comparison can support this, but won't replace it)

## The trunk — core components

### Source control (git)
The save-and-undo system professionals use — every change gets a snapshot you can go back to. In from day one, before any other code exists.

### The database
Where Races, Items, Lore, Users, and Characters actually live as structured, permanent data — separate from the app code itself, so it survives restarts and updates.

### The backend (API server)
The "brain" between the database and the outside world. Receives requests, decides if they're allowed (DM vs Player), talks to the database, sends back an answer. This is where FastAPI lives.

### The frontend
What players and the DM actually see and click on in a browser — wiki pages, search bar, login screen, character sheet. This is where Next.js/React lives.

### How frontend and backend talk to each other
The frontend never touches the database directly — it sends requests over the network to the backend and gets data back. This boundary is also where permission checks really matter: the frontend can *hide* an edit button, but only the backend can actually *block* an edit.

### Authentication & roles
How the app knows who's logged in and whether they're the DM or a Player — gates who can create/edit content versus who can only read it.

### Local development environment
Where all of the above runs on my own machine while building it, before anything is visible to friends.

### Deployment
Getting the app off the laptop and onto the real internet — a separate home for the frontend, backend, and database each — so the DM and players can use it from their own browsers.
