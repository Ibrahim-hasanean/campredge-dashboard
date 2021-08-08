import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
const BarChart = ({ data }) => {
  const mapData = data.map(x => x.count + 5);
  console.log(mapData);
  const state = {
    labels: ["15 يوم", "30 يوم", "45 يوم", "60 يوم", "70 يوم"],
    datasets: [
      {
        label: "عدد مبيعات البكج",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [...mapData],
        maxBarThickness: 50
      }
    ]
  };
  return (
    <Bar
      className="bar-chart"
      data={state}
      options={{
        title: {
          display: true,
          text: "احصائيات البكجات",
          fontSize: 20
        },
        legend: {
          display: true,
          position: "right"
        }
      }}
    />
  );
};

export default BarChart;
