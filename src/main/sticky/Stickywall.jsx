import React, { useState, Suspense, useLayoutEffect } from "react";

import Addsticky from "./adddsticky/Addsticky";
import Stickydata from "./stickydata/Stickydata";
const Stickywall = () => {
  const [openAdd, setopenAdd] = useState(false);
  const [storedData, setstoredData] = useState();

  useLayoutEffect(() => {
    const stickyData = localStorage.getItem("stickynote");
    if (stickyData !== null) {
      setstoredData(JSON.parse(stickyData));
    } else {
      setstoredData([]);
    }
  }, []);

  return (
    <div className="h-full w-screen overflow-hidden">
      <h1 className="tracking-wider font-semibold text-[30px]">Sticky Wall</h1>

      <div className="h-full w-full flex flex-wrap gap-3 overflow-auto mt-2">
        <Suspense fallback="LOADING...">
          <Stickydata
            storedData={storedData}
            setstoredData={setstoredData}
            openAdd={openAdd}
            setopenAdd={setopenAdd}
            
          />
        </Suspense>
      </div>
      <Addsticky
        openAdd={openAdd}
        setopenAdd={setopenAdd}
        storedData={storedData}
      />
    </div>
  );
};

export default Stickywall;
