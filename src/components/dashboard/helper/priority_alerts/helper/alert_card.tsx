import { FC, ReactElement } from "react";
import Button from "@mui/material/Button";

export interface AlertCardProps {
  avatar: ReactElement;
  title: string;
  loadNum: number;
  billTo: string;
  date: string;
  description: string;
}

const AlertCard: FC<AlertCardProps> = ({
  avatar,
  title,
  loadNum,
  billTo,
  date,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between items-center p-2 w-[380px] h-[170px] gap-4 bg-white rounded-lg shadow-[0_2px_8px_)_rgba(26, 56, 117, 1]">
      <div className="grow w-full flex justify-between">
        <div className=" flex gap-4">
          <div className=" h-[32px] w-[32px] bg-[#E0EAFF] grow flex justify-center items-center">
            {avatar}
          </div>
          <div className="grow text-[14px]">
            {title}
            <div className="gap-4 text-[10px] text-[#111111]">
              <span>Load No.: {loadNum} ,</span>
              <span>Bill To: {billTo}</span>
            </div>
          </div>
        </div>
        <div className="text-[#111111] text-[12px]">{date}</div>
      </div>
      <div className="text-[12px]">{description}</div>
      <div className="flex gap-2 w-full justify-end">
        <Button
          variant="text"
          sx={{ textDecoration: "underline", color: "#1A3875" }}
        >
          Ignore
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#1A3875" }}>
          Resolve
        </Button>
      </div>
    </div>
  );
};

export default AlertCard;
