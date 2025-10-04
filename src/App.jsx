import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/cards";


function App() {
    return (
        <div>
            <Navbar />
            <main>
                <h2>Helloooooo, welcome to GamesVault!</h2>
                <p>Start exploring your favorite games!</p>
                <Cards />
            </main>
        </div>
    );
}

export default App;
