import React from "react";
import "../../App.css";
import "./Contact.css";
import phone from "../../assets/phone.svg"
import facebook from "../../assets/facebook.svg"

export default function Contact() {
  return (
    <div id={`kontakt`} className="contact-container">
    <h1>Kontakt </h1>
    <br />
    <p>
    <img alt="numer" src={phone} className="contact-img" />  {" "}
    +48 737 855 501
    </p>
    <p>
    <img alt="facebook" src={facebook} className="contact-img" /> {" "}
    dosgatospl
    </p>
    <br />
    <h1 className="padding-h1">Zapraszamy do lokalu</h1>
    <br />
    <p>ul. Piwna 15, Gliwice</p>
    </div>
  )
}
