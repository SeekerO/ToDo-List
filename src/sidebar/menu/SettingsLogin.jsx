import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiSignInLight } from "react-icons/pi";

const SettingsLogin = ({ openMenu }) => {
  return (
    <div
      className={`hidden flex flex-col  w-full gap-2 absolute bottom-0 mb-2 ${
        openMenu ? "justify-start " : "justify-center items-center"
      }`}
    >
      <a
        className={`flex gap-2 items-center text-[13px] hover:shadow-md hover:shadow-slate-400 cursor-pointer p-1 rounded-md ${
          openMenu ? "mr-4" : "w-fit"
        }`}
      >
        <GiSettingsKnobs />
        {openMenu && "  SETTINGS"}
      </a>
    </div>
  );
};

export default SettingsLogin;
