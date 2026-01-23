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
        <div className="relative w-full h-[600px] md:h-[650px] ">
          <LiquidEther
            colors={["#39FF14", "#2CFF05", "#08CB00"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />

          <div
            className="
        absolute inset-0 flex items-center justify-center
        px-4 md:px-10 lg:px-20 
        pointer-events-none
      "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl">
              <div className="text-center md:text-left">
                <div className="flex justify-end">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
                <div className="p-2 mx-2">
                  <h1 className="fntstyle text-white text-5xl md:text-7xl font-extrabold leading-tight p-4 mt-5">
                    SPORTIFY
                    <br />
                    <span className="text-2xl md:text-4xl font-bold fntstyle">
                      YOUR SPORTS COMPANION
                    </span>
                  </h1>
                  <p className="text-white "> Play.Connect.Compete.</p>
                  <p className="text-white">
                    {" "}
                    Join matches , build teams , and grow your sports
                    circle.Every game brings you one step closer to your best.
                  </p>
                </div>
                <div className=" flex text-center justify-center items-center">
                  <Link
                    to={"/turf"}
                    className="text-white text-decoration-none bg-linear-to-r from-lime-200 via-lime-400 to-lime-500  border-transparent px-4 py-2 rounded-pill  d-lg-flex mx-3"
                  >
                    EXPLORE MORE
                  </Link>

                  <Link
                    to={"/turf"}
                    className="text-white text-decoration-none border-2 border-green-500  px-4 py-2 rounded-pill  d-lg-flex mx-3"
                  >
                    BOOK TURF
                  </Link>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="h-[350px] md:h-[500px] w-[260px] md:w-[350px] relative">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                  >
                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://png.pngtree.com/thumb_back/fw800/background/20240131/pngtree-football-soccer-player-kicking-neon-light-style-art-pic-image_15621380.jpg"
                        alt=""
                      />
                    </Card>

                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://www.shutterstock.com/image-vector/cricket-player-neon-vector-art-600nw-2022892385.jpg"
                        alt=""
                      />
                    </Card>

                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://st2.depositphotos.com/2140915/9487/v/450/depositphotos_94878998-stock-illustration-basketball-the-player-jumping-with.jpg"
                        alt=""
                      />
                    </Card>
                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://thumbs.dreamstime.com/b/professional-woman-tennis-player-illustration-green-linear-neon-tennis-player-black-background-professional-woman-tennis-122334999.jpg"
                        alt=""
                      />
                    </Card>
                  </CardSwap>
                </div>
                <div className="flex justify-between">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" container my-5 my-md-4 mt-lg-5 row justify-content-center align-items-center gap-2  aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="700"
        >
          <div className="col-auto mx-2 px-0 ">
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
            <Link to={""} className="btn btn-download p-0" target="_blank">
              <img
                src="https://www.loveandlustgame.com/static/images/web-app-beta-en.svg"
                alt=""
                className="img-fluid h-100"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h2 className="text-center text-white">
                Rated 4.7★ on the App Store
              </h2>

              <p className="text-center text-white">
                Loved by over 265,000 players worldwide
              </p>
            </div>
          </div>
          <div className="text-sm text-white xl:text-base 2xl:text-lg text-center animate-bounce flex justify-center">
            <FaAngleDoubleDown className="text-green-300" />
            <h5 className="text-green-500">Scroll Down</h5>
          </div>
        </div>

        <div className="relative h-72 bg-black overflow-hidden">
          <div className="absolute top-1/2-left-1/2 w-[150%] bg-green-700 py-3 flex justify-around ">
            <span className="text-white font-bold tracking-widest fntstyle text-2xl ">
              SPORTIFY
            </span>
            <span className="text-white font-bold tracking-widest fntstyle text-2xl ">
              SPORTIFY
            </span>
            <span className="text-white font-bold tracking-widest fntstyle text-2xl">
              SPORTIFY
            </span>
            <span className="text-white font-bold tracking-widest fntstyle text-2xl">
              SPORTIFY
            </span>
            <span className="text-white font-bold tracking-widest fntstyle text-2xl">
              SPORTIFY
            </span>
            <span className="text-white font-bold tracking-widest fntstyle text-2xl">
              SPORTIFY
            </span>
          </div>
        </div>

        {/* card section */}

        <section className="py-12 bg-black ">
          <h2 className="text-3xl fntstyle text-center text-white mt-5">
            Popular Events
          </h2>
          <p className="text-white text-center mt-2">Most Popular Events </p>
          <div className="">
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
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
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

                      <h3 className="text-xl font-semibold text-gray-800">
                        {eachEvent.eventName}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        <FontAwesomeIcon icon={faLocation} />
                        {eachEvent.location}
                      </p>
                      <p className="text-green-600 font-bold mt-3">
                        ₹{eachEvent.pricePerPerson} /person
                      </p>
                      <p className="text-green-700 font-bold">
                        {eachEvent.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl fntstyle text-white mt-5">Popular Turfs</h2>
            <p className="text-white mt-2">Most booked turfs </p>
          </div>

          <div className="">
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
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
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

                      <h3 className="text-xl font-semibold text-gray-800">
                        {eachTurf.turfName}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        <FontAwesomeIcon icon={faLocation} />
                        {eachTurf.location}
                      </p>
                      <p className="text-green-600 font-bold mt-3">
                        ₹{eachTurf.pricePerHour} / hour
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
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
