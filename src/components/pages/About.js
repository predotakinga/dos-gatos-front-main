import React from "react";
import "../../App.css";
import "./About.css";
import img13 from "../../assets/img13.jpg"

export default function About() {
  return (
    <>
    <div id={`o-nas`} className="about-container">
      <div className="about-left-side">
        <h1>O Nas</h1>
        <br />
        <br />
        <p>Po latach pracy na etacie w przeróżnych miejscach i branżach, wspólnie postanowiliśmy spróbować swoich sił “na swoim”. Największe doświadczenie w gastronomii ma nasz kucharz, który już ponad 12 lat pracuje w zawodzie. On też jako pierwszy zafascynował się kuchnią meksykańską, która jest pełna różnorodnych smaków, kolorów i pozostawia duże pole do popisu. W restauracji naszym zdaniem najważniejsze jest jedzenie i to na tym skupiamy swoją uwagę, dbając o to, żeby to co wychodzi z naszej kuchni było najlepszym co możemy zaoferować. Do tego specyfika kuchni meksykańskiej, możliwość personalizacji dań między innymi przez dobór różnych sals, zmianę składników końcowego dania porwała nas w całości. Dodatkowo ma ona w sobie coś co powoduje, że to jedzenie cieszy, a my chcemy tą radością podzielić się z innymi. Każdy zadowolony gość naszej restauracji utwierdza nas w tym, że było warto zaczynać.</p>
        <p><br/>Zapraszamy i pozdrawiamy, <br />Sebastian, Kasia i Jagoda, <br />Dos Gatos Taqueria</p>
      </div>
      <div className="about-right-side">
        <img src={img13} />
      </div>
    </div>
    </>
  )
}
