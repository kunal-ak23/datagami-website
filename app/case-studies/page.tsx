import type { Metadata } from "next"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { caseStudies } from "@/lib/data/case-studies"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Proven success stories from Datagami's partnerships with universities and businesses.",
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                title={cs.title}
                industry={cs.industry}
                summary={cs.summary}
                slug={cs.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
