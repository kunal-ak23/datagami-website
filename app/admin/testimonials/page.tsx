export const dynamic = "force-dynamic"
import { prisma } from '@/lib/db'
import { TestimonialsClient } from './testimonials-client'

export default async function TestimonialsAdminPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
  })

  // Serialize dates for client component
  const serializedTestimonials = testimonials.map((t) => ({
    ...t,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }))

  return <TestimonialsClient initialTestimonials={serializedTestimonials} />
}
