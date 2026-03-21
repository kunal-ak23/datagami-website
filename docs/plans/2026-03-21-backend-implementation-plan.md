# Backend Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add auth, admin panel (blog editor, gallery manager, testimonials), PostgreSQL via Prisma, and Azure Blob Storage to the Datagami Next.js website.

**Architecture:** Prisma ORM connects to local PostgreSQL (`datagami-website`). NextAuth.js v5 handles admin authentication with credentials provider. TipTap editor for rich blog content. Azure Blob Storage for media uploads via `@azure/storage-blob` SDK. Admin routes under `/admin/*` protected by middleware.

**Tech Stack:** Prisma, NextAuth.js v5, TipTap, @azure/storage-blob, bcryptjs

**Design doc:** `docs/plans/2026-03-21-backend-integration-design.md`

---

## Task 1: Install Backend Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Prisma**

```bash
npm install prisma @prisma/client
npm install -D prisma
```

**Step 2: Install NextAuth.js v5 + bcrypt**

```bash
npm install next-auth@beta @auth/prisma-adapter bcryptjs
npm install -D @types/bcryptjs
```

**Step 3: Install TipTap**

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder @tiptap/pm
```

**Step 4: Install Azure Storage SDK**

```bash
npm install @azure/storage-blob
```

**Step 5: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install Prisma, NextAuth, TipTap, Azure Storage dependencies"
```

---

## Task 2: Prisma Schema & Database Migration

**Files:**
- Create: `prisma/schema.prisma`
- Create: `.env` (do NOT commit)
- Create: `.env.example`

**Step 1: Initialize Prisma**

```bash
npx prisma init --datasource-provider postgresql
```

**Step 2: Configure `.env`**

```
DATABASE_URL="postgresql://localhost:5432/datagami-website"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"
```

Create `.env.example` with the same keys but placeholder values.

**Step 3: Write Prisma schema**

`prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  ADMIN
}

enum PostStatus {
  DRAFT
  PUBLISHED
}

enum MediaType {
  IMAGE
  VIDEO
}

model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(ADMIN)
  posts     BlogPost[]
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@map("users")
}

model BlogPost {
  id              String     @id @default(uuid())
  title           String
  slug            String     @unique
  content         String     @db.Text
  excerpt         String?    @db.VarChar(500)
  category        String?    @db.VarChar(100)
  featuredImage   String?    @map("featured_image") @db.VarChar(500)
  author          User       @relation(fields: [authorId], references: [id])
  authorId        String     @map("author_id")
  status          PostStatus @default(DRAFT)
  publishedAt     DateTime?  @map("published_at")
  metaTitle       String?    @map("meta_title") @db.VarChar(70)
  metaDescription String?    @map("meta_description") @db.VarChar(160)
  ogImage         String?    @map("og_image") @db.VarChar(500)
  keywords        String[]   @default([])
  schemaType      String?    @map("schema_type") @db.VarChar(50)
  createdAt       DateTime   @default(now()) @map("created_at")
  updatedAt       DateTime   @updatedAt @map("updated_at")

  @@map("blog_posts")
}

model GalleryItem {
  id           String    @id @default(uuid())
  title        String
  description  String?   @db.Text
  category     String    @db.VarChar(100)
  mediaType    MediaType @default(IMAGE) @map("media_type")
  mediaUrl     String    @map("media_url") @db.VarChar(500)
  thumbnailUrl String?   @map("thumbnail_url") @db.VarChar(500)
  altText      String?   @map("alt_text") @db.VarChar(255)
  sortOrder    Int       @default(0) @map("sort_order")
  createdAt    DateTime  @default(now()) @map("created_at")
  updatedAt    DateTime  @updatedAt @map("updated_at")

  @@map("gallery_items")
}

model Testimonial {
  id          String   @id @default(uuid())
  studentName String   @map("student_name")
  program     String   @db.VarChar(100)
  quote       String   @db.Text
  photoUrl    String?  @map("photo_url") @db.VarChar(500)
  videoUrl    String?  @map("video_url") @db.VarChar(500)
  rating      Int      @default(5)
  isFeatured  Boolean  @default(false) @map("is_featured")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("testimonials")
}
```

**Step 4: Run migration**

```bash
npx prisma migrate dev --name init
```

Expected: Migration created, tables exist in PostgreSQL.

**Step 5: Generate Prisma client**

```bash
npx prisma generate
```

**Step 6: Create Prisma client singleton**

