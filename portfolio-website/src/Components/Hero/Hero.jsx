import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import hero_background from "../../assets/sandro_büro.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${hero_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "100px"
      }}
    >
      
      <h1>Ihre digitale Lösung beginnt hier.</h1>
      <p>
       Verling Solutions entwickelt, koordiniert und liefert IT-Projekte mit Struktur, 
       Qualität und einem erfahrenen Expertennetzwerk, zuverlässig und aus einer Hand.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Buchen Sie jetzt Ihre kostenfreie  Erstanalyse
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
