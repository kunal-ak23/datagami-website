'use client'

interface LogoTickerProps {
  logos: Array<{ name: string; src?: string }>
}

export function LogoTicker({ logos }: LogoTickerProps) {
  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll gap-8 items-center">
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            {logo.src ? (
              <div className="bg-white dark:bg-gray-950 border border-border-custom dark:border-gray-800 rounded-xl p-4 min-w-[140px] flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xs text-muted-brand font-medium text-center whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-950 border border-border-custom dark:border-gray-800 rounded-xl p-4 min-w-[140px] flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
                <div className="h-10 flex items-center justify-center">
                  <span className="text-sm text-muted-brand font-medium whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
