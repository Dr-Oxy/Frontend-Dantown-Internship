/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AccessorColumnDef,
  GroupColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { avenirMedium } from "../../../public/assets/fonts";

interface BaseItem {
  id: string | number;
}
interface TableProps<T extends BaseItem> {
  columns: (AccessorColumnDef<T, any> | GroupColumnDef<T>)[]; // You should define proper types for columns based on your data structure
  data: T[];
}

const Table = <T extends BaseItem>({ columns, data }: TableProps<T>) => {
  //table
  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true, //enable row selection for all rows
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <div className="w-full bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={` ${avenirMedium.className} capitalize whitespace-nowrap px-5 lg:px-0 py-4 text-left text-sm font-medium  text-[#8695A0]`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`${
                      cell?.id?.includes("id")
                        ? "border-red-500 border-b-0"
                        : "border-[#D6DCE0] border-b "
                    } whitespace-nowrap px-5 lg:px-0 py-5 text-sm font-normal capitalize`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
