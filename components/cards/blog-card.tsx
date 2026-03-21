import Link from "next/link"

interface BlogCardProps {
  title: string
  category: string
  excerpt: string
  date: string
  slug: string
  imageSrc?: string
}

export function BlogCard({
  title,
  category,
  excerpt,
  date,
  slug,
  imageSrc,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block border border-border-custom rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium">
            {category}
          </span>
          <span className="text-xs text-muted-brand">{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-sm text-muted-brand line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  )
}
