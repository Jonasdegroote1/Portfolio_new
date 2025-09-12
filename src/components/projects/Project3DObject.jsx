"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";

// Dynamisch importeren
const Plant = dynamic(() => import("../3D/Plant"), { ssr: false });
const Roof = dynamic(() => import("../3D/Roof"), { ssr: false });

export default function Project3DObject({ objectType }) {
  console.log(objectType)
  return (
    <div className="project-3dobject">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [5, 5, 8], fov: 50 }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Controls */}
        <OrbitControls enableZoom={true} />

        {/* Custom objecten */}
        {objectType === "plant" && <Plant />}
        {objectType === "roof" && <Roof />}
      </Canvas>
    </div>
  );
}
