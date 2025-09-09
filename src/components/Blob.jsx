"use client";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

export default function BlobScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Environment preset="studio" />

      <ExplodingBlob />
    </Canvas>
  );
}

function ExplodingBlob() {
  const meshRef = useRef();
  const [exploded, setExploded] = useState(false);

  // Maak de kleine bolletjes voor de explode
  const smallBlobs = useMemo(() => {
    const blobs = [];
    for (let i = 0; i < 30; i++) {
      blobs.push({
        position: new THREE.Vector3(0, 0, 0),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          Math.random() * 0.3,
          (Math.random() - 0.5) * 0.2
        ),
        color: new THREE.Color(Math.random() * 0xffffff)
      });
    }
    return blobs;
  }, []);

  // Maak de kleine bolletjes die rond de grote bol draaien
  const auraBlobs = useMemo(() => {
    const blobs = [];
    const radius = 3;
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      blobs.push({ angle, radius });
    }
    return blobs;
  }, []);

  useFrame((state, delta) => {
    // Explosie animatie
    if (exploded) {
      smallBlobs.forEach(blob => {
        blob.velocity.y -= 0.01; // gravity
        blob.position.add(blob.velocity);
      });
    }

    // Aura animatie
    auraBlobs.forEach((blob, i) => {
      blob.angle += 0.02;
      blob.x = Math.cos(blob.angle) * blob.radius;
      blob.z = Math.sin(blob.angle) * blob.radius;
    });
  });

  return (
    <group>
      {!exploded && (
        <mesh
          ref={meshRef}
          onClick={() => setExploded(true)}
        >
          <sphereGeometry args={[2, 128, 128]} />
          <MeshDistortMaterial
            color="#2563EB"
            speed={2}
            distort={0.3}
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
      )}

      {/* Exploded kleine bolletjes */}
      {exploded && smallBlobs.map((blob, idx) => (
        <mesh key={idx} position={blob.position}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <MeshDistortMaterial color={blob.color} distort={0.3} speed={1} />
        </mesh>
      ))}

      {/* Aura bolletjes rond grote bol */}
      {auraBlobs.map((blob, idx) => (
        <mesh key={`aura-${idx}`} position={[blob.x || 0, 0, blob.z || 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <MeshDistortMaterial color="#A855F7" distort={0.2} speed={2} />
        </mesh>
      ))}
    </group>
  );
}
