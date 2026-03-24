'use client'

import { useRef, useMemo, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

// Lemniscate of Bernoulli (infinity curve)
function getInfinityPoints(count: number, scale: number = 2.8): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2
    const denom = 1 + Math.sin(t) * Math.sin(t)
    const x = (scale * Math.cos(t)) / denom
    const y = (scale * Math.sin(t) * Math.cos(t)) / denom
    const z = Math.sin(t * 3) * 0.25
    points.push(new THREE.Vector3(x, y, z))
  }
  return points
}

// Single interactive cube with golden glass material
function GoldenCube({
  basePosition,
  index,
  total,
  mouseWorld,
  isDragging,
  dragIndex,
  onDragStart,
}: {
  basePosition: THREE.Vector3
  index: number
  total: number
  mouseWorld: React.MutableRefObject<THREE.Vector3>
  isDragging: React.MutableRefObject<boolean>
  dragIndex: React.MutableRefObject<number>
  onDragStart: (index: number) => void
}) {
  const ref = useRef<any>(null)
  const phase = (index / total) * Math.PI * 2
  const vel = useRef(new THREE.Vector3())

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    const mesh = ref.current

    // If this cube is being dragged, follow mouse
    if (isDragging.current && dragIndex.current === index) {
      mesh.position.lerp(
        new THREE.Vector3(mouseWorld.current.x, mouseWorld.current.y, 0.5),
        0.2
      )
      mesh.rotation.x += 0.05
      mesh.rotation.y += 0.05
      mesh.scale.setScalar(1.5)
      return
    }

    // Target = base position + gentle float
    const tx = basePosition.x + Math.sin(t * 0.4 + phase) * 0.04
    const ty = basePosition.y + Math.cos(t * 0.35 + phase) * 0.04
    const tz = basePosition.z + Math.sin(t * 0.25 + phase) * 0.06

    // Mouse repulsion
    const mx = mouseWorld.current.x
    const my = mouseWorld.current.y
    const dx = tx - mx
    const dy = ty - my
    const dist = Math.sqrt(dx * dx + dy * dy)

    let rx = 0, ry = 0, rz = 0
    if (dist < 1.5 && dist > 0.01) {
      const strength = Math.pow(1 - dist / 1.5, 2) * 0.6
      rx = (dx / dist) * strength
      ry = (dy / dist) * strength
      rz = strength * 0.4
    }

    // Spring physics
    const targetX = tx + rx
    const targetY = ty + ry
    const targetZ = tz + rz

    vel.current.x += (targetX - mesh.position.x) * 0.06
    vel.current.y += (targetY - mesh.position.y) * 0.06
    vel.current.z += (targetZ - mesh.position.z) * 0.06
    vel.current.multiplyScalar(0.85) // damping

    mesh.position.add(vel.current)

    // Rotation
    mesh.rotation.x = Math.sin(t * 0.3 + phase) * 0.3
    mesh.rotation.y = t * 0.15 + phase
    mesh.rotation.z = Math.cos(t * 0.2 + phase) * 0.15

    // Scale based on proximity
    const targetScale = dist < 1.5 ? 1 + (1.5 - dist) * 0.12 : 1
    mesh.scale.setScalar(mesh.scale.x + (targetScale - mesh.scale.x) * 0.1)
  })

  return (
    <RoundedBox
      ref={ref}
      args={[0.45, 0.45, 0.45]}
      radius={0.06}
      smoothness={4}
      position={basePosition}
      onPointerDown={(e) => {
        e.stopPropagation()
        onDragStart(index)
      }}
      onPointerOver={() => { document.body.style.cursor = 'grab' }}
      onPointerOut={() => { if (!isDragging.current) document.body.style.cursor = 'default' }}
    >
      <meshPhysicalMaterial
        color="#F5B731"
        metalness={0.2}
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.02}
        reflectivity={1}
        envMapIntensity={3}
        emissive="#F5B731"
        emissiveIntensity={0.15}
        ior={1.5}
        thickness={2}
        transmission={0.6}
        transparent
        opacity={0.9}
        sheen={1}
        sheenColor={new THREE.Color('#FFD700')}
        sheenRoughness={0.1}
        iridescence={0.5}
        iridescenceIOR={1.3}
        specularIntensity={2}
        specularColor={new THREE.Color('#FFFFFF')}
        attenuationColor={new THREE.Color('#F5B731')}
        attenuationDistance={0.5}
      />
    </RoundedBox>
  )
}

// Mouse position tracker using raycasting onto a plane
function MousePlane({
  mouseWorld,
  isDragging,
  dragIndex,
}: {
  mouseWorld: React.MutableRefObject<THREE.Vector3>
  isDragging: React.MutableRefObject<boolean>
  dragIndex: React.MutableRefObject<number>
}) {
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
  const intersect = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ raycaster, camera, pointer }) => {
    raycaster.setFromCamera(pointer, camera)
    raycaster.ray.intersectPlane(plane, intersect)
    if (intersect) {
      mouseWorld.current.lerp(intersect, 0.15)
    }
  })

  // Invisible plane for drag detection
  return (
    <mesh
      visible={false}
      onPointerUp={() => {
        isDragging.current = false
        dragIndex.current = -1
        document.body.style.cursor = 'default'
      }}
      onPointerMove={() => {
        if (isDragging.current) {
          document.body.style.cursor = 'grabbing'
        }
      }}
    >
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  )
}

function InfinityGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseWorld = useRef(new THREE.Vector3(50, 50, 0))
  const isDragging = useRef(false)
  const dragIndex = useRef(-1)
  const cubeCount = 60

  const points = useMemo(() => getInfinityPoints(cubeCount, 3.2), [])

  const handleDragStart = useCallback((index: number) => {
    isDragging.current = true
    dragIndex.current = index
    document.body.style.cursor = 'grabbing'
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.08) * 0.03
    }
  })

  return (
    <>
      <MousePlane mouseWorld={mouseWorld} isDragging={isDragging} dragIndex={dragIndex} />
      <Float speed={0.6} rotationIntensity={0.03} floatIntensity={0.15}>
        <group ref={groupRef}>
          {points.map((point, i) => (
            <GoldenCube
              key={i}
              basePosition={point}
              index={i}
              total={cubeCount}
              mouseWorld={mouseWorld}
              isDragging={isDragging}
              dragIndex={dragIndex}
              onDragStart={handleDragStart}
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
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF8E7" />
        <directionalLight position={[-4, -2, 3]} intensity={0.5} color="#F5B731" />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#FFD700" />
        <spotLight position={[3, 3, 5]} angle={0.5} penumbra={1} intensity={0.5} color="#F5C84C" />

        <Environment preset="studio" />

        <InfinityGroup />
      </Canvas>
    </div>
  )
}
