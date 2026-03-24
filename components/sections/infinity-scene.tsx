'use client'

import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, RoundedBox, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Thick infinity logo — multiple concentric rings + depth layers
function getInfinityPoints(countPerRing: number, baseScale: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []

  // 3 concentric rings (inner, middle, outer) for thickness
  const ringScales = [baseScale - 0.5, baseScale, baseScale + 0.5]
  // 3 depth layers
  const depthLayers = [-0.3, 0, 0.3]

  for (const depth of depthLayers) {
    for (const ringScale of ringScales) {
      for (let i = 0; i < countPerRing; i++) {
        const t = (i / countPerRing) * Math.PI * 2
        const denom = 1 + Math.sin(t) * Math.sin(t)
        const x = (ringScale * Math.cos(t)) / denom
        const y = (ringScale * Math.sin(t) * Math.cos(t)) / denom
        const z = depth
        points.push(new THREE.Vector3(x, y, z))
      }
    }
  }
  return points
}

function GoldenCube({
  basePosition,
  index,
  mouseWorld,
  isDragging,
  dragIndex,
  onDragStart,
}: {
  basePosition: THREE.Vector3
  index: number
  mouseWorld: React.MutableRefObject<THREE.Vector3>
  isDragging: React.MutableRefObject<boolean>
  dragIndex: React.MutableRefObject<number>
  onDragStart: (index: number) => void
}) {
  const ref = useRef<any>(null)
  const phase = index * 0.8
  // Track if this cube has been dragged — it remembers its new position
  const hasBeenDropped = useRef(false)
  const droppedPos = useRef(new THREE.Vector3())
  const randomRotSpeed = useMemo(() => ({
    x: 0.08 + Math.random() * 0.1,
    y: 0.12 + Math.random() * 0.15,
  }), [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    const mesh = ref.current

    // Currently being dragged — follow mouse
    if (isDragging.current && dragIndex.current === index) {
      mesh.position.lerp(
        new THREE.Vector3(mouseWorld.current.x, mouseWorld.current.y, 0.8),
        0.18
      )
      mesh.rotation.x += 0.06
      mesh.rotation.y += 0.06
      mesh.scale.setScalar(1.3)
      return
    }

    // If dropped — stay at dropped position with gentle float
    if (hasBeenDropped.current) {
      const tx = droppedPos.current.x + Math.sin(t * 0.3 + phase) * 0.03
      const ty = droppedPos.current.y + Math.cos(t * 0.25 + phase) * 0.03
      const tz = droppedPos.current.z + Math.sin(t * 0.2 + phase) * 0.02
      mesh.position.lerp(new THREE.Vector3(tx, ty, tz), 0.05)
      mesh.rotation.x = Math.sin(t * randomRotSpeed.x + phase) * 0.2
      mesh.rotation.y = t * randomRotSpeed.y + phase
      mesh.scale.setScalar(mesh.scale.x + (1 - mesh.scale.x) * 0.1)
      return
    }

    // Default: gentle float around base position
    const tx = basePosition.x + Math.sin(t * 0.3 + phase) * 0.03
    const ty = basePosition.y + Math.cos(t * 0.25 + phase) * 0.03
    const tz = basePosition.z + Math.sin(t * 0.2 + phase) * 0.02

    // Mouse repulsion (only for non-dropped cubes)
    const mx = mouseWorld.current.x
    const my = mouseWorld.current.y
    const dx = tx - mx
    const dy = ty - my
    const dist = Math.sqrt(dx * dx + dy * dy)
    let rx = 0, ry = 0
    if (dist < 1.5 && dist > 0.01) {
      const strength = Math.pow(1 - dist / 1.5, 2) * 0.5
      rx = (dx / dist) * strength
      ry = (dy / dist) * strength
    }

    mesh.position.lerp(new THREE.Vector3(tx + rx, ty + ry, tz), 0.06)
    mesh.rotation.x = Math.sin(t * randomRotSpeed.x + phase) * 0.2
    mesh.rotation.y = t * randomRotSpeed.y + phase
    mesh.scale.setScalar(mesh.scale.x + (1 - mesh.scale.x) * 0.1)
  })

  return (
    <RoundedBox
      ref={ref}
      args={[0.22, 0.22, 0.22]}
      radius={0.04}
      smoothness={4}
      position={basePosition}
      onPointerDown={(e) => {
        e.stopPropagation()
        onDragStart(index)
      }}
      onPointerUp={() => {
        if (isDragging.current && dragIndex.current === index && ref.current) {
          // Save the dropped position — cube stays here
          hasBeenDropped.current = true
          droppedPos.current.copy(ref.current.position)
          isDragging.current = false
          dragIndex.current = -1
          document.body.style.cursor = 'default'
        }
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
    if (intersect) mouseWorld.current.lerp(intersect, 0.15)
  })

  return (
    <mesh
      visible={false}
      onPointerUp={() => {
        // Global release — in case pointer leaves the cube
        if (isDragging.current) {
          isDragging.current = false
          dragIndex.current = -1
          document.body.style.cursor = 'default'
        }
      }}
    >
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  )
}

function InfinityGroup() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseWorld = useRef(new THREE.Vector3(50, 50, 0))
  const isDragging = useRef(false)
  const dragIndex = useRef(-1)

  // 20 cubes per ring × 3 rings × 3 depth layers = 180 cubes
  const points = useMemo(() => getInfinityPoints(20, 3), [])

  const handleDragStart = useCallback((index: number) => {
    isDragging.current = true
    dragIndex.current = index
    document.body.style.cursor = 'grabbing'
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.08) * 0.02
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
        camera={{ position: [0, 0, 7], fov: 45 }}
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

        {/* User can orbit/pan camera to see layers from different angles */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
        />

        <InfinityGroup />
      </Canvas>
    </div>
  )
}
