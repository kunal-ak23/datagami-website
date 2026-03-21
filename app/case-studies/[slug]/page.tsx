import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { CaseStudyCard } from "@/components/cards/case-study-card"
import { caseStudies } from "@/lib/data/case-studies"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}

  return {
    title: cs.title,
    description: cs.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const related = caseStudies.filter((c) => c.slug !== slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-medium mb-4">
              {cs.industry}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-dark">
              {cs.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: cs.title },
          ]}
        />

        {/* The Challenge */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-dark mb-6">The Challenge</h2>
          <p className="text-body leading-relaxed max-w-3xl">{cs.problem}</p>
        </section>

        {/* Our Solution */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-6">Our Solution</h2>
          <p className="text-body leading-relaxed max-w-3xl">{cs.solution}</p>
        </section>

        {/* Results */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-4">Results</h2>
          <p className="text-lg text-muted-brand mb-8">{cs.results.headline}</p>
        </section>
      </div>

      {/* Stats Bar */}
      <StatsBar
        stats={cs.results.metrics.map((m) => ({
          value: m.value,
          label: m.label,
        }))}
        variant="dark"
      />

      {/* Related Case Studies */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">
              Related Case Studies
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <CaseStudyCard
                  key={r.slug}
                  title={r.title}
                  industry={r.industry}
                  summary={r.summary}
                  slug={r.slug}
                />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* CTA */}
      <CTASection
        title="Ready to achieve similar results?"
        description="Partner with Datagami to transform your institution or business."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
