"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function SinglePlant({ scale = 1 }) {
  const ref = useRef();
  const { scene } = useGLTF("/models/fancy-plant.glb");

  // Center het model
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.sub(center);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // subtiele rotatie animatie
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.3;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.position.y =
          (child.userData.baseY || 0) +
          Math.sin(t * 2 + child.id * 0.5) * 0.05;
        if (child.userData.baseY === undefined)
          child.userData.baseY = child.position.y;
      }
    });
  });

  return <primitive ref={ref} object={scene} scale={[scale, scale, scale]} />;
}

export default function PlantScene() {
  const scale = 1;       // vaste schaal
  const positionY = -1.5; // iets hoger geplaatst

  return (
    <group position={[0, positionY, 0]} scale={[scale, scale, scale]}>
      {/* Eén centrale plant */}
      <SinglePlant />

      {/* Magische bolletjes/glows */}
      {[
        [-0.3, 1.0, 0.2, "pink"],
        [0.2, 0.9, -0.5, "lightblue"],
        [0.5, 0.8, 0.7, "lavender"],
      ].map(([x, y, z, color], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial
            emissive={color}
            emissiveIntensity={0.9}
            color={color}
          />
        </mesh>
      ))}

      {/* Lichtjes */}
      <pointLight position={[0, 2, 0]} intensity={0.6} color="white" />
      <ambientLight intensity={0.4} />
    </group>
  );
}
