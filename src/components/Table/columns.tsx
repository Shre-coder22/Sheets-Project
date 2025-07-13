import type { ColumnDef } from "@tanstack/react-table";
import type { JobData } from "./types";
import clsx from "clsx";

export const columns: ColumnDef<JobData>[] = [
  {
    accessorKey: "jobRequest",
    header: "Job Request",
    cell: info => (
      <span className="text-sm">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "submitted",
    header: "Submitted",
    cell: info => (
      <span className="text-sm">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: info => {
      const status = info.getValue() as string;
      const colorMap: Record<string, string> = {
        "In-process": "bg-yellow-100 text-yellow-800",
        "Need to start": "bg-blue-100 text-blue-800",
        "Complete": "bg-green-100 text-green-800",
        "Blocked": "bg-red-100 text-red-800",
      };
      return (
        <span
          className={clsx(
            "text-xs font-medium px-2.5 py-0.5 rounded-full capitalize w-fit",
            colorMap[status] || "bg-gray-100 text-gray-800"
          )}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "submitter",
    header: "Submitter",
    cell: info => (
      <span className="text-sm">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: info => {
      const url = info.getValue() as string;
      return (
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm max-w-[150px] truncate block"
        >
          {url}
        </a>
      );
    },
  },
  {
    accessorKey: "assigned",
    header: "Assigned",
    cell: info => (
      <span className="text-sm">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: info => {
      const priority = info.getValue() as string;
      const colorMap: Record<string, string> = {
        High: "text-red-600",
        Medium: "text-yellow-600",
        Low: "text-blue-600",
      };
      return (
        <span className={clsx("text-sm font-semibold", colorMap[priority])}>
          {priority}
        </span>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: info => (
      <span className="text-sm">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "estValue",
    header: "Est. Value",
    cell: info => (
      <span className="text-sm">{info.getValue() as string}</span>
    ),
  },
];
