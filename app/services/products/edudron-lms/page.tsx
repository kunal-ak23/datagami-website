import type { Metadata } from "next"
import type { ReactNode } from "react"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import {
  Gamepad2, Wand2, Compass, Briefcase, BadgeCheck, Layers,
  Building2, GraduationCap, Users, Upload, ArrowLeftRight, ChevronRight,
  MonitorCheck, Camera, Bot, UserCheck, ListChecks,
  BarChart3, LineChart, FileSpreadsheet, ScrollText, Activity, Target,
  Server, PenSquare, LifeBuoy, User, ShieldCheck, KeyRound, Database, Lock,
  Smartphone, WifiOff, FolderKanban, CalendarDays, Sparkles, ShoppingCart,
  CheckCircle,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "EduDron LMS - Multi-Tenant Learning, Assessment & Placement Platform",
  description:
    "EduDron is a white-label LMS covering the entire learner journey: AI course authoring, proctored exams with instructor or AI evaluation, reports & analytics, verified credentials, business simulations, career mapping, and an integrated jobs portal.",
  alternates: {
    canonical: "https://datagami.in/services/products/edudron-lms",
  },
  openGraph: {
    title: "EduDron LMS - Multi-Tenant Learning, Assessment & Placement Platform",
    description:
      "One white-label platform for the entire learner journey — AI authoring, proctored exams, reports & analytics, verified credentials, simulations, career mapping, and an integrated jobs portal.",
    images: ["/images/edudron-lms/dashboard.png"],
  },
}

const heroStats = [
  { value: "1", label: "Platform replaces 3–5 tools" },
  { value: "7", label: "Tailored Login Types" },
  { value: "10×", label: "Faster Course Build" },
  { value: "100%", label: "Branded Per Tenant" },
]

