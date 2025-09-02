"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";

export default function Blob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />
      <Environment preset="studio" />

      {/* Hier render je de geanimeerde blob */}
      <AnimatedBlob />
    </Canvas>
  );
}

function AnimatedBlob() {
  const mat = useRef();

  useFrame((state) => {
    if (mat.current) {
      const t = state.clock.elapsedTime;
      mat.current.distort = 0.4 + Math.sin(t * 0.9) * 0.1;
    }
  });

  return (
    <group position={[2, 0, 0]}>
      <mesh>
        <sphereGeometry args={[2, 128]} />
        <MeshDistortMaterial
          ref={mat}
          color="#2563EB"
          speed={2}
          distort={0.35}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}
