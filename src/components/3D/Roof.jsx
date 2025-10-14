"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Roof() {
  const group = useRef();

  const rows = 8; // aantal rijen pannen per helling
  const cols = 12; // aantal pannen per rij
  const tileWidth = 0.5;
  const tileHeight = 0.05;
  const tileDepth = 0.25;
  const roofHeight = 1.5;
  const roofWidth = cols * tileWidth;

  useEffect(() => {
    if (!group.current) return;

    for (let side = -1; side <= 1; side += 2) { // -1 = linkerkant, 1 = rechterkant
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const geometry = new THREE.BoxGeometry(tileWidth, tileHeight, tileDepth);
          const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(0.05, 0.7, 0.3 + Math.random() * 0.1),
          });
          const tile = new THREE.Mesh(geometry, material);

          // positie in x en z
          const x = j * tileWidth - roofWidth / 2;
          const z = i * tileDepth;

          // y = hoogte van het dakvlak
          const slope = roofHeight / (roofWidth / 2);
          const y = slope * (side === -1 ? -x : x);

          // lichte overlap tussen rijen
          const overlap = i * 0.02;
          tile.position.set(x, y + overlap, z);

          group.current.add(tile);
        }
      }
    }
  }, []);

  return (
    <group ref={group} position={[0, roofHeight / 2, 0]}>
      {/* Fundament van het huis */}
      <mesh position={[0, -roofHeight / 2, (rows * tileDepth)/2]}>
        <boxGeometry args={[roofWidth, roofHeight, rows * tileDepth]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </group>
  );
}
