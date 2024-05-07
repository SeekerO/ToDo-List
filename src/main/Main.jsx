import React from "react";
import { FaPlus } from "react-icons/fa";

const Main = () => {
  return (
    <main className="w-[70%] items-center flex flex-col overflow-x-auto  rounded-md h-[80%] SecondColor ">
      <h1 className="tracking-widest text-[40px] font-thin">TODO-LIST</h1>
      <div className="flex w-full h-full text-black p-1">
        <div className="w-[25%] h-[90%] bg-white relative ">
          <div className="p-2 flex gap-2 items-center bg-yellow-200 absolute w-full bottom-0">
            <FaPlus className="" /> Add Task
          </div>
        </div>
        <div className="w-[75%] h-[90%] bg-slate-100 ">asd</div>
      </div>
    </main>
  );
};

export default Main;
