import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero.jpg"; // replace with your image path

export default function Hero() {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <div className="HeroText">
          <h1 className="HeroHeading">Game of the Year</h1>
          <h2 className="HeroTitle">Hollow Knight: Silksong</h2>
          <p className="HeroDesc">
            Developed by Team Cherry, this highly anticipated sequel to Hollow
            Knight follows Hornet as she explores a mysterious new kingdom
            filled with challenging enemies, intricate platforming, and
            hauntingly beautiful environments.
          </p>
          <a
            className="HeroButton"
            href="https://hollowknightsilksong.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="HeroImage">
          <img className="HeroImg" src={heroImage} alt="Hero Banner" />
        </div>
      </div>
    </div>
  );
}
