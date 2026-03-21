# Datagami Website — Next.js Rebuild Design

**Date:** 2026-03-21
**Status:** Approved
**Type:** Enhanced rebuild — Wix → Next.js migration with SEO/GEO fixes and new pages

---

## 1. Overview

Rebuild the Datagami website (currently on Wix Vibe) as a Next.js application with:
- All existing content preserved and fixed
- New pages added (About Us, Case Studies, Gallery, Blog, Product pages, Service pages)
- Full SEO and structured data from day 1
- GEO (Generative Engine Optimization) best practices
- Unique page designs — no cookie-cutter layouts

## 2. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans (Google Fonts) |
| Rendering | Static Site Generation (SSG) |
| Content | Static/code-based (no CMS) |
| Sitemap | next-sitemap |
| Deployment | Vercel (recommended) |

## 3. Architecture — Component-First

Build a shared design system of reusable components, then compose all pages from them.

### Project Structure

```
datagami-website/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts, metadata)
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # About (NEW)
│   ├── contact/page.tsx        # Contact
│   ├── blog/page.tsx           # Blog listing (NEW, placeholder)
│   ├── gallery/page.tsx        # Gallery (NEW)
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing (NEW)
│   │   └── [slug]/page.tsx     # Individual case study (NEW)
│   └── services/
│       ├── page.tsx            # Services overview (unique, NOT homepage duplicate)
│       ├── products/
│       │   ├── sineap-lms/page.tsx
│       │   └── total-erp/page.tsx
│       ├── hiring/
│       │   ├── talent-acquisition/page.tsx
│       │   ├── student-placement/page.tsx
│       │   ├── consulting/page.tsx
│       │   └── technical-support/page.tsx
│       └── education/
│           ├── finlearn/page.tsx
│           ├── techlearn/
│           │   ├── page.tsx
│           │   ├── cloud-computing/page.tsx
│           │   ├── metaverse/page.tsx
│           │   ├── blockchain/page.tsx
│           │   └── chip-design/page.tsx
│           ├── ibm-ice/page.tsx
│           ├── clinomic/page.tsx
│           └── upi-study/page.tsx
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Navbar, Footer, Breadcrumbs
│   ├── sections/               # Hero, Stats, Features, FAQ, CTA, Testimonials
│   └── cards/                  # ProgramCard, ProductCard, ServiceCard, StatCard
├── lib/
│   ├── data/                   # Static content data (programs, products, services)
│   └── schemas/                # JSON-LD structured data generators
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
└── tailwind.config.ts
```

## 4. Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#F5B731` | Hero BG, logo accent, active nav links, CTA borders |
| Primary Dark | `#D4991F` | Hover state for primary |
| Dark | `#1A1A1A` | Navbar text, headings, CTA buttons |
| Body Text | `#333333` | Body text on light backgrounds |
| Background | `#FFFFFF` | Page background, navbar |
| Surface | `#FFFFFF` | Cards, overlays |
| Muted Text | `#666666` | Descriptions, captions |
| Border | `#E5E5E5` | Card borders, dividers |
| Success | `#059669` | Stats, positive indicators |

### Typography

- **Font:** Plus Jakarta Sans (weights 300–700)
- H1: 48px/56px, weight 700
- H2: 36px/44px, weight 700
- H3: 24px/32px, weight 600
- Body: 16px/28px, weight 400
- Small: 14px/20px, weight 400
- Max line length: 65–75 characters

### Spacing

- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gaps: `gap-6 md:gap-8`

### Shared Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Floating nav: logo, links (Home, Services dropdown, Case Studies, About Us, Gallery, Blog, Contact), "Get Started" outlined button |
| `Footer` | Office addresses (Mumbai + Bengaluru), quick links, legal, social, copyright |
| `Breadcrumbs` | JSON-LD + visual breadcrumbs on depth > 1 pages |
| `Hero` | Multiple variants (split, full-width, dark, minimal) |
| `SectionHeader` | H2 + description, centered or left-aligned |
| `StatsBar` | Row of stat cards (number + label) |
| `FeatureGrid` | 2–3 column grid of icon + title + description |
| `ProgramCard` | Image + title + description + duration + CTA |
| `FAQ` | Accordion with FAQPage schema markup |
| `CTASection` | Full-width section with heading + CTA button |
| `TestimonialCarousel` | Rotating quotes with name, role, photo |

## 5. Page-Specific Layouts

Each page has a distinct hero style and section composition to avoid repetition.

### Home
- **Hero:** Split layout — golden yellow left panel + large image right (as per current design)
- **Sections:** Solutions grid → Why Choose Us (icon grid) → Trust metrics (stats bar) → Digital Education (image + text) → Success Stories → CTA
- **Feel:** Warm, inviting, overview

### Services Overview
- **Hero:** Full-width with categorized cards (Programs, Products, Hiring)
- **Layout:** Tab/filter-based browsing of all offerings
- **Feel:** Organized catalog

### FinLEARN
- **Hero:** Dark background with golden accent, program badge
- **Sections:** Program tracks (UG/PG/Cert) → Curriculum timeline → Certifications gallery → Placement stats → Alumni → FAQ
- **Feel:** Premium, academic credibility

### TechLEARN
- **Hero:** Tech-themed with circuit/grid pattern overlay, 4 track cards
- **Layout:** Track comparison table → Individual track deep-dives
- **Feel:** Technical, modern, structured

### IBM ICE
- **Hero:** IBM blue accent alongside golden brand, badge showcase
- **Layout:** Badge categories (horizontal scroll) → Track listings → Partner institutes
- **Feel:** Certification-focused, IBM co-branded

