import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const post = await prisma.blogPost.findUnique({
    where: { id },
    include: { author: { select: { name: true } } },
  })

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()

  const existing = await prisma.blogPost.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  // If status changes to PUBLISHED and publishedAt is null, set it
  const publishedAt =
    body.status === 'PUBLISHED' && !existing.publishedAt
      ? new Date()
      : existing.publishedAt

  const post = await prisma.blogPost.update({
    where: { id },
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      excerpt: body.excerpt || null,
      category: body.category || null,
      featuredImage: body.featuredImage || null,
      status: body.status,
      publishedAt,
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      ogImage: body.ogImage || null,
      keywords: body.keywords || [],
      schemaType: body.schemaType || null,
    },
  })

  return NextResponse.json(post)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const existing = await prisma.blogPost.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  await prisma.blogPost.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
