# Animations, Carousels & Hero Image Enhancements — Design

**Date:** 2026-03-21
**Status:** Approved

## Scope

1. Framer Motion scroll-triggered animations across all public pages
2. Embla Carousel for testimonials, partner logos, and program showcases
3. Gemini API-generated hero images for 6 pages
4. Counter animation for stats numbers
5. Respects prefers-reduced-motion

## Animation Rules

- Duration: 0.5-0.7s for reveals, 0.2s for micro-interactions
- Ease: ease-out for entering elements
- viewport: { once: true } — animate only on first view
- Use transform/opacity only (GPU-accelerated)
- No animations on admin panel, forms, or nav interactions

## Carousels (Embla Carousel)

- Homepage testimonials: 3 visible, auto-scroll 4s
- Homepage partner logos: infinite ticker
- Services programs: manual horizontal scroll
- Program certifications: manual carousel

## Hero Images to Generate (Gemini)

- Services, FinLEARN, TechLEARN, IBM ICE, Clinomic, About, Contact
