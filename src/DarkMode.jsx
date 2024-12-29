import React, { useState } from "react";
import "./DarkMode.css";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Toggle styles for body and scene-container
    document.body.style.backgroundColor = isDarkMode ? "#f5f5f5" : "#121212"; // Softer colors
    document.body.style.color = isDarkMode ? "#333" : "#eaeaea"; // Adjust text color

    const scene = document.querySelector(".scene-container");
    if (scene) {
      scene.style.backgroundColor = isDarkMode ? "#f5f5f5" : "#121212";
    }
  };

  return (
    <div className="nameDarkMode-container" onClick={handleToggle}>
      KA
    </div>
  );
};

export default DarkModeButton;
