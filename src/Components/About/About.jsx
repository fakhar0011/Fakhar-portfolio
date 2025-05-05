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
              I am a MERN Stack devoloper with a knowledge of MongoDB Express.js React.js and
              Node.js.and their technologies are Material UI and ShadCN
            </p>
            <p>
              My passion is for MERN Stack developer.but also enthusim and
              dedication it to bring.and i bring on each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <p>MongoDB</p>
                <hr style={{width:"50%"}}/>

            </div>
            <div className="about-skill">
                <p>Express.js</p>
                <hr style={{width:"70%"}}/>

            </div>
            <div className="about-skill">
                <p>React.js</p>
                <hr style={{width:"60%"}}/>

            </div>
            <div className="about-skill">
                <p>Node.js</p>
                <hr style={{width:"50%"}}/>

            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6 Months</h1>
            <p>Experience</p>
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
