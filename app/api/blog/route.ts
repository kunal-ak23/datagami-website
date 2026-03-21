import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')

  const where = status ? { status: status as 'DRAFT' | 'PUBLISHED' } : {}

  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, content, slug, excerpt, category, featuredImage, status, metaTitle, metaDescription, ogImage, keywords, schemaType } = body

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
  }

  const finalSlug = slug || slugify(title)

  // Check for duplicate slug
  const existing = await prisma.blogPost.findUnique({ where: { slug: finalSlug } })
  if (existing) {
    return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 })
  }

  const post = await prisma.blogPost.create({
    data: {
      title,
      slug: finalSlug,
      content,
      excerpt: excerpt || null,
      category: category || null,
      featuredImage: featuredImage || null,
      status: status || 'DRAFT',
      publishedAt: status === 'PUBLISHED' ? new Date() : null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      ogImage: ogImage || null,
      keywords: keywords || [],
      schemaType: schemaType || null,
      authorId: (session.user as any).id,
    },
  })

  return NextResponse.json(post, { status: 201 })
}
