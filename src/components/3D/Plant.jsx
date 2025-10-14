"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function SinglePlant({ position = [0, 0, 0], baseScale = 1 }) {
  const ref = useRef();
  const { scene } = useGLTF("/models/fancy-plant.glb");
  const { size } = useThree();

  // Responsieve schaal: kleiner op mobiel
  const responsiveScale = baseScale * (size.width < 600 ? 0.6 : 1);

  // Centraal positioneren via bounding box
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.sub(center);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
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

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={[responsiveScale, responsiveScale, responsiveScale]} // correct toepassen
    />
  );
}

export default function PlantScene() {
  const { size } = useThree();
  const scaleMultiplier = size.width < 600 ? 0.6 : 1; // mobiel: kleiner

  // Magische bolletjes, geschaald voor mobiel
  const glows = [
    [-0.3, 1.0, 0.2, "pink"],
    [0.2, 0.9, -0.5, "lightblue"],
    [0.5, 0.8, 0.7, "lavender"],
  ].map(([x, y, z, color], i) => (
    <mesh key={i} position={[x * scaleMultiplier, y * scaleMultiplier, z * scaleMultiplier]}>
      <sphereGeometry args={[0.05 * scaleMultiplier, 12, 12]} />
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.9}
        color={color}
      />
    </mesh>
  ));

  return (
    <group position={[0, -0.7 * scaleMultiplier, 0]}>
      {/* Cluster van planten */}
      <SinglePlant position={[-0.5, 0, 0]} baseScale={1} />
      <SinglePlant position={[0.5, 0.1, 0.3]} baseScale={1.1} />
      <SinglePlant position={[0, -0.2, -0.5]} baseScale={0.9} />
      <SinglePlant position={[0.6, 0, -0.4]} baseScale={0.95} />
      <SinglePlant position={[-0.6, -0.1, 0.5]} baseScale={1} />

      {/* Magische zwevende bloemetjes/glows */}
      {glows}

      {/* Lichtjes */}
      <pointLight position={[0, 2, 0]} intensity={0.6} color="white" />
      <ambientLight intensity={0.4} />
    </group>
  );
}
