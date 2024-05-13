import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
const ContentList = ({ openMenu }) => {
  const List = [{ title: "Personal", content: 3, color: "bg-[#e5c185]" }];
  return (
    <div className={` ${!openMenu && "justify-center flex flex-col"} `}>
      <h4
        className={`mt-4 text-[11px] font-semibold w-full ${
          !openMenu && "text-center"
        }`}
      >
        LIST
      </h4>
      {List.map((List, index) => (
        <div
          key={index}
          className={`relative mt-1 flex items-center gap-2 p-1 w-full hover:shadow-md hover:shadow-slate-400 rounded-md cursor-pointer ${
            !openMenu && "justify-center"
          }`}
        >
          <div
            className={`w-3.5 h-3.5 flex-shrink-0 rounded-sm ${List.color}`}
          />
          {openMenu && (
            <>
              <a className=" text-[13px] flex items-center">{List.title}</a>

              <div className=" absolute  right-0  text-[9px] items-center bg-slate-300 px-1.5 rounded-sm mr-1">
                {List.content}
              </div>
            </>
          )}
        </div>
      ))}

      <Link
        to={"/addnewlist"}
        className={`mt-1 flex items-center gap-2 p-1 w-full hover:shadow-md hover:shadow-slate-400 rounded-md cursor-pointer ${
          !openMenu ? "justify-center" : "justify-start"
        }`}
      >
        <GoPlus />
        {openMenu && (
          <label className="text-[12px] font-semibold cursor-pointer">Add New List</label>
        )}
      </Link>
    </div>
  );
};

export default ContentList;