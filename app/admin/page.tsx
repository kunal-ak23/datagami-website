import {
  FileText,
  ImageIcon,
  MessageSquare,
  Users,
} from 'lucide-react'
import { prisma } from '@/lib/db'

export default async function AdminDashboardPage() {
  const [postCount, draftCount, publishedCount, galleryCount, testimonialCount, userCount] =
    await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'DRAFT' } }),
      prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
      prisma.galleryItem.count(),
      prisma.testimonial.count(),
      prisma.user.count(),
    ])

  const stats = [
    {
      label: 'Total Posts',
      value: postCount,
      subtitle: `${publishedCount} published, ${draftCount} drafts`,
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Gallery Items',
      value: galleryCount,
      subtitle: 'Photos & videos',
      icon: ImageIcon,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: 'Testimonials',
      value: testimonialCount,
      subtitle: 'Student reviews',
      icon: MessageSquare,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      label: 'Admin Users',
      value: userCount,
      subtitle: 'Active accounts',
      icon: Users,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your website content and activity.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, subtitle, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{label}</p>
                <p className="mt-2 text-3xl font-bold text-dark">{value}</p>
                <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
              </div>
              <div className={`rounded-lg ${bg} p-3`}>
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-dark mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/admin/blog"
            className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="rounded-lg bg-blue-50 p-2">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-dark">Manage Blog Posts</p>
              <p className="text-xs text-gray-400">Create, edit, or publish posts</p>
            </div>
          </a>
          <a
            href="/admin/gallery"
            className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="rounded-lg bg-purple-50 p-2">
              <ImageIcon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-dark">Manage Gallery</p>
              <p className="text-xs text-gray-400">Upload photos and videos</p>
            </div>
          </a>
          <a
            href="/admin/testimonials"
            className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="rounded-lg bg-green-50 p-2">
              <MessageSquare className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-dark">Manage Testimonials</p>
              <p className="text-xs text-gray-400">Add or edit student reviews</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
