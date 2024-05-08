import React, { useState } from "react";
import Menubar from "./menu/Menubar";

const Side = () => {
  const [openMenu, setopenMenu] = useState(true);
  return (
    <sidebar
      className={` h-[100%] gap-y-10 flex flex-col items-center relative p-5 ${
        openMenu && "w-[20%] duration-300"
      }`}
    >
      <Menubar openMenu={openMenu} setopenMenu={setopenMenu} />
    </sidebar>
  );
};

export default Side;
