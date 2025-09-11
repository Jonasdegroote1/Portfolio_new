"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Project3DObject({ objectType = "cube" }) {
  return (
    <div className="project-3dobject">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls enableZoom={false} />

        {objectType === "cube" && (
          <mesh rotation={[0.4, 0.6, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial color="#6C63FF" />
          </mesh>
        )}

        {objectType === "sphere" && (
          <mesh rotation={[0.4, 0.6, 0]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial color="#FF6584" />
          </mesh>
        )}

        {objectType === "cone" && (
          <mesh rotation={[0.4, 0.6, 0]}>
            <coneGeometry args={[1.2, 2, 32]} />
            <meshStandardMaterial color="#00C49F" />
          </mesh>
        )}
      </Canvas>
    </div>
  );
}
