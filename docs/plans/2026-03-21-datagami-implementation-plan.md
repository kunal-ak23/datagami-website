# Datagami Next.js Rebuild — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Datagami website from Wix to Next.js 15 with full SEO/GEO optimization, unique page designs, and new pages.

**Architecture:** Component-first approach — build shared design system components (Hero, Stats, FAQ, Cards, etc.), then compose ~20 pages from them. All pages SSG. No Next.js `<Image>` — use standard `<img>` with manually optimized images.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, shadcn/ui, Lucide React, Plus Jakarta Sans, next-sitemap

**Design doc:** `docs/plans/2026-03-21-datagami-nextjs-rebuild-design.md`

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`

**Step 1: Initialize Next.js project**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Expected: Next.js 15 project scaffolded with Tailwind v4 and App Router.

**Step 2: Install dependencies**

Run:
```bash
npm install lucide-react next-sitemap
npm install -D @types/node
```

**Step 3: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init
```
Select: New York style, Slate base color, CSS variables.

**Step 4: Add shadcn/ui components we need**

Run:
```bash
npx shadcn@latest add button card accordion badge separator navigation-menu sheet
```

**Step 5: Verify dev server starts**

Run: `npm run dev`
Expected: App loads at localhost:3000

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind, shadcn/ui"
```

---

## Task 2: Design System — Tailwind Config & Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Create: `lib/fonts.ts`

**Step 1: Configure Tailwind with Datagami brand colors**

Update `tailwind.config.ts` to extend the theme with:

```ts
// Brand colors from design doc
colors: {
  primary: { DEFAULT: '#F5B731', dark: '#D4991F' },
  dark: '#1A1A1A',
  body: '#333333',
  muted: '#666666',
  surface: '#FFFFFF',
  border: '#E5E5E5',
  success: '#059669',
  // Track accent colors
  cloud: '#0369A1',
  metaverse: '#7C3AED',
  blockchain: '#EA580C',
  chipdesign: '#0D9488',
  ibm: '#0F62FE',
  clinomic: '#059669',
}
```

**Step 2: Configure Plus Jakarta Sans font**

Create `lib/fonts.ts`:
```ts
import { Plus_Jakarta_Sans } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})
```

**Step 3: Update global CSS with typography scale**

Update `app/globals.css` with:
- Base font size 16px
- H1: 48px/56px font-bold
- H2: 36px/44px font-bold
- H3: 24px/32px font-semibold
- Body: 16px/28px (line-height 1.75)
- Max prose width: 75ch

**Step 4: Verify styles render**

Run: `npm run dev`
Expected: Font loads, colors apply.

**Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css lib/fonts.ts
git commit -m "feat: configure Datagami brand colors, typography, and Plus Jakarta Sans"
```

---

## Task 3: Root Layout with Font & Metadata Defaults

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update root layout**

```tsx
import { plusJakartaSans } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Datagami - Lead Digital Technology',
    template: '%s | Datagami',
  },
  description: 'Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation',
  metadataBase: new URL('https://datagami.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Datagami',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        {/* Navbar will go here */}
        <main>{children}</main>
        {/* Footer will go here */}
      </body>
    </html>
  )
}
```

**Step 2: Add Organization + LocalBusiness JSON-LD to layout**

Create `lib/schemas/organization.ts` with Organization and two LocalBusiness schemas (Mumbai + Bengaluru offices). Inject into layout via `<script type="application/ld+json">`.

**Step 3: Verify metadata renders in HTML source**

Run: `npm run dev`, view page source
Expected: `<title>`, `<meta name="description">`, OG tags, JSON-LD present in HTML.

**Step 4: Commit**

```bash
git add app/layout.tsx lib/schemas/
git commit -m "feat: root layout with metadata defaults and Organization schema"
```

---

## Task 4: Navbar Component

**Files:**
- Create: `components/layout/navbar.tsx`
- Modify: `app/layout.tsx`

**Step 1: Build the Navbar**

Navigation items: Home, Services (dropdown), Case Studies, About Us, Gallery, Blog, Contact
CTA: "Get Started" outlined button (golden border, dark text)

