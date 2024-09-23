"use client";
import React from "react";
import Line from "./Line";
import Bar from "./Bar";
import Pie from "./Pie";
const DataVisualization = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <div className="md:col-span-2">
        <Line />
      </div>
      <div className="">
        <Bar />
      </div>
      <div className="">
        <Pie />
      </div>
    </div>
  );
};

export default DataVisualization;
