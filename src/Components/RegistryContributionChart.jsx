// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// const RegistryContributionChart = ({ labels, dataValues, colors }) => {
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         data: dataValues,
//         backgroundColor: colors,
//         borderColor: ["#FF5252", "#FF8C00", "#FFD700", "#1E90FF", "#4CAF50"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="relative w-full h-64">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default RegistryContributionChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RiskAssessmentChart = ({ graphData }) => {
  const data = [
    {
      name: graphData.total,
      Critical: graphData.critical,
      High: graphData.high,
      Moderate: graphData.moderate,
      Normal: graphData.normal,
      Safe: graphData.safe,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={50}>
      <BarChart layout="vertical" data={data} stackOffset="expand">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Critical"
          stackId="a"
          fill="#b72b2b"
          radius={[10, 0, 0, 10]}
        />
        <Bar dataKey="High" stackId="a" fill="#e74c3c" />
        <Bar dataKey="Moderate" stackId="a" fill="#f39c12" r />
        <Bar dataKey="Normal" stackId="a" fill="#f1c40f" />
        <Bar
          dataKey="Safe"
          stackId="a"
          fill="#bdc3c7"
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RiskAssessmentChart;
