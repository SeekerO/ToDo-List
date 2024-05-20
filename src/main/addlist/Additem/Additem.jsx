import React, { useState, useLayoutEffect } from "react";
import InnerItems from "./InnerItems";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Additem = ({ setList }) => {
  const [prevSavedList, setprevSavedList] = useState();
  const [formData, setFormData] = useState();
  const [savedList, setsavedList] = useState([]);
  let nav = useNavigate();

  useLayoutEffect(() => {
    const stickyData = localStorage.getItem("SavedList");
    if (stickyData !== null) {
      setprevSavedList(JSON.parse(stickyData));
    } else {
      setprevSavedList([]);
    }
  }, []);

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
      if (formData.title !== "") {
        existingObject.list.push({
          id: uuidv4(),
          title: formData.title,
          date: formData.date,
        });
        setFormData({
          ["id"]: formData.id,
          ["category"]: formData.category,
          ["color"]: formData.color,
          ["title"]: "",
          ["date"]: "",
        });
      } else alert("Please input in order to add");

      window.localStorage.setItem("PrevList", JSON.stringify(existingObject));
    } else {
      savedList.push({
        id: uuidv4(),
        category: formData.category,
        color: formData.color,
        list: [{ id: 1, title: formData.title, date: formData.date }],
      });
      setFormData({
        ["id"]: formData.id,
        ["category"]: formData.category,
        ["color"]: formData.color,
        ["title"]: "",
        ["date"]: "",
      });
      setsavedList(savedList);
    }
  };

  const saveCalendarFunction = () => {
    const combinedList = [...prevSavedList, ...savedList];

    if (savedList.length !== 0) {
      window.localStorage.clear("PrevList");
      localStorage.setItem("SavedList", JSON.stringify(combinedList));
      nav("/"); // Navigate to the root or another route on success
      setList(combinedList);
    } else {
      alert("No data to be saved");
    }
  };

  const displayColorPicked = (color) => {
    const style = {
      backgroundColor: color,
    };

    return <div className="w-10 h-4 flex-shrink-0 rounded-sm" style={style} />;
  };

  return (
    <div className=" flex flex-col gap-2 md:w-[50%] w-full p-2 ">
      <input
        onChange={handleChange}
        type="text"
        name="category"
        placeholder="Category"
        className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
      />
      <div className="flex gap-2 items-center">
        Cutomize color:{" "}
        <input
          required
          onChange={handleChange}
          type="color"
          name="color"
          placeholder="Category"
          className="p-1  h-fit outline-none focus:shadow-md focus:shadow-slate-400 rounded-md"
        />
        {displayColorPicked(formData?.color)}
      </div>
      <span className=" w-full font-semibold mt-3">ADD ITEM</span>

      {formData?.category && formData?.color && (
        <>
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
          </form>
          <button
            onClick={() => addCalendarFunction()}
            className="w-full rounded-md flex items-center bg-slate-400 justify-center text-white hover:bg-slate-200 hover:text-black"
          >
            ADD ITEMS
          </button>{" "}
        </>
      )}

      <div className="w-full h-full mt-1">
        <span className="text-center font-semibold w-full items-center">
          ITEMS
        </span>
        <div className="h-[30vh] mt-2 bg-slate-100 overflow-x-auto p-1 rounded-t-md">
          {savedList?.map((data, index1) => (
            <InnerItems
              key={index1}
              data={data}
              setsavedList={setsavedList}
              formData={formData}
            />
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
