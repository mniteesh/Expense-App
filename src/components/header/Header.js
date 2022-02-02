import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xepenses <i className="fas fa-credit-card"></i>
        </div>
        <div className="header-button">
          <a href="/" target="_blank" rel="noopner noreferrer">
            <i className="fab fa-github"></i> Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
