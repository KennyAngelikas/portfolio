import React, { useState } from 'react';
import { Html, useTexture } from '@react-three/drei';
import '../../styles/BaseCamp.css'; // Import the CSS file


const BaseCamp = () => {
  const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility

  const campTexture = useTexture('/camp-icon.png'); // Replace with your image path

  // Handle icon click
  const handleIconClick = () => {
    setShowPopup(!showPopup); // Toggle pop-up visibility
  };

  return (
    <>
      {/* Camp Icon */}
      <mesh position={[.44, -0.2, .2]} onClick={handleIconClick} rotation={[-Math.PI / 100000, .85, 0]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshStandardMaterial map={campTexture} transparent={true} />
      </mesh>

      {/* Pop-Up */}
      {showPopup && (
        <Html position={[2, 0.5, 1]} center>
          <div className="popup">
            <h3>Home Camp</h3>
            <p>Welcome to my home camp. Click the icon to close.</p>
          </div>
        </Html>
      )}
    </>
  );
};

export default BaseCamp;
