import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";

function QuickActions() {
  const actions = [
    { label: "Create Indents", icon: <LabelImportantOutlinedIcon /> },
    { label: "Add Vehicle", icon: <LocalShippingOutlinedIcon /> },
    { label: "Add Trailer", icon: <AddCommentOutlinedIcon /> },
    { label: "Add Driver", icon: <PersonAddOutlinedIcon /> },
    { label: "Add Indents", icon: <AddToPhotosOutlinedIcon /> },
  ];
  return (
    <div className="m-2 w-full">
      <h1 className=" text-[18px]">Quick Actions</h1>
      <div
        className={
          "w-full h-[74px] flex justify-between items-center bg-white my-2 " +
          "rounded-lg shadow-[0_2px_8px_)_rgba(26, 56, 117, 1]"
        }
      >
        {actions.map((action, ind) => {
          return (
            <div
              key={ind}
              className={
                "grow flex flex-col justify-center items-center hover:bg-[#CBCBCB] h-full " +
                `${ind + 1 !== actions.length ? "border-r-[1px] border-[#CBCBCB]" : ""}`
              }
            >
              {action.icon}
              {action.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
