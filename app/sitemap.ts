import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'

const siteUrl = 'https://www.datagami.in'

const staticPaths = [
  '',
  '/about',
  '/blog',
  '/case-studies',
  '/case-studies/industry-partnership-network',
  '/case-studies/policy-implementation-acceleration',
  '/case-studies/state-university-digital-transformation',
  '/contact',
  '/gallery',
  '/services',
  '/services/education/clinomic',
  '/services/education/finlearn',
  '/services/education/finlearn/business-finance-journalism',
  '/services/education/finlearn/fintech-investment-banking',
  '/services/education/finlearn/wealth-management-investment-banking',
  '/services/education/ibm-ice',
  '/services/education/short-term-courses',
  '/services/education/techlearn',
  '/services/education/techlearn/ai-data-science',
  '/services/education/techlearn/ai-financial-engineering',
  '/services/education/techlearn/cloud-computing',
  '/services/education/techlearn/cloud-cybersecurity',
  '/services/hiring/consulting',
  '/services/hiring/student-placement',
  '/services/hiring/talent-acquisition',
  '/services/products/edudron-lms',
  '/services/products/total-erp',
  '/services/software/enterprise-solutions',
] as const

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
  }))

  try {
    const posts = await prisma.blogPost.findMany({
      where: { status: 'PUBLISHED' },
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    })

    return [
      ...staticEntries,
      ...posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
      })),
    ]
  } catch (error) {
    console.error('Unable to load blog posts for sitemap:', error)
    return staticEntries
  }
}
