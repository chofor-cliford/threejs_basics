import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PresentationControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import CameraRig from "./Spider";
import TextBox from "./TextBox";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <Model />

        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </Suspense>
  );
};

export default App;
