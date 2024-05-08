import React, { Suspense, lazy, useLocation } from "react";
import { Routes, Route } from "react-router-dom";

const Upcoming = lazy(() => import("./upcoming/Upcoming"));
const Calendar = lazy(() => import("./calendar/Calendar"));
const Today = lazy(() => import("./today/Today"));
const Stickywall = lazy(() => import("./sticky/Stickywall"));

const Main = () => {
  return (
    <main className="w-full h-[100%] items-center flex flex-col overflow-x-auto px-10">
      <div className="flex h-full justify-start items-start w-full mt-10 relative">
        <Suspense fallback="LOADING...">
          <Routes>
            <Route path="/" element={<Upcoming />} />
            <Route path="/today" element={<Today />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/stickywall" element={<Stickywall />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
