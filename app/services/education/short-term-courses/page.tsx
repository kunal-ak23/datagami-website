import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  Layers, Plus, Equal, Target, BookOpen, Users, Briefcase, Award,
  GraduationCap, ClipboardCheck, FileCheck, ShieldCheck, QrCode,
  Brain, BarChart3, Lock, Building2, Cpu, Boxes, Cloud, Code2, Sparkles,
  CheckCircle, Clock, Layers3, Workflow, Trophy,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'Short-Term Certification Programs by Datagami | University Partnerships',
  description:
    'Industry-aligned short-term certification programs for UG & PG students. 10+ domains, 45-hour structured learning, 3-stage assessment, Train-the-Trainer model, and verifiable, NEP 2020-aligned credentials.',
  alternates: {
    canonical: 'https://datagami.in/services/education/short-term-courses',
  },
  openGraph: {
    title: 'Short-Term Certification Programs by Datagami | University Partnerships',
    description:
      'Industry-aligned short-term certification programs for UG & PG students. 10+ domains, 45-hour structured learning, 3-stage assessment, and verifiable, NEP 2020-aligned credentials.',
    images: ['/images/short-term-courses/program-in-action.png'],
  },
}

const heroStats = [
  { value: "10+", label: "In-Demand Domains" },
  { value: "45 hrs", label: "Per Program" },
  { value: "3-Stage", label: "Assessment Framework" },
  { value: "2-Way", label: "Mentorship" },
]

const deliverHighlights = [
  {
    icon: <Boxes className="size-8 text-brand" />,
    title: "10+ In-Demand Domains",
    description: "AI/ML, Data Science, Cybersecurity, Cloud, and more — pick what fits your departments.",
  },
  {
    icon: <Clock className="size-8 text-brand" />,
    title: "45 Hours Per Program",
    description: "Structured learning combined with hands-on practical training in every program.",
  },
  {
    icon: <ClipboardCheck className="size-8 text-brand" />,
    title: "3-Stage Assessment",
    description: "Unit tests, a comprehensive exam, and a mentored industry project.",
  },
  {
    icon: <Users className="size-8 text-brand" />,
    title: "2-Way Mentorship",
    description: "Academic and industry mentors guide every student through to completion.",
  },
]

const objectives = [
  {
    icon: <Briefcase className="size-8 text-brand" />,
    title: "Job-Ready Skills",
    description: "Equip students with applied skills in high-demand technology and business domains.",
  },
  {
    icon: <BookOpen className="size-8 text-brand" />,
    title: "Strengthen Curriculum",
    description: "Augment the existing university curriculum with industry-aligned specialisations.",
  },
  {
    icon: <GraduationCap className="size-8 text-brand" />,
    title: "Faculty Capability",
    description: "Build sustainable in-house faculty expertise through structured T3 engagements.",
  },
  {
    icon: <Target className="size-8 text-brand" />,
    title: "Real-World Exposure",
    description: "Expose students to real industry problem statements through mentored projects.",
  },
  {
    icon: <Award className="size-8 text-brand" />,
    title: "Recognised Credentials",
    description: "Award industry-recognised certifications that improve placement outcomes.",
  },
  {
    icon: <CheckCircle className="size-8 text-brand" />,
    title: "NEP 2020 Alignment",
    description: "Strengthen the university's NEP compliance through skill-based learning components.",
  },
]

const methodology = [
  {
    step: "01",
    label: "Faculty Upskilling",
    title: "Train-the-Trainer",
    points: [
      "4 days × 6 hrs (24 total)",
      "SME-led intensive training",
      "Faculty assessment + certification",
    ],
  },
  {
    step: "02",
    label: "Blended Student Learning",
    title: "Course Delivery",
    points: [
      "Day-to-day by certified faculty",
      "2 online SME guest lectures",
      "3 days offline SME sessions",
      "2-day intensive bootcamp",
    ],
  },
  {
    step: "03",
    label: "Applied Capstone",
    title: "Industry Project",
    points: [
      "Unique problem per group",
      "Dual mentorship model",
      "Portfolio-grade outcomes",
    ],
  },
]

const t3Structure = [
  { label: "Duration", value: "4 Days" },
  { label: "Daily Hours", value: "6 Hours / Day" },
  { label: "Total Hours", value: "24 Hours" },
  { label: "Mode", value: "SME-Led, Intensive" },
]

