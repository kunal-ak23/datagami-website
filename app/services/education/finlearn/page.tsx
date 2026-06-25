import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { finlearn } from "@/lib/data/programs"
import { alumniCompanies } from "@/lib/data/partners"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  GraduationCap, Award, BookOpen, Clock,
  CheckCircle, Briefcase, TrendingUp, Lightbulb, Heart,
  Cpu, Coins, Newspaper, ArrowRight,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'FinLEARN by Datagami - BFSI & Finance Programs | 95% Placement Rate',
  description:
    'Industry-integrated finance programs — MBA in FinTech & Investment Banking, Wealth Management & Investment Banking, and Business & Finance Journalism — that embed into any UG or PG degree, plus short-term BFSI certifications. In association with AAFM. 500+ graduates, 95% placement rate.',
  alternates: {
    canonical: 'https://datagami.in/services/education/finlearn',
  },
  openGraph: {
    title: 'FinLEARN by Datagami - BFSI & Finance Programs | 95% Placement Rate',
    description:
      'Industry-integrated finance programs in FinTech & Investment Banking, Wealth Management, and Business & Finance Journalism — embed into any UG or PG degree, plus short-term BFSI certifications. In association with AAFM.',
    images: ['/images/hero/hero-finlearn.png'],
  },
}

const heroStats = [
  { value: finlearn.stats.placementRate, label: "Placement Rate" },
  { value: finlearn.stats.graduates, label: "Graduates" },
  { value: finlearn.stats.partners, label: "Partners" },
  { value: finlearn.stats.avgPackage, label: "Avg Package" },
]

const bottomStats = [
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Partner Companies" },
  { value: "₹25K", label: "Average Starting Salary" },
]

const whyChooseItems = [
  "Industry-Aligned Curriculum",
  "Practical Learning Focus",
  "Expert Mentorship",
  "100% Placement Assistance",
  "Professional Certification",
  "Paid Industry Apprenticeships",
  "Guided Learning Pathways",
  "FinTech & Global Exposure",
  "21st-Century Skill Development",
]

const programOutcomes = [
  {
    icon: <Briefcase className="size-8 text-brand" />,
    title: "Practical BFSI Skills",
    description: "Students gain hands-on exposure to real banking operations, financial processes, and industry workflows, enabling them to function confidently in BFSI roles from day one.",
    impact: "Builds strong workplace-ready skills that align directly with the expectations of leading financial institutions.",
  },
  {
    icon: <TrendingUp className="size-8 text-brand" />,
    title: "Finance & Data Competence",
    description: "Learners develop proficiency in financial tools, data interpretation, analytical techniques, and decision-making methods essential for modern financial environments.",
    impact: "Strengthens analytical capability and enhances students’ ability to contribute effectively in data-driven finance roles.",
  },
  {
    icon: <CheckCircle className="size-8 text-brand" />,
    title: "Strong Employability Pathways",
    description: "Students graduate with clear career progression routes in banking, financial services, fintech, and allied sectors through structured training and placement support.",
    impact: "Improves institutional placement performance and provides students with high-growth career opportunities.",
  },
  {
    icon: <Award className="size-8 text-brand" />,
    title: "Financial Operations Excellence",
    description: "Learners gain a practical understanding of banking, financial markets, insurance operations, and regulatory frameworks through experiential learning.",
    impact: "Ensures graduates can seamlessly transition into BFSI roles with real-world operational knowledge.",
  },
  {
    icon: <Heart className="size-8 text-brand" />,
    title: "Ethical Professionalism",
    description: "Students develop the ability to communicate effectively, collaborate in teams, and uphold integrity within professional financial environments.",
    impact: "Helps institutions produce well-rounded professionals who meet industry standards for conduct and communication.",
  },
  {
    icon: <Lightbulb className="size-8 text-brand" />,
    title: "Adaptability to Evolving Industry Trends",
    description: "Learners build the flexibility to continuously upskill and adapt to trends in fintech, digital banking, and global financial markets.",
    impact: "Prepares graduates to thrive in a rapidly evolving financial landscape and remain competitive throughout their careers.",
  },
]

const successStories = [
  {
    name: "Mrunali Patil",
    title: "Seamless Transition to Industry-Ready Skills",
    description: "We’re proud to share that Mrunali Patil, a FinLEARN by Datagami student, has been successfully placed with Axis Bank. Her achievement reflects the program’s focus on practical learning and career readiness.",
  },
  {
    name: "Janhavi Makwana",
    title: "Seamless Transition to Industry-Ready Skills",
    description: "We’re delighted to announce that Janhavi Makwana, a FinLEARN by Datagami student, has been placed with Axis Bank. Her success highlights our focus on applied learning and industry-linked outcomes.",
  },
  {
    name: "Rahul Gupta",
    title: "Seamless Transition to Industry-Ready Skills",
    description: "We’re proud to share that Rahul Gupta, a FinLEARN by Datagami student, has been placed with Muthoot Finance as a Junior Relationship Executive. His achievement reflects the program’s strong emphasis on practical training and industry readiness.",
  },
]

