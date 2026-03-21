# Backend Integration Design — Auth, Admin Panel, Blog, Gallery, Azure Storage

**Date:** 2026-03-21
**Status:** Approved
**Type:** Backend integration — add auth, admin panel, database-backed blog/gallery, Azure Blob storage

---

## 1. Overview

Add backend capabilities to the Datagami Next.js website:
- Admin authentication (NextAuth.js v5, credentials provider)
- Admin panel with TipTap rich text editor for blog management
- Database-backed blog and gallery pages (PostgreSQL via Prisma)
- Azure Blob Storage for images and video assets
- Student testimonials with photo/video support
- SEO and GEO fields on blog posts

## 2. Tech Stack Additions

| Layer | Choice |
|-------|--------|
| ORM | Prisma |
| Auth | NextAuth.js v5 (credentials provider) |
| Editor | TipTap (rich text, image embedding) |
| Storage | Azure Blob Storage (`@azure/storage-blob`) |
| Database | PostgreSQL (local: `datagami-website`) |

## 3. Database Schema

### users
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | Auto-generated |
| name | VARCHAR(255) | |
| email | VARCHAR(255) UQ | |
| password | VARCHAR(255) | bcrypt hashed |
| role | ENUM(admin) | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### blog_posts
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| title | VARCHAR(255) | |
| slug | VARCHAR(255) UQ | Auto-generated from title |
| content | TEXT | TipTap JSON content |
| excerpt | VARCHAR(500) | |
| category | VARCHAR(100) | Technology, Education, Finance, Careers |
| featured_image | VARCHAR(500) | Azure Blob URL |
| author_id | UUID FK→users | |
| status | ENUM(draft, published) | |
| published_at | TIMESTAMP | |
| meta_title | VARCHAR(70) | SEO |
| meta_description | VARCHAR(160) | SEO |
| og_image | VARCHAR(500) | SEO |
| keywords | TEXT[] | GEO — AI discoverability |
| schema_type | VARCHAR(50) | GEO — Article, HowTo, etc. |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### gallery_items
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| title | VARCHAR(255) | |
| description | TEXT | |
| category | VARCHAR(100) | Events, Campus, Workshops |
| media_type | ENUM(image, video) | |
| media_url | VARCHAR(500) | Azure Blob URL |
| thumbnail_url | VARCHAR(500) | Video thumbnail |
| alt_text | VARCHAR(255) | |
| sort_order | INTEGER | For drag-to-reorder |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### testimonials
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| student_name | VARCHAR(255) | |
| program | VARCHAR(100) | FinLEARN, TechLEARN, etc. |
| quote | TEXT | |
| photo_url | VARCHAR(500) | Azure Blob URL |
| video_url | VARCHAR(500) | Azure Blob URL (optional) |
| rating | INTEGER | 1-5 |
| is_featured | BOOLEAN | |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

## 4. Admin Panel Routes

| Route | Purpose |
|-------|---------|
| `/admin/login` | Login page |
| `/admin` | Dashboard (overview stats) |
| `/admin/blog` | Blog post listing |
| `/admin/blog/new` | Create post (TipTap editor) |
| `/admin/blog/[id]/edit` | Edit post |
| `/admin/gallery` | Gallery management |
| `/admin/testimonials` | Testimonial management |
| `/admin/users` | User management |

### Auth Flow
1. Admin navigates to `/admin/login`
2. Enters email + password
3. NextAuth validates against `users` table (bcrypt)
4. Session cookie set → redirect to `/admin`
5. Middleware protects all `/admin/*` routes

### Blog Editor
- Title, slug (auto-generated), TipTap content editor
- Excerpt, category (select), featured image (Azure upload)
- Status (Draft/Published)
- **SEO:** Meta title (70 chars), meta description (160 chars), OG image
- **GEO:** Keywords (tag input), schema type (Article, HowTo, FAQ)

### Gallery Manager
- Upload images/videos to Azure Blob
- Set title, description, category, alt text, media type
- Reorder items
- Delete with confirmation

### Testimonial Manager
- Student name, program, quote, rating
- Photo upload, optional video upload
- Featured toggle

## 5. Azure Storage Architecture

```
Resource Group: datagami-website
Region: Central India (centralindia)
Storage Account: datagamistorage

Containers:
├── blog-images/        ← Blog post images
├── gallery/            ← Gallery images and videos
├── testimonials/       ← Student photos and videos
└── og-images/          ← OG images
```

- **Access:** Public read (blob-level)
- **Upload:** Server-side via Next.js API routes
- **File naming:** `{container}/{uuid}-{original-filename}`
- **Limits:** 10MB images, 100MB videos

## 6. Public-Facing Changes

### Blog (`/blog`)
- Fetches published posts from database
- `/blog/[slug]` renders TipTap content as HTML
- SEO meta tags from post's SEO fields
- Article JSON-LD schema auto-generated
- GEO keywords injected for AI discoverability

### Gallery (`/gallery`)
- Fetches items from database
- Supports images and videos
- Category filtering via query params
- Video items show play button overlay

### Testimonials
- Reusable component for any page
- Carousel with student photos/videos
- Can be added to program pages

## 7. Environment Variables

```
DATABASE_URL=postgresql://localhost:5432/datagami-website
NEXTAUTH_SECRET=<generated-secret>
NEXTAUTH_URL=http://localhost:3000
AZURE_STORAGE_ACCOUNT_NAME=datagamistorage
AZURE_STORAGE_ACCOUNT_KEY=<from-azure>
AZURE_STORAGE_CONNECTION_STRING=<from-azure>
```

## 8. Seed Data

- Create initial admin user (email + bcrypt password)
- Migrate existing static blog posts to database
- Migrate existing gallery images to database records (keep current file paths initially)
