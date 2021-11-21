import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./Menu.css";

const openMenu = () => {
  window.open(URL="https://drive.google.com/file/d/199jKc6J85fMo70cn3H3726kbGdf4plQU/view?usp=sharing");
}

const openOrders = () => {
  window.open(URL="https://dos-gatos-taqueria.order.app.hd.digital/menus?fbclid=IwAR1mJjaWQOaEWi-olLbTCSl7I1XGwpr1BDE3nrN8GOplVkARsulgHZcdQpc");
}

export default function Menu() {
  return (
    <div id={`menu`} className="menu-container">
      <div className="text-items">
      <h1>Menu</h1>
      <h2>Na pytanie naszych gości o to, co polecamy - naszą pierwszą odpowiedzią jest, że wszystko. Menu jest tak małe, że jest w nim tylko to co uważamy za najlepsze. Zawsze chętnie opowiemy o tym co można u nas znaleźć, jak to zjeść i co do tego dodać. Jeżeli czegoś nie ma w menu, zachęcamy do zadawania pytań, jesteśmy otwarci na zmiany i bywa, że nawet z tacosa można zrobić burrito.  </h2>
        <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={openMenu}
          >ZOBACZ MENU
        </Button>
        <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={openOrders}
          >ZAMÓW ONLINE
        </Button>
      </div>  
    </div>
  ) 
}
