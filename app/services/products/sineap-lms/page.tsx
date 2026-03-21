import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { sineapLms } from "@/lib/data/products"
import {
  BookOpen,
  BarChart3,
  ClipboardCheck,
  Library,
  LineChart,
  Building2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sineap LMS - Learning Management System",
  description:
    "Comprehensive learning management platform featuring course management, student tracking, assessments, analytics, and multi-institution support.",
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
      "We configure Sineap LMS to match your institution's structure, branding, and academic workflows.",
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

export default function SineapLmsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Products", href: "/services#products" },
            { label: "Sineap LMS" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={sineapLms.name}
        subtitle={sineapLms.tagline}
        backgroundColor="bg-brand"
      />

      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
            {sineapLms.description}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Key Features"
            description="Everything you need to deliver world-class learning experiences."
          />
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            description="Get up and running in three straightforward steps."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Request a Demo"
        description="See how Sineap LMS can transform learning at your institution."
        buttonText="Request a Demo"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
