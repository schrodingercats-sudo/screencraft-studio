"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, Plane } from "@react-three/drei"
import * as THREE from "three"

interface DeviceMockupProps {
  deviceType: 'iphone' | 'macbook' | 'browser'
}

export default function DeviceMockup({ deviceType }: DeviceMockupProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  if (deviceType === 'iphone') {
    return (
      <group ref={groupRef}>
        <RoundedBox args={[1.5, 3, 0.2]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        
        <Plane args={[1.3, 2.7]} position={[0, 0, 0.11]}>
          <meshStandardMaterial color="#000000" />
        </Plane>

        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[1.2, 2.6]} />
          <meshBasicMaterial color="#4f46e5" />
        </mesh>

        <RoundedBox args={[0.3, 0.05, 0.05]} radius={0.02} position={[0, 1.3, 0.11]}>
          <meshStandardMaterial color="#1f2937" />
        </RoundedBox>
      </group>
    )
  }

  if (deviceType === 'macbook') {
    return (
      <group ref={groupRef} rotation={[-0.3, 0, 0]}>
        <RoundedBox args={[4, 2.5, 0.1]} radius={0.05} position={[0, 1.25, 0]}>
          <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        
        <Plane args={[3.7, 2.3]} position={[0, 1.25, 0.06]}>
          <meshStandardMaterial color="#000000" />
        </Plane>

        <mesh position={[0, 1.25, 0.07]}>
          <planeGeometry args={[3.6, 2.2]} />
          <meshBasicMaterial color="#4f46e5" />
        </mesh>

        <RoundedBox args={[4.2, 0.05, 0.3]} radius={0.02} position={[0, 0, 0.15]}>
          <meshStandardMaterial color="#374151" />
        </RoundedBox>
      </group>
    )
  }

  return (
    <group ref={groupRef}>
      <RoundedBox args={[4, 3, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.8} />
      </RoundedBox>
      
      <Plane args={[3.8, 2.8]} position={[0, 0, 0.06]}>
        <meshStandardMaterial color="#f3f4f6" />
      </Plane>

      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[3.7, 2.4]} />
        <meshBasicMaterial color="#4f46e5" />
      </mesh>

      <RoundedBox args={[3.8, 0.2, 0.1]} radius={0.02} position={[0, 1.3, 0.06]}>
        <meshStandardMaterial color="#e5e7eb" />
      </RoundedBox>
    </group>
  )
}
