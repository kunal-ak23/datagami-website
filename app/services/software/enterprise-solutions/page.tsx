import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import {
  Code2, GraduationCap, Server, Brain, Users, FileSignature, TrendingUp,
  Activity, ShieldCheck, LineChart, Workflow, Sparkles, FileText, ClipboardCheck,
  Cpu, Boxes, Building2, Webhook, Cloud, Container, GitBranch, Database,
  KeyRound, ScrollText, Network, Lock, Gauge, Target, RefreshCw, Headset,
  CreditCard, Landmark, Store, Globe, Handshake, CheckCircle, X,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Enterprise Software & Digital Solutions | Datagami LLP",
  description:
    "Custom software engineering, AI-enabled platforms, and enterprise infrastructure for institutions that demand control. NOC/SOC, multi-tenant SaaS, and AI integration across BFSI, higher education and regulated enterprises.",
  alternates: {
    canonical: "https://datagami.in/services/software/enterprise-solutions",
  },
  openGraph: {
    title: "Enterprise Software & Digital Solutions | Datagami LLP",
    description:
      "Custom software engineering, AI-enabled platforms, and enterprise infrastructure for institutions that demand control.",
    images: ["/images/hero/hero-team-innovation.png"],
  },
}

const heroStats = [
  { value: "5,000+", label: "Active Platform Users" },
  { value: "5+", label: "Years Operational" },
  { value: "4", label: "Capability Pillars" },
  { value: "3", label: "Countries Served" },
]

const philosophy = {
  common: [
    "Deploy generic, off-the-shelf platforms",
    "Templates forced onto your workflow",
    "Vendor-driven feature roadmaps",
    "Short-term implementation engagements",
    "Disconnected products with manual integration",
    "Generic compliance applied uniformly",
  ],
  datagami: [
    "Architect business-aligned systems",
    "Engineered around your operational reality",
    "Workflow-first, governance-aware architecture",
    "Long-term partnership and co-build model",
    "AI integration embedded at the architecture level",
    "Compliance and security designed into every layer",
  ],
}

const pillars = [
  {
    icon: <Code2 className="size-7 text-brand" />,
    title: "Custom Enterprise Software",
    description: "Business-aligned architecture — HRMS, contract & asset lifecycle, and admission intelligence systems engineered around your workflows.",
  },
  {
    icon: <GraduationCap className="size-7 text-brand" />,
    title: "Education Technology",
    description: "Multi-tenant LMS (EduDron) and integrated university governance ERP (Total ERP) at multi-thousand-user scale.",
  },
  {
    icon: <Server className="size-7 text-brand" />,
    title: "Enterprise Infrastructure",
    description: "NOC and SOC services for mission-critical, regulated environments — including BFSI clients like SBIMF and BDO.",
  },
  {
    icon: <Brain className="size-7 text-brand" />,
    title: "AI & Advanced Analytics",
    description: "Predictive dashboards, generative-AI integration, intelligent reporting, and automated decisions — embedded, not bolted on.",
  },
]

const caseStudies = [
  {
    icon: <Users className="size-7 text-brand" />,
    name: "OPSY",
    tag: "Custom HRMS & Workforce Systems",
    client: "Thepla House by Tejal's Kitchen · Hospitality & Retail",
    challenge: "Manual, semi-structured workforce and payroll processes lacking transparency and managerial oversight.",
    built: "A unified digital HRMS delivering structured workforce governance: allocation & hierarchy mapping, centralized payroll control, performance monitoring, role-based access, and management dashboards.",
    outcome: "Improved workforce transparency, payroll accuracy, and managerial oversight.",
  },
  {
    icon: <FileSignature className="size-7 text-brand" />,
    name: "RentAxis",
    tag: "Contract & Asset Lifecycle Platform",
    client: "Enterprise client (under NDA) · Dubai, UAE",
    challenge: "Engineer a secure, enterprise-grade contract and asset lifecycle platform for an international client under strict confidentiality.",
    built: "Structured contract lifecycle tracking with compliance-grade financial controls, regulatory monitoring, and operational transparency across distributed assets.",
    outcome: "Proof of delivering enterprise systems in regulated international markets.",
  },
  {
    icon: <TrendingUp className="size-7 text-brand" />,
    name: "Trackie",
    tag: "Admission & Commission Intelligence",
    client: "EdTech & university ecosystems",
    challenge: "Reconciliation delays and limited visibility into counselor-driven admission revenue streams.",
    built: "An end-to-end admission pipeline and commission system: real-time pipeline tracking, counselor commission management, automated payout logic, and analytics dashboards.",
    outcome: "Reduced reconciliation delays and improved institutional financial visibility.",
  },
]

