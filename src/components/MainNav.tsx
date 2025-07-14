import {
  EyeOff,
  ArrowUpDown,
  Filter,
  LayoutGrid,
  Download,
  Upload,
  Share2,
  Plus,
} from "lucide-react";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* Left: Actions */}
      <div className="flex items-center gap-4 text-sm text-gray-800">
        <button className="flex items-center gap-1">
          Tool bar <ChevronRightIcon />
        </button>
        <div className="border-l h-4 mx-2" />
        <button className="flex items-center gap-1">
          <EyeOff className="w-4 h-4" /> Hide fields
        </button>
        <button className="flex items-center gap-1">
          <ArrowUpDown className="w-4 h-4" /> Sort
        </button>
        <button className="flex items-center gap-1">
          <Filter className="w-4 h-4" /> Filter
        </button>
        <button className="flex items-center gap-1">
          <LayoutGrid className="w-4 h-4" /> Cell view
        </button>
      </div>

      {/* Right: Import/Export/Share/New Action */}
      <div className="flex items-center gap-3">
        <button className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1">
          <Upload className="w-4 h-4" /> Import
        </button>
        <button className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1">
          <Download className="w-4 h-4" /> Export
        </button>
        <button className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1">
          <Share2 className="w-4 h-4" /> Share
        </button>
        <button className="px-4 py-1.5 text-sm rounded-md bg-green-600 text-white flex items-center gap-1 hover:bg-green-700">
          <Plus className="w-4 h-4" /> New Action
        </button>
      </div>
    </div>
  );
};

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default MainNav;
