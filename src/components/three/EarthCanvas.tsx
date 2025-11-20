import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef} castShadow>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#916de2"         // roxo principal
          emissive="#2d253e"      // roxo bem escuro
          metalness={0.35}
          roughness={0.35}
        />
      </mesh>

      {/* Atmosfera em lilás claro */}
      <mesh>
        <sphereGeometry args={[1.28, 64, 64]} />
        <meshBasicMaterial color="#ca9edb" transparent opacity={0.3} />
      </mesh>

      {/* Pontos indicando estações - variações de lilás */}
      <group>
        {[
          [1.8, 0.4, 0.2],
          [-1.4, -0.3, 0.9],
          [0.7, 1.3, -0.7]
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color={i === 0 ? "#ffffff" : "#b48ede"}
              emissive="#b48ede"
              emissiveIntensity={1.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function EarthCanvas() {
  return (
    <div className="w-full h-[360px] sm:h-[440px] rounded-3xl bg-[rgba(13,10,24,0.85)] border border-slate-700/80 shadow-glow overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#010102"]} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[4, 4, 3]}
          intensity={1.4}
          castShadow
          color="#916de2"
        />
        <Stars
          radius={40}
          depth={25}
          count={6000}
          factor={3}
          fade
          speed={1}
        />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
