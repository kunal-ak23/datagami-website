import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { ibmIce } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { Cpu, Factory, Wrench, Award, Building2 } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'IBM ICE - Innovation Centre of Excellence Badge Programs',
  description:
    'IBM Innovation Centre of Excellence offering 15+ badge programs across technology, industry, and deep technical skill tracks. 10000+ students certified.',
}

const stats = [
  { value: ibmIce.stats.badgePrograms, label: "Badge Programs" },
  { value: ibmIce.stats.studentsCertified, label: "Students Certified" },
  { value: ibmIce.stats.partnerInstitutes, label: "Partner Institutes" },
]

const categoryMeta: Record<string, { icon: React.ReactNode; description: string; color: string }> = {
  Technology: {
    icon: <Cpu className="size-7" />,
    description:
      "Explore cutting-edge technology tracks including AI, Cloud, Cybersecurity, Data Science, IoT, and more.",
    color: "bg-ibm/10 text-ibm",
  },
  Industry: {
    icon: <Factory className="size-7" />,
    description:
      "Industry-specific badge programs covering Banking, Healthcare, Retail, Supply Chain, and other sectors.",
    color: "bg-ibm/10 text-ibm",
  },
  "Deep Technical Skills": {
    icon: <Wrench className="size-7" />,
    description:
      "Advanced hands-on tracks in DevOps, Quantum Computing, Blockchain, Mainframe, and enterprise architecture.",
    color: "bg-ibm/10 text-ibm",
  },
  "Short-term Certificates": {
    icon: <Award className="size-7" />,
    description:
      "Focused certification programs ranging from 2 to 8 weeks, designed for rapid upskilling and career advancement.",
    color: "bg-ibm/10 text-ibm",
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
        stats={stats}
        backgroundImage="/images/hero/hero-ibm-ice.png"
      />

      {/* About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              The IBM Innovation Centre of Excellence (ICE) is a strategic
              partnership between Datagami and IBM, delivering industry-recognized
              badge programs that equip students with in-demand skills across
              technology, industry domains, and deep technical specializations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Track Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Track Categories"
              description="Choose from four comprehensive categories spanning technology, industry, and specialized skills."
            />
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {ibmIce.trackCategories.map((category) => {
              const meta = categoryMeta[category.name]
              return (
                <StaggerItem key={category.name}>
                  <div
                    className="bg-white border border-border-custom rounded-xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${meta?.color ?? "bg-ibm/10 text-ibm"}`}
                      >
                        {meta?.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-dark">
                            {category.name}
                          </h3>
                          <span className="inline-flex items-center justify-center text-xs font-bold text-white bg-ibm px-3 py-1 rounded-full">
                            {category.trackCount} tracks
                          </span>
                        </div>
                        <p className="text-sm text-muted-brand leading-relaxed">
                          {meta?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Partner Institutes */}
      <section className="py-16">
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
                <div
                  className="bg-white border border-border-custom rounded-xl h-24 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center gap-1">
                    <Building2 className="size-6 text-gray-300" />
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
          title="Schedule a Consultation"
          description="Learn how IBM ICE badge programs can transform your institution's technology curriculum."
          buttonText="Schedule Consultation"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
