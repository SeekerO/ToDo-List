import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdSaveAlt } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const Addsticky = ({ setopenAdd, openAdd }) => {
  if (!openAdd) return;
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black  bg-opacity-50 flex justify-center items-center">
      <div className="w-[400px] h-[500px] p-4 bg-slate-100 shadow-lg shadow-slate-600 rounded-md">
        <div className="flex gap-4 justify-end">
          <a className="bg-green-500 px-5 py-1 rounded-md ButtonTextHover ">
            <MdSaveAlt />
          </a>
          <a
            onClick={() => setopenAdd(!openAdd)}
            className="bg-red-500 px-5 py-1 rounded-md ButtonTextHover "
          >
            <RiCloseLargeLine />
          </a>
        </div>
        <form className="mt-4 flex flex-col gap-2">
          <input
            placeholder="Title"
            type="text"
            className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300"
          />
          <input
            type="date"
            className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300"
          />
          <textarea
            placeholder="Note Here.."
            rows={13}
            className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300 resize-none"
          />
        </form>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Addsticky;