const t3Steps = [
  { num: "1", title: "Nominate", description: "University nominates faculty for the program." },
  { num: "2", title: "Train", description: "4-day intensive training delivered by Datagami SME." },
  { num: "3", title: "Assess", description: "Short qualifying assessment at the end of T3." },
  { num: "4", title: "Certify", description: "Certified faculty deliver the course on campus." },
]

const assessment = [
  {
    step: "01",
    icon: <ClipboardCheck className="size-7 text-brand" />,
    title: "Unit Tests",
    description: "Conducted after each module to evaluate continuous learning.",
    meta: "20 marks each · Best 5 of 6",
  },
  {
    step: "02",
    icon: <FileCheck className="size-7 text-brand" />,
    title: "Comprehensive Exam",
    description: "End-of-course MCQ-based exam covering the entire syllabus.",
    meta: "MCQ-based · Full syllabus",
  },
  {
    step: "03",
    icon: <Trophy className="size-7 text-brand" />,
    title: "Industry Project",
    description: "Group project on a unique, industry-aligned problem statement.",
    meta: "Dual evaluation · Academia + Industry",
  },
]

const certificationPoints = [
  "Industry-recognised credential",
  "Verifiable ID with QR-based authentication",
  "Strengthens placement profile",
  "NEP 2020 skill-based learning aligned",
]

const catalogue = [
  { icon: <Brain className="size-6 text-brand" />, title: "AI & Machine Learning", description: "Generative AI, LLMs, NLP, Computer Vision" },
  { icon: <BarChart3 className="size-6 text-brand" />, title: "Data Science & Analytics", description: "Power BI, Tableau, R, SPSS, Predictive Analytics" },
  { icon: <Lock className="size-6 text-brand" />, title: "Cybersecurity & Forensics", description: "Ethical Hacking, Network Security, Digital Forensics" },
  { icon: <Building2 className="size-6 text-brand" />, title: "Business & Industry", description: "BFSI, Digital Marketing, Equity Research, Jira" },
  { icon: <Cpu className="size-6 text-brand" />, title: "IoT & Embedded Systems", description: "IoT Architecture, Edge Computing, Sensor Tech" },
  { icon: <Boxes className="size-6 text-brand" />, title: "AR / VR & Gaming", description: "AR Mobile, VR Environments, 3D Modeling" },
  { icon: <Cloud className="size-6 text-brand" />, title: "Cloud, DevOps & Infra", description: "Cloud Computing, DevOps, Linux Admin" },
  { icon: <Code2 className="size-6 text-brand" />, title: "Programming & Foundations", description: "Python, Foundations of Software Development" },
  { icon: <Sparkles className="size-6 text-brand" />, title: "Emerging Tech", description: "FinTech, AgriTech, Emerging IT Trends" },
]

const testimonials = [
  {
    name: "Dr. Amrita Baid More",
    role: "Faculty Coordinator",
    image: "/images/testimonials/short-term/amrita-baid-more.jpg",
  },
  {
    name: "Clive Nelson Fernandes",
    role: "MBA Student",
    image: "/images/testimonials/short-term/clive-fernandes.jpg",
  },
  {
    name: "Aastha Sagarkar",
    role: "MBA Student",
    image: "/images/testimonials/short-term/aastha-sagarkar.jpg",
  },
  {
    name: "Radhika Yadav",
    role: "MBA Student",
    image: "/images/testimonials/short-term/radhika-yadav.jpg",
  },
]

const engagement = [
  { num: "1", title: "Discovery", description: "Initial consultation on needs & calendar." },
  { num: "2", title: "Course Selection", description: "Joint shortlisting from the catalogue." },
  { num: "3", title: "MoU & Schedule", description: "Sign MoU, finalise academic calendar." },
  { num: "4", title: "T3 Training", description: "4-day faculty training & certification." },
  { num: "5", title: "Course Rollout", description: "Day-to-day teaching + SME engagements." },
  { num: "6", title: "Project Work", description: "Group projects with dual mentors." },
  { num: "7", title: "Assessment", description: "Unit tests, exam, project evaluation." },
  { num: "8", title: "Certification", description: "Award co-branded certificates." },
  { num: "9", title: "Review", description: "Joint feedback & next-cohort plan." },
]

