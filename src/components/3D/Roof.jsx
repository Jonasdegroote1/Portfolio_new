"use client";
import { Canvas } from "@react-three/fiber";

function Roof() {
  // Parameters
  const width = 4;
  const depth = 3;
  const height = 2;

  return (
    <group position={[0, 1.5, 0]}>
      {/* Linker dakvlak */}
      <mesh rotation={[0, 0, Math.PI / 4]} position={[0, height / 2, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Rechter dakvlak */}
      <mesh rotation={[0, 0, -Math.PI / 4]} position={[0, height / 2, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="darkred" />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [6, 4, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Roof />
      {/* Huisbasis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 3, 3]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </Canvas>
  );
}
