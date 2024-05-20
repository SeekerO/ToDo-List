import React, { useState, useLayoutEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Today = ({ events, setEvents }) => {
  return (
    <div className="w-full h-full">
      <h1 className="tracking-wider font-semibold text-[30px]">Today</h1>
      <div className="w-full">
        <Fullcalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView={"timeGrid"}
          headerToolbar={{
            start: "today,prev",
            center: "title",
            end: "next",
          }}
          events={events}
          height={"70vh"}
        />
      </div>
    </div>
  );
};

export default Today;