// --- What makes EduDron different (6 showcase rows) ---
const differentiators = [
  {
    id: "simulations",
    icon: <Gamepad2 className="size-6 text-brand" />,
    title: "Integrated Business Simulations",
    lead: "Experiential learning that content-centric LMS platforms simply cannot deliver.",
    body: "Students play through multi-year business scenarios — making strategic decisions, facing consequences, interacting with AI-generated advisors, and competing on a live leaderboard.",
    points: [
      ["Multi-year scenarios", "Strategic, financial, and operational decisions unfold over time."],
      ["AI advisors", "Configurable advisor personalities and difficulty per cohort."],
      ["Live leaderboards", "Peer benchmarking with post-simulation debrief and reflection."],
    ],
    images: [
      { src: "/images/edudron-lms/job-simulation.png", alt: "EduDron business simulation interface with decision points and live simulation score" },
      { src: "/images/edudron-lms/leaderboard.png", alt: "EduDron simulation leaderboard showing year-by-year cohort rankings" },
    ],
  },
  {
    id: "ai-authoring",
    icon: <Wand2 className="size-6 text-brand" />,
    title: "AI-Assisted Authoring",
    lead: "From prompt to publishable course in hours — with humans in the loop.",
    body: "Course outlines, lecture drafts, exam questions, and concept images can all be generated from a prompt and then refined by your faculty, reducing course-build time from weeks to hours.",
    points: [
      ["Outline-to-lecture", "Prompt to a full tree of modules and lectures in minutes."],
      ["Exam question drafts", "Multi-type question generation with distractors and rubric hints."],
      ["Concept imagery", "Diagrams and illustrations with consistent institutional style."],
    ],
    images: [
      { src: "/images/edudron-lms/ai-course-generation.png", alt: "EduDron AI course generation form turning a prompt into a structured course" },
    ],
  },
  {
    id: "career-mapping",
    icon: <Compass className="size-6 text-brand" />,
    title: "Psychometric Career Mapping",
    lead: "Turn your LMS from a content platform into a career-outcomes engine.",
    body: "An adaptive RIASEC assessment profiles each student against six recognised career dimensions and recommends streams, courses, and — eventually — employers.",
    points: [
      ["RIASEC profile", "Adaptive assessment with no right-or-wrong framing."],
      ["Course recommendations", "The profile feeds learning pathways and catalogue suggestions."],
      ["Employer matching", "Profile tags pipe straight into jobs-portal matching."],
    ],
    images: [
      { src: "/images/edudron-lms/psychometric-test.png", alt: "EduDron RIASEC psychometric career assessment" },
    ],
  },
  {
    id: "jobs-portal",
    icon: <Briefcase className="size-6 text-brand" />,
    title: "Integrated Jobs Portal",
    lead: "Placement becomes a product, not a project.",
    body: "A dedicated portal connects verified employers to your students. The single sign-on that powers learning also powers placement — no third-party ATS required.",
    points: [
      ["Targeted postings", "Employers scope to one institution, a subset, or all partners."],
      ["Applicant pipeline", "Applied → Shortlisted → Offered with bulk operations and notes."],
      ["Verified profiles", "Transcripts, certificates and assessment scores — all validated."],
    ],
    images: [
      { src: "/images/edudron-lms/integrated-job-portal.png", alt: "EduDron integrated jobs portal listing roles for students" },
      { src: "/images/edudron-lms/integrated-job-portal-2.png", alt: "EduDron jobs portal applicant pipeline view" },
    ],
  },
  {
    id: "credentials",
    icon: <BadgeCheck className="size-6 text-brand" />,
    title: "Verified Digital Credentials",
    lead: "Branded certificates students earn — that employers confirm in seconds.",
    body: "Design institution-branded certificates with seal and signatures, issue them in one click on programme completion, and let anyone verify authenticity via QR or public URL — no login required.",
    points: [
      ["Branded designer", "Drag-and-drop layout with institutional seal and signatures."],
      ["QR + public URL", "Scan to verify from any device — cryptographic signature checked."],
      ["Revocation visible", "Revoked credentials surface on the same public verification page."],
    ],
    images: [
      { src: "/images/edudron-lms/verified-credentials.png", alt: "EduDron branded certificate designer" },
      { src: "/images/edudron-lms/verified-credentials-2.png", alt: "EduDron public credential verification page with QR check" },
    ],
  },
  {
    id: "multi-tenancy",
    icon: <Layers className="size-6 text-brand" />,
    title: "White-Label Multi-Tenancy",
    lead: "Every tenant gets its own brand. One platform, infinite identities.",
    body: "Every university, college, or corporate academy gets a fully branded experience over a single platform — and one Flutter app reveals the correct institution's brand after login.",
    points: [
      ["Brand fabric", "Colours, logo, fonts and custom domain per tenant."],
      ["Strict data boundary", "One tenant's data can never appear in another's dashboards."],
      ["Single mobile app", "One app, branded post-login — no per-institution app to ship."],
    ],
    images: [
      { src: "/images/edudron-lms/white-label-tenant-1.png", alt: "EduDron tenant branded as Medicaps University" },
      { src: "/images/edudron-lms/white-label-tenant-2.png", alt: "EduDron tenant with a different institution's branding" },
    ],
  },
]

// --- Capabilities index (anchor links to each section) ---
const capabilities = [
  { icon: <Wand2 className="size-5 text-brand" />, label: "AI Course Authoring", href: "#ai-authoring" },
  { icon: <Gamepad2 className="size-5 text-brand" />, label: "Business Simulations", href: "#simulations" },
  { icon: <Compass className="size-5 text-brand" />, label: "Career Mapping", href: "#career-mapping" },
  { icon: <Briefcase className="size-5 text-brand" />, label: "Jobs Portal", href: "#jobs-portal" },
  { icon: <BadgeCheck className="size-5 text-brand" />, label: "Verified Credentials", href: "#credentials" },
  { icon: <Layers className="size-5 text-brand" />, label: "Multi-Tenant Branding", href: "#multi-tenancy" },
  { icon: <Building2 className="size-5 text-brand" />, label: "Academic Structure", href: "#structure" },
  { icon: <MonitorCheck className="size-5 text-brand" />, label: "Proctored Exams", href: "#exams" },
  { icon: <BarChart3 className="size-5 text-brand" />, label: "Reports & Analytics", href: "#analytics" },
  { icon: <Users className="size-5 text-brand" />, label: "7 User Roles", href: "#roles" },
  { icon: <Smartphone className="size-5 text-brand" />, label: "Mobile & Offline", href: "#mobile" },
  { icon: <ShieldCheck className="size-5 text-brand" />, label: "Scale & Security", href: "#scale-security" },
  { icon: <Sparkles className="size-5 text-brand" />, label: "Premium Modules", href: "#premium" },
]

