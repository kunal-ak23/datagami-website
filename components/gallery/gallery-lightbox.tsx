'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'
import { StaggerChildren, StaggerItem } from '@/components/motion/stagger-children'

export interface GalleryMediaItem {
  id: string
  title: string
  category: string
  mediaType: 'IMAGE' | 'VIDEO'
  src: string
  thumbnail: string
  alt: string
  aspect: string
}

export function GalleryLightbox({ items }: { items: GalleryMediaItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isOpen = openIndex !== null
  const current = isOpen ? items[openIndex] : null
  const hasMultiple = items.length > 1

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  )
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  )

  // Keyboard controls + body scroll lock while the viewer is open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, next, prev])

  return (
    <>
      {/* Grid */}
      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <StaggerItem key={item.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open ${item.title}`}
              className="relative w-full rounded-xl overflow-hidden border border-border-custom group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <img
                src={item.thumbnail}
                alt={item.alt}
                width={600}
                height={400}
                loading="lazy"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: item.aspect }}
              />

              {/* Play button overlay for videos */}
              {item.mediaType === 'VIDEO' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-dark ml-0.5" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Category badge */}
              <span className="absolute top-3 left-3 inline-flex px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-dark shadow-sm">
                {item.category}
              </span>

              {/* Title */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Lightbox — rendered via a portal to document.body so it escapes the
          `<main>` stacking context and sits above the sticky navbar. Plain
          conditional render + CSS animation (no JS-animation dependency), so the
          overlay can never get stuck invisible-but-blocking. */}
      {mounted && isOpen && current &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          {hasMultiple && (
            <span className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-sm font-medium text-white/80">
              {openIndex! + 1} / {items.length}
            </span>
          )}

          {/* Prev */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Media */}
          <div
            key={current.id}
            className="relative max-w-6xl w-full flex flex-col items-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {current.mediaType === 'VIDEO' ? (
              <video
                src={current.src}
                poster={current.thumbnail || undefined}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-auto max-w-full rounded-lg bg-black"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              />
            )}
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{current.title}</p>
              <p className="text-white/60 text-sm">{current.category}</p>
            </div>
          </div>

          {/* Next */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
          </div>,
          document.body,
        )}
    </>
  )
}
