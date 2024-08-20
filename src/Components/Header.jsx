import React, { useState } from "react";
import useDashboardStore from "../useDashboardStore";
import { FaChevronRight } from "react-icons/fa";
import { PiBellRingingLight } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [query, setQuery] = useState("");
  const searchWidgets = useDashboardStore((state) => state.searchWidgets);
  // const searchResults = useDashboardStore((state) => state.searchResults);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchWidgets(value);
  };

  return (
    <nav className="flex sm:flex-row p-2 justify-around sm:justify-around bg-white items-center sm:w-full space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <p className="text-gray-400 text-sm">Home</p>
        <p>
          {" "}
          <FaChevronRight className="text-sm text-gray-400" />{" "}
        </p>
        <p className="text-md sm:text-sm text-gray-800 font-bold">
          Dashboard V2
        </p>
      </div>
      <div className="flex items-center space-x-8">
        <input
          type="text"
          placeholder="🔍 Search anything..."
          className="p-2 w-full sm:w-96 rounded border border-blue-300 text-sm"
          value={query}
          onChange={handleSearchChange}
        />
        <button>
          <PiBellRingingLight className="text-xl text-gray-400 cursor-pointer" />
        </button>
        <button>
          <FaUserCircle className="text-xl text-gray-300 cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
