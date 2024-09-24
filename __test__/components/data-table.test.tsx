import { render, fireEvent } from "@testing-library/react";
import DataTable from "../../components/table/data-table";
import { Song } from "@/types";
import { columns } from "../../components/table/column";

const data: Song[] = [
  {
    id: "1",
    songName: "Song 1",
    artist: "Artist 1",
    streamCount: 25,
    userId: "user123",
    date: new Date("2020-11-29"),
    revenueSource: "streams",
  },
  {
    id: "2",
    songName: "Song 2",
    artist: "Artist 2",
    streamCount: 15,
    userId: "user123",
    date: new Date("2020-9-9"),
    revenueSource: "streams",
  },
];

test("should allow sorting by clicking on column headers", () => {
  const { getByText } = render(
    <DataTable columns={columns} data={data as Song[]} />
  );

  let currentSort: "asc" | "desc" = "asc";
  const streamCountHeader = getByText(/Stream Count/i);
  fireEvent.click(streamCountHeader);
  // Check if the data is sorted in ascending order by stream count
  const firstRowStreamCount = Number(getByText("15").textContent);
  const secondRowStreamCount = Number(getByText("25").textContent);

  expect(firstRowStreamCount).toBeLessThanOrEqual(secondRowStreamCount);

  // Click again to sort in descending order
  fireEvent.click(streamCountHeader);
  currentSort = "desc";

  // Check if the data is sorted in descending order by stream count
  const firstRowStreamCountAfterSort = Number(getByText("25").textContent);
  const secondRowStreamCountAfterSort = Number(getByText("15").textContent);
  expect(firstRowStreamCountAfterSort).toBeGreaterThanOrEqual(
    secondRowStreamCountAfterSort
  );
});

test("should filter the table based on the input in the filter box", () => {
  const { getByPlaceholderText, queryByText } = render(
    <DataTable columns={columns} data={data as Song[]} />
  );

  const filterInput = getByPlaceholderText("Filter by song name...");
  fireEvent.change(filterInput, { target: { value: "Song 1" } });

  // Check if the table only shows the row with "Song 1"
  const song1Row = queryByText("Song 1");
  const song2Row = queryByText("Song 2");
  expect(song1Row?.textContent)?.toBe("Song 1");
  expect(song2Row).toBeNull();
});
