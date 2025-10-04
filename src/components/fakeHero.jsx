import React from "react";
import "./fakeHero.css";

export default function fakeHero() {
    return (
        <div className="fakeHeroContainer">
            <div className="leftRectangle"></div>
            <div className="centralRectangle"></div>
            <div className="rightRectangle"></div>
        </div>
    );
}