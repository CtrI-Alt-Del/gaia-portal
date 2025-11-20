import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";

type ArduinoProps = {
  onHoverChange: (value: boolean) => void;
};

function ArduinoModel({ onHoverChange }: ArduinoProps) {
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
        scale={1.8}
        position={[0, -0.1, 0]}
        onPointerOver={(e:any) => {
          e.stopPropagation();
          handleOver();
        }}
        onPointerOut={(e:any) => {
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
    <div className="w-full h-[280px] sm:h-[340px] rounded-3xl bg-white border border-slate-300 shadow-glow overflow-hidden relative">
      <Canvas camera={{ position: [0, 1.2, 3.2], fov: 45 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[3, 4, 3]}
          intensity={1.1}
          color="#916de2"
        />
        <directionalLight
          position={[-3, 2, -2]}
          intensity={0.6}
          color="#b48ede"
        />

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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm text-center text-slate-700 bg-gradient-to-t from-white to-transparent">
        {hovering
          ? "Gire e aproxime a placa arrastando e usando a roda do mouse ou gesto de pinça."
          : "Passe o mouse ou toque na placa para interagir. Use zoom para aproximar."}
      </div>
    </div>
  );
}

useGLTF.preload("/models/arduino.glb");
