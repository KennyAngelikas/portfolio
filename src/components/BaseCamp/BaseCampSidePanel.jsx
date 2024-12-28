import React, { useState } from 'react';
import './BaseCampSidePanel.css';
import images from '../../config/imageConfig'; // Import the images array
import Header from './sidePanel/Header';

const BaseCampSidePanel = ({ isPanelOpen, onClose }) => {

  return (
    <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
      {/* Header Section */}
      <Header onClose={onClose} />

      {/* Logo (acts as close button) */}
      <div className="logo-container" onClick={onClose}>
        <img
          src="/camp-icon.png" // Replace with your logo
          alt="Base Camp Logo"
          className="logo"
        />
      </div>

    </div>
  );
};

export default BaseCampSidePanel;
