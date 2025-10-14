"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Roof() {
  const group = useRef();

  const rows = 6; // aantal rijen pannen
  const cols = 10; // aantal kolommen pannen
  const roofWidth = cols * 0.5;
  const roofDepth = rows * 0.25;
  const roofHeight = 1.5; // hoogte van het dak

  useEffect(() => {
    if (!group.current) return;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.5, 16, 1, true, 0, Math.PI);
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(0.05, 0.7, 0.3 + Math.random() * 0.1),
          side: THREE.DoubleSide,
        });
        const tile = new THREE.Mesh(geometry, material);

        tile.rotation.z = Math.PI / 2; // leg de cilinder plat

        // Bepaal op welke helling het paneel ligt
        const isLeftSide = j < cols / 2;
        const xOffset = j * 0.5 - roofWidth / 4; // center het dak
        const yOffset = (i * 0.25) / 2;
        const zOffset = i * 0.25;

        // helling van dak
        const slope = roofHeight / (cols / 2 * 0.5);
        const ySlope = isLeftSide ? slope * (-xOffset) : slope * xOffset;

        tile.position.set(xOffset, ySlope + roofHeight / 2, zOffset);

        // Sla de targetY en delay op voor animatie
        tile.userData.targetY = tile.position.y;
        tile.position.y += 2; // start boven
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
    <group ref={group} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* Fundament */}
      <mesh
        position={[0, -0.05, roofDepth / 2]}
      >
        <boxGeometry args={[roofWidth, 0.1, roofDepth]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}
