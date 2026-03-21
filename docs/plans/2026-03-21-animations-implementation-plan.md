# Animations, Carousels & Hero Images — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add scroll-triggered animations, carousels (testimonials, logos, programs), and Gemini-generated hero images to make the Datagami website feel polished and dynamic.

**Architecture:** Framer Motion for scroll-reveal animations via reusable wrapper components. Embla Carousel for testimonials, partner logo ticker, and program showcases. Counter animation for stats. All animations respect `prefers-reduced-motion`. Gemini API generates better hero images for 7 pages.

**Tech Stack:** Framer Motion, Embla Carousel (`embla-carousel-react`, `embla-carousel-autoplay`), Gemini 2.5 Flash Image API

**Design doc:** `docs/plans/2026-03-21-animations-design.md`

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Framer Motion**

```bash
npm install framer-motion
```

**Step 2: Install Embla Carousel**

```bash
npm install embla-carousel-react embla-carousel-autoplay
```

**Step 3: Verify**

```bash
npm ls framer-motion embla-carousel-react
```

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install Framer Motion and Embla Carousel"
```

---

## Task 2: Create Motion Wrapper Components

**Files:**
- Create: `components/motion/fade-in.tsx`
- Create: `components/motion/stagger-children.tsx`
- Create: `components/motion/counter.tsx`

### FadeIn Component (`components/motion/fade-in.tsx`)

"use client" component that wraps children with a scroll-triggered fade-up animation.

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### StaggerChildren Component (`components/motion/stagger-children.tsx`)

Wraps a container where children animate in one by one.

```tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function StaggerChildren({ children, className, staggerDelay = 0.1 }: StaggerChildrenProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}
```

### Counter Component (`components/motion/counter.tsx`)

Animated count-up for stats numbers.

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  target: string // e.g., "50+", "10K+", "95%", "₹3.5L"
  className?: string
}

export function Counter({ target, className }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  // Extract numeric part
  const numericMatch = target.match(/[\d.]+/)
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0
  const prefix = target.substring(0, target.indexOf(numericMatch?.[0] || ''))
  const suffix = target.substring((target.indexOf(numericMatch?.[0] || '') + (numericMatch?.[0]?.length || 0)))

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 40
    const increment = numericValue / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  return (
    <span ref={ref} className={className}>
      {prefix}{isInView ? (Number.isInteger(numericValue) ? count : count.toFixed(1)) : '0'}{suffix}
    </span>
  )
}
```

**Commit:**

```bash
git add components/motion/
git commit -m "feat: motion wrapper components — FadeIn, StaggerChildren, Counter"
```

---

## Task 3: Add Animations to Homepage

**Files:**
- Modify: `app/page.tsx`

Wrap each homepage section with animation components:

1. **Hero heading + subtitle**: `<FadeIn>` with 0.2s delay
2. **Hero image**: `<FadeIn direction="right" delay={0.3}>`
3. **Hero floating card**: `<FadeIn delay={0.6}>`
4. **Solutions section header**: `<FadeIn>`
5. **Program/Product/Service card grids**: Wrap grid in `<StaggerChildren>`, each card in `<StaggerItem>`
6. **CTA sections**: `<FadeIn>`
7. **Why Choose Us feature grid**: `<StaggerChildren>` + `<StaggerItem>`
8. **Stats bars**: Replace static numbers with `<Counter target="50+" />` etc.
9. **Digital Education section**: `<FadeIn direction="left">` for text, `<FadeIn direction="right">` for image
10. **Success Stories stats**: `<Counter>` for each stat

IMPORTANT:
- Import motion components at top
- The page itself remains a server component — wrap sections in client motion components
- `prefers-reduced-motion` is handled by Framer Motion automatically
- Don't animate the navbar or footer

**Commit:**

```bash
git add app/page.tsx
git commit -m "feat: add scroll-triggered animations to homepage"
```

---

## Task 4: Add Animations to All Other Public Pages

