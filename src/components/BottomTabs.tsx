import { useState } from "react";
import clsx from "clsx";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Tab changed to: ${tab}`);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow z-50">
      <div className="flex items-center gap-2 px-6 py-2 overflow-x-auto">
        <div className="w-10"></div>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={clsx(
              "px-4 py-2 text-sm rounded-none border-t-4 transition-all duration-150",
              activeTab === tab
                ? "bg-green-50 text-green-800 font-semibold border-green-700"
                : "bg-white text-gray-700 border-transparent hover:bg-gray-50"
            )}
          >
            {tab}
          </button>
        ))}

        {/* + Button */}
        <div
          className="relative"
        >
          <button
            className="px-3 py-2 text-xl text-gray-500 hover:text-green-800 hover:bg-gray-500 rounded-lg"
            onClick={() => alert("Add Field clicked")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomTabs;
