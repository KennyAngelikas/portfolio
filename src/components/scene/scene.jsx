import React, { useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import ElCapModel from './elCapModel';
import BaseCamp from './BaseCamp'; 

const DynamicFOV = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial FOV (optional)
    camera.fov = 25; // Starting FOV
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    // Adjust FOV dynamically
    if (camera.fov > 6) {
      camera.fov -= 0.28; // Gradually reduce FOV (zoom in)
      camera.updateProjectionMatrix();
    }
  });

  return null;
};

const Scene = () => (
  <Canvas
    style={{ height: '100vh', width: '100vw' }}
    camera={{ position: [12, 2, 10], fov: 6 }} // Starting position and FOV
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} />
    <ElCapModel />
    <DynamicFOV />


    <BaseCamp />

    <OrbitControls />
  </Canvas>
);

export default Scene;