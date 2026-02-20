"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const count = 6000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100  // wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }

    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.02
    ref.current.rotation.y = t * 0.03
  })

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={1}
      />
    </Points>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-10">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}  // camera moved back
      >
        <ambientLight intensity={1} />
        <Particles />
      </Canvas>

      {/* very light overlay for readability */}
      <div className="absolute inset-0 bg-navy-dark/15" />
    </div>
  )
}