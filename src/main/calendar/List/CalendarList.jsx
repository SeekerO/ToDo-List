import React, { Suspense } from "react";
import moment from "moment";
import { CiCircleRemove } from "react-icons/ci";

const CalendarList = ({
  addCalendar,
  setopenList,
  openList,
  events,
  setEvents,
}) => {
  const ListListener = () => {
    if (openList === false) setopenList(true);
  };

  const Date = (date) => {
    return moment(date).format("DD-MM-YY, h:mm a");
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
    window.localStorage.setItem("calendar", JSON.stringify(updatedEvents));
  };

  return (
    <>
      {!addCalendar && (
        <div
          onClick={() => ListListener()}
          className={`${
            openList
              ? "w-[400px] h-[100%] duration-300"
              : "w-[40px] h-[50%] duration-300 hover:bg-slate-400 hover:text-white cursor-pointer"
          } bg-slate-300  rounded-md items-center flex justify-center `}
        >
          {!openList ? (
            <div className="flex flex-col items-center">
              <span>L</span>
              <span>I</span>
              <span>S</span>
              <span>T</span>
            </div>
          ) : (
            <div className="h-full w-full p-2">
              <h1 className="tracking-wider uppercase font-semibold text-center text-[25px]">
                Calendar List
              </h1>
              {events.length === 0 ? (
                <div className="h-[85%] w-full items-center justify-center flex text-[20px]">
                  NO DATA
                </div>
              ) : (
                <div className="h-[85%] w-full">
                  <Suspense fallback="LOADING..">
                    {events
                      .sort((a, b) => (a.date > b.date ? 1 : -1))
                      .map((data, index) => (
                        <div
                          key={data.id}
                          className="w-full flex gap-2 p-1 rounded-md text-slate-900 mb-1 font-thin items-center bg-slate-400"
                        >
                          <div className="w-full text-ellipsis overflow-hidden space-x-1">
                            <span className="w-fit font-semibold text-[14px]">
                              {Date(data.date)}:
                            </span>
                            <span className="">{data.title}</span>
                          </div>
                          <a onClick={() => removeEvent(index)} className="flex">
                            <CiCircleRemove className="text-[25px] hover:text-red-500 cursor-pointer" />
                          </a>
                        </div>
                      ))}
                  </Suspense>
                </div>
              )}

              <button
                onClick={() => setopenList(false)}
                className="w-full items-center bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CalendarList;
