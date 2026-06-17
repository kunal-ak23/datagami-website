import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { talentAcquisition } from "@/lib/data/services"
import {
  UserCheck, CalendarClock, FolderKanban, Crown, Cpu, Search, Workflow,
  Laptop, FlaskConical, Cog, Briefcase, Landmark, Calculator, RadioTower, TrendingUp,
  Brain, Bot, Database, Cloud, ShieldCheck, Building2, Code2, Server,
  Network, Sparkles, ListChecks, Layers, Heart, Award, CheckCircle,
  Users, Truck, ClipboardList, Scale, Megaphone, Headset,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services (RaaS) | Datagami",
  description:
    "Recruitment & Staffing as a service — connecting organisations with high-caliber professionals across IT, life sciences, engineering, finance and more. Permanent, contract, project-based and executive hiring, sourcing to onboarding.",
  alternates: {
    canonical: "https://datagami.in/services/hiring/talent-acquisition",
  },
  openGraph: {
    title: "Recruitment & Staffing Services (RaaS) | Datagami",
    description:
      "Recruitment & Staffing as a service — high-caliber professionals across IT, life sciences, engineering, finance and more, from sourcing to onboarding.",
    images: ["/images/hero/hero-talent-acquisition.png"],
  },
}

const heroStats = [
  { value: "15+", label: "Years Leadership Experience" },
  { value: "8", label: "Industries Served" },
  { value: "7", label: "Staffing Models" },
  { value: "End-to-End", label: "Sourcing to Onboarding" },
]

const capabilities = [
  {
    icon: <UserCheck className="size-7 text-brand" />,
    title: "Permanent Hiring",
    description: "Full-time hires who fit your team for the long term — across technology and business functions.",
  },
  {
    icon: <CalendarClock className="size-7 text-brand" />,
    title: "Contract & Temporary Staffing",
    description: "Flexible, on-demand professionals to meet short-term and seasonal workforce needs.",
  },
  {
    icon: <FolderKanban className="size-7 text-brand" />,
    title: "Project-Based Recruitment",
    description: "Assembled teams and specialists scoped to the duration and skills of a specific project.",
  },
  {
    icon: <Crown className="size-7 text-brand" />,
    title: "Executive & Leadership Search",
    description: "Discreet, targeted search for senior technology and business leadership roles.",
  },
  {
    icon: <Cpu className="size-7 text-brand" />,
    title: "Technology & Digital Talent",
    description: "Specialist hiring for software, data, cloud, cybersecurity and enterprise systems.",
  },
  {
    icon: <Search className="size-7 text-brand" />,
    title: "Talent Sourcing & Assessment",
    description: "Market-intelligence-led sourcing with rigorous technical screening and candidate assessment.",
  },
  {
    icon: <Workflow className="size-7 text-brand" />,
    title: "End-to-End Recruitment Support",
    description: "A single partner from candidate identification all the way through to onboarding.",
  },
]

const industries = [
  { icon: <Laptop className="size-6 text-brand" />, label: "Information Technology" },
  { icon: <FlaskConical className="size-6 text-brand" />, label: "Life Sciences" },
  { icon: <Cog className="size-6 text-brand" />, label: "Engineering" },
  { icon: <Briefcase className="size-6 text-brand" />, label: "Professional Services" },
  { icon: <Landmark className="size-6 text-brand" />, label: "Government" },
  { icon: <Calculator className="size-6 text-brand" />, label: "Accounting & Finance" },
  { icon: <RadioTower className="size-6 text-brand" />, label: "Telecommunications" },
  { icon: <TrendingUp className="size-6 text-brand" />, label: "Sales" },
]

const techDomains = [
  { icon: <Brain className="size-6 text-brand" />, label: "Artificial Intelligence" },
  { icon: <Bot className="size-6 text-brand" />, label: "Machine Learning" },
  { icon: <Database className="size-6 text-brand" />, label: "Data Science & Big Data" },
  { icon: <Cloud className="size-6 text-brand" />, label: "Cloud Computing" },
  { icon: <ShieldCheck className="size-6 text-brand" />, label: "Cybersecurity" },
  { icon: <Code2 className="size-6 text-brand" />, label: "Software Development" },
  { icon: <Server className="size-6 text-brand" />, label: "DevOps & Infrastructure" },
  { icon: <Building2 className="size-6 text-brand" />, label: "Enterprise Platforms (ERP/CRM)" },
]

const businessDomains = [
  { icon: <Calculator className="size-6 text-brand" />, label: "Accounting & Finance" },
  { icon: <Megaphone className="size-6 text-brand" />, label: "Sales & Marketing" },
  { icon: <Users className="size-6 text-brand" />, label: "Human Resources" },
  { icon: <Truck className="size-6 text-brand" />, label: "Operations & Supply Chain" },
  { icon: <ClipboardList className="size-6 text-brand" />, label: "Project & Program Management" },
  { icon: <Scale className="size-6 text-brand" />, label: "Legal & Compliance" },
  { icon: <Headset className="size-6 text-brand" />, label: "Customer Success & Support" },
  { icon: <Briefcase className="size-6 text-brand" />, label: "Professional Services" },
]

