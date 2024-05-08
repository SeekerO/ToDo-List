import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "./Search";
import Taskmenu from "./Taskmenu";
import ContentList from "./ContentList";
import SettingsLogin from "./SettingsLogin";

const Menubar = ({ openMenu, setopenMenu }) => {
  return (
    <div
      className={` h-full p-2 bg-slate-200 relative rounded-lg  ${
        openMenu ? "" : "flex flex-col items-center justify-center"
      }`}
    >
      {/* HEADER */}
      <div className="flex relative items-center">
        {openMenu && <label className="font-semibold">MENU</label>}
        <div
          onClick={() => setopenMenu(!openMenu)}
          className={`right-0 hover:text-blue-500 cursor-pointer ${
            openMenu && "absolute"
          }`}
        >
          <RxHamburgerMenu />
        </div>
      </div>

      {/* MENU */}
      <div className="h-full w-full mt-4 space-y-2 flex flex-col">
        <Search openMenu={openMenu} setopenMenu={setopenMenu} />
        <Taskmenu openMenu={openMenu} />
        <div className="w-full h-[1px] bg-slate-300" />
        <ContentList openMenu={openMenu} />
        <div className="w-full h-[1px] bg-slate-300" />
      </div>

      <SettingsLogin openMenu={openMenu} />
    </div>
  );
};

export default Menubar;
