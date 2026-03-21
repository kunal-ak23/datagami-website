import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  // Prevent deleting yourself
  if ((session.user as any).id === id) {
    return NextResponse.json({ error: 'You cannot delete your own account' }, { status: 400 })
  }

  const existing = await prisma.user.findUnique({ where: { id } })
  if (!existing) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Prevent deleting the last admin
  const adminCount = await prisma.user.count()
  if (adminCount <= 1) {
    return NextResponse.json({ error: 'Cannot delete the last admin user' }, { status: 400 })
  }

  await prisma.user.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
