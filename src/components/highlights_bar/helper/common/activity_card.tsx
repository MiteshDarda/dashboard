import { Button } from "@mui/material";
import { FC, ReactElement } from "react";

export interface ActivityProps {
  count: number;
  datas: ReactElement[];
  title: string;
}

const ActivityCard: FC<ActivityProps> = ({ count, datas, title }) => {
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className=" text-[14px]">
          {title} ({count})
        </h1>
        <Button
          sx={{
            color: "#111111",
            fontSize: "12px",
            textDecoration: "underline",
          }}
          variant="text"
        >
          View All
        </Button>
      </div>
      <div className=" border-[1px] border-[#CBCBCB] rounded-lg">
        {datas.map((data, ind) => {
          return (
            <div
              key={ind}
              className={
                "p-2" +
                " " +
                `${datas.length - 1 === ind ? " " : "border-b-[#CBCBCB] border-[1px]"}`
              }
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityCard;
