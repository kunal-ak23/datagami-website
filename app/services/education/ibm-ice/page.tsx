import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import { universityPartners } from "@/lib/data/partners"
import {
  Building2, Target, GraduationCap, Briefcase,
  Brain, Sparkles, BarChart3, Database, Cloud, ShieldCheck, Gamepad2, Cpu,
  BookOpen, Mic, BookMarked, Monitor, Package, Trophy, BadgeCheck, CheckCircle,
  Users, TrendingUp, Layers, Code2, Smartphone, Lock, Server, Network, Boxes,
  RadioTower, Fuel, Landmark, ShoppingCart, HeartPulse, Factory,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "IBM ICE - Innovation Centre for Education | Industry-Aligned Degree Specialisations",
  description:
    "IBM Innovation Centre for Education (ICE) embeds IBM-certified, industry-aligned technology specialisations into degree programs (B.Tech, MCA, MBA, BCA & more) through Project-Based Learning, IBM digital badges and strong placements. 30+ universities, 10,000+ students.",
  alternates: {
    canonical: "https://datagami.in/services/education/ibm-ice",
  },
  openGraph: {
    title: "IBM ICE - Innovation Centre for Education",
    description:
      "IBM-certified, industry-aligned technology specialisations embedded into degree programs through Project-Based Learning, with IBM digital badges and strong placements.",
    images: ["/images/ibm-ice/logo.jpg"],
  },
}

const heroStats = [
  { value: "30+", label: "Universities" },
  { value: "16", label: "Programs" },
  { value: "10,000+", label: "Students" },
  { value: "15+", label: "Years with Academia" },
]

const skillGap = [
  { icon: <TrendingUp className="size-6 text-brand" />, title: "Technology is disrupting faster than curricula", description: "Business models and tech change rapidly, while university curricula struggle to keep pace." },
  { icon: <Users className="size-6 text-brand" />, title: "Graduates aren't readily deployable", description: "Industry adds cost in time and money re-skilling fresh graduates for real-world roles." },
  { icon: <Target className="size-6 text-brand" />, title: "ICE closes the gap", description: "Industry-aligned, project-based skilling embedded inside the degree — so students graduate job-ready." },
]

const whatSetsApart = [
  { icon: <Target className="size-7 text-brand" />, title: "Focus on Industry Preparedness", description: "Curriculum, projects and mentoring designed around real industry problems and current technology stacks." },
  { icon: <GraduationCap className="size-7 text-brand" />, title: "Well-Planned Teaching Methodology", description: "A structured Project-Based Learning model — faculty trained by IBM, delivered through workshops, labs and guest lectures." },
  { icon: <Briefcase className="size-7 text-brand" />, title: "Enhanced Employability", description: "IBM-recognised digital badges and a portfolio of real projects that employers actively recruit for." },
]

const degrees = ["B.Tech", "M.Tech", "MCA", "MBA", "BCA", "BSc IT", "B.Pharm"]

const technologyTracks = [
  { icon: <Cloud className="size-6 text-brand" />, name: "Cloud Computing & Virtualization" },
  { icon: <BarChart3 className="size-6 text-brand" />, name: "Data Science & Business Analytics" },
  { icon: <Code2 className="size-6 text-brand" />, name: "Open Source Software & Open Standards" },
  { icon: <Smartphone className="size-6 text-brand" />, name: "Mobile Computing" },
  { icon: <Lock className="size-6 text-brand" />, name: "Cyber Security & Forensics" },
  { icon: <Server className="size-6 text-brand" />, name: "Mainframe Technology" },
  { icon: <Network className="size-6 text-brand" />, name: "IT Infrastructure Management" },
  { icon: <Gamepad2 className="size-6 text-brand" />, name: "Graphics & Gaming Technology" },
  { icon: <Cpu className="size-6 text-brand" />, name: "Internet of Things (IoT)" },
  { icon: <Brain className="size-6 text-brand" />, name: "Artificial Intelligence & Machine Learning (AI/ML)" },
  { icon: <Boxes className="size-6 text-brand" />, name: "Blockchain" },
]

