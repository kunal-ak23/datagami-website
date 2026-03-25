import Link from "next/link"
import { Check } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  href: string
  backgroundImage?: string
}

export function ProductCard({
  title,
  description,
  features,
  href,
  backgroundImage,
}: ProductCardProps) {
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
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        {/* Content below image */}
        <div className="p-6 glass-card dark:liquid-glass">
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
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="block glass-card dark:liquid-glass rounded-xl p-8 hover:-translate-y-1 hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
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
