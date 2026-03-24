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
              description={`${track.modules} modules spanning creative design and immersive technology.`}
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
              description="Creative and technical skills for the immersive media industry."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <SkillTicker skills={[...(track.skills || []), "Blender", "Unity", "Unreal Engine", "After Effects", "Cinema 4D", "Spatial Design"]} />
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
          title="Create the Future of XR"
          description="Enroll in the Metaverse track and become a creator of immersive digital experiences."
          buttonText="Join the Program"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
