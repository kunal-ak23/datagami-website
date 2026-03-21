import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { AdminSidebar } from '@/components/admin/admin-sidebar'

export const metadata = {
  title: 'Admin Panel | Datagami',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // If not authenticated and not on the login page, redirect to login
  // Note: /admin/login has its own page and will render through this layout
  // but we only show the sidebar for authenticated users
  if (!session?.user) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      {/* Main content area */}
      <div className="ml-64">
        {/* Top header bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
          <h1 className="text-lg font-semibold text-dark">Admin Panel</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {session.user.name || session.user.email}
            </span>
            <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center text-sm font-bold text-dark">
              {(session.user.name?.[0] || session.user.email?.[0] || 'A').toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
