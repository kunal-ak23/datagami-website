import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroFullProps {
  heading: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
  backgroundColor?: string
  light?: boolean
}

export function HeroFull({
  heading,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundColor = "bg-brand",
  light,
}: HeroFullProps) {
  const isLight =
    light ?? (!backgroundImage && ["bg-brand", "bg-white", "bg-surface"].includes(backgroundColor))

  const textColor = isLight ? "text-dark" : "text-white"
  const subtitleColor = isLight ? "text-body" : "text-white/80"

  return (
    <section
      className={`relative ${!backgroundImage ? backgroundColor : "bg-dark"}`}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      )}
      <div className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${textColor} mb-6`}
            >
              {heading}
            </h1>
            {subtitle && (
              <p className={`text-lg md:text-xl leading-relaxed ${subtitleColor} mb-8`}>
                {subtitle}
              </p>
            )}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold cursor-pointer transition-colors ${
                  isLight
                    ? "bg-dark text-white hover:bg-dark/90"
                    : "bg-brand text-dark hover:bg-brand-dark"
                }`}
              >
                {ctaText}
                <ArrowRight className="size-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
