import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./GameGrid.css";
import styles from "./GameSection.module.css";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default function GameSection({ title, genre }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGamesByGenre() {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=8`
        );
        const data = await response.json();
        setGames(data.results || []);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    }

    fetchGamesByGenre();
  }, [genre]);

  return (
    <div className="section">
      <div className="row">
        <h2 className="genre">{title}</h2>
        <a className="viewMore" href="#">
          View More →
        </a>
      </div>

      <div className="grid">
        {games.map((game) => (
          <Cards key={game.id} img={game.background_image} title={game.name} />
        ))}
      </div>
    </div>
  );
}
