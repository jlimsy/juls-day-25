import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container" className="h-screen w-screen">
      <div className="text-amber-300 text-3xl font-bold">hello</div>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
