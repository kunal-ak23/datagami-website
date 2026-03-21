import type { ReactNode } from "react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block border border-border-custom rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 text-brand">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-sm text-muted-brand mb-4">{description}</p>
      <span className="text-brand font-medium text-sm hover:text-brand-dark">
        Learn More &rarr;
      </span>
    </Link>
  )
}
