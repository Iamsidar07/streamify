"use client";
import { formatNumber } from "@/lib/utils";
import { BarItem } from "@/types";
import { useCallback, useMemo } from "react";
import {
  BarChart,
  Bar as BarRechart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltipProps } from "./Line";
import SaveGraphAsPng from "./SaveGraphAsPng";

interface Props {
  data: BarItem[];
}

export default function Bar({ data }: Props) {
  const memoizedData = useMemo(() => data, [data]);

  const CustomTooltip = useCallback(
    ({ active, payload }: CustomTooltipProps) => {
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
    },
    []
  );
  return (
    <div className="w-full h-[550px] bg-muted border border-secondary rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm uppercase opacity-50">
          top 5 most streamed songs
        </h2>
        <SaveGraphAsPng id="topStreamedSongs" />
      </div>
      <ResponsiveContainer width="100%" height="90%" id="topStreamedSongs">
        <BarChart
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
            tickFormatter={(value) =>
              formatNumber(value, { maximumFractionDigits: 0 })
            }
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip />}
          />
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