Features:
- Sticky top with white background
- Logo left (Datagami infinity logo + text)
- Desktop: horizontal links with Services dropdown (Programs, Products, Hiring sub-items)
- Mobile: hamburger menu using shadcn/ui Sheet component
- Active link highlighted in golden yellow (#F5B731)
- Smooth shadow on scroll

**Step 2: Add Services dropdown content**

Programs: FinLEARN, TechLEARN, IBM ICE, Clinomic, UPI Study
Products: Sineap LMS, Total ERP
Hiring: Talent Acquisition, Student Placement, Consulting, Technical Support

**Step 3: Add to root layout**

Import and place `<Navbar />` before `<main>`.

**Step 4: Test responsive behavior**

Run: `npm run dev`, resize browser
Expected: Desktop shows full nav, mobile shows hamburger → sheet menu.

**Step 5: Commit**

```bash
git add components/layout/navbar.tsx app/layout.tsx
git commit -m "feat: responsive navbar with services dropdown and mobile menu"
```

---

## Task 5: Footer Component

**Files:**
- Create: `components/layout/footer.tsx`
- Modify: `app/layout.tsx`

**Step 1: Build the Footer**

4-column layout:
1. Logo + tagline + social media icons (placeholder links)
2. Quick Links: Home, About Us, Services, Case Studies, Blog, Contact
3. Programs: FinLEARN, TechLEARN, IBM ICE, Clinomic
4. Contact: Email (query@datagami.in), Phone (+91 97029 34397), Mumbai office, Bengaluru office

Bottom bar: © 2026 Datagami Technology Services Private Limited. All rights reserved. | Privacy Policy | Terms of Service

**Step 2: Add to root layout**

Import and place `<Footer />` after `<main>`.

**Step 3: Verify**

Run: `npm run dev`
Expected: Footer renders with all content, responsive columns.

**Step 4: Commit**

```bash
git add components/layout/footer.tsx app/layout.tsx
git commit -m "feat: footer with office locations, quick links, and legal"
```

---

## Task 6: Breadcrumbs Component

**Files:**
- Create: `components/layout/breadcrumbs.tsx`
- Create: `lib/schemas/breadcrumbs.ts`

**Step 1: Build Breadcrumbs component**

Props: `items: Array<{ label: string; href?: string }>`

Renders:
- Visual breadcrumb trail with chevron separators
- Last item is plain text (current page), others are links
- BreadcrumbList JSON-LD schema injected via `<script type="application/ld+json">`

**Step 2: Build BreadcrumbList schema generator**

```ts
export function generateBreadcrumbSchema(items: Array<{ label: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `https://datagami.in${item.href}`,
    })),
  }
}
```

**Step 3: Commit**

```bash
git add components/layout/breadcrumbs.tsx lib/schemas/breadcrumbs.ts
git commit -m "feat: breadcrumbs component with BreadcrumbList JSON-LD"
```

---

## Task 7: Section Components — Hero Variants

**Files:**
- Create: `components/sections/hero-split.tsx`
- Create: `components/sections/hero-full.tsx`
- Create: `components/sections/hero-dark.tsx`
- Create: `components/sections/hero-minimal.tsx`

**Step 1: Build HeroSplit (Home page)**

Split layout: golden yellow left panel (60%) with heading, subtext, CTA button + right panel (40%) with full-bleed image. Floating card overlay at bottom-right ("Partner in Shaping the Future of Education" + Contact Us button).

**Step 2: Build HeroFull (Services, About)**

Full-width background image/color with centered text overlay. H1 + description + optional CTA.

**Step 3: Build HeroDark (FinLEARN, program pages)**

Dark (#1A1A1A) background with golden accent elements. Program badge/icon + H1 + stats row.

**Step 4: Build HeroMinimal (Contact, Blog, Gallery)**

Simple: H1 + description on white/light background. No image.

**Step 5: Commit**

```bash
git add components/sections/
git commit -m "feat: four hero variants — split, full, dark, minimal"
```

---

## Task 8: Section Components — Stats, Features, CTA, FAQ

**Files:**
- Create: `components/sections/stats-bar.tsx`
- Create: `components/sections/feature-grid.tsx`
- Create: `components/sections/cta-section.tsx`
- Create: `components/sections/faq-section.tsx`
- Create: `components/sections/section-header.tsx`
- Create: `lib/schemas/faq.ts`

**Step 1: Build SectionHeader**

Props: `title: string`, `description?: string`, `align?: 'center' | 'left'`
Renders: H2 + optional description paragraph.

**Step 2: Build StatsBar**

Props: `stats: Array<{ value: string; label: string }>`
Renders: Row of stat cards with large number + label. Responsive: 2-col mobile, 4-col desktop.

**Step 3: Build FeatureGrid**

Props: `features: Array<{ icon: LucideIcon; title: string; description: string }>`
Renders: 2–3 column grid with icon + title + description cards.

**Step 4: Build CTASection**

Props: `title: string`, `description?: string`, `buttonText: string`, `buttonHref: string`, `variant?: 'primary' | 'dark'`
Renders: Full-width section with centered text and CTA button.

**Step 5: Build FAQSection with FAQPage schema**

Props: `faqs: Array<{ question: string; answer: string }>`
Uses shadcn/ui Accordion. Injects FAQPage JSON-LD schema.

Create `lib/schemas/faq.ts`:
```ts
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
```

**Step 6: Commit**

```bash
git add components/sections/ lib/schemas/faq.ts
git commit -m "feat: section components — stats, features, CTA, FAQ with schema"
```

---

## Task 9: Card Components

**Files:**
- Create: `components/cards/program-card.tsx`
- Create: `components/cards/product-card.tsx`
- Create: `components/cards/service-card.tsx`
- Create: `components/cards/stat-card.tsx`
- Create: `components/cards/case-study-card.tsx`
- Create: `components/cards/blog-card.tsx`

**Step 1: Build ProgramCard**

Props: `title`, `description`, `duration`, `href`, `icon`
Used on: Home, Services, program listing pages.

**Step 2: Build ProductCard**

Props: `title`, `description`, `features: string[]`, `href`
Used on: Services, product pages.

**Step 3: Build ServiceCard**

Props: `title`, `description`, `href`, `icon`
Used on: Services, hiring pages.

**Step 4: Build CaseStudyCard**

Props: `title`, `industry`, `summary`, `slug`, `image`
Used on: Case Studies listing.

**Step 5: Build BlogCard**

Props: `title`, `category`, `excerpt`, `date`, `slug`, `image`
Used on: Blog listing.

**Step 6: Commit**

```bash
git add components/cards/
git commit -m "feat: card components — program, product, service, case study, blog"
```

---

## Task 10: Content Data Files

**Files:**
- Create: `lib/data/programs.ts`
- Create: `lib/data/products.ts`
- Create: `lib/data/services.ts`
- Create: `lib/data/case-studies.ts`
- Create: `lib/data/company.ts`
- Create: `lib/data/navigation.ts`

**Step 1: Create programs data**

All program content from the crawled Wix site:
- FinLEARN: tracks (UG, PG, short-term), stats (95% placement, 500+ graduates, 50+ partners), certifications, FAQ
- TechLEARN: 4 tracks (Cloud, Metaverse, Blockchain, Chip Design) with modules, duration, skills
- IBM ICE: badge programs, tracks (Technology, Industry, Deep Technical, Short-term)
- Clinomic: 6-month program, core areas, application process, FAQ
- UPI Study: program content (needs proper content — was broken on Wix)

**Step 2: Create products data**

- Sineap LMS: features, description, benefits
- Total ERP: features, description, benefits

**Step 3: Create services data**

- Talent Acquisition, Student Placement, Strategic Consulting, Technical Support
- Each with description, process, outcomes

**Step 4: Create company data**

- About: mission, vision, history, team placeholder
- Contact: email, phones, offices
- Stats: 50+ Partner Universities, 10K+ Students, 200+ Programs

**Step 5: Create navigation data**

Centralized nav structure used by Navbar and Footer.

**Step 6: Commit**

```bash
git add lib/data/
git commit -m "feat: static content data files for all programs, products, services"
```

---

## Task 11: Home Page

**Files:**
- Modify: `app/page.tsx`
- Create: `lib/schemas/website.ts`

**Step 1: Build homepage with all sections**

Compose from components:
1. `HeroSplit` — golden yellow left + image right + floating card
2. `SectionHeader` + `ProgramCard` grid — "Our Solutions" with 3 categories
3. `CTASection` — "Ready to Transform..."
4. `FeatureGrid` — "Why Choose Us" (6 value props with icons)
5. `StatsBar` — 50+ Universities, 10K+ Students, 200+ Programs
6. Image + text section — "Comprehensive Digital Education Solutions"
7. `StatsBar` — Success Stories (85% employment increase, etc.)
8. `CTASection` — Final CTA

**Step 2: Add homepage metadata**

```ts
export const metadata: Metadata = {
  title: 'Datagami - Lead Digital Technology | EdTech Solutions for Universities & Businesses',
  description: 'Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation. 50+ Partner Universities, 10K+ Students Impacted.',
}
```

**Step 3: Add WebSite JSON-LD schema**

Create `lib/schemas/website.ts` for sitelinks search box.

**Step 4: Verify page renders all sections**

Run: `npm run dev`
Expected: Full homepage with all sections, proper H1, golden split hero.

**Step 5: Commit**

```bash
git add app/page.tsx lib/schemas/website.ts
git commit -m "feat: homepage with split hero, solutions, stats, and CTAs"
```

---

## Task 12: Services Overview Page

**Files:**
- Create: `app/services/page.tsx`

**Step 1: Build services page (NOT a homepage duplicate)**

Unique layout:
- `HeroFull` — "Our Solutions" with subtitle
- 3 tabbed/sectioned categories:
  - **Programs:** ProgramCard grid (FinLEARN, TechLEARN, IBM ICE, Clinomic, UPI Study)
  - **Products:** ProductCard grid (Sineap LMS, Total ERP)
  - **Hiring & Services:** ServiceCard grid (4 services)
- `CTASection` — "Ready to get started?"

**Step 2: Add unique metadata**

```ts
export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Datagami\'s comprehensive solutions: education programs, enterprise products, and professional services for universities and businesses.',
}
```

**Step 3: Add Breadcrumbs**

`Home > Services`

**Step 4: Verify — distinct from homepage**

Run: `npm run dev`, navigate to `/services`
Expected: Unique catalog layout, not a homepage clone.

**Step 5: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: services overview with categorized programs, products, and hiring"
```

