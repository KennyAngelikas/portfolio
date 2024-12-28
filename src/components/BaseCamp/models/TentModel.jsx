import React from 'react';
import { useGLTF } from '@react-three/drei';

const BackpackModel = () => {
  const { scene } = useGLTF('/tent.glb');
  return <primitive object={scene} />;
};

export default BackpackModel;