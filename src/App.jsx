import { Canvas } from "@react-three/fiber";
import { Pokeball } from "./Pokeball";
import { Takoyaki } from "./Takoyaki";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div id="canvas-container" className="h-screen w-screen">
      <Canvas>
        <Environment preset="sunset" />

        <Pokeball />
        <Takoyaki />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
