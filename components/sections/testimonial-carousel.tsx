import { prisma } from "@/lib/db"
import { TestimonialCarouselClient } from "@/components/carousels/testimonial-carousel"

export async function TestimonialCarousel() {
  const testimonials = await prisma.testimonial.findMany({
    where: { isFeatured: true },
    take: 6,
    orderBy: { createdAt: "desc" },
  })

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-brand max-w-2xl mx-auto">
            Hear from students who have transformed their careers through our programs.
          </p>
        </div>

        <TestimonialCarouselClient
          testimonials={testimonials.map((t) => ({
            studentName: t.studentName,
            program: t.program,
            quote: t.quote,
            rating: t.rating,
            photoUrl: t.photoUrl,
          }))}
        />
      </div>
    </section>
  )
}
