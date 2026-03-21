import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroDark } from "@/components/sections/hero-dark"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { techlearn } from "@/lib/data/programs"
import { ArrowRight, Clock, Layers } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'TechLEARN - Technology Training Programs',
  description:
    'Master Cloud Computing, Metaverse, Blockchain, and Chip Design with TechLEARN. 6-12 month programs with industry certifications.',
}

const accentClasses: Record<string, { border: string; bg: string; text: string }> = {
  cloud: {
    border: "border-cloud",
    bg: "bg-cloud/10",
    text: "text-cloud",
  },
  metaverse: {
    border: "border-metaverse",
    bg: "bg-metaverse/10",
    text: "text-metaverse",
  },
  blockchain: {
    border: "border-blockchain",
    bg: "bg-blockchain/10",
    text: "text-blockchain",
  },
  chipdesign: {
    border: "border-chipdesign",
    bg: "bg-chipdesign/10",
    text: "text-chipdesign",
  },
}

export default function TechLEARNPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Education", href: "/services#education" },
            { label: "TechLEARN" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroDark
        heading="TechLEARN"
        subtitle="Technology Training Programs — Master the technologies shaping the future"
        accentColor="text-brand"
        badgeText="Technology Education"
        backgroundImage="/images/hero/hero-techlearn.png"
      />

      {/* Track Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Choose Your Track"
              description="Four specialized programs designed to launch your career in high-demand technology fields."
            />
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {techlearn.tracks.map((track) => {
              const accent = accentClasses[track.accentColor || "cloud"]
              return (
                <StaggerItem key={track.name}>
                  <Link
                    href={track.href || "#"}
                    className={`group block border-2 ${accent.border} rounded-2xl p-8 hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-wider ${accent.text} ${accent.bg} px-3 py-1 rounded-full`}
                      >
                        {track.name}
                      </span>
                      <ArrowRight
                        className={`size-5 ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      {track.name}
                    </h3>
                    <p className="text-muted-brand mb-6">{track.description}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-brand">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {track.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Layers className="size-4" />
                        {track.modules} Modules
                      </span>
                    </div>
                    {/* Skills preview */}
                    {track.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {track.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-xs px-2.5 py-1 rounded-full ${accent.bg} ${accent.text} font-medium`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Compare All Tracks"
              description="Find the program that best matches your career goals."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    {techlearn.tracks.map((track) => (
                      <th
                        key={track.name}
                        className="text-left px-6 py-4 font-semibold"
                      >
                        {track.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-custom">
                    <td className="px-6 py-4 font-medium text-dark">Duration</td>
                    {techlearn.tracks.map((track) => (
                      <td key={track.name} className="px-6 py-4 text-muted-brand">
                        {track.duration}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border-custom bg-gray-50">
                    <td className="px-6 py-4 font-medium text-dark">Modules</td>
                    {techlearn.tracks.map((track) => (
                      <td key={track.name} className="px-6 py-4 text-muted-brand">
                        {track.modules}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-dark">Key Skills</td>
                    {techlearn.tracks.map((track) => (
                      <td key={track.name} className="px-6 py-4 text-muted-brand">
                        {track.skills?.join(", ")}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Ready to Master Future Technologies?"
          description="Choose your track and start building the skills that industry demands."
          buttonText="Apply Now"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
