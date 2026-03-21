'use client'

interface LogoTickerProps {
  logos: Array<{ name: string; src?: string }>
}

export function LogoTicker({ logos }: LogoTickerProps) {
  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll gap-12 items-center">
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <div className="h-12 px-6 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-muted-brand font-medium whitespace-nowrap">
                {logo.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
