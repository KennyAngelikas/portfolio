import React from 'react';
import '../../styles/BaseCampSidePanel.css'; // Add a dedicated CSS file for styling

const BaseCampSidePanel = ({ isPanelOpen, onClose }) => {
  return (
    <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h2>Home Camp</h2>
      <p>Welcome to my home camp. This is where I rest and recharge!</p>
    </div>
  );
};

export default BaseCampSidePanel;