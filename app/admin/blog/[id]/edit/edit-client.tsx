'use client'

import { useRouter } from 'next/navigation'
import { BlogEditor, BlogPostData } from '@/components/admin/blog-editor'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface EditBlogClientProps {
  id: string
  initialData: BlogPostData
}

export function EditBlogClient({ id, initialData }: EditBlogClientProps) {
  const router = useRouter()

  async function handleSubmit(data: BlogPostData) {
    const res = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const body = await res.json()
      throw new Error(body.error || 'Failed to update post')
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
        <h2 className="text-2xl font-bold text-dark">Edit Post</h2>
      </div>

      <BlogEditor
        initialData={initialData}
        onSubmit={handleSubmit}
        submitLabel="Update"
      />
    </div>
  )
}
