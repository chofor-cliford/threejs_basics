import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PresentationControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import CameraRig from "./Spider";

const App = () => {
  return (
        <Suspense fallback={<Loader />}>
    <Canvas fov={35}
        near={0.01}
        far={100}>

          <Model />
          <OrbitControls />
    </Canvas>
        </Suspense>
  );
};

export default App;
