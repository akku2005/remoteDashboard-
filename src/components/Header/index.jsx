import React from "react";
import Icons from "../../constants/Icons";

const Header = () => {
  return (
    <div className="header flex items-center justify-between ">
      {/* Left Section: Menu Icon and Title */}
      <div className="flex items-center">
        <a href="#">
          <img
            src={Icons.Content}
            alt="Menu Icon"
            className="menu-icon w-[32px] h-[32px] text-white"
          />
        </a>
        <div className="title ml-2 text-lg font-semibold text-white">
          Dashboard
        </div>
      </div>

      {/* Right Section: User Info and Notifications */}
      <div className="flex items-center space-x-4">
        {/* User Info and Avatar on larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col">
            <div className="name text-base font-semibold text-white">
              Smruti Ranjan Nayak
            </div>
            <div className="email text-sm text-gray-300">sm@uti@gmail.com</div>
          </div>

          {/* User Profile Picture */}
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <img
              src={Icons.Avatar}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Show User Profile Picture on Mobile */}
        <div className="md:hidden flex items-center">
          <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
            <img
              src={Icons.Avatar}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Show Notification Icon Only on Large Screens */}
        <div className="hidden md:flex items-center relative">
          <div className="flex items-center justify-center p-2 rounded-full bg-white border border-gray-300">
            <img
              src={Icons.Desktop}
              alt="Notification"
              className="notification-icon w-[24px] h-[24px] object-contain"
            />
            <span className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#6DC489] rounded-full border-2 border-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from "react";
// import Icons from "../../constants/Icons";

// const Header = () => {
//   return (
//     <div className="header flex items-center justify-between">
//       {/* Left Section: Menu Icon and Title */}
//       <div className="flex items-center">
//         <a href="#">
//           <img
//             src={Icons.Content}
//             alt="Menu Icon"
//             className="menu-icon w-[32px] h-[32px] text-white"
//           />
//         </a>
//         <div className="title ml-2 text-lg font-semibold text-white">
//           Dashboard
//         </div>
//       </div>

//       {/* Right Section: User Info, Avatar, and Notifications */}
//       <div className="flex items-center space-x-6">
//         {/* User Info and Avatar on larger screens */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="flex flex-col">
//             <div className="name text-base font-semibold text-white">
//               Smruti Ranjan Nayak
//             </div>
//             <div className="email text-sm text-gray-300">sm@uti@gmail.com</div>
//           </div>

//           {/* User Profile Picture */}
//           <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
//             <img
//               src={Icons.Avatar}
//               alt="User Profile"
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Show Notification Icon Only on Mobile */}
//         <div className="md:hidden flex items-center relative bg-white rounded-full">
//           <div className="flex items-center justify-center rounded-full p-[10px]">
//             <img
//               src={Icons.Desktop}
//               alt="Notification"
//               className="notification-icon w-[24px] h-[24px] object-contain"
//             />
//             <span className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#6DC489] rounded-full border-2 border-white"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
