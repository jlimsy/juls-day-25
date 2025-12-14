import { Canvas } from "@react-three/fiber";
import { Pokeball } from "./Pokeball";
import { Takoyaki } from "./Takoyaki";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div id="canvas-container" className="h-screen w-screen">
      <Canvas>
        <Environment preset="sunset" />
        <Pokeball setShowText={setShowText} setShowMessage={setShowMessage} />
        <Takoyaki />
        <Html fullscreen>
          <div className="flex flex-col justify-between h-full ">
            <div className="border-1 rounded m-4 font-mono text-xs p-4">
              <p className="animate-typing">Welcome Sir Jules,</p>
              <p className="animate-typing">Click to open the pokeball!</p>
            </div>
            {showText && (
              <div className="flex flex-col gap-4 p-4">
                <div
                  className={`border rounded p-4 font-mono text-xs
        transition-transform duration-500 
        ${showMessage ? "translate-y-0 " : "translate-y-20 mb-4"}`}
                >
                  <p className="font-mono text-xs animate-typing">
                    TakoYaki, I choose you!
                  </p>
                </div>
                <div
                  className={`max-h-12 overflow-auto p-4 border border-black rounded bg-red-500 font-mono text-xs text-white
    opacity-0 transition-all duration-500 
    ${showMessage ? "opacity-100" : ""}`}
                >
                  <p className="font-mono text-xs text-white">
                    I wanted to make a TakoCat but sorry my skills are limited
                    at the moment. But I hope you like your TakoYaki! Anyway,
                    want to say Happy Birthday, and I am thankful that we met. I
                    love that you have such a big heart towards others and
                    towards me. & I can't wait to see what the future holds for
                    us!
                    <br />
                    <br />- From Your Future Princess
                  </p>
                </div>
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
