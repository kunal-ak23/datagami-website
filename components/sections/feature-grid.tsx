import type { ReactNode } from "react"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-xl glass-card dark:liquid-glass hover:-translate-y-1 hover:shadow-brand-md transition-all duration-300 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 text-brand">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-dark mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-brand text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
