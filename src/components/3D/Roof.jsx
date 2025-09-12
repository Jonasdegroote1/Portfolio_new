"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Roof() {
  const group = useRef();

  const rows = 5;
  const cols = 8;

  useEffect(() => {
    if (!group.current) return;

    // Maak dakpannen
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.1, 0.3);
        const material = new THREE.MeshStandardMaterial({ color: "brown" });
        const tile = new THREE.Mesh(geometry, material);

        // start boven en laat naar beneden animeren
        tile.position.set(j * 0.55, 2, i * 0.35);
        tile.userData.targetY = 0;
        tile.userData.delay = (i * cols + j) * 0.05;

        group.current.add(tile);
      }
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    group.current.children.forEach((tile) => {
      if (t > tile.userData.delay) {
        tile.position.y += (tile.userData.targetY - tile.position.y) * 0.05;
      }
    });
  });

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
      {/* Dak fundament */}
      <mesh
        position={[
          (cols * 0.55) / 2 - 0.55 / 2,
          -0.05,
          (rows * 0.35) / 2 - 0.35 / 2,
        ]}
      >
        <boxGeometry args={[cols * 0.55, 0.1, rows * 0.35]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}
