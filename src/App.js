import Side from "./sidebar/Side";
import Main from "./main/Main";
import React, { useState, useLayoutEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [List, setList] = useState();

  useLayoutEffect(() => {
    const stickyData = localStorage.getItem("SavedList");
    if (stickyData !== null) {
      setList(JSON.parse(stickyData));
    } else {
      setList([]);
    }
  }, []);
  return (
    <div className="h-screen w-screen bg-[#a4bbb9] md:p-10 p-2">
      <div className="flex h-full w-full bg-slate-100 rounded-xl shadow-lg shadow-slate-700">
        <Analytics />
        <Side
          List={List}
          setList={setList}
       
        />
        <Main
          List={List}
          setList={setList}
   
        />
      </div>
    </div>
  );
}

export default App;
