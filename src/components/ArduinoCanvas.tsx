// Re-export the improved three-based ArduinoCanvas so all imports use the same
// interactive component. This keeps both `@/components/ArduinoCanvas` and
// `@/components/three/ArduinoCanvas` consistent.
export { ArduinoCanvas } from "./three/ArduinoCanvas";