---

## Task 13: FinLEARN Page

**Files:**
- Create: `app/services/education/finlearn/page.tsx`
- Create: `lib/schemas/course.ts`

**Step 1: Build FinLEARN page**

Unique dark hero with golden accent:
- `HeroDark` — FinLEARN badge, "Comprehensive BFSI Education Platform"
- Program tracks section: UG (CP-BFSI, IBOP), PG (MBA options), Short-term certs
- Curriculum timeline component
- Certifications gallery (4 cert cards with images)
- `StatsBar` — 95% placement, 500+ graduates, 50+ partners, ₹3.5L avg package
- "Meet Our Expert Instructors" section with placeholder cards
- "Where Our Alumni Work" section with placeholder company logos
- `FAQSection` with FinLEARN-specific FAQs
- `CTASection` — contact CTA

**Step 2: Add Course JSON-LD schema**

Create `lib/schemas/course.ts`:
```ts
export function generateCourseSchema(course: {
  name: string; description: string; provider: string;
  duration: string; url: string;
}) { /* ... */ }
```

**Step 3: Add unique metadata + breadcrumbs**

Title: "FinLEARN - BFSI Education Programs"
Breadcrumbs: Home > Services > Education > FinLEARN

**Step 4: Commit**

```bash
git add app/services/education/finlearn/ lib/schemas/course.ts
git commit -m "feat: FinLEARN page with dark hero, tracks, stats, FAQ, and Course schema"
```

