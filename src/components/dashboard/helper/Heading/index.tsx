import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function Heading() {
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="w-full flex justify-between items-center">
      <div className="montserrat-500 text-[24px]">Dashboard</div>
      <div>
        <div className="w-[132px] h-[32px] bg-white flex justify-center items-center rounded-full">
          <SearchOutlinedIcon className=" border-r-[1px] grow border-[#CBCBCB]" />
          <NotificationsOutlinedIcon className=" border-r-[1px] grow border-[#CBCBCB]" />
          <MoreVertOutlinedIcon className="grow" />
        </div>
      </div>
    </div>
  );
}

export default Heading;