const branchingLevels = [
  { icon: <Building2 className="size-6 text-brand" />, label: "Institutes", description: "Colleges, departments and programs" },
  { icon: <GraduationCap className="size-6 text-brand" />, label: "Classes", description: "Bachelor cohorts, MBA streams" },
  { icon: <Users className="size-6 text-brand" />, label: "Sections", description: "Teachable-size groups" },
  { icon: <ListChecks className="size-6 text-brand" />, label: "Batches", description: "Cohorts with lifecycle automation" },
]

const branchingPoints = [
  { icon: <Upload className="size-5 text-brand" />, title: "Bulk import", description: "Onboard thousands of learners from a spreadsheet with validation and preview." },
  { icon: <ArrowLeftRight className="size-5 text-brand" />, title: "Cohort transfers", description: "Move an entire batch between classes with one reversible action." },
  { icon: <UserCheck className="size-5 text-brand" />, title: "Faculty coordinators", description: "Designate lead instructors without handing over admin privileges." },
]

const proctoringPoints = [
  ["Four proctoring modes", "Scales from soft to strict per exam — identity check, tab-switch detection, and webcam invigilation."],
  ["Live proctor console", "Webcam tiles, a flag stream, and a per-student incident timeline for invigilators."],
  ["Diverse question types", "MCQ, true/false, matching, short answer, and rubric-graded essays."],
]

const evaluationPoints = [
  { icon: <UserCheck className="size-6 text-brand" />, title: "Instructor-led", description: "Grade with rubrics and inline comments, then publish to students — the instructor always retains final authority." },
  { icon: <Bot className="size-6 text-brand" />, title: "AI-reviewed", description: "Rubric-aligned AI essay feedback drafts suggestions in seconds; the instructor reviews and confirms." },
  { icon: <CheckCircle className="size-6 text-brand" />, title: "Instant results", description: "Per-question review with model answers and rubric-level essay feedback for learners." },
]

const analytics = [
  { icon: <BarChart3 className="size-7 text-brand" />, title: "Cross-cutting dashboards", description: "Engagement, completion and outcome dashboards across programmes, cohorts and courses." },
  { icon: <LineChart className="size-7 text-brand" />, title: "Learner progress", description: "Real-time individual and cohort progress with early-warning flags for at-risk students." },
  { icon: <Activity className="size-7 text-brand" />, title: "Exam & results analytics", description: "Question discrimination, score distributions and pass rates per cohort." },
  { icon: <FileSpreadsheet className="size-7 text-brand" />, title: "One-click exports", description: "Results and rosters to Excel, scoped to each role's teaching load." },
  { icon: <ScrollText className="size-7 text-brand" />, title: "Tamper-evident audit", description: "Every sensitive action logged with actor, time and originating request." },
  { icon: <Target className="size-7 text-brand" />, title: "Placement analytics", description: "Applicant pipelines and placement outcomes from the integrated jobs portal." },
]

const roles = [
  { icon: <Server className="size-6 text-brand" />, name: "System Administrator", who: "EduDron platform operator", description: "Onboards and supports institutions, controls premium-module flags, and governs the platform across tenants." },
  { icon: <Building2 className="size-6 text-brand" />, name: "Tenant Administrator", who: "Registrar · Dean · L&D Head", description: "Runs the institution's entire academic operation — people, content, exams, certificates and analytics — from one console." },
  { icon: <PenSquare className="size-6 text-brand" />, name: "Content Manager", who: "Curriculum lead · SME", description: "Authors and publishes courses and assessments, accelerated by AI co-pilots with full human review." },
  { icon: <GraduationCap className="size-6 text-brand" />, name: "Instructor / Faculty", who: "Professor · Trainer", description: "Teaches and grades within assigned classes only — engagement monitoring, grading and proctoring, nothing extraneous." },
  { icon: <LifeBuoy className="size-6 text-brand" />, name: "Support Staff", who: "Academic operations team", description: "Helps learners with read-only visibility and an issue-triage queue — without the ability to edit grades or content." },
  { icon: <User className="size-6 text-brand" />, name: "Student / Learner", who: "University · Corporate learner", description: "Learns, is assessed, earns verifiable credentials, and finds work — on web and a branded offline-capable mobile app." },
  { icon: <Briefcase className="size-6 text-brand" />, name: "Employer", who: "Recruiter · Hiring manager", description: "Posts targeted opportunities and shortlists candidates from verified student profiles via the jobs portal." },
]

