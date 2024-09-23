"use client";
import React from "react";
import {
  BarChart,
  Bar as BarRechart,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltipProps } from "./Line";
import { formatNumber } from "@/lib/utils";

const data = [
  { name: "Blinding Lights", artist: "The Weeknd", streams: 2874000 },
  { name: "Shape of You", artist: "Ed Sheeran", streams: 2518000 },
  { name: "Dance Monkey", artist: "Tones and I", streams: 2367000 },
  { name: "Someone You Loved", artist: "Lewis Capaldi", streams: 2102000 },
  { name: "Sunflower", artist: "Post Malone & Swae Lee", streams: 1947000 },
];

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const song = payload[0].payload;
    return (
      <div className="bg-secondary p-4 rounded-lg bg-opacity-40 border-muted">
        <p className="font-semibold">{song.name}</p>
        <p className="text-sm text-secondary">{song.artist}</p>
        <p className="text-sm font-medium text-secondary">{`${song.streams.toLocaleString()} streams`}</p>
      </div>
    );
  }
  return null;
};

export default function Bar() {
  return (
    <div className="w-full h-[550px] bg-muted border border-secondary rounded-2xl p-4">
      <h2 className="text-sm uppercase opacity-50">
        top 5 most streamed songs
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            strokeDasharray={"3"}
            padding={{ left: 30, right: 30 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            padding={{ bottom: 10, top: 30 }}
            tickFormatter={(value) =>
              formatNumber(value, { maximumFractionDigits: 0 })
            }
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip />}
          />
          {/* <Legend /> */}
          <BarRechart
            type="monotone"
            dataKey="streams"
            fill="#8884d8"
            activeBar={<Rectangle fill="#82cc9d" stroke="#82cc9d" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
