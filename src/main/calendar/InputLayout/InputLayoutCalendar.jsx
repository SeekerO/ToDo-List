import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import moment from "moment";
const InputLayoutCalendar = ({
  addCalendar,
  setopenCalendar,
  setopenList,
  openList,
  setEvents,
  events,
}) => {
  const [formData, setFormData] = useState();

  const addCalendarListener = () => {
    if (addCalendar === false) setopenCalendar(!addCalendar);
  };

  const saveCalendarFunction = () => {
    events.push({
      id: events.length + 1,
      title: formData.title,
      date: formData.date,
      start: formData.start,
      end: formData.end,
      note: formData.note,
    });

    window.localStorage.setItem("calendar", JSON.stringify(events));
    const timer = setTimeout(() => {
      setopenCalendar(false);
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

  return (
    <>
      {!openList && (
        <div
          onClick={() => addCalendarListener()}
          className={`${
            addCalendar
              ? "w-[400px] h-[100%] duration-300"
              : "w-[40px] h-[50%] duration-300 hover:bg-slate-600 hover:text-white cursor-pointer"
          } bg-slate-200  rounded-md items-center flex justify-center `}
        >
          {!addCalendar ? (
            <GoPlus />
          ) : (
            <form
              onSubmit={() => saveCalendarFunction()}
              className="h-full w-full items-start flex flex-col p-3 gap-2"
            >
              <input
                required
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Title"
                className="p-2 w-full rounded-md"
              />
              <div className="flex gap-2 w-full items-center">
                <input
                  required
                  onChange={handleChange}
                  name="start"
                  type="datetime-local"
                  className="p-2 w-full rounded-md"
                />-
                <input
                  onChange={handleChange}
                  name="end"
                  type="datetime-local"
                  className="p-2 w-full rounded-md"
                />
              </div>

              <textarea
                required
                onChange={handleChange}
                name="note"
                type="text"
                placeholder="Note"
                rows={13}
                className="p-2 w-full rounded-md resize-none "
              />
              <button className="w-full items-center bg-green-600 text-white rounded-md p-2 hover:bg-green-400 hover:text-black">
                SAVE
              </button>
              <button
                onClick={() => setopenCalendar(false)}
                className="w-full items-center bg-red-600 text-white rounded-md p-2 hover:bg-red-400 hover:text-black"
              >
                CANCEL
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default InputLayoutCalendar;