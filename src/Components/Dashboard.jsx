import React from "react";
import Category from "./Category";
import Navbar from "./Navbar";

import useDashboardStore from "../useDashboardStore";

const Dashboard = () => {
  const categories = useDashboardStore((state) => state.categories);
  const searchResults = useDashboardStore((state) => state.searchResults);

  return (
    <>
      <Navbar />

      <div className="p-8 min-h-screen z-0">
        {searchResults.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Search Results
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {searchResults.map((widget) => (
                <div key={widget.id} className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">{widget.name}</h3>
                  <p>{widget.text}</p>
                  <p className="text-sm text-gray-500">
                    Category: {widget.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