const noc = [
  "24/7 real-time infrastructure monitoring",
  "Server performance optimization & uptime management",
  "Network diagnostics and issue resolution",
  "Cloud, hybrid and on-premise environment management",
  "Capacity planning and scalability oversight",
]

const soc = [
  "Continuous security monitoring",
  "Threat detection and incident response",
  "Log aggregation and analytics",
  "Vulnerability assessment and mitigation",
  "Regulatory and compliance support",
]

const infraClients = [
  { name: "SBIMF", sector: "Mutual Fund / Asset Management", note: "Infrastructure & server management for one of India's largest asset managers." },
  { name: "BDO", sector: "Audit, Tax & Advisory", note: "Enterprise-grade infrastructure services for a global audit and advisory network." },
]

const aiCapabilities = [
  { icon: <LineChart className="size-6 text-brand" />, title: "Predictive Analytics", description: "Forward-looking decision support across operational data streams." },
  { icon: <Workflow className="size-6 text-brand" />, title: "Automated Decisions", description: "Decision systems anchored in structured business logic." },
  { icon: <Sparkles className="size-6 text-brand" />, title: "Generative AI", description: "Integrations embedded directly within enterprise workflows." },
  { icon: <FileText className="size-6 text-brand" />, title: "Intelligent Reporting", description: "Executive visibility engines with adaptive insights." },
  { icon: <ClipboardCheck className="size-6 text-brand" />, title: "AI Assessment", description: "Automated evaluation modules for learning and performance." },
  { icon: <Cpu className="size-6 text-brand" />, title: "ML Process Automation", description: "Machine-learning frameworks driving operational efficiency." },
]

const architecture = [
  { icon: <Boxes className="size-6 text-brand" />, label: "Microservices", description: "Modular service boundaries" },
  { icon: <Building2 className="size-6 text-brand" />, label: "Multi-Tenant SaaS", description: "Tenant-isolated frameworks" },
  { icon: <Webhook className="size-6 text-brand" />, label: "API-First", description: "Secure interoperability" },
  { icon: <Cloud className="size-6 text-brand" />, label: "Cloud-Native", description: "AWS / Azure compatible" },
  { icon: <Container className="size-6 text-brand" />, label: "Containerized", description: "Docker orchestration" },
  { icon: <GitBranch className="size-6 text-brand" />, label: "CI / CD Pipelines", description: "Continuous delivery" },
  { icon: <Database className="size-6 text-brand" />, label: "Optimized Databases", description: "Secure data layer" },
  { icon: <KeyRound className="size-6 text-brand" />, label: "Role-Based Access", description: "Identity control" },
  { icon: <ScrollText className="size-6 text-brand" />, label: "Compliance-Ready", description: "Audit-aligned design" },
]

const principles = [
  { icon: <TrendingUp className="size-7 text-brand" />, title: "Scalability", description: "Systems engineered to grow with increasing user loads and geographic expansion." },
  { icon: <Network className="size-7 text-brand" />, title: "Interoperability", description: "Seamless integration with existing enterprise systems and external platforms." },
  { icon: <Lock className="size-7 text-brand" />, title: "Data Security", description: "Structured access governance and data protection at every layer." },
  { icon: <Activity className="size-7 text-brand" />, title: "High Availability", description: "Uptime assurance with redundancy and failover by design." },
  { icon: <Gauge className="size-7 text-brand" />, title: "Performance", description: "Operational efficiency through optimized data flow and caching strategies." },
]

const engagementModels = [
  { icon: <Target className="size-6 text-brand" />, title: "Fixed-Scope Project Delivery", description: "Defined deliverables, timelines and outcomes — ideal for bounded transformation projects." },
  { icon: <Users className="size-6 text-brand" />, title: "Dedicated Engineering Teams", description: "Embedded squads operating as an extension of your in-house technology function." },
  { icon: <CreditCard className="size-6 text-brand" />, title: "SaaS Licensing", description: "Subscription access to Datagami's product platforms — EduDron, Total ERP, and others." },
  { icon: <Headset className="size-6 text-brand" />, title: "Managed Services Retainer", description: "Ongoing operational management of infrastructure, platforms and continuous improvement." },
  { icon: <RefreshCw className="size-6 text-brand" />, title: "Build–Operate–Transfer (BOT)", description: "We build, operate, and progressively transfer to your team for capability-building engagements." },
]

const lifecycle = [
  { num: "1", title: "Discovery", description: "Business requirement capture" },
  { num: "2", title: "Process Mapping", description: "Workflow engineering" },
  { num: "3", title: "UI / UX Design", description: "Architecture planning" },
  { num: "4", title: "Agile Build", description: "Iterative development" },
  { num: "5", title: "Deployment", description: "Secure environment configuration" },
  { num: "6", title: "Integration", description: "Enterprise system linkage" },
  { num: "7", title: "Operate", description: "Monitoring & optimization" },
]