const whyDatagami = [
  {
    icon: <ShieldCheck className="size-8 text-brand" />,
    title: "Industry Anchored",
    description: "NASSCOM · IBM Gold Partner · AIMA · BFSI Sector Skill Council.",
  },
  {
    icon: <Boxes className="size-8 text-brand" />,
    title: "Wide Catalogue",
    description: "Programs across AI/ML, Data Science, Cybersecurity, Cloud, IoT, AR/VR, BFSI, and more.",
  },
  {
    icon: <GraduationCap className="size-8 text-brand" />,
    title: "Capability Building",
    description: "The T3 model builds sustainable internal expertise that lasts beyond the engagement.",
  },
  {
    icon: <Layers3 className="size-8 text-brand" />,
    title: "Hybrid Delivery",
    description: "Best of online SME exposure and on-campus hands-on instruction.",
  },
  {
    icon: <Workflow className="size-8 text-brand" />,
    title: "Project-Driven",
    description: "Every student exits with a real, mentored, portfolio-grade project.",
  },
  {
    icon: <QrCode className="size-8 text-brand" />,
    title: "Verifiable Credentials",
    description: "Each certificate has a unique ID and QR-based verification.",
  },
]

const courseSchema = generateCourseSchema({
  name: "Short-Term Certification Programs by Datagami",
  description:
    "Industry-aligned short-term certification programs for UG & PG students across 10+ domains, with a 3-stage assessment framework and verifiable, NEP 2020-aligned credentials.",
  duration: "PT45H",
  url: "/services/education/short-term-courses",
})

