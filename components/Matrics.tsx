import { formatNumber } from "@/lib/utils";
import { MoveDownIcon, MoveUpIcon } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

interface CardProps {
  value: number;
  up?: boolean;
  percentage: number;
  label: string;
  isCurrency?: boolean;
}

const cards = [
  { value: 34589, percentage: 45, label: "Total users" },
  { value: 44289, percentage: 5, label: "Active users", up: true },
  { value: 3589, percentage: 4.9, label: "Total streams" },
  {
    value: 34589,
    percentage: 15,
    label: "Total revenue",
    isCurrency: true,
    up: true,
  },
];

const Matrics = () => {
  return (
    <div className="bg-primary p-4 sm:p-8 border-[1px] border-secondary rounded-lg sm:rounded-2xl">
      <h2 className="text-lg sm:text-3xl font-medium">Key Stats</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-8">
        {cards.map((card) => (
          <Card key={card.label} {...card} />
        ))}
        <TopArtist />
      </div>
    </div>
  );
};

export default Matrics;

const Card = ({
  value,
  up = false,
  percentage,
  label,
  isCurrency = false,
}: CardProps) => {
  const formattedValue = useMemo(
    () =>
      formatNumber(
        value,
        isCurrency
          ? {
              currencyDisplay: "symbol",
              style: "currency",
              currency: "USD",
              notation: "compact",
            }
          : {}
      ),
    [value, isCurrency]
  );
  return (
    <div className="p-4 border-l-4 border-muted rounded-lg space-y-12">
      <div className="flex items-center gap-6">
        <span className="text-2xl sm:text-5xl font-bold">{formattedValue}</span>
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

const TopArtist = () => (
  <div className="p-4 border-l-4 border-muted rounded-lg">
    <p className="text-secondary capitalize font-light text-sm">
      <span className="text-lg md:text-3xl font-semibold">#1</span> Artist
    </p>
    <div className="flex items-center gap-4 mt-4">
      <Image
        src="/a.jpeg"
        alt="Bad Bunny"
        width={80}
        height={80}
        className="object-cover aspect-square rounded-full"
      />
      <p className="text-lg">Bad Bunny</p>
    </div>
  </div>
);
