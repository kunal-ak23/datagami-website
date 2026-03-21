import type { Metadata } from "next"
import { MapPin, Target, Eye } from "lucide-react"
import { HeroFull } from "@/components/sections/hero-full"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { CTASection } from "@/components/sections/cta-section"
import { company } from "@/lib/data/company"

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Datagami Technology Services — empowering institutions and businesses through technology, partnerships, and innovation. Offices in Mumbai and Bengaluru.',
}

const milestones = [
  { year: "2018", title: "Founded", description: "Datagami Technology Services established in Mumbai with a vision to bridge academia and industry." },
  { year: "2019", title: "First University Partnership", description: "Signed our first university partnership, launching industry-aligned programs for undergraduate students." },
  { year: "2021", title: "1,000th Student Enrolled", description: "Crossed the milestone of 1,000 students trained across finance, technology, and clinical research programs." },
  { year: "2023", title: "Bengaluru Office", description: "Expanded operations with a second office in Bengaluru to serve South India's growing education ecosystem." },
  { year: "2025", title: "10,000+ Students Impacted", description: "Reached over 10,000 students impacted across 50+ partner universities and 200+ programs delivered." },
]

const team = [
  { name: "Kunal Sharma", title: "Founder & CEO" },
  { name: "Priya Mehta", title: "Chief Operating Officer" },
  { name: "Rahul Desai", title: "VP, Partnerships" },
  { name: "Ananya Iyer", title: "Head of Technology" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroFull
        heading="About Datagami"
        subtitle="Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation"
        backgroundColor="bg-brand"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* ── Mission & Vision ── */}
        <section className="py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-border-custom bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-12 rounded-full bg-brand/20">
                  <Target className="size-6 text-dark" />
                </div>
                <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
              </div>
              <p className="text-body leading-relaxed">{company.mission}</p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-border-custom bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-12 rounded-full bg-brand/20">
                  <Eye className="size-6 text-dark" />
                </div>
                <h2 className="text-2xl font-bold text-dark">Our Vision</h2>
              </div>
              <p className="text-body leading-relaxed">{company.vision}</p>
            </div>
          </div>
        </section>

        {/* ── Company Timeline ── */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand/30" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-brand border-4 border-white ring-2 ring-brand/30 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <span className="inline-block text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-dark mb-1">{milestone.title}</h3>
                      <p className="text-body leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Team Section ── */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Leadership Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                {/* Placeholder avatar */}
                <div className="mx-auto mb-4 size-28 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-400">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-sm text-body">{member.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Partners & Clients ── */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-20 rounded-xl bg-gray-100 border border-border-custom flex items-center justify-center"
              >
                <span className="text-sm text-gray-400 font-medium">Partner Logo</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Office Locations ── */}
        <section className="py-16 border-t border-border-custom">
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Offices</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {company.offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-border-custom bg-white p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-brand/20">
                    <MapPin className="size-5 text-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{office.city}</h3>
                </div>
                <p className="text-body leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <CTASection
        title="Partner With Us"
        description="Let's work together to create impactful education and technology solutions."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
