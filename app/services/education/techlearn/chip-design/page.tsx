import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { Briefcase } from "lucide-react"
import { SkillTicker } from "@/components/sections/skill-ticker"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

const track = techlearn.tracks.find((t) => t.accentColor === "chipdesign")!

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
  { name: "Digital Electronics & C/C++ Programming", description: "Logic design fundamentals, combinational and sequential circuits, and C/C++ programming for embedded systems." },
  { name: "VLSI Design & Verification", description: "RTL design with Verilog/SystemVerilog, simulation, synthesis, and functional verification methodologies." },
  { name: "FPGA Design & Prototyping", description: "FPGA architecture, Xilinx/Intel tools, IP integration, and hardware prototyping workflows." },
  { name: "EDA Tools & Tape-Out Flow", description: "Industry-standard EDA tools (Cadence, Synopsys), physical design, timing closure, and the chip tape-out process." },
]

const careerOutcomes = [
  { title: "VLSI Design Engineer", description: "Design and verify digital circuits for semiconductor companies and fabless design houses." },
  { title: "FPGA Engineer", description: "Develop and optimize FPGA-based solutions for defense, telecom, and embedded systems." },
  { title: "Physical Design / DFT Engineer", description: "Handle chip layout, timing analysis, and design-for-test in the semiconductor tape-out flow." },
]

export default function ChipDesignPage() {
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
            { label: "Chip Design" },
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
              description={`${track.modules} intensive modules covering the complete semiconductor design pipeline.`}
            />
          </FadeIn>
          <StaggerChildren className="grid sm:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <StaggerItem key={mod.name}>
                <div
                  className="border border-border-custom border-l-4 border-l-brand rounded-xl p-6 hover:shadow-lg transition-all bg-white"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Skills You Will Gain"
              description="Core semiconductor and hardware design competencies."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <SkillTicker skills={[...(track.skills || []), "Verilog", "SystemVerilog", "Cadence", "Synopsys", "Timing Analysis", "RTL Design"]} />
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
                  className="border border-border-custom rounded-xl p-6 hover:shadow-lg transition-all bg-white"
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
          title="Design the Next Generation of Chips"
          description="Enroll in the Chip Design track and enter the booming semiconductor industry."
          buttonText="Apply Now"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
