import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { upiStudy } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  Layers,
  Globe,
  ShieldCheck,
  Lock,
  Code2,
  BookOpen,
  TrendingUp,
  Landmark,
  Smartphone,
  Briefcase,
  GraduationCap,
  BarChart3,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { Counter } from "@/components/motion/counter"

export const metadata: Metadata = {
  title: 'UPI Study - Digital Payments Education',
  description:
    'Comprehensive program on UPI, digital payments, and fintech. Learn UPI architecture, regulatory frameworks, security, and integration APIs.',
}

const programModules = [
  {
    icon: <Layers className="size-6" />,
    title: "Understanding UPI Architecture",
    description:
      "Deep dive into the Unified Payments Interface stack — NPCI infrastructure, PSP layers, issuer/acquirer flows, and the technology powering real-time payments.",
  },
  {
    icon: <Globe className="size-6" />,
    title: "Digital Payment Ecosystem",
    description:
      "Explore the end-to-end payments landscape including wallets, IMPS, NEFT, RTGS, BBPS, and how UPI fits within India's digital economy.",
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Regulatory Framework",
    description:
      "Understand RBI guidelines, Payment and Settlement Systems Act, KYC norms, data localization rules, and compliance requirements for payment service providers.",
  },
  {
    icon: <Lock className="size-6" />,
    title: "Security & Fraud Prevention",
    description:
      "Learn about multi-factor authentication, encryption protocols, fraud detection mechanisms, dispute resolution, and customer protection frameworks.",
  },
  {
    icon: <Code2 className="size-6" />,
    title: "Integration & APIs",
    description:
      "Hands-on training with UPI APIs, payment gateway integration, webhook management, sandbox testing, and building payment flows for merchants.",
  },
  {
    icon: <BookOpen className="size-6" />,
    title: "Case Studies in Digital Banking",
    description:
      "Analyze real-world implementations from PhonePe, Google Pay, Paytm, and bank-led UPI apps — successes, failures, and lessons learned.",
  },
]

const upiGrowthStats = [
  {
    icon: <TrendingUp className="size-8" />,
    value: "14B+",
    label: "Monthly UPI Transactions",
    description: "India processes over 14 billion UPI transactions every month, making it the world's largest real-time payment system.",
  },
  {
    icon: <Landmark className="size-8" />,
    value: "500+",
    label: "Banks on UPI",
    description: "Over 500 banks are live on the UPI platform, creating massive demand for skilled payments professionals.",
  },
  {
    icon: <Smartphone className="size-8" />,
    value: "350M+",
    label: "Active Users",
    description: "UPI serves over 350 million active users across India, with rapid expansion into international markets.",
  },
]

const careerPaths = [
  {
    icon: <Briefcase className="size-6" />,
    title: "Payments Product Manager",
    description: "Design and manage digital payment products at banks, fintechs, and payment aggregators.",
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Compliance & Risk Analyst",
    description: "Ensure payment systems meet RBI regulations and manage fraud risk across digital channels.",
  },
  {
    icon: <Code2 className="size-6" />,
    title: "Fintech Developer",
    description: "Build and integrate UPI payment solutions, APIs, and merchant onboarding systems.",
  },
  {
    icon: <GraduationCap className="size-6" />,
    title: "Digital Banking Consultant",
    description: "Advise banks and NBFCs on digital transformation and payments strategy.",
  },
  {
    icon: <BarChart3 className="size-6" />,
    title: "Payments Data Analyst",
    description: "Analyze transaction data, detect patterns, and drive business decisions for payment platforms.",
  },
  {
    icon: <Globe className="size-6" />,
    title: "Financial Inclusion Specialist",
    description: "Drive UPI adoption in underserved markets and design inclusive financial products.",
  },
]

const courseSchema = generateCourseSchema({
  name: "UPI Study - Digital Payments Education",
  description: upiStudy.description,
  url: upiStudy.href,
})

export default function UPIStudyPage() {
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
            { label: "UPI Study" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="UPI Study"
        subtitle="Digital Payments Education Program"
        accentColor="text-brand"
        badgeText="Digital Payments"
      />

      {/* About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              {upiStudy.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What You Will Learn"
              description="A comprehensive curriculum covering every facet of India's digital payments revolution."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid features={programModules} />
          </FadeIn>
        </div>
      </section>

      {/* Why UPI Matters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why UPI Matters"
              description="India's UPI is the fastest-growing digital payment system in the world — and the demand for skilled professionals is soaring."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {upiGrowthStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div
                  className="border border-border-custom rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4 text-brand">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-brand mb-1">
                    <Counter target={stat.value} className="text-3xl font-bold text-brand" />
                  </p>
                  <p className="text-sm font-semibold text-dark mb-3">{stat.label}</p>
                  <p className="text-sm text-muted-brand leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Career Outcomes"
              description="UPI Study prepares you for high-growth roles across banks, fintechs, and payment companies."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid features={careerPaths} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Master Digital Payments"
          description="Be part of the digital payments revolution. Enroll in UPI Study and build your career in fintech."
          buttonText="Enroll Today"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