---

## Task 14: TechLEARN Hub + Sub-pages

**Files:**
- Create: `app/services/education/techlearn/page.tsx`
- Create: `app/services/education/techlearn/cloud-computing/page.tsx`
- Create: `app/services/education/techlearn/metaverse/page.tsx`
- Create: `app/services/education/techlearn/blockchain/page.tsx`
- Create: `app/services/education/techlearn/chip-design/page.tsx`

**Step 1: Build TechLEARN hub page**

Tech-themed hero with circuit pattern overlay:
- `HeroDark` with tech grid pattern — "Technology Training Programs"
- 4 track cards with accent colors:
  - Cloud Computing (blue #0369A1) — 11 months
  - Metaverse (purple #7C3AED) — 11 months
  - Blockchain (orange #EA580C) — 6 months
  - Chip Design (teal #0D9488) — 12 months
- Comparison table (duration, modules, key skills)
- `CTASection` — contact

**Step 2: Build Cloud Computing sub-page**

- Hero with blue accent overlay
- 14 modules breakdown (AWS, Azure, GCP, CCNA, MCSA, RedHat)
- Skills gained grid
- Career outcomes
- "100% Placement Guarantee" badge
- FAQ + CTA

**Step 3: Build Metaverse sub-page**

- Hero with purple accent overlay
- 6 modules (3D design, XR, animation, motion graphics, VFX, UI/UX)
- Skills gained + career outcomes + FAQ + CTA

**Step 4: Build Blockchain sub-page**

- Hero with orange accent overlay
- 5 modules (Solidity, smart contracts, DApps, Web3)
- Skills + careers + FAQ + CTA

**Step 5: Build Chip Design sub-page**

- Hero with teal accent overlay
- 4 modules (VLSI, FPGA, C/C++, EDA tools)
- Skills + careers + FAQ + CTA

**Step 6: Add metadata + breadcrumbs + Course schemas for each**

Each sub-page:
- Unique title/description
- Breadcrumbs: Home > Services > Education > TechLEARN > [Track]
- Course JSON-LD

**Step 7: Commit**

```bash
git add app/services/education/techlearn/
git commit -m "feat: TechLEARN hub + 4 track sub-pages with themed heroes"
```

---

## Task 15: IBM ICE Page

**Files:**
- Create: `app/services/education/ibm-ice/page.tsx`

**Step 1: Build IBM ICE page**

- Hero with IBM blue (#0F62FE) accent alongside golden brand
- Badge showcase section
- Stats: 15+ badge programs, 10000+ certified, 12+ partner institutes
- 4 track categories in horizontal scrollable rows:
  - Technology (11 tracks)
  - Industry (6 tracks)
  - Deep Technical Skills (8 tracks)
  - Short-term certificates (60+ programs)
- Partner institutes section
- `CTASection` — "Schedule Consultation"

**Step 2: Add metadata + breadcrumbs + Course schema**

Title: "IBM ICE - Innovation Centre of Excellence Badge Programs"
Breadcrumbs: Home > Services > Education > IBM ICE

**Step 3: Commit**

```bash
git add app/services/education/ibm-ice/
git commit -m "feat: IBM ICE page with badge showcase and track categories"
```

---

## Task 16: Clinomic Page

**Files:**
- Create: `app/services/education/clinomic/page.tsx`

**Step 1: Build Clinomic page**

- Hero with green/clinical feel (#059669) + golden accents
- Program overview: 6-month clinical research program
- Core areas: Clinical Research Methodology, GCP, Data Management, Regulatory Affairs
- Application process: 4-step timeline component
- Stats: 500+ placements, 95% placement rate
- `FAQSection` with Clinomic-specific FAQs
- Contact: query@datagami.in, verified phone numbers
- `CTASection`

**Step 2: Add metadata + breadcrumbs + Course schema**

Title: "Clinomic - Clinical Research Education"
Breadcrumbs: Home > Services > Education > Clinomic

**Step 3: Commit**

```bash
git add app/services/education/clinomic/
git commit -m "feat: Clinomic page with clinical theme, timeline, and stats"
```

---

## Task 17: UPI Study Page (Fixed)

**Files:**
- Create: `app/services/education/upi-study/page.tsx`

**Step 1: Build UPI Study page (was broken on Wix)**

- Standalone under education (NOT under TechLEARN)
- Unique hero for financial literacy/UPI content
- Program structure and modules
- Skills and career outcomes
- `CTASection`

**Step 2: Add metadata + breadcrumbs + Course schema**

Title: "UPI Study - Digital Payments Education"
Breadcrumbs: Home > Services > Education > UPI Study

**Step 3: Commit**

```bash
git add app/services/education/upi-study/
git commit -m "feat: UPI Study page — fixed and standalone under education"
```

---

## Task 18: About Us Page (NEW)

**Files:**
- Create: `app/about/page.tsx`

**Step 1: Build About page**

- `HeroFull` — team/office hero image, "About Datagami"
- Mission & Vision section (two-column)
- Company timeline/history (vertical timeline component)
- Team section (placeholder cards with name/role/photo slots)
- Partners/Clients logo grid (placeholder logos)
- Two office locations with embedded map or static map image
- `CTASection` — "Partner With Us"

**Step 2: Add metadata**

Title: "About Us"
Description: "Datagami Technology Services — empowering institutions and businesses through technology, partnerships, and innovation since [year]. Mumbai & Bengaluru."

**Step 3: Commit**

```bash
git add app/about/
git commit -m "feat: About Us page with mission, timeline, team, and locations"
```

---

## Task 19: Contact Page

**Files:**
- Create: `app/contact/page.tsx`

**Step 1: Build Contact page**

- `HeroMinimal` — "Get in Touch"
- Two-column layout:
  - Left: Contact form (Name, Email, Phone, Organization, Message, Submit)
  - Right: Office cards (Mumbai + Bengaluru with addresses), email, phone numbers, hours (Mon-Fri 9-6 IST)
- 3-step process: Initial Consultation → Customized Proposal → Partnership Launch
- Response time: "Within 24 hours"

Note: Form is frontend only — no backend submission needed now. Can add later.

**Step 2: Add metadata**

Title: "Contact Us"
Description: "Get in touch with Datagami. Mumbai and Bengaluru offices. Email: query@datagami.in, Phone: +91 97029 34397."

**Step 3: Commit**

```bash
git add app/contact/
git commit -m "feat: contact page with form, office locations, and process steps"
```

---

## Task 20: Case Studies Page (NEW)

**Files:**
- Create: `app/case-studies/page.tsx`
- Create: `app/case-studies/[slug]/page.tsx`
- Add to: `lib/data/case-studies.ts`

**Step 1: Create sample case study data**

2-3 placeholder case studies with:
- Title, industry tag, summary, problem, solution, results (with metrics)
- Based on existing success story data (State University System, etc.)

**Step 2: Build case studies listing page**

- `HeroMinimal` — "Case Studies"
- Grid of `CaseStudyCard` components
- Industry filter tags

**Step 3: Build individual case study page**

- Hero with case study title + industry badge
- Problem → Solution → Results sections
- Stats/metrics visualization
- Related case studies at bottom
- `CTASection`

**Step 4: Add metadata + breadcrumbs**

Listing: "Case Studies | Proven Success Stories"
Individual: "[Case Study Title] | Case Study"

**Step 5: Commit**

```bash
git add app/case-studies/ lib/data/case-studies.ts
git commit -m "feat: case studies listing and individual pages"
```

---

## Task 21: Gallery Page (NEW)

**Files:**
- Create: `app/gallery/page.tsx`

**Step 1: Build Gallery page**

- `HeroMinimal` — "Gallery"
- Category filter tabs: All, Events, Campus, Workshops
- Responsive grid of image cards (placeholder images)
- Lightbox on click (use CSS-only modal or simple state)
- All images use `<img>` with alt text, width, height

**Step 2: Add metadata**

Title: "Gallery"
Description: "Explore Datagami's events, campus facilities, and workshop moments."

**Step 3: Commit**

```bash
git add app/gallery/
git commit -m "feat: gallery page with category filters and image grid"
```

---

## Task 22: Blog Page (NEW — Placeholder)

**Files:**
- Create: `app/blog/page.tsx`

**Step 1: Build Blog listing page**

- `HeroMinimal` — "Blog"
- Featured post hero card at top
- Grid of `BlogCard` components (3-4 placeholder posts)
- Category filter tabs
- Each card links to `#` (individual blog pages are future work)

**Step 2: Add metadata**

Title: "Blog"
Description: "Insights on education technology, digital transformation, and industry trends from Datagami."

**Step 3: Commit**

```bash
git add app/blog/
git commit -m "feat: blog listing page with placeholder posts"
```

---

## Task 23: Product Pages — Sineap LMS & Total ERP (NEW)

**Files:**
- Create: `app/services/products/sineap-lms/page.tsx`
- Create: `app/services/products/total-erp/page.tsx`

**Step 1: Build Sineap LMS page**

- Hero with product mockup/screenshot placeholder
- Key features grid (6-8 features with icons)
- "How It Works" — 3-step process
- Integration partners section
- `CTASection` — "Request a Demo"

**Step 2: Build Total ERP page**

Same template, different content:
- ERP-specific features
- Process steps
- Integration section
- Demo CTA

**Step 3: Add metadata + breadcrumbs for each**

Sineap: "Sineap LMS - Learning Management System"
Total ERP: "Total ERP - Enterprise Resource Planning"
Breadcrumbs: Home > Services > Products > [Product]

**Step 4: Commit**

```bash
git add app/services/products/
git commit -m "feat: product pages for Sineap LMS and Total ERP"
```

---

## Task 24: Hiring Service Pages (NEW)

**Files:**
- Create: `app/services/hiring/talent-acquisition/page.tsx`
- Create: `app/services/hiring/student-placement/page.tsx`
- Create: `app/services/hiring/consulting/page.tsx`
- Create: `app/services/hiring/technical-support/page.tsx`

**Step 1: Build 4 hiring service pages**

Each follows a consistent but distinct layout:
- `HeroFull` with service-specific imagery
- "What We Do" description section
- Process steps (3-4 steps)
- Results/impact stats
- `CTASection` — "Contact Us"

Content differentiation:
- **Talent Acquisition:** recruitment process, industries served
- **Student Placement:** university partnerships, placement stats
- **Strategic Consulting:** advisory areas, methodology
- **Technical Support:** support tiers, SLA, technologies covered

**Step 2: Add metadata + breadcrumbs for each**

Breadcrumbs: Home > Services > Hiring > [Service]

**Step 3: Commit**

```bash
git add app/services/hiring/
git commit -m "feat: four hiring service pages — talent, placement, consulting, support"
```

---

## Task 25: SEO Finalization — robots.txt, Sitemap, Final Checks

**Files:**
- Create: `public/robots.txt`
- Create: `next-sitemap.config.js`
- Modify: `package.json` (add postbuild script)

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://datagami.in/sitemap.xml
```

**Step 2: Configure next-sitemap**

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://datagami.in',
  generateRobotsTxt: false, // We have our own
  generateIndexSitemap: false,
}
```

Add to package.json scripts: `"postbuild": "next-sitemap"`

**Step 3: Verify build succeeds and sitemap generates**

Run: `npm run build`
Expected: All pages statically generated, sitemap.xml created in `public/`.

**Step 4: SEO audit checklist**

Verify for every page:
- [ ] Unique `<title>` tag
- [ ] Unique `<meta name="description">`
- [ ] Exactly one `<h1>`
- [ ] OG tags present
- [ ] JSON-LD structured data where applicable
- [ ] Breadcrumbs on depth > 1 pages
- [ ] All images have alt text, width, height
- [ ] No Next.js `<Image>` component used anywhere

**Step 5: Commit**

```bash
git add public/robots.txt next-sitemap.config.js package.json
git commit -m "feat: robots.txt, sitemap config, and SEO finalization"
```

---

## Task 26: Final Build Verification

**Step 1: Run production build**

Run: `npm run build`
Expected: All pages generate successfully with no errors.

**Step 2: Test production server**

Run: `npm run start`
Navigate through all pages, verify:
- All pages load
- Navigation works (desktop + mobile)
- Breadcrumbs render on sub-pages
- Footer renders on all pages
- No console errors

**Step 3: View HTML source for SEO**

Check 3-4 representative pages in view-source:
- Full HTML content rendered (not empty body)
- Meta tags present and unique
- JSON-LD present
- H1 present

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final build verification — all pages passing"
```

---

## Summary

| Task | Description | Pages/Components |
|------|-------------|------------------|
| 1 | Project scaffolding | Next.js + Tailwind + shadcn/ui |
| 2 | Design system config | Colors, fonts, global styles |
| 3 | Root layout | Metadata, Organization schema |
| 4 | Navbar | Responsive nav with dropdown |
| 5 | Footer | 4-column with offices |
| 6 | Breadcrumbs | Visual + JSON-LD |
| 7 | Hero variants | Split, full, dark, minimal |
| 8 | Section components | Stats, features, CTA, FAQ |
| 9 | Card components | Program, product, service, case study, blog |
| 10 | Content data | All static content |
| 11 | Home page | 8 sections |
| 12 | Services overview | Categorized catalog |
| 13 | FinLEARN | Dark hero, tracks, certs |
| 14 | TechLEARN + 4 subs | Hub + cloud/meta/block/chip |
| 15 | IBM ICE | Badge showcase |
| 16 | Clinomic | Clinical theme |
| 17 | UPI Study | Fixed standalone |
| 18 | About Us | NEW — mission, team, timeline |
| 19 | Contact | Form + offices |
| 20 | Case Studies | NEW — listing + individual |
| 21 | Gallery | NEW — masonry grid |
| 22 | Blog | NEW — placeholder listing |
| 23 | Products | NEW — Sineap LMS, Total ERP |
| 24 | Hiring Services | NEW — 4 service pages |
| 25 | SEO finalization | robots.txt, sitemap |
| 26 | Build verification | Final checks |
