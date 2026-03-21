import Link from "next/link"
import { Check } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
}

export function ProductCard({
  title,
  description,
  features,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="block border border-border-custom rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-muted-brand mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
            <span className="text-muted-brand">{feature}</span>
          </li>
        ))}
      </ul>
      <span className="inline-flex items-center text-brand font-medium text-sm hover:text-brand-dark">
        Learn More &rarr;
      </span>
    </Link>
  )
}
