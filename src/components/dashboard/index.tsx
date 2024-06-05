import Heading from "./helper/heading";
import QuickActions from "./helper/quick_actions";
import Stats from "./helper/stats";

function Dashboard() {
  return (
    <div className=" w-full bg-[#F7FAFF] min-h-screen py-[29px] px-[12px]">
      <Heading />
      <Stats />
      <QuickActions />
    </div>
  );
}

export default Dashboard;