const industryTracks = [
  { icon: <RadioTower className="size-6 text-brand" />, name: "Telecom Informatics" },
  { icon: <Fuel className="size-6 text-brand" />, name: "Oil & Gas Informatics" },
  { icon: <Landmark className="size-6 text-brand" />, name: "Banking, Financial Services & Insurance Informatics" },
  { icon: <ShoppingCart className="size-6 text-brand" />, name: "eCommerce & Retail Informatics" },
  { icon: <HeartPulse className="size-6 text-brand" />, name: "Healthcare Informatics" },
  { icon: <Factory className="size-6 text-brand" />, name: "Manufacturing Informatics" },
]

const deepTechTracks = [
  { icon: <Brain className="size-6 text-brand" />, name: "Artificial Intelligence & Machine Learning" },
  { icon: <Sparkles className="size-6 text-brand" />, name: "Advanced & Modern AI" },
  { icon: <BarChart3 className="size-6 text-brand" />, name: "Data Science with AI & ML" },
  { icon: <Database className="size-6 text-brand" />, name: "Data Analytics with AI" },
  { icon: <Cloud className="size-6 text-brand" />, name: "AI-Powered Cloud & DevOps" },
  { icon: <ShieldCheck className="size-6 text-brand" />, name: "AI-Powered Cybersecurity & Forensics" },
  { icon: <Gamepad2 className="size-6 text-brand" />, name: "AI-Powered AR/VR & Gaming" },
  { icon: <Cpu className="size-6 text-brand" />, name: "Internet of Things with AI" },
]

const components = [
  { icon: <BookOpen className="size-6 text-brand" />, title: "Curriculum Workshop", description: "Joint workshops to map the IBM curriculum onto your academic structure." },
  { icon: <GraduationCap className="size-6 text-brand" />, title: "Teach-the-Trainer (T3)", description: "IBM trains your faculty to deliver the specialisation in-house." },
  { icon: <Mic className="size-6 text-brand" />, title: "Industry Guest Lectures", description: "Webinars and seminars led by IBM and industry experts." },
  { icon: <BookMarked className="size-6 text-brand" />, title: "Content Delivery — Books", description: "Physical course content and reference material for students." },
  { icon: <Monitor className="size-6 text-brand" />, title: "Content Delivery — Online Portal", description: "Digital learning content delivered through the IBM ICE portal." },
  { icon: <Package className="size-6 text-brand" />, title: "Student & Faculty Kits", description: "Non-academic delivery kits for students and faculty." },
  { icon: <Trophy className="size-6 text-brand" />, title: "National Hackathons", description: "Competitive national hackathons that put learning into practice." },
]

const projectPoints = [
  "IBM experts set real-life problem statements from banking, finance, healthcare, agriculture and more.",
  "Students submit high-level and low-level design documents demonstrating their skill level.",
  "IBM mentors guide each team through briefing sessions to project completion.",
  "Every project ends with a working build and a student presentation.",
]

const hiringPartners = [
  "IBM", "Dell R&D", "Samsung R&D", "Cognizant", "Infosys", "Wipro", "Qualcomm",
  "Tech Mahindra", "HCL", "NTT Data", "Persistent", "Zensar", "L&T Infotech", "NIIT", "Atos",
]

const ibmIceFaqs = [
  {
    question: "What is IBM ICE?",
    answer: "IBM ICE (Innovation Centre for Education) is a university partnership program that embeds IBM-certified, industry-aligned technology specialisations into degree programs — B.Tech, M.Tech, MCA, MBA, BCA, BSc IT and B.Pharm — built on a Project-Based Learning framework, with IBM digital badges.",
  },
  {
    question: "Which specialisations are available?",
    answer: "11 Technology Tracks (Cloud, Data Science, Cyber Security, AI/ML, IoT, Blockchain and more), 6 Industry Informatics Tracks (Telecom, Oil & Gas, BFSI, eCommerce & Retail, Healthcare, Manufacturing), and 8 intensive Deep Technical Tracks for developers/implementors (10 modules · 500+ hours · 4 projects each).",
  },
  {
    question: "How is IBM ICE delivered?",
    answer: "Through curriculum workshops, Teach-the-Trainer (T3) faculty enablement, industry guest lectures, physical and online content, student & faculty kits, and national hackathons — built around a Project-Based Learning model with real IBM mentors.",
  },
  {
    question: "What credentials do students earn?",
    answer: "Students earn globally recognised IBM Digital Badges — verifiable credentials that validate real, industry-aligned skills and strengthen employability.",
  },
  {
    question: "What are the placement outcomes?",
    answer: "ICE students have been placed across MNCs, global system integrators, ISVs and R&D organisations — including IBM, Dell R&D, Cognizant, Infosys, Wipro, Qualcomm, Tech Mahindra and more.",
  },
]

