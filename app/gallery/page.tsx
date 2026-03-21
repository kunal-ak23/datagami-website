import type { Metadata } from "next"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Datagami's events, campus facilities, and workshop moments.",
}

const categories = ["All", "Events", "Campus", "Workshops"] as const

const galleryItems = [
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

export default function GalleryPage() {
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
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-brand text-dark"
                    : "bg-gray-100 text-muted-brand hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
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
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