**Files:**
- Modify: `app/services/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/services/education/finlearn/page.tsx`
- Modify: `app/services/education/techlearn/page.tsx`
- Modify: `app/services/education/techlearn/cloud-computing/page.tsx`
- Modify: `app/services/education/techlearn/metaverse/page.tsx`
- Modify: `app/services/education/techlearn/blockchain/page.tsx`
- Modify: `app/services/education/techlearn/chip-design/page.tsx`
- Modify: `app/services/education/ibm-ice/page.tsx`
- Modify: `app/services/education/clinomic/page.tsx`
- Modify: `app/services/education/upi-study/page.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/gallery/page.tsx`
- Modify: `app/case-studies/page.tsx`
- Modify: `app/services/products/sineap-lms/page.tsx`
- Modify: `app/services/products/total-erp/page.tsx`
- Modify: `app/services/hiring/talent-acquisition/page.tsx`
- Modify: `app/services/hiring/student-placement/page.tsx`
- Modify: `app/services/hiring/consulting/page.tsx`
- Modify: `app/services/hiring/technical-support/page.tsx`

### Animation Pattern for ALL pages:

Apply consistently across every page:

1. **Hero section content** (heading, subtitle): `<FadeIn>`
2. **Section headers**: `<FadeIn>`
3. **Card grids**: `<StaggerChildren>` + `<StaggerItem>`
4. **Stats bars**: Replace numbers with `<Counter>`
5. **CTA sections**: `<FadeIn>`
6. **Two-column layouts**: `<FadeIn direction="left">` for left, `<FadeIn direction="right">` for right
7. **FAQ sections**: `<FadeIn>`
8. **Timeline/process steps**: `<StaggerChildren>` + `<StaggerItem>`

Read each page file first to understand its structure before adding animations. Don't break existing functionality.

DO NOT animate admin pages.

**Commit:**

```bash
git add app/
git commit -m "feat: add scroll-triggered animations to all public pages"
```

---

## Task 5: Build Carousel Components

**Files:**
- Create: `components/carousels/testimonial-carousel.tsx`
- Create: `components/carousels/logo-ticker.tsx`
- Create: `components/carousels/program-carousel.tsx`

### Testimonial Carousel (`testimonial-carousel.tsx`)

"use client" component using Embla Carousel:
- Shows 1 card on mobile, 2 on md, 3 on lg
- Auto-scrolls every 4 seconds (via embla-carousel-autoplay)
- Pause on hover
- Dot indicators below
- Each card: student photo (circular), name, program badge, quote, star rating
- Props: `testimonials: Array<{ studentName, program, quote, rating, photoUrl }>`
- Styled with brand colors, shadow cards

### Logo Ticker (`logo-ticker.tsx`)

"use client" component — infinite horizontal scroll of partner/client logos:
- Continuous auto-scroll animation (CSS-based, not Embla — simpler for infinite)
- Duplicate the logos array for seamless loop
- Grayscale logos, color on hover
- Props: `logos: Array<{ name: string; src?: string }>` (supports placeholder gray boxes if no src)
- `@keyframes scroll` animation with `prefers-reduced-motion` check

### Program Carousel (`program-carousel.tsx`)

"use client" component using Embla Carousel:
- Horizontal scrollable cards
- Shows 1 on mobile, 2 on md, 3 on lg
- Navigation arrows (left/right) — use Lucide ChevronLeft/ChevronRight
- No auto-scroll
- Props: generic — accepts `children` so any cards can be placed inside

### Commit:

```bash
git add components/carousels/
git commit -m "feat: carousel components — testimonial, logo ticker, program showcase"
```

---

## Task 6: Integrate Carousels into Pages

**Files:**
- Modify: `app/page.tsx` (testimonials + logo ticker)
- Modify: `app/services/page.tsx` (program carousel)
- Modify: `app/about/page.tsx` (logo ticker in "Trusted By")
- Modify: `components/sections/testimonial-carousel.tsx` (update to use new Embla carousel)

### Homepage:
1. Replace the existing testimonial section with the new `<TestimonialCarousel>` (Embla-based)
2. Add `<LogoTicker>` in the "Trusted By" section (replace static partner logo placeholders)
3. Keep existing sections, just swap the components

### Services page:
1. Wrap the program cards section with `<ProgramCarousel>` instead of a static grid

### About page:
1. Replace the "Trusted By" placeholder grid with `<LogoTicker>`

### Update testimonial-carousel.tsx:
The existing `components/sections/testimonial-carousel.tsx` server component fetches from DB. Update it to:
1. Fetch testimonials from DB (keep server data fetching)
2. Pass data to the new Embla-based client carousel component

