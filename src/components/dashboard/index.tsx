import Heading from "./helper/Heading";
import PriorityAlerts from "./helper/priority_alerts";
import QuickActions from "./helper/quick_actions";
import Stats from "./helper/stats";

function Dashboard() {
  return (
    <div className=" w-full bg-[#F7FAFF] min-h-screen py-[29px] px-[12px] gap-4">
      <Heading />
      <Stats />
      <QuickActions />
      <PriorityAlerts />
    </div>
  );
}

export default Dashboard;
