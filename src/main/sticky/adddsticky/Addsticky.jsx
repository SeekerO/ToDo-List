import React, { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { MdSaveAlt } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const Addsticky = ({ setopenAdd, openAdd, storedData }) => {
  const [saveSticky, setsaveSticky] = useState(true);
  const [formData, setFormData] = useState();

  const saveStickyFunction = () => {
    setsaveSticky(!saveSticky);
    storedData.push({
      id: storedData.length + 1,
      title: formData.title,
      date: formData.date,
      note: formData.note,
    });

    window.localStorage.setItem("stickynote", JSON.stringify(storedData));
    const timer = setTimeout(() => {
      setsaveSticky(true);
      setopenAdd(false);
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts early
    return () => clearTimeout(timer);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!openAdd) return;
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black  bg-opacity-50 flex justify-center items-center">
      <div className="w-[400px] h-[500px] p-4 bg-slate-100 shadow-lg shadow-slate-600 rounded-md">
        <div className="flex gap-4 justify-end">
          <a
            onClick={() => saveStickyFunction()}
            className="bg-green-500 px-5 py-1 rounded-md ButtonTextHover "
          >
            <MdSaveAlt />
          </a>
          <a
            onClick={() => setopenAdd(false) || setsaveSticky(true)}
            className="bg-red-500 px-5 py-1 rounded-md ButtonTextHover "
          >
            <RiCloseLargeLine />
          </a>
        </div>

        {saveSticky ? (
          <form className="mt-4 flex flex-col gap-2">
            <input
              onChange={handleChange}
              name="title"
              placeholder="Title"
              type="text"
              className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300"
            />
            {/* <input
              onChange={handleChange}
              name="date"
              type="datetime-local"
              className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300"
            /> */}
            <textarea
              onChange={handleChange}
              name="note"
              placeholder="Note Here.."
              rows={13}
              className="outline-none p-2 rounded-md w-full focus:shadow-md focus:shadow-gray-400 bg-gray-300 resize-none"
            />
          </form>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-y-4">
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#70a5d5"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <span>Saving please wait..</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addsticky;
