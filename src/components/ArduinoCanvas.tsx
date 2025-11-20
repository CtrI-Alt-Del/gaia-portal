import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, useGLTF } from "@react-three/drei";

type ArduinoModelProps = {
  onHoverChange: (value: boolean) => void;
};

function ArduinoModel({ onHoverChange }: ArduinoModelProps) {
  const gltf = useGLTF("/models/arduino.glb") as any;
  const [hovered, setHovered] = useState(false);

  const handleOver = () => {
    setHovered(true);
    onHoverChange(true);
  };

  const handleOut = () => {
    setHovered(false);
    onHoverChange(false);
  };

  return (
    <Float speed={1.6} floatIntensity={1.2} rotationIntensity={0.8}>
      <primitive
        object={gltf.scene}
        scale={1.6}
        position={[0, -0.1, 0]}
        onPointerOver={(e: any) => {
          e.stopPropagation();
          handleOver();
        }}
        onPointerOut={(e: any) => {
          e.stopPropagation();
          handleOut();
        }}
      />
    </Float>
  );
}

export function ArduinoCanvas() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full h-[500px] sm:h-[600px] relative overflow-visible">
      <Canvas camera={{ position: [0, 1.3, 3.1], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 3]} intensity={1.1} color="#916de2" />
        <directionalLight position={[-3, 2, -2]} intensity={0.7} color="#b48ede" />

        <Suspense fallback={null}>
          <ArduinoModel onHoverChange={setHovering} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/arduino.glb");
