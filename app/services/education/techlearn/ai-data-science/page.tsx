import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  Terminal, Code2, Network, Cloud, Sparkles, Database, BarChart3, Server,
  Lock, PieChart, Workflow, Briefcase, GraduationCap, CheckCircle, Award,
  Brain, Bot, Cpu, Headset, ShieldCheck, Bug,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "AI & Data Science (GenAI + MLOps) | TechLEARN by Datagami",
  description:
    "A practitioner specialisation from Python and SQL through AI, Generative AI and data science to production-grade MLOps — with BI, cloud and ethical-hacking foundations. Embeds into any IT degree, cert-benchmarked to CCNA, AWS, Azure, CEH and PL-300.",
  alternates: {
    canonical: "https://datagami.in/services/education/techlearn/ai-data-science",
  },
  openGraph: {
    title: "AI & Data Science (GenAI + MLOps) | TechLEARN by Datagami",
    description:
      "Python → AI/GenAI → Data Science → production MLOps, with BI, cloud and security foundations — cert-benchmarked to CCNA, AWS, Azure, CEH and PL-300.",
    images: ["/images/hero/hero-techlearn.png"],
  },
}

const heroStats = [
  { value: "12", label: "Core Modules" },
  { value: "6", label: "Industry Certifications" },
  { value: "5", label: "Learning Stages" },
  { value: "1", label: "Industry Internship" },
]

const aiDsModules = [
  { icon: <Code2 className="size-6 text-brand" />, title: "Python Programming" },
  { icon: <Sparkles className="size-6 text-brand" />, title: "AI & Generative AI" },
  { icon: <Database className="size-6 text-brand" />, title: "Statistics & SQL" },
  { icon: <BarChart3 className="size-6 text-brand" />, title: "Data Science & BI (Power BI / Tableau)" },
  { icon: <PieChart className="size-6 text-brand" />, title: "Data Visualisation & Storytelling" },
  { icon: <Workflow className="size-6 text-brand" />, title: "MLOps & AI Production" },
]

const foundationModules = [
  { icon: <Terminal className="size-6 text-brand" />, title: "Linux & OS Essentials" },
  { icon: <Network className="size-6 text-brand" />, title: "Cisco Networking (CCNA)" },
  { icon: <Cloud className="size-6 text-brand" />, title: "AWS Cloud Administration" },
  { icon: <Server className="size-6 text-brand" />, title: "Microsoft Azure" },
  { icon: <Lock className="size-6 text-brand" />, title: "Ethical Hacking & Pentest" },
  { icon: <Briefcase className="size-6 text-brand" />, title: "Projects & Internships" },
]

const journey = [
  { num: "01", title: "Foundations", description: "Linux & OS, Python programming and Cisco networking — the technical base." },
  { num: "02", title: "Cloud & Data", description: "AWS cloud administration, Microsoft Azure, statistics and SQL for data." },
  { num: "03", title: "AI & Data Science", description: "AI & Generative AI for app development, plus data science and BI with Power BI and Tableau." },
  { num: "04", title: "Security & Storytelling", description: "Ethical hacking & penetration testing and data visualisation & storytelling." },
  { num: "05", title: "Production & Practice", description: "MLOps & AI production, a secure cloud-infrastructure project and structured internships." },
]

const certs = ["CCNA 200-301", "AWS SAA-C03", "Microsoft AZ-104", "EC-Council CEH", "Microsoft PL-300 (Power BI)", "Tableau Desktop Specialist"]

// Entry-level (fresher) roles a graduate can target in India — most freshers enter as
// analysts or junior engineers, not Data Scientist directly (2025-26 BFSI/analytics hiring data).
// The curriculum also covers networking, cloud (AWS/Azure) and ethical hacking, so graduates
// gain cloud + cyber security exposure and can target entry roles in both fields.
const dataAiRoles = [
  { role: "Data / Business Analyst", icon: <BarChart3 className="size-6 text-brand" /> },
  { role: "BI Analyst (Power BI / Tableau)", icon: <PieChart className="size-6 text-brand" /> },
  { role: "Junior Data Scientist", icon: <Brain className="size-6 text-brand" /> },
  { role: "Junior ML / AI Engineer", icon: <Cpu className="size-6 text-brand" /> },
  { role: "Junior Data Engineer", icon: <Database className="size-6 text-brand" /> },
  { role: "AI / GenAI App Developer (Entry)", icon: <Bot className="size-6 text-brand" /> },
]

