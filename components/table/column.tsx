"use client";

import { Song } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

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
          className="hover:opacity-50 bg-secondary px-4 py-2 disabled:opacity-50 cursor-pointer rounded flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Streamed Date <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
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
          className="bg-secondary px-4 py-2 hover:opacity-50 disabled:opacity-50 cursor-pointer rounded flex items-center"
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
    cell: ({ row }) => {
      return <div className="w-[90%] truncate">{row.getValue("userId")}</div>;
    },
  },
];