const governance = [
  "NDA-compliant project governance",
  "Data segregation in multi-tenant architectures",
  "Role-based access and identity management",
  "Secure hosting and infrastructure hardening",
  "Log monitoring and access-control frameworks",
  "Audit-ready documentation and compliance support",
]

const industries = [
  { icon: <GraduationCap className="size-6 text-brand" />, label: "Higher Education", note: "Universities & academic ecosystems" },
  { icon: <Landmark className="size-6 text-brand" />, label: "BFSI & Financial Services", note: "Banking · Investment · Audit" },
  { icon: <Store className="size-6 text-brand" />, label: "Hospitality & Retail", note: "Workforce-intensive operations" },
  { icon: <Building2 className="size-6 text-brand" />, label: "Institutional Enterprises", note: "Regulated & compliance-driven" },
  { icon: <Globe className="size-6 text-brand" />, label: "International Corporates", note: "Cross-border deployments" },
]

const differentiators = [
  { icon: <Code2 className="size-7 text-brand" />, title: "Business-Specific Engineering", description: "Systems engineered around client workflows — never standardized templates." },
  { icon: <Users className="size-7 text-brand" />, title: "Multi-Thousand-User Scale", description: "Proven institutional scale on EduDron and Total ERP platforms." },
  { icon: <Globe className="size-7 text-brand" />, title: "Multi-Country Expansion", description: "Active deployments across India, UAE and South Africa." },
  { icon: <ShieldCheck className="size-7 text-brand" />, title: "Infrastructure & Security", description: "NOC and SOC capabilities for regulated BFSI environments." },
  { icon: <Brain className="size-7 text-brand" />, title: "Architecture-Level AI", description: "Intelligence embedded into the system — not bolted on later." },
  { icon: <Handshake className="size-7 text-brand" />, title: "Long-Term Partnership", description: "Structured engagement frameworks designed for sustained co-build." },
]

const capabilitiesIndex = [
  { icon: <Code2 className="size-5 text-brand" />, label: "Custom Software", href: "#case-studies" },
  { icon: <Server className="size-5 text-brand" />, label: "Enterprise Infrastructure", href: "#infrastructure" },
  { icon: <Brain className="size-5 text-brand" />, label: "AI & Analytics", href: "#ai-analytics" },
  { icon: <Boxes className="size-5 text-brand" />, label: "Modern Architecture", href: "#architecture" },
  { icon: <Target className="size-5 text-brand" />, label: "Engagement Models", href: "#engagement" },
  { icon: <Workflow className="size-5 text-brand" />, label: "Delivery Lifecycle", href: "#delivery" },
  { icon: <ShieldCheck className="size-5 text-brand" />, label: "Governance & Security", href: "#governance" },
  { icon: <Landmark className="size-5 text-brand" />, label: "Industries Served", href: "#industries" },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Software & Digital Solutions",
  "serviceType": "Custom software engineering, enterprise infrastructure and AI solutions",
  "description":
    "Custom software engineering, AI-enabled platforms, NOC/SOC enterprise infrastructure, and multi-tenant SaaS for regulated, scale-sensitive institutions.",
  "provider": { "@type": "Organization", "name": "Datagami LLP", "url": "https://datagami.in" },
  "areaServed": ["IN", "AE", "ZA"],
}

