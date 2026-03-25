import type { Metadata } from "next"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { caseStudies } from "@/lib/data/case-studies"

import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Case Studies - 85% Employment Increase & 200+ Industry Partnerships",
  description:
    "Real results from real partnerships. See how Datagami helped universities achieve 85% employment increase, 200+ industry partnerships, and 50% faster policy implementation.",
  alternates: {
    canonical: "https://datagami.in/case-studies",
  },
  openGraph: {
    title: "Case Studies - 85% Employment Increase & 200+ Industry Partnerships",
    description:
      "Real results from real partnerships. See how Datagami helped universities achieve 85% employment increase, 200+ industry partnerships, and 50% faster policy implementation.",
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <HeroMinimal
        heading="Case Studies"
        subtitle="Real results from real partnerships"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies" },
          ]}
        />

        {/* Case Study Grid */}
        <section className="py-16">
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <CaseStudyCard
                  title={cs.title}
                  industry={cs.industry}
                  summary={cs.summary}
                  slug={cs.slug}
                  imageSrc={cs.imageSrc}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      </div>
    </>
  )
}
