import { useEffect, useState } from "react";
import "./SaveGameButton.css";

function SaveGameButton({ game }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!game || !game.id) {
      return;
    }

    try {
      const savedGames = localStorage.getItem("savedGames");
      if (savedGames) {
        const parsedGames = JSON.parse(savedGames);
        const alreadySaved = parsedGames.some((item) => item.id === game.id);
        setIsSaved(alreadySaved);
      }
    } catch (error) {
      console.error("Could not read saved games", error);
    }
  }, [game]);

  const handleSaveClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!game || !game.id) {
      console.warn("Missing game information");
      return;
    }

    try {
      const savedGames = localStorage.getItem("savedGames");
      const parsedGames = savedGames ? JSON.parse(savedGames) : [];

      const alreadySaved = parsedGames.some((item) => item.id === game.id);
      if (alreadySaved) {
        const filteredGames = parsedGames.filter((item) => item.id !== game.id);
        localStorage.setItem("savedGames", JSON.stringify(filteredGames));
        setIsSaved(false);
      } else {
        parsedGames.push(game);
        localStorage.setItem("savedGames", JSON.stringify(parsedGames));
        setIsSaved(true);
      }
    } catch (error) {
      console.error("Could not save game", error);
    }
  };

  return (
    <button
      type="button"
      className={isSaved ? "save-game-button saved" : "save-game-button"}
      aria-label={isSaved ? "Game saved" : "Save game"}
      aria-pressed={isSaved}
      onClick={handleSaveClick}
    >
      {isSaved ? (
        <svg
          className="save-game-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
        </svg>
      ) : (
        <svg
          className="save-game-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="#e3e3e3"
          aria-hidden="true"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
        </svg>
      )}
    </button>
  );
}

export default SaveGameButton;

