import React from "react";
import { HiPlus } from "react-icons/hi";
import moment from "moment";
const Stickydata = ({ storedData, openAdd, setopenAdd }) => {
  const date_time = (item) => {
    const formattedDateTime = moment(item).format("DD-MM-YYYY ( HH:mm a )");

    return formattedDateTime;
  };
  return (
    <div className="flex gap-3 flex-wrap">
      {storedData &&
        storedData.map((item) => (
          <div className="w-[250px] h-[250px] text-wrap bg-slate-400 rounded-md p-2  flex flex-col hover:cursor-pointer hover:shadow-md hover:shadow-slate-600">
            <label className="font-semibold text-[20px]">{item.title}</label>
            {/* <label className="text-[12px]">{date_time(item.date)}</label> */}
            <note className="text-ellipsis overflow-x-auto break-words font-thin">
              {item.note}
            </note>
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
