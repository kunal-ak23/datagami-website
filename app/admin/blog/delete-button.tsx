'use client'

import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export function DeletePostButton({ id, title }: { id: string; title: string }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return

    const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      const data = await res.json()
      alert(data.error || 'Failed to delete post')
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
