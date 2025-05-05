// import React from "react";
// import "./Hero.css";
// import profile_img from "../../assets/profile.jpg";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// const Hero = () => {
//   return (
//     <div id="home" className="hero">
//       <img src={profile_img} alt="" />
//       <h1><span>I'm Fakhar islam</span> MERN Stack devoloper</h1>
//       <p>
//         I am a MERN Stack devoloper with a knowledge of MOngoDB Express.js Node.js and React.js .
//         and their technologies are Material UI and ShadCN.
//       </p>
//       <div className="hero-action">
//         <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
//         <div className="hero-resume">My Resume</div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center gap-8 px-4 text-center"
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Profile"
        className="w-52 h-52 rounded-full mt-36 md:mt-28 md:w-64 md:h-64"
      />

      {/* Heading */}
      <h1 className="w-[90%] md:w-[70%] text-[36px] md:text-[90px] font-semibold leading-tight">
        <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
          I'm Fakhar islam
        </span>{" "}
        MERN Stack developer
      </h1>

      {/* Description */}
      <p className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] text-[16px] md:text-[24px] leading-7 md:leading-10">
        I am a MERN Stack developer with knowledge of MongoDB, Express.js,
        Node.js, and React.js. I also work with Material UI and ShadCN.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[16px] md:text-[24px] font-medium mb-12">
        <div className="px-6 py-3 md:px-12 md:py-6 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:border-2 hover:border-white transition cursor-pointer">
          <AnchorLink offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="px-8 py-3 md:px-16 md:py-6 rounded-full border-2 border-white hover:border-[#B415FF] transition cursor-pointer">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
