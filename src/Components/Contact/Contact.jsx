// import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// const Contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "93e54a77-c652-4762-8737-20bbbcc6e012");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       alert(res.message,);
//       event.target.reset();
//     }
//   };



//   return (
//     <div id="contact" className="contact">
//       <div className="contact-title">
//         <h1>Get in Touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>
//             I'm currently avaliable at any time.so feel free to send me an email
//             for about the interview .that you want to contact anytime
//           </p>
//           <div className="contact-details">
//             <div className="contact-detail">
//                 <img src={mail_icon} alt="" /> <p>fakharislam649@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//                  <img src={call_icon} alt="" /> <p><b>Whatsp</b>&nbsp;03479164941</p>  <p><b>Contact</b>&nbsp;03428104481</p>
//             </div>
//             <div className="contact-detail">
//                   <img src={location_icon} alt="" /> <p>Rawalpindi</p>
//             </div >
//           </div>
//         </div>
//         <form className="contact-right" onSubmit={onSubmit}>
//             <label htmlFor="name">Your Name</label>
//             <input type="text" placeholder="Enter your name" name="name" id="name"/>
//             <label htmlFor="email">Your Email</label>
//             <input type="email" placeholder="Enter your email" name="email" id="email"/>
//             <label htmlFor="msg">Write your message here</label>
//             <textarea name="message" id="msg" rows="8" placeholder="Enter your message" required></textarea>
//             <button type="submit" className="contact-submit">Submit now</button>

//         </form>
//       </div>
//     </div>
//   );
// };
// export default Contact;

import React from "react";
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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-24 py-20 flex flex-col items-center gap-20"
    >
      {/* Title */}
      <div className="relative w-full text-center">
        <h1 className="text-[50px] sm:text-[60px] lg:text-[80px] font-semibold">
          Get in Touch
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-[100px] sm:w-[130px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-[150px] w-full">
        {/* Left Side */}
        <div className="flex flex-col gap-8 max-w-full lg:max-w-[500px]">
          <h1 className="text-[40px] sm:text-[54px] lg:text-[70px] font-bold bg-gradient-to-r from-[#de8908] to-[#b415ff] bg-clip-text text-transparent">
            Let's talk
          </h1>
          <p className="text-[#d8d8d8] text-[18px] sm:text-[20px] leading-[32px]">
            I'm currently available at any time, so feel free to send me an
            email about the interview — you can contact me anytime.
          </p>
          <div className="flex flex-col gap-6 text-[#d8d8d8] text-[18px] sm:text-[20px]">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="mail" className="w-6 sm:w-7" />
              <p>fakharislam649@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <img src={call_icon} alt="call" className="w-6 sm:w-7 mt-1" />
              <div>
                <p>
                  <strong>WhatsApp:</strong> 03479164941
                </p>
                <p>
                  <strong>Contact:</strong> 03428104481
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="location" className="w-6 sm:w-7" />
              <p>Rawalpindi</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full max-w-[700px] gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#d8d8d8] text-[18px] sm:text-[20px] font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full h-16 px-5 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#d8d8d8] text-[18px] sm:text-[20px] font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full h-16 px-5 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="msg" className="text-[#d8d8d8] text-[18px] sm:text-[20px] font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              id="msg"
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full p-5 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-start text-white rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-[18px] sm:text-[20px] py-4 px-10 transition-transform duration-300 hover:scale-110"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

