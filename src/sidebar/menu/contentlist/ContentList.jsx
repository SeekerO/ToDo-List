import React, { useLayoutEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import ViewContent from "./ViewContent";
const ContentList = ({ openMenu, List }) => {
  const [OpenViewContent, setOpenViewContent] = useState(false);
  const displayColorPicked = (color) => {
    const style = {
      backgroundColor: color,
    };

    return <div className="w-4 h-4 flex-shrink-0 rounded-sm" style={style} />;
  };

  return (
    <div className={` ${!openMenu && "justify-center flex flex-col"} `}>
      <h4
        className={`mt-4 text-[11px] font-semibold w-full ${
          !openMenu && "text-center"
        }`}
      >
        LIST
      </h4>
      <div className="h-[35vh] overflow-visible">
        {console.log(List)}
        {List?.map((data, index) => (
          <Link
            to={"/listitem/" + data.id}
            key={index}
            className={`relative mt-1 flex items-center gap-2 p-1 w-full hover:shadow-md hover:shadow-slate-400 rounded-md cursor-pointer ${
              !openMenu && "justify-center"
            }`}
          >
            {displayColorPicked(data.color)}
            {openMenu && (
              <>
                <a className=" text-[13px] flex items-center">
                  {data.category}
                </a>

                <div className=" absolute  right-0  text-[9px] items-center bg-slate-300 px-1.5 rounded-sm mr-1"></div>
              </>
            )}
          </Link>
        ))}
        <Link
          to={"/addnewlist"}
          className={`mt-1 flex items-center gap-2 p-1 w-full hover:shadow-md hover:shadow-slate-400 rounded-md cursor-pointer ${
            !openMenu ? "justify-center" : "justify-start"
          }`}
        >
          <GoPlus />
          {openMenu && (
            <label className="text-[12px] font-semibold cursor-pointer">
              Add New List
            </label>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ContentList;
