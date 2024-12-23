import React from 'react';
import { useGLTF } from '@react-three/drei';

const ElCapitanModel = () => {
  const { scene } = useGLTF('/el_capitan.glb');
  return <primitive object={scene} />;
};

export default ElCapitanModel;
