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
    <div id="contact" className="flex flex-col items-center justify-center gap-20 my-20 mx-[170px] max-md:mx-[70px] max-md:gap-12">
      <div className="relative">
        <h1 className="text-[80px] font-semibold px-[30px] max-md:text-[50px] max-md:px-0">Get in Touch</h1>
        <img src={theme_pattern} alt="" className="absolute bottom-0 right-0 -z-10 w-auto max-md:w-[130px] max-md:mr-[-20px]" />
      </div>
      <div className="flex gap-[150px] max-md:flex-col">
        <div className="flex flex-col gap-8">
          <h1 className="text-[80px] font-bold bg-gradient-to-r from-[#de8908] to-[#b415ff] bg-clip-text text-transparent max-md:text-[54px]">Let's talk</h1>
          <p className="max-w-[550px] text-[#d8d8d8] text-[20px] leading-[35px] max-md:text-[18px]">
            I'm currently available at any time, so feel free to send me an email
            about the interview — you can contact me anytime.
          </p>
          <div className="flex flex-col gap-[30px] text-[#d8d8d8] text-[22px]">
            <div className="flex items-center gap-5 max-md:gap-5">
              <img src={mail_icon} alt="" className="max-md:w-[25px]" />
              <p>fakharislam649@gmail.com</p>
            </div>
            <div className="flex items-center gap-5 max-md:gap-5">
              <img src={call_icon} alt="" className="max-md:w-[25px]" />
              <div>
                <p><b>WhatsApp</b>&nbsp;03479164941</p>
                <p><b>Contact</b>&nbsp;03428104481</p>
              </div>
            </div>
            <div className="flex items-center gap-5 max-md:gap-5">
              <img src={location_icon} alt="" className="max-md:w-[25px]" />
              <p>Rawalpindi</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-[30px]" onSubmit={onSubmit}>
          <label htmlFor="name" className="text-[#d8d8d8] text-[22px] font-medium">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" id="name"
            className="w-[700px] h-[78px] px-5 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-[20px] border-none max-md:w-full" />

          <label htmlFor="email" className="text-[#d8d8d8] text-[22px] font-medium">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" id="email"
            className="w-[700px] h-[78px] px-5 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-[20px] border-none max-md:w-full" />

          <label htmlFor="msg" className="text-[#d8d8d8] text-[22px] font-medium">Write your message here</label>
          <textarea name="message" id="msg" rows="8" placeholder="Enter your message" required
            className="w-[650px] p-6 rounded bg-[#32323c] text-[#a0a0a0] font-outfit text-[20px] border-none max-md:w-[95%]" />

          <button type="submit"
            className="text-white rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-[22px] py-5 px-16 mb-12 cursor-pointer transition-transform duration-300 hover:scale-110 max-md:text-[20px] max-md:py-4 max-md:px-10">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

