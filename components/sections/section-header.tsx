interface SectionHeaderProps {
  title: string
  description?: string
  align?: "center" | "left"
  gradient?: boolean
}

export function SectionHeader({
  title,
  description,
  align = "center",
  gradient,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className={`text-4xl font-bold text-dark ${gradient ? 'text-gradient' : ''}`}>{title}</h2>
      {description && (
        <p
          className={`text-lg text-muted-brand mt-4 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
