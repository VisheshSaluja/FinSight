import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sphere,
} from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 1]} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
          <Sphere args={[1, 64, 64]}>
            <MeshDistortMaterial
              color="#00FFFF"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.1}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
