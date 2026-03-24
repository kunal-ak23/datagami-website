import type { Metadata } from "next"
import Link from "next/link"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { BlogCard } from "@/components/cards/blog-card"
import { prisma } from "@/lib/db"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on education technology, digital transformation, and industry trends from Datagami.",
}

const categories = ["All", "Technology", "Education", "Finance", "Careers"] as const

// Static fallback data used when no posts exist in the database
const staticFeaturedPost = {
  title: "The Future of EdTech in India",
  category: "Technology",
  excerpt:
    "How artificial intelligence, cloud computing, and digital-first curricula are reshaping higher education across India — and what institutions need to do to stay ahead.",
  date: "March 10, 2026",
  slug: "#",
}

const staticBlogPosts = [
  {
    title: "How UPI is Transforming Financial Literacy",
    category: "Finance",
    excerpt:
      "The UPI revolution isn't just about payments — it's creating an unprecedented opportunity to build financial literacy from the ground up.",
    date: "February 28, 2026",
    slug: "#",
    imageSrc: "/images/blog/upi-fintech.png",
  },
  {
    title: "Building Industry-Ready Graduates",
    category: "Education",
    excerpt:
      "Universities that align curricula with employer expectations see dramatically better placement rates. Here's the playbook.",
    date: "February 15, 2026",
    slug: "#",
    imageSrc: "/images/blog/career-readiness.png",
  },
  {
    title: "Cloud Computing Career Paths in 2026",
    category: "Careers",
    excerpt:
      "From cloud architect to DevOps engineer — the most in-demand cloud roles and the certifications that matter.",
    date: "January 30, 2026",
    slug: "#",
    imageSrc: "/images/blog/cloud-computing-careers.png",
  },
  {
    title: "Why LMS Adoption Fails (And How to Fix It)",
    category: "Technology",
    excerpt:
      "Most learning management system rollouts fall short. We break down the five root causes and proven strategies for successful adoption.",
    date: "January 18, 2026",
    slug: "#",
  },
  {
    title: "Clinical Research as a Career: A Complete Guide",
    category: "Careers",
    excerpt:
      "Clinical research is one of the fastest-growing career paths in India. Here's everything you need to know to get started.",
    date: "January 5, 2026",
    slug: "#",
  },
]

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    include: { author: { select: { name: true } } },
  })

  const hasDbPosts = posts.length > 0
  const featuredPost = hasDbPosts ? posts[0] : null
  const gridPosts = hasDbPosts ? posts.slice(1) : null

  return (
    <>
      <HeroMinimal
        heading="Blog"
        subtitle="Insights on education technology and digital transformation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        {/* Category Filters */}
        <section className="py-8">
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-brand text-dark"
                      : "bg-gray-100 dark:bg-gray-800 text-muted-brand hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Featured Post */}
        {hasDbPosts && featuredPost ? (
          <section className="pb-12">
            <FadeIn>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block rounded-xl border border-border-custom overflow-hidden hover:shadow-lg transition-shadow duration-200 md:flex"
              >
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.featuredImage || "/images/blog/future-edtech.png"}
                    alt={featuredPost.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover aspect-video md:aspect-auto md:min-h-[280px]"
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    {featuredPost.category && (
                      <span className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    )}
                    {featuredPost.publishedAt && (
                      <span className="text-xs text-muted-brand">
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-body leading-relaxed">{featuredPost.excerpt}</p>
                </div>
              </Link>
            </FadeIn>
          </section>
        ) : (
          <section className="pb-12">
            <FadeIn>
              <Link
                href={`/blog/${staticFeaturedPost.slug}`}
                className="block rounded-xl border border-border-custom overflow-hidden hover:shadow-lg transition-shadow duration-200 md:flex"
              >
                <div className="md:w-1/2">
                  <img
                    src="/images/blog/future-edtech.png"
                    alt={staticFeaturedPost.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover aspect-video md:aspect-auto md:min-h-[280px]"
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium">
                      {staticFeaturedPost.category}
                    </span>
                    <span className="text-xs text-muted-brand">
                      {staticFeaturedPost.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    {staticFeaturedPost.title}
                  </h2>
                  <p className="text-body leading-relaxed">{staticFeaturedPost.excerpt}</p>
                </div>
              </Link>
            </FadeIn>
          </section>
        )}

        {/* Blog Grid */}
        <section className="pb-16">
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hasDbPosts && gridPosts
              ? gridPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <BlogCard
                      title={post.title}
                      category={post.category || "General"}
                      excerpt={post.excerpt || ""}
                      date={post.publishedAt ? formatDate(post.publishedAt) : ""}
                      slug={post.slug}
                      imageSrc={post.featuredImage || undefined}
                    />
                  </StaggerItem>
                ))
              : staticBlogPosts.map((post) => (
                  <StaggerItem key={post.title}>
                    <BlogCard
                      title={post.title}
                      category={post.category}
                      excerpt={post.excerpt}
                      date={post.date}
                      slug={post.slug}
                      imageSrc={post.imageSrc}
                    />
                  </StaggerItem>
                ))}
          </StaggerChildren>
        </section>
      </div>
    </>
  )
}
