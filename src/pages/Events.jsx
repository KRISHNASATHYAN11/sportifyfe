import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { getAllEvent } from "../services/AllApi";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { BaseUrl } from "../services/BaseURL";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [location, setlocation] = useState([]);

  const [dummyEvent, setDummyEvent] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");
    getEventData();
  }, [search]);

  const navigate = useNavigate();

  const getEventData = async () => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      let apiResponse = await getAllEvent(reqHeader, search);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        setEventData(apiResponse.data.AllEvents);
        setDummyEvent(apiResponse.data.AllEvents);

        let locationArray = apiResponse.data.AllEvents.map((eachEvents) => {
          return eachEvents.location;
        });

        setlocation(locationArray);

        let dummyLocation = [];
        locationArray.forEach((eachlocation) => {
          if (!dummyLocation.includes(eachlocation)) {
            console.log(eachlocation);
            dummyLocation.push(eachlocation);
          }
        });
        setlocation(dummyLocation);
      } else {
        toast.error(apiResponse.response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred While Getting Events");
    }
  };

  const filterEvents = (location) => {
    let filteredEvent = dummyEvent.filter(
      (eachEvent) => eachEvent.location == location,
    );
    setEventData(filteredEvent);
  };

  return (
    <>
      <Header />
      <div className="w-full bg-black">
        <div className=" container flex justify-center items-center gap-5">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 gap-3 rounded-2xl p-2 border-transparent mt-5  text-gray-900 bg-white "
            placeholder="Location"
            type="text"
          />
        </div>

        {location?.length > 0 && (
          <div className="flex justify-center items-center mx-3">
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <button
                onClick={getEventData}
                className=" bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mx-2 mt-3 text-white"
              >
                All
              </button>
            </motion.div>
            {location?.map((eachlocation, index) => (
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                onClick={() => filterEvents(eachlocation)}
                className=" bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mx-2 mt-3 "
              >
                <input hidden type="radio" name="" id={index} />
                <label className="text-white">{eachlocation}</label>
              </motion.div>
            ))}
          </div>
        )}

        <div className="container mt-10 p-3">
          <h4 className="text-white mb-5">Events</h4>
          <div>
            {eventData?.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {eventData?.map((eachEvent) => (
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  >
                    <Card className="max-w-xs h-[600px] overflow-hidden">
                      <img
                        src={`${BaseUrl}/uploads/${eachEvent.eventImage}`}
                        alt=""
                      />
                      <div className="space-y-1">
                        <h5 className="font-bold  text-green-500">
                          {eachEvent.eventName}
                        </h5>
                        <span className="font-normal text-gray-700 dark:text-gray-400">
                          {eachEvent.sportType}
                        </span>

                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          <FontAwesomeIcon icon={faLocationPin} />
                          {eachEvent.location}
                        </p>
                        <span>{eachEvent.turfName}</span>

                        <p>
                          <FontAwesomeIcon icon={faClock} />{" "}
                          {eachEvent.startTime} - {eachEvent.endTime}
                        </p>

                        <span>MaxPlayers:{eachEvent.maxPlayers}</span>
                        <p className="text-black font-bold mt-2">
                          ₹{eachEvent.pricePerPerson}/Person
                        </p>
                      </div>
                      <Link
                        to={`/${eachEvent._id}/singleevent`}
                        className="text-white text-decoration-none bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center mt-auto"
                      >
                        Book Now
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="mt-3 px-4 py-1 rounded-full text-sm font-semibold border border-[#2CFF05] bg-[#2CFF05] hover:shadow-[0_0_10px_#2CFF05] transition hover:bg-black hover:text-white rounded-pill ">
            View More...
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
