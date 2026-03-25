export const dynamic = "force-dynamic"
import { prisma } from '@/lib/db'
import { GalleryClient } from './gallery-client'

export default async function GalleryAdminPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: { sortOrder: 'asc' },
  })

  // Serialize dates for client component
  const serializedItems = items.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }))

  return <GalleryClient initialItems={serializedItems} />
}
