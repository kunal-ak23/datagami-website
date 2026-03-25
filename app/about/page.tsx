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
  title: 'About Datagami - EdTech Company Transforming Higher Education Since 2018',
  description: 'Datagami Technology Services — pioneering B2B education technology company with offices in Mumbai and Bengaluru. 50+ partner universities, 10K+ students impacted.',
  alternates: {
    canonical: 'https://datagami.in/about',
  },
  openGraph: {
    title: 'About Datagami - EdTech Company Transforming Higher Education Since 2018',
    description: 'Datagami Technology Services — pioneering B2B education technology company with offices in Mumbai and Bengaluru. 50+ partner universities, 10K+ students impacted.',
    images: ['/images/hero/hero-about.png'],
  },
}

const milestones = [
  { year: "2018", title: "Founded", description: "Datagami Technology Services established in Mumbai with a vision to bridge academia and industry." },
  { year: "2019", title: "First University Partnership", description: "Signed our first university partnership, launching industry-aligned programs for undergraduate students." },
  { year: "2021", title: "1,000th Student Enrolled", description: "Crossed the milestone of 1,000 students trained across finance, technology, and clinical research programs." },
  { year: "2023", title: "Bengaluru Office", description: "Expanded operations with a second office in Bengaluru to serve South India's growing education ecosystem." },
  { year: "2025", title: "10,000+ Students Impacted", description: "Reached over 10,000 students impacted across 50+ partner universities and 200+ programs delivered." },
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
    answer: "Datagami Technology Services was founded in 2018 in Mumbai with a vision to bridge the gap between academia and industry through technology-driven education solutions.",
  },
  {
    question: "Where are Datagami's offices located?",
    answer: "Datagami has offices in Mumbai (309, Crescent Business Square, Saki Naka) and Bengaluru (191, Appanna Building, Jakkuru), serving universities and businesses across India.",
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
        <section className="py-16">
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <StaggerItem>
              <div className="rounded-2xl glass-card dark:liquid-glass p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-brand/20">
                    <Target className="size-6 text-dark" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">Our Mission</h2>
                </div>
                <p className="text-body leading-relaxed">{company.mission}</p>
              </div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem>
              <div className="rounded-2xl glass-card dark:liquid-glass p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-brand/20">
                    <Eye className="size-6 text-dark" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">Our Vision</h2>
                </div>
                <p className="text-body leading-relaxed">{company.vision}</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ── Our Story ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">Our Story</h2>
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
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Core Values</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-brand">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Company Timeline ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">Our Journey</h2>
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand/30" />

            <StaggerChildren className="space-y-12">
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
                        <h3 className="text-xl font-bold text-dark mb-1">{milestone.title}</h3>
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
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Leadership Team</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="mx-auto mb-4 size-28 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                  <p className="text-sm text-body">{member.title}</p>
                  {'subtitle' in member && member.subtitle && (
                    <p className="text-xs text-muted-brand mt-1">{member.subtitle}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Partners & Clients ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Partners & Collaborations</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <LogoTicker
              logos={allPartners.map((p) => ({ name: p.name, src: p.logo }))}
            />
          </FadeIn>
        </section>

        {/* ── Office Locations ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">Our Offices</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {company.offices.map((office) => (
              <StaggerItem key={office.city}>
                <div
                  className="rounded-2xl glass-card dark:liquid-glass p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-brand/20">
                      <MapPin className="size-5 text-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-dark">{office.city}</h3>
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
