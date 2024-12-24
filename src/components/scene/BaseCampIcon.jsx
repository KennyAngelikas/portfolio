import React, { useRef, useState } from 'react';
import { useTexture } from '@react-three/drei';
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'; // Import THREE for DoubleSide
import '../../styles/BaseCampIcon.css'; // Import the CSS file


const BaseCampIcon = ({ onOpenPanel }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const iconRef = useRef();
  const campTexture = useTexture('/camp-icon.png'); // Replace with your image path

  // Rotate the icon slowly
  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.005; // Rotate around the Y-axis
      // iconRef.current.rotation.x += 0; // Rotate slightly around the X-axis
    }
  });

  return (
    <>
      {/* Camp Icon */}
      <mesh 
        ref={iconRef}
        position={[.44, -0.17, .2]} 
        rotation={[-Math.PI / 100000, .85, 0]}
        onClick={onOpenPanel} // Trigger panel open on click
        onPointerOver={() => setIsHovered(true)} // Start hover effect
        onPointerOut={() => setIsHovered(false)} // End hover effect
        scale={isHovered ? 1.2 : 1} // Slightly enlarge on hover
      >
        <planeGeometry args={[0.1, 0.1]} />
        <meshStandardMaterial 
          map={campTexture} 
          transparent={true}
          side={THREE.DoubleSide} 
          emissive={isHovered ? 'yellow' : 'black'} // Glow on hover
          emissiveIntensity={isHovered ? 0.5 : 0} // Adjust glow intensity
        />
      </mesh>
    </>
  );
};

export default BaseCampIcon;
