import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  GraduationCap, CheckCircle, Newspaper, BarChart3, Landmark, Video,
  TrendingUp, FileText, Search, PenTool, Mic, Layers,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Business & Finance Journalism | FinLEARN by Datagami",
  description:
    "A practice-led postgraduate program in Business & Finance Journalism — 630 learning hours, 42 credits, newsroom-applied and portfolio-driven. Integrates into any UG or PG degree, in association with AAFM India & Amar Ujala.",
  alternates: {
    canonical: "https://datagami.in/services/education/finlearn/business-finance-journalism",
  },
  openGraph: {
    title: "Business & Finance Journalism | FinLEARN by Datagami",
    description:
      "Practice-led, newsroom-applied business journalism — markets, economy, policy and data storytelling. Embeds into any UG or PG degree.",
    images: ["/images/hero/hero-finlearn.png"],
  },
}

const heroStats = [
  { value: "42", label: "Credits" },
  { value: "15", label: "Modules" },
  { value: "630", label: "Learning Hours" },
  { value: "8", label: "In-Demand Roles" },
]

const focusAreas = [
  {
    icon: <Newspaper className="size-7 text-brand" />,
    title: "Finance-Literate Reporting",
    description: "Report on markets, corporates, economy and policy with accuracy, authority and ethics.",
    items: ["Business news writing & editing", "News values & materiality", "Media law & SEBI-aware reporting", "Ethics in market-sensitive reporting"],
  },
  {
    icon: <BarChart3 className="size-7 text-brand" />,
    title: "Data & Visual Storytelling",
    description: "Turn financial data into clear, credible stories — charts, dashboards and visual narratives.",
    items: ["Data journalism & public datasets", "Reading financial statements", "Charts, infographics & visuals", "Avoiding data misuse"],
  },
  {
    icon: <Landmark className="size-7 text-brand" />,
    title: "Markets, Economy & Policy Beats",
    description: "Cover the beats that move India — markets, corporates, governance, the Budget and the economy.",
    items: ["Markets & corporate reporting", "Macro indicators & policy", "Capital markets, IPOs & M&A", "Governance & investigative beats"],
  },
  {
    icon: <Video className="size-7 text-brand" />,
    title: "Multimedia & Digital Journalism",
    description: "Tell stories across every platform — digital, video, podcast and broadcast.",
    items: ["Writing for digital & social", "Video scripting & explainers", "Audio & podcast storytelling", "On-camera presentation basics"],
  },
]

const semester1 = [
  "BFJ101 · Foundations of Business & Finance Journalism",
  "BFJ102 · News Reporting, Writing & Editing (Business Focus)",
  "BFJ103 · Financial Markets, Instruments & Institutions for Journalists",
  "BFJ104 · Applied Economics & Public Policy for Business Reporting",
  "BFJ105 · Corporate Financial Statements & Earnings Analysis",
  "BFJ106 · Media Law, Ethics & Regulatory Frameworks",
  "BFJ107 · Newsroom Lab I – Reporting & Editorial Discipline",
]

const semester2 = [
  "BFJ201 · Advanced Financial & Market Reporting",
  "BFJ202 · Corporate, Sector & Economy Beats",
  "BFJ203 · Data Journalism & Financial Storytelling",
  "BFJ204 · Capital Markets, IPOs, M&A & Corporate Governance Reporting",
  "BFJ205 · Wealth, Personal Finance & Investor Journalism",
  "BFJ206 · Digital Media, Video & Broadcast Journalism",
  "BFJ207 · Newsroom Lab II – Investigations & Long-form Reporting",
  "BFJ208 · Internship, Capstone Project & Viva",
]

const culmination = [
  { num: "01", title: "Industry Internship", description: "Work in real or simulated newsrooms and financial-content platforms." },
  { num: "02", title: "Capstone Project", description: "Produce a major investigative or analytical business journalism piece." },
  { num: "03", title: "Editorial Defence", description: "Defend your work before an academic–industry panel with a publication-ready portfolio." },
]

// Entry-level (fresher) roles from the program brochure's in-demand roles.
const careers = [
  { role: "Business Journalist", icon: <Newspaper className="size-6 text-brand" /> },
  { role: "Markets Correspondent", icon: <TrendingUp className="size-6 text-brand" /> },
  { role: "Data Journalism Analyst", icon: <BarChart3 className="size-6 text-brand" /> },
  { role: "Economy & Policy Analyst", icon: <Landmark className="size-6 text-brand" /> },
  { role: "Corporate & Governance Reporter", icon: <Search className="size-6 text-brand" /> },
  { role: "Research & Editorial Associate", icon: <FileText className="size-6 text-brand" /> },
  { role: "Financial Content Strategist", icon: <PenTool className="size-6 text-brand" /> },
  { role: "Investor Education Journalist", icon: <Mic className="size-6 text-brand" /> },
]

