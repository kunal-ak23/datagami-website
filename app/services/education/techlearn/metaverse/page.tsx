import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { generateCourseSchema } from "@/lib/schemas/course"
import { CheckCircle2, Briefcase } from "lucide-react"

const track = techlearn.tracks.find((t) => t.accentColor === "metaverse")!

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
  { name: "3D Design & Modeling", description: "Master Blender and Maya for creating 3D assets, environments, and characters for immersive experiences." },
  { name: "Extended Reality (XR)", description: "Build AR, VR, and MR applications using Unity and Unreal Engine for interactive virtual worlds." },
  { name: "Animation", description: "Learn 2D and 3D animation principles, rigging, keyframing, and character animation workflows." },
  { name: "Motion Graphics", description: "Create dynamic motion graphics using After Effects, Cinema 4D, and procedural techniques." },
  { name: "Visual Effects (VFX)", description: "Compositing, particle systems, simulations, and post-production pipelines for film and interactive media." },
  { name: "UI/UX for Immersive Media", description: "Design spatial interfaces and user experiences for VR, AR, and metaverse platforms." },
]

const careerOutcomes = [
  { title: "XR Developer", description: "Build virtual and augmented reality experiences for entertainment, education, and enterprise." },
  { title: "3D Artist / Motion Designer", description: "Create high-quality 3D assets and motion graphics for studios and agencies." },
  { title: "Metaverse Experience Designer", description: "Design and prototype immersive environments for the next generation of digital interaction." },
]

export default function MetaversePage() {
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
            { label: "Metaverse" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading={track.name}
        subtitle={track.description}
        accentColor="text-metaverse"
        badgeText={track.duration}
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      {/* Module Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Module Breakdown"
            description={`${track.modules} modules spanning creative design and immersive technology.`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div
                key={mod.name}
                className="border border-border-custom rounded-xl p-6 hover:border-metaverse/50 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-metaverse/10 text-metaverse text-sm font-bold mb-3">
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
            description="Creative and technical skills for the immersive media industry."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {track.skills?.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 bg-metaverse/10 text-metaverse border border-metaverse/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                <CheckCircle2 className="size-4" />
                {skill}
              </span>
            ))}
            {["Blender", "Unity", "Unreal Engine", "After Effects", "Cinema 4D", "Spatial Design"].map(
              (skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 bg-metaverse/10 text-metaverse border border-metaverse/20 px-4 py-2 rounded-full text-sm font-medium"
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
                className="border-l-4 border-metaverse pl-6 py-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="size-5 text-metaverse" />
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
        title="Start Your Metaverse Career"
        description="Enroll in the Metaverse track and become a creator of immersive digital experiences."
        buttonText="Apply Now"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
