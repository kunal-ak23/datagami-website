'use client'

export function AuroraBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-brand/30 blur-[100px] animate-aurora-1" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-dark/20 blur-[120px] animate-aurora-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#F5C84C]/20 blur-[80px] animate-aurora-3" />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