const certifications = [
  {
    name: "Certificate Program in Banking, Financial Services & Insurance (CP BFSI)",
    issuer: "by BFSI Sector Skill Council of India (in association with Datagami Technology Services Pvt. Ltd.)",
    description: "A foundational certification validating competency in the banking, financial services, and insurance domains. The program covers essential industry concepts, operations, regulatory frameworks, and applied financial skills.",
    image: "/images/certificates/cp-bfsi-ssc.png",
  },
  {
    name: "Certificate of Completion – CP BFSI",
    issuer: "by Datagami Technology Services Pvt. Ltd.",
    description: "A completion credential awarded for fulfilling all academic and practical requirements of the CP BFSI program. It demonstrates mastery of core BFSI principles, financial operations, and industry-ready professional competencies.",
    image: "/images/certificates/cp-bfsi-datagami.png",
  },
  {
    name: "Certificate for Profile Building Workshop",
    issuer: "by Datagami Technology Services Pvt. Ltd.",
    description: "Recognition for successfully completing a professional workshop focused on LinkedIn optimization, personal branding, and resume enhancement. Designed to improve employability and professional visibility.",
    image: "/images/certificates/profile-building.png",
  },
  {
    name: "Certificate in Investment Banking Operations Program (IBOP)",
    issuer: "by Datagami Technology Services Pvt. Ltd.",
    description: "A specialized certification validating advanced skills in investment banking operations, trade lifecycle management, reconciliations, and global financial processes.",
    image: "/images/certificates/ibop.png",
  },
]

const instructors = [
  {
    name: "Dr. Prof. Joseph Ponmany",
    title: "Dean of Financial Courses",
    specialization: "With over 31 years of Global & PAN India corporate experience, Prof. Joe is a master in Capital Markets, Investment Banking, Equity Research & PhD Scholar.",
    image: "/images/instructors/dr-joseph-ponmany.png",
  },
  {
    name: "Prof. Smita Agarwal",
    title: "Int. Corporate Trainer",
    specialization: "With over 15 years of global corporate experience, Prof. Smita Agarwal is a specialist in Investment Banking, Financial Consulting, Corporate Training, and Strategic Leadership Development.",
    image: "/images/instructors/smita-agarwal.jpg",
  },
  {
    name: "Alwyn Dsouza",
    title: "Learning & Development",
    specialization: "Learning & Development Leader with nearly two decades of experience in the life insurance industry, specializing in designing and executing high-impact training strategies across Bancassurance, Broking, Direct Sales, and Group Channels.",
    image: "/images/instructors/alwyn-dsouza.jpg",
  },
]

const integratedPrograms = [
  {
    icon: <Cpu className="size-7 text-brand" />,
    name: "MBA in FinTech & Investment Banking",
    accent: "FinTech + IB",
    href: "/services/education/finlearn/mba-fintech",
    description:
      "An industry-integrated MBA fusing finance, technology and analytics — across investment banking, FinTech, capital markets, wealth and digital finance.",
    focus: ["24 months · 60 credits · 900+ hours", "FinTech & digital finance", "Investment banking & capital markets", "Financial analytics & Python"],
  },
  {
    icon: <Coins className="size-7 text-brand" />,
    name: "Wealth Management & Investment Banking",
    accent: "Wealth + IB",
    href: "/services/education/finlearn/wealth-management-investment-banking",
    description:
      "A globally benchmarked, outcome-first program for advisory, portfolio management, capital markets and investment-banking roles.",
    focus: ["11 months · 630+ hours · 2 semesters", "Wealth advisory & private banking", "Portfolio & alternative investments", "Risk, governance & compliance"],
  },
  {
    icon: <Newspaper className="size-7 text-brand" />,
    name: "Business & Finance Journalism",
    accent: "Media + Finance",
    href: "/services/education/finlearn/business-finance-journalism",
    description:
      "A practice-led, newsroom-applied program building finance-literate, data-driven, digital-first business journalists. In association with AAFM India & Amar Ujala.",
    focus: ["11 months · 42 credits · 630 hours", "Finance-literate reporting", "Data & visual storytelling", "Multimedia & digital journalism"],
  },
]

const certTracks = finlearn.tracks.filter((t) => t.level === "Certificate")

