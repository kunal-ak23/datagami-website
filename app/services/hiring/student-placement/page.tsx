import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { studentPlacement } from "@/lib/data/services"
import { GraduationCap, Building2, Briefcase } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Student Placement",
  description:
    "Connecting graduates with career opportunities through university partnerships and campus recruitment programs.",
}

const stats = [
  { value: "10K+", label: "Students Placed" },
  { value: "200+", label: "University Partners" },
  { value: "85%", label: "First-Job Placement" },
]

const focusAreas = [
  {
    icon: <GraduationCap className="size-6" />,
    title: "University Partnerships",
    description:
      "Deep collaborations with 200+ universities and colleges to identify and prepare top graduating talent.",
  },
  {
    icon: <Building2 className="size-6" />,
    title: "Campus Recruitment",
    description:
      "Organize and manage campus recruitment drives connecting students directly with hiring companies.",
  },
  {
    icon: <Briefcase className="size-6" />,
    title: "Career Readiness",
    description:
      "Resume building, interview coaching, and soft-skill workshops to maximize placement success.",
  },
]

export default function StudentPlacementPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Hiring", href: "/services#hiring" },
            { label: "Student Placement" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={studentPlacement.name}
        subtitle={studentPlacement.description}
        backgroundImage="/images/hero/hero-student-placement.png"
      />

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What We Do"
              description="Bridging the gap between academic achievement and career success."
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
              description="From profile building to successful placement."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentPlacement.processSteps.map((s) => (
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
          title="Connect Students with Careers"
          description="Partner with us to give your students the career launchpad they deserve."
          buttonText="Partner With Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
