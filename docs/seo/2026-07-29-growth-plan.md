# Datagami Organic Search Growth Plan

Updated: 29 July 2026

## Baseline

Search Console access on 29 July shows 51 clicks, 503 impressions, 10.1% CTR
and average position 10.8. The selected window is three months, but Search
Console only contains data from 18–27 July. This is an early indexing baseline,
not a mature three-month performance history.

At least 27 of the 51 query-level clicks are from the three visible Datagami
brand variations. The remaining query table is almost entirely zero-click,
low-volume discovery. The main constraint is qualified non-branded reach, not
site-wide CTR.

Current near-term opportunities:

| Query or page | Search Console signal | Action |
| --- | --- | --- |
| `ibm ice` | 20 impressions, position 6.7, no query-level clicks | Lead the title and first screen with the exact full name and strengthen university-program intent. |
| IBM ICE page | 105 impressions across both hosts, 1 click | Consolidate hosts and improve the snippet before expanding the page further. |
| Total ERP page | 48 impressions, position 9.3, no clicks | Retain the exact product name while making the university ERP benefit explicit. |
| Clinomic page | 34 impressions across both hosts, no clicks | Lead with `Clinomic Centre for Clinical Research` and retain program detail. |
| `/services` | 149 impressions across both hosts, no clicks | Consolidate hosts, then review its query mix before another title rewrite. |
| partnership ROI article | 4 impressions, position 5.5 | Expand with an original measurement framework, examples and internal links. |
| employability collaboration article | 9 impressions, position 20.8 | Consolidate the old slug, improve depth and align the title with the ranking question. |

Google reports 51 indexed URLs and 55 not indexed. The exclusions are 18 404s,
17 alternate canonical URLs, 4 redirects, 11 crawled but not indexed and 5
discovered but not indexed. The submitted sitemap is healthy but contains only
28 URLs: 18 indexed and 10 not indexed. The runtime sitemap in the first
technical release expands coverage to the current static pages plus published
blog posts.

## First technical release

- Replace the generated static sitemap with a runtime sitemap that includes
  published blog URLs.
- Stop assigning a fresh `lastmod` date to every static URL on every build.
- Block crawling of admin and API routes and apply `noindex` to admin pages.
- Remove duplicate `WebSite` structured data and connect organization entities
  with stable schema identifiers.
- Add complete default social metadata and large image-preview directives.
- Rewrite priority titles and descriptions around the search intent of each
  service page.
- Serve responsive AVIF/WebP images and prioritize the actual above-the-fold
  assets.
- Repair the contact form fallback and replace placeholder social links.
- Permanently redirect valuable legacy IBM ICE, FinLEARN, Total ERP, hiring,
  enterprise software, contact and blog URLs to their current equivalents.
- Consolidate the bare domain onto `www` in application routing and configure
  the Vercel domain redirect as permanent rather than the current temporary
  `307`.

## Search-intent map

| Search intent | Primary page |
| --- | --- |
| industry-aligned degree programs for universities | `/services/education/techlearn` and `/services/education/finlearn` |
| BFSI and finance degree programs | `/services/education/finlearn` |
| AI and data science degree specialisation | `/services/education/techlearn/ai-data-science` |
| cloud and cybersecurity degree program | `/services/education/techlearn/cloud-cybersecurity` |
| IBM ICE programs for universities | `/services/education/ibm-ice` |
| AI-powered LMS for universities | `/services/products/edudron-lms` |
| university ERP software | `/services/products/total-erp` |
| recruitment and staffing services in India | `/services/hiring/talent-acquisition` |
| student placement services for colleges | `/services/hiring/student-placement` |
| custom enterprise software development | `/services/software/enterprise-solutions` |

The map has now been checked against the first Search Console query and page
tables. Existing URLs should be strengthened before creating pages that compete
with them.

## Content work that can increase non-branded impressions

The current blog articles are short and generic. Do not scale that format. Each
new piece should contain original material that only Datagami can provide:
curriculum samples, implementation checklists, screenshots, named expert
reviewers, verified placement data, partner quotes or real project lessons.

Priority assets:

1. A university buyer's guide to choosing an AI-powered LMS, linked to EduDron.
2. A practical guide to embedding industry certifications into BCA, MCA,
   B.Tech and MBA degrees, linked to TechLEARN and IBM ICE.
3. A detailed BFSI curriculum and placement-readiness guide, linked to
   FinLEARN.
4. A university ERP evaluation checklist covering admissions, exams, finance,
   HR and integrations, linked to Total ERP.
5. Named university partnership case studies with approved quotes, timelines,
   implementation details and verifiable outcomes.

Existing thin posts should be expanded, consolidated or set to `noindex` after
their Search Console history has been reviewed. Do not delete or redirect them
blindly.

## 30/60/90-day execution

### First 30 days

- Deploy the technical release.
- Submit `/sitemap.xml` and request recrawls for the homepage and priority
  service pages.
- Re-export Search Console queries and pages after 28 days; the property
  currently has only ten days of usable history.
- Track branded and non-branded performance separately from the next export.
- Connect GA4 or another analytics system and track qualified contact actions.
- Improve or consolidate the existing eight blog posts based on impressions.
- Publish one buyer guide and one real, approved case study.

### Days 31–60

- Publish two evidence-led pieces per month around the priority service
  clusters.
- Add contextual links from every relevant article and case study to one
  commercial page.
- Ask named university and technology partners to link to the exact partnership
  or program page.
- Add expert reviewer bios and sources to educational content.

### Days 61–90

- Refresh pages ranking in positions 8–20 using their actual query language.
- Build comparison, checklist and implementation content for the clusters that
  show the strongest qualified demand.
- Expand named proof: university stories, program outcomes, product
  screenshots and implementation documentation.
- Review conversions by landing page, not traffic alone.

## Weekly scorecard

- Non-branded impressions and clicks
- Number of non-branded queries in positions 1–10 and 11–20
- Indexed canonical pages and indexing exclusions
- Clicks to contact, email and phone actions
- Qualified leads by organic landing page
- Core Web Vitals and mobile LCP
- New referring domains from universities, partners and industry bodies

## Guardrails

- No mass-generated location or keyword pages.
- No invented authors, testimonials, client names, results or certifications.
- No changing publication dates without a substantial content update.
- No backlink purchases or reciprocal-link schemes.
- No new page unless it serves a distinct search intent and has enough original
  information to be the best answer.
