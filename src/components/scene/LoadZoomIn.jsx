import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const LoadZoomIn = () => {
  const { camera } = useThree();

  useEffect(() => {
    let zoomInterval;
    let initialFOV = 50; // Starting FOV
    const targetFOV = 6; // Final FOV

    zoomInterval = setInterval(() => {
      if (initialFOV > targetFOV) {
        initialFOV -= 0.5; // Gradually decrease FOV
        camera.fov = initialFOV;
        camera.updateProjectionMatrix();
      } else {
        clearInterval(zoomInterval); // Stop zooming when target FOV is reached
      }
    }, 16); // Smooth zooming with ~60 FPS

    return () => clearInterval(zoomInterval); // Cleanup on unmount
  }, [camera]);

  return null;
};

export default LoadZoomIn;
