function Header() {
  //* ----------------------------- Constants -----------------------------
  const totalHeighlights = 22;
  const nowDate = new Date();
  const date =
    nowDate.getDate() + "/" + nowDate.getMonth() + "/" + nowDate.getFullYear();
  //* ----------------------------- JSX -----------------------------
  return (
    <div className="mb-[14px]">
      <h1 className=" text-[18px]">
        High Priority alerts ({totalHeighlights})
      </h1>
      <span className=" text-[12px] font-[#676666]">{date}</span>
    </div>
  );
}

export default Header;
