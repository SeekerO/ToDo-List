import React from "react";
import moment from "moment";
const Listlayout = ({ list }) => {
    
  return (
    <div className="flex gap-2 w-[50%] p-2 flex-col">
      <h1 className="tracking-wider font-semibold text-[20px]">List</h1>
      <div className="w-full">
        {list?.map((meta_data, index) => (
          <div className="mt-2 w-full ">
            <div className="font-semibold flex items-center gap-1">
              <div className={`${meta_data.color} w-3.5 h-3.5 rounded-sm`} />
              <span> {meta_data.category}</span>
            </div>
            <div className="ml-4 w-full">
              {meta_data.list.map((list_data, index) => (
                <div className="flex mt-1 justify-between w-full px-10 ">
                  <span> {list_data.title}</span>
                  <span>
                    {moment(new Date(list_data.date)).format(
                      "MM-DD-YYYY, HH:mm a"
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listlayout;
