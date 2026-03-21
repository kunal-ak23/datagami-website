export function generateCourseSchema(course: {
  name: string
  description: string
  provider?: string
  duration?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider || 'Datagami Technology Services',
      url: 'https://datagami.in',
    },
    ...(course.duration && { timeRequired: course.duration }),
    url: `https://datagami.in${course.url}`,
  }
}