export default function EnterpriseSolutionsPage() {
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
            { label: "Enterprise Solutions", href: "/services#enterprise-solutions" },
            { label: "Enterprise Software & Digital Solutions" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="Enterprise Software & Digital Solutions"
        subtitle="Custom software engineering, AI-enabled platforms, and enterprise infrastructure for institutions that demand control. We architect systems — we don't deploy templates."
        accentColor="text-brand"
        badgeText="Datagami LLP · Capabilities"
        stats={heroStats}
        ctaText="Book a Consultation"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-team-innovation.png"
      />

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Solution architects, not product resellers"
              description="We do not deploy generic platforms — we architect business-aligned systems tailored to your workflows, compliance requirements, and long-term growth."
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FadeIn>
              <div className="rounded-xl border border-border-custom p-8 h-full">
                <h3 className="text-lg font-semibold text-muted-brand mb-5">The common approach</h3>
                <ul className="space-y-3">
                  {philosophy.common.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="size-5 text-red-400/80 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-brand">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full border border-brand/30">
                <h3 className="text-lg font-semibold text-brand mb-5">The Datagami approach</h3>
                <ul className="space-y-3">
                  {philosophy.datagami.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Capabilities at a glance (clickable index) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Everything we do, at a glance"
              description="The full span of our capabilities. Tap any area to jump straight to the details."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilitiesIndex.map((c) => (
              <StaggerItem key={c.href}>
                <a
                  href={c.href}
                  className="group flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 hover:-translate-y-1 hover:shadow-brand-md transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-sm font-semibold text-dark group-hover:text-brand transition-colors">
                    {c.label}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Four Capability Pillars */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Four capability pillars"
              description="Across the technology lifecycle — integrated under a single architecture and governance framework."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-brand">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Custom Software — Case Studies */}
      <section id="case-studies" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Custom enterprise software in production"
              description="Business-aligned engineering. No templates, no shortcuts — three systems built around real operational reality."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                      {cs.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark">{cs.name}</h3>
                      <p className="text-xs text-brand font-medium">{cs.tag}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-brand mb-4">{cs.client}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-brand">Challenge</span>
                      <p className="text-muted-brand mt-1">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-brand">What we built</span>
                      <p className="text-muted-brand mt-1">{cs.built}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-custom flex items-start gap-2">
                    <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                    <p className="text-sm text-dark font-medium">{cs.outcome}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Enterprise Infrastructure */}
      <section id="infrastructure" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Enterprise infrastructure & managed services"
              description="The secure, resilient backbone behind mission-critical operations — trusted by regulated BFSI institutions."
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center">
                    <Activity className="size-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">NOC — Network Operations Center</h3>
                    <p className="text-xs text-brand font-medium">24/7 infrastructure monitoring</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {noc.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-brand">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center">
                    <ShieldCheck className="size-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">SOC — Security Operations Center</h3>
                    <p className="text-xs text-brand font-medium">Continuous threat monitoring</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {soc.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-brand">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {infraClients.map((c) => (
              <StaggerItem key={c.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <h4 className="text-xl font-bold text-brand">{c.name}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-brand mt-1 mb-2">{c.sector}</p>
                  <p className="text-sm text-muted-brand">{c.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* AI & Advanced Analytics */}
      <section id="ai-analytics" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="AI & advanced analytics — embedded, not bolted on"
              description="We embed AI directly into enterprise platforms, transforming data into actionable insight at the architecture level."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((a) => (
              <StaggerItem key={a.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {a.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-brand">{a.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Architecture & Design Principles */}
      <section id="architecture" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Modern, scalable, security-first architecture"
              description="Engineered using architecture principles designed for long-term institutional growth, resilience, and adaptability."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {architecture.map((a) => (
              <StaggerItem key={a.label}>
                <div className="flex items-center gap-3 glass-card dark:liquid-glass rounded-xl p-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    {a.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">{a.label}</p>
                    <p className="text-xs text-muted-brand">{a.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4 text-center">Five non-negotiable design principles</h3>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-3 mx-auto">
                    {p.icon}
                  </div>
                  <h4 className="text-base font-semibold text-dark mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-brand">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Engagement models that fit your procurement"
              description="Five flexible commercial structures aligned to institutional procurement frameworks and governance protocols."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.map((m) => (
              <StaggerItem key={m.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-brand">{m.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Delivery Lifecycle */}
      <section id="delivery" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="A seven-stage delivery lifecycle"
              description="Predictable timelines, controlled risk, and transparent governance — from discovery through post-go-live."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {lifecycle.map((s) => (
              <StaggerItem key={s.num}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 h-full text-center">
                  <div className="w-10 h-10 rounded-full bg-brand text-dark font-bold flex items-center justify-center mb-3 text-base mx-auto">
                    {s.num}
                  </div>
                  <h4 className="text-sm font-semibold text-dark mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-brand">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Governance, Security & Compliance */}
      <section id="governance" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-10 text-brand" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-3">Audit-ready, NDA-compliant, governance-aligned</h2>
                  <p className="text-muted-brand mb-6">
                    Every engagement operates under enterprise-grade governance, with security and compliance treated as architectural concerns — not afterthoughts.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {governance.map((g) => (
                      <div key={g} className="flex items-start gap-2">
                        <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-dark font-medium">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Trusted across regulated, scale-sensitive sectors"
              description="Where operational reliability, regulatory sensitivity, and scalability are non-negotiable."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <StaggerItem key={ind.label}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-3 mx-auto">
                    {ind.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-dark mb-1">{ind.label}</h3>
                  <p className="text-xs text-muted-brand">{ind.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Proof points */}
      <FadeIn>
        <StatsBar
          stats={[
            { value: "5,000+", label: "Active Learners (EduDron)" },
            { value: "Multi", label: "University ERP Deployments" },
            { value: "5+", label: "Years Since 2020" },
            { value: "3", label: "Countries (IN · UAE · ZA)" },
          ]}
          variant="dark"
        />
      </FadeIn>

      {/* Why Datagami */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why institutions choose Datagami"
              description="Sustainable digital foundations — not temporary system deployments."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {d.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-brand">{d.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Let's architect your system"
          description="We operate as technology co-builders, not product vendors. Tell us about your operational reality and we'll design a system around it."
          buttonText="Book a Consultation"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
