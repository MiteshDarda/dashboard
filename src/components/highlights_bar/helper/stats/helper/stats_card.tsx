import { FC } from "react";

export interface StatsCardProps {
  title: string;
  data: string;
  message: string;
  color: string;
}

const StatsCard: FC<StatsCardProps> = ({ title, data, message, color }) => {
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="grow h-[90px] border-[#CBCBCB] border-2 flex flex-col justify-center p-1">
      <h3 className="text-[#676666] text-[12px]">{title}</h3>
      <h2 className={`text-[${color}] text-[16px]`}>{data}</h2>
      <span className="text-[#676666] text-[12px]">{message}</span>
    </div>
  );
};

export default StatsCard;
