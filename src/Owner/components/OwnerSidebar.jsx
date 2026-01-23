import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
// import OwnerHeader from "./OwnerHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCalendar,
  faSignOut,
  faSoccerBall,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OwnerSidebar = () => {
  return (
    <>
      <div>
       
        <aside className="min-h-screen fixed bg-white rounded-2xl p-6 flex flex-col justify-between shadow">
          <div>
            <h1
              style={{ color: "green" }}
              className="text-2xl font-bold fntstyle  mb-8"
            >
              Sportify
            </h1>

            <nav className="space-y-4 text-gray-600">
              <Link to={'/ownerhome'}
                style={{ color: "green" }}
                className="block font-medium mt-3 text-decoration-none"
              >
               Home Dashboard
              </Link>
              <Link to={'/addturf'}
                style={{ color: "green" }}
                className="block mt-3 text-decoration-none p-2 hover:bg-green-200 hover:rounded"
              >
                <FontAwesomeIcon icon={faAdd} />
                Add Turf
              </Link>
              <Link to={'/addevent'}
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                
                <FontAwesomeIcon icon={faCalendar} />
                Add Events
              </Link>
              <Link 
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                {" "}
                <FontAwesomeIcon icon={faTicket} /> Bookings
              </Link>
              <Link
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                <FontAwesomeIcon icon={faSoccerBall} />
                My Turf
              </Link>

              <p className="font-semibold text-sm text-gray-400 mt-6">
                GENERAL
              </p>
              <Link
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                Settings
              </Link>
              <Link
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                Help
              </Link>
              <Link
                style={{ color: "green" }}
                className="block text-decoration-none  p-2 hover:bg-green-200 hover:rounded"
              >
                Logout
              </Link>
            </nav>
          </div>

          <button className="bg-green-700 text-white rounded-xl py-3">
            Download
          </button>
          <p className="border border-green-200 p-2 px-3 bg-green-100 text-green-500 rounded">
            Download the <br /> Sportify App Now
          </p>
        </aside>
      </div>
    </>
  );
};

export default OwnerSidebar;
