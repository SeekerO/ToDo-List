import React, { useState } from "react";

const Additem = ({ storagelist }) => {
  const [formData, setFormData] = useState();
  const [savedList, setsavedList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addCalendarFunction = () => {
    const existingObject = savedList.find(
      (item) =>
        item.category === formData.category && item.color === formData.color
    );

    if (existingObject) {
      existingObject.list.push({
        id: existingObject.list.length + 1,
        title: formData.title,
        date: formData.date,
      });

      setFormData({
        ["title"]: "",
        ["date"]: "",
      });
    } else {
      savedList.push({
        id: savedList.length + 1,
        category: formData.category,
        color: formData.color,
        list: [{ id: 1, title: formData.title, date: formData.date }],
      });

      setsavedList(savedList);
    }
  };

  const saveCalendarFunction = () => {};

  const displayColorPicked = (color) => {
    const style = {
      backgroundColor: color,
    };

    return <div className="w-10 h-4 flex-shrink-0 rounded-sm" style={style} />;
  };

  const removeItem = (index) => {
    const updatedEvents = [...savedList];
    updatedEvents.splice(index, 1);
    setsavedList(updatedEvents);
  };

  return (
    <div className=" flex flex-col gap-2 w-[50%] p-2 ">
      <input
        onChange={handleChange}
        type="text"
        name="category"
        placeholder="Catecgory"
        className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
      />
      <div className="flex gap-2 items-center">
        Cutomize color:{" "}
        <input
          onChange={handleChange}
          type="color"
          name="color"
          placeholder="Category"
          className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
        />
        {displayColorPicked(formData?.color)}
      </div>
      <span className=" w-full font-semibold mt-3">ADD ITEM</span>
      <form className="flex flex-col gap-1">
        <input
          required
          onChange={handleChange}
          value={formData?.title || ""}
          type="text"
          name="title"
          placeholder="Title"
          className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
        />

        <input
          required
          onChange={handleChange}
          value={formData?.date || ""}
          type="datetime-local"
          name="date"
          className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
        />
        <button
          onClick={() => addCalendarFunction()}
          className="w-full rounded-md flex items-center bg-slate-400 justify-center text-white hover:bg-slate-200 hover:text-black"
        >
          ADD ITEMS
        </button>
      </form>
      <div className="w-full h-full mt-1">
        <span className="text-center font-semibold w-full items-center">
          ITEMS
        </span>
        <div className="h-[35vh] mt-2 bg-slate-100 overflow-x-auto p-1 rounded-t-md">
          {savedList?.map((data, index) => (
            <div className="">
              {data.list
                ?.sort((a, b) => (a.id < b.id ? -1 : 1))
                .map((data, index) => (
                  <div key={index} className="mt-1 flex gap-1 justify-between">
                    <span>{data?.id}</span>
                    <span>{data?.title}</span>
                    <span>{data?.date}</span>
                    <button onClick={() => removeItem(index)}>
                      removeItem
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => saveCalendarFunction()}
          className="w-full rounded-b-md flex items-center bg-slate-400 justify-center text-white hover:bg-slate-200 hover:text-black"
        >
          SAVE ITEMS
        </button>
      </div>
    </div>
  );
};

export default Additem;
