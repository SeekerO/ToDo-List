import React from "react";
import { HiPlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
const Stickydata = ({ storedData, setstoredData, openAdd, setopenAdd }) => {
  const removeStickyNote = (index) => {
    const updatedEvents = [...storedData];
    updatedEvents.splice(index, 1);
    window.localStorage.setItem("stickynote", JSON.stringify(updatedEvents));
    setstoredData(updatedEvents);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {storedData &&
        storedData.map((item) => (
          <div
            style={{ backgroundColor: item?.color }}
            className="w-[250px] h-[250px] text-wrap bg-slate-400 rounded-md p-2  flex flex-col hover:shadow-md hover:shadow-slate-600"
          >
            {console.log(item)}
            <div className="font-semibold text-[20px] flex justify-between items-center">
              <span>{item.title}</span>
              <span
                onClick={() => removeStickyNote()}
                className="hover:text-red-500 cursor-pointer"
              >
                <FaTrash />
              </span>
            </div>
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
