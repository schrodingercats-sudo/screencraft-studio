"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Suspense } from "react"
import DeviceMockup from "./DeviceMockup"

export default function MockupPreview() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={true} enablePan={true} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <spotLight position={[0, 10, 0]} intensity={0.5} />

          <DeviceMockup deviceType="iphone" />

          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
