'use client'

import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

// Generate a 3D grid of cubes like the Spline scene
function generateGridPositions(rows: number, cols: number, layers: number, spacing: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const offsetX = ((cols - 1) * spacing) / 2
  const offsetY = ((rows - 1) * spacing) / 2
  const offsetZ = ((layers - 1) * spacing) / 2

  for (let z = 0; z < layers; z++) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Add slight randomness to position
        const px = x * spacing - offsetX + (Math.random() - 0.5) * 0.15
        const py = y * spacing - offsetY + (Math.random() - 0.5) * 0.15
        const pz = z * spacing - offsetZ + (Math.random() - 0.5) * 0.15
        points.push(new THREE.Vector3(px, py, pz))
      }
    }
  }
  return points
}

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
  const phase = index * 0.7
  const vel = useRef(new THREE.Vector3())
  const randomRotSpeed = useMemo(() => ({
    x: 0.1 + Math.random() * 0.15,
    y: 0.15 + Math.random() * 0.2,
    z: 0.05 + Math.random() * 0.1,
  }), [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    const mesh = ref.current

    // Dragging
    if (isDragging.current && dragIndex.current === index) {
      mesh.position.lerp(
        new THREE.Vector3(mouseWorld.current.x, mouseWorld.current.y, 1),
        0.15
      )
      mesh.rotation.x += 0.06
      mesh.rotation.y += 0.06
      mesh.scale.setScalar(1.3)
      return
    }

    // Float target
    const tx = basePosition.x + Math.sin(t * 0.3 + phase) * 0.06
    const ty = basePosition.y + Math.cos(t * 0.25 + phase) * 0.06
    const tz = basePosition.z + Math.sin(t * 0.2 + phase) * 0.04

    // Mouse repulsion
    const mx = mouseWorld.current.x
    const my = mouseWorld.current.y
    const dx = tx - mx
    const dy = ty - my
    const dist = Math.sqrt(dx * dx + dy * dy)

    let rx = 0, ry = 0, rz = 0
    if (dist < 2 && dist > 0.01) {
      const strength = Math.pow(1 - dist / 2, 2) * 0.8
      rx = (dx / dist) * strength
      ry = (dy / dist) * strength
      rz = strength * 0.3
    }

    // Spring physics
    const targetX = tx + rx
    const targetY = ty + ry
    const targetZ = tz + rz

    vel.current.x += (targetX - mesh.position.x) * 0.05
    vel.current.y += (targetY - mesh.position.y) * 0.05
    vel.current.z += (targetZ - mesh.position.z) * 0.05
    vel.current.multiplyScalar(0.88)
    mesh.position.add(vel.current)

    // Gentle rotation
    mesh.rotation.x = Math.sin(t * randomRotSpeed.x + phase) * 0.25
    mesh.rotation.y = t * randomRotSpeed.y + phase
    mesh.rotation.z = Math.cos(t * randomRotSpeed.z + phase) * 0.15

    // Scale based on mouse proximity
    const targetScale = dist < 2 ? 1 + (2 - dist) * 0.08 : 1
    mesh.scale.setScalar(mesh.scale.x + (targetScale - mesh.scale.x) * 0.1)
  })

  return (
    <RoundedBox
      ref={ref}
      args={[0.55, 0.55, 0.55]}
      radius={0.08}
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
        metalness={0.15}
        roughness={0.08}
        clearcoat={1}
        clearcoatRoughness={0.03}
        envMapIntensity={2.5}
        emissive="#F5B731"
        emissiveIntensity={0.12}
        ior={1.45}
        thickness={1.5}
        transmission={0.55}
        transparent
        opacity={0.92}
        sheen={0.8}
        sheenColor={new THREE.Color('#FFD700')}
        sheenRoughness={0.15}
        iridescence={0.4}
        iridescenceIOR={1.3}
        specularIntensity={1.5}
        specularColor={new THREE.Color('#FFFFFF')}
        attenuationColor={new THREE.Color('#F5B731')}
        attenuationDistance={0.8}
      />
    </RoundedBox>
  )
}

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
      mouseWorld.current.lerp(intersect, 0.12)
    }
  })

  return (
    <mesh
      visible={false}
      onPointerUp={() => {
        isDragging.current = false
        dragIndex.current = -1
        document.body.style.cursor = 'default'
      }}
    >
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  )
}

function CubeCluster() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseWorld = useRef(new THREE.Vector3(50, 50, 0))
  const isDragging = useRef(false)
  const dragIndex = useRef(-1)

  // 5x5x2 grid = 50 cubes with 0.85 spacing
  const points = useMemo(() => generateGridPositions(5, 5, 2, 0.85), [])

  const handleDragStart = useCallback((index: number) => {
    isDragging.current = true
    dragIndex.current = index
    document.body.style.cursor = 'grabbing'
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slow rotation of entire cluster
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1
      groupRef.current.rotation.y = clock.elapsedTime * 0.05
      groupRef.current.rotation.z = Math.cos(clock.elapsedTime * 0.08) * 0.05
    }
  })

  return (
    <>
      <MousePlane mouseWorld={mouseWorld} isDragging={isDragging} dragIndex={dragIndex} />
      <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.1}>
        <group ref={groupRef}>
          {points.map((point, i) => (
            <GoldenCube
              key={i}
              basePosition={point}
              index={i}
              total={points.length}
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
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF8E7" />
        <directionalLight position={[-4, -2, 3]} intensity={0.4} color="#F5B731" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#FFD700" />
        <spotLight position={[3, 3, 5]} angle={0.6} penumbra={1} intensity={0.4} color="#F5C84C" />

        <Environment preset="studio" />

        <CubeCluster />
      </Canvas>
    </div>
  )
}
