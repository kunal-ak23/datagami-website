import type { Metadata } from "next"
import Link from "next/link"
import {
  GraduationCap, Code, Award, BookOpen, Monitor, Users, Server,
  ArrowRight, CheckCircle, Layers, Target, Scale, Clock, BarChart3,
} from "lucide-react"

import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ProgramCard } from "@/components/cards/program-card"
import { LogoTicker } from "@/components/carousels/logo-ticker"
import { IndustriesGrid } from "@/components/sections/industries-grid"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"
import { Counter } from "@/components/motion/counter"

import { company } from "@/lib/data/company"
import { allPartners } from "@/lib/data/partners"
import { websiteSchema } from "@/lib/schemas/website"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Datagami - Education Programs, Learning Platform, Talent & Enterprise Software",
  description:
    "Datagami helps universities and businesses bridge academia and industry — degree-integrated programs (FinLEARN, TechLEARN, IBM ICE), skill-based short-term courses, the EduDron AI learning platform, recruitment & staffing, and custom enterprise software. 50+ universities, 10K+ students.",
  alternates: {
    canonical: "https://datagami.in",
  },
  openGraph: {
    title: "Datagami - Education Programs, Learning Platform, Talent & Enterprise Software",
    description:
      "Bridging academia and industry — degree-integrated programs, an AI learning platform, recruitment & staffing, and custom enterprise software for universities and businesses.",
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

const heroStats = [
  { target: company.stats.partnerUniversities, label: "Universities" },
  { target: company.stats.studentsImpacted, label: "Students Impacted" },
  { target: company.stats.programsDelivered, label: "Programs Delivered" },
  { target: "95%", label: "Placement Rate" },
]

const pillars = [
  {
    icon: <GraduationCap className="size-7" />,
    title: "Education Programs",
    description: "Degree-integrated programs and skill-based courses that embed into any university curriculum.",
    href: "#education",
  },
  {
    icon: <Monitor className="size-7" />,
    title: "Learning Platform",
    description: "EduDron — an AI-powered LMS that runs the entire learner journey from one platform.",
    href: "#platform",
  },
  {
    icon: <Users className="size-7" />,
    title: "Talent & Hiring",
    description: "Recruitment and staffing delivered as a service, from sourcing to onboarding.",
    href: "#talent",
  },
  {
    icon: <Server className="size-7" />,
    title: "Enterprise Software",
    description: "Custom software engineering, AI platforms and managed infrastructure for institutions.",
    href: "#software",
  },
]

const educationPrograms = [
  {
    title: "FinLEARN",
    href: "/services/education/finlearn",
    icon: <GraduationCap className="size-6" />,
    image: "/images/cards/finlearn-card.png",
    description:
      "Integrated BFSI & finance degree programs and short-term certifications — in association with AAFM, with a 95% placement rate.",
  },
  {
    title: "TechLEARN",
    href: "/services/education/techlearn",
    icon: <Code className="size-6" />,
    image: "/images/cards/techlearn-card.png",
    description:
      "Industry-ready specialisations in cloud, cyber security, AI, data science and financial engineering — integrate them into any IT degree.",
  },
  {
    title: "IBM ICE",
    href: "/services/education/ibm-ice",
    icon: <Award className="size-6" />,
    image: "/images/cards/ibm-ice-card.png",
    description:
      "IBM-certified, industry-aligned technology specialisations embedded into your degree through project-based learning and IBM digital badges.",
  },
  {
    title: "Skill-Based Short-Term Courses",
    href: "/services/education/short-term-courses",
    icon: <BookOpen className="size-6" />,
    image: "/images/short-term-courses/program-in-action.png",
    description:
      "UGC & NEP 2020-aligned, credit-linked skill courses for UG & PG students — career-ready credentials across 10+ in-demand domains.",
  },
]

const featureRows = [
  {
    id: "platform",
    eyebrow: "Learning Platform",
    title: "EduDron — the entire learner journey on one AI-powered platform",
    description:
      "EduDron replaces 3–5 disconnected tools with a single intelligent LMS — AI-built courses, proctored exams, verified certificates, business simulations, career mapping and a built-in jobs portal.",
    points: [
      "AI-assisted course authoring",
      "Proctored exams (instructor or AI-evaluated)",
      "Verified digital credentials",
      "Business simulations & career mapping",
      "Integrated jobs portal",
      "White-label, multi-tenant",
    ],
    stats: [
      { v: "1", l: "platform replaces 3–5 tools" },
      { v: "7", l: "tailored login types" },
      { v: "10×", l: "faster course build" },
    ],
    href: "/services/products/edudron-lms",
    cta: "Explore EduDron",
    image: "/images/hero/hero-edudron-lms.png",
    imageAlt: "EduDron AI-powered learning platform",
  },
  {
    id: "talent",
    eyebrow: "Talent & Hiring",
    title: "Recruitment & Staffing — delivered as a service",
    description:
      "We connect organisations with high-caliber professionals across technology, life sciences, engineering, finance and more — handling everything from sourcing and screening to onboarding, so you hire faster and smarter.",
    points: [
      "Recruitment as a Service (RaaS)",
      "Permanent, contract & contract-to-hire",
      "Niche and high-volume hiring",
      "End-to-end: sourcing to onboarding",
    ],
    stats: [
      { v: "15+", l: "years leadership experience" },
      { v: "8", l: "industries served" },
      { v: "7", l: "staffing models" },
    ],
    href: "/services/hiring/talent-acquisition",
    cta: "Explore Recruitment & Staffing",
    image: "/images/hero/hero-talent-acquisition.png",
    imageAlt: "Recruitment and staffing professionals",
  },
  {
    id: "software",
    eyebrow: "Enterprise Software",
    title: "Custom enterprise software, AI platforms & managed infrastructure",
    description:
      "Custom software engineering, AI-enabled platforms, and NOC/SOC enterprise infrastructure for institutions that demand control. We architect systems — we don't deploy templates.",
    points: [
      "Custom enterprise software in production",
      "Enterprise infrastructure & managed services",
      "AI & advanced analytics, embedded",
      "Security-first, audit-ready architecture",
    ],
    stats: [
      { v: "5,000+", l: "active platform users" },
      { v: "5+", l: "years operational" },
      { v: "3", l: "countries served" },
    ],
    href: "/services/software/enterprise-solutions",
    cta: "Explore Enterprise Solutions",
    image: "/images/hero/hero-team-innovation.png",
    imageAlt: "Enterprise software and infrastructure team",
  },
]

const whyChooseIcons = [
  <Layers key="layers" className="size-6" />,
  <Target key="target" className="size-6" />,
  <Scale key="scale" className="size-6" />,
  <Clock key="clock" className="size-6" />,
  <Users key="users" className="size-6" />,
  <BarChart3 key="barchart" className="size-6" />,
]

const homeFaqs = [
  {
    question: "What does Datagami offer?",
    answer:
      "Datagami is a B2B education-technology and enterprise solutions partner. We deliver degree-integrated education programs (FinLEARN, TechLEARN, IBM ICE) and skill-based short-term courses, the EduDron AI-powered learning platform, recruitment & staffing services, and custom enterprise software & digital solutions — for universities, institutions and businesses.",
  },
  {
    question: "How many universities does Datagami partner with?",
    answer:
      "Datagami partners with 50+ universities and institutions, impacting over 10,000 students through 200+ programs delivered across BFSI, technology, AI, data science, cyber security and more.",
  },
  {
    question: "Who is Datagami for?",
    answer:
      "Universities and colleges looking to embed industry-aligned programs and a modern learning platform; and businesses that need recruitment & staffing or custom enterprise software, AI platforms and managed infrastructure.",
  },
  {
    question: "How can my institution or business partner with Datagami?",
    answer:
      "Reach out through our contact page or email query@datagami.in. We offer a free initial consultation to understand your goals, followed by a tailored proposal and dedicated implementation support.",
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden bg-pattern flex items-center min-h-[calc(100svh-4rem)]">
        <img
          src="/images/hero/hero-students-collaborating.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-block bg-white rounded-xl p-2 shadow-lg">
              <img src="/images/logo/datagami-logo.webp" alt="Datagami logo" className="h-8 w-auto block" />
            </div>
            <span className="block text-brand text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              Education · Platform · Talent · Software
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Bridging academia and industry — with programs, platforms and people
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-white/70 mb-6 max-w-2xl">
              Datagami helps universities and businesses close the gap between learning and the real world — through degree-integrated programs, an AI-powered learning platform, recruitment &amp; staffing, and custom enterprise software.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#pillars"
                className="inline-flex items-center gap-2 bg-brand text-[#1A1A1A] px-7 py-2.5 rounded-full font-semibold hover:bg-brand/90 transition-colors"
              >
                Explore Solutions
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Partner with Us
              </Link>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <Counter target={stat.target} className="text-2xl md:text-3xl font-bold text-brand" />
                  <p className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted-by ticker */}
      <section className="py-12 border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-brand">
            Trusted by leading universities &amp; institutions
          </p>
        </div>
        <FadeIn>
          <LogoTicker logos={allPartners.map((p) => ({ name: p.name, src: p.logo }))} />
        </FadeIn>
      </section>

      {/* 3. Four pillars */}
      <section id="pillars" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Four ways we partner with you"
              description="One company across the full arc — from designing programs to placing graduates and building the systems that run it all."
              gradient
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <Link
                  href={p.href}
                  className="group flex flex-col h-full glass-card dark:liquid-glass rounded-2xl p-7 border border-transparent hover:border-brand/30 hover:-translate-y-1 hover:shadow-brand-md transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-brand mb-4">{p.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-brand font-medium text-sm group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 4. Education programs */}
      <section id="education" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Education programs that embed into your degrees"
              description="Industry-aligned programs and skill-based courses universities plug into any curriculum — with certifications, hands-on projects and placement support."
              gradient
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationPrograms.map((p) => (
              <StaggerItem key={p.title}>
                <ProgramCard
                  title={p.title}
                  description={p.description}
                  href={p.href}
                  icon={p.icon}
                  backgroundImage={p.image}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5. Flagship feature rows: EduDron, Recruitment, Enterprise */}
      {featureRows.map((row, i) => {
        const imageFirst = i % 2 === 1
        return (
          <section key={row.id} id={row.id} className="py-16 md:py-20 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <FadeIn direction={imageFirst ? "left" : "right"} className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    className="rounded-2xl shadow-lg w-full object-cover aspect-[16/10] max-h-[380px]"
                  />
                </FadeIn>

                {/* Text */}
                <FadeIn direction={imageFirst ? "right" : "left"} className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <div>
                    <span className="block text-brand text-sm font-semibold uppercase tracking-wider mb-3">
                      {row.eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{row.title}</h2>
                    <p className="text-muted-brand leading-relaxed mb-6">{row.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {row.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                          <span className="text-sm text-dark">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-6 mb-8">
                      {row.stats.map((s) => (
                        <div key={s.l}>
                          <p className="text-2xl font-bold text-brand">{s.v}</p>
                          <p className="text-xs text-muted-brand max-w-[10rem]">{s.l}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={row.href}
                      className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1A1A1A]/90 transition-colors"
                    >
                      {row.cta}
                      <ArrowRight className="size-5" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        )
      })}

      {/* 6. Mid CTA */}
      <FadeIn>
        <CTASection
          title="Ready to transform your institution or business?"
          description="Tell us your goals — we'll tailor the programs, platform, talent or software to fit."
          buttonText="Partner with Datagami"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>

      {/* 7. Why partner with Datagami */}
      <section className="py-16 md:py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Why partner with Datagami" gradient />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid
              features={company.whyChooseUs.map((item, index) => ({
                icon: whyChooseIcons[index],
                title: item.title,
                description: item.description,
              }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* 8. Industries we serve */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industries we serve"
              description="Powering future-ready skills and digital transformation across sectors."
              gradient
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <IndustriesGrid />
          </FadeIn>
        </div>
      </section>

      {/* 9. Testimonials */}
      <TestimonialCarousel />

      {/* 10. FAQs */}
      <FadeIn>
        <FAQSection faqs={homeFaqs} />
      </FadeIn>

      {/* 11. Final CTA */}
      <FadeIn>
        <CTASection
          title="Let's build the future together"
          buttonText="Start the Conversation"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
