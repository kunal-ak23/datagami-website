import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  Brain, TrendingUp, GraduationCap, CheckCircle, Coins, Scale, Workflow,
  Cpu, Sparkles, LineChart, Banknote, Bot, BarChart3,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "AI & Financial Engineering | TechLEARN by Datagami",
  description:
    "An AI + Finance fusion specialisation for Quant, FinTech and Risk careers — machine learning through GenAI paired with markets, derivatives, risk and valuation. Embeds into any IT degree, with a clear fresher-to-leadership career path.",
  alternates: {
    canonical: "https://datagami.in/services/education/techlearn/ai-financial-engineering",
  },
  openGraph: {
    title: "AI & Financial Engineering | TechLEARN by Datagami",
    description:
      "AI + Finance fusion for Quant, FinTech and Risk careers — ML through GenAI paired with markets, derivatives, risk and valuation.",
    images: ["/images/hero/hero-techlearn.png"],
  },
}

const heroStats = [
  { value: "3", label: "Tracks (AI · Finance · Fusion)" },
  { value: "8", label: "Entry-Level Roles" },
  { value: "4", label: "Career-Path Stages" },
  { value: "1", label: "Integrated Internship" },
]

const tracks = [
  {
    icon: <Brain className="size-7 text-brand" />,
    title: "AI Track",
    description: "Pure AI/CS building from Python → ML → Deep Learning → NLP → GenAI → Reinforcement Learning → MLOps.",
    items: ["Python & data engineering", "Deep learning & NLP", "Generative AI & LLMs", "RL & AI agents", "MLOps & AI engineering"],
  },
  {
    icon: <Coins className="size-7 text-brand" />,
    title: "Finance Track",
    description: "Finance theory from the ground up: markets → accounting → instruments → derivatives → risk → valuation.",
    items: ["Financial markets & instruments", "Derivatives & fixed income", "Portfolio theory & asset allocation", "Risk management (FRM-aligned)", "Valuation & financial modelling"],
  },
  {
    icon: <Workflow className="size-7 text-brand" />,
    title: "Fusion Courses",
    description: "Where the two tracks meet — applying AI to real financial data and decisions.",
    items: ["Time-series analysis for markets", "Big data analytics for finance", "AI in financial services", "Credit-risk modelling & scorecards", "Graph AI & network finance"],
  },
]

const journey = [
  { num: "01", title: "Foundations", description: "What is AI / what is finance — Python, AI landscape, financial markets and investment basics." },
  { num: "02", title: "Maths & Data Bedrock", description: "Statistics & probability, SQL, accounting and the economic/financial system." },
  { num: "03", title: "Core ML + Instruments", description: "Deep learning, feature engineering, securities markets, equity and debt instruments." },
  { num: "04", title: "First Fusion + Derivatives", description: "Analytics on financial data, time-series forecasting, futures, options and fixed income." },
  { num: "05", title: "Advanced AI + Risk", description: "NLP, big-data finance, options Greeks & strategies, portfolio theory, risk and valuation." },
  { num: "06", title: "Frontier + Capstone", description: "GenAI/LLMs, RL & AI agents, credit risk, DeFi/Web3 and an end-to-end AI + FinTech capstone." },
]


// Entry-level (fresher) roles an AI + Financial Engineering graduate can target in India,
// grounded in 2025-26 job-market research (Indeed, Glassdoor, Naukri, eFinancialCareers,
// BFSI/FinTech hiring reports). Most freshers enter at analyst level, not Quant/IB directly.
const careers = [
  { role: "Data / Business Analyst (Finance)", icon: <BarChart3 className="size-6 text-brand" /> },
  { role: "Junior Quantitative Analyst", icon: <LineChart className="size-6 text-brand" /> },
  { role: "Risk / Credit Risk Analyst", icon: <Scale className="size-6 text-brand" /> },
  { role: "Junior ML / AI Engineer (BFSI)", icon: <Bot className="size-6 text-brand" /> },
  { role: "Financial Analyst", icon: <Banknote className="size-6 text-brand" /> },
  { role: "Equity Research Associate", icon: <TrendingUp className="size-6 text-brand" /> },
  { role: "FinTech / Product Analyst", icon: <Sparkles className="size-6 text-brand" /> },
  { role: "Quantitative Developer (Entry)", icon: <Cpu className="size-6 text-brand" /> },
]