Create `lib/db.ts`:
```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

**Step 7: Add `.env` to `.gitignore`**

Ensure `.env` is in `.gitignore` (Prisma init may have added it).

**Step 8: Commit**

```bash
git add prisma/ lib/db.ts .env.example .gitignore
git commit -m "feat: Prisma schema with users, blog_posts, gallery_items, testimonials"
```

---

## Task 3: Azure Storage Setup

**Step 1: Create Azure resource group**

```bash
az group create --name datagami-website --location centralindia
```

**Step 2: Create storage account**

```bash
az storage account create \
  --name datagamistorage \
  --resource-group datagami-website \
  --location centralindia \
  --sku Standard_LRS \
  --kind StorageV2 \
  --allow-blob-public-access true
```

**Step 3: Create blob containers**

```bash
az storage container create --name blog-images --account-name datagamistorage --public-access blob
az storage container create --name gallery --account-name datagamistorage --public-access blob
az storage container create --name testimonials --account-name datagamistorage --public-access blob
az storage container create --name og-images --account-name datagamistorage --public-access blob
```

**Step 4: Get connection string and add to .env**

```bash
az storage account show-connection-string --name datagamistorage --resource-group datagami-website --query connectionString -o tsv
```

Add to `.env`:
```
AZURE_STORAGE_CONNECTION_STRING="<connection-string>"
AZURE_STORAGE_ACCOUNT_NAME="datagamistorage"
```

**Step 5: Create Azure upload utility**

Create `lib/azure-storage.ts`:
```ts
import { BlobServiceClient } from '@azure/storage-blob'
import { v4 as uuid } from 'crypto'

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString)

export async function uploadToAzure(
  file: Buffer,
  fileName: string,
  container: 'blog-images' | 'gallery' | 'testimonials' | 'og-images',
  contentType: string
): Promise<string> {
  const containerClient = blobServiceClient.getContainerClient(container)
  const blobName = `${crypto.randomUUID()}-${fileName}`
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)

  await blockBlobClient.upload(file, file.length, {
    blobHTTPHeaders: { blobContentType: contentType },
  })

  return blockBlobClient.url
}

export async function deleteFromAzure(blobUrl: string): Promise<void> {
  const url = new URL(blobUrl)
  const pathParts = url.pathname.split('/').filter(Boolean)
  const containerName = pathParts[0]
  const blobName = pathParts.slice(1).join('/')

  const containerClient = blobServiceClient.getContainerClient(containerName)
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)
  await blockBlobClient.deleteIfExists()
}
```

Update `.env.example` with Azure vars.

**Step 6: Commit**

```bash
git add lib/azure-storage.ts .env.example
git commit -m "feat: Azure Blob Storage setup with upload/delete utilities"
```

---

## Task 4: NextAuth.js Configuration

**Files:**
- Create: `lib/auth.ts`
- Create: `app/api/auth/[...nextauth]/route.ts`
- Create: `middleware.ts`

**Step 1: Configure NextAuth**

Create `lib/auth.ts`:
```ts
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (!user) return null

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isValid) return null

        return { id: user.id, name: user.name, email: user.email, role: user.role }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
        (session.user as any).id = token.id
      }
      return session
    },
  },
  session: { strategy: 'jwt' },
})
```

**Step 2: Create API route handler**

Create `app/api/auth/[...nextauth]/route.ts`:
```ts
import { handlers } from '@/lib/auth'
export const { GET, POST } = handlers
```

**Step 3: Create middleware for /admin protection**

Create `middleware.ts` (project root):
```ts
import { auth } from '@/lib/auth'

export default auth((req) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = req.nextUrl.pathname === '/admin/login'
  const isAuthenticated = !!req.auth

  if (isAdminRoute && !isLoginPage && !isAuthenticated) {
    return Response.redirect(new URL('/admin/login', req.url))
  }

  if (isLoginPage && isAuthenticated) {
    return Response.redirect(new URL('/admin', req.url))
  }
})

export const config = {
  matcher: ['/admin/:path*'],
}
```

**Step 4: Commit**

```bash
git add lib/auth.ts app/api/auth/ middleware.ts
git commit -m "feat: NextAuth.js v5 with credentials provider and admin middleware"
```

---

## Task 5: Seed Script — Initial Admin User

**Files:**
- Create: `prisma/seed.ts`
- Modify: `package.json` (add prisma seed config)

**Step 1: Create seed script**

Create `prisma/seed.ts`:
```ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@datagami.in' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@datagami.in',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Seeded admin user:', admin.email)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

**Step 2: Add seed config to package.json**

Add to `package.json`:
```json
"prisma": {
  "seed": "npx tsx prisma/seed.ts"
}
```

Install tsx: `npm install -D tsx`

**Step 3: Run seed**

```bash
npx prisma db seed
```

