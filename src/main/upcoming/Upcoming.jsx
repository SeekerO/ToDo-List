import React, { useLayoutEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
const Upcoming = ({ events, setEvents, isCompleteData, setisCompleteData }) => {
  const [isCompleted, setisCompleted] = useState(false);

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
    window.localStorage.setItem("calendar", JSON.stringify(updatedEvents));
  };

  const removeCompleteEvent = (index) => {
    const updatedEvents = [...isCompleteData];
    updatedEvents.splice(index, 1);
    window.localStorage.setItem("complete", JSON.stringify(updatedEvents));
    setisCompleteData(updatedEvents);
  };

  const completeEvent = (index, meta_data) => {
    const REMOVEupdatedEvents = [...events];
    REMOVEupdatedEvents.splice(index, 1);
    setEvents(REMOVEupdatedEvents);
    window.localStorage.setItem(
      "calendar",
      JSON.stringify(REMOVEupdatedEvents)
    );

    isCompleteData.push({
      id: isCompleteData.length + 1,
      title: meta_data.title,
      date: meta_data.date,
      start: meta_data.start,
      end: meta_data.end,
      note: meta_data.note,
    });

    window.localStorage.setItem("complete", JSON.stringify(isCompleteData));
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap justify-between">
        <h1 className="tracking-wider font-semibold text-[30px]">Upcoming</h1>
        <div className="flex items-center">
          <a
            onClick={() => setisCompleted(!isCompleted)}
            className=" cursor-pointer"
          >
            {!isCompleted ? (
              <div className="gap-1 ">
                <span className="hover:underline hover:text-blue-500">Completed</span>{" "}
                <span className="bg-slate-300 px-1 rounded-sm text-[14px] mb-10">
                  {isCompleteData.length}
                </span>
              </div>
            ) : (
              "Back"
            )}
          </a>
        </div>
      </div>

      {!isCompleted ? (
        <>
          {events.length !== 0 ? (
            <div className="w-full h-full">
              {events
                ?.sort((a, b) => (a.date < b.date ? 1 : -1))
                .map((meta_data, index) => (
                  <div
                    key={meta_data.di}
                    className="bg-slate-300 w-full h-[150px] p-2 mb-2 rounded-md flex gap-2"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <h1 className="text-[20px] font-bold tracking-wider">
                        {meta_data.title}
                      </h1>
                      <div className="text-[13px]">
                        Date: {meta_data.date}
                        {meta_data?.start && (
                          <span>
                            {meta_data.start}-{meta_data.end}
                          </span>
                        )}
                      </div>
                      <p className="font-thin">
                        {meta_data?.note ? meta_data.note : "No Note"}
                      </p>
                    </div>
                    <div className="flex items-center text-[50px] mr-2">
                      <CiCircleCheck
                        onClick={() => completeEvent(index, meta_data)}
                        className="hover:text-green-500 cursor-pointer"
                      />
                      <CiCircleRemove
                        onClick={() => removeEvent(index)}
                        className="hover:text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="font-semibold text-[20px] mt-2">NO UPCOMING DATA</div>
          )}
        </>
      ) : (
        <>
          {isCompleteData.length !== 0 ? (
            <div>
              {isCompleteData
                ?.sort((a, b) => (a.date < b.date ? 1 : -1))
                .map((meta_data, index) => (
                  <div
                    key={meta_data.di}
                    className="bg-slate-300 w-full h-[150px] p-2 mb-2 rounded-md flex gap-2"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <h1 className="text-[20px] font-bold tracking-wider">
                        {meta_data.title}
                      </h1>
                      <div className="text-[13px]">
                        Date: {meta_data.date}
                        {meta_data?.start && (
                          <span>
                            {meta_data.start}-{meta_data.end}
                          </span>
                        )}
                      </div>
                      <p className="font-thin">
                        {meta_data?.note ? meta_data.note : "No Note"}
                      </p>
                    </div>
                    <div className="flex items-center text-[50px] mr-2">
                      <CiCircleRemove
                        onClick={() => removeCompleteEvent(index)}
                        className="hover:text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="font-semibold text-[20px] mt-2">NO COMPLETED DATA</div>
          )}
        </>
      )}
    </div>
  );
};

export default Upcoming;
