import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import parrot from "./assets/Parrot.glb";
import TextBox from "./TextBox";
import { useSnapshot } from "valtio";
import state from "./Store";

const Bird = () => {
  const group = useRef();
  const textRef = useRef();
  const states = useSnapshot(state);
  const { camera } = useThree();
  const { nodes, materials, animations } = useGLTF(parrot);
  const { actions } = useAnimations(animations, group);

  const text =
    'In life\'s symphony, let hope and courage take flight. A feathered messenger whispers, "Life is easy." Embrace simplicity, dance through challenges, and soar above uncertainties. Your journey, a melody of endless possibilities. 🕊️✨';

  //    const { x1, y1, z1 } = useControls("Bird Position", {
  //      x1: { value: 0, min: 0, max: 10 },
  //      y1: { value: 0, min: 0, max:10  },
  //      z1: { value: 0, min: 0, max: 10 },
  //    });

  useEffect(() => {
    actions["parrot_A_"].play();
  }, [actions]);
// Assuming camera and state are defined outside this component
// For example, you might have them in a parent component or a global state

useFrame(() => {
  const minY = 0;
  const maxY = 0.3;

  // Assuming camera.position.y is within the range [minY, maxY]
  const normalizedY = (camera.position.y - minY) / (maxY - minY);

  // Now normalizedY is between 0 and 1
  if (normalizedY >= 0 && normalizedY <= 1) {
    state.isShowTxt = true;
  } else {
    state.isShowTxt = false;
  }
});

  return (
    <>
      <group ref={group} dispose={null} position={[0.6, 0.2, 2.4]} scale={0.01}>
        <group name="AuxScene">
          <mesh
            name="mesh_0"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
            morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
          />
          <TextBox
            const
            text={text}
            ref={textRef}
            position={[0.6, 0.2, 2.4]}
            isShowTxt={states.isShowTxt}
          />
        </group>
      </group>
    </>
  );
};

export default Bird;
