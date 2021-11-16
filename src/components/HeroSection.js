import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import logo from "../assets/logo.png"


function HeroSection() {
  return (
    <div className="hero-container">
      <img className="main-img" />
      <img className="main-logo" src={logo} />
      <div className="main-text">
        <h1>DOS GATOS</h1>
        <p>Taqueria</p>
      </div>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          O NAS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          ZAMÓW COŚ <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
