import type { ReactNode } from "react"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  duration?: string
  href: string
  icon: ReactNode
}

export function ProgramCard({
  title,
  description,
  duration,
  href,
  icon,
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="block border border-border-custom rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
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