Expected: "Seeded admin user: admin@datagami.in"

**Step 4: Commit**

```bash
git add prisma/seed.ts package.json package-lock.json
git commit -m "feat: seed script with initial admin user"
```

---

## Task 6: Admin Login Page

**Files:**
- Create: `app/admin/login/page.tsx`

**Step 1: Build login page**

Client component with email/password form:
- Clean centered card layout
- Email + password inputs (shadcn/ui or styled inputs)
- "Sign In" button with loading state
- Error message display
- Uses `signIn('credentials', { email, password, redirect: true, callbackUrl: '/admin' })`
- Datagami branding (logo at top)

**Step 2: Verify login works**

Run `npm run dev`, navigate to `/admin/login`, enter `admin@datagami.in` / `admin123`.
Expected: Redirects to `/admin` (which will 404 until Task 7, but auth should work).

**Step 3: Commit**

```bash
git add app/admin/login/
git commit -m "feat: admin login page with credentials auth"
```

---

## Task 7: Admin Layout & Dashboard

**Files:**
- Create: `app/admin/layout.tsx`
- Create: `app/admin/page.tsx`
- Create: `components/admin/admin-sidebar.tsx`

**Step 1: Build admin layout**

Admin layout with:
- Sidebar navigation (Blog, Gallery, Testimonials, Users, Sign Out)
- Header with user name/email
- Main content area
- Different from public site layout (no public navbar/footer)
- Uses `auth()` to get session and pass to components

**Step 2: Build admin sidebar**

Links:
- Dashboard (/admin)
- Blog Posts (/admin/blog)
- Gallery (/admin/gallery)
- Testimonials (/admin/testimonials)
- Users (/admin/users)
- Sign Out (action)

Use Lucide icons: LayoutDashboard, FileText, Image, MessageSquare, Users, LogOut

**Step 3: Build dashboard page**

Show overview stats:
- Total blog posts (draft + published counts)
- Total gallery items
- Total testimonials
- Recent activity

Query database for counts using Prisma.

**Step 4: Commit**

```bash
git add app/admin/ components/admin/
git commit -m "feat: admin layout with sidebar navigation and dashboard"
```

---

## Task 8: Upload API Route

**Files:**
- Create: `app/api/upload/route.ts`

**Step 1: Build upload endpoint**

