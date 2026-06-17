# Project Specs — Datagami Website

## What the app does & who uses it
A marketing/content website for **Datagami** (an EdTech & digital-technology firm). Public
visitors (universities, students, businesses) browse services, programs, case studies, blog,
and gallery. Admins log in to manage blog posts, gallery items, and testimonials.

## Tech stack
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4, glass/liquid-glass design system (`globals.css`)
- **Database:** PostgreSQL via Prisma 7 (local: Docker container on port 5434)
- **Auth:** NextAuth v5 (admin only)
- **Storage:** Azure Blob Storage (images/media uploads)
- **Hosting:** Vercel

## Pages & flows
- **Public:** Home, Services (+ Education / Products / Hiring sub-pages), Case Studies, About,
  Gallery, Blog, Contact.
- **Authenticated:** `/admin/*` (blog, gallery, testimonials management).

## Data models (Prisma)
User, BlogPost, GalleryItem, Testimonial. Static content (programs, services, partners) lives
in `lib/data/*.ts`.

---

# Current Task — Short-Term Courses page

## Goal
Add a new public page dedicated to Datagami's **Short-Term Certification Programs** (for
universities), linked under the **Services → Programs** navigation heading. Content is sourced
from `Short term course/Datagami Short Term Course Presentation.pptx`. The page must look and
feel **uniform** with existing program pages (e.g. FinLEARN).

## Who uses it
Universities / faculty evaluating a partnership; prospective students.

## Location & navigation
- **Route/file:** `app/services/education/short-term-courses/page.tsx` → `/services/education/short-term-courses`
- **Navbar:** new item "Short-Term Courses" under the **Programs** category in the Services dropdown (`components/layout/navbar.tsx`).
- **Services landing:** add a matching `ProgramCard` in the "Education Programs" grid (`app/services/page.tsx`).

## Data
Content is static and defined **inline in the page file** (same pattern as the FinLEARN page).
No database changes. No new Prisma models.

## Images (copied from `Short term course/` into `public/`)
- 4 LinkedIn testimonial screenshots → `public/images/testimonials/short-term/`
  (Dr. Amrita Baid More – Faculty; Clive Nelson Fernandes, Aastha Sagarkar, Radhika Yadav – MBA students, Medicaps University)
- Delivery photo collage → `public/images/short-term-courses/program-in-action.png`

## Reused components (for uniformity)
`HeroDark`, `Breadcrumbs`, `SectionHeader`, `StatsBar`, `CTASection`, `FadeIn`,
`StaggerChildren/StaggerItem`, glass cards, brand color tokens, `generateCourseSchema`,
metadata + OpenGraph block. Hero image reuses an existing asset
(`/images/hero/hero-students-collaborating.png`).

## Page sections (from the deck)
1. **Hero** — title + subtitle + 4 stats (10+ Domains, 45 hrs/Program, 3-Stage Assessment, 2-Way Mentorship)
2. **The Gap** — Academic Depth + Applied Layer = Career-ready graduates
3. **What Programs Deliver** — outcome highlights
4. **Program Objectives** — 6 objective cards
5. **Teaching Methodology** — 3-layer model (Faculty trained → Students taught → Project delivered)
6. **Train-the-Trainer (T3)** — structure + 4-step certification path
7. **Three-Stage Assessment Framework** — Unit Tests · Exam · Industry Project
8. **Certification & Recognition** — verifiable, QR-authenticated, NEP-2020 aligned
9. **Course Catalogue** — 9 domain categories
10. **Program in Action** — real delivery-photo collage from partner campus
11. **Testimonials** — 4 LinkedIn screenshots (faculty + students) as image cards
12. **Engagement Process** — 9-step timeline
13. **Why Datagami** — 6 reasons
14. **CTA** — "Let's build something together" → Contact

## Third-party services
None new. (Existing: Prisma/Postgres, NextAuth, Azure Blob.)

## "Done" looks like
- New page renders at `/services/education/short-term-courses` with all sections, matching site styling in light & dark mode.
- Linked from the Services dropdown (desktop + mobile) and the `/services` page.
- `npm run build` / dev compiles with no type or lint errors; page returns HTTP 200.
