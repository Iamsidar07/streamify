"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Song = {
  id: string;
  songName: string;
  artist: string;
  streamCount: number;
  userId: string;
  date: Date;
  revenueSource: "advertisements" | "subscriptions" | "streams";
};

export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: "songName",
    header: "Song Name",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <button
          className="hover:bg-muted px-4 py-2 disabled:opacity-50 cursor-pointer rounded flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Streamed Date <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },

    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      return (
        <div className="">
          {date.toLocaleString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => {
      return (
        <button
          className="hover:bg-muted px-4 py-2 disabled:opacity-50 cursor-pointer rounded flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stream count
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      const streamCount = parseInt(row.getValue("streamCount"));
      const formatted = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
      }).format(streamCount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
];
