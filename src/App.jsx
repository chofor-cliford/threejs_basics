import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "./Store";
import { Canvas } from "@react-three/fiber";
import scene from "./assets/ferrari.glb";
import { Loader, OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import Model from "./Model";
import { Suspense} from "react";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div style={{position: 'absolute', top: "20px", right: 4}}>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

const Scene = () => {
  const gltf = useGLTF(scene);
  console.log(gltf);
  return (
    <mesh>
      <Sphere />
    </mesh>
  );
};

const App = () => {

  return (
    <>
        <Suspense fallback={<Loader />}>
      <Canvas>
          <Model />
      <OrbitControls />
      </Canvas>
        </Suspense>
      <ColorPicker />
    </>
  );
};

export default App;