POST `/api/upload`:
- Accepts `multipart/form-data` with `file` and `container` fields
- Validates file size (10MB images, 100MB videos)
- Validates content type (image/*, video/*)
- Uploads to Azure Blob Storage using `uploadToAzure()`
- Returns `{ url: string }` on success
- Protected — requires auth session

```ts
import { auth } from '@/lib/auth'
import { uploadToAzure } from '@/lib/azure-storage'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get('file') as File
  const container = formData.get('container') as string

  if (!file || !container) {
    return NextResponse.json({ error: 'Missing file or container' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const url = await uploadToAzure(buffer, file.name, container as any, file.type)

  return NextResponse.json({ url })
}
```

**Step 2: Commit**

```bash
git add app/api/upload/
git commit -m "feat: file upload API route with Azure Blob Storage"
```

---

## Task 9: TipTap Blog Editor Component

**Files:**
- Create: `components/admin/blog-editor.tsx`
- Create: `components/admin/image-upload.tsx`
- Create: `components/admin/tag-input.tsx`

**Step 1: Build image upload component**

A reusable image upload component:
- Drag & drop or click to select
- Preview after selection
- Uploads to Azure via `/api/upload`
- Returns the URL
- Loading state with progress indicator

**Step 2: Build tag input component**

For SEO/GEO keywords:
- Text input with comma-separated tags
- Tag pills with X to remove
- Add on Enter or comma

**Step 3: Build TipTap editor component**

Full blog editor with:
- TipTap editor with StarterKit (headings, bold, italic, lists, blockquote, code)
- Image extension (upload via image-upload component)
- Link extension
- Placeholder text
- Toolbar with formatting buttons
- Content serialized as TipTap JSON

**Step 4: Commit**

```bash
git add components/admin/
git commit -m "feat: TipTap blog editor with image upload and tag input"
```

---

## Task 10: Blog Admin CRUD Pages

**Files:**
- Create: `app/admin/blog/page.tsx` (listing)
- Create: `app/admin/blog/new/page.tsx` (create)
- Create: `app/admin/blog/[id]/edit/page.tsx` (edit)
- Create: `app/api/blog/route.ts` (CRUD API)
- Create: `app/api/blog/[id]/route.ts` (individual post API)

**Step 1: Build blog API routes**

`app/api/blog/route.ts`:
- GET: List all posts (with pagination, status filter)
- POST: Create new post (validate, auto-generate slug, save to DB)

`app/api/blog/[id]/route.ts`:
- GET: Get single post by ID
- PUT: Update post
- DELETE: Delete post

All routes protected by auth session check.

**Step 2: Build blog listing page**

`app/admin/blog/page.tsx`:
- Table/list of all posts with title, status badge, category, date, author
- "New Post" button
- Edit/Delete actions per row
- Filter by status (All, Draft, Published)

**Step 3: Build create post page**

`app/admin/blog/new/page.tsx`:
- Full blog editor form with all fields:
  - Title (text input)
  - Slug (auto-generated, editable)
  - Content (TipTap editor)
  - Excerpt (textarea)
  - Category (select: Technology, Education, Finance, Careers)
  - Featured Image (image upload)
  - Status (Draft/Published radio)
  - SEO section: Meta Title, Meta Description, OG Image
  - GEO section: Keywords (tag input), Schema Type (select: Article, HowTo, FAQ)
- Save as Draft / Publish buttons
- POST to `/api/blog`

**Step 4: Build edit post page**

`app/admin/blog/[id]/edit/page.tsx`:
- Same form as create, pre-filled with existing data
- Fetch post by ID on load
- PUT to `/api/blog/[id]` on save

**Step 5: Commit**

```bash
git add app/admin/blog/ app/api/blog/
git commit -m "feat: blog admin CRUD — listing, create, edit with TipTap editor"
```

---

## Task 11: Gallery Admin CRUD Pages

**Files:**
- Create: `app/admin/gallery/page.tsx`
- Create: `app/api/gallery/route.ts`
- Create: `app/api/gallery/[id]/route.ts`

**Step 1: Build gallery API routes**

- GET: List all gallery items (ordered by sort_order)
- POST: Create new item (upload media to Azure, save record)
- PUT: Update item (title, description, category, alt text, sort order)
- DELETE: Delete item (also delete blob from Azure)

**Step 2: Build gallery admin page**

Single page with:
- Grid of gallery items (image/video thumbnails)
- "Add Item" button → modal/dialog with upload form:
  - Media file upload (image or video)
  - Title, description, category (Events/Campus/Workshops), alt text
  - Media type auto-detected from file
- Edit item → same modal pre-filled
- Delete item with confirmation dialog
- Drag-to-reorder (or simple up/down arrows for simplicity)

**Step 3: Commit**

```bash
git add app/admin/gallery/ app/api/gallery/
git commit -m "feat: gallery admin with upload, edit, delete, and reorder"
```

---

## Task 12: Testimonials Admin CRUD Pages

**Files:**
- Create: `app/admin/testimonials/page.tsx`
- Create: `app/api/testimonials/route.ts`
- Create: `app/api/testimonials/[id]/route.ts`

**Step 1: Build testimonials API routes**

- GET: List all testimonials (with filter by program, featured)
- POST: Create new testimonial (upload photo/video to Azure)
- PUT: Update testimonial
- DELETE: Delete testimonial

**Step 2: Build testimonials admin page**

- Table/card list of testimonials
- "Add Testimonial" → form with:
  - Student name, program (select from programs list), quote (textarea)
  - Photo upload, optional video upload
  - Rating (1-5 stars)
  - Featured toggle
- Edit/Delete actions

**Step 3: Commit**

```bash
git add app/admin/testimonials/ app/api/testimonials/
git commit -m "feat: testimonials admin CRUD with photo and video upload"
```

---

## Task 13: Users Admin Page

**Files:**
- Create: `app/admin/users/page.tsx`
- Create: `app/api/users/route.ts`
- Create: `app/api/users/[id]/route.ts`

**Step 1: Build users API routes**

- GET: List all users
- POST: Create new user (hash password with bcrypt)
- DELETE: Delete user (prevent deleting last admin)

**Step 2: Build users admin page**

- Table of admin users (name, email, created date)
- "Add Admin" button → form with name, email, password
- Delete button with confirmation (cannot delete yourself)

**Step 3: Commit**

```bash
git add app/admin/users/ app/api/users/
git commit -m "feat: users admin page for managing admin accounts"
```

---

## Task 14: Public Blog — Database-Backed

**Files:**
- Modify: `app/blog/page.tsx` (fetch from DB instead of static)
- Create: `app/blog/[slug]/page.tsx` (individual blog post)
- Create: `components/tiptap-renderer.tsx` (render TipTap JSON as HTML)

**Step 1: Build TipTap content renderer**

A server component that renders TipTap JSON content as styled HTML.
Use `@tiptap/react` with `generateHTML()` or a custom renderer.

**Step 2: Update blog listing page**

Replace static blog data with Prisma query:
```ts
const posts = await prisma.blogPost.findMany({
  where: { status: 'PUBLISHED' },
  orderBy: { publishedAt: 'desc' },
  include: { author: { select: { name: true } } },
})
```

Keep the same visual layout (featured post + grid).

**Step 3: Build individual blog post page**

`app/blog/[slug]/page.tsx`:
- Fetch post by slug
- Render TipTap content
- Dynamic metadata from SEO fields (meta_title, meta_description, og_image)
- Article JSON-LD schema auto-generated
- GEO keywords in meta tags
- Breadcrumbs: Home > Blog > [Post Title]
- Author name and date
- `generateStaticParams` for published posts

**Step 4: Commit**

```bash
git add app/blog/ components/tiptap-renderer.tsx
git commit -m "feat: database-backed blog with TipTap content rendering and SEO"
```

---

## Task 15: Public Gallery — Database-Backed

**Files:**
- Modify: `app/gallery/page.tsx` (fetch from DB)

**Step 1: Update gallery page**

Replace static gallery data with Prisma query:
```ts
const items = await prisma.galleryItem.findMany({
  orderBy: { sortOrder: 'asc' },
})
```

- Show images with `<img>` tags
- Show videos with `<video>` tags or play button overlay
- Category filtering via URL search params
- Keep the same visual grid layout

**Step 2: Commit**

```bash
git add app/gallery/
git commit -m "feat: database-backed gallery with image and video support"
```

---

## Task 16: Testimonials Component

**Files:**
- Create: `components/sections/testimonial-carousel.tsx`

**Step 1: Build testimonial carousel**

Server component that fetches featured testimonials:
```ts
const testimonials = await prisma.testimonial.findMany({
  where: { isFeatured: true },
  take: 6,
})
```

- Horizontal scrollable carousel or grid
- Each card: student photo, name, program, quote, star rating
- Video testimonials show play button
- Can be imported into any page

**Step 2: Add to homepage**

Import the testimonial carousel into `app/page.tsx`, placed before the final CTA section.

**Step 3: Commit**

```bash
git add components/sections/testimonial-carousel.tsx app/page.tsx
git commit -m "feat: testimonial carousel component with database integration"
```

---

## Task 17: Seed Existing Content into Database

**Files:**
- Modify: `prisma/seed.ts`

**Step 1: Expand seed script**

Add to `prisma/seed.ts`:
- Seed the 4-5 existing blog post placeholders as database records
- Seed the 12 gallery images as database records (using existing `/images/gallery/` paths)
- Seed 3-4 sample testimonials

**Step 2: Run seed**

```bash
npx prisma db seed
```

**Step 3: Verify public pages work**

Run `npm run dev`, check `/blog` and `/gallery` load content from database.

**Step 4: Commit**

```bash
git add prisma/seed.ts
git commit -m "feat: seed existing blog posts, gallery items, and sample testimonials"
```

---

## Task 18: Build Verification & Final Fixes

**Step 1: Run full build**

```bash
npm run build
```

Fix any TypeScript or build errors.

Note: Blog and gallery pages may need to switch from static to dynamic rendering since they query the database. Add `export const dynamic = 'force-dynamic'` or use `revalidate` if needed.

**Step 2: Test admin flow end-to-end**

1. Login at `/admin/login` with `admin@datagami.in` / `admin123`
2. Create a blog post with TipTap editor, upload an image
3. Publish it and verify it appears on `/blog`
4. Add a gallery item and verify it appears on `/gallery`
5. Add a testimonial and verify it appears on homepage

**Step 3: Verify SEO on blog posts**

Check that published blog posts have:
- Unique `<title>` from meta_title
- `<meta name="description">` from meta_description
- Article JSON-LD schema
- OG image

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: build verification and final fixes"
```

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Install dependencies (Prisma, NextAuth, TipTap, Azure SDK) |
| 2 | Prisma schema & database migration |
| 3 | Azure Storage setup (resource group, account, containers) |
| 4 | NextAuth.js configuration with middleware |
| 5 | Seed script with initial admin user |
| 6 | Admin login page |
| 7 | Admin layout, sidebar, dashboard |
| 8 | File upload API route |
| 9 | TipTap blog editor component |
| 10 | Blog admin CRUD pages |
| 11 | Gallery admin CRUD pages |
| 12 | Testimonials admin CRUD pages |
| 13 | Users admin page |
| 14 | Public blog — database-backed |
| 15 | Public gallery — database-backed |
| 16 | Testimonials carousel component |
| 17 | Seed existing content |
| 18 | Build verification |
