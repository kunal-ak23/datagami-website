'use client'

import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber'
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Generate points along an infinity/lemniscate curve
function getInfinityPoints(count: number, scale: number = 2.8): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2
    const denom = 1 + Math.sin(t) * Math.sin(t)
    const x = (scale * Math.cos(t)) / denom
    const y = (scale * Math.sin(t) * Math.cos(t)) / denom
    const z = Math.sin(t * 3) * 0.3
    points.push(new THREE.Vector3(x, y, z))
  }
  return points
}

// Individual interactive cube
function InfinityCube({
  position,
  index,
  total,
  pointer,
}: {
  position: THREE.Vector3
  index: number
  total: number
  pointer: React.MutableRefObject<THREE.Vector3>
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const basePos = useMemo(() => position.clone(), [position])
  const phaseOffset = (index / total) * Math.PI * 2
  const hovered = useRef(false)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    // Base floating animation
    const floatX = Math.sin(time * 0.3 + phaseOffset) * 0.04
    const floatY = Math.cos(time * 0.25 + phaseOffset) * 0.04
    const floatZ = Math.sin(time * 0.2 + phaseOffset) * 0.06

    // Mouse repulsion in 3D space
    const px = pointer.current.x
    const py = pointer.current.y
    const dx = basePos.x + floatX - px
    const dy = basePos.y + floatY - py
    const dist = Math.sqrt(dx * dx + dy * dy)

    let pushX = 0, pushY = 0, pushZ = 0
    if (dist < 1.2) {
      const force = (1.2 - dist) * 0.4
      pushX = dx / dist * force
      pushY = dy / dist * force
      pushZ = force * 0.5
    }

    // Smooth lerp to target position
    const targetX = basePos.x + floatX + pushX
    const targetY = basePos.y + floatY + pushY
    const targetZ = basePos.z + floatZ + pushZ

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.08
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.08
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.08

    // Rotation
    meshRef.current.rotation.x = Math.sin(time * 0.3 + phaseOffset) * 0.4
    meshRef.current.rotation.y = time * 0.15 + phaseOffset
    meshRef.current.rotation.z = Math.cos(time * 0.2 + phaseOffset) * 0.2

    // Scale pulse on proximity
    const s = dist < 1.2 ? 1 + (1.2 - dist) * 0.15 : 1
    const targetScale = hovered.current ? 1.4 : s
    const currentScale = meshRef.current.scale.x
    meshRef.current.scale.setScalar(currentScale + (targetScale - currentScale) * 0.1)
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => { hovered.current = true; document.body.style.cursor = 'grab' }}
      onPointerOut={() => { hovered.current = false; document.body.style.cursor = 'default' }}
    >
      <boxGeometry args={[0.17, 0.17, 0.17]} />
      <meshPhysicalMaterial
        color="#F5B731"
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
        envMapIntensity={1.5}
        emissive="#D4991F"
        emissiveIntensity={0.15}
      />
    </mesh>
  )
}

// Tracks mouse position in 3D world space
function PointerTracker({ pointer }: { pointer: React.MutableRefObject<THREE.Vector3> }) {
  const { viewport } = useThree()
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const intersectPoint = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ camera, pointer: p }) => {
    raycaster.setFromCamera(new THREE.Vector2(p.x, p.y), camera)
    raycaster.ray.intersectPlane(plane, intersectPoint)
    if (intersectPoint) {
      pointer.current.x += (intersectPoint.x - pointer.current.x) * 0.15
      pointer.current.y += (intersectPoint.y - pointer.current.y) * 0.15
    }
  })

  return null
}

// Main infinity group
function InfinityGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const pointer = useRef(new THREE.Vector3(100, 100, 0)) // Start offscreen
  const cubeCount = 80

  const points = useMemo(() => getInfinityPoints(cubeCount, 2.8), [cubeCount])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.03
    }
  })

  return (
    <>
      <PointerTracker pointer={pointer} />
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.2}>
        <group ref={groupRef}>
          {points.map((point, i) => (
            <InfinityCube
              key={i}
              position={point}
              index={i}
              total={cubeCount}
              pointer={pointer}
            />
          ))}
        </group>
      </Float>
    </>
  )
}

export function InfinityScene({ className }: { className?: string }) {
  return (
    <div className={className || ''}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        eventSource={typeof document !== 'undefined' ? document.documentElement : undefined}
        eventPrefix="client"
      >
        {/* Rich lighting for reflective materials */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#FFF5E0" />
        <directionalLight position={[-5, -3, 3]} intensity={0.4} color="#F5B731" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#F5C84C" />
        <pointLight position={[3, 2, 2]} intensity={0.3} color="#FFFFFF" />

        {/* Environment map for realistic reflections */}
        <Environment preset="city" />

        <InfinityGroup />
      </Canvas>
    </div>
  )
}
