"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Roof() {
  const group = useRef();

  const rows = 5;
  const cols = 8;

  useEffect(() => {
    if (!group.current) return;"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Roof() {
  const group = useRef();

  const rows = 6;
  const cols = 10;

  useEffect(() => {
    if (!group.current) return;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Maak halve cilinder als dakpan
        const geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16, 1, true, 0, Math.PI);
        const material = new THREE.MeshStandardMaterial({ 
          color: new THREE.Color().setHSL(0.05, 0.7, 0.3 + Math.random() * 0.1), 
          side: THREE.DoubleSide 
        });
        const tile = new THREE.Mesh(geometry, material);

        // Positioneer met overlappende rijen
        tile.rotation.z = Math.PI / 2; // leg de cilinder plat
        tile.position.set(j * 0.5 + (i % 2 === 0 ? 0.25 : 0), 2, i * 0.25);

        // Start boven en laat naar beneden vallen
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
      {/* Fundament */}
      <mesh
        position={[
          (cols * 0.5) / 2,
          -0.05,
          (rows * 0.25) / 2,
        ]}
      >
        <boxGeometry args={[cols * 0.5, 0.1, rows * 0.25]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}


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
