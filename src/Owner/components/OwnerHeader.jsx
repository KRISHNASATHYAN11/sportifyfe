import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
Link;

const OwnerHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center me-10 rounded-2xl bg-gray-50">
        <div>
          <h2 style={{ color: "green" }} className="text-3xl font-bold ">
            Dashboard
          </h2>
          <p className="text-gray-500">Run Your Turf Bussiness Smarter !</p>
        </div>

        <div className="flex gap-2">
          <Link className="bg-green-500  text-white border rounded-full p-3">
            <FontAwesomeIcon icon={faMessage} />
          </Link>
          <Link className="bg-green-500  text-white border rounded-full me-5 p-3">
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </div>
      </div>
       <div className="text-green-600 p-2">
    <marquee behavior="" direction="">Keep your turf updated to attract more players and maximize bookings.Monitor bookings , manage events ,manage turfs and respond to users in real time.</marquee>
  </div>
    </>
  );
};

export default OwnerHeader;
