import car from './assets//ferrari.glb'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Environment, useGLTF, useHelper } from "@react-three/drei";
import { useSnapshot } from 'valtio';
import state from './Store';
import { DirectionalLightHelper } from 'three';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF(car);
  const groupRef = useRef();

  // Rotate the group in each frame
  useFrame((camera, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * Math.PI/6; // Adjust the rotation speed as needed
    }
  });

  const states = useSnapshot(state);
    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper, 1, 0xff0000);
  return (
    <>
      <directionalLight ref={directionalLightRef} position={[-10, 5, 10]} />
      <hemisphereLight />
      <ambientLight />
      <group {...props} dispose={null} ref={groupRef}>
        <group name="Root_Scene">
          <group name="RootNode" userData={{ name: "RootNode" }}>
            <group
              name="main"
              position={[0.00000149, 0.67618072, 0.00000267]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              userData={{ name: "main" }}
            >
              <mesh
                name="trim"
                geometry={nodes.trim.geometry}
                material={materials.Leather_red}
                position={[-0.37913266, -0.00438786, -0.01592972]}
                userData={{ name: "trim" }}
              />
              <mesh
                name="lights_red"
                geometry={nodes.lights_red.geometry}
                material={materials.Taillight_Glass}
                position={[0.91318965, -0.0039798, -0.00631989]}
                userData={{ name: "lights_red" }}
              />
              <mesh
                name="plastic_gray"
                geometry={nodes.plastic_gray.geometry}
                material={materials.plastic_gray}
                position={[0.10842833, -0.0009726, -0.0287056]}
                userData={{ name: "plastic_gray" }}
              />
              <mesh
                name="metal"
                geometry={nodes.metal.geometry}
                material={materials.metal_gray}
                position={[0.21765935, -0.00488127, -0.00198959]}
                userData={{ name: "metal" }}
              />
              <mesh
                name="lights"
                geometry={nodes.lights.geometry}
                material={materials.Projector_Glass}
                position={[-1.84539521, -0.00198486, -0.06746128]}
                userData={{ name: "lights" }}
              />
              <mesh
                name="leds"
                geometry={nodes.leds.geometry}
                material={materials.Turn_Signal_LED}
                position={[-1.26507676, -0.00097282, 0.02213913]}
                userData={{ name: "leds" }}
              />
              <mesh
                name="leather"
                geometry={nodes.leather.geometry}
                material={materials.Leather}
                position={[-0.34772885, -0.00202526, -0.03095535]}
                userData={{ name: "leather" }}
              />
              <mesh
                name="interior_light"
                geometry={nodes.interior_light.geometry}
                material={materials.Interior_dark}
                position={[0.0046936, -0.00388454, -0.00350235]}
                userData={{ name: "interior_light" }}
              />
              <mesh
                name="grills"
                geometry={nodes.grills.geometry}
                material={materials.Tires}
                position={[0.04835952, -0.0068356, -0.03299027]}
                userData={{ name: "grills" }}
              />
              <mesh
                name="glass"
                geometry={nodes.glass.geometry}
                material={materials.Glass_Gray}
                position={[0.00117645, -0.00191101, 0.19360428]}
                userData={{ name: "glass" }}
              />
              <mesh
                name="chrome"
                geometry={nodes.chrome.geometry}
                material={materials.metal_chrome}
                position={[0.03319404, 3e-8, 0.00672882]}
                userData={{ name: "chrome" }}
              />
              <mesh
                name="carpet"
                geometry={nodes.carpet.geometry}
                material={materials.Carpet}
                position={[-0.28055084, -0.00400013, -0.23455665]}
                userData={{ name: "carpet" }}
              />
              <mesh
                name="carbon_fibre_trim"
                geometry={nodes.carbon_fibre_trim.geometry}
                material={materials.Carbon_Fiber}
                position={[-0.17742616, -0.00208862, -0.04018749]}
                userData={{ name: "carbon_fibre_trim" }}
              />
              <mesh
                name="carbon_fibre"
                geometry={nodes.carbon_fibre.geometry}
                material={materials.Carbon_Fiber}
                position={[-0.43787241, -0.3459782, 0.11790679]}
                userData={{ name: "carbon fibre" }}
              />
              <mesh
                name="brakes"
                geometry={nodes.brakes.geometry}
                material={materials.Taillight_Glass}
                position={[1.98945916, -0.00397812, 0.19985366]}
                userData={{ name: "brakes" }}
              />
              <mesh
                name="interior_dark"
                geometry={nodes.interior_dark.geometry}
                material={materials.Interior_light}
                position={[0.00335747, 4e-8, 0.01057892]}
                userData={{ name: "interior_dark" }}
              />
              <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={materials.Body_Color}
                position={[-0.00539162, 0, 0.02199158]}
                userData={{ name: "body" }}
              >
                {/* Access the material and set its color based on state.color */}
                <meshStandardMaterial attach="material" color={states.color} />
              </mesh>
              <mesh
                name="blue"
                geometry={nodes.blue.geometry}
                material={materials._0098_DodgerBlue}
                position={[-0.34961891, -0.43509573, 0.06762818]}
                userData={{ name: "blue" }}
              />
              <mesh
                name="wipers"
                geometry={nodes.wipers.geometry}
                material={materials.Tires}
                position={[-1.08888471, 0.00648087, 0.10959136]}
                userData={{ name: "wipers" }}
              />
              <mesh
                name="yellow_trim"
                geometry={nodes.yellow_trim.geometry}
                material={materials.Ferrari_Yellow}
                position={[-1.39713192, -0.0028511, 0.04682754]}
                userData={{ name: "yellow_trim" }}
              />
            </group>
            <group
              name="wheel_rr"
              position={[0.82438946, 0.35802299, 1.49632227]}
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "wheel_rr" }}
            >
              <mesh
                name="wheel"
                geometry={nodes.wheel.geometry}
                material={materials.metal_gray}
                position={[-0.00005096, 0.0000705, -0.00052338]}
                userData={{ name: "wheel" }}
              />
              <mesh
                name="tire"
                geometry={nodes.tire.geometry}
                material={materials.Tires}
                position={[-0.00540466, 3.1e-7, 0]}
                userData={{ name: "tire" }}
              />
              <mesh
                name="rim_rr"
                geometry={nodes.rim_rr.geometry}
                material={materials.metal_gray}
                position={[0.12525482, -0.00001236, -0.00053162]}
                userData={{ name: "rim_rr" }}
              />
              <mesh
                name="centre"
                geometry={nodes.centre.geometry}
                material={materials.Ferrari_Yellow}
                position={[0.11268456, -0.00001617, -0.00052338]}
                userData={{ name: "centre" }}
              />
              <mesh
                name="brake"
                geometry={nodes.brake.geometry}
                material={materials.metal_gray}
                position={[0.00889503, 0.00115845, -0.00059219]}
                rotation={[-1.7e-7, 0, 0]}
                userData={{ name: "brake" }}
              />
              <mesh
                name="nuts"
                geometry={nodes.nuts.geometry}
                material={materials.Interior_dark}
                position={[0.10288993, 0.0000061, 0.00643936]}
                userData={{ name: "nuts" }}
              />
            </group>
            <group
              name="wheel_rl"
              position={[-0.82134306, 0.35802358, 1.49499452]}
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "wheel_rl" }}
            >
              <mesh
                name="tire_1"
                geometry={nodes.tire_1.geometry}
                material={materials.Tires}
                position={[0.0055304, -1.5e-7, 0]}
                userData={{ name: "tire" }}
              />
              <mesh
                name="brake_1"
                geometry={nodes.brake_1.geometry}
                material={materials.metal_gray}
                position={[-0.01750015, -0.00118027, -0.00059082]}
                userData={{ name: "brake" }}
              />
              <mesh
                name="centre_1"
                geometry={nodes.centre_1.geometry}
                material={materials.Ferrari_Yellow}
                position={[-0.11271393, -0.0000943, -0.00052322]}
                userData={{ name: "centre" }}
              />
              <mesh
                name="wheel_1"
                geometry={nodes.wheel_1.geometry}
                material={materials.metal_gray}
                position={[0.00005966, -0.00000778, -0.00052322]}
                userData={{ name: "wheel" }}
              />
              <mesh
                name="rim_rl"
                geometry={nodes.rim_rl.geometry}
                material={materials.metal_gray}
                position={[-0.12526368, -0.00015427, -0.00053146]}
                userData={{ name: "rim_rl" }}
              />
              <mesh
                name="nuts_1"
                geometry={nodes.nuts_1.geometry}
                material={materials.Interior_dark}
                position={[-0.10290954, -0.00007034, 0.00643944]}
                userData={{ name: "nuts" }}
              />
            </group>
            <group
              name="wheel_fl"
              position={[-0.84256142, 0.35802284, -1.15531802]}
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "wheel_fl" }}
            >
              <mesh
                name="rim_fl"
                geometry={nodes.rim_fl.geometry}
                material={materials.metal_gray}
                position={[-0.11386665, 0.00014549, -0.00053162]}
                userData={{ name: "rim_fl" }}
              />
              <mesh
                name="brake_2"
                geometry={nodes.brake_2.geometry}
                material={materials.metal_gray}
                position={[-0.00204422, -0.00149857, -0.00058105]}
                rotation={[-0.00000113, 0, 0]}
                userData={{ name: "brake" }}
              />
              <mesh
                name="centre_2"
                geometry={nodes.centre_2.geometry}
                material={materials.Ferrari_Yellow}
                position={[-0.10246849, 0.00014008, -0.00052338]}
                userData={{ name: "centre" }}
              />
              <mesh
                name="nuts_2"
                geometry={nodes.nuts_2.geometry}
                material={materials.Interior_dark}
                position={[-0.09356125, 0.0001545, 0.00643936]}
                userData={{ name: "nuts" }}
              />
              <mesh
                name="wheel_2"
                geometry={nodes.wheel_2.geometry}
                material={materials.metal_gray}
                position={[0.00004494, 0.00022659, -0.00052338]}
                userData={{ name: "wheel" }}
              />
              <mesh
                name="tire_2"
                geometry={nodes.tire_2.geometry}
                material={materials.Tires}
                position={[0.00502281, 0, 0]}
                userData={{ name: "tire" }}
              />
            </group>
            <group
              name="wheel_fr"
              position={[0.82868993, 0.36065498, -1.154459]}
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "wheel_fr" }}
            >
              <mesh
                name="brake_3"
                geometry={nodes.brake_3.geometry}
                material={materials.metal_gray}
                position={[0.00133217, 0.00014587, -0.00060547]}
                rotation={[-1.7e-7, 0, -3e-7]}
                userData={{ name: "brake" }}
              />
              <mesh
                name="centre_3"
                geometry={nodes.centre_3.geometry}
                material={materials.Ferrari_Yellow}
                position={[0.10245971, -0.00009445, -0.00052338]}
                userData={{ name: "centre" }}
              />
              <mesh
                name="wheel_3"
                geometry={nodes.wheel_3.geometry}
                material={materials.metal_gray}
                position={[-0.00003517, -0.00000786, -0.00052322]}
                userData={{ name: "wheel" }}
              />
              <mesh
                name="rim_fr"
                geometry={nodes.rim_fr.geometry}
                material={materials.metal_gray}
                position={[0.11385696, -0.00015442, -0.00053162]}
                userData={{ name: "rim_fr" }}
              />
              <mesh
                name="tire_3"
                geometry={nodes.tire_3.geometry}
                material={materials.Tires}
                position={[-0.00501312, 8e-8, 0]}
                userData={{ name: "tire" }}
              />
              <mesh
                name="nuts_3"
                geometry={nodes.nuts_3.geometry}
                material={materials.Interior_dark}
                position={[0.09354927, -0.00008522, 0.00643948]}
                userData={{ name: "nuts" }}
              />
            </group>
            <group
              name="steering_wheel"
              position={[-0.34596446, 0.79886854, -0.34565657]}
              rotation={[-1.9198622, 0, 0]}
              userData={{ name: "steering_wheel" }}
            >
              <mesh
                name="steering_carbon"
                geometry={nodes.steering_carbon.geometry}
                material={materials.Carbon_Fiber}
                position={[0.00027054, 0.01551035, 0.0062072]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_carbon" }}
              />
              <mesh
                name="steering_centre"
                geometry={nodes.steering_centre.geometry}
                material={materials.Ferrari_Yellow}
                position={[0, -4e-8, 0]}
                rotation={[-6e-8, 6e-8, 0]}
                userData={{ name: "steering_centre" }}
              />
              <mesh
                name="steering_column"
                geometry={nodes.steering_column.geometry}
                material={materials.Interior_dark}
                position={[-0.00006088, 0.06820706, -0.01466804]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_column" }}
              />
              <mesh
                name="steering_leather"
                geometry={nodes.steering_leather.geometry}
                material={materials.Leather}
                position={[0.00005562, 0.0153669, 0.00707573]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_leather" }}
              />
              <mesh
                name="steering_metal"
                geometry={nodes.steering_metal.geometry}
                material={materials.metal_gray}
                position={[0.08623981, 0.02106838, -0.06617431]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_metal" }}
              />
              <mesh
                name="steering_red_lights"
                geometry={nodes.steering_red_lights.geometry}
                material={materials.Taillight_Glass}
                position={[0.00560841, 0.0200382, -0.07157554]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_red_lights" }}
              />
              <mesh
                name="steering_trim"
                geometry={nodes.steering_trim.geometry}
                material={materials.Leather_red}
                position={[-0.00048302, 0.0158823, -0.07527183]}
                rotation={[Math.PI / 9, 6e-8, -3e-8]}
                userData={{ name: "steering_trim" }}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        name="stand"
        position={[0, -0.5, 0]} // Adjust the position based on your model's size
      >
        <cylinderGeometry attach="geometry" args={[3, 3, 1, 60]} />
        <meshStandardMaterial attach="material" color='gray' />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
}


export default Model