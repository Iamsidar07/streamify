import { formatNumber } from "@/lib/utils";
import { MoveDownIcon, MoveUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
interface CardProps {
  value: string;
  up: boolean;
  percentage: number;
  label: string;
}
const Card = ({ value, up, percentage, label }: CardProps) => {
  return (
    <div className="p-4 border-l-4 border-muted rounded-lg space-y-12">
      <div className="flex items-center gap-6">
        <span className="text-2xl sm:text-5xl font-bold">{value}</span>
        <div
          className={`flex items-center ${
            up ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800 "
          } px-4 py-1 rounded-full text-xs`}
        >
          {up ? (
            <MoveUpIcon className="h-3 w-3" />
          ) : (
            <MoveDownIcon className="h-3 w-3" />
          )}
          <span className="text-sm">{percentage}%</span>
        </div>
      </div>
      <p className="text-secondary capitalize font-light">{label}</p>
    </div>
  );
};

const Matrics = () => {
  return (
    <div className="bg-primary p-4 sm:p-8 border-[1px] border-secondary rounded-lg sm:rounded-2xl">
      <h2 className="text-lg sm:text-3xl font-medium">Key Stats</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-8">
        <Card
          value={formatNumber(495000)}
          up={true}
          percentage={1.9}
          label="Total Users"
        />
        <Card
          value={formatNumber(145000)}
          up={false}
          percentage={11.9}
          label="Active Users"
        />
        <Card
          value={formatNumber(7900)}
          up={true}
          percentage={1.9}
          label="Total Streams"
        />
        <Card
          value={formatNumber(49900, {
            currencyDisplay: "symbol",
            style: "currency",
            currency: "USD",
            notation: "compact",
          })}
          up={false}
          percentage={21}
          label="Total Revenue"
        />
        <div className="p-4 border-l-4 border-muted rounded-lg">
          <p className="text-secondary capitalize font-light text-sm">
            <span className="text-lg md:text-3xl font-semibold">#1</span> Artist
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/a.jpeg"
              alt="manoj"
              width={80}
              height={80}
              className="object-cover aspect-square rounded-full"
            />
            <p className="text-lg">Bad Bunny</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrics;
