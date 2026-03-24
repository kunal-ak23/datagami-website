import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  industry: string
  summary: string
  slug: string
  imageSrc?: string
}

export function CaseStudyCard({
  title,
  industry,
  summary,
  slug,
  imageSrc,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="block bg-white dark:bg-gray-900 border border-border-custom dark:border-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          width={640}
          height={192}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <span className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium mb-3">
          {industry}
        </span>
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-sm text-muted-brand line-clamp-2">{summary}</p>
      </div>
    </Link>
  )
}
