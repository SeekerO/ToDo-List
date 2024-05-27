import moment from "moment/moment";
import React, { useState } from "react";

import Additem from "./Additem/Additem";

const AddList = ({ setList, List }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="tracking-wider font-semibold text-[30px]">Add New List</h1>
      <div className=" bg-[#70a5d5] flex gap-2 rounded-md justify-center items-center">
        <Additem List={List} setList={setList} />
      </div>
    </div>
  );
};

export default AddList;
