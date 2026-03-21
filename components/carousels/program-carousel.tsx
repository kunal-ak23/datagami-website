'use client'

import { type ReactNode, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProgramCarouselProps {
  children: ReactNode
  className?: string
}

export function ProgramCarousel({ children, className = '' }: ProgramCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 size-10 rounded-full bg-white shadow-md border border-border-custom flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 text-dark" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 size-10 rounded-full bg-white shadow-md border border-border-custom flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 text-dark" />
      </button>
    </div>
  )
}
