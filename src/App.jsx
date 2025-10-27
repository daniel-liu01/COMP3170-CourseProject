import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import FakeHero from "./components/fakeHero.jsx";
import { useEffect, useState } from "react";
import { fetchGames } from "../api/rawg.js";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const data = await fetchGames();
      setGames(data);
    }
    loadGames();
  }, []);
  return (
    <div>
      <Navbar />
      <FakeHero />
      <main>
        <div className="Desc">
          <h2>Helloooooo, welcome to GamesVault!</h2>
          <p>Start exploring your favorite games!</p>
        </div>
        <GameGrid />
      </main>
    </div>
  );
}

export default App;
