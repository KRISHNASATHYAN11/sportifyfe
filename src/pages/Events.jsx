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
  const [location, setLocation] = useState([]);
  
  // Search State
  const [search, setSearch] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; // Matches backend default

  const navigate = useNavigate();

  // Fetch data function
  const getEventData = async (page) => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      // Call API with search, page, and limit
      let apiResponse = await getAllEvent(reqHeader, search, page, itemsPerPage);
      
      if (apiResponse.status == 200) {
        setEventData(apiResponse.data.AllEvents);
        setTotalPages(apiResponse.data.totalPages);
        setCurrentPage(apiResponse.data.currentPage);

        // Extract unique locations for the filter buttons based on CURRENT page data
        // Note: If you have locations on Page 2, they won't appear here until you go to Page 2
        let locationArray = apiResponse.data.AllEvents.map((e) => e.location);
        let dummyLocation = [];
        locationArray.forEach((loc) => {
          if (!dummyLocation.includes(loc)) {
            dummyLocation.push(loc);
          }
        });
        setLocation(dummyLocation);
      } else {
        toast.error(apiResponse.response?.data?.message || "Error fetching events");
        if (apiResponse.response?.status === 401) navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred While Getting Events");
    }
  };

  useEffect(() => {
    // Whenever search changes, reset to page 1 and fetch
    setCurrentPage(1);
    getEventData(1);
  }, [search]);

  // Handle Location Filter Click
  const filterEvents = (locationValue) => {
    // If 'All' is clicked, search is empty string
    setSearch(locationValue); 
  };

  // Pagination Handlers
  const handlePrevious = () => {
    if (currentPage > 1) {
      getEventData(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      getEventData(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-black min-h-screen">
        <div className="container flex justify-center items-center gap-5">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-1/2 gap-3 rounded-2xl p-2 border-transparent mt-5 text-gray-900 bg-white"
            placeholder="Location"
            type="text"
          />
        </div>

        {/* Location Filter Buttons */}
        {location?.length > 0 && (
          <div className="flex justify-center items-center flex-wrap mx-3">
            {/* 'All' Button */}
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <button
                onClick={() => filterEvents("")}
                className={`rounded-full px-4 py-2 mx-2 mt-3 text-sm font-medium text-white transition-all ${
                  search === "" 
                  ? "bg-green-600 ring-2 ring-green-400" // Active Style
                  : "bg-gradient-to-r from-green-500 via-green-900 to-green-900"
                }`}
              >
                All
              </button>
            </motion.div>

            {/* Dynamic Location Buttons */}
            {location?.map((eachlocation, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <button
                  onClick={() => filterEvents(eachlocation)}
                  className={`rounded-full px-4 py-2 mx-2 mt-3 text-sm font-medium text-white transition-all ${
                    search === eachlocation
                    ? "bg-green-600 ring-2 ring-green-400" // Active Style
                    : "bg-gradient-to-r from-green-500 via-green-900 to-green-900"
                  }`}
                >
                  {eachlocation}
                </button>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-10 p-3">
          <h4 className="text-white mb-5">Events</h4>
          <div className="p-4 bg-stone-800 rounded-lg">
            {eventData?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eventData?.map((eachEvent) => (
                  <motion.div
                    key={eachEvent._id}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <Card className="max-w-xs overflow-hidden h-full object-cover object-center bg-black border border-gray-800">
                      <div className="h-48 overflow-hidden">
                         <img className="w-full h-full object-cover object-center"
                          src={`${BaseUrl}/uploads/${eachEvent.eventImage}`}
                          alt={eachEvent.eventName}
                        />
                      </div>
                     
                      <div className="p-4 space-y-1">
                        <p className="font-bold text-white text-lg truncate">
                          {eachEvent.eventName}
                        </p>
                        <span className="font-normal text-gray-300 text-sm block">
                          {eachEvent.sportType}
                        </span>

                        <p className="font-normal text-white text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faLocationPin} className="text-red-500"/>
                          {eachEvent.location}
                        </p>
                        <span className="text-gray-300 text-xs block">Venue : {eachEvent.turfName}</span>

                        <p className="text-white text-sm flex items-center gap-2 mt-1">
                          <FontAwesomeIcon icon={faClock} className="text-blue-400"/> 
                          {eachEvent.startTime} - {eachEvent.endTime}
                        </p>
                        <p className="text-white font-bold mt-2 text-green-400">
                          ₹{eachEvent.pricePerPerson}/Person
                        </p>
                      </div>
                      <div className="p-4 pt-0 mt-auto">
                        <Link
                          to={`/${eachEvent._id}/singleevent`}
                          className="block w-full text-center text-white bg-gradient-to-r from-green-500 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5"
                        >
                          Book Now
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-white py-10">
                No events found for this location.
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center bg-stone-800 py-6 gap-4 mt-4 rounded-b-lg">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-5 py-2 rounded-full text-white font-medium transition-all ${
                  currentPage === 1
                    ? "bg-gray-700 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-green-500 to-green-900 hover:scale-105"
                }`}
              >
                Previous
              </button>
              
              <span className="text-white font-bold text-lg min-w-[100px] text-center">
                {currentPage} <span className="text-gray-400 font-normal">/ {totalPages}</span>
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 rounded-full text-white font-medium transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-700 cursor-not-allowed opacity-50"
                    : "bg-gradient-to-r from-green-500 to-green-900 hover:scale-105"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;