import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const DynamicFOV = ({ isPanelOpen }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Adjust FOV only when the panel is open
    if (isPanelOpen) {
      camera.fov = 10; // Wider FOV when panel is open
      camera.updateProjectionMatrix();
    }
  }, [camera, isPanelOpen]);

  return null;
};

export default DynamicFOV;
