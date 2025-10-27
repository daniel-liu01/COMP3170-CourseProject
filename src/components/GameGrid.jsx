import React from "react";
import GameSection from "./GameSection";
import "./GameGrid.css";

export default function GameGrid() {
  return (
    <div className="container">
      <GameSection title="Indie" genre="indie" />
      <GameSection title="Action" genre="action" />
      <GameSection title="RPG" genre="role-playing-games-rpg" />
    </div>
  );
}
