import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { fetchGames } from "../api/rawg.js";

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const data = await fetchGames();
      setGames(data);
    }
    loadGames();
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <main>
        <div className="Desc"></div>
        <GameGrid />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