### Clinomic
- **Hero:** Clean white/green medical feel with golden accents
- **Sections:** Program overview → Core areas (4 pillars) → Application process (stepped timeline) → Placements → FAQ
- **Feel:** Clinical, trustworthy

### TechLEARN Sub-pages (Cloud, Metaverse, Blockchain, Chip Design)
- **Each:** Themed hero icon + track-specific accent color overlay
- **Shared template:** Module breakdown → Skills gained → Career outcomes → CTA
- **Differentiation:** Blue (cloud), purple (metaverse), orange (blockchain), teal (chip design)

### UPI Study
- **Standalone under education** (not nested under TechLEARN)
- Unique layout for financial literacy/UPI content

### About Us (NEW)
- **Hero:** Team photo or office imagery, company story
- **Sections:** Mission/Vision → Timeline/History → Team → Partners/Clients logos → Locations map
- **Feel:** Human, storytelling

### Case Studies (NEW)
- **Layout:** Grid of case study cards with industry tags, filterable
- **Individual:** Problem → Solution → Results (with data viz)
- **Feel:** Evidence-based, data-rich

### Gallery (NEW)
- **Layout:** Masonry photo grid with lightbox, categorized (Events, Campus, Workshops)
- **Feel:** Visual, immersive

### Blog (NEW)
- **Layout:** Card grid with featured post hero, category filters
- **Feel:** Content-forward, editorial

### Contact
- **Hero:** Minimal, direct
- **Layout:** Two-column (form left, office locations + map right)
- **Feel:** Action-oriented, clean

### Product Pages — Sineap LMS & Total ERP (NEW)
- **Hero:** Product screenshot/mockup with feature highlights
- **Sections:** Key features → How it works (stepped) → Integrations → Request demo CTA
- **Feel:** Product-focused, SaaS demo style

### Hiring Service Pages (NEW — Talent, Placement, Consulting, Support)
- **Hero:** Service-specific imagery
- **Sections:** What we do → Process → Results/stats → Contact CTA
- **Feel:** Professional, B2B service

## 6. SEO Strategy

### Per-Page Meta Tags (Next.js Metadata API)
Every page gets unique: title, description, OG tags, Twitter cards, canonical URL.

### Structured Data (JSON-LD)

| Schema | Pages | Purpose |
|--------|-------|---------|
| `Organization` | All (layout) | Company info, logo, contact |
| `LocalBusiness` (x2) | All (layout) | Mumbai + Bengaluru offices |
| `Course` | Each program page | Program details for rich results |
| `FAQPage` | Pages with FAQ | FAQ rich results |
| `BreadcrumbList` | Depth > 1 pages | Navigation in SERPs |
| `WebSite` | Home | Sitelinks search box |
| `Article` | Blog posts | Blog rich results |

### Technical SEO
- **robots.txt** with sitemap reference
- **sitemap.xml** auto-generated via next-sitemap
- **SSG rendering** — full HTML to crawlers
- **H1 on every page** — exactly one
- **Images** — standard `<img>` tags with manually optimized WebP files, explicit width/height attributes, `loading="lazy"` on below-fold images (NO Next.js `<Image>` component — it stops rendering when Vercel Image Optimization credits run out)
- **Core Web Vitals** — LCP (preload hero images), CLS (explicit image dimensions), INP (minimal JS)

## 7. GEO (Generative Engine Optimization)

- Clear entity definition on About page
- FAQ sections with FAQPage schema markup
- Content depth on every program page (curriculum, outcomes, stats)
- E-E-A-T signals: team credentials, case studies, partner logos
- Semantic HTML: proper heading hierarchy, article tags, section landmarks
- Internal cross-linking: related programs, breadcrumbs, footer nav

## 8. Wix SEO Issues Fixed in Rebuild

| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | All pages same title | CRITICAL | Unique titles via Metadata API |
| 2 | No meta descriptions | CRITICAL | Unique descriptions per page |
| 3 | No H1 tags | CRITICAL | Exactly one H1 per page |
| 4 | Client-side rendering | CRITICAL | SSG — full HTML |
| 5 | Services = homepage duplicate | CRITICAL | Unique services catalog page |
| 6 | UPI Study broken | CRITICAL | Standalone page with real content |
| 7 | No robots.txt | HIGH | Proper robots.txt |
| 8 | No sitemap.xml | HIGH | Auto-generated sitemap |
| 9 | No structured data | HIGH | JSON-LD on all pages |
| 10 | No navigation menu | HIGH | Full navbar with dropdown |
| 11 | No About page | HIGH | New About page |
| 12 | Identical OG/Twitter tags | HIGH | Page-specific social meta |
| 13 | No breadcrumbs | MEDIUM | Visual + JSON-LD breadcrumbs |
| 14 | FAQ not crawlable | MEDIUM | Server-rendered accordions |
| 15 | No cross-linking | MEDIUM | Related programs, footer nav |
| 16 | Empty placeholder sections | MEDIUM | Proper placeholder content |
| 17 | No privacy/terms pages | MEDIUM | Added to footer |
| 18 | Placeholder phone numbers | LOW | Verified contact info |

## 9. Contact Information (Verified)

- **Email:** query@datagami.in
- **Phone:** +91 97029 34397 / +91 77381 70621
- **Mumbai:** 309, Crescent Business Square, Khairani Rd, Saki Naka, Mumbai, Maharashtra 400072
- **Bengaluru:** 191, 2nd Floor, Appanna Building, K V Byregowda Circle, Jakkuru, Bengaluru, Karnataka 560064
