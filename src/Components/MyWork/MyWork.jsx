// // import React from "react";
// // import "./MyWork.css"
// // import theme_pattern from '../../assets/theme_pattern.svg';
// // import mywork_data from "../../assets/mywork_data";
// // import arrow_iocn from "../../assets/arrow_icon.svg";
// // const MyWork = () => {
// //     return (
// //         <div id="work" className="mywork">
// //            <div className="mywork-title">
// //             <h1>My latest work</h1>
// //             <img src={theme_pattern} alt="" />
// //            </div>
// //            <div className="mywork-container">
// //             {mywork_data.map((work,index) => {
// //               return <img key={index} src={work.w_img} alt="" />
// //             })}
// //            </div>
// //            <div className="mywork-showmore">
// //             <p>Show more</p>
// //             <img src={arrow_iocn} alt="" />
// //            </div>
// //         </div>
// //     )
// // }

// // export default MyWork;

// import React from "react";
// import theme_pattern from '../../assets/theme_pattern.svg';
// import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

// const MyWork = () => {
//   return (
//     <div id="work" className="flex flex-col items-center gap-20 mt-20 mb-20 px-4 md:px-[70px] lg:px-[170px]">
//       {/* Title */}
//       <div className="relative">
//         <h1 className="text-[40px] md:text-[80px] font-semibold px-0 md:px-8">My latest work</h1>
//         <img
//           src={theme_pattern}
//           alt=""
//           className="absolute bottom-0 right-0 -z-10 w-[130px] md:w-auto md:mr-0"
//         />
//       </div>

//       {/* Grid of work */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full">
//         {mywork_data.map((work, index) => (
//           <img
//             key={index}
//             src={work.w_img}
//             alt=""
//             className="w-full h-auto max-w-[419px] max-h-[280px] transition-transform duration-300 cursor-pointer hover:scale-110 hover:border-4 hover:border-fuchsia-500 hover:rounded-lg"
//           />
//         ))}
//       </div>

//       {/* Show More Button */}
//       <div className="flex items-center gap-4 md:gap-6 border-2 border-white px-10 py-5 md:px-[60px] md:py-[30px] text-[18px] md:text-[22px] font-medium rounded-full transition-all duration-500 hover:gap-8 cursor-pointer mx-auto">
//         <p>Show more</p>
//         <img src={arrow_icon} alt="arrow" className="w-5 h-5" />
//       </div>
//     </div>
//   );
// };

// export default MyWork;

import React from "react";
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="flex flex-col items-center gap-20 mt-20 mb-20 px-4 md:px-[70px] lg:px-[170px]">
      {/* Title */}
      <div className="relative">
        <h1 className="text-[40px] md:text-[80px] font-semibold px-0 md:px-8">My latest work</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-[130px] md:w-auto md:mr-0"
        />
      </div>

      {/* Grid of work */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            className="w-full h-auto max-w-[419px] max-h-[280px] transition-transform duration-300 cursor-pointer hover:scale-110 hover:border-4 hover:border-fuchsia-500 hover:rounded-lg"
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center gap-4 md:gap-6 border-2 border-white px-10 py-5 md:px-[60px] md:py-[30px] text-[18px] md:text-[22px] font-medium rounded-full transition-all duration-500 hover:gap-8 cursor-pointer mx-auto">
        <p>Show more</p>
        <img src={arrow_icon} alt="arrow" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default MyWork;

