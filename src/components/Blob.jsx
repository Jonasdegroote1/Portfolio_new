"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Blob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />
      <Environment preset="studio" />

      <InteractiveBlob />
    </Canvas>
  );
}

function InteractiveBlob() {
  const mat = useRef();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [particles] = useState(() => {
    const p = [];
    for (let i = 0; i < 200; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ));
    }
    return p;
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Blob pulsatie
    if (mat.current) {
      mat.current.distort = 0.4 + Math.sin(t * 0.9) * 0.1;
      // Color shift
      mat.current.color.lerpColors(
        new THREE.Color("#2563EB"), // blauw
        new THREE.Color("#A855F7"), // paars
        hovered ? Math.abs(Math.sin(t * 2)) : 0
      );
    }

    // Hover explode effect
    if (meshRef.current) {
      const scale = hovered ? 1.2 + Math.sin(t * 5) * 0.2 : 1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[2, 128, 128]} />
        <MeshDistortMaterial
          ref={mat}
          color="#2563EB"
          speed={2}
          distort={0.35}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Particle aura */}
      {hovered && (
        <Points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particles.length}
              array={new Float32Array(particles.flatMap((v) => [v.x, v.y, v.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <PointMaterial color="#A855F7" size={0.05} sizeAttenuation />
        </Points>
      )}
    </group>
  );
}
