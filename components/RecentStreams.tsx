"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "./table/data-table";
import { columns } from "./table/column";
import useSongStore from "@/store/useSongStore";

const RecentStreams = () => {
  const getSongs = useSongStore((state) => state.getSongs);
  const songs = useSongStore((state) => state.songs);
  const searchString = useSongStore((state) => state.searchString);
  const [filterData, setFilterData] = useState(songs || []);
  useEffect(() => {
    getSongs();
  }, [getSongs]);
  useEffect(() => {
    if (!songs) return;
    if (searchString === "") {
      setFilterData(songs);
      return;
    }
    console.log("search string", searchString);
    const result = songs.filter(
      (s) => s.revenueSource === searchString.toLowerCase(),
    );
    setFilterData(result);
  }, [searchString, songs]);
  return (
    <div className="mt-12">
      <DataTable columns={columns} data={filterData} />
    </div>
  );
};

export default RecentStreams;
