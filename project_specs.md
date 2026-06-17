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

# Done — Short-Term Courses page
Shipped & merged (PR #1): new page at `/services/education/short-term-courses` under
Services → Programs, with deck content, testimonials, sample certificate, and nav wiring.

---

# Current Task — Rebuild the EduDron LMS page

## Goal
**Completely replace** the existing thin EduDron LMS page with a comprehensive, image-rich
product page that reflects what EduDron actually is: a **multi-tenant, white-label LMS** that
spans the whole learner journey — content, AI authoring, proctored exams, verified credentials,
business simulations, psychometric career mapping, and an integrated jobs portal. Content from
`LMS/EduDron LMS-Deck.pptx`; UI screenshots from the `LMS/` folder. Must stay **uniform** with
the rest of the site.

## Location
- **Route/file:** `app/services/products/edudron-lms/page.tsx` → `/services/products/edudron-lms` (existing route, rewritten)
- Already linked from navbar (Products) and `/services` — no nav change needed.

## Who uses it
University leadership, corporate L&D, and institutional partners evaluating the platform.

## Images (copied from `LMS/` into `public/images/edudron-lms/`, kebab-cased)
dashboard · ai-course-generation · job-simulation · leaderboard · psychometric-test ·
integrated-job-portal (+2) · verified-credentials (+2) · white-label-tenant-1 (+2) ·
mobile-app · exam-proctoring · logo

## Reused components / conventions
`HeroDark` (with stats), `Breadcrumbs`, `SectionHeader`, `StatsBar`, `FeatureGrid`,
`CTASection`, `FAQSection`, `FadeIn`, `StaggerChildren/StaggerItem`, glass cards, brand tokens,
SoftwareApplication JSON-LD. Screenshots shown in framed "browser" cards.

## Explicitly NOT on this page
No testimonials. No "Program in Action". No teaching methodology — those belong to the
short-term *course* page. This is a **product**: lead with capabilities and the roles offered.

## Page sections (from the deck)
1. **Hero** — "EduDron — one platform, the entire learner journey" + stats: 1 Platform · 7 Login Types · 10× Faster Build · 100% Branded. CTA: **Request a Demo**.
2. **Executive summary** — intro + admin **dashboard** screenshot
3. **What makes EduDron different** — 6 alternating image/text showcase rows, each with 3 sub-points + a real screenshot:
   Business Simulations (job-simulation, leaderboard) · AI-Assisted Authoring (ai-course-generation) ·
   Psychometric Career Mapping (psychometric-test) · Integrated Jobs Portal (integrated-job-portal) ·
   Verified Digital Credentials (verified-credentials ×2) · White-Label Multi-Tenancy (white-label-tenant ×2)
4. **Built for how institutions are organised** — the academic **branching**: Institutes → Classes → Sections → Batches, with bulk import and cohort transfers (NEW, per request)
5. **Exams & Evaluation** — **proctored exams** (4 proctoring modes, tab-switch/identity), and evaluation that is **instructor-led OR AI-reviewed** (instructor keeps final authority); **exam-proctoring** screenshot (NEW, per request)
6. **Reports & Analytics** — cross-cutting dashboards, engagement/completion metrics, results export, tamper-evident audit trail (NEW, per request)
7. **Who uses EduDron** — 7 role cards, each with a 1–2 line description (System Admin, Tenant Admin, Content Manager, Instructor, Support, Student, Employer)
8. **Mobile & offline** — **mobile-app** screenshot + native app / offline / jobs-portal points
9. **Platform at scale & security** — scale stats (10,000s learners/tenant, 1,000s concurrent exam, auto-scale) + data-isolation / RBAC / audit / encryption cards
10. **Premium modules** — grid of 8 opt-in modules (what it delivers · who it's for)
11. **FAQs** (refreshed) + a prominent **Request a Demo** CTA (also a mid-page demo CTA)

## Data
Page content defined inline in the page file (FinLEARN pattern). Also refresh the `edudronLms`
entry in `lib/data/products.ts` (tagline, description, features) so the `/services` product card
reflects the real product. No DB changes.

## "Done" looks like
Rewritten page renders at `/services/products/edudron-lms` with all sections + screenshots
(incl. reports/analytics, academic branching, proctored exams + instructor/AI evaluation),
matching site styling in light & dark mode; `/services` card updated; dev compiles clean; HTTP 200.

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

---

# Done — EduDron LMS page rebuild (merged, PR #2)

---

# Current Task — Rebuild Talent Acquisition into a Recruitment & Staffing service page

## Goal
Rebuild the thin `/services/hiring/talent-acquisition` page into a full **Recruitment & Staffing
(Recruitment-as-a-Service / RaaS)** service page from `recruitement services/Datagami Staffing
Services.docx`. **Same URL** (no broken links). Reposition the label to **"Recruitment & Staffing"**.

## Decisions (confirmed)
- Keep URL; reposition content + rename the nav label / services card to "Recruitment & Staffing".
- Stats are **doc-backed only**: 15+ Years Leadership · 8 Industries · 7 Staffing Models · End-to-End. (No invented placement/retention numbers.)

## Location & wiring
- **File:** `app/services/hiring/talent-acquisition/page.tsx` (rewritten; route unchanged)
- **Rename label "Talent Acquisition" → "Recruitment & Staffing"** in: `components/layout/navbar.tsx`,
  `lib/data/services.ts` (talentAcquisition.name), `lib/data/navigation.ts` (footer). The `/services`
  card uses `services[0].name`, so it updates automatically.

## Reused components / conventions
`HeroDark` (with stats), `Breadcrumbs`, `SectionHeader`, `CTASection`, `FadeIn`,
`StaggerChildren/StaggerItem`, glass cards, brand tokens. No images in the folder → reuse an
existing hero image + icon-based cards (no new screenshots).

## Page sections (from the doc)
1. **Hero** — "Recruitment & Staffing" / RaaS positioning + 4 doc-backed stats. CTA: Let's Connect.
2. **Overview** — Recruitment as a Service intro (future-ready teams; 15+ yrs led; tech + cultural fit)
3. **Staffing Capabilities** — 7 cards: Permanent Hiring · Contract & Temporary · Project-Based ·
   Executive & Leadership Search · Tech & Digital Talent Acquisition · Talent Sourcing & Assessment ·
   End-to-End Recruitment Support
4. **Industries We Hire For** — 8: IT, Life Sciences, Engineering, Professional Services, Government,
   Accounting & Finance, Telecommunications, Sales
5. **Technology Domains** — AI, ML, Big Data, Cloud, Cybersecurity, enterprise platforms
6. **Why Partner With Datagami** — 6 reasons (network, emerging-tech expertise, structured process,
   multi-industry, cultural fit, experienced leadership)
7. **Our Process** — refreshed 4-step RaaS flow (Requirement → Source → Assess → Onboard)
8. **CTA** → Let's Connect

## Data
Page content inline (FinLEARN/EduDron pattern). Refresh the `talentAcquisition` entry in
`lib/data/services.ts` (name → "Recruitment & Staffing", RaaS description, process steps). No DB changes.

## "Done" looks like
Rewritten page renders at `/services/hiring/talent-acquisition` with all sections; nav + footer +
`/services` card show "Recruitment & Staffing"; light & dark mode consistent; dev compiles clean; HTTP 200.
