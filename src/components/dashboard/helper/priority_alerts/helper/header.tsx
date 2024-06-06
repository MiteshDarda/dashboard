import { Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { FC } from "react";

interface HeaderProps {
  totalAlerts: number;
}

const Header: FC<HeaderProps> = ({ totalAlerts }) => {
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="flex justify-between">
      <h1 className=" text-[18px]">High Priority alerts ({totalAlerts})</h1>
      <Button
        sx={{ color: "#1A3875", fontSize: "14px" }}
        variant="text"
        endIcon={
          <ArrowForwardIosOutlinedIcon
            fontSize="small"
            sx={{ color: "#1A3875" }}
          />
        }
      >
        Text
      </Button>
    </div>
  );
};

export default Header;
