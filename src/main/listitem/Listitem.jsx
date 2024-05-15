import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { IoMdRemoveCircle } from "react-icons/io";
import moment from "moment";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Listitem = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [Add, setAdd] = useState();
  const [newItem, setNewItem] = useState({ title: "", date: "" });
  const formRef = useRef(null); // Ref for the form container

  useEffect(() => {
    const stickyData = localStorage.getItem("SavedList");
    if (stickyData !== null) {
      setData(JSON.parse(stickyData));
    } else {
      setData([]);
    }

    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setAdd(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [id]);

  const handleRemoveItem = (categoryId, itemId) => {
    // Filter out the removed item based on its ID
    const updatedData = data.map((meta_data) => {
      if (meta_data.id === categoryId) {
        return {
          ...meta_data,
          list: meta_data.list.filter((item) => item.id !== itemId),
        };
      }
      return meta_data;
    });

    setData(updatedData);
    localStorage.setItem("SavedList", JSON.stringify(updatedData));
  };

  const handleAddItem = () => {
    if (newItem.title !== "") {
      const updatedData = data.map((meta_data) => {
        if (meta_data.id === id) {
          return {
            ...meta_data,
            list: [
              ...meta_data.list,
              {
                id: meta_data.list.length + 1,
                title: newItem.title,
                date: newItem.date,
              },
            ],
          };
        }

        return meta_data;
      });
      setData(updatedData);
      localStorage.setItem("SavedList", JSON.stringify(updatedData));
      setNewItem({ title: "", date: "" });
    }
  };

  const displayColorPicked = (color) => {
    const style = {
      backgroundColor: color,
    };

    return <div className="w-5 h-5 flex-shrink-0 rounded-sm" style={style} />;
  };

  const handleDeleteCategory = (categoryId) => {
    const updatedData = data.filter((category) => category.id !== categoryId);
    setData(updatedData);
    localStorage.setItem("SavedList", JSON.stringify(updatedData));
    window.location.reload();
  };

  return (
    <div className="w-full h-full">
      {data.map(
        (meta_data, index) =>
          meta_data.id === id && (
            <div key={index} className="flex flex-col w-full gap-2">
              <div className="font-semibold text-[24px] gap-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {displayColorPicked(meta_data.color)} {meta_data.category}
                </span>
                <MdDelete
                  onClick={() => handleDeleteCategory(meta_data.id)}
                  className="hover:text-red-500 cursor-pointer"
                />
              </div>
              <label className="text-[25px] flex gap-1">TODO</label>
              <div className="h-[75vh] w-full p-2">
                {meta_data.list.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-200 w-full mt-1 p-1 items-center rounded-md flex justify-between px-2 duration-300 hover:translate-x-2 hover:p-3 hover:text-[20px] hover:shadow-md hover:shadow-slate-300 cursor-pointer"
                  >
                    <div>{item.title}</div>
                    <div>
                      {moment(item.date).format("MM-DD-YYYY - HH:mm a") !==
                        "Invalid date" &&
                        moment(item.date).format("MM-DD-YYYY - HH:mm a")}
                    </div>
                    {/* Add onClick handler to remove the item */}
                    <IoMdRemoveCircle
                      className="hover:text-red-500 text-[25px]"
                      onClick={() => handleRemoveItem(meta_data.id, item.id)}
                    />
                  </div>
                ))}
                <div
                  onClick={() => setAdd(true)}
                  key={index}
                  className={`${
                    Add
                      ? "bg-slate-200 w-full mt-1 p-1 items-center rounded-md flex justify-center px-2 h-[160px]"
                      : "bg-slate-200 w-full mt-1 p-1 items-center rounded-md flex justify-center px-2 duration-300 hover:translate-x-2 hover:p-3 hover:text-[20px] cursor-pointer hover:bg-slate-300"
                  }`}
                >
                  {Add ? (
                    <div ref={formRef} className="w-full">
                      <form className="flex flex-col w-full justify-center gap-2">
                        <input
                          onChange={(e) =>
                            setNewItem({ ...newItem, title: e.target.value })
                          }
                          required
                          name="title"
                          type="text"
                          placeholder="Title"
                          className="p-2 rounded-md"
                          value={newItem.title}
                        />
                        <input
                          onChange={(e) =>
                            setNewItem({ ...newItem, date: e.target.value })
                          }
                          name="date"
                          type="datetime-local"
                          placeholder="Date"
                          className="p-2 rounded-md"
                          value={newItem.date}
                        />
                        <button
                          onClick={() => handleAddItem()}
                          className="bg-slate-300 rounded-md  p-1 "
                        >
                          ADD ITEM
                        </button>
                      </form>
                    </div>
                  ) : (
                    <FaPlus />
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Listitem;
