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
  const [recombine, setRecombine] = useState(false);

  // Kleine bolletjes bij explosie
  const smallBlobs = useMemo(() => {
    const blobs = [];
    for (let i = 0; i < 30; i++) {
      blobs.push({
        position: new THREE.Vector3(0, 0, 0),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          Math.random() * 0.3,
          (Math.random() - 0.5) * 0.3
        ),
        original: new THREE.Vector3(0, 0, 0),
        color: new THREE.Color(Math.random() * 0xffffff)
      });
    }
    return blobs;
  }, []);

  // Aura bolletjes
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
    const t = state.clock.elapsedTime;

    // Explosie en recombine animatie
    smallBlobs.forEach(blob => {
      if (!recombine) {
        // Gravity effect tijdens explode
        blob.velocity.y -= 0.01;
        blob.position.add(blob.velocity);
      } else {
        // Recombine: beweeg terug naar center
        blob.position.lerp(blob.original, 0.05);
      }
    });

    // Aura animatie
    auraBlobs.forEach(blob => {
      blob.angle += 0.02;
      blob.x = Math.cos(blob.angle) * blob.radius;
      blob.z = Math.sin(blob.angle) * blob.radius;
    });
  });

  const handleClick = () => {
    if (!exploded) {
      setExploded(true);
      // start recombine na 2 seconden
      setTimeout(() => setRecombine(true), 2000);
      // reset naar grote bol na 4 seconden
      setTimeout(() => {
        setExploded(false);
        setRecombine(false);
        smallBlobs.forEach(blob => (blob.position.set(0, 0, 0)));
      }, 4000);
    }
  };

  return (
    <group>
      {/* Grote bol */}
      {!exploded && (
        <mesh ref={meshRef} onClick={handleClick}>
          <sphereGeometry args={[2, 128, 128]} />
          <MeshDistortMaterial color="#2563EB" speed={2} distort={0.3} roughness={0.1} metalness={0.2} />
        </mesh>
      )}

      {/* Kleine bolletjes */}
      {exploded && smallBlobs.map((blob, idx) => (
        <mesh key={idx} position={blob.position}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <MeshDistortMaterial color={blob.color} distort={0.3} speed={1} />
        </mesh>
      ))}

      {/* Aura */}
      {auraBlobs.map((blob, idx) => (
        <mesh key={`aura-${idx}`} position={[blob.x || 0, 0, blob.z || 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <MeshDistortMaterial color="#A855F7" distort={0.2} speed={2} />
        </mesh>
      ))}
    </group>
  );
}
