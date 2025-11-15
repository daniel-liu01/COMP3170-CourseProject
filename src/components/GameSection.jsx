import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./GameGrid.css";
import "./GameSection.css";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default function GameSection({ title, genre }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGamesByGenre() {
      try {
        // 1. Fetch games list
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=12`
        );
        const data = await response.json();

        // 2. Fetch details for each game to get publishers
        const gamesWithPublishers = await Promise.all(
          data.results.map(async (game) => {
            try {
              const detailRes = await fetch(
                `https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`
              );
              const detail = await detailRes.json();

              return {
                ...game,
                publisher:
                  detail.publishers?.map((p) => p.name).join(", ") || "Unknown",
              };
            } catch {
              return {
                ...game,
                publisher: "Unknown",
              };
            }
          })
        );

        setGames(gamesWithPublishers);
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
          <Cards
            key={game.id}
            img={game.background_image}
            title={game.name}
            publisher={game.publisher}
          />
        ))}
      </div>
    </div>
  );
}
