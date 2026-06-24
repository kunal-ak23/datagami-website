import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import {
  Cloud, ShieldCheck, Brain, GraduationCap, CheckCircle, Layers,
  Boxes, Lock, Bug, Workflow, ScrollText, Server, Award, Headset,
} from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: "Cloud Computing & Cyber Security (AI-Integrated) | TechLEARN by Datagami",
  description:
    "An AI-integrated specialisation across Cloud Computing, Cyber Security and AI — multi-cloud, DevSecOps, ethical hacking, SOC, MLOps and AI-driven security. Embeds into any IT degree, with 15+ stacked certifications.",
  alternates: {
    canonical: "https://datagami.in/services/education/techlearn/cloud-cybersecurity",
  },
  openGraph: {
    title: "Cloud Computing & Cyber Security (AI-Integrated) | TechLEARN by Datagami",
    description:
      "Cloud + Cyber Security + AI woven across the program — multi-cloud, DevSecOps, ethical hacking, SOC and AI-driven security, with 15+ stacked certifications.",
    images: ["/images/hero/hero-techlearn.png"],
  },
}

const heroStats = [
  { value: "3", label: "Pillars (Cloud · Security · AI)" },
  { value: "15+", label: "Stacked Certifications" },
  { value: "15", label: "Target Job Roles" },
  { value: "1", label: "Mandatory Internship" },
]

const pillars = [
  {
    icon: <Cloud className="size-7 text-brand" />,
    title: "Cloud Computing",
    description: "Multi-cloud across AWS, Azure and GCP — IaC, containers, Kubernetes, observability and well-architected design.",
  },
  {
    icon: <ShieldCheck className="size-7 text-brand" />,
    title: "Cyber Security",
    description: "Network and cloud security, ethical hacking, SOC operations, incident response, forensics and GRC.",
  },
  {
    icon: <Brain className="size-7 text-brand" />,
    title: "Artificial Intelligence",
    description: "ML/DL and GenAI embedded into cloud operations (MLOps/AIOps) and security (AI-driven threat detection, GenAI security).",
  },
]

const journey = [
  { num: "01", title: "Foundations", description: "Computing fundamentals, Linux, networking and programming — the base every later module builds on." },
  { num: "02", title: "Core Cloud", description: "AWS, Azure & GCP, Infrastructure-as-Code, Docker, Kubernetes and cloud monitoring." },
  { num: "03", title: "Core Security", description: "Network & application security, ethical hacking, SOC/SIEM, incident response and GRC basics." },
  { num: "04", title: "AI Integration", description: "ML/DL, MLOps pipelines, AI-driven threat detection and GenAI security — AI woven into cloud & security, not siloed." },
  { num: "05", title: "Specialisation & Capstone", description: "Cloud security, DevSecOps and an elective track, plus an internship and a portfolio-grade capstone." },
]

const certPathway = [
  { year: "Year 1", items: "Foundations — coding, Linux & networking basics" },
  { year: "Year 2", items: "AWS Cloud Practitioner · Azure AZ-900 · CompTIA Security+ · Network+" },
  { year: "Year 3", items: "AWS Solutions Architect · AZ-104 · CKA · Terraform Associate · CEH · Azure AI" },
  { year: "Year 4", items: "AWS Security Specialty / CCSP · SC-200 · OSCP (optional) · AWS ML / GenAI · ISO 27001 / CISA" },
]

const careers = [
  { role: "L0 / L1 Cloud Support Engineer", icon: <Headset className="size-6 text-brand" /> },
  { role: "Associate Cloud Engineer", icon: <Cloud className="size-6 text-brand" /> },
  { role: "SOC Analyst (L1 / Tier 1)", icon: <Lock className="size-6 text-brand" /> },
  { role: "NOC Engineer (L1)", icon: <Server className="size-6 text-brand" /> },
  { role: "Junior DevOps / DevSecOps Engineer", icon: <Workflow className="size-6 text-brand" /> },
  { role: "Cloud / Network Security Engineer", icon: <ShieldCheck className="size-6 text-brand" /> },
  { role: "Penetration Tester / VAPT Analyst (Junior)", icon: <Bug className="size-6 text-brand" /> },
  { role: "GRC / Compliance Analyst", icon: <ScrollText className="size-6 text-brand" /> },
]

const courseSchema = generateCourseSchema({
  name: "Cloud Computing & Cyber Security (AI-Integrated) — TechLEARN by Datagami",
  description:
    "An AI-integrated specialisation across Cloud Computing, Cyber Security and AI, embeddable into any IT degree, with stacked industry certifications and a capstone.",
  url: "/services/education/techlearn/cloud-cybersecurity",
})

export default function CloudCyberSecurityPage() {
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
            { label: "Cloud Computing & Cyber Security" },
          ]}
        />
      </div>

      <HeroDark
        heading="Cloud Computing & Cyber Security"
        subtitle="An AI-integrated specialisation built on three pillars — Cloud, Cyber Security and AI — woven together across the program. Engineered around outcome-based education and a learn-by-building model."
        accentColor="text-brand"
        badgeText="Integrated Specialisation · AI-Integrated"
        stats={heroStats}
        ctaText="Talk to Us"
        ctaHref="/contact"
        backgroundImage="/images/hero/hero-techlearn.png"
      />

      {/* Integrate into any degree band */}
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

      {/* Three pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Three pillars, one integrated program" description="AI is not a separate silo — it is embedded into both cloud operations and security." />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 hover:shadow-brand-md transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4">{p.icon}</div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-brand">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Curriculum journey */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="The learning journey" description="Each stage layers in-demand, job-aligned skills — foundations through capstone." />
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

      {/* Certifications pathway */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Stacked certification pathway" description="Industry certifications mapped year-on-year — graduates leave with a degree and a verifiable credential portfolio." />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certPathway.map((c) => (
              <StaggerItem key={c.year}>
                <div className="glass-card dark:liquid-glass rounded-xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="size-5 text-brand" />
                    <span className="text-sm font-bold text-brand">{c.year}</span>
                  </div>
                  <p className="text-sm text-muted-brand">{c.items}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Career outcomes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Fresher career outcomes" description="Entry-level roles a graduate can target straight out of the program — from L0/L1 support to cloud, security and DevOps engineering. Stacked certifications open the higher-value roles faster." />
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
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-muted-brand">
              <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-brand" /> 1 mandatory internship</span>
              <span className="flex items-center gap-1.5"><Boxes className="size-4 text-brand" /> Portfolio-grade capstone</span>
              <span className="flex items-center gap-1.5"><Server className="size-4 text-brand" /> Cloud sandboxes & cyber ranges</span>
              <span className="flex items-center gap-1.5"><Layers className="size-4 text-brand" /> Placement-readiness module</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <CTASection
          title="Add this specialisation to your program"
          description="We'll tailor the cloud, security and AI curriculum, labs and certification roadmap to integrate with your degree structure."
          buttonText="Talk to Us"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>
    </>
  )
}
