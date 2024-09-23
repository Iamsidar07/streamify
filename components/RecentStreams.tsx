import React from "react";
import { DataTable } from "./table/data-table";
import { Song, columns } from "./table/column";

const RecentStreams = () => {
  const data: Song[] = [
    {
      id: "1",
      songName: "Blinding Lights",
      artist: "The Weeknd",
      streamCount: 25000000,
      userId: "user123",
      date: new Date("2020-11-29"),
    },
    {
      id: "2",
      songName: "Levitating",
      artist: "Dua Lipa",
      streamCount: 15000000,
      userId: "user456",
      date: new Date("2020-10-01"),
    },
    {
      id: "3",
      songName: "Shape of You",
      artist: "Ed Sheeran",
      streamCount: 30000000,
      userId: "user789",
      date: new Date("2017-01-06"),
    },
    {
      id: "4",
      songName: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      streamCount: 20000000,
      userId: "user101",
      date: new Date("2021-07-09"),
    },
    {
      id: "5",
      songName: "Bad Habits",
      artist: "Ed Sheeran",
      streamCount: 18000000,
      userId: "user202",
      date: new Date("2021-06-25"),
    },
  ];
  return (
    <div className="mt-12">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default RecentStreams;
