import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LiquidEther from "../components/LiquidEther";
import { Link } from "react-router-dom";
import CardSwap, { Card } from "../components/CardSwap";
import neonball from "../assets/neonball.png";
import highlighticon from "../assets/highlighticon.png";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import targeticon from "../assets/targeticon.png";
import msgicon from "../assets/msgicon.png";
import lockicon from "../assets/lockicon.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import mobile from "../assets/mobile.png";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { getLimitedEvents, getLimitedTurfs } from "../services/AllApi";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "flowbite-react";
import { BaseUrl } from "../services/BaseURL";
import TestimonialSlider from "./TestimonialSlider";
const Home = () => {
  const [homeTurfs, setHometurfs] = useState([]);

  const [homeEvents, setHomeEvents] = useState([]);

  useEffect(() => {
    getHomeTurfs();
    getHomeEvents();
  }, []);

  const getHomeTurfs = async () => {
    try {
      let apiResponse = await getLimitedTurfs();
      if (apiResponse.status == 200) {
        setHometurfs(apiResponse.data.limitedTurfs);
        console.log(apiResponse.data.limitedTurfs);
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error getting Home turfs");
    }
  };

  const getHomeEvents = async () => {
    try {
      let apiResponse = await getLimitedEvents();
      if (apiResponse.status == 200) {
        setHomeEvents(apiResponse.data.limitedEvents);
        console.log(apiResponse.data.limitedEvents);
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error getting Home turfs");
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-black">
        {/* HERO SECTION */}
        <section className="w-full bg-black text-white relative overflow-hidden">
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight fntstyle">
                  SPORTIFY
                  <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-400">
                    YOUR SPORTS COMPANION
                  </span>
                </h1>

                <p className="text-lg text-gray-300">Play. Connect. Compete.</p>

                <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Join matches, build teams, and grow your sports circle. Every
                  game brings you one step closer to your best.
                </p>

                <div className=" mt-4 ">
                  <Link
                    to="/turf"
                    className="bg-linear-to-r from-lime-300 via-lime-400 to-lime-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition text-decoration-none mx-2"
                  >
                    EXPLORE MORE
                  </Link>

                  <Link
                    to="/turf"
                    className="border-2 border-green-500 px-6 py-3 text-decoration-none bg-green-500 text-white rounded-full hover:bg-green-500 hover:text-black transition mx-2 "
                  >
                    BOOK TURF
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="flex justify-center lg:justify-end">
                <img
                  src="https://img.freepik.com/free-photo/neon-style-american-football-player_23-2151827382.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Sportify Hero"
                  className="w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="bg-black text-white py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 text-center space-y-8"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <img
                src="https://www.loveandlustgame.com/static/images/apple-store-badge-en.svg"
                alt="App Store"
                className="h-14"
              />
              <img
                src="https://www.loveandlustgame.com/static/images/web-app-beta-en.svg"
                alt="Web App"
                className="h-14"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Rated 4.7★ on the App Store
              </h2>
              <p className="text-gray-400">
                Loved by over 265,000 players worldwide
              </p>
            </div>
          </motion.div>
        </section>

        {/* card section */}

        <section className="py-12 bg-black ">
          <h2 className="text-3xl fntstyle text-center text-white mt-5">
            Popular Events
          </h2>
          <p className="text-white text-center mt-2">Most Popular Events </p>
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="bg-stone-900 p-4">
            {homeEvents?.length > 0 && (
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {homeEvents?.map((eachEvent) => (
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
                    className="bg-stone-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={`${BaseUrl}/uploads/${eachEvent.eventImage}`}
                      alt="Football Turf"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <div>
                        <Badge
                          className="inline-block"
                          color="success"
                          size="sm"
                        >
                          {eachEvent.sportType}
                        </Badge>
                      </div>

                      <p className="text-xl font-semibold text-white">
                        {eachEvent.eventName}
                      </p>

                      <p className="text-white text-sm mt-1">
                        <FontAwesomeIcon icon={faLocation} />
                        {eachEvent.location}
                      </p>
                      <p className="text-green-500 font-bold mt-3">
                        ₹{eachEvent.pricePerPerson} /person
                      </p>
                      <p className="text-green-500 font-bold">
                        {eachEvent.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl fntstyle text-white mt-5">Popular Turfs</h2>
            <p className="text-white mt-2">Most booked turfs </p>
          </div>

          <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="bg-stone-900 p-4">
            {homeTurfs?.length > 0 && (
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {homeTurfs?.map((eachTurf) => (
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
                    className="bg-stone-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={eachTurf.imageURL}
                      alt="Football Turf"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <div>
                        <Badge
                          className="inline-block"
                          color="success"
                          size="sm"
                        >
                          {eachTurf.sportsAvailability}
                        </Badge>
                      </div>

                      <p className="text-xl font-semibold text-white">
                        {eachTurf.turfName}
                      </p>

                      <p className="text-white text-sm mt-1">
                        <FontAwesomeIcon icon={faLocation} />
                        {eachTurf.location}
                      </p>
                      <p className="text-green-500 font-bold mt-3">
                        ₹{eachTurf.pricePerHour} / hour
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        <div className="container  mt-10">
          <TestimonialSlider />
        </div>

        <div className=" mt-20 container">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate "
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center "
              >
                <img style={{ width: "50px" }} src={highlighticon} alt="" />
              </motion.div>
              <h5 className="text-white text-center">
                Turn Every Moment Into a Highlight
              </h5>
              <p className="text-white">
                Discover players, matches, and updates that keep your sports
                world exciting every day.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center"
              >
                <img style={{ width: "50px" }} src={icon2} alt="" />
              </motion.div>
              <h5 className="text-white text-center">Stay Ahead of the Game</h5>
              <p className="text-white">
                Get real-time scores, tips, and updates—fresh action every time
                you open the app.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center"
              >
                <img style={{ width: "50px" }} src={targeticon} alt="" />
              </motion.div>

              <h5 className="text-white text-center">
                Built Around Your Interests
              </h5>
              <p className="text-white">
                Your feed adjusts to your favourite sports, teams, and
                players—making Sportify feel truly yours.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center"
              >
                <img style={{ width: "50px" }} src={msgicon} alt="" />
              </motion.div>
              <h5 className="text-white text-center">
                Connect Without Pressure
              </h5>
              <p className="text-white">
                Follow players, share posts, and enjoy sports communities in a
                friendly, relaxed space.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center"
              >
                <img style={{ width: "50px" }} src={lockicon} alt="" />
              </motion.div>
              <h5 className="text-white text-center">Your Data, Your Game</h5>
              <p className="text-white">
                We protect your privacy. Your profile, chats, and preferences
                stay secure with advanced safety controls.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
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
                className=" flex justify-center items-center"
              >
                <img style={{ width: "50px" }} src={icon1} alt="" />
              </motion.div>
              <h5 className="text-white text-center">
                Sportify Anywhere, Anytime
              </h5>
              <p className="text-white">
                Check updates, follow players, or post your thoughts—whether
                you’re at home, on the go, or cheering from the stands.
              </p>
            </div>
          </div>
        </div>

        <Slider />

        <div className="container rounded-2xl bg-green-400 mt-3">
          <div className="row ">
            <div className="col-12 col-md-6">
              <div data-aos="fade-up-right" className="p-3">
                <img
                  src={mobile}
                  className="rotate-10 imageshadow"
                  alt="mobile"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 p-5 bg-green-950 ">
              <h4 className="text-center text-white">
                Your best workouts start with{" "}
                <span className="text-green-300">Sportify. </span> Train
                smarter, push harder, and make every session unforgettable!
              </h4>
              <div
                className=" container my-5 my-md-4 mt-lg-5 row justify-content-center align-items-center gap-2 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="700"
              >
                <div className="col-auto mx-2 px-0">
                  <Link
                    href="https://apps.apple.com/app/apple-store/id1594935699?pt=118739950&amp;ct=ios_home&amp;mt=8"
                    className="btn btn-download p-0"
                    target="_blank"
                  >
                    <img
                      src="https://www.loveandlustgame.com/static/images/apple-store-badge-en.svg"
                      alt="Download  Sportify on the App Store"
                      className="img-fluid h-100"
                    />
                  </Link>
                </div>
                <div className="col-auto mx-2 px-0">
                  <Link
                    to={""}
                    className="btn btn-download p-0"
                    target="_blank"
                  >
                    <img
                      src="https://www.loveandlustgame.com/static/images/web-app-beta-en.svg"
                      alt=""
                      className="img-fluid h-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
