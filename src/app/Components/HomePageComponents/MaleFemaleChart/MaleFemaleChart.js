import { Grid } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";
// import "./BarChart.css";
const MaleFemaleChart = ({ data }) => {
  const mapData = data.map(x => x.count);
  const state = {
    labels: ["أنثى", "ذكر"],
    datasets: [
      {
        label: "عدد المبيعات",
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
          text: "عدد مبيعات الذكور والاناث",
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

export default MaleFemaleChart;
