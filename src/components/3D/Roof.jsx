"use client";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Roof() {
  const meshRef = useRef();

  // dakvorm: driehoekig vlak (tweekantig)
  const roofWidth = 4;
  const roofDepth = 3;
  const roofHeight = 2;

  // driehoekig dakvlak voor linker- en rechterkant
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -roofWidth / 2, 0, 0,       // linker onderhoek
     roofWidth / 2, 0, 0,       // rechter onderhoek
     0, roofHeight, roofDepth / 2, // top van het dak
  ]);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({ color: 0x8b0000, side: THREE.DoubleSide });

  return <mesh ref={meshRef} geometry={geometry} material={material} position={[0,1.5,0]} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [5,5,5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5,10,5]} intensity={1} />
      <Roof />
      {/* Huisbasis */}
      <mesh position={[0,0,0]}>
        <boxGeometry args={[4,3,3]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </Canvas>
  );
}
