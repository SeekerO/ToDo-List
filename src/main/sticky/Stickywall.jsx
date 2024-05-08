import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Addsticky from "./Addsticky";
const Stickywall = () => {
  const [openAdd, setopenAdd] = useState(false);
  return (
    <div className="h-full w-screen">
      <h1 className="tracking-wider font-semibold text-[30px]">Sticky Wall</h1>
      <div className="w-full h-[90%] overflow-x-auto mt-2">
        <a
          onClick={() => setopenAdd(!openAdd)}
          className="w-[250px] h-[250px] bg-slate-400 rounded-md items-center justify-center flex hover:cursor-pointer hover:shadow-md hover:shadow-slate-600"
        >
          <HiPlus className="text-[60px] text-slate-200 " />
        </a>
      </div>
      <Addsticky openAdd={openAdd} setopenAdd={setopenAdd} />
    </div>
  );
};

export default Stickywall;