const mobilePoints = [
  { icon: <Smartphone className="size-6 text-brand" />, title: "Native mobile app", description: "One Flutter app, white-labelled per institution after login — no per-institution app to ship." },
  { icon: <WifiOff className="size-6 text-brand" />, title: "Offline study", description: "Download lectures, transcripts and materials; progress syncs automatically on reconnect." },
  { icon: <Briefcase className="size-6 text-brand" />, title: "Jobs in your pocket", description: "One-click apply to the jobs portal using the verified student profile." },
]

const scaleStats = [
  { value: "10,000s", label: "Learners per tenant" },
  { value: "1,000s", label: "Concurrent exam takers" },
  { value: "Auto", label: "Elastic scaling" },
  { value: "100%", label: "Tenant-isolated data" },
]

const security = [
  { icon: <ShieldCheck className="size-7 text-brand" />, title: "Strict tenant boundary", description: "Every record is tagged with an institution id; the platform refuses to return data without it." },
  { icon: <KeyRound className="size-7 text-brand" />, title: "Role-based access", description: "Six scoped roles — administrators cannot see data outside their own institution." },
  { icon: <Lock className="size-7 text-brand" />, title: "Modern authentication", description: "Short-lived tokens, silent refresh, and MFA for administrators." },
  { icon: <ScrollText className="size-7 text-brand" />, title: "Full audit trail", description: "Every sensitive action logged with actor, time and originating request." },
  { icon: <Database className="size-7 text-brand" />, title: "Encrypted & backed up", description: "HTTPS everywhere, secrets in Key Vault, media encrypted at rest, point-in-time recovery." },
  { icon: <Server className="size-7 text-brand" />, title: "Resilient by design", description: "Independent services and stateless servers — one failure doesn't take down exams." },
]

const premiumModules = [
  { icon: <BadgeCheck className="size-6 text-brand" />, name: "Verified Certificates", delivers: "Designer, issuance & public QR verification.", who: "Any institution issuing credentials at scale." },
  { icon: <Gamepad2 className="size-6 text-brand" />, name: "Business Simulations", delivers: "Experiential multi-phase scenarios with leaderboards.", who: "Business schools, corporate L&D, executive programmes." },
  { icon: <FolderKanban className="size-6 text-brand" />, name: "Capstone Projects", delivers: "Project assignments, submission and grading.", who: "Programmes with applied or thesis components." },
  { icon: <Compass className="size-6 text-brand" />, name: "Psychometric Test", delivers: "RIASEC-based career profiling.", who: "Undergraduate institutions, career-services teams." },
  { icon: <Briefcase className="size-6 text-brand" />, name: "Jobs Portal", delivers: "Employer access and application pipeline.", who: "Institutions measured on placement outcomes." },
  { icon: <CalendarDays className="size-6 text-brand" />, name: "Academic Calendar+", delivers: "Faculty-coordinator model, bulk import/export.", who: "Multi-campus institutions, large cohorts." },
  { icon: <Sparkles className="size-6 text-brand" />, name: "AI Content Generation", delivers: "Course, lecture, exam and image authoring assist.", who: "Institutions expanding catalogue rapidly." },
  { icon: <ShoppingCart className="size-6 text-brand" />, name: "Self-Enrolment Catalogue", delivers: "Open browse and enrol for learners.", who: "Open-admission, adult-learning markets." },
]

