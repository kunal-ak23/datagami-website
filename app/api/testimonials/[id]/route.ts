import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
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

  const existing = await prisma.testimonial.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
  }

  if (body.rating && (body.rating < 1 || body.rating > 5)) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
  }

  const testimonial = await prisma.testimonial.update({
    where: { id },
    data: {
      studentName: body.studentName,
      program: body.program,
      quote: body.quote,
      rating: body.rating ?? existing.rating,
      photoUrl: body.photoUrl ?? existing.photoUrl,
      videoUrl: body.videoUrl ?? existing.videoUrl,
      isFeatured: body.isFeatured ?? existing.isFeatured,
    },
  })

  return NextResponse.json(testimonial)
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

  const existing = await prisma.testimonial.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 })
  }

  await prisma.testimonial.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
