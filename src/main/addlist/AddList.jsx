import moment from "moment/moment";
import React, { useState } from "react";
import Listlayout from "./Listlayout";
import Additem from "./Additem";

const AddList = ({ setlist, list }) => {
  return (
    <div className="w-full h-full">
      <h1 className="tracking-wider font-semibold text-[30px]">Add New List</h1>
      <div className="w-full h-[75vh] bg-slate-300 flex gap-2 rounded-md">
        <Additem list={list} />
        <Listlayout list={list} />
      </div>
    </div>
  );
};

export default AddList;
