import React, { useState, useLayoutEffect, Suspense } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import InputLayoutCalendar from "./InputLayout/InputLayoutCalendar";
import CalendarList from "./List/CalendarList";

const Calendar = ({ events, setEvents }) => {
  const [addCalendar, setopenCalendar] = useState(false);
  const [openList, setopenList] = useState(false);

  const handleEventClick = (clickInfo) => {
    const updatedEvent = clickInfo.event;

    window.localStorage.setItem("calendar", JSON.stringify(updatedEvent));
  };

  return (
    <div className="h-full w-full flex gap-2 ">
      <Suspense fallback="LOADING>...">
        <div className=" h-[80vh]  flex flex-col gap-y-2">
          <CalendarList
            addCalendar={addCalendar}
            setopenList={setopenList}
            openList={openList}
            events={events}
            setEvents={setEvents}
          />
          <InputLayoutCalendar
            events={events}
            setEvents={setEvents}
            addCalendar={addCalendar}
            setopenCalendar={setopenCalendar}
            openList={openList}
          />
        </div>

        <div className="w-full">
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today,prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "dayGridMonth", // will normally be on the right. if RTL, will be on the left
            }}
            editable="true"
            eventClick={handleEventClick}
            events={events}
            height={"80vh"}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default Calendar;
