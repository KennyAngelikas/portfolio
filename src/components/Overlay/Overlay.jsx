// Overlay.js
import { TypeAnimation } from 'react-type-animation';
import './Overlay.css';
import React, { useEffect, useState, useRef } from 'react';

function Overlay({ onFinish }) {
  const [animationComplete, setAnimationComplete] = useState(false); // State to track animation completion
  const overlayRef = useRef(null); // Reference to the overlay div


  // Function to trigger the fade-out effect
  const fadeOut = () => {
    if (overlayRef.current) {
      overlayRef.current.classList.add('fade-out'); // Add the fade-out class
      setTimeout(() => onFinish(), 1000); // Call onFinish after 1 second (fade-out duration)
    }
  };

  // Define Variables
  const fadeOutBuffer = 6500;
  const fadeOutDuration = 1000;
  const speed = 50;
  const repeat = 0;

  // Messages to display
  const messages = [
    { text: "Hi! my name is Kenneth Angelikas.", pause: 1000 },
    { text: "You can call me Kenny, this is my portfolio.", pause: 1500 },
    { text: "", pause: 500 }, // Backspace
    { text: "Enter", pause: 0 },
  ];

  // Generate sequence dynamically
  const generateSequence = () => {
    const sequence = [];
    messages.forEach(({ text, pause }) => {
      sequence.push(text, pause);
    });
    sequence.push(() => setAnimationComplete(true)); // Add callback at the end
    return sequence;
  };

  // Handle user actions (keyboard or click)
  const handleUserAction = (event) => {
    if (animationComplete && (event.type === "click" || event.key === "Enter")) {
      fadeOut(); // Trigger the onFinish callback when animation is done
    }
  };

  useEffect(() => {
    // Add event listeners for keyboard and click actions
    document.addEventListener('keydown', handleUserAction);
    document.addEventListener('click', handleUserAction);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('keydown', handleUserAction);
      document.removeEventListener('click', handleUserAction);
    };
  }, [animationComplete]);

  return (
    <div className="fullscreen" ref={overlayRef}>
      <TypeAnimation
        sequence={generateSequence()} // Use the generated sequence
        speed={speed} // Typing speed
        repeat={repeat} // Repeat animation
      />
    </div>
  );
}

export default Overlay;
