import type { Metadata } from "next"
import Link from "next/link"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { prisma } from "@/lib/db"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Datagami's events, campus facilities, and workshop moments.",
}

const categories = ["All", "Events", "Campus", "Workshops"] as const

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

  // Filter by category if not "All"
  const filteredDbItems =
    activeCategory === "All"
      ? dbItems
      : dbItems.filter((item) => item.category === activeCategory)

  const filteredStaticItems =
    activeCategory === "All"
      ? staticGalleryItems
      : staticGalleryItems.filter((item) => item.category === activeCategory)

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
                  href={cat === "All" ? "/gallery" : `/gallery?category=${cat}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === activeCategory
                      ? "bg-brand text-dark"
                      : "bg-gray-100 text-muted-brand hover:bg-gray-200"
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
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasDbItems
              ? filteredDbItems.map((item) => (
                  <StaggerItem key={item.id}>
                    <div
                      className="relative rounded-xl overflow-hidden border border-border-custom group"
                    >
                      {item.mediaType === "VIDEO" ? (
                        <a
                          href={item.mediaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative"
                        >
                          <img
                            src={item.thumbnailUrl || item.mediaUrl}
                            alt={item.altText || item.title}
                            width={600}
                            height={400}
                            loading="lazy"
                            className="w-full object-cover"
                            style={{ aspectRatio: "4/3" }}
                          />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                              <svg
                                className="w-6 h-6 text-dark ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <img
                          src={item.mediaUrl}
                          alt={item.altText || item.title}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="w-full object-cover"
                          style={{ aspectRatio: "4/3" }}
                        />
                      )}

                      {/* Category badge overlay */}
                      <span className="absolute top-3 left-3 inline-flex px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-dark shadow-sm">
                        {item.category}
                      </span>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))
              : filteredStaticItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div
                      className="relative rounded-xl overflow-hidden border border-border-custom group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="w-full object-cover"
                        style={{ aspectRatio: item.aspect }}
                      />

                      {/* Category badge overlay */}
                      <span className="absolute top-3 left-3 inline-flex px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-dark shadow-sm">
                        {item.category}
                      </span>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
          </StaggerChildren>
        </section>
      </div>
    </>
  )
}
