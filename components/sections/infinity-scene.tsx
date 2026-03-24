'use client'

import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Generate points along an infinity/lemniscate curve
function getInfinityPoints(count: number, scale: number = 3): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2
    // Lemniscate of Bernoulli (infinity shape)
    const denom = 1 + Math.sin(t) * Math.sin(t)
    const x = (scale * Math.cos(t)) / denom
    const y = (scale * Math.sin(t) * Math.cos(t)) / denom
    const z = (Math.sin(t * 3) * 0.3) // Slight depth variation
    points.push(new THREE.Vector3(x, y, z))
  }
  return points
}

// Individual animated cube
function InfinityCube({
  position,
  index,
  total,
  mousePos,
}: {
  position: THREE.Vector3
  index: number
  total: number
  mousePos: React.MutableRefObject<{ x: number; y: number }>
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const basePos = useMemo(() => position.clone(), [position])
  const speed = 0.3 + Math.random() * 0.2
  const phaseOffset = (index / total) * Math.PI * 2

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    // Gentle floating animation
    meshRef.current.position.x = basePos.x + Math.sin(time * speed + phaseOffset) * 0.05
    meshRef.current.position.y = basePos.y + Math.cos(time * speed * 0.7 + phaseOffset) * 0.05
    meshRef.current.position.z = basePos.z + Math.sin(time * speed * 0.5 + phaseOffset) * 0.08

    // Rotate gently
    meshRef.current.rotation.x = Math.sin(time * 0.3 + phaseOffset) * 0.3
    meshRef.current.rotation.y = time * 0.2 + phaseOffset

    // React to mouse proximity
    const mx = mousePos.current.x * 4
    const my = mousePos.current.y * 4
    const dx = meshRef.current.position.x - mx
    const dy = meshRef.current.position.y - my
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < 1.5) {
      const force = (1.5 - dist) * 0.15
      meshRef.current.position.x += dx * force
      meshRef.current.position.y += dy * force
      meshRef.current.position.z += force * 0.3
    }

    // Subtle scale pulse
    const s = 1 + Math.sin(time * 0.5 + phaseOffset) * 0.05
    meshRef.current.scale.setScalar(s)
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.18, 0.18, 0.18]} />
      <meshStandardMaterial
        color="#F5B731"
        emissive="#D4991F"
        emissiveIntensity={0.3}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  )
}

// Mouse tracker component
function MouseTracker({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const { viewport } = useThree()

  useFrame(({ pointer }) => {
    mousePos.current.x = (pointer.x * viewport.width) / 2
    mousePos.current.y = (pointer.y * viewport.height) / 2
  })

  return null
}

// Main infinity scene
function InfinityGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const cubeCount = 80

  const points = useMemo(() => getInfinityPoints(cubeCount, 2.8), [cubeCount])

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow rotation of the entire group
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <>
      <MouseTracker mousePos={mousePos} />
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <group ref={groupRef}>
          {points.map((point, i) => (
            <InfinityCube
              key={i}
              position={point}
              index={i}
              total={cubeCount}
              mousePos={mousePos}
            />
          ))}
        </group>
      </Float>
    </>
  )
}

export function InfinityScene({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`${className || ''}`}
      style={{ cursor: hovered ? 'grab' : 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#F5C84C" />
        <directionalLight position={[-5, -3, 3]} intensity={0.3} color="#F5B731" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#F5B731" />

        <InfinityGroup />
      </Canvas>
    </div>
  )
}