const courseSchema = generateCourseSchema({
  name: "IBM ICE - Innovation Centre for Education",
  description:
    "IBM-certified, industry-aligned technology specialisations embedded into degree programs through Project-Based Learning, with IBM digital badges and strong placements.",
  provider: "IBM & Datagami Technology Services",
  url: "/services/education/ibm-ice",
})

export default function IBMICEPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Education", href: "/services#education" },
            { label: "IBM ICE" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="IBM ICE"
        subtitle="IBM Innovation Centre for Education — the future is now. Industry-aligned, IBM-certified technology specialisations embedded into your degree programs through Project-Based Learning."
        accentColor="text-brand"
        badgeText="IBM University Partnership"
        stats={heroStats}
        ctaText="Partner With Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-ibm-ice.png"
        logoSrc="/images/ibm-ice/logo.jpg"
        logoAlt="IBM Innovation Centre for Education"
        align="center"
      />

      {/* The skill gap */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Bridging the industry–academia gap"
              description="As technology disrupts faster, the gap between what universities teach and what industry needs keeps widening. IBM ICE closes it."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            {/* Cards stacked on the left */}
            <StaggerChildren className="space-y-4 order-2 lg:order-1">
              {skillGap.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="glass-card dark:liquid-glass rounded-xl p-5 hover:shadow-brand-md transition-all flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">{s.icon}</div>
                    <div>
                      <h3 className="text-base font-semibold text-dark mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-brand">{s.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
            {/* Chart on the right */}
            <FadeIn className="order-1 lg:order-2">
              <figure className="glass-card dark:liquid-glass rounded-2xl p-4 bg-white max-w-md mx-auto lg:max-w-none">
                <img src="/images/ibm-ice/skill-gap-chart.png" alt="The widening student skill gap — change in disruptive technology versus change in business models and processes over time" className="w-full rounded-lg" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Sets ICE Apart */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="What sets ICE apart" description="Three things make IBM ICE different from a standard certification add-on." />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {whatSetsApart.map((s) => (
              <StaggerItem key={s.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-7 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-brand">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Integrated into any degree */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Integrated into your degree programs" description="IBM ICE specialisations are embedded into existing graduate and postgraduate programs, in collaboration with your institution." />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {degrees.map((d) => (
                <span key={d} className="inline-flex items-center gap-2 glass-card dark:liquid-glass rounded-full px-5 py-2.5 text-sm font-semibold text-dark">
                  <GraduationCap className="size-4 text-brand" /> {d}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Specialisation Tracks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Specialisation tracks" description="Choose from technology tracks, industry-informatics tracks, and intensive deep-technical developer tracks." />
          </FadeIn>

          {/* Common stat for every track */}
          <FadeIn>
            <div className="glass-card dark:liquid-glass rounded-2xl p-5 mb-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 text-center">
              <span className="text-sm font-semibold text-dark">Every track includes</span>
              <span className="flex items-center gap-2"><span className="text-xl font-bold text-brand">10</span><span className="text-sm text-muted-brand">Modules</span></span>
              <span className="flex items-center gap-2"><span className="text-xl font-bold text-brand">500+</span><span className="text-sm text-muted-brand">Hours</span></span>
              <span className="flex items-center gap-2"><span className="text-xl font-bold text-brand">4</span><span className="text-sm text-muted-brand">Projects</span></span>
            </div>
          </FadeIn>

          {/* Technology Tracks */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="size-5 text-brand" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Technology Tracks · 11</h3>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {technologyTracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 hover:shadow-brand-md transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-3">{t.icon}</div>
                  <h4 className="text-sm font-semibold text-dark">{t.name}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Industry Informatics Tracks */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="size-5 text-brand" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Industry Informatics Tracks · 6</h3>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {industryTracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 hover:shadow-brand-md transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-3">{t.icon}</div>
                  <h4 className="text-sm font-semibold text-dark">{t.name}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Deep Technical Tracks */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="size-5 text-brand" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Deep Technical Tracks · 8</h3>
            </div>
            <p className="text-sm text-muted-brand mb-4">Intensive developer / implementor specialisations.</p>
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deepTechTracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-5 hover:shadow-brand-md transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-3">{t.icon}</div>
                  <h4 className="text-sm font-semibold text-dark">{t.name}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Future-Ready PBL Framework */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="The Future-Ready learning framework"
              description="A Project-Based Learning model: foundation courses, deep technical skills (AI/ML) and an industry domain, all built around a real project — leading to MVPs, internships, placement or higher studies."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
            <FadeIn>
              <figure className="glass-card dark:liquid-glass rounded-2xl p-3 bg-white">
                <img src="/images/ibm-ice/future-ready-framework.png" alt="IBM ICE Framework for Future-Ready Learners — foundation courses, deep technical AI/ML skills and industry domain, around a project, across semesters" className="w-full rounded-xl" loading="lazy" />
              </figure>
            </FadeIn>
            <FadeIn>
              <figure className="glass-card dark:liquid-glass rounded-2xl p-3 bg-white">
                <img src="/images/ibm-ice/pbl-structure.png" alt="IBM's unique Project-Based Learning structure" className="w-full rounded-xl" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Program components" description="Everything an institution needs to launch and run an IBM ICE specialisation." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((c) => (
              <StaggerItem key={c.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">{c.icon}</div>
                  <h3 className="text-base font-semibold text-dark mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-brand">{c.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* IBM Digital Badges */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                <BadgeCheck className="size-7 text-brand" />
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4">Globally recognised IBM Digital Badges</h2>
              <p className="text-muted-brand mb-4">
                Every specialisation culminates in verifiable IBM Digital Badges — credentials students can share with employers that validate real, industry-aligned skills.
              </p>
              <div className="space-y-2">
                {["Verifiable, shareable credential", "Recognised by employers worldwide", "Backed by the IBM brand"].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle className="size-5 text-brand shrink-0" />
                    <span className="text-sm font-medium text-dark">{p}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn>
              <figure className="glass-card dark:liquid-glass rounded-2xl p-3">
                <img src="/images/ibm-ice/digital-badge.png" alt="Sample IBM ICE digital badge" className="w-full rounded-xl" loading="lazy" />
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Real-world projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <figure className="glass-card dark:liquid-glass rounded-2xl p-3">
                <img src="/images/ibm-ice/sample-project.jpg" alt="Sample business application leveraging emerging technology, built by IBM ICE students" className="w-full rounded-xl" loading="lazy" />
              </figure>
            </FadeIn>
            <FadeIn>
              <SectionHeader title="Real projects, real mentors" description="Learning is anchored to live industry problems — not just lectures." align="left" />
              <div className="space-y-3">
                {projectPoints.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-brand">{p}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Success stories & placements */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Success stories & placements" description="Industry has welcomed ICE students with record placements across MNCs, R&D organisations, ISVs and start-ups." />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[1, 2, 3, 4, 5].map((n) => (
              <StaggerItem key={n}>
                <div className="rounded-xl overflow-hidden glass-card dark:liquid-glass">
                  <img src={`/images/ibm-ice/student-${n}.jpg`} alt={`IBM ICE students ${n}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <p className="text-center text-sm font-semibold text-muted-brand mb-4">Our students are hired by</p>
            <div className="flex flex-wrap justify-center gap-2">
              {hiringPartners.map((c) => (
                <span key={c} className="inline-flex items-center glass-card dark:liquid-glass rounded-full px-4 py-2 text-sm font-medium text-dark">{c}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* University partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Trusted by leading universities" description="Institutions across India and beyond have partnered with us to bring IBM ICE to their students." />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {universityPartners.map((p) => (
              <StaggerItem key={p.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-brand-md transition-all h-full">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" loading="lazy" />
                  ) : (
                    <div className="h-10 flex items-center justify-center"><span className="text-sm text-muted-brand font-medium">{p.name}</span></div>
                  )}
                  <span className="text-xs text-muted-brand font-medium text-center">{p.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={ibmIceFaqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Bring IBM ICE to your institution"
          description="Integrate IBM-certified specialisations into your degree programs and make your students future-ready. Let's design the right track for your campus."
          buttonText="Partner With Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
