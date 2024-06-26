import ActivityCard from "../common/activity_card";

function ScheduledActivities() {
  //* ----------------------------- Constants -----------------------------
  const datas = [
    <div>
      <span className="text-[#1A3875] text-[12px]">Gurpreet Singh</span>
      <span className="text-[#676666] text-[12px]">
        (Dispatch team) has created
      </span>
      <span className="text-[12px]">Load No. I-I-AAA-1325</span>
    </div>,
    <div>
      <span className="text-[#1A3875] text-[12px]">Gurpreet Singh</span>
      <span className="text-[#676666] text-[12px]">
        (Dispatch team) has created
      </span>
      <span className="text-[12px]">Load No. I-I-AAA-1325</span>
    </div>,
    <div>
      <span className="text-[#1A3875] text-[12px]">Gurpreet Singh</span>
      <span className="text-[#676666] text-[12px]">
        (Dispatch team) has created
      </span>
      <span className="text-[12px]">Load No. I-I-AAA-1325</span>
    </div>,
  ];
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="">
      <ActivityCard count={12} datas={datas} title="Scheduled Activities" />
    </div>
  );
}

export default ScheduledActivities;
