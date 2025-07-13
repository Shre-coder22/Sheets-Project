import { Bell } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
      {/* Left: Search */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 pr-10 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      {/* Right: Bell and Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => console.log("Notifications clicked")}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Bell size={20} className="text-gray-700" />
        </button>

        <button
          onClick={() => console.log("New Action clicked")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          + New Action
        </button>
      </div>
    </div>
  );
};

export default TopBar;
