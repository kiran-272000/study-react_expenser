import React from "react";
import "./header.css";
import { FaGithub, FaCreditCard } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expenser{" "}
          <i>
            <FaCreditCard />
          </i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
