"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  console.log("data table loaded");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="border bg-muted border-secondary rounded-lg relative overflow-auto">
      <div className="flex items-center py-4 px-3">
        <input
          placeholder="Filter by song name..."
          value={
            (table.getColumn("songName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) => {
            table.getColumn("songName")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm border border-secondary rounded-md px-4 py-2 bg-transparent outline-none"
        />
      </div>
      <table className="w-full text-sm">
        <thead className="text-left border-b border-b-secondary ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="p-3 px-6 text-secondary font-bold whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="tableRow tablebody">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-b border-b-secondary hover:bg-secondary hover:bg-opacity-50 truncate"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-3 px-6 text-left truncate w-[90%]"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                No results.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-end space-x-2 py-4 pr-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-secondary px-4 py-2 border border-secondary disabled:opacity-50 cursor-pointer rounded"
        >
          Previous
        </button>
        <button
          onClick={() => table.nextPage()}
          className="bg-secondary px-4 py-2 border border-secondary disabled:opacity-50 cursor-pointer rounded"
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default DataTable;
