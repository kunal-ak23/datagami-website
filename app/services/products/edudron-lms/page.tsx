import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { edudronLms } from "@/lib/data/products"
import {
  BookOpen,
  BarChart3,
  ClipboardCheck,
  Library,
  LineChart,
  Building2,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "EduDron LMS - Learning Management System for Universities",
  description:
    "Intelligent learning management system for course delivery, assessments, and learner engagement. Real-time analytics, AI-powered assessments, and scalable architecture.",
  alternates: {
    canonical: "https://datagami.in/services/products/edudron-lms",
  },
  openGraph: {
    title: "EduDron LMS - Learning Management System for Universities",
    description:
      "Intelligent learning management system for course delivery, assessments, and learner engagement. Real-time analytics, AI-powered assessments, and scalable architecture.",
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

const features = [
  {
    icon: <BookOpen className="size-6" />,
    title: "Course Management",
    description:
      "Create, organize and deliver courses with rich multimedia content, assignments, and structured learning paths.",
  },
  {
    icon: <BarChart3 className="size-6" />,
    title: "Student Progress Tracking",
    description:
      "Monitor individual and cohort progress in real time with detailed dashboards and automated alerts.",
  },
  {
    icon: <ClipboardCheck className="size-6" />,
    title: "Assessment Tools",
    description:
      "Build quizzes, exams, and rubric-based evaluations with auto-grading and anti-cheating controls.",
  },
  {
    icon: <Library className="size-6" />,
    title: "Content Library",
    description:
      "Centralized repository for study materials, videos, documents, and reusable learning objects.",
  },
  {
    icon: <LineChart className="size-6" />,
    title: "Analytics Dashboard",
    description:
      "Actionable insights on engagement, completion rates, and learning outcomes across programs.",
  },
  {
    icon: <Building2 className="size-6" />,
    title: "Multi-institution Support",
    description:
      "Manage multiple campuses, departments, or partner institutions from a single unified platform.",
  },
]

const steps = [
  {
    step: 1,
    title: "Setup & Configuration",
    description:
      "We configure EduDron LMS to match your institution's structure, branding, and academic workflows.",
  },
  {
    step: 2,
    title: "Customization & Integration",
    description:
      "Tailor modules, integrate with existing systems (ERP, SIS), and migrate your content library.",
  },
  {
    step: 3,
    title: "Launch & Support",
    description:
      "Go live with training for faculty and staff, backed by ongoing technical support and updates.",
  },
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EduDron LMS",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": "Intelligent learning management system for course delivery, assessments, and learner engagement",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "INR" },
  "provider": { "@type": "Organization", "name": "Datagami Technology Services" }
}

const edudronFaqs = [
  {
    question: "What is EduDron LMS?",
    answer: "EduDron LMS is an intelligent learning management system designed to simplify course delivery, assessments, and learner engagement. It enables institutions to manage blended, virtual, and apprenticeship-based learning with real-time analytics.",
  },
  {
    question: "What features does EduDron LMS include?",
    answer: "Key features include course management, student progress tracking, AI-powered assessments, content library, analytics dashboard, multi-institution support, and seamless integration with existing systems.",
  },
  {
    question: "Can EduDron LMS scale across multiple campuses?",
    answer: "Yes, EduDron LMS is built with scalable architecture designed to grow from a single campus to a statewide university system, supporting thousands of concurrent users.",
  },
]

export default function EduDronLmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Products", href: "/services#products" },
            { label: "EduDron LMS" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={edudronLms.name}
        subtitle={edudronLms.tagline}
        backgroundImage="/images/hero/hero-edudron-lms.png"
      />

      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              {edudronLms.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Key Features"
              description="Everything you need to deliver world-class learning experiences."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid features={features} />
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="How It Works"
              description="Get up and running in three straightforward steps."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
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

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={edudronFaqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="See EduDron LMS in Action"
          description="See how EduDron LMS can transform learning at your institution."
          buttonText="Request a Demo"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
