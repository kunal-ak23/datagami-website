'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./office-map-inner'), {
  ssr: false,
  loading: () => (
    <div className="h-80 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
  ),
})

export function OfficeMap() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-80 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
  }

  return <MapWithNoSSR />
}
