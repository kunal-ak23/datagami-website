import type { Metadata } from "next"
import Link from "next/link"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { prisma } from "@/lib/db"
import { GalleryLightbox, type GalleryMediaItem } from "@/components/gallery/gallery-lightbox"

import { FadeIn } from "@/components/motion/fade-in"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "University Partnerships, Events & Campus Gallery",
  description:
    "See Datagami's university partnerships, IBM ICE collaborations, student events, corporate training sessions and industry celebrations.",
  alternates: {
    canonical: "https://www.datagami.in/gallery",
  },
  openGraph: {
    title: "Gallery - Events, Partnerships & Campus Life at Datagami",
    description:
      "Explore photos and videos from Datagami's university partnerships, IBM ICE collaborations, student events, corporate training sessions, and industry celebrations.",
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

// Static fallback data used when no gallery items exist in the database
const staticGalleryItems = [
  { title: "Annual Tech Summit 2025", category: "Events", aspect: "4/3", image: "/images/gallery/event-conference.png" },
  { title: "Mumbai Office Campus", category: "Campus", aspect: "16/9", image: "/images/gallery/campus-building.png" },
  { title: "FinLEARN Workshop Session", category: "Workshops", aspect: "4/3", image: "/images/gallery/workshop-coding.png" },
  { title: "Industry Partner Meet", category: "Events", aspect: "16/9", image: "/images/gallery/event-guest-lecture.png" },
  { title: "Bengaluru Campus Tour", category: "Campus", aspect: "4/3", image: "/images/gallery/campus-courtyard.png" },
  { title: "TechLEARN Hands-on Lab", category: "Workshops", aspect: "16/9", image: "/images/gallery/workshop-electronics.png" },
  { title: "Graduation Ceremony 2025", category: "Events", aspect: "4/3", image: "/images/gallery/event-graduation.png" },
  { title: "Student Common Area", category: "Campus", aspect: "16/9", image: "/images/gallery/campus-library.png" },
  { title: "Cloud Computing Bootcamp", category: "Workshops", aspect: "4/3", image: "/images/gallery/workshop-cloud.png" },
  { title: "University Partnership Signing", category: "Events", aspect: "16/9", image: "/images/gallery/event-hackathon.png" },
  { title: "Training Lab Setup", category: "Campus", aspect: "4/3", image: "/images/gallery/campus-computer-lab.png" },
  { title: "IBM ICE Badge Ceremony", category: "Workshops", aspect: "16/9", image: "/images/gallery/workshop-training.png" },
]

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function GalleryPage({ searchParams }: PageProps) {
  const { category } = await searchParams
  const activeCategory = category || "All"

  const dbItems = await prisma.galleryItem.findMany({
    orderBy: { sortOrder: "asc" },
  })

  const hasDbItems = dbItems.length > 0

  // Normalize DB and static items into a single shape the viewer understands
  const allItems: GalleryMediaItem[] = hasDbItems
    ? dbItems.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        mediaType: item.mediaType,
        src: item.mediaUrl,
        thumbnail: item.thumbnailUrl || item.mediaUrl,
        alt: item.altText || item.title,
        aspect: "4/3",
      }))
    : staticGalleryItems.map((item, i) => ({
        id: `static-${i}`,
        title: item.title,
        category: item.category,
        mediaType: "IMAGE" as const,
        src: item.image,
        thumbnail: item.image,
        alt: item.title,
        aspect: item.aspect,
      }))

  // Build the filter list dynamically from the categories that actually exist,
  // so the buttons always match the real data (DB or static fallback).
  const categories = ["All", ...Array.from(new Set(allItems.map((i) => i.category)))]

  // Filter by category if not "All"
  const items =
    activeCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <HeroMinimal
        heading="Gallery"
        subtitle="Explore our events, campus, and workshops"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Gallery" },
          ]}
        />

        {/* Category Filters */}
        <section className="py-8">
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={cat === "All" ? "/gallery" : `/gallery?category=${encodeURIComponent(cat)}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === activeCategory
                      ? "bg-brand text-dark"
                      : "bg-gray-100 dark:bg-gray-800 text-muted-brand hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Gallery Grid */}
        <section className="pb-16">
          {items.length > 0 ? (
            <GalleryLightbox items={items} />
          ) : (
            <FadeIn>
              <p className="text-center text-muted-brand py-16">
                No items in this category yet. Check back soon.
              </p>
            </FadeIn>
          )}
        </section>
      </div>
    </>
  )
}
