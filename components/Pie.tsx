"use client";
import { formatNumber } from "@/lib/utils";
import useSongStore from "@/store/useSongStore";
import React from "react";
import {
  PieChart,
  Pie as PieRechart,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CustomTooltipProps } from "./Line";

const data = [
  { name: "Subscriptions", value: 5000000, fill: "#82cc9d" },
  { name: "Advertisements", value: 3000000, fill: "#8884d8" },
  { name: "Streams", value: 2000000, fill: "#f30e57" },
];

export default function Pie() {
  const setSearchString = useSongStore((state) => state.setSearchString);
  const searchString = useSongStore((state) => state.searchString);
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div className="bg-secondary p-4 rounded-lg bg-opacity-40 border-muted">
          {payload.map((p) => (
            <div key={p.name} className="space-y-1">
              <p
                className="label"
                style={{
                  color: p.stroke,
                }}
              >
                {`$${formatNumber(p.value)} from ${p.name}`}
              </p>
              <p className="text-secondary text-sm">
                {((payload[0].value / total) * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      );
    }

    return null;
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
          margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
        >
          <Legend
            formatter={(value) => (
              <span className="text-sm font-medium">{value}</span>
            )}
          />
          <Tooltip content={<CustomTooltip />} />
          <PieRechart
            seed={50}
            slope={30}
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            blendStroke={true}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            paddingAngle={5}
            outerRadius={150}
            scale={2}
            fill="#8884d8"
            dataKey="value"
            className="cursor-pointer"
            onClick={(e) => {
              setSearchString(searchString === e.name ? "" : e.name);
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
