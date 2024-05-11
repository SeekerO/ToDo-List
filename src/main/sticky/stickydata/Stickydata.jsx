import React from "react";
import { HiPlus } from "react-icons/hi";
const Stickydata = ({ storedData, openAdd, setopenAdd }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {storedData &&
        storedData.map((item) => (
          <div className="w-[250px] h-[250px] bg-slate-400 rounded-md p-2  flex flex-col hover:cursor-pointer hover:shadow-md hover:shadow-slate-600">
            <label className="font-semibold text-[20px]">{item.title}</label>
            <label className="text-[12px]">{item.date}</label>
            <p className="h-full overflow-x-auto">{item.note}</p>
          </div>
        ))}

      <a
        onClick={() => setopenAdd(!openAdd)}
        className=" mb-10 w-[250px] h-[250px] bg-slate-400 rounded-md items-center justify-center flex hover:cursor-pointer hover:shadow-md hover:shadow-slate-600"
      >
        <HiPlus className="text-[60px] text-slate-200 " />
      </a>
    </div>
  );
};

export default Stickydata;
