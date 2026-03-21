import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import { EditBlogClient } from './edit-client'

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const post = await prisma.blogPost.findUnique({
    where: { id },
  })

  if (!post) {
    notFound()
  }

  const initialData = {
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt || '',
    category: post.category || '',
    featuredImage: post.featuredImage || '',
    status: post.status as 'DRAFT' | 'PUBLISHED',
    metaTitle: post.metaTitle || '',
    metaDescription: post.metaDescription || '',
    ogImage: post.ogImage || '',
    keywords: post.keywords,
    schemaType: post.schemaType || 'Article',
  }

  return <EditBlogClient id={id} initialData={initialData} />
}
