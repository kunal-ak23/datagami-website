import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/db"
import { TipTapRenderer } from "@/components/tiptap-renderer"
import Breadcrumbs from "@/components/layout/breadcrumbs"

export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug } })

  if (!post || post.status !== "PUBLISHED") {
    return { title: "Post Not Found" }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
    openGraph: {
      images: post.ogImage ? [post.ogImage] : post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { author: { select: { name: true } } },
  })

  if (!post || post.status !== "PUBLISHED") {
    notFound()
  }

  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(post.publishedAt)
    : null

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.featuredImage || post.ogImage,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Datagami",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Header */}
        <header className="mb-10 mt-6">
          {post.category && (
            <span className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-brand">
            <span>By {post.author.name}</span>
            {publishedDate && (
              <>
                <span aria-hidden="true">|</span>
                <time dateTime={post.publishedAt?.toISOString()}>
                  {publishedDate}
                </time>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full rounded-xl mb-10 object-cover aspect-video"
          />
        )}

        {/* Content */}
        <TipTapRenderer content={post.content} />

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-border-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand font-medium hover:underline"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </>
  )
}
