export interface BarItem {
  name: string;
  artist: string;
  streams: number;
}

export interface LineItem {
  name: string;
  total_users: number;
  active_users: number;
}

export interface PieItem {
  name: string;
  value: number;
  fill: string;
}

export interface Song {
  id: string;
  songName: string;
  artist: string;
  streamCount: number;
  userId: string;
  date: Date;
  revenueSource: "advertisements" | "subscriptions" | "streams";
}

export interface SongStore {
  songs: Song[] | null;
  getSongs: () => void;
  setSongs: (songs: Song[]) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}
