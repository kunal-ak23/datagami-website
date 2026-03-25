export const dynamic = "force-dynamic"
import Link from 'next/link'
import { prisma } from '@/lib/db'
import { Plus } from 'lucide-react'
import { DeletePostButton } from './delete-button'

interface Post {
  id: string
  title: string
  slug: string
  status: string
  category: string | null
  createdAt: Date
  author: { name: string }
}

export default async function BlogAdminPage() {
  const posts: Post[] = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      author: { select: { name: true } },
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-dark">Blog Posts</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your blog posts and articles.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {posts.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-400">
                  No posts yet. Create your first post!
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-dark truncate max-w-xs">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">
                    /blog/{post.slug}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      post.status === 'PUBLISHED'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {post.status === 'PUBLISHED' ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {post.category || '-'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {post.author.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      Edit
                    </Link>
                    <DeletePostButton id={post.id} title={post.title} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
