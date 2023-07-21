import { Grid } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

 const data = [
  ["Skills", "My Skills"],
  ["HTML", 90],
  ["CSS", 80],
  ["JavaScript", 78],
  ["REACT JS", 80],
  ["Material UI", 80],
];

const options = {
  title: "My Skills",
  backgroundColor: "#445e70", 
  color: "white"

};

 function Skills() {
 
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default Skills
