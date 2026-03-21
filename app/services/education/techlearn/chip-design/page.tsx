import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { CheckCircle2, Briefcase } from "lucide-react"

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
        accentColor="text-chipdesign"
        badgeText={track.duration}
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      {/* Module Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Module Breakdown"
            description={`${track.modules} intensive modules covering the complete semiconductor design pipeline.`}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <div
                key={mod.name}
                className="border border-border-custom rounded-xl p-6 hover:border-chipdesign/50 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-chipdesign/10 text-chipdesign text-sm font-bold mb-3">
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
            description="Core semiconductor and hardware design competencies."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {track.skills?.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 bg-chipdesign/10 text-chipdesign border border-chipdesign/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                <CheckCircle2 className="size-4" />
                {skill}
              </span>
            ))}
            {["Verilog", "SystemVerilog", "Cadence", "Synopsys", "Timing Analysis", "RTL Design"].map(
              (skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 bg-chipdesign/10 text-chipdesign border border-chipdesign/20 px-4 py-2 rounded-full text-sm font-medium"
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
                className="border-l-4 border-chipdesign pl-6 py-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="size-5 text-chipdesign" />
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
        title="Start Your Chip Design Career"
        description="Enroll in the Chip Design track and enter the booming semiconductor industry."
        buttonText="Apply Now"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
