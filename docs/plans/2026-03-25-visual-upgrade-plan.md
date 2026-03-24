# Visual Upgrade — Phemesoft-Inspired Design Enhancements

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the Datagami website's visual design with branded shadows, gradient text, glass morphism, aurora hero, animated nav, dark mode, and more — all using Datagami's golden yellow (#F5B731) branding.

**Architecture:** Extend the existing Tailwind theme with brand-tinted utilities (shadows, gradients, glass). Add dark mode via `class` strategy. Upgrade hero with CSS aurora animation. Add Leaflet map to contact. All changes are CSS/component-level — no backend changes.

**Tech Stack:** Tailwind CSS v4 (custom utilities), Framer Motion (existing), Leaflet.js (new for map), Plus Jakarta Sans + Playfair Display (serif pairing)

---

## Task 1: Branded Shadow System + Glass Morphism Utilities

**Files:**
- Modify: `app/globals.css`

Add custom Tailwind utilities for Datagami brand-tinted shadows and glass morphism:

```css
/* Brand-tinted shadow system (golden glow) */
@utility shadow-brand-sm {
  box-shadow: 0 2px 8px -2px hsl(43 90% 55% / 0.1);
}
@utility shadow-brand-md {
  box-shadow: 0 8px 24px -8px hsl(43 90% 55% / 0.15);
}
@utility shadow-brand-lg {
  box-shadow: 0 16px 48px -12px hsl(43 90% 55% / 0.2);
}
@utility shadow-brand-glow {
  box-shadow: 0 0 40px hsl(43 90% 55% / 0.3);
}

/* Glass morphism */
@utility glass {
  background: hsl(0 0% 100% / 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
@utility glass-dark {
  background: hsl(0 0% 0% / 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Gradient text utility */
@utility text-gradient {
  background: linear-gradient(135deg, #F5B731, #D4991F, #F5B731);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Commit:** `feat: add branded shadow system, glass morphism, and gradient text utilities`

---

## Task 2: Dark Mode Theme

**Files:**
- Modify: `app/globals.css` (add dark mode CSS variables)
- Modify: `app/layout.tsx` (add dark mode class support)
- Create: `components/layout/theme-toggle.tsx` (dark/light toggle button)
- Modify: `components/layout/navbar.tsx` (add theme toggle)

### Dark mode colors (golden-tinted, not pure black):
```css
.dark {
  --background: hsl(40 20% 6%);        /* warm dark, not pure black */
  --foreground: hsl(40 10% 95%);
  --color-dark: hsl(40 10% 95%);       /* text becomes light */
  --color-body: hsl(40 10% 80%);
  --color-muted-brand: hsl(40 10% 60%);
  --color-surface: hsl(40 15% 10%);
  --color-border-custom: hsl(40 15% 18%);
}
```

Theme toggle: Sun/Moon icon button in navbar, stores preference in localStorage, applies `.dark` class to `<html>`.

**Commit:** `feat: dark mode with golden-tinted dark theme and toggle`

---

## Task 3: Serif + Sans Font Pairing

**Files:**
- Modify: `lib/fonts.ts` (add Playfair Display)
- Modify: `app/layout.tsx` (add font variable)
- Modify: `app/globals.css` (add `--font-heading` and heading styles)

Add Playfair Display for H1 and H2 headings only (Plus Jakarta Sans stays for everything else):
```ts
import { Playfair_Display } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})
```

Update heading styles in globals.css:
```css
h1, h2 {
  font-family: var(--font-playfair), serif;
}
```

**Commit:** `feat: add Playfair Display serif font for headings`

---

## Task 4: Animated Nav Underline + Glass Navbar

**Files:**
- Modify: `components/layout/navbar.tsx`

### Changes:
1. **Glass effect on scroll**: When scrolled, navbar gets `glass` class (backdrop blur + semi-transparent) instead of solid white
2. **Animated underline on hover**: Each nav link gets an underline that grows from 0 to full width on hover:
```tsx
<span className="absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 w-0 group-hover:w-full" />
```
3. **Active link**: Full underline + brand color text (already exists, keep it)

**Commit:** `feat: glass navbar with animated underline hover effect`

---

## Task 5: Card Hover Lift + Brand Glow

**Files:**
- Modify: `components/cards/program-card.tsx`
- Modify: `components/cards/product-card.tsx`
- Modify: `components/cards/service-card.tsx`
- Modify: `components/cards/case-study-card.tsx`
- Modify: `components/cards/blog-card.tsx`
- Modify: `components/sections/feature-grid.tsx`

Update ALL card hover effects from simple `hover:shadow-lg` to:
```
hover:-translate-y-1 hover:shadow-brand-lg transition-all duration-300
```

For cards with background images, add glow on hover:
```
hover:shadow-brand-glow
```

**Commit:** `feat: card hover lift + branded glow shadows`

---

## Task 6: Aurora Animated Hero Background

**Files:**
- Create: `components/sections/aurora-background.tsx`
- Modify: `components/sections/hero-split.tsx`

Create an aurora background component with animated gradient blobs using Datagami's golden colors:

```css
@keyframes aurora {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}
```

Three floating gradient circles (golden/amber tones) with blur and low opacity, animated with different delays. Add `prefers-reduced-motion` check.

Integrate into the HeroSplit component — golden panel gets subtle aurora animation behind the content.

**Commit:** `feat: aurora animated background for hero section`

---

## Task 7: Gradient Text on Key Headings

**Files:**
- Modify: `app/page.tsx` (homepage headings)
- Modify: `components/sections/section-header.tsx` (optional gradient prop)
- Modify: `components/sections/hero-split.tsx`
- Modify: `components/sections/hero-dark.tsx`

Add `text-gradient` class to key headings:
- Homepage H1 (or key words within it)
- Section headers that benefit from emphasis
- Stats numbers
- Hero accent words

Add a `gradient` prop to SectionHeader: when true, applies `text-gradient` to the H2.

Don't overuse — apply to 3-5 headings max across homepage for impact.

**Commit:** `feat: gradient text on key headings for visual impact`

---

## Task 8: Varied CTA Text Across Pages

**Files:**
- Modify: `app/page.tsx`
- Modify: All program pages
- Modify: All product/service pages

Replace repeated CTAs with contextual variations:

| Page | Current CTA | New CTA |
|------|-------------|---------|
| Homepage CTA 1 | "Ready to Transform..." | "Ready to Transform Your Institution?" |
| Homepage CTA 2 | "Partner With Us Today" | "Let's Build the Future Together" |
| Services | "Ready to Get Started?" | "Find Your Perfect Solution" |
| FinLEARN | "Start Your Career..." | "Launch Your Finance Career" |
| TechLEARN | "Ready to Master..." | "Start Your Tech Journey" |
| IBM ICE | "Schedule Consultation" | "Explore IBM Badge Programs" |
| Clinomic | "Start Your Clinical..." | "Begin Your Research Career" |
| Contact | N/A | "Discuss Your Needs" (add if missing) |
| Products | "Request a Demo" | "See It in Action" |
| Hiring | "Get Started" | "Let's Connect" |

**Commit:** `feat: contextual CTA text variations across all pages`

---

## Task 9: SVG Background Patterns

**Files:**
- Modify: `app/globals.css`
- Modify: Hero sections on key pages

Add a subtle SVG cross/dot pattern utility:

```css
@utility bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F5B731' fill-opacity='0.05'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23F5B731' stroke-opacity='0.05' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E");
}
```

Apply to hero sections and alternating page sections for subtle texture.

**Commit:** `feat: subtle SVG background patterns on hero sections`

---

## Task 10: Contact Map (Leaflet.js)

**Files:**
- Create: `components/sections/office-map.tsx`
- Modify: `app/contact/page.tsx`

Install Leaflet:
```bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

