'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  target: string // e.g., "50+", "10K+", "95%", "₹3.5L"
  className?: string
}

export function Counter({ target, className }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  // Extract numeric part and affixes
  const numericMatch = target.match(/[\d.]+/)
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0
  const startIndex = target.indexOf(numericMatch?.[0] || '')
  const prefix = target.substring(0, startIndex)
  const suffix = target.substring(startIndex + (numericMatch?.[0]?.length || 0))
  const isFloat = !Number.isInteger(numericValue)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 40
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      if (step >= steps) {
        setDisplayValue(isFloat ? numericValue.toFixed(1) : String(numericValue))
        clearInterval(timer)
      } else {
        setDisplayValue(isFloat ? current.toFixed(1) : String(Math.floor(current)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue, isFloat])

  return (
    <span ref={ref} className={className}>
      {prefix}{isInView ? displayValue : '0'}{suffix}
    </span>
  )
}
