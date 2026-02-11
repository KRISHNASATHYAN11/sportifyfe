import {
  faHeart,
  faHome,
  faHomeUser,
  faPlus,
  faSearch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:flex  flex-col  bg-black rounded-2xl p-4 gap-6 fixed left-0 top-0 h-full">
        <h4 className=" font-bold text-center text-white fntstyle">  Sportify</h4>

        <ul className="flex flex-col gap-5 text-lg ">
          <li className="flex items-center gap-3 cursor-pointer text-white hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faHomeUser} />
            </span>
            <Link className="text-decoration-none text-white " to={"/"}>
              Home
            </Link>
          </li>
          <li className="flex items-center gap-3 cursor-pointer  text-white  hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Search
            </Link>
          </li>
          <li className="flex items-center gap-3 cursor-pointer  text-white  hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Create
            </Link>
          </li>
          <li className="flex items-center gap-3 cursor-pointer  text-white  hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Notifications
            </Link>
          </li>
          <li className="flex items-center gap-3 cursor-pointer  text-white  hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li className="flex items-center gap-3 cursor-pointer  text-white  hover:bg-lime-500 px-2 py-2 rounded-2xl">
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>{" "}
            <Link  className="text-decoration-none text-white" to={"/team"}>
              Team Up
            </Link>
          </li>
        </ul>
      
      </div>
    </>
  );
};

export default Sidebar;
