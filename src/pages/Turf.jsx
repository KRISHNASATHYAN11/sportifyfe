import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faSignIn, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAllTurf } from "../services/AllApi";
import toast from "react-hot-toast";

const Turf = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [turfData, setTurfData] = useState([]);
  const [dummyTurf, setDummyTurf] = useState([]);
  const [sportsAvailability, setSportsAvailability] = useState([]);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(8); // Items per page

  const [search, setSearch] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getTurfData(currentPage); // Pass current page
    }
  }, [search, currentPage]); // Re-fetch when page or search changes

  const getTurfData = async (page = 1) => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      
      // Pass page and limit to API
      let apiResponse = await getAllTurf(reqHeader, search, page, limit);
      
      if (apiResponse.status == 200) {
        setTurfData(apiResponse.data.AllTurfs);
        setDummyTurf(apiResponse.data.AllTurfs);
        setTotalPages(apiResponse.data.totalPages); // Get total pages from backend

        // Handle Sports Availability Filter logic (Client side as originally implemented)
        let sportsArray = apiResponse.data.AllTurfs.map(
          (eachTurf) => eachTurf.sportsAvailability,
        );
        let dummySport = [];
        sportsArray.forEach((eachSportsAvailabilty) => {
          if (!dummySport.includes(eachSportsAvailabilty)) {
            dummySport.push(eachSportsAvailabilty);
          }
        });
        setSportsAvailability(dummySport);
      } else {
        toast.error(apiResponse.response?.data?.message || "Error fetching turfs");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Error Occurred While getting turf");
    }
  };

  const filterTurfs = (sportsAvailability) => {
    // Client-side filter resets pagination to page 1
    setCurrentPage(1);
    let filteredTurfs = dummyTurf.filter(
      (eachTurf) => eachTurf.sportsAvailability == sportsAvailability,
    );
    setTurfData(filteredTurfs);
    // Note: When filtering client-side, totalPages might not match actual DB pages.
    // For this UI, we keep it simple or ideally this should be a backend query param.
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
        `}
      </style>

      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#4ade80] selection:text-black">
        
        <Header />

        {isLoggedIn ? (
          <div className="container mx-auto px-4 py-10 relative z-10">
            
            {/* Hero Section & Search */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Find Your Perfect Turf
              </h1>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4ade80] to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative flex bg-[#0a0a0a] rounded-full p-1 border border-white/10">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by location..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-6 py-3 rounded-full outline-none"
                    type="text"
                  />
                  <button className="bg-[#4ade80] text-black font-bold px-8 py-3 rounded-full hover:bg-[#22c55e] transition-colors flex items-center gap-2">
                    Search
                  </button>
                </div>
              </div>

              {/* Filter Buttons (Client Side) */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setCurrentPage(1); getTurfData(1); }} // Reset to page 1 and fetch all
                  className="px-6 py-2 rounded-full border border-[#4ade80]/30 text-[#4ade80] hover:bg-[#4ade80] hover:text-black transition-all text-sm font-bold uppercase tracking-wider"
                >
                  All
                </motion.button>
                {sportsAvailability?.length > 0 && sportsAvailability?.map((sport, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => filterTurfs(sport)}
                    className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/50 hover:text-white transition-all text-sm font-bold uppercase tracking-wider"
                  >
                    {sport}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Turf Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {turfData?.length > 0 ? (
                turfData?.map((eachTurf) => (
                  <motion.div
                    key={eachTurf._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="glass-card rounded-3xl overflow-hidden hover:border-[#4ade80]/50 transition-all duration-500 h-full flex flex-col">
                      
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={eachTurf.imageURL}
                          alt={eachTurf.turfName}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          <span className="text-xs font-bold text-[#4ade80] uppercase">
                            {eachTurf.sportsAvailability}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                            {eachTurf.turfName}
                          </h3>
                          <div className="flex items-center text-gray-400 text-sm mb-3">
                            <FontAwesomeIcon icon={faLocation} className="mr-2 text-[#4ade80]"/>
                            <span className="truncate">{eachTurf.location}</span>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-2xl font-bold text-[#4ade80]">
                              ₹{eachTurf.pricePerHour}
                              <span className="text-xs text-gray-500 font-normal">/hr</span>
                            </div>
                            <div className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                              Max {eachTurf.maxPlayers}
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <div className="mt-5">
                          <Link
                            to={`/${eachTurf._id}/viewsingle`}
                            className="block w-full text-center bg-white/5 hover:bg-[#4ade80] hover:text-black border border-white/10 hover:border-[#4ade80] text-white font-bold py-3 rounded-xl transition-all duration-300"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-4 text-center py-20 text-gray-500">
                  <p className="text-xl">No turfs found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination Component */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    currentPage === 1 
                    ? 'border-white/10 text-gray-600 cursor-not-allowed' 
                    : 'border-white/20 text-white hover:bg-white/10 hover:border-[#4ade80] hover:text-[#4ade80]'
                  }`}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${
                      currentPage === i + 1
                        ? 'bg-[#4ade80] text-black shadow-[0_0_15px_rgba(74,222,128,0.5)]'
                        : 'bg-transparent border border-white/10 text-gray-400 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    currentPage === totalPages 
                    ? 'border-white/10 text-gray-600 cursor-not-allowed' 
                    : 'border-white/20 text-white hover:bg-white/10 hover:border-[#4ade80] hover:text-[#4ade80]'
                  }`}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            )}

          </div>
        ) : (
          // Not Logged In View
          <div className="flex flex-col justify-center items-center h-[70vh] gap-6 px-4 text-center">
            <div className="relative">
               <div className="absolute inset-0 bg-[#4ade80]/20 blur-3xl rounded-full"></div>
               <img
                  className="w-64 md:w-96 rounded-2xl relative z-10 border border-white/10"
                  src="https://i.pinimg.com/originals/72/19/90/721990480d1f30f45c862cecad967e2d.gif"
                  alt="Login Required"
               />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Turfs are listed for <span className="text-[#4ade80]">Logged In Users</span>
              </h2>
              <Link 
                to={"/login"} 
                className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-[#4ade80] transition-colors font-semibold"
              >
                <FontAwesomeIcon icon={faSignIn} /> Click here to Login
              </Link>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </>
  );
};

export default Turf;