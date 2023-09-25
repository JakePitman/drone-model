"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Drone } from "./Drone.tsx";

export const Experience = () => {
  return (
    <Canvas>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight />

      <Environment preset="city" background />

      <Drone />
    </Canvas>
  );
};
