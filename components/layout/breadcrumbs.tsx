import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbs"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items
    .filter((item): item is BreadcrumbItem & { href: string } => !!item.href)
  const schema = generateBreadcrumbSchema(schemaItems)

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center gap-1 text-sm text-muted-brand">
        {items.map((item, i) => {
          const isLast = i === items.length - 1

          return (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight size={16} className="text-muted-brand" />
              )}
              {isLast || !item.href ? (
                <span className="text-muted-brand">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-brand hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
