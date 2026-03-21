import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { CheckCircle2, Briefcase, Shield } from "lucide-react"

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
        accentColor="text-cloud"
        badgeText={track.duration}
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      {/* Placement Guarantee Badge */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 bg-cloud/10 border border-cloud/30 rounded-xl px-6 py-4">
            <Shield className="size-6 text-cloud" />
            <span className="text-lg font-semibold text-cloud">
              100% Placement Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Module Breakdown"
            description={`${track.modules} comprehensive modules covering the full cloud & networking stack.`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div
                key={mod.name}
                className="border border-border-custom rounded-xl p-6 hover:border-cloud/50 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cloud/10 text-cloud text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-dark mb-2">
                  {mod.name}
                </h3>
                <p className="text-sm text-muted-brand">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Gained */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Skills You Will Gain"
            description="Industry-recognized skills that employers actively seek."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {track.skills?.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 bg-cloud/10 text-cloud border border-cloud/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                <CheckCircle2 className="size-4" />
                {skill}
              </span>
            ))}
            {["Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "Networking", "IAM", "Serverless"].map(
              (skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 bg-cloud/10 text-cloud border border-cloud/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <CheckCircle2 className="size-4" />
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Career Outcomes"
            description="Roles you will be prepared for after completing this track."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {careerOutcomes.map((career) => (
              <div
                key={career.title}
                className="border-l-4 border-cloud pl-6 py-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="size-5 text-cloud" />
                  <h3 className="text-lg font-semibold text-dark">
                    {career.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-brand">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={techlearn.faqs} />

      {/* CTA */}
      <CTASection
        title="Start Your Cloud Computing Career"
        description="Enroll in the Cloud Computing with AI track and become a certified cloud professional."
        buttonText="Apply Now"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
