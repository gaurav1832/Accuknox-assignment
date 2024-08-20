import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const GeneralDoughnutChart = ({ labels, dataValues, colors }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start">
      <div className="w-full sm:w-auto h-30 p-1 flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex-shrink-0 ml-0 sm:ml-4">
        {labels.map((label, index) => (
          <div key={index} className="flex mb-2 text-sm">
            <span
              className="flex w-4 h-4 mr-2 rounded-md"
              style={{ backgroundColor: colors[index] }}
            ></span>
            <span className="text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralDoughnutChart;
