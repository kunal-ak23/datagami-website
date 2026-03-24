import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { finlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { GraduationCap, Award, BookOpen, Users } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { alumniCompanies as alumniCompaniesData } from "@/lib/data/partners"

export const metadata: Metadata = {
  title: 'FinLEARN - BFSI Education Programs',
  description:
    'Comprehensive BFSI education platform offering UG, PG, and certification programs. 95% placement rate, 500+ graduates, 50+ industry partners.',
}

const stats = [
  { value: finlearn.stats.placementRate, label: "Placement Rate" },
  { value: finlearn.stats.graduates, label: "Graduates" },
  { value: finlearn.stats.partners, label: "Partners" },
  { value: finlearn.stats.avgPackage, label: "Avg Package" },
]

const certifications = [
  {
    name: "NISM Certification",
    description: "National Institute of Securities Markets certification for financial professionals.",
  },
  {
    name: "IIBF Certification",
    description: "Indian Institute of Banking & Finance recognized certification programs.",
  },
  {
    name: "IRDA Certification",
    description: "Insurance Regulatory and Development Authority approved insurance certifications.",
  },
  {
    name: "AMFI Certification",
    description: "Association of Mutual Funds in India certification for mutual fund distributors.",
  },
]

const instructors = [
  {
    name: "Dr. Prof. Joseph Ponmany",
    title: "Dean of Financial Courses",
    specialization: "With over 31 years of global experience in financial education and academic leadership.",
  },
  {
    name: "Prof. Smita Agarwal",
    title: "Int. Corporate Trainer",
    specialization: "With over 15 years of global experience in corporate training and financial education.",
  },
  {
    name: "Alwyn Dsouza",
    title: "Learning & Development",
    specialization: "Learning & Development specialist focused on BFSI training programs.",
  },
]

const alumniCompanies = alumniCompaniesData

const ugTracks = finlearn.tracks.filter((t) => t.level === "UG")
const pgTracks = finlearn.tracks.filter((t) => t.level === "PG")
const certTracks = finlearn.tracks.filter((t) => t.level === "Certificate")

const courseSchema = generateCourseSchema({
  name: "FinLEARN - BFSI Education Programs",
  description: finlearn.description,
  url: finlearn.href,
})

const levelIcon: Record<string, React.ReactNode> = {
  UG: <GraduationCap className="size-6" />,
  PG: <BookOpen className="size-6" />,
  Certificate: <Award className="size-6" />,
}

export default function FinLEARNPage() {
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
            { label: "FinLEARN" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="FinLEARN"
        subtitle="Comprehensive BFSI Education Platform"
        accentColor="text-brand"
        badgeText="BFSI Education"
        stats={stats}
        ctaText="Apply Now"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-finlearn.png"
      />

      {/* About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              {finlearn.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Program Tracks"
              description="Industry-aligned curricula designed for every stage of your academic journey."
            />
          </FadeIn>

          {/* Undergraduate Programs */}
          {ugTracks.length > 0 && (
            <div className="mb-12">
              <FadeIn>
                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    {levelIcon.UG}
                  </span>
                  Undergraduate Programs
                </h3>
              </FadeIn>
              <StaggerChildren className="grid md:grid-cols-2 gap-6">
                {ugTracks.map((track) => (
                  <StaggerItem key={track.name}>
                    <div
                      className="bg-white border border-border-custom rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
                        UG
                      </span>
                      <h4 className="text-lg font-semibold text-dark mb-2">
                        {track.name}
                      </h4>
                      <p className="text-sm text-muted-brand">
                        {track.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          )}

          {/* Postgraduate Programs */}
          {pgTracks.length > 0 && (
            <div className="mb-12">
              <FadeIn>
                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    {levelIcon.PG}
                  </span>
                  Postgraduate Programs
                </h3>
              </FadeIn>
              <StaggerChildren className="grid md:grid-cols-2 gap-6">
                {pgTracks.map((track) => (
                  <StaggerItem key={track.name}>
                    <div
                      className="bg-white border border-border-custom rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
                        PG
                      </span>
                      <h4 className="text-lg font-semibold text-dark mb-2">
                        {track.name}
                      </h4>
                      <p className="text-sm text-muted-brand">
                        {track.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          )}

          {/* Certifications */}
          {certTracks.length > 0 && (
            <div>
              <FadeIn>
                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    {levelIcon.Certificate}
                  </span>
                  Certifications
                </h3>
              </FadeIn>
              <StaggerChildren className="grid md:grid-cols-2 gap-6">
                {certTracks.map((track) => (
                  <StaggerItem key={track.name}>
                    <div
                      className="bg-white border border-border-custom rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">
                        Certificate
                      </span>
                      <h4 className="text-lg font-semibold text-dark mb-2">
                        {track.name}
                      </h4>
                      <p className="text-sm text-muted-brand">
                        {track.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          )}
        </div>
      </section>

      {/* Industry Certifications Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industry Certifications"
              description="Prepare for globally recognized certifications that enhance your employability."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <div
                  className="border border-border-custom rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="size-8 text-brand" />
                  </div>
                  <h3 className="text-base font-semibold text-dark mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-brand">{cert.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn>
        <StatsBar stats={stats} variant="dark" />
      </FadeIn>

      {/* Expert Instructors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Meet Our Expert Instructors"
              description="Learn from industry veterans with decades of experience in banking and finance."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.name}>
                <div
                  className="border border-border-custom rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                    <Users className="size-10 text-gray-400" />
                  </div>
                  <h3 className="text-base font-semibold text-dark">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-brand font-medium mt-1">
                    {instructor.title}
                  </p>
                  <p className="text-xs text-muted-brand mt-2">
                    {instructor.specialization}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Where Our Alumni Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Where Our Alumni Work"
              description="Our graduates are employed at leading banks and financial institutions across India."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {alumniCompanies.map((company) => (
              <StaggerItem key={company.name}>
                <div
                  className="bg-white border border-border-custom rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow"
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-10 flex items-center justify-center">
                      <span className="text-sm text-muted-brand font-medium">{company.name}</span>
                    </div>
                  )}
                  <span className="text-xs text-muted-brand font-medium text-center">
                    {company.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={finlearn.faqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Launch Your Finance Career"
          description="Join FinLEARN and take the first step toward a rewarding career in the BFSI sector."
          buttonText="Apply to FinLEARN"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