const courseSchema = generateCourseSchema({
  name: "FinLEARN by Datagami - BFSI & Finance Program Excellence",
  description: finlearn.description,
  url: finlearn.href,
})

export default function FinLEARNPage() {
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
            { label: "FinLEARN" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="FinLEARN"
        subtitle="Bridge the gap between academic finance education and industry expectations by integrating our comprehensive Banking, Financial Services & Insurance (BFSI) program into your curriculum."
        accentColor="text-brand"
        badgeText="BFSI & Finance Program Excellence"
        stats={heroStats}
        ctaText="Contact Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-finlearn.png"
      />

      {/* 1 — Program Overview: what FinLEARN is */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Program Overview"
              description="Comprehensive BFSI education designed to transform students into industry-ready professionals"
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                Bridging Academic Excellence with Industry-Relevant Finance Education
              </h3>
              <div className="text-muted-brand leading-relaxed space-y-4">
                <p>
                  FinLEARN by Datagami is a comprehensive Banking, Financial Services & Insurance (BFSI) program designed to help universities close the gap between academic instruction and real-world financial industry expectations. Developed in collaboration with leading financial institutions, the curriculum is continuously updated to reflect evolving market needs, regulatory changes, and emerging sector trends.
                </p>
                <p>
                  Through hands-on apprenticeships, real-world projects, and expert mentorship from industry veterans, we prepare students for successful careers in the dynamic world of finance and banking. Our graduates don&apos;t just find jobs — they launch careers with confidence and competence.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-brand shrink-0" />
                  <span className="text-dark font-medium">Industry-Ready Financial Skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-brand shrink-0" />
                  <span className="text-dark font-medium">Practical Understanding of BFSI Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-brand shrink-0" />
                  <span className="text-dark font-medium">Enhanced Career Readiness</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-brand shrink-0" />
                  <span className="text-dark font-medium">Professional Mentorship & Guidance</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2 — Program Categories: what's on offer at a glance (lead-in to the detailed programs) */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="What We Offer"
              description="Two ways to learn with FinLEARN — full degree-integrated programs, or focused short-term certifications."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 hover:shadow-brand-md transition-all text-center">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">Degree-Integrated</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Integrated Degree Programs</h3>
                <p className="text-sm text-muted-brand">
                  Industry-integrated programs in FinTech & Investment Banking, Wealth Management, and Business & Finance Journalism that embed into any undergraduate or postgraduate degree. Built with hands-on labs, internships and capstones — in association with AAFM.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 hover:shadow-brand-md transition-all text-center">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">UG or PG</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Flexible Integration</h3>
                <p className="text-sm text-muted-brand">
                  Each integrated program can sit inside an undergraduate or postgraduate degree — such as BBA, B.Com, BMS, MBA or M.Com — or run standalone. Universities choose the level and we tailor the curriculum, labs and certifications to fit.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card dark:liquid-glass rounded-xl p-8 hover:shadow-brand-md transition-all text-center">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="size-7 text-brand" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">Skill-Focused Certifications</span>
                <h3 className="text-xl font-bold text-dark mt-2 mb-3">Short-Term Certification Programs</h3>
                <p className="text-sm text-muted-brand">
                  Targeted certification courses that upskill learners in banking operations, financial markets, risk management, and compliance — perfect for bridging skill gaps and enhancing professional readiness quickly.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* 3 — Programs Offered (the core): detailed integrated programs + short-term courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Programs Offered"
              description="Choose from our comprehensive range of finance and banking programs designed to meet diverse learning needs and career goals."
            />
          </FadeIn>

          {/* Integrated Degree Programs */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-2">Integrated Degree Programs</h3>
              <p className="text-muted-brand mb-8">Industry-integrated finance programs — each can be embedded into an undergraduate or postgraduate degree, or run standalone. Explore a program for its full curriculum, structure and career outcomes.</p>
            </FadeIn>
            <StaggerChildren className="grid md:grid-cols-3 gap-6">
              {integratedPrograms.map((p) => (
                <StaggerItem key={p.name}>
                  <Link
                    href={p.href}
                    className="group flex flex-col h-full glass-card dark:liquid-glass rounded-2xl p-7 border border-transparent hover:border-brand/30 hover:shadow-brand-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full">
                        {p.accent}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-dark mb-2">{p.name}</h4>
                    <p className="text-sm text-muted-brand mb-4">{p.description}</p>
                    <ul className="space-y-2 mb-5">
                      {p.focus.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className="size-4 text-brand shrink-0 mt-0.5" />
                          <span className="text-sm text-dark">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-brand font-medium text-sm group-hover:gap-2.5 transition-all">
                      Explore program <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* AAFM association — light credit */}
            <FadeIn>
              <div className="mt-8 glass-card dark:liquid-glass rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-3xl">
                <div className="bg-white rounded-xl p-2.5 shrink-0">
                  <img src="/images/finlearn/aafm.jpg" alt="American Academy of Financial Management (AAFM)" className="h-10 w-auto object-contain" />
                </div>
                <p className="text-sm text-muted-brand">
                  Integrated degree programs are offered <span className="font-medium text-dark">in association with AAFM</span> (American Academy of Financial Management), bringing globally benchmarked standards in financial education.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Short-Term Certification Programs */}
          {certTracks.length > 0 && (
            <div>
              <FadeIn>
                <h3 className="text-2xl font-bold text-dark mb-2">Short-Term Certification Programs</h3>
                <p className="text-muted-brand mb-8">Focused certification courses designed to upskill professionals and bridge specific skill gaps in the financial services industry.</p>
              </FadeIn>
              <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certTracks.map((track) => (
                  <StaggerItem key={track.name}>
                    <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="size-4 text-brand" />
                        <span className="text-sm font-semibold text-brand">{track.duration}</span>
                      </div>
                      <h4 className="text-base font-semibold text-dark mb-2">{track.name}</h4>
                      <p className="text-sm text-muted-brand mb-3">{track.description}</p>
                      {track.skills && (
                        <div className="flex flex-wrap gap-2">
                          {track.skills.map((skill) => (
                            <span key={skill} className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          )}
        </div>
      </section>

      {/* 4 — Mid CTA: convert interest right after the programs */}
      <FadeIn>
        <CTASection
          title="Ready to Start Your Finance Journey?"
          description="Choose the program that best fits your career goals and educational background. Our counselors are here to help you make the right choice."
          buttonText="Get Program Details"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>

      {/* 5 — Why Choose FinLEARN: the value proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Why Choose FinLEARN?"
              description="Industry-aligned education that prepares you for real-world finance careers."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whyChooseItems.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-dark">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 6 — Program Outcomes: what students gain */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Program Outcomes"
              description="Skills and competencies you'll gain through our comprehensive FinLEARN program."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programOutcomes.map((outcome) => (
              <StaggerItem key={outcome.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    {outcome.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{outcome.title}</h3>
                  <p className="text-sm text-muted-brand mb-3">{outcome.description}</p>
                  <p className="text-xs text-brand/80 italic">{outcome.impact}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 7 — Expert Instructors: credibility */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Meet Our Expert Instructors"
              description="Learn from industry professionals with years of experience in banking and financial services."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <StaggerItem key={instructor.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-brand/20"
                  />
                  <h3 className="text-base font-semibold text-dark">{instructor.name}</h3>
                  <p className="text-sm text-brand font-medium mt-1">{instructor.title}</p>
                  <p className="text-xs text-muted-brand mt-2">{instructor.specialization}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 8 — Industry-Recognized Certifications: credibility */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industry-Recognized Certifications"
              description="Earn valuable certifications that are recognized by leading employers in the financial services industry."
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="glass-card dark:liquid-glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-dark mb-1">{cert.name}</h3>
                    <p className="text-xs text-brand font-medium mb-3">{cert.issuer}</p>
                    <p className="text-sm text-muted-brand">{cert.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 9 — Success Stories: proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Success Stories"
              description="Hear from our graduates who have transformed their careers through FinLEARN."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <StaggerItem key={story.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-muted-brand">
                      {story.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-dark text-center">{story.name}</h3>
                  <p className="text-sm text-brand font-medium text-center mt-1 mb-3">{story.title}</p>
                  <p className="text-sm text-muted-brand">{story.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 10 — Where Our Alumni Work: proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Where Our Alumni Work"
              description="Our graduates have secured positions at leading companies across the financial services industry, demonstrating the real-world value of our training programs."
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {alumniCompanies.map((company) => (
              <StaggerItem key={company.name}>
                <div className="glass-card dark:liquid-glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-10 flex items-center justify-center">
                      <span className="text-sm text-muted-brand font-medium">{company.name}</span>
                    </div>
                  )}
                  <span className="text-xs text-muted-brand font-medium text-center">
                    {company.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 11 — Stats Bar: proof band closing out the page body */}
      <FadeIn>
        <StatsBar stats={bottomStats} variant="dark" />
      </FadeIn>

      {/* 12 — FAQs */}
      <FadeIn>
        <FAQSection faqs={finlearn.faqs} />
      </FadeIn>

      {/* 13 — Final CTA */}
      <FadeIn>
        <CTASection
          title="Ready to Launch Your Finance Career?"
          description="Join thousands of successful professionals who started their finance journey with FinLEARN. Your dream career in banking and financial services is just one step away."
          buttonText="Schedule Consultation"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
