import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a fresh frontend devoloper with a knowledge of html css and
              javascripit.and their technologies are bootstarpm and react.js
            </p>
            <p>
              My passion is for frontend devoloper.but also enthusim and
              dedication it to bring.and i bring on each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{width:"50%"}}/>

            </div>
            <div className="about-skill">
                <p>Javascripit</p>
                <hr style={{width:"70%"}}/>

            </div>
            <div className="about-skill">
                <p>Bootstrap & React.js</p>
                <hr style={{width:"60%"}}/>

            </div>
            <div className="about-skill">
                <p>Git&GitHub</p>
                <hr style={{width:"50%"}}/>

            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>FRESH</h1>
            <p>CANDIDATE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>MAJOR PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
