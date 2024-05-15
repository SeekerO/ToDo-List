import React from "react";

const ViewContent = ({ OpenViewContent, setOpenViewContent }) => {
  if (!OpenViewContent) return;
  return (
    <div className="fixed inset-0  z-0 backdrop-blur-md justify-center items-center flex">
      ViewContent
    </div>
  );
};

export default ViewContent;
