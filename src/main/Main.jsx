import React, {
  Suspense,
  lazy,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { Routes, Route } from "react-router-dom";
import AddList from "./addlist/AddList";

const Upcoming = lazy(() => import("./upcoming/Upcoming"));
const Calendar = lazy(() => import("./calendar/Calendar"));
const Today = lazy(() => import("./today/Today"));
const Stickywall = lazy(() => import("./sticky/Stickywall"));

const Main = () => {
  const [events, setEvents] = useState();
  const [isCompleteData, setisCompleteData] = useState();
  const [storagelist, setlist] = useState();
  useEffect(() => {
    const stickyData = localStorage.getItem("calendar");
    if (stickyData !== null) {
      setEvents(JSON.parse(stickyData));
    } else {
      setEvents([]);
    }

    const complete = localStorage.getItem("complete");
    if (complete !== null) {
      setisCompleteData(JSON.parse(complete));
    } else {
      setisCompleteData([]);
    }

    const dataList = localStorage.getItem("list");
    if (dataList !== null) {
      setlist(JSON.parse(dataList));
    } else {
      setlist([]);
    }
  }, []);
  return (
    <main className="w-full h-[100%] items-center flex flex-col overflow-x-auto px-10">
      <div className="flex h-full justify-start items-start w-full mt-10 relative overflow-hidden">
        <Suspense fallback="LOADING...">
          <Routes>
            <Route
              path="/"
              element={
                <Upcoming
                  events={events}
                  setEvents={setEvents}
                  isCompleteData={isCompleteData}
                  setisCompleteData={setisCompleteData}
                />
              }
            />
            <Route
              path="/today"
              element={<Today events={events} setEvents={setEvents} />}
            />
            <Route
              path="/calendar"
              element={<Calendar events={events} setEvents={setEvents} />}
            />
            <Route
              path="/stickywall"
              element={<Stickywall events={events} setEvents={setEvents} />}
            />
            <Route
              path="/addnewlist"
              element={<AddList storagelist={storagelist} setlist={setlist} />}
            />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
