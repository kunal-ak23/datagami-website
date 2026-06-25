import type { Metadata } from "next"
import { MapPin, Target, Eye } from "lucide-react"
import { HeroFull } from "@/components/sections/hero-full"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { company } from "@/lib/data/company"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { LogoTicker } from "@/components/carousels/logo-ticker"
import { allPartners } from "@/lib/data/partners"

export const metadata: Metadata = {
  title: 'About Datagami - EdTech Company Transforming Higher Education Since 2019',
  description: 'Datagami Technology Services — pioneering B2B education technology company based in Mumbai. 50+ partner universities, 10K+ students impacted.',
  alternates: {
    canonical: 'https://datagami.in/about',
  },
  openGraph: {
    title: 'About Datagami - EdTech Company Transforming Higher Education Since 2019',
    description: 'Datagami Technology Services — pioneering B2B education technology company based in Mumbai. 50+ partner universities, 10K+ students impacted.',
    images: ['/images/hero/hero-about.png'],
  },
}

const milestones = [
  { year: "2019", title: "Company Established", description: "Set up a 2,000 sq ft office with state-of-the-art classrooms and datacentres and a 25-member team — partnering with IBM, SAS and EC-Council." },
  { year: "2020", title: "Pivot to a B2B Model", description: "Moved from a B2C to a B2B model, onboarded our first 4 universities, and signed a system-integration contract with SBI Mutual Fund (SBIMF)." },
  { year: "2021", title: "Universities & Enterprise Contracts", description: "Added 2 more universities, signed an SI contract with BDO, and won an Oracle Retail migration contract for a Dubai-based company." },
  { year: "2022", title: "FinLEARN Launched", description: "Launched our own banking & finance program, FinLEARN, re-entered the B2C model, and onboarded 3 more universities." },
  { year: "2023", title: "EduDron LMS & Technology Courses", description: "Built EduDron LMS — a student-centric learning portal — launched technology courses, and signed our first 2 FinLEARN universities and 2 IBM ICE universities." },
  { year: "2024", title: "Clinomic Partnership", description: "Partnered with Clinomic and onboarded 7 universities for the IBM ICE technology program." },
  { year: "2025", title: "Building Our Own Courses", description: "Added 5 more universities for IBM ICE and began developing our own proprietary courses." },
  { year: "2026", title: "Degree-Integrated Specialisations", description: "Launched our own skill-based short-term courses plus BCA and MCA degree-integrated specialisations with placement assistance, and MBA placement-assistance programs at universities across India." },
]

const team = company.leadership.map((m) => ({
  name: m.name,
  title: m.title,
  subtitle: m.bio,
  image: m.image,
}))

const aboutFaqs = [
  {
    question: "When was Datagami founded?",
    answer: "Datagami Technology Services was established in 2019 in Mumbai with a vision to bridge the gap between academia and industry through technology-driven education solutions.",
  },
  {
    question: "Where are Datagami's offices located?",
    answer: "Datagami's office is in Mumbai (309, Crescent Business Square, Saki Naka), serving universities and businesses across India.",
  },
  {
    question: "What is Datagami's mission?",
    answer: "Our mission is to transform education by creating meaningful connections between learning and real-world application, leveraging cutting-edge technology solutions that bridge the skills gap effectively, and ensuring every student graduates with the skills and confidence to thrive.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroFull
        heading="Transforming Higher Education Through Innovation"
        subtitle="Datagami Technology Services Private Limited is a pioneering B2B education technology and consulting company dedicated to helping universities, institutions, and businesses navigate complex policy implementations, strengthen industry partnerships, and enhance student career readiness."
        backgroundImage="/images/hero/hero-about.png"
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
        <section className="py-12">
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <StaggerItem>
              <div className="rounded-2xl glass-card dark:liquid-glass p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-11 rounded-full bg-brand/20">
                    <Target className="size-5 text-dark" />
                  </div>
                  <h2 className="text-lg font-bold text-dark">Our Mission</h2>
                </div>
                <p className="text-body leading-relaxed">{company.mission}</p>
              </div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem>
              <div className="rounded-2xl glass-card dark:liquid-glass p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-11 rounded-full bg-brand/20">
                    <Eye className="size-5 text-dark" />
                  </div>
                  <h2 className="text-lg font-bold text-dark">Our Vision</h2>
                </div>
                <p className="text-body leading-relaxed">{company.vision}</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ── Our Story ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-8 text-center">Our Story</h2>
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-4">
              {company.story.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-body leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── Core Values ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-10 text-center">Our Core Values</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 hover:shadow-brand-md transition-all h-full">
                  <h3 className="text-base font-bold text-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-brand">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Company Timeline ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-12 text-center">Our Journey</h2>
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand/30" />

            <StaggerChildren className="space-y-10">
              {milestones.map((milestone, i) => {
                const isLeft = i % 2 === 0
                return (
                  <StaggerItem key={milestone.year}>
                    <div
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full bg-brand border-4 border-white dark:border-gray-950 ring-2 ring-brand/30 z-10" />

                      {/* Content */}
                      <div
                        className={`ml-12 md:ml-0 md:w-1/2 ${
                          isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                        }`}
                      >
                        <span className="inline-block text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-dark mb-1">{milestone.title}</h3>
                        <p className="text-body leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* ── Team Section ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-10 text-center">Our Leadership Team</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="glass-card dark:liquid-glass rounded-2xl p-6 text-center h-full flex flex-col items-center hover:-translate-y-1 hover:shadow-brand-md transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="mb-4 size-24 rounded-full object-cover ring-2 ring-brand/20 ring-offset-2 ring-offset-transparent"
                  />
                  <h3 className="text-base font-bold text-dark">{member.name}</h3>
                  <p className="text-sm font-medium text-brand mt-1 mb-3 min-h-[2.5rem] flex items-center justify-center">
                    {member.title}
                  </p>
                  {'subtitle' in member && member.subtitle && (
                    <p className="text-xs text-muted-brand leading-relaxed line-clamp-4">{member.subtitle}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Partners & Clients ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-10 text-center">Our Partners & Collaborations</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <LogoTicker
              logos={allPartners.map((p) => ({ name: p.name, src: p.logo }))}
            />
          </FadeIn>
        </section>

        {/* ── Office Locations ── */}
        <section className="py-12 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-2xl font-bold text-dark mb-10 text-center">Our Offices</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {company.offices.map((office) => (
              <StaggerItem key={office.city}>
                <div
                  className="rounded-2xl glass-card dark:liquid-glass p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-brand/20">
                      <MapPin className="size-5 text-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-dark">{office.city}</h3>
                  </div>
                  <p className="text-body leading-relaxed">{office.address}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      </div>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={aboutFaqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Partner With Us"
          description="Let's work together to create impactful education and technology solutions."
          buttonText="Get in Touch"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
