import React from "react";
import "../../App.css";
import "./Hours.css"
import img14 from "../../assets/img14.jpeg"

export default function Hours() {
  return (
    <div id={`godziny-otwarcia`} className="hours-container">
      <div className="hours-left-side">
        <img src={img14} />
      </div>
      <div className="hours-right-side">
      <h1>Godziny otwarcia</h1>
      <br />
      <br />
      <div className="days-hours">
      <div className="days">
      <h3>Poniedziałek</h3>
      <h3>Wtorek</h3>
      <h3>Środa</h3>
      <h3>Czwartek</h3>
      <h3>Piątek</h3>
      <h3>Sobota</h3>
      <h3>Niedziela</h3>
      </div>
      <div className="hours">
      <h3>12.00-20.00</h3>
      <h3>12.00-20.00</h3>
      <h3>¡Viva la Siesta!</h3>
      <h3>12.00-20.00</h3>
      <h3>12.00-21.00</h3>
      <h3>12.00-21.00</h3>
      <h3>12.00-20.00</h3>
      </div>
      </div>
      </div>
    </div>
  )
}
