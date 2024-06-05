import StatsCard, { StatsCardProps } from "./helper/stats_card";

function Stats() {
  const cards: StatsCardProps[] = [
    {
      color: "#148714",
      data: "100000 CAD",
      message: "2 payments received",
      title: "Income",
    },
    {
      color: "#D04141",
      data: "100000 CAD",
      message: "2 payments received",
      title: "Income",
    },
  ];
  return (
    <div className="flex gap-1">
      {cards.map((card, ind) => {
        return (
          <div key={ind} className="grow">
            <StatsCard {...card} />
          </div>
        );
      })}
      <div className="text-[#148714] text-[#D04141] hidden"></div>
    </div>
  );
}

export default Stats;
