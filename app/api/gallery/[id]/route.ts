import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { deleteFromAzure } from '@/lib/azure-storage'
import { NextRequest, NextResponse } from 'next/server'

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

  const existing = await prisma.galleryItem.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 })
  }

  const item = await prisma.galleryItem.update({
    where: { id },
    data: {
      title: body.title,
      description: body.description || null,
      category: body.category,
      mediaUrl: body.mediaUrl,
      mediaType: body.mediaType || 'IMAGE',
      altText: body.altText || null,
      thumbnailUrl: body.thumbnailUrl || null,
      sortOrder: body.sortOrder ?? existing.sortOrder,
    },
  })

  return NextResponse.json(item)
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

  const existing = await prisma.galleryItem.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 })
  }

  // Delete from Azure if it's an Azure URL
  if (existing.mediaUrl.includes('blob.core.windows.net')) {
    try {
      await deleteFromAzure(existing.mediaUrl)
    } catch (error) {
      console.error('Failed to delete from Azure:', error)
    }
  }

  if (existing.thumbnailUrl?.includes('blob.core.windows.net')) {
    try {
      await deleteFromAzure(existing.thumbnailUrl)
    } catch (error) {
      console.error('Failed to delete thumbnail from Azure:', error)
    }
  }

  await prisma.galleryItem.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
