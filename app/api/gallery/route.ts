import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const items = await prisma.galleryItem.findMany({
    orderBy: { sortOrder: 'asc' },
  })

  return NextResponse.json(items)
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, description, category, mediaUrl, mediaType, altText, thumbnailUrl, sortOrder } = body

  if (!title || !mediaUrl || !category) {
    return NextResponse.json({ error: 'Title, media URL, and category are required' }, { status: 400 })
  }

  const item = await prisma.galleryItem.create({
    data: {
      title,
      description: description || null,
      category,
      mediaUrl,
      mediaType: mediaType || 'IMAGE',
      altText: altText || null,
      thumbnailUrl: thumbnailUrl || null,
      sortOrder: sortOrder ?? 0,
    },
  })

  return NextResponse.json(item, { status: 201 })
}