### Commit:

```bash
git add app/ components/
git commit -m "feat: integrate carousels into homepage, services, and about pages"
```

---

## Task 7: Generate Hero Images via Gemini API

**Step 1: Generate 7 hero images**

Use the Gemini API (key: from environment, model: `gemini-2.5-flash-image`) to generate hero images. Create and run a script similar to the existing `scripts/generate-assets.sh`.

Images to generate:

| # | Output Path | Prompt |
|---|-------------|--------|
| 1 | `public/images/hero/hero-services.png` | "Panoramic wide shot of diverse Indian professionals and university students collaborating in a modern glass-walled office, laptops and whiteboards visible, warm natural lighting, professional corporate photography, 16:9 aspect ratio" |
| 2 | `public/images/hero/hero-finlearn.png` | "Modern financial training classroom in India, students at Bloomberg-style terminals, stock market displays on wall screens, professional BFSI education environment, warm lighting" |
| 3 | `public/images/hero/hero-techlearn.png` | "Students working with cloud servers, VR headsets, and circuit boards in a futuristic tech lab, blue and purple ambient lighting, modern technology education" |
| 4 | `public/images/hero/hero-ibm-ice.png` | "Modern IBM innovation lab with students working on AI projects, IBM blue accents, large screens showing data analytics, professional technology environment" |
| 5 | `public/images/hero/hero-clinomic.png` | "Clinical research laboratory, researchers in lab coats using modern medical equipment, microscopes and digital displays, clean white and green environment" |
| 6 | `public/images/hero/hero-about.png` | "Professional team meeting in a modern Indian corporate boardroom, diverse team of 6-8 people, golden hour light through floor-to-ceiling windows, leadership discussion" |
| 7 | `public/images/hero/hero-contact.png` | "Minimalist modern office reception area with warm wood accents, comfortable seating, clean professional environment, natural lighting" |

Use the same Gemini API approach as `scripts/generate-assets.sh` (model: `gemini-2.5-flash-image`, endpoint: `generateContent` with `responseModalities: ["IMAGE", "TEXT"]`).

GEMINI_API_KEY: `AIzaSyBu84KTaN90F57_IYMzQ6jAmk0Iw_jjU5s`

Rate limit: 3-second delay between requests (stay in free tier).

**Step 2: Update pages to use new hero images**

Update hero sections on these pages to reference the new images:
- `app/services/page.tsx`: HeroFull with `/images/hero/hero-services.png` background
- `app/services/education/finlearn/page.tsx`: Add image to HeroDark
- `app/services/education/techlearn/page.tsx`: Add image to HeroDark
- `app/services/education/ibm-ice/page.tsx`: Add image to HeroDark
- `app/services/education/clinomic/page.tsx`: Add image to HeroDark
- `app/about/page.tsx`: HeroFull with `/images/hero/hero-about.png`
- `app/contact/page.tsx`: Add subtle background image

Note: The HeroDark component may need a prop for a background image. Check if it supports `backgroundImage` — if not, add it inline on the page or update the component.

**Step 3: Commit**

```bash
git add public/images/hero/ app/ components/sections/
git commit -m "feat: Gemini-generated hero images for services, programs, about, contact"
```

---

## Task 8: Build Verification

**Step 1: Run production build**

```bash
npm run build
```

Fix any errors (common: client component boundaries, missing "use client" directives).

**Step 2: Verify animations work**

Run dev server, check:
- Homepage sections animate on scroll
- Stats count up
- Carousels auto-scroll and respond to interaction
- Animations disabled when `prefers-reduced-motion` is set
- No layout shifts during animations
- Mobile responsive

**Step 3: Verify hero images render**

Check all 7 pages have their new hero images loading properly.

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: build verification for animations and carousels"
```

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Install Framer Motion + Embla Carousel |
| 2 | Create motion wrapper components (FadeIn, StaggerChildren, Counter) |
| 3 | Add animations to homepage |
| 4 | Add animations to all other public pages |
| 5 | Build carousel components (testimonial, logo ticker, program) |
| 6 | Integrate carousels into pages |
| 7 | Generate hero images via Gemini API |
| 8 | Build verification |