const careerPath = [
  { stage: "Entry · 0–1 yr", roles: ["Business Journalist", "Markets Correspondent", "Data Journalism Analyst", "Research & Editorial Associate"] },
  { stage: "Growing · 2–4 yrs", roles: ["Senior Correspondent", "Economy & Policy Analyst", "Financial Content Strategist", "Investor Education Journalist"] },
  { stage: "Senior · 5–8 yrs", roles: ["Senior Editor / Bureau", "Investigative Lead", "Digital / Video Editorial Lead", "Independent Finance Creator"] },
  { stage: "Leadership · 8+ yrs", roles: ["Business Editor", "Editorial Head", "Founder – Media Venture", "Editor-in-Chief (track)"] },
]

// Target newsrooms and business-media houses for business & finance journalists —
// led by the program's media partner (Amar Ujala / BONUS) plus leading business media.
const recruiters = [
  "Amar Ujala", "BONUS", "The Economic Times", "Mint",
  "Moneycontrol", "Business Standard", "CNBC-TV18", "NDTV Profit",
  "Financial Express", "ET Now", "Forbes India", "Zee Business",
]

const courseSchema = generateCourseSchema({
  name: "Business & Finance Journalism — FinLEARN by Datagami",
  description:
    "A practice-led postgraduate program in Business & Finance Journalism — newsroom-applied and portfolio-driven, embeddable into any UG or PG degree, in association with AAFM India & Amar Ujala.",
  url: "/services/education/finlearn/business-finance-journalism",
})

export default function BusinessFinanceJournalismPage() {
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
            { label: "Business & Finance Journalism" },
          ]}
        />
      </div>

      <HeroDark
        heading="Business & Finance Journalism"
        subtitle="A practice-led, newsroom-applied program building the next generation of business journalists — finance-literate, data-driven and digital-first, ready for impactful careers in the new-age media ecosystem."
        accentColor="text-brand"
        badgeText="Integrated Degree Program · Media + Finance"
        stats={heroStats}
        ctaText="Partner with Us"
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
                <span className="font-semibold text-dark">Integrates into UG or PG.</span> Embed this program as a credit-aligned specialisation within an <span className="font-medium text-dark">undergraduate or postgraduate</span> journalism, media or business degree — such as BAJMC, BA, BBA, MAJMC or MBA — or run it standalone. Domain knowledge strengthens journalism without turning it into a finance degree.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="What students will master" description="Journalism craft fused with financial and economic intelligence and data-driven storytelling." />
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
            <SectionHeader title="Program curriculum" description="Built around newsroom labs, real-world reporting and a publication-ready portfolio." />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-2xl p-7 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="size-5 text-brand" />
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Foundations &amp; Craft</span>
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
                  <span className="text-sm font-bold text-brand uppercase tracking-wider">Advanced &amp; Multimedia</span>
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
            <h3 className="text-lg font-bold text-dark mt-12 mb-6 text-center">Internship, capstone & editorial defence</h3>
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
            <SectionHeader title="Where freshers start" description="Entry-level roles a graduate can target straight out of the program — across newsrooms, digital platforms, research desks and independent media." />
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
            <SectionHeader title="Where graduates get placed" description="Target newsrooms and business-media houses across print, digital and broadcast — led by the program's media partner, Amar Ujala, alongside leading business and finance media." />
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
              Representative newsrooms and media houses — actual placements vary by cohort, portfolio and market conditions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Career path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Career path" description="Where this program can take students over the years — from their first reporting role to senior editorial and leadership positions." />
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
              Indicative progression in India — pace varies with performance, portfolio and employer. Roles span newsrooms, digital and broadcast media, research desks and independent media ventures.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* AAFM India & Amar Ujala association */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="bg-white rounded-xl p-3 shrink-0">
                <img src="/images/finlearn/aafm.jpg" alt="American Academy of Financial Management (AAFM)" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm text-muted-brand">
                A strategic collaboration <span className="font-medium text-dark">in association with AAFM India</span> (American Academy of Financial Management) and <span className="font-medium text-dark">Amar Ujala</span> — pairing global financial-education expertise with deep newsroom legacy and nationwide media reach.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Bring this program to your institution"
          description="We'll tailor the business-journalism curriculum, newsroom labs and capstone to integrate with your degree structure."
          buttonText="Partner with Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
