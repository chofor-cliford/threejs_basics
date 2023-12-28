import  { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Text, Text3D } from "@react-three/drei";
import { useSnapshot } from "valtio";
import  * as THREE from 'three'


const TextMarker = ({ position, text }) => {
  const { camera } = useThree();
  const textPosition = new THREE.Vector3(
    position[0],
    position[1],
    position[2]
  ).applyMatrix4(camera.matrixWorld);
  const [isVisible, setIsVisible] = useState(false);

  useFrame(() => {
    const distance = camera.position.distanceTo(textPosition);
    // Adjust this threshold based on when you want to show the text
    const showThreshold = 5;

    if (distance < showThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
   
      <Text3D position={textPosition} fontSize={0.3} color="white">{text}</Text3D>
  ) ;
};

const CameraRig = ({ children }) => {
  // Your existing code

  return (
    <>
      <group>{children}</group>
      <TextMarker position={[1, 5, 1]} text="Text at Point 1" />
      <TextMarker position={[6, 5, 1]} text="Text at Point 2" />
      {/* Add more TextMarker components for other points */}
    </>
  );
};

export default CameraRig;
