import { ChevronRight, MoreHorizontal } from "lucide-react";
import { NotiBell, Profile, Search, Shape } from "../assets/images";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 h-14 border-b bg-white">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-[#AFAFAF] font-medium">
        <img src={Shape} className="w-5 h-4 mr-2" />
        <span className="ml-1">Workspace</span>
        <ChevronRight size={12} />
        <span>Folder 2</span>
        <ChevronRight size={12} />
        <span className="text-[#121212]">Spreadsheet 3</span>
        <MoreHorizontal
          size={16}
          className="ml-1 cursor-pointer"
          onClick={() => alert("Spreadsheets options")}
        />
      </div>

      <div className="flex items-center gap-4 px-4 py-2 bg-white rounded-md w-fit">
        {/* Search Input */}
        <div
          className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-40 cursor-pointer"
          onClick={() => alert("Search here")}
        >
          <img src={Search} alt="Search" className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="ml-2 bg-transparent placeholder-gray-500 focus:outline-none w-full text-xs"
          />
        </div>

        {/* Notification Bell */}
        <div
          className="w-10 h-10 cursor-pointer"
          onClick={() => alert("Notifications")}
        >
          <img src={NotiBell} alt="Notifications" className="w-full h-full" />
        </div>

        {/* Profile Section */}
        <div
          className="items-center cursor-pointer h-10 w-28"
          onClick={() => alert("Person's Profile")}
        >
          <img src={Profile} alt="Profile" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
