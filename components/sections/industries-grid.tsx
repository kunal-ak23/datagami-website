import {
  HeartPulse,
  Landmark,
  Monitor,
  GraduationCap,
  Factory,
  ShoppingCart,
  Building2,
  Radio,
} from 'lucide-react'

const industries = [
  {
    name: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    description: 'Clinical research, pharma, and medical education solutions',
  },
  {
    name: 'Banking & Financial Services',
    icon: Landmark,
    description: 'BFSI training, compliance, and workforce readiness programs',
  },
  {
    name: 'Information Technology',
    icon: Monitor,
    description: 'Cloud, AI, cybersecurity, and software development training',
  },
  {
    name: 'Education & EdTech',
    icon: GraduationCap,
    description: 'University partnerships, LMS, and digital learning solutions',
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Industrial skills training and workforce management',
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Customer service training and digital transformation',
  },
  {
    name: 'Government & Public Sector',
    icon: Building2,
    description: 'Policy implementation and public workforce development',
  },
  {
    name: 'Telecommunications',
    icon: Radio,
    description: 'Technical upskilling and network infrastructure training',
  },
]

export function IndustriesGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {industries.map((industry) => {
        const Icon = industry.icon
        return (
          <div
            key={industry.name}
            className="glass-card dark:liquid-glass rounded-xl p-4 sm:p-5 hover:-translate-y-1 hover:shadow-brand-md transition-all duration-300"
          >
            <div className="flex items-center justify-center bg-brand/10 text-brand rounded-lg w-10 h-10 mb-3">
              <Icon className="size-5" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-dark mb-1 leading-snug">{industry.name}</h3>
            <p className="text-xs text-muted-brand leading-relaxed">{industry.description}</p>
          </div>
        )
      })}
    </div>
  )
}
