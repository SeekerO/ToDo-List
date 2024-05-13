import React, { useState, useLayoutEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Today = () => {
  const [events, setEvents] = useState();
  useLayoutEffect(() => {
    const stickyData = localStorage.getItem("calendar");
    if (stickyData !== null) {
      setEvents(JSON.parse(stickyData));
    } else {
      setEvents([]);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <h1 className="tracking-wider font-semibold text-[30px]">TODAY</h1>
      <div className="w-full">
        {" "}
        <Fullcalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView={"timeGrid"}
          headerToolbar={{
            start: "", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "", // will normally be on the right. if RTL, will be on the left
          }}
          events={events}
          height={"80vh"}
        />
      </div>
    </div>
  );
};

export default Today;
