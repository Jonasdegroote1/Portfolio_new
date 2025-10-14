"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Roof() {
  const group = useRef();

  const rows = 12;  // aantal rijen pannen per helling
  const cols = 16;  // aantal pannen per rij
  const tileWidth = 0.5;
  const tileHeight = 0.05;
  const tileDepth = 0.25;
  const roofHeight = 2;
  const roofWidth = cols * tileWidth;

  useEffect(() => {
    if (!group.current) return;

    for (let side = -1; side <= 1; side += 2) { // -1 = linkerkant, 1 = rechterkant
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const geometry = new THREE.BoxGeometry(tileWidth, tileHeight, tileDepth);
          const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(0.05, 0.7, 0.3 + Math.random() * 0.1),
          });
          const tile = new THREE.Mesh(geometry, material);

          // basispositie
          const x = col * tileWidth - roofWidth / 2;
          const z = row * tileDepth;

          // dakhelling
          const slope = roofHeight / (roofWidth / 2);
          const y = slope * (side === -1 ? -x : x);

          // overlappende rijen
          tile.position.set(x, y + row * tileHeight * 0.8, z);

          // lichte rotatie van pannen voor realisme
          tile.rotation.x = -0.05 + Math.random() * 0.1;
          tile.rotation.y = Math.random() * 0.02;

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
