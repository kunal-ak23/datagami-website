interface HeroMinimalProps {
  heading: string
  subtitle?: string
}

export function HeroMinimal({ heading, subtitle }: HeroMinimalProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-dark mb-4">
            {heading}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-brand leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
