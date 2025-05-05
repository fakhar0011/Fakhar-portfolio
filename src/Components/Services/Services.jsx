// import React from "react";
// import "./Services.css";
// import theme_pattern from '../../assets/theme_pattern.svg';
// import Services_Data from "../../assets/services_data";
// import arrow_icon  from '../../assets/arrow_icon.svg';
// const Services = () => {
//     return(
//         <div id="services" className="services">
//         <div className="services-title">
//             <h1>My Services</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="services-container">
//              {Services_Data.map((service,index) => {
//                 return <div key={index} className="services-format">
//                     <h3>{service.s_no}</h3>
//                     <h2>{service.s_name}</h2>
//                     <p>{service.s_desc}</p>
//                     <div className="services-readmore">
//                         <p>Read More</p>
//                         <img src={arrow_icon} alt="" />
//                     </div>
//                 </div>             
//                     })}
//         </div>
//         </div>
//     )
// }

// export default Services;

import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    return (
        <div id="services" className="flex flex-col items-center justify-center gap-20 md:gap-[80px] mx-6 md:mx-[170px] my-20">
            {/* Title Section */}
            <div className="relative">
                <h1 className="text-[40px] md:text-[80px] font-semibold px-0 md:px-[30px]">My Services</h1>
                <img src={theme_pattern} alt="pattern" className="absolute bottom-0 right-0 -z-10 w-[130px] md:w-auto md:mr-0 -mr-5" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[40px] mb-20">
                {Services_Data.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center gap-5 p-8 md:p-[60px] rounded-[10px] border-2 border-white hover:border-fuchsia-500 hover:bg-gradient-to-br from-[#3f0028] to-[#582300] transform hover:scale-105 transition duration-400 cursor-pointer"
                    >
                        <h3 className="text-[24px] md:text-[28px] font-semibold">{service.s_no}</h3>
                        <h2 className="text-[28px] md:text-[38px] font-extrabold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                            {service.s_name}
                        </h2>
                        <p className="text-[#d4d4d4] text-[18px] md:text-[24px] leading-8 md:leading-[40px] max-w-[300px]">
                            {service.s_desc}
                        </p>
                        <div className="flex items-center gap-4 mt-5">
                            <p className="text-white">Read More</p>
                            <img src={arrow_icon} alt="arrow" className="w-5 md:w-auto" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
