import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import profileIcon from "../assets/profile.svg";

export default function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        GamesVault
      </h1>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search games..."
          className="search-input"
        />
      </div>

      <div className="navbar-profile">
        <img
          src={profileIcon}
          alt="Profile"
          className="profile-icon"
          onClick={handleProfileClick}
        />
      </div>
    </nav>
  );
}
