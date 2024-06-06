import CompletedActivities from "./helper/completed_activities";
import Header from "./helper/header";
import ScheduledActivities from "./helper/scheduled_activities";
import Stats from "./helper/stats";

function HighlightsBar() {
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="w-[360px] h-full py-6 px-2 gap-4">
      <Header />
      <Stats />
      <CompletedActivities />
      <ScheduledActivities />
    </div>
  );
}

export default HighlightsBar;
