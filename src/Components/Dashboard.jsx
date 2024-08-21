import React from "react";
import Category from "./Category";
import GeneralDoughnutChart from "./GeneralDoughnutChart";
import RegistryContributionChart from "./RegistryContributionChart";
import useDashboardStore from "../useDashboardStore";

const Dashboard = () => {
  const categories = useDashboardStore((state) => state.categories);
  const searchResults = useDashboardStore((state) => state.searchResults);

  return (
    <>
      <div className="p-8 min-h-screen z-0">
        {searchResults.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Search Results
            </h2>
            <div className="grid grid-cols-3 gap-4 h-64">
              {searchResults.map((widget) => (
                <div key={widget.id} className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">{widget.name}</h3>
                  <p>{widget.text}</p>
                  <p className="text-sm text-gray-500">
                    Category: {widget.category}
                  </p>

                  {/* Conditionally render the chart if graphData is present */}
                  {widget.name === "Cloud Accounts" &&
                    Object.keys(widget.graphData).length > 0 && (
                      <GeneralDoughnutChart
                        labels={[
                          `Connected (${widget.graphData.connected})`,
                          `Not Connected (${widget.graphData.notConnected})`,
                        ]}
                        dataValues={Object.values(widget.graphData)}
                        colors={["#cbd6f5", "#5a80f2"]}
                      />
                    )}

                  {widget.name === "Cloud Account Risk Assessment" &&
                    Object.keys(widget.graphData).length > 0 && (
                      <GeneralDoughnutChart
                        labels={[
                          `Passed (${widget.graphData.passed})`,
                          `Failed (${widget.graphData.failed})`,
                          `Warning (${widget.graphData.warning})`,
                          `Not Available (${widget.graphData.notAvailable})`,
                        ]}
                        dataValues={Object.values(widget.graphData)}
                        colors={["#4CAF50", "#FF5252", "#FFC107", "#9E9E9E"]}
                      />
                    )}

                  {(widget.name === "Image Risk Assessment" ||
                    widget.name === "Image Security Issues") &&
                    Object.keys(widget.graphData).length > 0 && (
                      <div className="ml-0">
                        {" "}
                        <h1 className="flex items-center gap-2 text-md truncate mb-1">
                          <p className="text-xl font-bold">
                            {widget.graphData.total}{" "}
                          </p>{" "}
                          Total{" "}
                          {widget.name === "Image Risk Assessment"
                            ? "Vulnerabilities"
                            : "Images"}
                        </h1>
                        <RegistryContributionChart
                          graphData={widget.graphData}
                        />
                      </div>
                    )}
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