const edudronFaqs = [
  {
    question: "What is EduDron LMS?",
    answer: "EduDron is a multi-tenant, white-label learning platform that covers the entire learner journey from one product — AI-assisted course authoring, proctored exams with instructor or AI evaluation, reports & analytics, verified digital credentials, business simulations, psychometric career mapping, and an integrated jobs portal. It replaces three to five legacy tools with a single branded experience.",
  },
  {
    question: "What kind of exams and evaluation does it support?",
    answer: "EduDron runs proctored exams with four proctoring modes (soft to strict), including identity verification, tab-switch detection, and live webcam invigilation. Evaluation can be instructor-led with rubrics and inline comments, or AI-reviewed with rubric-aligned essay feedback — and the instructor always retains final authority.",
  },
  {
    question: "What reports and analytics are available?",
    answer: "Cross-cutting dashboards cover engagement, completion and outcomes across programmes and cohorts, alongside learner-progress tracking, exam and results analytics, one-click Excel exports, placement analytics from the jobs portal, and a tamper-evident audit trail.",
  },
  {
    question: "How does EduDron model an institution's structure?",
    answer: "Institutions branch from Institutes → Classes → Sections → Batches, mirroring how colleges, departments, programs and cohorts actually work. Thousands of learners can be bulk-imported from a spreadsheet, and an entire batch can be transferred between classes in one reversible action.",
  },
  {
    question: "Can EduDron scale across multiple campuses and stay secure?",
    answer: "Yes. The cloud-native platform handles tens of thousands of learners per tenant and thousands of concurrent exam takers, with strict tenant isolation, role-based access, MFA for administrators, full audit logging, and encryption in transit and at rest.",
  },
]

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EduDron LMS",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web, iOS, Android",
  "description":
    "Multi-tenant, white-label learning, assessment and placement platform with AI course authoring, proctored exams, instructor or AI evaluation, reports & analytics, verified credentials, business simulations, career mapping, and an integrated jobs portal.",
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0", "priceCurrency": "INR" },
  "provider": { "@type": "Organization", "name": "Datagami Technology Services" },
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden glass-card dark:liquid-glass shadow-brand-md">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-custom">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
  )
}

function PointRow({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-semibold text-dark">{title}</h4>
        <p className="text-sm text-muted-brand">{description}</p>
      </div>
    </div>
  )
}

