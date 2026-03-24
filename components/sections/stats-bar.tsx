interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  variant?: "light" | "dark"
}

export function StatsBar({ stats, variant = "light" }: StatsBarProps) {
  const isDark = variant === "dark"

  return (
    <section className={`py-12 ${isDark ? "bg-[#1A1A1A]" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                className={`text-4xl font-bold ${
                  isDark ? "text-white" : "text-brand"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm mt-1 ${
                  isDark ? "text-gray-300" : "text-muted-brand"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
