import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";


function App() {
    return (
        <div>
            <Navbar />
            <main>
                <h2>Helloooooo, welcome to GamesVault!</h2>
                <p>Start exploring your favorite games!</p>
                <GameGrid />
            </main>
        </div>
    );
}

export default App;
