import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { generateCourseSchema } from "@/lib/schemas/course"
import { Briefcase } from "lucide-react"
import { SkillTicker } from "@/components/sections/skill-ticker"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

const track = {
  name: 'Blockchain',
  duration: '6 months',
  modules: 5,
  href: '/services/education/techlearn/blockchain',
  accentColor: 'blockchain',
  skills: ['Solidity', 'Smart Contracts', 'DApps', 'Web3'],
  description:
    'Build decentralized applications and smart contracts on leading blockchain platforms.',
}

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
  { name: "Blockchain Fundamentals", description: "Distributed ledger technology, consensus mechanisms, cryptography, and blockchain architecture." },
  { name: "Solidity & Smart Contracts", description: "Write, test, and deploy smart contracts on Ethereum using Solidity, Hardhat, and Remix." },
  { name: "Decentralized Applications (DApps)", description: "Build full-stack DApps with Web3.js, Ethers.js, and frontend frameworks." },
  { name: "Web3 & DeFi Ecosystem", description: "Explore DeFi protocols, tokenomics, NFTs, DAOs, and the broader Web3 landscape." },
  { name: "Capstone Project", description: "Design and deploy a real-world blockchain solution from ideation to mainnet." },
]

const careerOutcomes = [
  { title: "Blockchain Developer", description: "Build smart contracts and decentralized applications for Web3 startups and enterprises." },
  { title: "Web3 Full-Stack Engineer", description: "Develop end-to-end decentralized solutions combining on-chain and off-chain components." },
  { title: "DeFi / Smart Contract Auditor", description: "Analyze and audit smart contracts for security vulnerabilities in the DeFi ecosystem." },
]

export default function BlockchainPage() {
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
            { label: "Blockchain" },
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

      {/* Module Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Module Breakdown"
              description={`${track.modules} focused modules from blockchain basics to production DApps.`}
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
              description="In-demand blockchain and Web3 development skills."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <SkillTicker skills={[...(track.skills || []), "Ethereum", "Hardhat", "Ethers.js", "IPFS", "Tokenomics", "NFTs"]} />
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
          title="Build on the Blockchain"
          description="Enroll in the Blockchain track and become a Web3 developer in 6 months."
          buttonText="Get Started"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
