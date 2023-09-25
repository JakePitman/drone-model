/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/drone.glb -o app/Drone.tsx -r public -k 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Drone(props) {
  const { nodes, materials } = useGLTF("/models/drone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="drone"
        geometry={nodes.drone.geometry}
        material={materials.Material_0}
        position={[0, 1.043, 0.13]}
        rotation={[0.051, 0.007, -0.026]}
      />
      <mesh
        name="Cylinder"
        geometry={nodes.Cylinder.geometry}
        material={materials.antenna}
        position={[2.06, 1.172, 0.07]}
        rotation={[1.642, -0.008, 2.931]}
        scale={[-0.049, -0.108, -0.05]}
      />
      <mesh
        name="prop"
        geometry={nodes.prop.geometry}
        material={materials.Propeller}
        position={[-0.843, 0.471, -0.723]}
        scale={0.253}
      />
      <mesh
        name="screws"
        geometry={nodes.screws.geometry}
        material={nodes.screws.material}
        position={[-0.847, 0.38, -0.76]}
        rotation={[-Math.PI, 0.943, -Math.PI]}
        scale={[0.027, 0.006, 0.027]}
      />
      <mesh
        name="prop-clockwise-1"
        geometry={nodes["prop-clockwise-1"].geometry}
        material={materials.Propeller}
        position={[-0.925, 0.227, 0.846]}
        scale={0.253}
      />
      <mesh
        name="screws001"
        geometry={nodes.screws001.geometry}
        material={nodes.screws001.material}
        position={[-0.923, 0.152, 0.773]}
        rotation={[-0.07, 1.386, 0.065]}
        scale={[0.027, 0.006, 0.027]}
      />
      <mesh
        name="prop-anticlockwise-2"
        geometry={nodes["prop-anticlockwise-2"].geometry}
        material={materials.Propeller}
        position={[0.661, 0.447, 0.897]}
        scale={0.253}
      />
      <mesh
        name="screws002"
        geometry={nodes.screws002.geometry}
        material={nodes.screws002.material}
        position={[0.636, 0.376, 0.854]}
        rotation={[0, 1.309, 0]}
        scale={[0.027, 0.006, 0.027]}
      />
      <mesh
        name="prop-clockwise-2"
        geometry={nodes["prop-clockwise-2"].geometry}
        material={materials.Propeller}
        position={[0.7, 0.231, -0.649]}
        scale={0.253}
      />
      <mesh
        name="screws003"
        geometry={nodes.screws003.geometry}
        material={nodes.screws003.material}
        position={[0.707, 0.152, -0.697]}
        rotation={[-Math.PI, 0.738, -Math.PI]}
        scale={[0.027, 0.006, 0.027]}
      />
    </group>
  );
}

useGLTF.preload("/models/drone.glb");