export default function EduDronLmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Products", href: "/services#products" },
            { label: "EduDron LMS" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="EduDron"
        subtitle="EduDron is an AI-powered LMS that runs your entire learner journey from one intelligent platform — AI-built courses, proctored exams, verified certificates, business simulations, career mapping, and a built-in jobs portal."
        accentColor="text-brand"
        badgeText="AI-Powered LMS"
        stats={heroStats}
        ctaText="Request a Demo"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-edudron-lms.png"
        align="center"
        logoSrc="/images/edudron-lms/logo.png"
        logoAlt="EduDron logo"
      />

      {/* Executive summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="One platform, the entire learner journey"
              description="EduDron collapses the LMS stack. The same product that hosts your lectures also runs your proctored exams, issues tamper-proof certificates, delivers business simulations, profiles students for careers, and connects them to employers — all from a single branded experience."
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <Screenshot
                src="/images/edudron-lms/dashboard.png"
                alt="EduDron administrator dashboard showing courses, batches, classes, students and quick actions"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities at a glance (clickable index) */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Everything EduDron does"
              description="An AI-powered LMS, end to end. Tap any capability to jump straight to the details."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
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

      {/* What makes EduDron different */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What makes EduDron different"
              description="Six capabilities that set us apart from a traditional LMS — all live in production today."
            />
          </FadeIn>
          <div className="space-y-20">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title}>
                <div id={d.id} className="grid lg:grid-cols-2 gap-10 items-center scroll-mt-24">
                  {/* Text */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                        {d.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-dark">{d.title}</h3>
                    </div>
                    <p className="text-base font-medium text-brand mb-2">{d.lead}</p>
                    <p className="text-muted-brand mb-6">{d.body}</p>
                    <div className="space-y-4">
                      {d.points.map(([t, desc]) => (
                        <div key={t} className="flex items-start gap-3">
                          <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-dark">{t}</span>
                            <span className="text-muted-brand"> — {desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Images */}
                  <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {d.images.map((img) => (
                      <Screenshot key={img.src} src={img.src} alt={img.alt} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page demo CTA */}
      <FadeIn>
        <CTASection
          title="See it on your own content"
          description="We'll spin up a branded EduDron tenant and walk your team through the exact workflows your institution runs every day."
          buttonText="Request a Demo"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>

      {/* Academic branching */}
      <section id="structure" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Built for how institutions are organised"
              description="Model your real academic structure — branching from institutes down to individual batches."
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-2 mb-12">
              {branchingLevels.map((level, i) => (
                <div key={level.label} className="flex flex-col md:flex-row items-center gap-3 md:gap-2">
                  <div className="glass-card dark:liquid-glass rounded-xl p-6 text-center w-full md:w-48">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                      {level.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark">{level.label}</h3>
                    <p className="text-xs text-muted-brand mt-1">{level.description}</p>
                  </div>
                  {i < branchingLevels.length - 1 && (
                    <ChevronRight className="size-6 text-brand rotate-90 md:rotate-0 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {branchingPoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <PointRow icon={p.icon} title={p.title} description={p.description} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Exams & Evaluation */}
      <section id="exams" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Proctored exams, evaluated your way"
              description="Assessment that scales from low-stakes checks to high-stakes finals — graded by an instructor or reviewed by AI."
            />
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <MonitorCheck className="size-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Proctored exams</h3>
              </div>
              <div className="space-y-4">
                {proctoringPoints.map(([t, desc]) => (
                  <div key={t} className="flex items-start gap-3">
                    <Camera className="size-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dark">{t}</span>
                      <span className="text-muted-brand"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Screenshot
                src="/images/edudron-lms/exam-proctoring.png"
                alt="EduDron proctored exam console with live webcam tiles and an incident flag stream"
              />
            </FadeIn>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {evaluationPoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
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

      {/* Reports & Analytics */}
      <section id="analytics" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Reports & analytics that drive decisions"
              description="Every cohort, course and exam is measured — with dashboards, exports, and a tamper-evident audit trail."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analytics.map((a) => (
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

      {/* Who uses EduDron */}
      <section id="roles" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Who uses EduDron"
              description="Seven login types, each with a tailored experience — no one is ever shown a screen they don't need."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <StaggerItem key={role.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-dark">{role.name}</h3>
                      <p className="text-xs text-brand font-medium">{role.who}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-brand">{role.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Mobile & offline */}
      <section id="mobile" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <Screenshot
                src="/images/edudron-lms/mobile-app.png"
                alt="EduDron native mobile app home screen, white-labelled per institution"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="lg:pl-4">
                <SectionHeader
                  title="Mobile, offline, and a path to a job"
                  description="One native app, white-labelled per institution — learning that travels with the student."
                  align="left"
                />
                <div className="space-y-5">
                  {mobilePoints.map((p) => (
                    <PointRow key={p.title} icon={p.icon} title={p.title} description={p.description} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Platform at scale & security */}
      <section id="scale-security" className="pt-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Built to run at institution scale — securely"
              description="Cloud-native, elastically scaled, and isolated tenant-by-tenant with a modern security fabric."
            />
          </FadeIn>
        </div>
      </section>
      <FadeIn>
        <StatsBar stats={scaleStats} variant="dark" />
      </FadeIn>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {security.map((s) => (
              <StaggerItem key={s.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-brand">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Premium modules */}
      <section id="premium" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Premium modules"
              description="Core learning and assessment are always available; these opt-in modules are enabled per institution — bundled or sold separately."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumModules.map((m) => (
              <StaggerItem key={m.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    {m.icon}
                  </div>
                  <h3 className="text-base font-semibold text-dark mb-2">{m.name}</h3>
                  <p className="text-sm text-muted-brand mb-3">{m.delivers}</p>
                  <p className="text-xs text-brand/80 font-medium border-t border-border-custom pt-3">
                    {m.who}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={edudronFaqs} />
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <CTASection
          title="See EduDron LMS in action"
          description="Book a walkthrough and see how one platform can replace the three-to-five tools your institution runs today."
          buttonText="Request a Demo"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
