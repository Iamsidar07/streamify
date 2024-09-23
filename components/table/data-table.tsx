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

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
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
    <div className="border bg-primary border-secondary rounded-lg">
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
      <table className="w-full">
        <thead className="tableRow header text-left border-b border-b-secondary text-sm">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} className="p-3 text-secondary font-bold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
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
                className="border-b border-b-secondary hover:bg-secondary hover:bg-opacity-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 text-left">
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
          className="bg-muted px-4 py-2 border border-secondary disabled:opacity-50 cursor-pointer rounded"
        >
          Previous
        </button>
        <button
          onClick={() => table.nextPage()}
          className="bg-muted px-4 py-2 border border-secondary disabled:opacity-50 cursor-pointer rounded"
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
