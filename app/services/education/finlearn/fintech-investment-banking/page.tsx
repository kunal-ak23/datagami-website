import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  GraduationCap, CheckCircle, Cpu, TrendingUp, Coins, BarChart3,
  Banknote, LineChart, Bot, Sparkles, Building2, Layers,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "FinTech & Investment Banking | FinLEARN by Datagami",
  description:
    "An industry-integrated program in FinTech & Investment Banking — 60 credits, 900+ learning hours across finance, technology, capital markets, wealth and digital finance. Integrates into any UG or PG degree, in association with AAFM.",
  alternates: {
    canonical: "https://datagami.in/services/education/finlearn/fintech-investment-banking",
  },
  openGraph: {
    title: "FinTech & Investment Banking | FinLEARN by Datagami",
    description:
      "Industry-integrated program across FinTech, Investment Banking, capital markets and digital finance — embeds into any UG or PG degree.",
    images: ["/images/hero/hero-finlearn.png"],
  },
}

const heroStats = [
  { value: "60", label: "Credits" },
  { value: "18", label: "Modules" },
  { value: "900+", label: "Learning Hours" },
  { value: "7", label: "In-Demand Roles" },
]

// Target recruiters / hiring partners across banking, broking, wealth and FinTech —
// drawn from the program brochure's in-demand-roles and hiring-partner pages.
const recruiters = [
  "JPMorgan", "Morgan Stanley", "HSBC", "ICICI Securities",
  "ICICI Bank", "Kotak", "HDFC Securities", "Axis Bank",
  "Nuvama", "Motilal Oswal", "Aditya Birla Capital", "Angel One",
  "Edelweiss", "PhonePe", "Paytm", "PolicyBazaar",
]

const focusAreas = [
  {
    icon: <Cpu className="size-7 text-brand" />,
    title: "FinTech & Digital Finance",
    description: "The technology reshaping money — UPI, APIs, e-KYC and Account Aggregator systems, blockchain, crypto assets and digital lending.",
    items: ["Digital finance infrastructure", "Blockchain & crypto assets", "WealthTech & robo-advisory", "Cybersecurity in finance"],
  },
  {
    icon: <Building2 className="size-7 text-brand" />,
    title: "Investment Banking & Capital Markets",
    description: "How capital is raised and deals are done — equity and debt markets, IPOs, M&A and deal execution.",
    items: ["ECM, DCM & IPOs", "M&A advisory & deal lifecycle", "Equity research & valuation", "Securities operations"],
  },
  {
    icon: <Coins className="size-7 text-brand" />,
    title: "Wealth, Portfolio & Alternatives",
    description: "Advising and building portfolios — across products, asset allocation and alternative investments.",
    items: ["Portfolio construction", "PMS, AIFs & structured products", "Estate & succession planning", "Client advisory frameworks"],
  },
  {
    icon: <BarChart3 className="size-7 text-brand" />,
    title: "Financial Analytics & Technology",
    description: "The analytical edge — Python, financial modelling, dashboards and data-driven decision making.",
    items: ["Python for finance", "Financial modelling & valuation", "Business analytics & dashboards", "Data-driven decisions"],
  },
]

const foundations = [
  "Introduction to FinTech & Financial Services Ecosystem",
  "Python for Financial Analytics & Automation Lab",
  "Business Analytics & Data Visualization for Decision Making",
  "Wealth Advisory & Investment Banking Frameworks",
  "Capital Markets, Securities Regulation & Market Transactions",
  "Investment Products, Deal Mandates & Suitability Frameworks",
  "Risk, Taxation & Transaction Structuring",
  "Insurance, Estate & Succession Planning for Business & HNI Families",
  "Investment Banking Foundations & Capital Market Structure",
  "Financial Modelling & Valuation Lab",
]

const advanced = [
  "Blockchain Strategy, Crypto Assets & Global Securities Operations",
  "Equity Research, Valuation & Coverage Analysis",
  "Alternative Investments, AIFs, SIFs & Private Capital Structures",
  "Credit Analysis, Behavioural Finance & Risk Decisioning",
  "Portfolio Construction, Performance Analytics & WealthTech Applications",
  "Corporate Finance, M&A & Capital Market Transactions",
  "Investment Banking & Wealth Advisory Practice Management",
  "Client Communication, Deal Presentation & Ethics Lab",
]

const culmination = [
  { num: "01", title: "Industry Internship", description: "Applied experience inside finance, FinTech and investment-banking environments." },
  { num: "02", title: "Capstone Project", description: "An end-to-end project combining analytics, markets and transaction work." },
  { num: "03", title: "Final Presentation & Viva", description: "Defend your work before an academic–industry panel." },
  { num: "04", title: "Career Readiness", description: "Professional profile, interview preparation and placement support." },
]

