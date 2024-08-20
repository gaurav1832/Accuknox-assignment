// import React, { useState } from "react";
// import useDashboardStore from "../useDashboardStore";

// const Header = () => {
//   const [query, setQuery] = useState("");
//   const searchWidgets = useDashboardStore((state) => state.searchWidgets);
//   const searchResults = useDashboardStore((state) => state.searchResults);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     searchWidgets(value);
//   };

//   return (
//     <nav className="flex sm:w-screen md:w-screen lg:w-screen bg-gray-100 justify-around items-center">
//       <div className="flex">
//         <p className="text-xl text-gray-800 font-semibold p-4">Home</p>
//         <p className="text-xl text-gray-800 font-semibold p-4">Dashboard v2</p>
//       </div>
//       <div className="flex">
//         <input
//           type="text"
//           placeholder="Search anything..."
//           className="p-1 mr-96 w-96 rounded border border-blue-300 text-sm"
//           value={query}
//           onChange={handleSearchChange}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import useDashboardStore from "../useDashboardStore";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [query, setQuery] = useState("");
  const searchWidgets = useDashboardStore((state) => state.searchWidgets);
  const searchResults = useDashboardStore((state) => state.searchResults);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchWidgets(value);
  };

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between bg-gray-100 items-center sm:w-full space-y-4 sm:space-y-0">
      <div className="flex justify-center items-center space-y-4 sm:text-sm text-gray-400 font-bold p-4">
        <p>Home</p>
        <p>
          {" "}
          <FaChevronRight />{" "}
        </p>
        <p className="text-sm text-gray-800 font-bold">Dashboard v2</p>
      </div>
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search anything..."
          className="p-2 w-full sm:w-96 rounded border border-blue-300 text-sm"
          value={query}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default Header;
