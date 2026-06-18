import type { Metadata } from "next"
import Link from "next/link"
import {
  Layers,
  Target,
  Scale,
  Clock,
  Users,
  BarChart3,
  GraduationCap,
  Code,
  Award,
  Beaker,
  Monitor,
  Server,
  Briefcase,
  UserCheck,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

import { HeroSplit } from "@/components/sections/hero-split"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ProgramCard } from "@/components/cards/program-card"
import { ProductCard } from "@/components/cards/product-card"
import { ServiceCard } from "@/components/cards/service-card"

import { programs } from "@/lib/data/programs"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"
import { company } from "@/lib/data/company"
import { websiteSchema } from "@/lib/schemas/website"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { LogoTicker } from "@/components/carousels/logo-ticker"
import { allPartners } from "@/lib/data/partners"
import { IndustriesGrid } from "@/components/sections/industries-grid"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Datagami - EdTech Solutions for Universities & Businesses",
  description:
    "Empowering 50+ universities and 10K+ students through industry-aligned education programs, enterprise products, and workforce solutions. Partner with Datagami.",
  alternates: {
    canonical: "https://datagami.in",
  },
  openGraph: {
    title: "Datagami - EdTech Solutions for Universities & Businesses",
    description:
      "Empowering 50+ universities and 10K+ students through industry-aligned education programs, enterprise products, and workforce solutions. Partner with Datagami.",
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

const homeFaqs = [
  {
    question: "What is Datagami?",
    answer: "Datagami Technology Services is a B2B education technology and consulting company that empowers universities, institutions, and businesses to bridge the gap between academia and industry through technology-driven solutions, industry-aligned programs, and workforce transformation services.",
  },
  {
    question: "What services does Datagami offer?",
    answer: "Datagami offers education programs (FinLEARN, TechLEARN, IBM ICE, Clinomic), enterprise products (EduDron LMS, Total ERP), and professional services (recruitment & staffing, student placement, and strategic consulting).",
  },
  {
    question: "How many universities does Datagami partner with?",
    answer: "Datagami partners with 50+ universities across India, impacting over 10,000 students through 200+ programs delivered in BFSI, technology, clinical research, and more.",
  },
  {
    question: "How can my institution partner with Datagami?",
    answer: "You can reach out through our contact page or email query@datagami.in. We offer a free initial consultation to understand your institution's challenges, followed by a customized proposal and dedicated implementation support.",
  },
]

export default function Home() {
  const { finlearn, techlearn, ibmIce, clinomic } = programs

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. Hero Split */}
      <HeroSplit
        heading="Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation"
        subtitle="Design next-gen programs for future-ready learners."
        ctaText="Explore Solutions"
        ctaHref="/services"
        imageSrc="/images/hero/hero-students-collaborating.png"
        imageAlt="University students collaborating with technology"
        showLogo
        floatingCard={{
          heading: "Partner in Shaping the Future of Education",
          ctaText: "Contact Us",
          ctaHref: "/contact",
        }}
      />

      {/* About Datagami */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image + Stats */}
            <FadeIn>
              <div>
                <img
                  src="/images/hero/hero-students-collaborating.png"
                  alt="Datagami team collaborating on education solutions"
                  className="rounded-xl w-full object-cover aspect-[4/3]"
                />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="glass-card dark:liquid-glass rounded-xl p-5 text-center">
                    <span className="text-2xl font-bold text-brand">50+</span>
                    <p className="text-sm text-muted-brand mt-1">Universities</p>
                  </div>
                  <div className="glass-card dark:liquid-glass rounded-xl p-5 text-center">
                    <span className="text-2xl font-bold text-brand">10K+</span>
                    <p className="text-sm text-muted-brand mt-1">Students Impacted</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Content */}
            <FadeIn>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-2">About Datagami</h2>
                <div className="w-16 h-1 bg-brand mb-6" />
                <p className="text-body leading-relaxed mb-4">
                  Datagami is a trusted education and enterprise solutions partner. We empower universities, institutions, businesses, and corporates to bridge the gap between academia and industry.
                </p>
                <p className="text-body leading-relaxed mb-4 font-medium">
                  We provide comprehensive education technology and consulting services:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    'LMS and ERP implementation',
                    'Industry-aligned training programs',
                    'Recruitment and placement assistance',
                    'Strategic consulting for measurable success',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-brand text-sm leading-relaxed mb-8">
                  With expertise across multiple sectors — BFSI, information technology, healthcare, agriculture, management, cybersecurity, cloud computing, manufacturing, and data analytics — we help organizations deliver future-ready, skill-based education that meets global standards and drives workforce transformation.
                </p>

                {/* Mission */}
                <div className="border-l-4 border-brand rounded-r-xl bg-brand/5 p-5 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-brand" />
                    <h3 className="text-lg font-bold text-dark">Our Mission</h3>
                  </div>
                  <p className="text-sm text-muted-brand leading-relaxed">
                    To transform education by creating meaningful connections between learning and real-world application, leveraging cutting-edge technology solutions that bridge the skills gap effectively, and ensuring every student graduates with the skills and confidence to thrive in tomorrow&apos;s economy.
                  </p>
                </div>

                {/* Core Values */}
                <div className="border-l-4 border-dark rounded-r-xl bg-gray-100 dark:bg-gray-800/30 p-5 mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-dark" />
                    <h3 className="text-lg font-bold text-dark">Our Core Values</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: 'Innovation', desc: 'Pioneering cutting-edge solutions' },
                      { title: 'Partnership', desc: 'Building lasting relationships' },
                      { title: 'Excellence', desc: 'Delivering measurable results' },
                      { title: 'Impact', desc: 'Creating meaningful change' },
                    ].map((v) => (
                      <div key={v.title} className="glass-card dark:liquid-glass rounded-lg p-3 text-center">
                        <p className="text-sm font-semibold text-dark">{v.title}</p>
                        <p className="text-xs text-muted-brand mt-0.5">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1A1A1A]/90 transition-colors"
                  >
                    Learn More About Us
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-border-custom text-dark px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Contact Datagami
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Solutions Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Solutions"
              description="Comprehensive business solutions designed to drive growth and enhance capabilities."
              gradient
            />
          </FadeIn>

          {/* Programs Offered */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">
                Programs Offered
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <ProgramCard
                  title={finlearn.name}
                  description={finlearn.tagline}
                  href={finlearn.href}
                  icon={<GraduationCap className="size-6" />}
                  backgroundImage="/images/cards/finlearn-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={techlearn.name}
                  description={techlearn.tagline}
                  href={techlearn.href}
                  icon={<Code className="size-6" />}
                  backgroundImage="/images/cards/techlearn-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={ibmIce.name}
                  description={ibmIce.tagline}
                  href={ibmIce.href}
                  icon={<Award className="size-6" />}
                  backgroundImage="/images/cards/ibm-ice-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={clinomic.name}
                  description={clinomic.tagline}
                  href={clinomic.href}
                  icon={<Beaker className="size-6" />}
                  backgroundImage="/images/cards/clinomic-card.png"
                />
              </StaggerItem>
            </StaggerChildren>
          </div>

          {/* Products */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">Products</h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <StaggerItem key={product.name}>
                  <ProductCard
                    title={product.name}
                    description={product.description}
                    features={[...product.features]}
                    href={product.href}
                    backgroundImage={product.cardImage}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Hiring & Other Services */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">
                Hiring &amp; Other Services
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <ServiceCard
                  title={services[0].name}
                  description={services[0].description}
                  href={services[0].href}
                  icon={<Briefcase className="size-6" />}
                />
              </StaggerItem>
              <StaggerItem>
                <ServiceCard
                  title={services[1].name}
                  description={services[1].description}
                  href={services[1].href}
                  icon={<UserCheck className="size-6" />}
                />
              </StaggerItem>
              <StaggerItem>
                <ServiceCard
                  title={services[2].name}
                  description={services[2].description}
                  href={services[2].href}
                  icon={<MessageSquare className="size-6" />}
                />
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <FadeIn>
        <CTASection
          title="Ready to Transform Your Business or Institution?"
          description="Discover how our solutions can help your organization achieve its goals."
          buttonText="Get Started"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>

      {/* 4. Why Choose Us */}
      <section className="py-16 md:py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Transforming Education and Enterprise With Proven Solutions" gradient />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid
              features={company.whyChooseUs.map((item, index) => ({
                icon: [
                  <Layers key="layers" className="size-6" />,
                  <Target key="target" className="size-6" />,
                  <Scale key="scale" className="size-6" />,
                  <Clock key="clock" className="size-6" />,
                  <Users key="users" className="size-6" />,
                  <BarChart3 key="barchart" className="size-6" />,
                ][index],
                title: item.title,
                description: item.description,
              }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* 4b. Industries We Serve */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industries We Serve"
              description="Powering digital transformation across sectors"
              gradient
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <IndustriesGrid />
          </FadeIn>
        </div>
      </section>

      {/* 5. Trust Metrics */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Trusted by Leading Universities & Institutions" />
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <StatsBar
            stats={[
              {
                value: company.stats.partnerUniversities,
                label: "Partner Universities",
              },
              {
                value: company.stats.studentsImpacted,
                label: "Students Impacted",
              },
              {
                value: company.stats.programsDelivered,
                label: "Programs Delivered",
              },
            ]}
          />
        </FadeIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <FadeIn delay={0.3}>
            <LogoTicker
              logos={allPartners.map((p) => ({ name: p.name, src: p.logo }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* 6. Digital Education Solutions */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                  Comprehensive Digital Education Solutions
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Strategic Policy Implementation",
                    "Industry Collaboration Programs",
                    "Digital Career Readiness Technology",
                    "Data Analytics & Reporting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-muted-brand">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1A1A1A]/90 transition-colors"
                >
                  View All Services
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div>
                <img
                  src="/images/hero/hero-edtech-dashboard.png"
                  alt="Comprehensive digital education solutions dashboard"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Success Stories */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Proven Success Stories" gradient />
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <StatsBar
            stats={[
              { value: "85%", label: "Increase in Graduate Employment" },
              { value: "200+", label: "Industry Partnerships" },
              { value: "50%", label: "Reduction in Policy Implementation Time" },
            ]}
          />
        </FadeIn>
      </section>

      {/* 8. Testimonials */}
      <TestimonialCarousel />

      {/* 9. FAQs */}
      <FadeIn>
        <FAQSection faqs={homeFaqs} />
      </FadeIn>

      {/* 10. Final CTA */}
      <FadeIn>
        <CTASection
          title="Let's Build the Future Together"
          buttonText="Start Your Journey"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
