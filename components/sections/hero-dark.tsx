import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroDarkProps {
  heading: string
  subtitle?: string
  accentColor?: string
  stats?: Array<{ value: string; label: string }>
  badgeText?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function HeroDark({
  heading,
  subtitle,
  accentColor = "text-brand",
  stats,
  badgeText,
  ctaText,
  ctaHref,
  backgroundImage,
}: HeroDarkProps) {
  return (
    <section className="relative bg-dark overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {badgeText && (
            <span
              className={`inline-block ${accentColor} border border-current/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase`}
            >
              {badgeText}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            {heading}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl leading-relaxed text-white/70 mb-8">
              {subtitle}
            </p>
          )}
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-brand text-dark px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-brand-dark transition-colors"
            >
              {ctaText}
              <ArrowRight className="size-5" />
            </Link>
          )}
        </div>

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-3xl md:text-4xl font-bold ${accentColor}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
