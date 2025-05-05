// import React from "react";
// import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/profile.jpg";

// const About = () => {
//   return (
//     <div id="about" className="about">
//       <div className="about-title">
//         <h1>About me</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="about-sections">
//         <div className="about-left">
//           <img src={profile_img} alt="" />
//         </div>
//         <div className="about-right">
//           <div className="about-para">
//             <p>
//               I am a MERN Stack devoloper with a knowledge of MongoDB Express.js React.js and
//               Node.js.and their technologies are Material UI and ShadCN
//             </p>
//             <p>
//               My passion is for MERN Stack developer.but also enthusim and
//               dedication it to bring.and i bring on each project
//             </p>
//           </div>
//           <div className="about-skills">
//             <div className="about-skill">
//                 <p>MongoDB</p>
//                 <hr style={{width:"50%"}}/>

//             </div>
//             <div className="about-skill">
//                 <p>Express.js</p>
//                 <hr style={{width:"70%"}}/>

//             </div>
//             <div className="about-skill">
//                 <p>React.js</p>
//                 <hr style={{width:"60%"}}/>

//             </div>
//             <div className="about-skill">
//                 <p>Node.js</p>
//                 <hr style={{width:"50%"}}/>

//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="about-achievements">
//         <div className="about-achievement">
//             <h1>6 Months</h1>
//             <p>Experience</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//             <h1>5+</h1>
//             <p>MAJOR PROJECTS</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//             <h1>4+</h1>
//             <p>HAPPY CLIENTS</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-20 mx-[170px] my-20 max-md:mx-[70px] max-md:items-start">
      <div className="relative">
        <h1 className="text-[80px] font-semibold px-[30px] max-md:text-[50px] max-md:px-0">About me</h1>
        <img src={theme_pattern} alt="" className="absolute bottom-0 right-0 -z-10 max-md:w-[130px] max-md:right-[-20px]" />
      </div>
      <div className="flex gap-20 flex-col md:flex-row">
        <div className="hidden md:block">
          <img src={profile_img} alt="" />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-[24px] font-medium max-md:text-[18px] max-md:leading-8">
            <p>
              I am a MERN Stack Developer with knowledge of MongoDB, Express.js, React.js, and Node.js. I also work with modern UI libraries like Material UI and ShadCN.
            </p>
            <p>
              I’m passionate about MERN Stack development and bring enthusiasm and dedication to every project I work on.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { name: "MongoDB", width: "w-1/2" },
              { name: "Express.js", width: "w-[70%]" },
              { name: "React.js", width: "w-3/5" },
              { name: "Node.js", width: "w-1/2" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-[50px] transition-transform duration-300 cursor-pointer hover:scale-105 max-md:gap-5"
              >
                <p className="min-w-[150px] text-[24px] font-medium max-md:text-[20px]">{skill.name}</p>
                <hr className={`h-2 rounded-full border-none outline-none ${skill.width} bg-gradient-to-r from-[#DF8908] to-[#B415FF] max-md:h-[6px]`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around mb-20 max-md:justify-between">
        {[
          { label: "Experience", value: "6 Months" },
          { label: "MAJOR PROJECTS", value: "5+" },
          { label: "HAPPY CLIENTS", value: "4+" },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-2 transition-transform duration-500 cursor-pointer hover:scale-110 max-md:gap-[10px]">
              <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent max-md:text-[34px]">
                {item.value}
              </h1>
              <p className="text-[22px] font-medium text-center max-md:text-[16px]">{item.label}</p>
            </div>
            {idx < 2 && <hr className="hidden md:block h-full border-l border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;

