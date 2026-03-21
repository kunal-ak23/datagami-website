import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { ibmIce } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { Cpu, Factory, Wrench, Award, Building2, BadgeCheck } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { Counter } from "@/components/motion/counter"

export const metadata: Metadata = {
  title: 'IBM ICE - Innovation Centre of Excellence Badge Programs',
  description:
    'IBM Innovation Centre of Excellence offering 15+ badge programs across technology, industry, and deep technical skill tracks. 10000+ students certified.',
}

const categoryMeta: Record<string, { icon: React.ReactNode; description: string }> = {
  Technology: {
    icon: <Cpu className="size-7" />,
    description:
      "Explore cutting-edge technology tracks including AI, Cloud, Cybersecurity, Data Science, IoT, and more.",
  },
  Industry: {
    icon: <Factory className="size-7" />,
    description:
      "Industry-specific badge programs covering Banking, Healthcare, Retail, Supply Chain, and other sectors.",
  },
  "Deep Technical Skills": {
    icon: <Wrench className="size-7" />,
    description:
      "Advanced hands-on tracks in Quantum Computing, Mainframe, Blockchain, and enterprise architecture.",
  },
  "Short-term Certificates": {
    icon: <Award className="size-7" />,
    description:
      "Focused certification programs ranging from 2 to 8 weeks, designed for rapid upskilling and career advancement.",
  },
}

const partnerInstitutes = [
  "Partner University 1",
  "Partner University 2",
  "Partner University 3",
  "Partner University 4",
  "Partner University 5",
  "Partner University 6",
  "Partner University 7",
  "Partner University 8",
  "Partner University 9",
  "Partner University 10",
  "Partner University 11",
  "Partner University 12",
]

const courseSchema = generateCourseSchema({
  name: "IBM ICE - Innovation Centre of Excellence Badge Programs",
  description:
    "IBM Innovation Centre of Excellence offering 15+ badge programs across technology, industry, and deep technical skill tracks.",
  provider: "IBM & Datagami Technology Services",
  url: ibmIce.href,
})

export default function IBMICEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Education", href: "/services#education" },
            { label: "IBM ICE" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="IBM ICE"
        subtitle="IBM Innovation Centre of Excellence — Badge Programs"
        accentColor="text-ibm"
        badgeText="IBM Partnership"
        backgroundImage="/images/hero/hero-ibm-ice.png"
        ctaText="Explore Programs"
        ctaHref="#track-categories"
      />

      {/* IBM Logo + Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <img
                src="/images/logo/ibm-ice-logo.jpg"
                alt="IBM ICE"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              The IBM Innovation Centre of Excellence (ICE) is a strategic
              partnership between Datagami and IBM, delivering industry-recognized
              badge programs that equip students with in-demand skills across
              technology, industry domains, and deep technical specializations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {[
              { value: ibmIce.stats.badgePrograms, label: "Badge Programs" },
              { value: ibmIce.stats.studentsCertified, label: "Students Certified" },
              { value: ibmIce.stats.partnerInstitutes, label: "Partner Institutes" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                  <Counter
                    target={stat.value}
                    className="text-5xl font-bold text-ibm"
                  />
                  <p className="text-white/70 mt-2 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* About with IBM ICE Center Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">
                  World-Class Innovation Labs
                </h2>
                <p className="text-muted-brand leading-relaxed mb-4">
                  IBM ICE provides students with access to state-of-the-art innovation
                  labs equipped with the latest enterprise-grade technology. From
                  cloud computing environments to AI development platforms, students
                  gain hands-on experience with the same tools used by Fortune 500
                  companies.
                </p>
                <p className="text-muted-brand leading-relaxed">
                  Our partnership with IBM ensures that curriculum stays aligned with
                  industry demands, and every badge earned is a globally recognized
                  credential that validates real-world skills.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/services/ibm-ice-center.png"
                  alt="IBM ICE Innovation Centre"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Track Categories with Individual Tracks */}
      <section id="track-categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Track Categories"
              description="Choose from four comprehensive categories spanning technology, industry, and specialized skills."
            />
          </FadeIn>

          <div className="space-y-16">
            {ibmIce.trackCategories.map((category) => {
              const meta = categoryMeta[category.name]
              return (
                <FadeIn key={category.name}>
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-ibm/10 text-ibm flex items-center justify-center shrink-0">
                        {meta?.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-dark">
                            {category.name}
                          </h3>
                          <span className="inline-flex items-center justify-center text-xs font-bold text-white bg-ibm px-3 py-1 rounded-full">
                            {category.trackCount} tracks
                          </span>
                        </div>
                        <p className="text-sm text-muted-brand mt-1">
                          {meta?.description}
                        </p>
                      </div>
                    </div>

                    {/* Individual Track Cards */}
                    <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.tracks.map((track) => (
                        <StaggerItem key={track}>
                          <div className="bg-white border border-border-custom rounded-lg p-4 border-l-4 border-l-ibm hover:bg-ibm/5 hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                              <BadgeCheck className="size-5 text-ibm shrink-0" />
                              <span className="text-sm font-medium text-dark">
                                {track}
                              </span>
                            </div>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerChildren>

                    {/* Show "and more" for short-term certificates */}
                    {category.name === "Short-term Certificates" && (
                      <p className="text-sm text-muted-brand mt-4 text-center italic">
                        ...and 50+ more short-term certificate programs
                      </p>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* IBM ICE Lab Image Section */}
      <section className="relative">
        <div className="relative h-80 lg:h-96 overflow-hidden">
          <img
            src="/images/hero/hero-ibm-ice-lab.png"
            alt="IBM ICE Innovation Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/70 flex items-center justify-center">
            <FadeIn>
              <div className="text-center px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  State-of-the-art Innovation Labs
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto text-lg">
                  Hands-on learning with enterprise-grade IBM technology and tools
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner Institutes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Partner Institutes"
              description="IBM ICE programs are delivered through our network of premier educational institutions."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerInstitutes.map((institute) => (
              <StaggerItem key={institute}>
                <div className="bg-white border border-border-custom rounded-xl h-24 flex items-center justify-center hover:shadow-md hover:border-ibm/30 transition-all border-l-4 border-l-ibm">
                  <div className="flex flex-col items-center gap-1">
                    <Building2 className="size-6 text-ibm/40" />
                    <span className="text-xs text-muted-brand font-medium text-center px-2">
                      {institute}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Transform Your Institution with IBM ICE"
          description="Partner with IBM and Datagami to bring world-class badge programs to your campus and empower the next generation of tech professionals."
          buttonText="Schedule Consultation"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
