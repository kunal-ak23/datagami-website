import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AuroraBackground } from "@/components/sections/aurora-background"
import { SplineScene } from "@/components/sections/spline-scene"
import { InfinityScene } from "@/components/sections/infinity-scene"

interface HeroSplitProps {
  heading: string
  subtitle: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  showLogo?: boolean
  splineUrl?: string
  useInfinityScene?: boolean
  floatingCard?: {
    heading: string
    ctaText: string
    ctaHref: string
  }
}

export function HeroSplit({
  heading,
  subtitle,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  showLogo,
  splineUrl,
  useInfinityScene,
  floatingCard,
}: HeroSplitProps) {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left panel */}
        <AuroraBackground className="bg-brand flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-xl">
            {showLogo && (
              <img
                src="/images/logo/datagami-logo.webp"
                alt="Datagami logo"
                className="mb-8 h-10 w-auto brightness-0 opacity-80"
              />
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#1A1A1A] mb-6">
              {heading}
            </h1>
            <p className="text-[#333333] text-lg leading-relaxed mb-8">
              {subtitle}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#1A1A1A]/90 transition-colors"
            >
              {ctaText}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </AuroraBackground>

        {/* Right panel */}
        <div className="relative min-h-[300px] lg:min-h-0 bg-gray-100 dark:bg-gray-900">
          {useInfinityScene ? (
            <InfinityScene className="absolute inset-0 h-full w-full" />
          ) : splineUrl ? (
            <SplineScene
              sceneUrl={splineUrl}
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Floating card overlay */}
          {floatingCard && (
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-sm bg-white dark:bg-gray-950 rounded-xl shadow-lg p-6 z-10">
              <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white mb-4">
                {floatingCard.heading}
              </h3>
              <Link
                href={floatingCard.ctaHref}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer hover:bg-[#1A1A1A]/90 transition-colors"
              >
                {floatingCard.ctaText}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
