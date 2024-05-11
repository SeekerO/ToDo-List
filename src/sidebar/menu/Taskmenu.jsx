import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Taskmenu = ({ openMenu }) => {
  const TaskMenu = [
    { title: "Upcoming", icon: <MdKeyboardDoubleArrowRight />, to: "/" },
    { title: "Today", icon: <GoTasklist />, to: "/today" },
    { title: "Calendar", icon: <IoCalendarOutline />, to: "/calendar" },
    { title: "Sticky Wall", icon: <FaNoteSticky />, to: "/stickywall" },
  ];

  return (
    <div>
      <h4 className="mt-4 text-[11px] font-semibold">TASK</h4>
      {TaskMenu.map((Task_data, index) => (
        <div key={index}>
          <Link
            to={Task_data.to}
            className=" mt-1 flex items-center gap-2 p-1 w-full hover:shadow-md hover:shadow-slate-400 rounded-md cursor-pointer"
          >
            {Task_data.icon}
            {openMenu && (
              <div className=" text-[13px] flex items-center">
                {Task_data.title}
              </div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Taskmenu;
