import { Song } from "@/components/table/column";
import { create } from "zustand";

const data: Song[] = [
  {
    id: "1",
    songName: "Blinding Lights",
    artist: "The Weeknd",
    streamCount: 25000000,
    userId: "user123",
    date: new Date("2020-11-29"),
    revenueSource: "streams",
  },
  {
    id: "2",
    songName: "Levitating",
    artist: "Dua Lipa",
    streamCount: 15000000,
    userId: "user456",
    date: new Date("2020-10-01"),
    revenueSource: "advertisements",
  },
  {
    id: "3",
    songName: "Shape of You",
    artist: "Ed Sheeran",
    streamCount: 30000000,
    userId: "user789",
    date: new Date("2017-01-06"),
    revenueSource: "subscriptions",
  },
  {
    id: "4",
    songName: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    streamCount: 20000000,
    userId: "user101",
    date: new Date("2021-07-09"),
    revenueSource: "advertisements",
  },
  {
    id: "5",
    songName: "Bad Habits",
    artist: "Ed Sheeran",
    streamCount: 18000000,
    userId: "user202",
    date: new Date("2021-06-25"),
    revenueSource: "subscriptions",
  },
];

interface SongStore {
  songs: Song[] | null;
  getSongs: () => void;
  setSongs: (songs: Song[]) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

const useSongStore = create<SongStore>((set) => ({
  songs: [],
  searchString: "",
  getSongs: async () => {
    console.log("getting songs for u...");
    set({
      songs: data,
    });
  },
  setSongs: (songs) => {
    set({ songs });
  },
  setSearchString: (searchString) => {
    set({ searchString });
  },
}));

export default useSongStore;