// Entry-level (fresher) roles, grounded in the program brochure's in-demand roles
// (Analyst / Associate level — where freshers actually enter).
const careers = [
  { role: "Investment Banking Analyst", icon: <Building2 className="size-6 text-brand" /> },
  { role: "Financial Analyst", icon: <Banknote className="size-6 text-brand" /> },
  { role: "FinTech / Business Analyst", icon: <Sparkles className="size-6 text-brand" /> },
  { role: "Equity Research Associate", icon: <TrendingUp className="size-6 text-brand" /> },
  { role: "Wealth Management Associate", icon: <Coins className="size-6 text-brand" /> },
  { role: "Portfolio Analyst", icon: <LineChart className="size-6 text-brand" /> },
  { role: "Capital Markets Analyst", icon: <BarChart3 className="size-6 text-brand" /> },
]

const careerPath = [
  { stage: "Entry · 0–1 yr", roles: ["Investment Banking Analyst", "Financial / FinTech Analyst", "Equity Research Associate", "Wealth Management Associate"] },
  { stage: "Growing · 2–4 yrs", roles: ["Associate (IB / Research)", "Portfolio Analyst", "Risk & Credit Analyst", "Product Analyst (FinTech)"] },
  { stage: "Senior · 5–8 yrs", roles: ["Senior Associate / VP track", "Portfolio Manager (track)", "FinTech Product Lead", "Relationship Manager – Private Banking"] },
  { stage: "Leadership · 8+ yrs", roles: ["Vice President / Director", "Portfolio Manager", "Head of FinTech Product", "Founder / Business Head"] },
]

const courseSchema = generateCourseSchema({
  name: "FinTech & Investment Banking — FinLEARN by Datagami",
  description:
    "An industry-integrated program in FinTech & Investment Banking across finance, technology, capital markets, wealth and digital finance, embeddable into any UG or PG degree, in association with AAFM.",
  url: "/services/education/finlearn/fintech-investment-banking",
})

export default function FinTechInvestmentBankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Education", href: "/services#education" },
            { label: "FinLEARN", href: "/services/education/finlearn" },
            { label: "FinTech & Investment Banking" },
          ]}
        />
      </div>

      <HeroDark
        heading="FinTech & Investment Banking"
        subtitle="An industry-integrated program that fuses finance, technology and analytics — preparing industry-ready professionals for the AI-driven financial economy across investment banking, FinTech, capital markets and wealth."
        accentColor="text-brand"
        badgeText="Integrated Degree Program · FinTech + IB"
        stats={heroStats}
        ctaText="Talk to Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-finlearn.png"
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
                <span className="font-semibold text-dark">Integrates into any degree.</span> Embed this program as a credit-aligned specialisation within any <span className="font-medium text-dark">undergraduate or postgraduate</span> finance or business degree — such as BBA, B.Com, BMS or M.Com — or run it standalone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="What students will master" description="Four connected domains that combine financial depth with the technology shaping modern finance." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-brand mb-4">{f.description}</p>
                  <ul className="space-y-2">
                    {f.items.map((i) => (
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

      {/* Curriculum */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Program curriculum" description="Structured across foundation and advanced coursework, followed by industry application through internship and capstone." />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-2xl p-7 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="size-5 text-brand" />
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Foundations</span>
                </div>
                <ul className="space-y-2.5">
                  {foundations.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-dark">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-2xl p-7 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="size-5 text-brand" />
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Advanced &amp; Applied</span>
                </div>
                <ul className="space-y-2.5">
                  {advanced.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-dark">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Culmination */}
          <FadeIn>
            <h3 className="text-lg font-bold text-dark mt-12 mb-6 text-center">Industry Application</h3>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culmination.map((c) => (
              <StaggerItem key={c.num}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <span className="text-2xl font-bold text-brand/30">{c.num}</span>
                  <h4 className="text-base font-semibold text-dark mt-2 mb-1">{c.title}</h4>
                  <p className="text-sm text-muted-brand">{c.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Where freshers start */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Where freshers start" description="Entry-level roles a graduate can target straight out of the program — across investment banking, FinTech, research, wealth and capital markets." />
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

      {/* Where graduates get placed */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Where graduates get placed" description="Target recruiters and hiring partners across banking, broking, wealth management and FinTech — the institutions actively hiring for these roles." />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {recruiters.map((name) => (
              <StaggerItem key={name}>
                <div className="flex items-center justify-center text-center glass-card dark:liquid-glass rounded-xl px-4 py-5 hover:shadow-brand-md transition-all h-full">
                  <span className="text-sm font-semibold text-dark">{name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <p className="text-center text-xs text-muted-brand mt-6 max-w-3xl mx-auto">
              Representative recruiters and hiring partners — actual placements vary by cohort, performance and market conditions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Career path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Career path" description="Where this program can take students over the years — from their first analyst role to senior and leadership positions." />
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
              Indicative progression in India — pace varies with performance, certifications and employer. Roles span banks, NBFCs, broking and wealth firms, FinTechs and capital-market institutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* AAFM association */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="bg-white rounded-xl p-3 shrink-0">
                <img src="/images/finlearn/aafm.jpg" alt="American Academy of Financial Management (AAFM)" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm text-muted-brand">
                Offered <span className="font-medium text-dark">in association with AAFM</span> (American Academy of Financial Management) — bringing globally benchmarked standards in wealth management, financial planning and advisory education.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Bring this program to your institution"
          description="We'll tailor the FinTech and investment-banking curriculum, labs and projects to integrate with your degree structure."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
