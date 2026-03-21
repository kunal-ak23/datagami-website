import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
  variant?: "primary" | "dark"
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary"

  return (
    <section className={`py-16 md:py-20 ${isPrimary ? "bg-brand" : "bg-dark"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isPrimary ? "text-dark" : "text-white"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isPrimary ? "text-body" : "text-gray-300"
            }`}
          >
            {description}
          </p>
        )}
        <Link
          href={buttonHref}
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-colors ${
            isPrimary
              ? "bg-dark text-white hover:bg-dark/90"
              : "bg-brand text-dark hover:bg-brand/90"
          }`}
        >
          {buttonText}
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  )
}
