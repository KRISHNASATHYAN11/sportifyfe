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
      <div class="hidden md:flex flex-col w-60  bg-gray-800 p-5 gap-6 fixed left-0 top-0 h-full">
        <h1 class="text-2xl font-bold text-white">Logo</h1>

        <ul class="flex flex-col gap-5 text-lg ">
          <li class="flex items-center gap-3 cursor-pointer text-white">
            <span>
              <FontAwesomeIcon icon={faHomeUser} />
            </span>
            <Link className="text-decoration-none text-white" to={"/"}>
              Home
            </Link>
          </li>
          <li class="flex items-center gap-3 cursor-pointer  text-white">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Search
            </Link>
          </li>
          <li class="flex items-center gap-3 cursor-pointer  text-white">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Create
            </Link>
          </li>
          <li class="flex items-center gap-3 cursor-pointer  text-white">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Notifications
            </Link>
          </li>
          <li class="flex items-center gap-3 cursor-pointer  text-white">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Profile
            </Link>
          </li>
          <li class="flex items-center gap-3 cursor-pointer  text-white">
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>{" "}
            <Link className="text-decoration-none text-white" to={""}>
              Team Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
