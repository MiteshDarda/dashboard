import { PieChart, useDrawingArea } from "@mui/x-charts";
import { FC } from "react";
import styled from "styled-components";

const pieParams = { height: 110, margin: { right: 5 } };

export type StatsCardData = { value: number; label: string; color: string }[];

interface StatsCardProps {
  datas: StatsCardData;
}

const StyledText = styled("text")(() => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 10,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const StatsCard: FC<StatsCardProps> = ({ datas }) => {
  const total = datas.reduce((acc, data) => acc + data.value, 0);
  return (
    <div
      className={
        "bg-white w-[196px] h-[266px] m-2 flex-col flex justify-around items-center" +
        "shadow-[0_2px_8px_)_rgba(26, 56, 117, 1] rounded-2xl p-2"
      }
    >
      <h2>Orders</h2>
      <PieChart
        {...pieParams}
        slotProps={{
          legend: { hidden: true },
        }}
        series={[
          {
            data: [...datas],
            innerRadius: 35,
            outerRadius: 55,
            startAngle: 0,
            endAngle: 360,
            highlightScope: { highlighted: "item", faded: "global" },
          },
        ]}
        sx={{ position: "static" }}
      >
        <PieCenterLabel>Total : {total}</PieCenterLabel>
      </PieChart>
      {datas.map((data, ind) => {
        return (
          <div
            key={ind}
            className={`flex justify-around bg-gradient-to-r from-white m-1 to-[${data.color}] p-1 text-sm`}
          >
            <span>{data.label}</span>
            <span>{data.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
