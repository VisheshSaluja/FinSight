import { Canvas } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1.4, 64, 64]}>
            <MeshDistortMaterial
              color="#00e0ff"
              distort={0.5}
              speed={2}
              roughness={0.1}
              emissive="#00ffff"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
        <Sparkles
          count={40}
          scale={[4, 4, 4]}
          size={2}
          speed={1}
          color="#00e0ff"
        />
      </Canvas>
    </div>
  );
}
