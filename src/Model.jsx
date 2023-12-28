import React, { useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import sea from './assets/sea_keep_lonely_watcher.glb'
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import Bird from "./Bird";

const Model = (props) => {
  const { nodes, materials } = useGLTF(sea);
  const groupRef = useRef();
 const { camera } = useThree();

 // Leva controls for camera position
 const { x, y, z } = useControls("Camera Rotation", {
   x: { value: 0, min: 0, max: 100 },
   y: { value: -2 * Math.PI, min: 0, max: 2 * Math.PI },
   z: { value: 0, min: 0, max: 100 },
 });

 // Animation variables


  return (
    <>
<perspectiveCamera position={[10,10,10]} />
<ambientLight intensity={2} />
<Bird />
    <group {...props} dispose={null} scale={0.01} >
      <group ref={groupRef} rotation={[0, 0.78,1]} userData={{ name: "RootNode" }}>
        <group
          position={[17.117, 218.356, 23.591]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          userData={{ name: "Fortress" }}
        >
          <group
            position={[33.745, 38.713, -60.289]}
            userData={{ name: "Object_4" }}
          >
            <mesh
              geometry={nodes.Fortress_Fortress_0.geometry}
              material={materials.Fortress}
              userData={{ name: "Fortress_Fortress_0" }}
            />
            <mesh
              geometry={nodes.Fortress_Fortress_0_1.geometry}
              material={materials.Fortress}
              userData={{ name: "Fortress_Fortress_0" }}
            />
            <mesh
              geometry={nodes.Fortress_Fortress_0_2.geometry}
              material={materials.Fortress}
              userData={{ name: "Fortress_Fortress_0" }}
            />
            <mesh
              geometry={nodes.Fortress_Environment_0.geometry}
              material={materials.Environment}
              userData={{ name: "Fortress_Environment_0" }}
            />
            <mesh
              geometry={nodes.Fortress_Sand_0.geometry}
              material={materials.Sand}
              userData={{ name: "Fortress_Sand_0" }}
            />
          </group>
        </group>
        <mesh
          geometry={nodes.Sea_Sea_0.geometry}
          material={materials.material}
          position={[-1.388, 326.224, 14.92]}
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sea_Sea_0" }}
        />
        <mesh
          geometry={nodes.Sky_Sky_0.geometry}
          material={materials.material_4}
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sky_Sky_0" }}
        />
      </group>
    </group>
    <Environment preset="sunset" />
    </>
  );
}

export default Model
