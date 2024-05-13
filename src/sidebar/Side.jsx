import React, { useState } from "react";
import Menubar from "./menu/Menubar";

const Side = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div
      className={` h-[100%] gap-y-10 flex flex-col items-center relative p-5 `}
    >
      <Menubar openMenu={openMenu} setopenMenu={setopenMenu} />
    </div>
  );
};

export default Side;
