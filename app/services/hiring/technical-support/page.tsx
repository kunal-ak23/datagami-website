import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { technicalSupport } from "@/lib/data/services"
import { Server, Headphones, Wrench } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Technical Support",
  description:
    "Reliable technical support services including IT infrastructure management, helpdesk, and system maintenance.",
}

const stats = [
  { value: "24/7", label: "Support" },
  { value: "99.9%", label: "Uptime" },
  { value: "500+", label: "Systems Managed" },
]

const focusAreas = [
  {
    icon: <Server className="size-6" />,
    title: "IT Infrastructure",
    description:
      "End-to-end management of servers, networks, cloud environments, and on-premise systems.",
  },
  {
    icon: <Headphones className="size-6" />,
    title: "Helpdesk Services",
    description:
      "Dedicated support desk for issue reporting, troubleshooting, and resolution within defined SLAs.",
  },
  {
    icon: <Wrench className="size-6" />,
    title: "System Maintenance",
    description:
      "Proactive monitoring, scheduled updates, security patches, and performance optimization.",
  },
]

export default function TechnicalSupportPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Hiring", href: "/services#hiring" },
            { label: "Technical Support" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={technicalSupport.name}
        subtitle={technicalSupport.description}
        backgroundImage="/images/hero/hero-technical-support.png"
      />

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What We Do"
              description="Keeping your systems running smoothly so you can focus on what matters."
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
              description="From issue reporting to resolution and follow-up."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSupport.processSteps.map((s) => (
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
          title="Reliable Support, Always"
          description="Get reliable technical support for your systems and infrastructure."
          buttonText="Get Support"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
