import StatsCard, { StatsCardData } from "./helper/stats_card";

function Stats() {
  const datas: StatsCardData[] = [
    [
      { value: 50, label: "Upcoming", color: "#FFCB49" },
      { value: 100, label: "Ongoing", color: "#7464FF" },
      { value: 50, label: "Completed", color: "#4FD2B5" },
    ],
    [
      { value: 150, label: "Upcoming", color: "#FFCB49" },
      { value: 200, label: "Ongoing", color: "#7464FF" },
      { value: 50, label: "Completed", color: "#4FD2B5" },
    ],
    [
      { value: 500, label: "Upcoming", color: "#FFCB49" },
      { value: 1000, label: "Ongoing", color: "#7464FF" },
      { value: 1230, label: "Completed", color: "#4FD2B5" },
    ],
    [
      { value: 5000, label: "Upcoming", color: "#FFCB49" },
      { value: 1000, label: "Ongoing", color: "#7464FF" },
      { value: 23401, label: "Completed", color: "#4FD2B5" },
    ],
  ];
  //   const data: StatsCardData = ;
  return (
    <div className="flex justify-between flex-wrap">
      {datas.map((data, ind) => {
        return (
          <div key={ind}>
            <StatsCard datas={data} />
          </div>
        );
      })}
      {/* To Pre Load Classes in tailwind */}
      <div className="from-white m-1 to-[#FFCB49] from-white m-1 to-[#7464FF] from-white m-1 to-[#4FD2B5] hidden"></div>
    </div>
  );
}

export default Stats;
