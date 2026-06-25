import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  GraduationCap, CheckCircle, Coins, Building2, PieChart, ShieldCheck,
  TrendingUp, Banknote, LineChart, Users, FileCheck, Layers,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Wealth Management & Investment Banking | FinLEARN by Datagami",
  description:
    "An 11-month, industry-integrated postgraduate program in Wealth Management & Investment Banking — 630+ learning hours across advisory, capital markets, portfolio management and deal execution. Integrates into any UG or PG degree, in association with AAFM.",
  alternates: {
    canonical: "https://datagami.in/services/education/finlearn/wealth-management-investment-banking",
  },
  openGraph: {
    title: "Wealth Management & Investment Banking | FinLEARN by Datagami",
    description:
      "Industry-integrated program across wealth advisory, capital markets, portfolio management and deal execution — embeds into any UG or PG degree.",
    images: ["/images/hero/hero-finlearn.png"],
  },
}

const heroStats = [
  { value: "11", label: "Months Program" },
  { value: "630+", label: "Learning Hours" },
  { value: "2", label: "Semesters" },
  { value: "7", label: "In-Demand Roles" },
]

const focusAreas = [
  {
    icon: <Coins className="size-7 text-brand" />,
    title: "Wealth Advisory & Private Banking",
    description: "Client-first advisory across Retail, HNI, UHNI and Family Office segments — goal discovery, risk profiling and suitability.",
    items: ["Advisory frameworks & client segmentation", "Behavioural finance & risk profiling", "Estate & succession planning", "Fiduciary & ethical standards"],
  },
  {
    icon: <Building2 className="size-7 text-brand" />,
    title: "Capital Markets & Investment Banking",
    description: "How markets and deals work — instruments, ECM/DCM, IPOs, M&A and the full deal lifecycle.",
    items: ["Financial markets & instruments", "Corporate finance & valuation", "IPOs, debt issuance & M&A", "Deal execution & due diligence"],
  },
  {
    icon: <PieChart className="size-7 text-brand" />,
    title: "Portfolio & Alternative Investments",
    description: "Building and managing portfolios — asset allocation, performance analytics and private capital.",
    items: ["Portfolio construction & rebalancing", "Active vs passive & factor investing", "Private equity & venture capital", "PMS, AIFs & structured products"],
  },
  {
    icon: <ShieldCheck className="size-7 text-brand" />,
    title: "Risk, Governance & Compliance",
    description: "The discipline behind the role — taxation, governance, regulation and digital wealth.",
    items: ["Applied taxation & regulation", "Governance, risk & compliance", "AI, FinTech & digital wealth", "Market-abuse & ethics scenarios"],
  },
]

const semester1 = [
  "Wealth Advisory & Client Frameworks",
  "Financial Markets & Investment Products",
  "Portfolio Construction & Asset Allocation",
  "Applied Taxation & Regulatory Environment",
  "Corporate Finance & Capital Market Foundations",
  "Investment Banking Foundations",
  "Advisory & Capital Markets Lab – I",
]

const semester2 = [
  "Advanced Investment Strategies & Institutional Asset Management",
  "Alternative Investments & Private Capital",
  "Investment Banking Transactions & Deal Execution",
  "Governance, Risk & Compliance",
  "Wealth Transfer, Estate & Succession Planning",
  "AI, FinTech & Digital Wealth",
  "Deal, Portfolio & Compliance Lab – II",
]

const culmination = [
  { num: "01", title: "Industry Internship", description: "Real exposure to advisory workflows, transactions and client engagement." },
  { num: "02", title: "Capstone Project", description: "A professional project applying wealth, markets and transaction skills end-to-end." },
  { num: "03", title: "Final Presentation & Viva", description: "Present and defend your work before an academic–industry panel." },
]

// Entry-level (fresher) roles from the program brochure's in-demand roles — analyst /
// associate / executive level, where freshers actually enter.
const careers = [
  { role: "Wealth Analyst / Associate", icon: <Coins className="size-6 text-brand" /> },
  { role: "Equity Research Analyst", icon: <TrendingUp className="size-6 text-brand" /> },
  { role: "Relationship Manager – Private Banking", icon: <Users className="size-6 text-brand" /> },
  { role: "Portfolio / Investment Analyst", icon: <LineChart className="size-6 text-brand" /> },
  { role: "Investment Banking Analyst (Support / Execution)", icon: <Building2 className="size-6 text-brand" /> },
  { role: "Securities Operations Analyst", icon: <Banknote className="size-6 text-brand" /> },
  { role: "Risk & Compliance Executive", icon: <FileCheck className="size-6 text-brand" /> },
]

