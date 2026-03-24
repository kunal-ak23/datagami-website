import { cookies } from 'next/headers'
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
  // Try to get the session
  const session = await auth()

  // Fallback: check if session cookie exists (middleware already verified auth)
  if (!session?.user) {
    const cookieStore = await cookies()
    const hasToken =
      cookieStore.get('authjs.session-token')?.value ||
      cookieStore.get('__Secure-authjs.session-token')?.value

    if (!hasToken) {
      // Truly not authenticated — render children only (login page)
      return <>{children}</>
    }

    // Has cookie but auth() failed — show layout anyway since middleware verified
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar />
        <div className="ml-64">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
            <h1 className="text-lg font-semibold text-dark">Admin Panel</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Admin</span>
              <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center text-sm font-bold text-dark">
                A
              </div>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="ml-64">
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
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