// Indicative career progression in India — pace varies with performance, certifications
// (CFA, FRM) and employer. Sources: quant/BFSI career-path research, 2025-26.
const careerPath = [
  { stage: "Entry · 0–1 yr", roles: ["Data / Business Analyst", "Junior Quant Analyst", "Risk / Credit Analyst", "Junior ML / AI Engineer"] },
  { stage: "Growing · 2–4 yrs", roles: ["Quantitative Analyst", "ML / AI Engineer (BFSI)", "Risk Manager", "Equity Research Analyst"] },
  { stage: "Senior · 5–8 yrs", roles: ["Senior Quant / Quant Researcher", "AI / ML Lead (BFSI)", "Portfolio Manager (track)", "FinTech Product Lead"] },
  { stage: "Leadership · 8+ yrs", roles: ["Head of Quant Research", "Portfolio Manager", "Director / Chief Risk Officer", "FinTech Founder / CTO"] },
]

const courseSchema = generateCourseSchema({
  name: "AI & Financial Engineering — TechLEARN by Datagami",
  description:
    "An AI + Finance fusion specialisation for Quant, FinTech and Risk careers, embeddable into any IT degree, with a clear fresher-to-leadership career path.",
  url: "/services/education/techlearn/ai-financial-engineering",
})

export default function AIFinancialEngineeringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Education", href: "/services#education" },
            { label: "TechLEARN", href: "/services/education/techlearn" },
            { label: "AI & Financial Engineering" },
          ]}
        />
      </div>

      <HeroDark
        heading="AI & Financial Engineering"
        subtitle="An AI + Finance fusion — two AI and two finance courses each stage — sequenced so every course builds on the last and culminates in interview-ready skills for Quant, AI/ML and FinTech roles."
        accentColor="text-brand"
        badgeText="Integrated Specialisation · AI + FinTech"
        stats={heroStats}
        ctaText="Talk to Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-techlearn.png"
      />

      {/* Integrate band */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                <GraduationCap className="size-7 text-brand" />
              </div>
              <p className="text-muted-brand">
                <span className="font-semibold text-dark">Integrates into any IT degree.</span> Embed this specialisation as a credit-aligned track within a <span className="font-medium text-dark">BSc, BCA, B.Tech, MCA</span> or any IT-related program — or run it standalone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Two tracks + fusion */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Two tracks that converge" description="Pure AI and pure finance, deliberately fused into applied, hire-worthy skills." />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <StaggerItem key={t.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">{t.icon}</div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-brand mb-4">{t.description}</p>
                  <ul className="space-y-2">
                    {t.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-dark">{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="The learning journey" description="Each stage builds on prior knowledge — from foundations to a deployable capstone." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((j) => (
              <StaggerItem key={j.num}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <span className="text-2xl font-bold text-brand/30">{j.num}</span>
                  <h3 className="text-base font-semibold text-dark mt-2 mb-1">{j.title}</h3>
                  <p className="text-sm text-muted-brand">{j.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Where freshers start */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Where freshers start" description="Entry-level roles a graduate can target straight out of the program — across analytics, quant, risk, AI and FinTech, at banks, NBFCs, funds and product companies." />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {careers.map((c) => (
              <StaggerItem key={c.role}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">{c.icon}</div>
                  <span className="text-sm font-semibold text-dark">{c.role}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Career path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Your career path" description="Where this specialisation can take you over the years — from your first analyst role to senior quant, AI and leadership positions." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPath.map((s, i) => (
              <StaggerItem key={s.stage}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand text-dark text-sm font-bold shrink-0">{i + 1}</span>
                    <span className="text-sm font-bold text-brand">{s.stage}</span>
                  </div>
                  <ul className="space-y-2">
                    {s.roles.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-dark">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <p className="text-center text-xs text-muted-brand mt-8 max-w-3xl mx-auto">
              Indicative progression in India — pace varies with performance, certifications (CFA, FRM) and employer. Roles span banks, NBFCs, funds, FinTechs and product companies.
            </p>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Add this specialisation to your program"
          description="We'll tailor the AI and finance curriculum and projects to integrate with your degree structure."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
