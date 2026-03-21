import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(testimonials)
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { studentName, program, quote, rating, photoUrl, videoUrl, isFeatured } = body

  if (!studentName || !program || !quote) {
    return NextResponse.json({ error: 'Student name, program, and quote are required' }, { status: 400 })
  }

  if (rating && (rating < 1 || rating > 5)) {
    return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
  }

  const testimonial = await prisma.testimonial.create({
    data: {
      studentName,
      program,
      quote,
      rating: rating || 5,
      photoUrl: photoUrl || null,
      videoUrl: videoUrl || null,
      isFeatured: isFeatured || false,
    },
  })

  return NextResponse.json(testimonial, { status: 201 })
}
