// import React from "react";
// import "./Footer.css";
// import user_icon from "../../assets/user_icon.svg";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-top">
//         <div className="footer-top-left">
//           <p>
//             I'm MERN Stack devoloper.with a knowledge of MongoDB Express.js React.js and Node.js.
//             and as well as their technologies Material UI and ShadCN.
//           </p>
//         </div>
//         <div className="footer-top-right">
//             <div className="footer-email-input">
//                 <img src={user_icon} alt="" />
//                 <input type="email" placeholder="Enter your Email" />
//             </div>
//             <div className="footer-submit">Submit</div>
//         </div>
//       </div>
//       <hr />
//       <div className="footer-bottom">
//         <p className="footer-bottom-left">&copy; 2024 Fakhar islam.All rights reserved</p>
//         <div className="footer-bottom-right">
//             <p>Term of Services</p>
//             <p>Privacy Policy</p>
//             <p>Connect with me</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="mx-[170px] max-md:mx-[70px] my-12 flex flex-col gap-8">
      {/* Top section */}
      <div className="flex justify-between flex-wrap gap-8">
        <div className="max-w-md">
          <p className="text-[20px] text-[#d8d8d8]">
            I'm a MERN Stack developer with knowledge of MongoDB, Express.js, React.js, and Node.js, as well as tools like Material UI and ShadCN.
          </p>
        </div>
        <div className="flex items-center gap-8 flex-wrap">
          <div className="flex items-center gap-6 px-8 py-5 rounded-full bg-[#32323b] hover:border hover:border-white cursor-pointer">
            <img src={user_icon} alt="user" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent outline-none border-none text-[#a0a0a0] font-[Outfit] text-[18px]"
            />
          </div>
          <div className="text-[20px] px-12 py-5 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer transition-transform duration-300 hover:scale-110">
            Submit
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom section */}
      <div className="flex justify-between items-start flex-wrap text-[18px] text-[#d8d8d8]">
        <p className="mb-8 lg:mb-0">&copy; 2024 Fakhar Islam. All rights reserved</p>
        <div className="flex gap-12 mb-8 lg:mb-0">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

