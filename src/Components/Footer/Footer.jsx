import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I'm frontend devoloper.with a knowledge of html css and javascripit.
            and their technologies are bootstrap and react js.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="footer-submit">Submit</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Fakhar islam.All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
