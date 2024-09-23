"use client";
import React from "react";
import Line from "./Line";
import Bar from "./Bar";
import Pie from "./Pie";
const DataVisualization = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
      <div className="lg:col-span-2">
        <Line />
      </div>
      <Pie />
      <Bar />
    </div>
  );
};

export default DataVisualization;
