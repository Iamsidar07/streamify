"use client";
import useSongStore from "@/store/useSongStore";
import { useEffect, useState } from "react";
import { columns } from "./table/column";
import DataTable from "./table/data-table";
import { Song } from "@/types";

const RecentStreams = () => {
  const [filterData, setFilterData] = useState<Song[]>([]);
  const getSongs = useSongStore((state) => state.getSongs);
  const songs = useSongStore((state) => state.songs);
  const searchString = useSongStore((state) => state.searchString);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  useEffect(() => {
    if (!songs) return;
    if (searchString === "") {
      setFilterData(songs);
      return;
    }
    const result = songs.filter(
      (s) => s.revenueSource === searchString.toLowerCase()
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
