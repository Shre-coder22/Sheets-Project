import { ChevronRight, MoreHorizontal, Bell } from "lucide-react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
        <div className="w-4 h-4 bg-green-200 rounded-sm" /> {/* green box */}
        <span className="ml-1">Workspace</span>
        <ChevronRight size={14} />
        <span>Folder 2</span>
        <ChevronRight size={14} />
        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
        <MoreHorizontal size={16} className="ml-1 text-gray-400" />
      </div>

      {/* Right: Search, Bell, Avatar */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search within sheet"
          className="px-3 py-1.5 text-sm border rounded-md w-56 placeholder-gray-400 focus:outline-none focus:ring"
        />
        <div className="relative">
          <Bell className="text-gray-700 w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://via.placeholder.com/32"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm leading-tight">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-gray-500">john.doe...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
