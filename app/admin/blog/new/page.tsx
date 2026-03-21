'use client'

import { useRouter } from 'next/navigation'
import { BlogEditor, BlogPostData } from '@/components/admin/blog-editor'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewBlogPostPage() {
  const router = useRouter()

  async function handleSubmit(data: BlogPostData) {
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const body = await res.json()
      throw new Error(body.error || 'Failed to create post')
    }

    router.push('/admin/blog')
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-dark transition-colors mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to posts
        </Link>
        <h2 className="text-2xl font-bold text-dark">Create New Post</h2>
      </div>

      <BlogEditor onSubmit={handleSubmit} submitLabel="Publish" />
    </div>
  )
}
