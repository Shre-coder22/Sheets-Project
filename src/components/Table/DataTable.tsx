import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import type { JobData } from "./types";
import { Plus } from "lucide-react";

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

  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCell) return;

      setActiveCell(prev => {
        if (!prev) return prev;

        const maxRow = 25; 
        const maxCol = columns.length - 1;
        let { row, col } = prev;

        switch (e.key) {
          case "ArrowUp":
            return { row: Math.max(row - 1, 0), col };
          case "ArrowDown":
            return { row: Math.min(row + 1, maxRow), col };
          case "ArrowLeft":
            return { row, col: Math.max(col - 1, 0) };
          case "ArrowRight":
            return { row, col: Math.min(col + 1, maxCol) };
          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCell, columns.length]);

  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            {/* Category Row */}
            <tr className="text-xs text-gray-700 font-medium bg-gray-100 border-b">
              <th className="px-4 py-2 text-left border-r w-10"></th>
              <th colSpan={4} className="px-4 py-2 text-left border-r">
                <div className="flex items-center gap-1 text-blue-700">
                  🔗 Q3 Financial Overview
                </div>
              </th>
              <th colSpan={1} className="bg-white"></th>
              <th className="px-4 py-2 text-left border-r bg-green-100 text-green-800">
                ABC
              </th>
              <th colSpan={2} className="px-4 py-2 text-left border-r bg-purple-100 text-purple-800">
                Answer a question
              </th>
              <th className="px-4 py-2 text-left border-r bg-red-100 text-red-800">
                Extract
              </th>
              <th className="w-10 text-gray-400 px-2">
                <Plus size={16} />
              </th>
            </tr>

            {/* Column Header Row */}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="bg-gray-50 text-gray-600 text-sm font-medium border-b"
              >
                <th className="px-4 py-3 text-left border-r w-10">#</th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left border-r whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
                <th className="w-10 border-gray-200"></th>
              </tr>
            ))}
          </thead>

          <tbody className="text-sm text-gray-700">
            {Array.from({ length: 26 }).map((_, rowIndex) => {
              const row = table.getRowModel().rows[rowIndex];
              return (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition cursor-pointer border-b"
                >
                  <td className="px-4 py-3 border-r">{rowIndex + 1}</td>
                  {row
                    ? row.getVisibleCells().map((cell, colIndex) => (
                        <td
                          key={cell.id}
                          tabIndex={0}
                          onClick={() => setActiveCell({ row: rowIndex, col: colIndex })}
                          className={`px-4 py-3 border-r whitespace-nowrap outline-offset-0 ${
                            activeCell?.row === rowIndex &&
                            activeCell?.col === colIndex
                              ? "outline outline-2 outline-green-600"
                              : "outline-none"
                          }`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))
                    : Array.from({ length: columns.length }).map((_, colIndex) => (
                        <td
                          key={`empty-${colIndex}`}
                          tabIndex={0}
                          onClick={() => setActiveCell({ row: rowIndex, col: colIndex })}
                          className={`px-4 py-3 border-r text-gray-300 outline-offset-0 ${
                            activeCell?.row === rowIndex &&
                            activeCell?.col === colIndex
                              ? "outline outline-2 outline-green-600"
                              : "outline-none"
                          }`}
                        ></td>
                      ))}
                  <td className="border-gray-100"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
