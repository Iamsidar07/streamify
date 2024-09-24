"use client";
import { formatNumber } from "@/lib/utils";
import { LineItem } from "@/types";
import { useCallback, useMemo } from "react";

import {
  LineChart,
  Line as RechartLine,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { ValueType } from "tailwindcss/types/config";
import SaveGraphAsPng from "./SaveGraphAsPng";
type LineDataType = "total_users" | "active_users";

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: any[];
  label?: string;
}

interface Props {
  data: LineItem[];
}

const keyToLabel: { [key in LineDataType]: string } = {
  total_users: "Total Users",
  active_users: "Active Users",
};

const Line = ({ data }: Props) => {
  const memoizedData = useMemo(() => data, [data]);

  const CustomTooltip = useCallback(
    ({ active, payload }: CustomTooltipProps) => {
      if (active && payload?.[0]) {
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
    },
    []
  );

  return (
    <div className="w-full h-[550px] bg-muted rounded-2xl p-4 border border-secondary">
      <div className="flex items-center justify-between">
        <h2 className="text-sm uppercase opacity-50">
          user growth over last 12 months
        </h2>
        <SaveGraphAsPng id="userGrowthChart" />
      </div>
      <ResponsiveContainer width="100%" height="90%" id="userGrowthChart">
        <LineChart
          width={500}
          height={300}
          data={memoizedData}
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
            tickFormatter={(value) => formatNumber(value)}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <RechartLine
            type="monotone"
            dataKey="total_users"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <RechartLine
            type="monotone"
            dataKey="active_users"
            stroke="#82cc9d"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center items-center gap-2 mt-1 text-sm text-secondary">
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