const careerPath = [
  { stage: "Entry · 0–1 yr", roles: ["Wealth Analyst / Associate", "Equity Research Analyst", "Portfolio / Investment Analyst", "Risk & Compliance Executive"] },
  { stage: "Growing · 2–4 yrs", roles: ["Relationship Manager – Wealth", "Research / IB Associate", "Portfolio Analyst", "Securities Ops Specialist"] },
  { stage: "Senior · 5–8 yrs", roles: ["Senior Wealth / Private Banker", "Portfolio Manager (track)", "VP – Investment Banking (track)", "Risk & Compliance Manager"] },
  { stage: "Leadership · 8+ yrs", roles: ["Head – Private Banking / Wealth", "Portfolio Manager", "Director – Investment Banking", "Chief Risk / Compliance Officer"] },
]

const courseSchema = generateCourseSchema({
  name: "Wealth Management & Investment Banking — FinLEARN by Datagami",
  description:
    "An 11-month industry-integrated postgraduate program across wealth advisory, capital markets, portfolio management and deal execution, embeddable into any UG or PG degree, in association with AAFM.",
  url: "/services/education/finlearn/wealth-management-investment-banking",
})

export default function WealthManagementIBPage() {
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
            { label: "Wealth Management & Investment Banking" },
          ]}
        />
      </div>

      <HeroDark
        heading="Wealth Management & Investment Banking"
        subtitle="An industry-integrated program preparing future-ready finance professionals for advisory, portfolio management, capital markets and investment-banking roles — globally benchmarked and outcome-first."
        accentColor="text-brand"
        badgeText="Integrated Degree Program · Wealth + IB"
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
                <span className="font-semibold text-dark">Integrates into UG or PG.</span> Embed this program as a credit-aligned specialisation within an <span className="font-medium text-dark">undergraduate or postgraduate</span> finance or business degree — such as BBA, B.Com, BMS, MBA or M.Com — or run it standalone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="What you'll master" description="Four pillars spanning advisory, markets, portfolios and the regulatory discipline behind professional finance." />
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
            <SectionHeader title="Program curriculum" description="Two semesters combining core knowledge, applied labs, simulations and industry projects." />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-2xl p-7 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="size-5 text-brand" />
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Semester 1 · Foundations of Wealth & Markets</span>
                </div>
                <ul className="space-y-2.5">
                  {semester1.map((m) => (
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
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Semester 2 · Advanced Strategies & Deals</span>
                </div>
                <ul className="space-y-2.5">
                  {semester2.map((m) => (
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
            <h3 className="text-lg font-bold text-dark mt-12 mb-6 text-center">Internship, capstone & viva</h3>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <SectionHeader title="Where freshers start" description="Entry-level roles a graduate can target straight out of the program — across wealth, research, private banking, capital markets and risk." />
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Your career path" description="Where this program can take you over the years — from your first analyst role to senior and leadership positions." />
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
              Indicative progression in India — pace varies with performance, certifications and employer. Roles span banks, private banks, broking and wealth firms, AMCs and capital-market institutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* AAFM association */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="bg-white rounded-xl p-3 shrink-0">
                <img src="/images/finlearn/aafm.jpg" alt="American Academy of Financial Management (AAFM)" className="h-12 w-auto object-contain" />
              </div>
              <div className="text-sm text-muted-brand">
                <p>
                  Offered <span className="font-medium text-dark">in association with AAFM</span> (American Academy of Financial Management) — bringing globally benchmarked standards in wealth management, financial planning and advisory education.
                </p>
                <p className="mt-3 flex items-center justify-center sm:justify-start gap-2 font-semibold text-dark">
                  <CheckCircle className="size-4 text-brand shrink-0" />
                  Includes 2 free attempts at the CWM® (Chartered Wealth Manager) certification exam.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Bring this program to your institution"
          description="We'll tailor the wealth and investment-banking curriculum, labs and projects to integrate with your degree structure."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
