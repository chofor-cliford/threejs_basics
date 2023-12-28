import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import parrot from "./assets/Parrot.glb";
import TextBox from "./TextBox";

const Bird = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(parrot);
  const { actions } = useAnimations(animations, group);

  //    const { x1, y1, z1 } = useControls("Bird Position", {
  //      x1: { value: 0, min: 0, max: 10 },
  //      y1: { value: 0, min: 0, max:10  },
  //      z1: { value: 0, min: 0, max: 10 },
  //    });

  useEffect(() => {
    actions["parrot_A_"].play();
  });

  return (
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
      </group>
      <TextBox text="Life is easy, “Fear not,” it sang, “storms pass, and dawn paints hope anew.” 🕊️✨" />
    </group>
  );
};

export default Bird;
