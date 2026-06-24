import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  ArrowRight, Clock, Layers, Cloud, TrendingUp, BarChart3,
  GraduationCap, Award, Workflow, CheckCircle, Cpu,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'TechLEARN - Integrated Tech Specialisations for Any IT Degree',
  description:
    'Industry-aligned technology specialisations — Cloud Computing & Cyber Security (AI-Integrated), AI & Financial Engineering, and AI & Data Science — that embed into any IT degree (BSc, BCA, B.Tech, MCA). Plus short-term courses, stacked certifications and hands-on training.',
  alternates: {
    canonical: 'https://datagami.in/services/education/techlearn',
  },
  openGraph: {
    title: 'TechLEARN - Integrated Tech Specialisations for Any IT Degree',
    description:
      'Cloud & Cyber Security (AI-Integrated), AI & Financial Engineering, and AI & Data Science specialisations that embed into any IT degree — with stacked certifications and hands-on training.',
    images: ['/images/hero/hero-techlearn.png'],
  },
}

const specialisations = [
  {
    icon: <Cloud className="size-7 text-brand" />,
    name: "Cloud Computing & Cyber Security",
    accent: "AI-Integrated",
    href: "/services/education/techlearn/cloud-cybersecurity",
    description:
      "Three pillars — Cloud, Cyber Security and AI — woven across the program. From multi-cloud and DevSecOps to ethical hacking, SOC and AI-driven threat detection.",
    focus: ["AWS · Azure · GCP", "Network & cloud security", "Ethical hacking & SOC", "AI/ML & MLOps", "Kubernetes & DevSecOps"],
    certs: "AWS · Azure · CKA · Security+ · CEH · SC-200 — 15+ stacked",
  },
  {
    icon: <TrendingUp className="size-7 text-brand" />,
    name: "AI & Financial Engineering",
    accent: "AI + FinTech",
    href: "/services/education/techlearn/ai-financial-engineering",
    description:
      "An AI + Finance fusion engineered for Quant, FinTech and Risk careers — pairing machine learning through GenAI with markets, derivatives, risk and valuation.",
    focus: ["ML → DL → GenAI → MLOps", "Markets, derivatives & fixed income", "Risk, valuation & modelling", "Time-series & quant methods", "FinTech, DeFi & Web3"],
    certs: "FRM-aligned risk · quant & AI tooling",
  },
  {
    icon: <BarChart3 className="size-7 text-brand" />,
    name: "AI & Data Science",
    accent: "GenAI + MLOps",
    href: "/services/education/techlearn/ai-data-science",
    description:
      "A practitioner path from Python and SQL through AI, Generative AI and data science to production-grade MLOps — with business intelligence and security foundations.",
    focus: ["Python & SQL foundations", "AI & Generative AI", "Data science & BI (Power BI/Tableau)", "MLOps & AI production", "Cloud & ethical-hacking basics"],
    certs: "AWS SAA · AZ-104 · CEH · PL-300 · Tableau",
  },
]

const shortTerm = [
  {
    icon: <Cpu className="size-7 text-brand" />,
    name: "Cloud Computing with AI",
    href: "/services/education/techlearn/cloud-computing",
    duration: "11 months",
    modules: 14,
    description:
      "A focused, certification-driven short-term course across AWS, Azure and Google Cloud with AI-driven infrastructure management.",
    skills: ["AWS", "Azure", "GCP", "CCNA", "MCSA", "RedHat SA1"],
  },
]

const whyTechlearn = [
  { icon: <GraduationCap className="size-7 text-brand" />, title: "Integrates with Any IT Degree", description: "Embed a specialisation into BSc, BCA, B.Tech, MCA or any IT-related degree — or take it standalone." },
  { icon: <Award className="size-7 text-brand" />, title: "Stacked Industry Certifications", description: "Year-on-year certification roadmaps (AWS, Azure, Cisco, RedHat, CompTIA, EC-Council) alongside the program credential." },
  { icon: <Workflow className="size-7 text-brand" />, title: "Hands-On Training", description: "Labs, cloud sandboxes, cyber ranges, MLOps pipelines and real datasets — learn by building." },
  { icon: <CheckCircle className="size-7 text-brand" />, title: "Outcome-Based & NEP 2020 Aligned", description: "OBE design with Bloom's-tagged course outcomes, mapped to in-demand, placement-ready job roles." },
]

const courseSchema = generateCourseSchema({
  name: "TechLEARN by Datagami - Integrated Technology Specialisations",
  description:
    "Industry-aligned technology specialisations — Cloud Computing & Cyber Security (AI-Integrated), AI & Financial Engineering, and AI & Data Science — that integrate into any IT degree, plus short-term courses.",
  url: "/services/education/techlearn",
})

export default function TechLEARNPage() {
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
            { label: "TechLEARN" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="TechLEARN"
        subtitle="Industry-ready specialisations in cloud, cyber security, AI, data science and Financial engineering — integrate them into any degree."
        accentColor="text-brand"
        badgeText="Technology Education"
        ctaText="Talk to Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-techlearn.png"
      />

      {/* Integrated Specialisations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Integrated Specialisations"
              description="Credit-aligned specialisations that embed into any IT degree — or run as standalone programs. Each layers job-ready skills, stacked certifications and a capstone."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {specialisations.map((s) => (
              <StaggerItem key={s.name}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full glass-card dark:liquid-glass rounded-2xl p-7 border border-transparent hover:border-brand/30 hover:shadow-brand-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full">
                      {s.accent}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-brand mb-4">{s.description}</p>
                  <ul className="space-y-2 mb-5">
                    {s.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-dark">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-brand mb-4">
                    <span className="font-semibold text-dark">Certifications: </span>{s.certs}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-brand font-medium text-sm group-hover:gap-2.5 transition-all">
                    Explore specialisation <ArrowRight className="size-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Short-Term Courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Short-Term Courses"
              description="Focused, certification-driven courses for fast upskilling — no full degree required."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shortTerm.map((c) => (
              <StaggerItem key={c.name}>
                <Link
                  href={c.href}
                  className="group block glass-card dark:liquid-glass rounded-2xl p-7 border border-transparent hover:border-brand/30 hover:shadow-brand-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center">
                      {c.icon}
                    </div>
                    <ArrowRight className="size-5 text-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{c.name}</h3>
                  <p className="text-sm text-muted-brand mb-4">{c.description}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-brand mb-4">
                    <span className="flex items-center gap-1.5"><Clock className="size-4" />{c.duration}</span>
                    <span className="flex items-center gap-1.5"><Layers className="size-4" />{c.modules} Modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-brand/10 text-brand font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why TechLEARN */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why TechLEARN"
              description="Designed for employability — and built to slot into your existing academic structure."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTechlearn.map((w) => (
              <StaggerItem key={w.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {w.icon}
                  </div>
                  <h3 className="text-base font-semibold text-dark mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-brand">{w.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={techlearn.faqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Bring TechLEARN to your institution"
          description="Integrate a specialisation into your degree programs, or offer a short-term course — we'll tailor the curriculum, labs and certifications to your students."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
