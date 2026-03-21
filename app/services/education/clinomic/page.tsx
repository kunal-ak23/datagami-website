import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { clinomic } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  FlaskConical,
  ShieldCheck,
  Database,
  Scale,
  FileText,
  UserCheck,
  MessageSquare,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'Clinomic - Clinical Research Education',
  description:
    'Clinomic 6-month clinical research program covering methodology, GCP, data management, and regulatory affairs. 500+ successful placements, 95% placement rate.',
}

const stats = [
  { value: clinomic.stats.placements, label: "Placements" },
  { value: clinomic.stats.placementRate, label: "Placement Rate" },
]

const coreAreaFeatures = [
  {
    icon: <FlaskConical className="size-6" />,
    title: "Clinical Research Methodology",
    description:
      "Master study design, protocol development, patient recruitment strategies, and clinical trial phases from pre-clinical to post-market surveillance.",
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Good Clinical Practice (GCP)",
    description:
      "Learn ICH-GCP guidelines, ethical considerations, informed consent processes, and quality assurance in clinical trials.",
  },
  {
    icon: <Database className="size-6" />,
    title: "Data Management",
    description:
      "Gain hands-on experience with clinical data management systems, CRF design, data cleaning, coding, and database lock procedures.",
  },
  {
    icon: <Scale className="size-6" />,
    title: "Regulatory Affairs",
    description:
      "Understand CDSCO, FDA, and EMA regulatory submissions, drug approval processes, and pharmacovigilance requirements.",
  },
]

const applicationSteps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your application with academic details and a statement of purpose.",
    icon: <FileText className="size-5" />,
  },
  {
    step: 2,
    title: "Assessment",
    description: "Complete an aptitude assessment covering life sciences fundamentals.",
    icon: <CheckCircle2 className="size-5" />,
  },
  {
    step: 3,
    title: "Interview",
    description: "Attend a personal interview with the admissions panel.",
    icon: <MessageSquare className="size-5" />,
  },
  {
    step: 4,
    title: "Enrollment",
    description: "Receive your offer letter and complete the enrollment formalities.",
    icon: <UserCheck className="size-5" />,
  },
]

const courseSchema = generateCourseSchema({
  name: "Clinomic - Clinical Research Education",
  description:
    "Clinomic 6-month clinical research program covering methodology, GCP, data management, and regulatory affairs.",
  duration: "P6M",
  url: clinomic.href,
})

export default function ClinomicPage() {
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
            { label: "Clinomic" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="Clinomic"
        subtitle="Clinical Research Education Centre"
        accentColor="text-clinomic"
        badgeText="6-Month Program"
        stats={stats}
      />

      {/* About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
              Clinomic is Datagami&apos;s dedicated clinical research education
              centre, offering a comprehensive 6-month program that prepares
              graduates for rewarding careers in the clinical research industry.
              With a strong focus on practical training and industry readiness,
              Clinomic has placed over 500 professionals across leading CROs and
              pharmaceutical companies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Core Areas of Study"
              description="Our curriculum covers the four pillars of clinical research, ensuring you graduate job-ready."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid features={coreAreaFeatures} />
          </FadeIn>
        </div>
      </section>

      {/* Application Process — Vertical Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Application Process"
              description="Four straightforward steps to begin your clinical research career."
            />
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            <StaggerChildren className="space-y-0">
              {applicationSteps.map((item, index) => (
                <StaggerItem key={item.step}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* Vertical line */}
                    {index < applicationSteps.length - 1 && (
                      <div className="absolute left-[23px] top-12 w-0.5 h-[calc(100%-32px)] bg-clinomic/20" />
                    )}

                    {/* Step circle */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-clinomic/10 text-clinomic border-2 border-clinomic shrink-0">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-clinomic mb-1">
                        Step {item.step}
                      </p>
                      <h3 className="text-lg font-bold text-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-brand leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={clinomic.faqs} />
      </FadeIn>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Get in Touch"
              description="Have questions about the Clinomic program? Reach out to our admissions team."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:query@datagami.in"
                className="flex items-center gap-3 text-dark hover:text-clinomic transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-clinomic/10 flex items-center justify-center text-clinomic">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-brand">Email</p>
                  <p className="font-semibold">query@datagami.in</p>
                </div>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-dark hover:text-clinomic transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-clinomic/10 flex items-center justify-center text-clinomic">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-brand">Phone</p>
                  <p className="font-semibold">Contact Admissions</p>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Start Your Clinical Research Career"
          description="Join Clinomic and become part of a growing community of clinical research professionals."
          buttonText="Apply Now"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
