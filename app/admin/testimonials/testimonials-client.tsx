'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Star,
  Loader2,
  MessageSquare,
  Upload,
} from 'lucide-react'

interface Testimonial {
  id: string
  studentName: string
  program: string
  quote: string
  photoUrl: string | null
  videoUrl: string | null
  rating: number
  isFeatured: boolean
  createdAt: string
}

const PROGRAMS = ['FinLEARN', 'TechLEARN', 'IBM ICE', 'Clinomic', 'UPI Study']

interface FormData {
  studentName: string
  program: string
  quote: string
  rating: number
  photoUrl: string
  videoUrl: string
  isFeatured: boolean
}

const emptyForm: FormData = {
  studentName: '',
  program: PROGRAMS[0],
  quote: '',
  rating: 5,
  photoUrl: '',
  videoUrl: '',
  isFeatured: false,
}

export function TestimonialsClient({
  initialTestimonials,
}: {
  initialTestimonials: Testimonial[]
}) {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  function openCreate() {
    setEditingId(null)
    setForm(emptyForm)
    setPhotoFile(null)
    setVideoFile(null)
    setPhotoPreview(null)
    setShowForm(true)
  }

  function openEdit(t: Testimonial) {
    setEditingId(t.id)
    setForm({
      studentName: t.studentName,
      program: t.program,
      quote: t.quote,
      rating: t.rating,
      photoUrl: t.photoUrl || '',
      videoUrl: t.videoUrl || '',
      isFeatured: t.isFeatured,
    })
    setPhotoFile(null)
    setVideoFile(null)
    setPhotoPreview(t.photoUrl)
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
    setEditingId(null)
    setForm(emptyForm)
    setPhotoFile(null)
    setVideoFile(null)
    setPhotoPreview(null)
  }

  async function uploadFileToAzure(file: File): Promise<string> {
    const formData = new window.FormData()
    formData.append('file', file)
    formData.append('container', 'testimonials')
    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.error || 'Upload failed')
    }
    const { url } = await res.json()
    return url
  }

  function handlePhotoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    setPhotoFile(f)
    const reader = new FileReader()
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string)
    reader.readAsDataURL(f)
  }

  function handleVideoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (!f) return
    setVideoFile(f)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      let photoUrl = form.photoUrl
      let videoUrl = form.videoUrl

      setUploading(true)
      if (photoFile) {
        photoUrl = await uploadFileToAzure(photoFile)
      }
      if (videoFile) {
        videoUrl = await uploadFileToAzure(videoFile)
      }
      setUploading(false)

      const payload = { ...form, photoUrl, videoUrl }

      if (editingId) {
        const res = await fetch(`/api/testimonials/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Failed to update')
        }
      } else {
        const res = await fetch('/api/testimonials', {
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
      setUploading(false)
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete the testimonial from "${name}"?`)) return

    const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
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
          <h2 className="text-2xl font-bold text-dark">Testimonials</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage student testimonials and reviews.
          </p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          Add Testimonial
        </button>
      </div>

      {/* Testimonials List */}
      {initialTestimonials.length === 0 ? (
        <div className="rounded-xl bg-white shadow-sm border border-gray-100 p-12 text-center">
          <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-400">No testimonials yet. Add your first one!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {initialTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-white shadow-sm border border-gray-100 p-5 flex gap-4"
            >
              {t.photoUrl && (
                <img
                  src={t.photoUrl}
                  alt={t.studentName}
                  className="h-14 w-14 rounded-full object-cover shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-dark">{t.studentName}</p>
                      {t.isFeatured && (
                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{t.program}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`h-3.5 w-3.5 ${
                            s <= t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEdit(t)}
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(t.id, t.studentName)}
                      className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Dialog */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white">
              <h3 className="text-lg font-semibold text-dark">
                {editingId ? 'Edit Testimonial' : 'Add Testimonial'}
              </h3>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input
                  type="text"
                  value={form.studentName}
                  onChange={(e) => setForm((p) => ({ ...p, studentName: e.target.value }))}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                <select
                  value={form.program}
                  onChange={(e) => setForm((p) => ({ ...p, program: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  {PROGRAMS.map((prog) => (
                    <option key={prog} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quote</label>
                <textarea
                  value={form.quote}
                  onChange={(e) => setForm((p) => ({ ...p, quote: e.target.value }))}
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, rating: s }))}
                      className="p-1"
                    >
                      <Star
                        className={`h-6 w-6 transition-colors ${
                          s <= form.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300 hover:text-amber-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                {photoPreview && (
                  <div className="relative mb-2 inline-block">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="h-20 w-20 rounded-full object-cover border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoPreview(null)
                        setPhotoFile(null)
                        setForm((p) => ({ ...p, photoUrl: '' }))
                      }}
                      className="absolute -top-1 -right-1 p-0.5 rounded-full bg-red-500 text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoSelect}
                  className="block w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-brand file:px-4 file:py-2 file:text-sm file:font-semibold file:text-dark hover:file:bg-brand-dark"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video (optional)
                </label>
                {videoFile && (
                  <p className="text-xs text-gray-500 mb-1">{videoFile.name}</p>
                )}
                {form.videoUrl && !videoFile && (
                  <p className="text-xs text-green-600 mb-1">Video uploaded</p>
                )}
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  className="block w-full text-sm text-gray-500 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={form.isFeatured}
                  onChange={(e) => setForm((p) => ({ ...p, isFeatured: e.target.checked }))}
                  className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured testimonial
                </label>
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
                  {uploading ? 'Uploading...' : submitting ? 'Saving...' : editingId ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
