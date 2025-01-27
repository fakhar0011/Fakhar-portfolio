import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Fakhar islam</span> frontend devoloper</h1>
      <p>
        I am a frontend devoloper with a knowledge of html css and javascripit.
        and their technologies are bootstrap and react.js.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
