import React from "react";
import "./ITSecurity.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const ITSecurity = () => {
  return (
    <div id="it-security" className="it-security">
      <div className="title-box">
        <h1>IT-Sicherheit</h1>
        <img src={theme_pattern} alt="Deko" />
      </div>

      <div className="it-security-sections">
        <div className="it-security-content">
          <h3>Cybersecurity als Grundlage digitaler Projekte</h3>
          <p>
            Täglich verzeichnen IT Systeme weltweit über 300.000 neue
            Cyberangriffe, betroffen sind Unternehmen jeder Grösse und Branche.
            <br />
            IT-Sicherheit ist kein Luxus, sondern eine strategische
            Notwendigkeit.
          </p>
          <p>
            Verling Solutions integriert IT Sicherheit als festen Bestandteil
            jedes digitalen Projekts. Als spezialisierter IT Dienstleister mit
            Fokus auf Cybersecurity und Datenschutzberatung begleiten wir
            Unternehmen ganzheitlich – von der Sicherheitsanalyse bis zur
            revisionssicheren Umsetzung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITSecurity;
