import { useState } from "react";
import clsx from "clsx";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived", "Completed", "Cancelled"];

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`Tab changed to: ${tab}`);
  };

  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-white border-t border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={clsx(
            "text-sm px-4 py-1.5 rounded-full transition",
            activeTab === tab
              ? "bg-blue-600 text-white font-semibold"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BottomTabs;
