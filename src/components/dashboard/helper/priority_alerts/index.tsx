import AlertCard, { AlertCardProps } from "./helper/alert_card";
import KitesurfingOutlinedIcon from "@mui/icons-material/KitesurfingOutlined";
import Header from "./helper/header";

const PriorityAlerts = () => {
  const totalAlerts = 14;
  const alertDatas: AlertCardProps[] = [
    {
      avatar: (
        <KitesurfingOutlinedIcon sx={{ height: "full", width: "full" }} />
      ),
      billTo: "RoaDo demo Bangalore",
      date: "5 June 2024",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magnam beatae? Laboriosam! ",
      loadNum: 123,
      title: "Driver Raised Concern",
    },
    {
      avatar: (
        <KitesurfingOutlinedIcon sx={{ height: "full", width: "full" }} />
      ),
      billTo: "RoaDo demo Bangalore",
      date: "5 June 2024",
      description:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magnam beatae? Laboriosam! ",
      loadNum: 123,
      title: "Driver Raised Concern",
    },
  ];

  return (
    <div className="m-2 w-full flex flex-col">
      <Header totalAlerts={totalAlerts} />
      <div className="flex justify-between grow items-center flex-wrap w-full">
        {alertDatas.map((data, ind) => {
          return (
            <div key={ind} className="">
              <AlertCard {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriorityAlerts;
