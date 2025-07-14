import {
  ArrowAutoFit,
  ArrowDownload,
  ArrowSplit,
  ArrowUpload,
  Share,
  Filter,
  ArrowSort,
  Eye,
  ChevronDouble,
} from "../assets/images";

const MainNav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-1 h-12 border-b bg-white">
      {/* Left: Actions */}
      <div className="flex items-center gap-4 mx-2 text-sm tracking-wider font-normal text-[#121212]">
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Toolbar toggle ")}
        >
          Tool bar
          <img src={ChevronDouble} className="w-4 h-4 text-black" />
        </button>
        <div className="border-l h-4 mx-2" />
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Hide fields ")}
        >
          <img src={Eye} className="w-5 h-5 text-black" /> Hide fields
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Sort ")}
        >
          <img src={ArrowSort} className="w-5 h-5 text-black" /> Sort
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Filter ")}
        >
          <img src={Filter} className="w-5 h-5 text-black" /> Filter
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Cell view ")}
        >
          <img src={ArrowAutoFit} className="w-5 h-5 text-black" /> Cell view
        </button>
      </div>

      {/* Right: Import/Export/Share/New Action */}
      <div className="flex items-center gap-3 text-[#545454]">
        <button
          className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1"
          onClick={() => console.log("Import ")}
        >
          <img src={ArrowDownload} className="w-5 h-5 text-black" /> Import
        </button>
        <button
          className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1"
          onClick={() => console.log("Export ")}
        >
          <img src={ArrowUpload} className="w-5 h-5 text-black" /> Export
        </button>
        <button
          className="px-3 py-1.5 text-sm border rounded-md flex items-center gap-1"
          onClick={() => console.log("Share ")}
        >
          <img src={Share} className="w-5 h-5 text-black" /> Share
        </button>
        <button
          className="px-4 py-1.5 text-sm rounded-md bg-[#4B6A4F] font-medium text-white flex items-center gap-1 hover:bg-green-700"
          onClick={() => console.log("New Action ")}
        >
          <img src={ArrowSplit} className="w-5 h-5" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default MainNav;
