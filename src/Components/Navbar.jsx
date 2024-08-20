// import React, { useState } from "react";
// import { FaClock } from "react-icons/fa6";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { SlRefresh } from "react-icons/sl";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { RxDividerVertical } from "react-icons/rx";
// import AddWidgetForm from "./AddWidgetForm";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleAddWidgetClick = () => {
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   return (
//     <div className="relative flex justify-between items-center p-4 bg-transparent">
//       <div className="text-xl font-bold text-gray-700">CNAPP Dashboard</div>

//       <div className="flex items-center space-x-4">
//         <button
//           onClick={handleAddWidgetClick}
//           className="flex items-center bg-white border border-gray-300 rounded px-4 py-1 text-sm text-gray-600 hover:bg-gray-100"
//         >
//           Add Widget <span className="ml-2">+</span>
//         </button>

//         <button className="flex items-center bg-white border border-gray-300 rounded p-2 text-gray-600 hover:bg-gray-100">
//           <span className="material-icons">
//             <SlRefresh />
//           </span>
//         </button>

//         <button className="flex items-center bg-white border border-gray-300 rounded p-2 text-gray-600 hover:bg-gray-100">
//           <span className="material-icons">
//             <HiOutlineDotsVertical />
//           </span>
//         </button>

//         <div className="relative inline-block text-left">
//           <button
//             onClick={toggleDropdown}
//             className="flex justify-center items-center bg-white border border-indigo-800 rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
//           >
//             <span className="flex items-center material-icons text-indigo-800 ">
//               <FaClock className="text-lg" />
//               <RxDividerVertical className="text-2xl" />
//             </span>
//             <span className="text-indigo-900"> Last 2 days</span>
//             <span className="material-icons text-3xl">
//               <RiArrowDropDownLine />
//             </span>
//           </button>

//           {isDropdownOpen && (
//             <div
//               className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//               role="menu"
//               aria-orientation="vertical"
//               aria-labelledby="menu-button"
//               tabIndex="-1"
//             >
//               <div className="py-1">
//                 <button
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
//                   role="menuitem"
//                   tabIndex="-1"
//                   onClick={closeDropdown}
//                 >
//                   Last 7 days
//                 </button>
//                 <button
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
//                   role="menuitem"
//                   tabIndex="-1"
//                   onClick={closeDropdown}
//                 >
//                   Last 14 days
//                 </button>
//                 <button
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
//                   role="menuitem"
//                   tabIndex="-1"
//                   onClick={closeDropdown}
//                 >
//                   Last 30 days
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Conditionally render AddWidgetForm */}
//       {isFormVisible && (
//         <div
//           className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//             isFormVisible ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <AddWidgetForm categoryId="cspm" />
//           <button
//             onClick={handleCloseForm}
//             className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
//           >
//             X
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaClock } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import AddWidgetForm from "./AddWidgetForm";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleAddWidgetClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-transparent space-y-4 sm:space-y-0">
      <div className="text-lg sm:text-xl font-bold text-gray-700">
        CNAPP Dashboard
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleAddWidgetClick}
          className="flex items-center bg-white border border-gray-300 rounded px-4 py-1 text-sm text-gray-600 hover:bg-gray-100"
        >
          Add Widget <span className="ml-2">+</span>
        </button>

        <button className="flex items-center bg-white border border-gray-300 rounded p-2 text-gray-600 hover:bg-gray-100">
          <span className="material-icons">
            <SlRefresh />
          </span>
        </button>

        <button className="flex items-center bg-white border border-gray-300 rounded p-2 text-gray-600 hover:bg-gray-100">
          <span className="material-icons">
            <HiOutlineDotsVertical />
          </span>
        </button>

        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="flex justify-center items-center bg-white border border-indigo-800 rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
          >
            <span className="flex items-center material-icons text-indigo-800 ">
              <FaClock className="text-lg" />
              <RxDividerVertical className="text-2xl" />
            </span>
            <span className="text-indigo-900"> Last 2 days</span>
            <span className="material-icons text-3xl">
              <RiArrowDropDownLine />
            </span>
          </button>

          {isDropdownOpen && (
            <div
              className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={closeDropdown}
                >
                  Last 7 days
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={closeDropdown}
                >
                  Last 14 days
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={closeDropdown}
                >
                  Last 30 days
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isFormVisible && (
        <div
          className={`fixed top-0 right-0 w-full sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isFormVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AddWidgetForm categoryId="cspm" />
          <button
            onClick={handleCloseForm}
            className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
