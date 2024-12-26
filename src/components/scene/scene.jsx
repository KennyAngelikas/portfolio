import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BaseCampIcon from '../BaseCamp/BaseCampIcon';
import SidePanel from '../BaseCamp/BaseCampSidePanel';
import ElCapModel from './ElCapModel';
import LoadZoomIn from './LoadZoomIn';
import DynamicFOV from './DynamicFOV';
import './Scene.css';

const Scene = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsPanelOpen(true);
  const handleClosePanel = () => setIsPanelOpen(false);

  return (
    <div className="scene-container">
      {/* Side Panel */}
      <SidePanel isPanelOpen={isPanelOpen} onClose={handleClosePanel} />

      {/* 3D Canvas */}
      <div className={`canvas-container ${isPanelOpen ? 'shifted' : ''}`}>
        <Canvas
          style={{ height: '100vh', width: '100vw' }}
          camera={{ position: [12, 2, 10], fov: 50 }} // Start with a wider FOV
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <ElCapModel />
          <BaseCampIcon onOpenPanel={handleOpenPanel} />
          <LoadZoomIn /> {/* Initial load zoom-in */}
          <DynamicFOV isPanelOpen={isPanelOpen} /> {/* Panel-based FOV adjustments */}
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
