import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { talentAcquisition } from "@/lib/data/services"
import { Search, UserCheck, Handshake } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Talent Acquisition",
  description:
    "End-to-end talent acquisition services. We source, screen, and place top talent for your organization.",
}

const stats = [
  { value: "500+", label: "Placements" },
  { value: "50+", label: "Client Companies" },
  { value: "90%", label: "Retention Rate" },
]

const focusAreas = [
  {
    icon: <Search className="size-6" />,
    title: "Recruitment & Sourcing",
    description:
      "Access our curated talent pool and professional networks to find candidates that match your exact requirements.",
  },
  {
    icon: <UserCheck className="size-6" />,
    title: "Screening & Assessment",
    description:
      "Multi-stage evaluation process including skill tests, aptitude assessments, and structured interviews.",
  },
  {
    icon: <Handshake className="size-6" />,
    title: "Interview Coordination",
    description:
      "End-to-end coordination of interview logistics, feedback collection, and offer management.",
  },
]

export default function TalentAcquisitionPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Hiring", href: "/services#hiring" },
            { label: "Talent Acquisition" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={talentAcquisition.name}
        subtitle={talentAcquisition.description}
        backgroundImage="/images/hero/hero-talent-acquisition.png"
      />

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What We Do"
              description="We help organizations find, assess, and onboard the right talent."
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Process"
              description="A structured approach to finding the perfect match."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentAcquisition.processSteps.map((s) => (
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
          title="Find the Right Talent"
          description="Let us help you build the team your organization deserves."
          buttonText="Let's Connect"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
