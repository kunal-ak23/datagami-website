'use client'

import { useState } from 'react'

interface SplineSceneProps {
  /** The Spline viewer URL (my.spline.design/...) */
  sceneUrl: string
  className?: string
}

export function SplineScene({ sceneUrl, className }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className || ''}`}>
      {/* Loading spinner */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="h-16 w-16 rounded-full border-4 border-brand/30 border-t-brand animate-spin" />
        </div>
      )}
      {/* Spline iframe embed — most reliable method */}
      <iframe
        src={sceneUrl}
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
        allow="autoplay"
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
