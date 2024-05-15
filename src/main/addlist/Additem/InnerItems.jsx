import React, { useState } from "react";

const InnerItems = ({ data, setsavedList }) => {
  const removeItem = (id) => {
    // Create a new updated list without the item
    const updatedList = data.list.filter((item) => item.id !== id);

    // Update the savedList by mapping over it and replacing the list for the correct category
    setsavedList((prevList) =>
      prevList.map((cat) => {
        if (cat.id === data.id) {
          return { ...cat, list: updatedList };
        }
        return cat;
      })
    );
  };
  return (
    <div>
      {data.list
        ?.sort((a, b) => (a.id < b.id ? -1 : 1))
        .map((item, index) => (
          <div key={index} className="mt-1 flex gap-1 justify-between">
            <span>{index + 1}</span>
            <span>{item?.title}</span>
            <span>{item?.date}</span>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </div>
        ))}
    </div>
  );
};

export default InnerItems;
