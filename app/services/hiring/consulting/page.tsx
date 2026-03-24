import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { strategicConsulting } from "@/lib/data/services"
import { Lightbulb, Monitor, TrendingUp } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Strategic Consulting",
  description:
    "Strategic consulting for digital transformation, education technology, and institutional growth strategies.",
}

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Institutional Clients" },
  { value: "95%", label: "Client Satisfaction" },
]

const focusAreas = [
  {
    icon: <Monitor className="size-6" />,
    title: "Digital Transformation",
    description:
      "Guide institutions through technology adoption, from LMS deployment to fully digital operations.",
  },
  {
    icon: <Lightbulb className="size-6" />,
    title: "Education Strategy",
    description:
      "Design curriculum frameworks, program structures, and workforce development roadmaps.",
  },
  {
    icon: <TrendingUp className="size-6" />,
    title: "Institutional Growth",
    description:
      "Scale programs, expand partnerships, and build sustainable models for long-term impact.",
  },
]

export default function ConsultingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Hiring", href: "/services#hiring" },
            { label: "Strategic Consulting" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={strategicConsulting.name}
        subtitle={strategicConsulting.description}
        backgroundImage="/images/hero/hero-consulting.png"
      />

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What We Do"
              description="Advisory services that drive measurable outcomes for institutions and enterprises."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <StaggerItem key={index}>
                <div
                  className="p-6 rounded-xl border border-border-custom hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 text-brand">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-brand">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Process"
              description="A proven methodology from discovery to scale."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicConsulting.processSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div
                  className="relative p-6 rounded-xl border border-border-custom hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-brand text-dark font-bold flex items-center justify-center mb-4 text-lg">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-brand">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Impact Stats */}
      <FadeIn>
        <StatsBar stats={stats} variant="dark" />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Accelerate Your Growth"
          description="Let us help you design and execute your next strategic initiative."
          buttonText="Book a Consultation"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
