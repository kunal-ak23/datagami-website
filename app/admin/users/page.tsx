import { prisma } from '@/lib/db'
import { UsersClient } from './users-client'

export default async function UsersAdminPage() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  // Serialize dates for client component
  const serializedUsers = users.map((u) => ({
    ...u,
    createdAt: u.createdAt.toISOString(),
  }))

  return <UsersClient initialUsers={serializedUsers} />
}
