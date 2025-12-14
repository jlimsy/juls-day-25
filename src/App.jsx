import { Canvas } from "@react-three/fiber";
import { Pokeball } from "./Pokeball";
import { Takoyaki } from "./Takoyaki";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div id="canvas-container" className="h-screen w-screen">
      <Canvas>
        <Environment preset="sunset" />
        <Pokeball setShowText={setShowText} />
        <Takoyaki />
        <Html fullscreen>
          <div className="flex flex-col justify-between h-full ">
            <div className="border-1 rounded m-4 font-mono text-xs p-4">
              <p className="animate-typing">Welcome Sir Jules,</p>
              <p className="animate-typing">Click to open the pokeball!</p>
            </div>
            {showText && (
              <div className="border-1 rounded m-4">
                <p className="font-mono text-xs p-4 animate-typing">
                  TakoYaki, I choose you!
                </p>
              </div>
            )}
          </div>
        </Html>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
