import Link from "next/link"
import Image from "next/image"

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
      className="block glass-card dark:liquid-glass rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={640}
          height={192}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
