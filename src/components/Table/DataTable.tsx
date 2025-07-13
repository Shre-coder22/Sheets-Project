import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import type { JobData } from "./types";

interface DataTableProps {
  data: JobData[];
  columns: ColumnDef<JobData>[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-gray-600 text-sm font-medium">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-3 text-left whitespace-nowrap">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-white text-sm">
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 transition cursor-pointer"
              onClick={() => console.log(`Row ${row.id} clicked`)}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
