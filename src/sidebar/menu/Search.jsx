import React from "react";
import { LuSearch } from "react-icons/lu";

const Search = ({ openMenu, setopenMenu }) => {
  return (
    <div
      className={`flex items-center gap-1 ${
        openMenu && "border-2 border-slate-300 rounded-md"
      }  `}
    >
      {/* SEARCH */}
      <LuSearch
        onClick={() => setopenMenu(!openMenu)}
        className={`text-[18px] text-slate-600 ${openMenu ? "ml-2" : "ml-1 hover:cursor-pointer"}`}
      />
      {openMenu && <div className="w-[1px] h-[20px] bg-slate-400" />}{" "}
      {openMenu && (
        <input
          type="text"
          placeholder="Search here.."
          className="bg-transparent outline-none px-1 text-[15px]"
        />
      )}
    </div>
  );
};

export default Search;
