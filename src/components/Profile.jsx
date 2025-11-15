import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Navbar from "./Navbar";
import profileIcon from "../assets/profile.svg";

export default function Profile() {
  const [savedGames, setSavedGames] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Profile page loaded");
    // Load saved games from localStorage
    const saved = localStorage.getItem("savedGames");
    if (saved) {
      try {
        setSavedGames(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading saved games:", error);
      }
    }
    
    // Load profile image from localStorage
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);

  return (
    <div className="profile-wrapper">
      <Navbar />
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container">
              <img
                src={profileImage || profileIcon}
                alt="Profile"
                className="profile-image"
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "image/*";
                  input.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const imageUrl = event.target.result;
                        setProfileImage(imageUrl);
                        localStorage.setItem("profileImage", imageUrl);
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                  input.click();
                }}
              />
              <div className="profile-image-overlay">
                <span className="profile-image-edit-icon">add</span>
              </div>
            </div>
            <h1>My Profile</h1>
            <p className="profile-subtitle">
              Your saved games collection
            </p>
          </div>

          {savedGames.length === 0 ? (
            <div className="empty-state">
              <p className="empty-message">No saved games yet</p>
              <p className="empty-hint">
                Start bookmarking games to see them here!
              </p>
              <button
                className="browse-button"
                onClick={() => navigate("/")}
              >
                Browse Games
              </button>
            </div>
          ) : (
            <div className="saved-games-section">
              <h2 className="section-title">
                Saved Games ({savedGames.length})
              </h2>
              <div className="saved-games-grid">
                {savedGames.map((game) => (
                  <div key={game.id} className="saved-game-card">
                    {game.background_image && (
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="saved-game-image"
                      />
                    )}
                    <div className="saved-game-info">
                      <h3 className="saved-game-title">{game.name}</h3>
                      {game.publisher && (
                        <p className="saved-game-publisher">{game.publisher}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

