import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <Suspense fallback={<Loader />}>

    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    </Suspense>
  );
}

export default App;
