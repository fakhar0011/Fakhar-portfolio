import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "93e54a77-c652-4762-8737-20bbbcc6e012");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message,);
      event.target.reset();
    }
  };



  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable at any time.so feel free to send me an email
            for about the interview .that you want to contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>fakharislam649@gmail.com</p>
            </div>
            <div className="contact-detail">
                 <img src={call_icon} alt="" /> <p><b>Whatsp</b>&nbsp;03479164941</p>  <p><b>Contact</b>&nbsp;03428104481</p>
            </div>
            <div className="contact-detail">
                  <img src={location_icon} alt="" /> <p>Rawalpindi</p>
            </div >
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" id="name"/>
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email"/>
            <label htmlFor="msg">Write your message here</label>
            <textarea name="message" id="msg" rows="8" placeholder="Enter your message" required></textarea>
            <button type="submit" className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  );
};
export default Contact;