export default function ShortTermCoursesPage() {
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
            { label: "Short-Term Courses" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="Short-Term Certification Programs"
        subtitle="Industry-aligned, applied certification programs for undergraduate and postgraduate students — layered on top of your curriculum to produce career-ready graduates with verifiable credentials."
        accentColor="text-brand"
        badgeText="University Partnership Proposal"
        stats={heroStats}
        ctaText="Partner With Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-students-collaborating.png"
      />

      {/* The Gap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Today's Graduates Need Both"
              description="Academic depth and applied, industry-current skills — together."
            />
          </FadeIn>
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-stretch max-w-6xl mx-auto">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Layers className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">Your Foundation</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Academic Depth</h3>
                <p className="text-sm text-muted-brand">
                  The strong fundamentals, theoretical grounding, and rigorous curriculum your university already provides.
                </p>
              </div>
            </FadeIn>
            <div className="hidden md:flex items-center justify-center">
              <Plus className="size-8 text-brand" />
            </div>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Sparkles className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">We Add</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Applied Layer</h3>
                <p className="text-sm text-muted-brand">
                  Hands-on tooling, current tech stacks, real industry projects, and verifiable certifications — layered on top of your curriculum.
                </p>
              </div>
            </FadeIn>
            <div className="hidden md:flex items-center justify-center">
              <Equal className="size-8 text-brand" />
            </div>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full border border-brand/30">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Trophy className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">The Result</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Career-Ready Graduates</h3>
                <p className="text-sm text-muted-brand">
                  With academic credentials, applied portfolios, and industry-recognised certifications — the full package employers are hiring for.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What Programs Deliver */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What Our Programs Deliver"
              description="Outcomes that translate to placement, performance, and pride. Every student exits with a verifiable certificate, a portfolio-grade industry project, and applied tooling experience."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-brand">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Program Objectives"
              description="What a partnership sets out to achieve for your students, faculty, and institution."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-brand">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Teaching Methodology"
              description="A three-layer model: Faculty trained → Students taught → Project delivered."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {methodology.map((layer) => (
              <StaggerItem key={layer.step}>
                <div className="glass-card dark:liquid-glass rounded-xl p-8 hover:shadow-brand-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-brand/30">{layer.step}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">{layer.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-brand">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Train-the-Trainer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Train-the-Trainer (T3)"
              description="Building sustainable faculty capability that lasts beyond the engagement."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <h3 className="text-lg font-semibold text-dark mb-6">The T3 Structure</h3>
                <div className="grid grid-cols-2 gap-4">
                  {t3Structure.map((item) => (
                    <div key={item.label} className="rounded-lg bg-brand/5 p-4">
                      <p className="text-xs uppercase tracking-wider text-muted-brand mb-1">{item.label}</p>
                      <p className="text-base font-semibold text-dark">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-brand/10 p-4 flex items-center gap-3">
                  <Award className="size-5 text-brand shrink-0" />
                  <p className="text-sm font-medium text-dark">Outcome: Faculty Assessment + Certification</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 h-full">
                <h3 className="text-lg font-semibold text-dark mb-6">How Faculty Get Certified</h3>
                <ol className="space-y-5">
                  {t3Steps.map((step) => (
                    <li key={step.num} className="flex items-start gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-dark">{step.title}</h4>
                        <p className="text-sm text-muted-brand">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Three-Stage Assessment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Three-Stage Assessment Framework"
              description="A student must clear all three components to be awarded the certificate."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {assessment.map((stage) => (
              <StaggerItem key={stage.step}>
                <div className="glass-card dark:liquid-glass rounded-xl p-8 hover:shadow-brand-md transition-all h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <span className="text-3xl font-bold text-brand/20">{stage.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{stage.title}</h3>
                  <p className="text-sm text-muted-brand mb-3">{stage.description}</p>
                  <p className="text-xs font-medium text-brand">{stage.meta}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeIn>
            <p className="text-center text-sm font-semibold text-brand mt-8">
              Pass all three → Certificate awarded
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Certification & Recognition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Certification & Recognition"
              description="Every student who clears all three assessment components receives a Certificate of Completion issued by Datagami in association with industry partners — with verifiable IDs and QR-based authentication."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Sample certificate */}
            <FadeIn>
              <figure className="glass-card dark:liquid-glass rounded-2xl p-3 hover:shadow-brand-md transition-all">
                <img
                  src="/images/short-term-courses/sample-certificate.jpg"
                  alt="Sample Datagami Certificate of Completion, co-branded with IBM Gold Partner, featuring a verifiable certificate number and QR code"
                  className="w-full rounded-xl"
                />
                <figcaption className="text-center text-xs text-muted-brand mt-3 mb-1">
                  Sample certificate — co-branded &amp; QR-verifiable
                </figcaption>
              </figure>
            </FadeIn>
            {/* Highlights */}
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-dark">What every certificate carries</h3>
              </div>
              <div className="space-y-3">
                {certificationPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-brand shrink-0" />
                    <span className="text-base font-medium text-dark">{point}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Course Catalogue */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Course Catalogue"
              description="A wide catalogue of programs across in-demand categories — pick what fits your departments. Detailed module-wise syllabus & tooling list shared on confirmation of selected courses."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogue.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                      {cat.icon}
                    </div>
                    <h3 className="text-base font-semibold text-dark">{cat.title}</h3>
                  </div>
                  <p className="text-sm text-muted-brand">{cat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Program in Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Program in Action"
              description="On-campus delivery at our partner universities — hands-on training, SME sessions, and bootcamps."
            />
          </FadeIn>
          <FadeIn>
            <div className="rounded-2xl overflow-hidden glass-card dark:liquid-glass p-2 max-w-5xl mx-auto">
              <img
                src="/images/short-term-courses/program-in-action.png"
                alt="Datagami short-term course delivery on campus — classroom training, lectures, and bootcamp sessions"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Faculty & Student Testimonials"
              description="Real voices from our partner universities — shared publicly on LinkedIn by faculty and students."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((person) => (
              <StaggerItem key={person.name}>
                <div className="glass-card dark:liquid-glass rounded-xl overflow-hidden hover:shadow-brand-md transition-all h-full">
                  <img
                    src={person.image}
                    alt={`LinkedIn testimonial from ${person.name}, ${person.role}`}
                    className="w-full object-contain bg-white"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-dark">{person.name}</h3>
                    <p className="text-sm text-brand font-medium mt-1">{person.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn>
        <StatsBar
          stats={[
            { value: "10+", label: "In-Demand Domains" },
            { value: "45 hrs", label: "Per Program" },
            { value: "24 hrs", label: "Faculty T3 Training" },
            { value: "3-Stage", label: "Assessment" },
          ]}
          variant="dark"
        />
      </FadeIn>

      {/* Engagement Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Engagement Process"
              description="From conversation to certification — a transparent, milestone-based partnership."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagement.map((step) => (
              <StaggerItem key={step.num}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-base font-bold">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-dark mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-brand">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Datagami */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why Datagami"
              description="NEP 2020 aligned — ready-to-deploy skill-based components that strengthen NEP compliance."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDatagami.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-brand">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Final CTA */}
      <FadeIn>
        <CTASection
          title="Let's Build Something Together"
          description="Pick 3 courses and we'll be on campus this semester. We'll share detailed syllabus, hours, lab requirements, and a proposed academic calendar."
          buttonText="Start the Conversation"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
