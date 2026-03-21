import { prisma } from "@/lib/db"
import { Star } from "lucide-react"

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

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[340px] sm:w-[380px] bg-white rounded-xl border border-border-custom p-6 snap-center"
            >
              <div className="flex items-center gap-4 mb-4">
                {testimonial.photoUrl ? (
                  <div className="relative">
                    <img
                      src={testimonial.photoUrl}
                      alt={testimonial.studentName}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border-2 border-brand/20"
                    />
                    {testimonial.videoUrl && (
                      <a
                        href={testimonial.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center shadow"
                        aria-label={`Watch ${testimonial.studentName}'s video testimonial`}
                      >
                        <svg
                          className="w-3 h-3 text-dark ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center border-2 border-brand/20">
                      <span className="text-lg font-semibold text-brand">
                        {testimonial.studentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    {testimonial.videoUrl && (
                      <a
                        href={testimonial.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center shadow"
                        aria-label={`Watch ${testimonial.studentName}'s video testimonial`}
                      >
                        <svg
                          className="w-3 h-3 text-dark ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-dark">
                    {testimonial.studentName}
                  </p>
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-brand/10 text-brand text-xs font-medium">
                    {testimonial.program}
                  </span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-brand text-brand"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-body leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
