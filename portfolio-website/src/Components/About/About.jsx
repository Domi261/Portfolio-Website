import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import sandro_laptop from "../../assets/sandro_laptop.png";

// Icons aus deinem assets-Ordner
import flexibility from "../../assets/flexibility.svg";
import solution from "../../assets/solution.svg";
import reliability from "../../assets/reliability.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>Über Verling Solutions</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={sandro_laptop} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <h3>Ihr Partner für strukturierte IT- und Digitalprojekte.</h3>
            <p>
              Jedes Projekt beginnt bei uns mit einem klaren Verständnis Ihrer
              Ziele und Anforderungen. Wir setzen auf strukturierte Analyse,
              offene Kommunikation und eine präzise Planung. So stellen wir
              sicher, dass jede Umsetzung nicht nur technisch einwandfrei,
              sondern auch geschäftlich sinnvoll ist. Unser Anspruch ist es,
              nachhaltige Lösungen zu entwickeln, die echten Mehrwert schaffen.
              Messbar, sicher und zukunftsfähig.
            </p>

            <h3>Zusammenarbeit auf Augenhöhe</h3>
            <p>
              Wir glauben an transparente Partnerschaft statt technokratischer
              Distanz. Sie erhalten bei uns keine Lösung von der Stange, sondern
              eine individuelle Strategie, abgestimmt auf Ihre IT-Umgebung und
              Ihre Zielgruppe. Während wir im Hintergrund komplexe Systeme
              koordinieren, haben Sie stets eine klare Sicht auf Fortschritt und
              nächste Schritte. Einfach, direkt und professionell.
            </p>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <img
            src={flexibility}
            alt="Flexibilität Icon"
            className="achievement-icon"
          />
          <p>Flexibel</p>
        </div>
        <hr />
        <div className="about-achievement">
          <img
            src={solution}
            alt="Lösungsorientierung Icon"
            className="achievement-icon"
          />
          <p>Lösungsorientiert</p>
        </div>
        <hr />
        <div className="about-achievement">
          <img
            src={reliability}
            alt="Zuverlässigkeit Icon"
            className="achievement-icon"
          />
          <p>Zuverlässig</p>
        </div>
      </div>
    </div>
  );
};

export default About;
