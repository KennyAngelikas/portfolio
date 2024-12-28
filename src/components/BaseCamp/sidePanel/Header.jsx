import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      <div className="header-section">
        <h1 className="header-title">Base Camp</h1>
      </div>
      
      <nav className="nav-links">
        <a href="#kenny" className="nav-link">
          Kenny
        </a>
        <a href="#gear" className="nav-link">
          Gear
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

    </header>
  );
};

export default Header;