const cloudSecRoles = [
  { role: "L0 / L1 Cloud Support Engineer", icon: <Headset className="size-6 text-brand" /> },
  { role: "Associate Cloud Engineer", icon: <Cloud className="size-6 text-brand" /> },
  { role: "NOC Engineer (L1)", icon: <Server className="size-6 text-brand" /> },
  { role: "SOC Analyst (L1 / Tier 1)", icon: <Lock className="size-6 text-brand" /> },
  { role: "Cloud / Network Security Engineer", icon: <ShieldCheck className="size-6 text-brand" /> },
  { role: "VAPT / Penetration Tester (Junior)", icon: <Bug className="size-6 text-brand" /> },
]

const courseSchema = generateCourseSchema({
  name: "AI & Data Science (GenAI + MLOps) — TechLEARN by Datagami",
  description:
    "A practitioner specialisation from Python and SQL through AI, Generative AI and data science to production MLOps, embeddable into any IT degree and cert-benchmarked to CCNA, AWS, Azure, CEH and PL-300.",
  url: "/services/education/techlearn/ai-data-science",
})

export default function AIDataSciencePage() {
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
            { label: "AI & Data Science" },
          ]}
        />
      </div>

      <HeroDark
        heading="AI & Data Science"
        subtitle="A practitioner path from Python and SQL through AI, Generative AI and data science to production-grade MLOps — with business intelligence, cloud and security foundations, benchmarked to recognised industry certifications."
        accentColor="text-brand"
        badgeText="Integrated Specialisation · GenAI + MLOps"
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

      {/* Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Core modules" description="Each subject carries outcome-based course outcomes, practicals and a certification benchmark." />
          </FadeIn>

          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">AI &amp; Data Science</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {aiDsModules.map((m) => (
              <StaggerItem key={m.title}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">{m.icon}</div>
                  <span className="text-sm font-semibold text-dark">{m.title}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Foundations &amp; Infrastructure</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {foundationModules.map((m) => (
              <StaggerItem key={m.title}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">{m.icon}</div>
                  <span className="text-sm font-semibold text-dark">{m.title}</span>
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
            <SectionHeader title="The learning journey" description="From technical foundations to production AI — with real projects and internships." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journey.map((j) => (
              <StaggerItem key={j.num}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 h-full">
                  <span className="text-2xl font-bold text-brand/30">{j.num}</span>
                  <h3 className="text-base font-semibold text-dark mt-2 mb-1">{j.title}</h3>
                  <p className="text-sm text-muted-brand">{j.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Cert-benchmarked content" description="Subject content is mapped to recognised industry certifications." />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {certs.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 glass-card dark:liquid-glass rounded-full px-4 py-2 text-sm font-medium text-dark">
                  <Award className="size-4 text-brand" /> {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Where freshers start" description="Because the program gives hands-on exposure to both data/AI and cloud/cyber security, graduates can target entry-level roles across both fields." />
          </FadeIn>

          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Data &amp; AI</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {dataAiRoles.map((c) => (
              <StaggerItem key={c.role}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">{c.icon}</div>
                  <span className="text-sm font-semibold text-dark">{c.role}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Cloud &amp; Cyber Security</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudSecRoles.map((c) => (
              <StaggerItem key={c.role}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">{c.icon}</div>
                  <span className="text-sm font-semibold text-dark">{c.role}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-muted-brand">
              <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-brand" /> Outcome-based, NEP 2020 aligned</span>
              <span className="flex items-center gap-1.5"><Workflow className="size-4 text-brand" /> Production MLOps practice</span>
              <span className="flex items-center gap-1.5"><Briefcase className="size-4 text-brand" /> Project + internships</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Add this specialisation to your program"
          description="We'll tailor the AI, data science and MLOps curriculum, labs and certification roadmap to integrate with your degree structure."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
