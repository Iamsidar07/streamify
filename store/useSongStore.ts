import { Song, SongStore } from "@/types";
import { create } from "zustand";
import { SONGS as data } from "@/data";

const useSongStore = create<SongStore>((set) => ({
  songs: [],
  searchString: "",
  getSongs: async () => {
    set({ songs: data as Song[] });
  },
  setSongs: (songs) => {
    set({ songs });
  },
  setSearchString: (searchString) => {
    set({ searchString });
  },
}));

export default useSongStore;
