"use client";
import React, { Suspense } from "react";
import Line from "./Line";
import Bar from "./Bar";
// import Pie from "./Pie";
const Pie = React.lazy(() => import("./Pie"));
function Loading() {
  console.log("loading...");
  return <h2>🌀 Pie is Loading...</h2>;
}
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
        <Suspense fallback={<Loading />}>
          <Pie />
        </Suspense>
      </div>
    </div>
  );
};

export default DataVisualization;
