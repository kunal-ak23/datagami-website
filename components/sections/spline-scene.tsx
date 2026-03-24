'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  /** The Spline scene URL (from Export > Public URL) */
  sceneUrl: string
  className?: string
}

export function SplineScene({ sceneUrl, className }: SplineSceneProps) {
  return (
    <div className={`relative ${className || ''}`}>
      {/* Loading skeleton */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-transparent">
            <div className="h-16 w-16 rounded-full border-4 border-brand/30 border-t-brand animate-spin" />
          </div>
        }
      >
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  )
}
