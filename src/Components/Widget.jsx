// import React from "react";
// import { XIcon } from "@heroicons/react/solid";
// import useDashboardStore from "../useDashboardStore";
// import GeneralDoughnutChart from "../Components/GeneralDoughnutChart";
// import RiskAssessmentChart from "../Components/RegistryContributionChart";
// import { SlChart } from "react-icons/sl";

// const Widget = ({ categoryId, widget }) => {
//   const removeWidget = useDashboardStore((state) => state.removeWidget);
//   // console.log(Object.keys(widget.graphData).length);
//   const renderChart = () => {
//     if (widget.name === "Cloud Accounts") {
//       return (
//         <GeneralDoughnutChart
//           labels={[
//             `Connected (${widget.graphData.connected})`,
//             `Not Connected (${widget.graphData.notConnected})`,
//           ]}
//           dataValues={[
//             widget.graphData.notConnected,
//             widget.graphData.connected,
//           ]}
//           colors={["#cbd6f5", "#5a80f2"]}
//         />
//       );
//     } else if (widget.name === "Cloud Account Risk Assessment") {
//       return (
//         <GeneralDoughnutChart
//           labels={[
//             `Passed (${widget.graphData.passed})`,
//             `Failed (${widget.graphData.failed})`,
//             `Warning (${widget.graphData.warning})`,
//             `Not Available (${widget.graphData.notAvailable})`,
//           ]}
//           dataValues={[
//             widget.graphData.passed,
//             widget.graphData.failed,
//             widget.graphData.warning,
//             widget.graphData.notAvailable,
//           ]}
//           colors={["#4CAF50", "#FF5252", "#FFC107", "#9E9E9E"]}
//         />
//       );
//     } else if (
//       widget.name === "Image Risk Assessment" ||
//       widget.name === "Image Security Issues"
//     ) {
//       return (
//         <>
//           <h1>Total: {widget.graphData.total}</h1>
//           <RiskAssessmentChart graphData={widget.graphData} />
//         </>
//       );
//     } else if (Object.keys(widget.graphData).length === 0) {
//       return (
//         <div className="flex flex-col justify-center items-center ml-40 mt-8">
//           <SlChart className="text-4xl text-gray-300" />
//           <p className="text-sm text-gray-800">No Graph data available!</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="flex flex-col flex-wrap items-start justify-start bg-white shadow rounded-xl p-4 relative h-64 w-full">
//       <button
//         onClick={() => removeWidget(categoryId, widget.id)}
//         className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//       >
//         <XIcon className="h-5 w-5" />
//       </button>
//       <h3 className="text-lg mb-1 font-semibold text-gray-800">
//         {widget.name}
//       </h3>
//       <p className="text-gray-600 mb-4 text-sm text-justify">{widget.text}</p>

//       {renderChart()}
//     </div>
//   );
// };

// export default Widget;

import React from "react";
import { XIcon } from "@heroicons/react/solid";
import useDashboardStore from "../useDashboardStore";
import GeneralDoughnutChart from "../Components/GeneralDoughnutChart";
import RiskAssessmentChart from "../Components/RegistryContributionChart";
import { SlChart } from "react-icons/sl";

const Widget = ({ categoryId, widget }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  const renderChart = () => {
    if (widget.name === "Cloud Accounts") {
      return (
        <div className="ml-0">
          {" "}
          {/* Adjust margin */}
          <GeneralDoughnutChart
            labels={[
              `Connected (${widget.graphData.connected})`,
              `Not Connected (${widget.graphData.notConnected})`,
            ]}
            dataValues={[
              widget.graphData.notConnected,
              widget.graphData.connected,
            ]}
            colors={["#cbd6f5", "#5a80f2"]}
          />
        </div>
      );
    } else if (widget.name === "Cloud Account Risk Assessment") {
      return (
        <div className="ml-0">
          {" "}
          {/* Adjust margin */}
          <GeneralDoughnutChart
            labels={[
              `Passed (${widget.graphData.passed})`,
              `Failed (${widget.graphData.failed})`,
              `Warning (${widget.graphData.warning})`,
              `Not Available (${widget.graphData.notAvailable})`,
            ]}
            dataValues={[
              widget.graphData.passed,
              widget.graphData.failed,
              widget.graphData.warning,
              widget.graphData.notAvailable,
            ]}
            colors={["#4CAF50", "#FF5252", "#FFC107", "#9E9E9E"]}
          />
        </div>
      );
    } else if (
      widget.name === "Image Risk Assessment" ||
      widget.name === "Image Security Issues"
    ) {
      return (
        <div className="ml-0">
          {" "}
          {/* Adjust margin */}
          <h1 className="text-base sm:text-lg lg:text-xl truncate">
            Total: {widget.graphData.total}
          </h1>
          <RiskAssessmentChart graphData={widget.graphData} />
        </div>
      );
    } else if (Object.keys(widget.graphData).length === 0) {
      return (
        <div className="flex flex-col justify-center items-center mt-8">
          <SlChart className="text-4xl text-gray-300" />
          <p className="text-sm text-gray-800">No Graph data available!</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col bg-white shadow rounded-xl p-4 relative h-64 w-full">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        <XIcon className="h-5 w-5" />
      </button>
      <h3 className="text-lg sm:text-lg lg:text-xl mb-1 font-semibold text-gray-800 truncate p-2">
        {widget.name}
      </h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base lg:text-lg text-justify line-clamp-3 overflow-hidden">
        {widget.text}
      </p>
      <div className="overflow-auto max-h-full w-full">{renderChart()}</div>
    </div>
  );
};

export default Widget;
