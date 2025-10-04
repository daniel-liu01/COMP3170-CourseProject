import React from "react";
import "./GameGrid.css";

export default function GameGrid() {
    return (
        <div className="container">
            <div className="row">
                <h3>Indie</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>

            <div className="row">
                <h3>Action</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>

            <div className="row">
                <h3>RPG</h3>
                <a href="#">View More →</a>
            </div>
            <div className="grid">
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>
        </div>
    );
}