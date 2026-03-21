'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Upload,
  Loader2,
  ImageIcon,
  Video,
} from 'lucide-react'

interface GalleryItem {
  id: string
  title: string
  description: string | null
  category: string
  mediaType: 'IMAGE' | 'VIDEO'
  mediaUrl: string
  thumbnailUrl: string | null
  altText: string | null
  sortOrder: number
  createdAt: string
}

const CATEGORIES = ['Events', 'Campus', 'Workshops']

interface FormData {
  title: string
  description: string
  category: string
  mediaUrl: string
  mediaType: 'IMAGE' | 'VIDEO'
  altText: string
  sortOrder: number
}

const emptyForm: FormData = {
  title: '',
  description: '',
  category: CATEGORIES[0],
  mediaUrl: '',
  mediaType: 'IMAGE',
  altText: '',
  sortOrder: 0,
}

export function GalleryClient({ initialItems }: { initialItems: GalleryItem[] }) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  function openCreate() {
    setEditingId(null)
    setForm(emptyForm)
    setFile(null)
    setPreview(null)
    setShowForm(true)
  }

  function openEdit(item: GalleryItem) {
    setEditingId(item.id)
    setForm({
      title: item.title,
      description: item.description || '',
      category: item.category,
      mediaUrl: item.mediaUrl,
      mediaType: item.mediaType,
      altText: item.altText || '',
      sortOrder: item.sortOrder,
    })
    setFile(null)
    setPreview(item.mediaUrl)
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
    setEditingId(null)
    setForm(emptyForm)
    setFile(null)
    setPreview(null)
  }

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    setFile(f)

    // Auto-detect media type
    if (f.type.startsWith('video/')) {
      setForm((prev) => ({ ...prev, mediaType: 'VIDEO' }))
    } else {
      setForm((prev) => ({ ...prev, mediaType: 'IMAGE' }))
    }

    if (f.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (ev) => setPreview(ev.target?.result as string)
      reader.readAsDataURL(f)
    } else {
      setPreview(null)
    }
  }

  async function uploadFile(): Promise<string> {
    if (!file) return form.mediaUrl

    setUploading(true)
    try {
      const formData = new window.FormData()
      formData.append('file', file)
      formData.append('container', 'gallery')

      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Upload failed')
      }
      const { url } = await res.json()
      return url
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      let mediaUrl = form.mediaUrl
      if (file) {
        mediaUrl = await uploadFile()
      }

      if (!mediaUrl) {
        alert('Please upload a file')
        setSubmitting(false)
        return
      }

      const payload = { ...form, mediaUrl }

      if (editingId) {
        const res = await fetch(`/api/gallery/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Failed to update')
        }
      } else {
        const res = await fetch('/api/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Failed to create')
        }
      }

      closeForm()
      router.refresh()
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return

    const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      const data = await res.json()
      alert(data.error || 'Failed to delete')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-dark">Gallery</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage photos and videos for the gallery.
          </p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </button>
      </div>

      {/* Gallery Grid */}
      {initialItems.length === 0 ? (
        <div className="rounded-xl bg-white shadow-sm border border-gray-100 p-12 text-center">
          <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-400">No gallery items yet. Add your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {initialItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden group"
            >
              <div className="relative aspect-video bg-gray-100">
                {item.mediaType === 'VIDEO' ? (
                  <div className="flex items-center justify-center h-full">
                    <Video className="h-10 w-10 text-gray-400" />
                  </div>
                ) : (
                  <img
                    src={item.mediaUrl}
                    alt={item.altText || item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEdit(item)}
                    className="p-1.5 rounded-lg bg-white/90 text-gray-700 hover:bg-white shadow-sm"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    className="p-1.5 rounded-lg bg-white/90 text-red-600 hover:bg-white shadow-sm"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <span className="absolute bottom-2 left-2 inline-flex items-center rounded-full bg-black/50 px-2 py-0.5 text-xs font-medium text-white">
                  {item.category}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-dark truncate">{item.title}</p>
                {item.description && (
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Dialog */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-dark">
                {editingId ? 'Edit Item' : 'Add Gallery Item'}
              </h3>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Media File
                </label>
                {preview ? (
                  <div className="relative mb-2">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null)
                        setFile(null)
                        setForm((prev) => ({ ...prev, mediaUrl: '' }))
                      }}
                      className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ) : null}
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="block w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-brand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-dark hover:file:bg-brand-dark"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  rows={2}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                  <input
                    type="number"
                    value={form.sortOrder}
                    onChange={(e) => setForm((p) => ({ ...p, sortOrder: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                <input
                  type="text"
                  value={form.altText}
                  onChange={(e) => setForm((p) => ({ ...p, altText: e.target.value }))}
                  placeholder="Describe the image for accessibility"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || uploading}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand text-sm font-semibold text-dark hover:bg-brand-dark transition-colors disabled:opacity-50"
                >
                  {(submitting || uploading) && <Loader2 className="h-4 w-4 animate-spin" />}
                  {uploading ? 'Uploading...' : submitting ? 'Saving...' : editingId ? 'Update' : 'Add Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
