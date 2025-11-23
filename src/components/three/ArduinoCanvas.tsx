import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";

type HoverInfo = { title: string; description: string };

type ArduinoModelProps = {
  onHoverChange: (value: boolean) => void;
  onSelect?: (name: string | null) => void;
};

function ArduinoModel({ onHoverChange, onSelect }: ArduinoModelProps) {
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
        scale={2.1}
        position={[0, -0.1, 0]}
        onPointerOver={(e: any) => {
          e.stopPropagation();
          handleOver();
        }}
        onPointerOut={(e: any) => {
          e.stopPropagation();
          handleOut();
        }}
        onPointerDown={(e: any) => {
          e.stopPropagation();
          const name = e.object?.name ?? null;
          if (name) onSelect?.(name);
        }}
      />
    </Float>
  );
}

type ArduinoCanvasProps = { debug?: boolean };

export function ArduinoCanvas({ debug = false }: ArduinoCanvasProps) {
  const [hovering, setHovering] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const defaultTargets: Record<string, HoverInfo> = {
    "node_id375_Material_218_0": {
      title: "Conector de alimentação (Power Jack)",
      description: "Conector de alimentação da placa — onde a fonte externa (adapter/barramento) é conectada para alimentar a placa.",
    },
    "node_id364_Material_222_0": { title: "Pinos digitais (I/O)", description: "Pinos de entrada e saída digitais — usados para sinais digitais como leitura de botões ou controle de LEDs/relés." },
    "node_id345_Material_232_0": { title: "Bateria / Suporte da bateria", description: "Suporte/compartimento da bateria — aqui é onde a(s) bateria(s) / power pack é/está conectado(a)." },
    "node_id304_Material_234_0": { title: "ICSP - MOSI", description: "ICSP — MOSI (Master Out Slave In): linha de dados do microcontrolador para o periférico." },
    "node_id345_Material_230_0": { title: "Suporte de bateria (segundo)", description: "Segundo suporte da bateria — segundo compartimento / montagem para baterias." },
    "node_id293_Material_258_0": { title: "Placa Arduino (principal)", description: "A placa Arduino — contém o microcontrolador, pinos e a placa principal do dispositivo." },
    "node_id294_Material_260_0": { title: "Conector / Porta (USB)", description: "Porta de alimentação/USB — local para plugar o cabo que fornece energia e/ou comunicação." },
    "node_id170_Material_53_0": { title: "ICSP - SCK", description: "ICSP — SCK: sinal de clock serial utilizado na interface SPI/ICSP." },
    "node_id170_Material_55_0": { title: "ICSP - MISO", description: "ICSP — MISO (Master In Slave Out): linha de dados do periférico para o microcontrolador." },
    "node_id170_Material_57_0": { title: "ICSP - RESET", description: "ICSP — RESET: pino de reset usado para reiniciar o microcontrolador durante programação." },
    "node_id170_Material_59_0": { title: "ICSP - VCC", description: "ICSP — VCC: alimentação (tensão de referência) usada durante programação." },
    "node_id170_Material_61_0": { title: "ICSP - MOSI", description: "ICSP — MOSI (Master Out Slave In): linha de dados do microcontrolador para o periférico." },
    "node_id170_Material_63_0": { title: "ICSP - GND", description: "ICSP — GND: referência de terra (massa)." },
    "node_id184_Material_65_0": { title: "ICSP - RESET", description: "ICSP — RESET: pino de reset usado para reiniciar o microcontrolador durante programação." },
    "node_id184_Material_67_0": { title: "ICSP - MISO", description: "ICSP — MISO (Master In Slave Out): linha de dados do periférico para o microcontrolador." },
    "node_id184_Material_69_0": { title: "ICSP - GND", description: "ICSP — GND: referência de terra (massa)." },
    "node_id184_Material_71_0": { title: "ICSP - SCK", description: "ICSP — SCK: sinal de clock serial utilizado na interface SPI/ICSP." },
    "node_id184_Material_73_0": { title: "ICSP - VCC", description: "ICSP — VCC: alimentação (tensão de referência) usada durante programação." },
    "node_id184_Material_75_0": { title: "ICSP - MOSI", description: "ICSP — MOSI (Master Out Slave In): linha de dados do microcontrolador para o periférico." },
    "node_id304_Material_236_0": { title: "ICSP - VCC", description: "ICSP — VCC: alimentação (tensão de referência) usada durante programação." },
    "node_id304_Material_238_0": { title: "ICSP - GND", description: "ICSP — GND: referência de terra (massa)." },
    "node_id304_Material_240_0": { title: "ICSP - RESET", description: "ICSP — RESET: pino de reset usado para reiniciar o microcontrolador durante programação." },
    "node_id304_Material_242_0": { title: "ICSP - SCK", description: "ICSP — SCK: sinal de clock serial utilizado na interface SPI/ICSP." },
    "node_id304_Material_244_0": { title: "ICSP - MISO", description: "ICSP — MISO (Master In Slave Out): linha de dados do periférico para o microcontrolador." },
    "node_id304_Material_246_0": { title: "ICSP - GND", description: "ICSP — GND: referência de terra (massa)." },
    "node_id304_Material_248_0": { title: "ICSP - SCK", description: "ICSP — SCK: sinal de clock serial utilizado na interface SPI/ICSP." },
    "node_id304_Material_250_0": { title: "ICSP - MISO", description: "ICSP — MISO (Master In Slave Out): linha de dados do periférico para o microcontrolador." },
    "node_id304_Material_252_0": { title: "ICSP - RESET", description: "ICSP — RESET: pino de reset usado para reiniciar o microcontrolador durante programação." },
    "node_id304_Material_254_0": { title: "ICSP - VCC", description: "ICSP — VCC: alimentação (tensão de referência) usada durante programação." },
    "node_id304_Material_256_0": { title: "ICSP - MOSI", description: "ICSP — MOSI (Master Out Slave In): linha de dados do microcontrolador para o periférico." },
    "node_id364_Material_224_0": { title: "Pinos digitais (I/O)", description: "Pinos de entrada e saída digitais — usados para sinais digitais como leitura de botões ou controle de LEDs/relés." },
    "node_id364_Material_226_0": { title: "Pinos analógicos (A0..An)", description: "Pinos de entrada analógica — usados para leitura de sensores analógicos (tensão contínua)." },
    "node_id364_Material_228_0": { title: "Pinos de alimentação (5V/GND)", description: "Pinos de alimentação — fornecem 5V, 3.3V e GND para alimentar sensores e módulos." },
    "node_id375_Material_220_0": { title: "Microcontrolador (IC1)", description: "Microcontrolador principal da placa (IC1) — processador responsável pela execução do firmware." },
  };

  const [hoverTargets] = useState<Record<string, HoverInfo>>(defaultTargets);

  return (
    <div className="w-full h-[340px] sm:h-[420px] rounded-3xl overflow-hidden relative">
      <Canvas camera={{ position: [0, 1.2, 3.2], fov: 45 }} gl={{ alpha: true }}>
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
          <ArduinoModel onHoverChange={setHovering} onSelect={(name) => setSelectedPart(name)} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={6}
        />
      </Canvas>

      {/* bottom overlay: show selected part info or default help */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm text-center text-slate-700 bg-transparent">
        {selectedPart ? (
          <div className="flex flex-col items-center gap-1">
            <div className="font-semibold">{hoverTargets[selectedPart]?.title ?? selectedPart}</div>
            <div className="text-xs">{hoverTargets[selectedPart]?.description ?? ''}</div>
          </div>
        ) : (
          <div>Passe o mouse ou toque na placa para interagir. Use zoom para aproximar.</div>
        )}
      </div>
    </div>
  );
}

useGLTF.preload("/models/arduino.glb");
