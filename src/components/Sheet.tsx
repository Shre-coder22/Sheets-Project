import TopBar from "./TopBar";
import BottomTabs from "./BottomTabs";
import DataTable from "./Table/DataTable";
import { columns } from "./Table/columns";
import { mockData } from "../data/mockData";

const Sheet = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopBar />

      <main className="flex-1 p-6 overflow-auto">
        <DataTable data={mockData} columns={columns} />
      </main>

      <BottomTabs />
    </div>
  );
};

export default Sheet;
