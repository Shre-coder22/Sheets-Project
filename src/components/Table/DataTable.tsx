import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import type { JobData } from "./types";
import clsx from "clsx";
import { ArrowSplit, ArrowSplitW, ArrowSync, Link, More, Briefcase, Person, Calendar, ChevronCircle, Globe, Emoji, Dropdown } from "../../assets/images";
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

  const headerIcons: Record<string, string> = {
    'Job Request': Briefcase,
    'Submitted': Calendar,
    'Status': ChevronCircle,
    'Submitter': Person,
    'URL': Globe,
    'Assigned': Emoji,
  };

  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCell) return;

      setActiveCell(prev => {
        if (!prev) return prev;

        const maxRow = 25; 
        const maxCol = columns.length - 1;
        const { row, col } = prev;

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
    <div className=" mr-6">
      <div className="w-full border border-gray-200 rounded-lg shadow-sm bg-white mr-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-separate border-spacing-0">
            <thead>
              {/* Category Row */}
              <tr className="text-xs text-[#545454] font-normal bg-gray-100 border-b">
                <th className="px-2 text-left bg-white border-r w-10"></th>

                <th colSpan={4} className="px-4 py-1 text-left border-r bg-[#E2E2E2]">
                  <div className="w-full h-full flex items-center">
                    <button
                      onClick={() => console.log("Link ")}
                      className="flex items-center rounded-sm p-1 mx-1 gap-1 font-normal bg-[#eeeeee]"
                    >
                      <img src={Link} className="w-4 h-4" />
                      Q3 Financial Overview
                    </button>
                    <button onClick={() => console.log("Refresh ")}>
                      <img src={ArrowSync} className="w-4 h-4" />
                    </button>
                  </div>
                </th>

                <th colSpan={1} className="bg-white"></th>

                <th className="items-center border-r bg-[#d2e0d4] text-[#505450]">
                  <div className="h-full flex items-center gap-2 justify-center">
                    <button onClick={() => console.log("Split table ")}>
                      <img src={ArrowSplit} className="w-4 h-4" />
                    </button>
                    ABC
                    <button onClick={() => console.log("More options ")}>
                      <img src={More} className="w-4 h-4" />
                    </button>
                  </div>
                </th>

                <th colSpan={2} className="px-2 py-1 items-center border-r bg-[#dccffc] text-[#463e59]">
                  <div className="h-full flex items-center gap-2 justify-center">
                    <button onClick={() => console.log("Split table ")}>
                      <img src={ArrowSplitW} className="w-4 h-4" />
                    </button>
                    Answer a question
                    <button onClick={() => console.log("More options ")}>
                      <img src={More} className="w-4 h-4" />
                    </button>
                  </div>
                </th>

                <th className="items-center px-2 py-1 border-r bg-[#fac2af] text-[#695149]">
                  <div className="h-full flex items-center gap-2 justify-center">
                    <button onClick={() => console.log("Split table ")}>
                      <img src={ArrowSplitW} className="w-4 h-4" />
                    </button>
                    Extract
                    <button onClick={() => console.log("More options ")}>
                      <img src={More} className="w-4 h-4" />
                    </button>
                  </div>
                </th>

                <th className="w-16 h-4 bg-white text-center p-0">
                  <div className="flex items-center justify-center h-full">
                    <Plus size={16} />
                  </div>
                </th>
              </tr>

              {/* Column Header Row */}
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="bg-[#eeeeee] text-[#757575] text-sm font-semibold border-b"
                >
                  <th className="px-2 py-1 text-left border-r w-10 h-8">#</th>
                  {headerGroup.headers.map((header) => {
                    const headerLabel = header.column.columnDef.header as string;
                    const iconSrc = headerIcons[headerLabel];

                    const showDropdown = !["Assigned", "Priority", "Due Date", "Est. Value"].includes(headerLabel);
                    return (
                      <th
                        key={header.id}
                        className={clsx(
                          "px-2 py-1 text-left border-r whitespace-nowrap h-8",
                          {
                            "bg-[#e8f0e9] text-[#666c66]": headerLabel === "Assigned",
                            "bg-[#eae3fc] text-[#655c80]": ["Priority", "Due Date"].includes(headerLabel),
                            "bg-[#ffe9e0] text-[#8c6c62]": headerLabel === "Est. Value",
                            "w-24": headerLabel === "Job Request",
                          }
                        )}
                      >
                        {!header.isPlaceholder && (
                          <div className="flex items-center justify-between gap-1">
                            {/* Left: Icon + label */}
                            <div className="flex items-center gap-1">
                              {iconSrc && (
                                <img
                                  src={iconSrc}
                                  alt={`${headerLabel} icon`}
                                  className="w-4 h-4"
                                />
                              )}
                              <span>{headerLabel}</span>
                            </div>

                            {/* Right: Custom dropdown icon */}
                            {showDropdown && (
                                <img
                                  src={Dropdown}
                                  alt="Dropdown"
                                  className="w-4 h-4 opacity-100 cursor-pointer"
                                  onClick={() => alert("Dropdown opened")}
                                />
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}
                  <th className="w-32  bg-white h-8"></th>
                </tr>
              ))}
            </thead>

            <tbody className="text-sm text-gray-700">
              {Array.from({ length: 26 }).map((_, rowIndex) => {
                const row = table.getRowModel().rows[rowIndex];
                return (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition cursor-pointer border-b h-8"
                  >
                    <td className="px-2 py-1 border-r h-8">{rowIndex + 1}</td>
                    {row
                      ? row.getVisibleCells().map((cell, colIndex) => (
                          <td
                            key={cell.id}
                            tabIndex={0}
                            onClick={() => setActiveCell({ row: rowIndex, col: colIndex })}
                            className={`px-2 py-1 border-r whitespace-nowrap outline-offset-0 h-8 transition-all duration-150
                              ${
                                activeCell?.row === rowIndex && activeCell?.col === colIndex
                                  ? "outline outline-2 outline-[#6c8b70] shadow-md scale-[1.02] z-10 bg-white"
                                  : "outline-none"
                              }`
                            }
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
                            className={`px-2 py-1 border-r whitespace-nowrap outline-offset-0 h-8 transition-all duration-150
                              ${
                                activeCell?.row === rowIndex && activeCell?.col === colIndex
                                  ? "outline outline-2 outline-[#6c8b70] shadow-md scale-[1.02] z-10 bg-white"
                                  : "outline-none"
                              }`
                            }
                          ></td>
                        ))}
                    <td className="w-16 h-8 bg-white"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