const whyPartner = [
  {
    icon: <Network className="size-7 text-brand" />,
    title: "Strong Professional Network",
    description: "Access to a deep, qualified network of technology and business professionals.",
  },
  {
    icon: <Sparkles className="size-7 text-brand" />,
    title: "Emerging-Tech Expertise",
    description: "Genuine understanding of AI, ML, big data, cloud and cybersecurity skill sets.",
  },
  {
    icon: <ListChecks className="size-7 text-brand" />,
    title: "Structured & Transparent Process",
    description: "An efficient, milestone-based hiring process you can see and rely on.",
  },
  {
    icon: <Layers className="size-7 text-brand" />,
    title: "Multi-Industry Experience",
    description: "Proven hiring across eight industries, from IT and life sciences to finance and government.",
  },
  {
    icon: <Heart className="size-7 text-brand" />,
    title: "Cultural-Fit Focus",
    description: "Candidates assessed for long-term success — fit both technically and culturally.",
  },
  {
    icon: <Award className="size-7 text-brand" />,
    title: "Experienced Leadership",
    description: "Led by a recruitment professional with 15+ years of talent-acquisition experience.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Recruitment & Staffing Services",
  "serviceType": "Recruitment as a Service (RaaS)",
  "description":
    "Recruitment & staffing as a service — permanent, contract, project-based and executive hiring across technology, life sciences, engineering, finance and more, from sourcing to onboarding.",
  "provider": { "@type": "Organization", "name": "Datagami Technology Services", "url": "https://datagami.in" },
  "areaServed": "IN",
}

export default function RecruitmentStaffingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Hiring", href: "/services#hiring" },
            { label: "Recruitment & Staffing" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="Recruitment & Staffing"
        subtitle="Finding the right talent is critical to business success. Datagami delivers specialised recruitment and staffing solutions — Recruitment as a Service — that connect organisations with high-caliber professionals and help you hire faster, smarter and with greater confidence."
        accentColor="text-brand"
        badgeText="Recruitment as a Service"
        stats={heroStats}
        ctaText="Let's Connect"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-talent-acquisition.png"
        align="center"
      />

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Recruitment as a Service (RaaS)"
              description="A simpler, faster way to build strong, future-ready teams."
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-4xl mx-auto text-muted-brand leading-relaxed space-y-4">
              <p>
                Datagami is a digital technology and consulting firm that helps organisations build strong, future-ready teams through specialised recruitment and staffing solutions. We partner with startups, growth-stage companies and established enterprises to identify and attract high-caliber professionals who align with both the technical requirements and the cultural values of the organisation.
              </p>
              <p>
                Led by a recruitment industry professional with over 15 years of experience, Datagami brings extensive expertise in talent acquisition across Information Technology, Life Sciences, Engineering, Professional Services, Government, Accounting &amp; Finance, Telecommunications and Sales. Our RaaS model is designed to simplify and accelerate hiring — we work closely with clients to understand their objectives, workforce requirements and culture, then source, assess and deliver the right talent efficiently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Staffing Capabilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Staffing Capabilities"
              description="Whatever shape your hiring takes, we have a model for it."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-brand">{c.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Industries We Hire For */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industries We Hire For"
              description="Multi-industry hiring experience across eight sectors."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <StaggerItem key={ind.label}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <span className="text-sm font-semibold text-dark">{ind.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Domains We Specialise In */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Domains We Specialise In"
              description="Deep hiring expertise across both technology and business functions."
            />
          </FadeIn>

          {/* Technology */}
          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Technology</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {techDomains.map((t) => (
              <StaggerItem key={t.label}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    {t.icon}
                  </div>
                  <span className="text-sm font-semibold text-dark">{t.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Business & Non-Technical */}
          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Business &amp; Non-Technical</h3>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {businessDomains.map((b) => (
              <StaggerItem key={b.label}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    {b.icon}
                  </div>
                  <span className="text-sm font-semibold text-dark">{b.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Partner With Datagami */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why Partner With Datagami"
              description="A recruitment partner focused on long-term hiring success and cultural fit."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((w) => (
              <StaggerItem key={w.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {w.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-brand">{w.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Hiring Process"
              description="A structured, transparent approach from first brief to first day."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentAcquisition.processSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-10 h-10 rounded-full bg-brand text-dark font-bold flex items-center justify-center mb-4 text-lg">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-brand">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <div className="flex items-center justify-center gap-2 mt-10 text-sm font-semibold text-brand">
              <CheckCircle className="size-5" />
              <span>Hire faster, smarter, and with greater confidence.</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Build the team your business deserves"
          description="Tell us about the roles you're hiring for and we'll connect you with exceptional talent that drives business success."
          buttonText="Let's Connect"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
