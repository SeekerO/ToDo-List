import React from "react";

const Side = () => {
  return (
    <sidebar className="w-[25%] rounded-md h-[80%] MainColor gap-y-10 flex flex-col items-center justify-center ">
      <div className="items-center justify-center flex-col flex">
        <div className="h-40 w-40 bg-slate-400 justify-center flex items-center rounded-md">
          IMAGE
        </div>
        <span> Dolore adipisicing elit</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-[100px] h-[100px] rounded-md bg-gray-200 text-black p-2 flex-col flex items-center">
          <label className="font-thin">TODO</label>
          <label className="font-bold text-[30px]">0</label>
        </div>
        <div className="w-[100px] h-[100px] rounded-md bg-gray-200 text-black p-2 flex-col flex items-center">
          <label className="font-thin">COMPLETED</label>
          <label className="font-bold text-[30px]">0</label>
        </div>
        <div className="w-[100px] h-[100px] rounded-md bg-gray-200 text-black p-2 flex-col flex items-center">
          <label className="font-thin">ARCHIVE</label>
          <label className="font-bold text-[30px]">0</label>
        </div>
        <div className="w-[100px] h-[100px] rounded-md bg-gray-200 text-black p-2 flex-col flex items-center">
          <label className="font-thin">DELETED</label>
          <label className="font-bold text-[30px]">0</label>
        </div>
      </div>
    </sidebar>
  );
};

export default Side;
