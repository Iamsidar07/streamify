import { formatNumber } from "@/lib/utils";
import React, { useState } from "react";
import {
  PieChart,
  Pie as PieRechart,
  Sector,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

const data = [
  { name: "Subscriptions", value: 5000000, fill: "#82cc9d" },
  { name: "Advertisements", value: 3000000, fill: "#8884d8" },
  { name: "Streams", value: 2000000, fill: "#f30e57" },
];

const renderActiveShape = (props: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180;
  const {
    cx = 29,
    cy = 29,
    midAngle = 10,
    innerRadius,
    outerRadius = 100,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  // TODO: filter the table here.
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {/* @ts-expect-error */}
        {payload?.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#8c8c8c"
        className="text-lg font-bold"
      >{`$${formatNumber(value!)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent! * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function Pie() {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full h-[550px] bg-muted rounded-2xl p-4 border border-secondary">
      <h2 className="text-sm uppercase opacity-50">Total Revenue</h2>
      <p className="text-lg md:text-4xl font-bold mt-1">
        $
        {formatNumber(total, {
          notation: "standard",
          compactDisplay: "long",
        })}
      </p>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart
          width={500}
          height={500}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <Legend
            formatter={(value) => (
              <span className="text-sm font-medium">{value}</span>
            )}
          />
          <PieRechart
            paddingAngle={5}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
          {data.map((_, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                stroke="none"
                style={{
                  outlineWidth: 0,
                  outline: "none",
                }}
              />
            );
          })}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
