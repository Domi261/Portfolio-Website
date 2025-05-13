import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import hero_background from "../../assets/hero_building.png";
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
      <img src={profile_img} alt="Profil" className="profile-img" />
      <h1>
        <span>I'm Alex Bennett,</span> frontend developer based in USA.
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Kontaktiere mich
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
