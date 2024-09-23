"use client";
import { formatNumber } from "@/lib/utils";
import React from "react";

import {
  LineChart,
  Line as RechartLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { ValueType } from "tailwindcss/types/config";
type LineDataType = "total_users" | "active_users";

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const data = [
  {
    name: "Jan",
    total_users: 1000,
    active_users: 500,
  },
  {
    name: "Feb",
    total_users: 2000,
    active_users: 100,
  },
  {
    name: "Mar",
    total_users: 3000,
    active_users: 2900,
  },
  {
    name: "Apr",
    total_users: 4000,
    active_users: 1000,
  },
  {
    name: "May",
    total_users: 5000,
    active_users: 1500,
  },
  {
    name: "Jun",
    total_users: 6000,
    active_users: 3900,
  },
  {
    name: "Jul",
    total_users: 7000,
    active_users: 6500,
  },
  {
    name: "Aug",
    total_users: 8000,
    active_users: 7000,
  },
  {
    name: "Sep",
    total_users: 9000,
    active_users: 1500,
  },
  {
    name: "Oct",
    total_users: 10000,
    active_users: 3000,
  },
  {
    name: "Nov",
    total_users: 11000,
    active_users: 5500,
  },
  {
    name: "Dec",
    total_users: 12000,
    active_users: 2000,
  },
];

const keyToLabel: { [key in LineDataType]: string } = {
  total_users: "Total Users",
  active_users: "Active Users",
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  console.log({ active, payload, label });
  if (active && payload && payload.length) {
    return (
      <div className="bg-secondary p-4 rounded-lg bg-opacity-40 border-muted">
        {payload.map((p) => (
          <div key={p.name} className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: p.stroke,
              }}
            />
            <p
              className="label"
              style={{
                color: p.stroke,
              }}
            >{`${keyToLabel[p.name as keyof typeof keyToLabel]} : ${
              p.value
            }`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const Line = () => {
  return (
    <div className="w-full h-[550px] bg-muted rounded-2xl p-4 border border-secondary">
      <h2 className="text-sm uppercase opacity-50">
        user growth over last 12 months
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            strokeDasharray={"3"}
            // stroke="#8884d8"
            padding={{ left: 30, right: 30 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            padding={{ bottom: 10, top: 30 }}
            tickFormatter={(value) => formatNumber(value)}
          />
          <Tooltip
            // contentStyle={{
            //   background: "#1f1f1f",
            //   outlineWidth: 0,
            //   borderRadius: 10,
            //   border: 0,
            //   paddingBlock: "20px",
            // }}
            content={<CustomTooltip />}
            cursor={false}
          />
          <RechartLine
            type="monotone"
            dataKey="total_users"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <RechartLine
            // label={<CustomizedLabel />}
            type="monotone"
            dataKey="active_users"
            stroke="#82cc9d"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center gap-2 mt-4 text-sm text-secondary">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#8884d8" }}
          />
          <p className="label">Total Users</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#82ca9d" }}
          />
          <p className="label">Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default Line;
