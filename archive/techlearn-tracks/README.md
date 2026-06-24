# Archived TechLEARN tracks

These three TechLEARN track pages were removed from the live site on 2026-06-18
(Metaverse, Blockchain, Chip Design). The content is preserved here so the pages
can be restored later.

## How to restore a page
1. Move its folder back under `app/services/education/techlearn/` — e.g.
   `git mv archive/techlearn-tracks/blockchain app/services/education/techlearn/blockchain`
2. Re-add the page to the TechLEARN hub (`app/services/education/techlearn/page.tsx`)
   and, if desired, to `lib/data/programs.ts`.

Each archived page is self-contained: its `track` metadata is inlined at the top
of the file (it no longer depends on `lib/data/programs.ts`), so it will build as
soon as it is placed back under `app/`.