Create a client component showing both Mumbai and Bengaluru offices on a map:
- Mumbai: 19.0760° N, 72.8777° E (Saki Naka area)
- Bengaluru: 13.0465° N, 77.5853° E (Jakkuru area)
- Custom golden markers
- Popup with office address on click
- Import leaflet CSS

Add to contact page below the office cards.

**Commit:** `feat: Leaflet map showing Mumbai and Bengaluru offices`

---

## Task 11: Industries Section on Homepage

**Files:**
- Create: `components/sections/industries-grid.tsx`
- Modify: `app/page.tsx`

Add an "Industries We Serve" section to the homepage showing 8 industries:
- Healthcare & Life Sciences
- Banking & Financial Services (BFSI)
- Information Technology
- Education & EdTech
- Manufacturing
- Retail & E-commerce
- Government & Public Sector
- Telecommunications

Each as a card with Lucide icon + name + brief description. Use the brand shadow and hover glow effects.

Place after the "Why Choose Us" section on the homepage.

**Commit:** `feat: Industries We Serve section on homepage`

---

## Task 12: Build Verification + Dark Mode Testing

**Step 1:** Run `npm run build` and fix any errors.

**Step 2:** Test dark mode toggle works on all pages.

**Step 3:** Verify all new visual effects (shadows, gradient text, glass nav, aurora hero, card hovers) render correctly.

**Step 4:** Check `prefers-reduced-motion` disables aurora and scroll animations.

**Commit:** `chore: build verification for visual upgrade`

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Branded shadows + glass morphism + gradient text utilities |
| 2 | Dark mode with golden-tinted theme |
| 3 | Playfair Display serif font for headings |
| 4 | Glass navbar + animated underline hover |
| 5 | Card hover lift + brand glow |
| 6 | Aurora animated hero background |
| 7 | Gradient text on key headings |
| 8 | Varied CTA text across pages |
| 9 | SVG background patterns |
| 10 | Contact map with Leaflet.js |
| 11 | Industries section on homepage |
| 12 | Build verification |
