import type { ReactNode } from "react"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  duration?: string
  href: string
  icon: ReactNode
  backgroundImage?: string
}

export function ProgramCard({
  title,
  description,
  duration,
  href,
  icon,
  backgroundImage,
}: ProgramCardProps) {
  if (backgroundImage) {
    return (
      <Link
        href={href}
        className="block rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-brand-glow transition-all duration-300 cursor-pointer group"
      >
        {/* Image header */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {duration && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                {duration}
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </div>
        {/* Content below image */}
        <div className="p-5 glass-card dark:liquid-glass">
          <p className="text-sm text-muted-brand mb-4 line-clamp-3">
            {description}
          </p>
          <span className="text-brand font-medium text-sm hover:text-brand-dark">
            Learn More &rarr;
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="block glass-card dark:liquid-glass rounded-xl p-6 hover:-translate-y-1 hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 text-brand">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      {duration && (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium mb-3">
          {duration}
        </span>
      )}
      <p className="text-sm text-muted-brand mb-4 line-clamp-3">
        {description}
      </p>
      <span className="text-brand font-medium text-sm hover:text-brand-dark">
        Learn More &rarr;
      </span>
    </Link>
  )
}
