import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { Briefcase, Shield } from "lucide-react"
import { SkillTicker } from "@/components/sections/skill-ticker"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

const track = techlearn.tracks.find((t) => t.accentColor === "cloud")!

export const metadata: Metadata = {
  title: `${track.name} - TechLEARN`,
  description: track.description,
}

const courseSchema = generateCourseSchema({
  name: track.name,
  description: track.description,
  duration: track.duration,
  url: track.href!,
})

const modules = [
  { name: "Computer Fundamentals & Networking Basics", description: "OS, networking concepts, TCP/IP, subnetting and lab setup." },
  { name: "CCNA Routing & Switching", description: "Cisco routing, switching, VLANs, STP, and network troubleshooting." },
  { name: "CCNA Security", description: "Firewall configuration, VPN, ACLs, and network security fundamentals." },
  { name: "MCSA Windows Server (Part 1)", description: "Active Directory, DNS, DHCP, and Windows Server deployment." },
  { name: "MCSA Windows Server (Part 2)", description: "Group Policy, Hyper-V, storage, and server management." },
  { name: "RedHat System Administration I", description: "Linux fundamentals, file systems, user management, and shell scripting." },
  { name: "AWS Cloud Practitioner", description: "AWS core services, billing, pricing, and cloud concepts." },
  { name: "AWS Solutions Architect", description: "Designing resilient, high-performing AWS architectures." },
  { name: "AWS DevOps", description: "CI/CD pipelines, infrastructure as code, and monitoring on AWS." },
  { name: "Microsoft Azure Fundamentals", description: "Azure services, pricing, SLA, and cloud deployment models." },
  { name: "Microsoft Azure Administrator", description: "Managing Azure subscriptions, storage, compute, and networking." },
  { name: "Google Cloud Fundamentals", description: "GCP core infrastructure, compute, storage, and networking basics." },
  { name: "AI & Machine Learning on Cloud", description: "Cloud-based ML services, model training, and deployment pipelines." },
  { name: "Capstone Project & Certification Prep", description: "End-to-end cloud project and exam preparation." },
]

const careerOutcomes = [
  { title: "Cloud Solutions Architect", description: "Design and deploy scalable cloud infrastructure for enterprises." },
  { title: "DevOps Engineer", description: "Automate CI/CD pipelines and manage cloud-native deployments." },
  { title: "Network & Security Engineer", description: "Build and secure enterprise networks with industry certifications." },
]

export default function CloudComputingPage() {
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
            { label: "TechLEARN", href: "/services/education/techlearn" },
            { label: "Cloud Computing" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading={track.name}
        subtitle={track.description}
        accentColor="text-brand"
        badgeText={track.duration}
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      {/* Placement Guarantee Badge */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 bg-brand/10 border border-brand/30 rounded-xl px-6 py-4">
              <Shield className="size-6 text-brand" />
              <span className="text-lg font-semibold text-brand">
                100% Placement Guarantee
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Module Breakdown"
              description={`${track.modules} comprehensive modules covering the full cloud & networking stack.`}
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <StaggerItem key={mod.name}>
                <div
                  className="border border-border-custom border-l-4 border-l-brand rounded-xl p-6 hover:shadow-lg transition-all bg-white dark:bg-gray-950"
                >
                  <div className="flex items-start gap-4">
                    <span className="bg-brand text-dark rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-dark mb-2">
                        {mod.name}
                      </h3>
                      <p className="text-sm text-muted-brand">{mod.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Skills Gained */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Skills You Will Gain"
              description="Industry-recognized skills that employers actively seek."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <SkillTicker skills={[...(track.skills || []), "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "Networking", "IAM", "Serverless"]} />
          </FadeIn>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Tools You'll Master"
              description="Gain hands-on experience with industry-standard tools used by leading organizations."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <SkillTicker skills={[
              "CPU-Z", "NPM", "Microsoft Outlook", "Microsoft Office 365",
              "Amazon Web Services (AWS)", "Jira", "ServiceNow",
              "Remote Desktop Protocol", "TeamViewer", "Zoho Desk",
              "PuTTY", "Wireshark", "Splunk", "Rescue by LogMeIn",
              "Rubrik", "Copilot", "ChatGPT"
            ]} />
          </FadeIn>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Career Outcomes"
              description="Roles you will be prepared for after completing this track."
            />
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {careerOutcomes.map((career) => (
              <StaggerItem key={career.title}>
                <div
                  className="border border-border-custom rounded-xl p-6 hover:shadow-lg transition-all bg-white dark:bg-gray-950"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-4">
                    <Briefcase className="size-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {career.title}
                  </h3>
                  <p className="text-sm text-muted-brand">{career.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQs */}
      <FadeIn>
        <FAQSection faqs={techlearn.faqs} />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Launch Your Cloud Career"
          description="Enroll in the Cloud Computing with AI track and become a certified cloud professional."
          buttonText="Apply Now"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
