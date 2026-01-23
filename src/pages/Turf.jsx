import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { MdSportsSoccer } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { getAllTurf } from "../services/AllApi";
import { Badge } from "flowbite-react";
import toast from "react-hot-toast";


const Turf = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [turfData, setTurfData] = useState([]);
  const [sportsAvailability, setSportsAvailability] = useState([]);


  const [dummyTurf, setDummyTurf] = useState([]);

  const [search,setSearch] = useState('')

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getTurfData();
    }
  }, [search]);

  const getTurfData = async () => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      let apiResponse = await getAllTurf(reqHeader,search);
      if (apiResponse.status == 200) {
        setTurfData(apiResponse.data.AllTurfs);
        setDummyTurf(apiResponse.data.AllTurfs);
        let sportsArray = apiResponse.data.AllTurfs.map(
          (eachTurf) => eachTurf.sportsAvailability
        );
        setSportsAvailability(sportsArray);
        // to avaoid adding same sports availability again and again

        let dummySport = [];
        sportsArray.forEach((eachSportsAvailabilty) => {
          if (!dummySport.includes(eachSportsAvailabilty)) {
            console.log(eachSportsAvailabilty);

            dummySport.push(eachSportsAvailabilty);
          }
        });
        setSportsAvailability(dummySport);
      } else {
        toast.error(apiResponse.response.data.message);
        navigate('/login')
      }
    } catch (error) {
      toast.error("Error Occurred While getting turf");
    }
  };

  const filterTurfs = (sportsAvailability) => {
    let filteredTurfs = dummyTurf.filter(
      (eachTurf) => eachTurf.sportsAvailability == sportsAvailability
    );
    setTurfData(filteredTurfs);
  };

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <div className="container-fluid bg-black">
            <div className=" container">
              <div className="flex justify-center ">
                <input onChange={(e)=>setSearch(e.target.value)}
                  placeholder=" Search By Location"
                  className="bg-white border-2 p-2 placeholder:ps-2 rounded-l-2xl w-96"
                  type="text"
                />
                <button className="bg-green-500 font-bold border-2 border-black rounded-l-2xl focus:ring-1 focus:ring-emerald-300 text-white px-4">
                  Search
                </button>
              </div>

              <div>
                {sportsAvailability?.length > 0 && (
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
                        onClick={getTurfData}
                        className=" bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mx-2 mt-3 text-white"
                      >
                        All
                      </button>
                    </motion.div>
                    {sportsAvailability?.map((eachSportsAvailabilty, index) => (
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
                        onClick={() => filterTurfs(eachSportsAvailabilty)}
                        className=" bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mx-2 mt-3 "
                      >
                        <input hidden type="radio" name="" id={index} />
                        <label className="text-white">
                          {eachSportsAvailabilty}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <h2 className="mx-3 mt-3 text-white">Recommended For You</h2>
            <div>
              {turfData?.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 p-4">
                  {turfData?.map((eachTurf) => (
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
                      className="w-fit relative"
                    >
                      <Card
                        className="max-w-xs"
                        imgAlt=""
                        imgSrc={eachTurf.imageURL}
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {eachTurf.turfName}
                        </h5>
                        <div>
                          <Badge
                            className="inline-block"
                            color="success"
                            size="sm"
                          >
                            {eachTurf.sportsAvailability}
                          </Badge>
                        </div>

                        <div className="text-gray-500 text-justify">
                          <h6>
                            <FontAwesomeIcon icon={faLocation} />
                            {eachTurf.location}
                          </h6>
                        </div>

                        <div className="text-center flex justify-center  items-center">
                          <Link
                            to={`/${eachTurf._id}/viewsingle`}
                            className="font-bold text-decoration-none"
                          >
                            <span className="text-white bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
                              Book Now
                            </span>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center items-center">
              <Link className="text-white bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-base text-sm px-4 py-2.5 text-center leading-5 font-bold text-decoration-none">
                View More
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center gap-3 p-3">
          <img
            className="w-50 mt-3 m-3 rounded-4xl "
            src="https://i.pinimg.com/originals/72/19/90/721990480d1f30f45c862cecad967e2d.gif"
            alt=""
          />
          <h2 className=" text-green-700 text-center">
            Turfs are only Listed for{" "}
            <span className="text-green-600"> Logined Users</span> <br />
            <span className="text-xl">
              <Link to={"/login"}>
                <FontAwesomeIcon icon={faSignIn} /> Click here to Login
              </Link>
            </span>
          </h2>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Turf;
