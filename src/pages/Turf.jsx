import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { MdSportsSoccer } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";


const Turf = () => {
  return (
    <>
      <Header />
      <div className="container-fluid bg-black">
        <div className="flex justify-center items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mt-5"
          >
            <div className="relative mt-2">
              <MdSportsSoccer className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
              <input
                placeholder="Sports Name"
                className="w-full h-12 pl-12 pr-3 rounded-lg border border-gray-300 focus:ring-2"
                type="text"
              />
            </div>

            <div className="relative mt-3">
              <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
              <input
                placeholder="Search with Location"
                className="w-full h-12 pl-12 pr-3 rounded-lg border border-gray-300 focus:ring-2"
                type="text"
              />
            </div>

            <div className="flex justify-center items-center">
              <button className=" px-5 py-2  bg-green-500 rounded-pill text-white hover:bg-green-700 mt-4">
                SEARCH
              </button>
            </div>
          </div>
        </div>

        <h2 className="mx-3 mt-3 text-white">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 p-4">
          <motion.div  whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }} className="w-fit relative">
            <Card
              className="max-w-xs"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://playo.gumlet.io/RSARAVISTURF20250331165955805595/RSARavisTurf1743582303231.jpeg?format=webp&q=60&ar=16:9&mode=crop&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/Playo-Logo-Green-01.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright"
            >
              <div className="absolute top-34  right-0 px-4 py-2 border border-transparent text-white bg-green-800 rounded-tl-3xl">
              <h6 className="text-sm font-medium">Book your spot</h6>
            </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kochi Riverside Arena
              </h5>
              <div className=" flex justify-center items-center rounded-lg">
                <div className="flex gap-1 text-yellow-400 text-2xl ">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Kochi , Kerala
              </p>

              <div className="text-center flex justify-center  items-center">
                <Link to={""} className="font-bold text-decoration-none">
                  <span className="text-green-800">Book Now...</span>
                </Link>
              </div>
            </Card>
          </motion.div>

     <motion.div  whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }} className="w-fit relative">
           <Card
            className="max-w-xs"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://playo.gumlet.io/TERRAARENA20251027134548528908/TerraArena1761574027671.jpeg?format=webp&q=60&ar=16:9&mode=crop&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/Playo-Logo-Green-01.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright"
          >
              <div className="absolute top-34  right-0 px-4 py-2 border border-transparent text-white bg-green-800 rounded-tl-3xl">
              <h6 className="text-sm font-medium">Book your spot</h6>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hyderabad Greenoval
            </h5>
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-400">★</span>
              </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Hyderabad , Banjara Hills
            </p>
            <div className="text-center flex justify-center  items-center">
              <Link to={""} className="font-bold text-decoration-none">
                <span className="text-green-800">Book Now...</span>
              </Link>
            </div>
          </Card>
     </motion.div>

    <motion.div  whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }} className="w-fit relative">
            <Card
            className="max-w-xs"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://playo.gumlet.io/BASECAMPFOOTBALLBYRUSHARENA20250922173122538077/BasecampFootballByRushArena1758562427030.jpeg?format=webp&q=60&ar=16:9&mode=crop&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/Playo-Logo-Green-01.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright"
          >
              <motion.div  className="absolute top-34  right-0 px-4 py-2 border border-transparent text-white bg-green-800 rounded-tl-3xl">
              <h6 className="text-sm font-medium">Book your spot</h6>
            </motion.div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bengal East Grounds
            </h5>
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-gray-400">★</span>

                <span className="text-gray-400">★</span>
              </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Kolkata , Salt Lake
            </p>
            <div className="text-center flex justify-center  items-center">
              <Link to={""} className="font-bold text-decoration-none">
                <span className="text-green-800">Book Now...</span>
              </Link>
            </div>
          </Card>
    </motion.div>

         <motion.div  whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }} className="w-fit relative">
           <Card
            className="max-w-xs"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://playo.gumlet.io/BASECAMPBYPUSHSPORTS20250407103918335339/BasecampbyPushSportsBengaluruCityUniversity1748863238954.jpg?format=webp&q=60&ar=16:9&mode=crop&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/Playo-Logo-Green-01.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright"
          >
            <div className="absolute top-34  right-0 px-4 py-2 border border-transparent text-white bg-green-800 rounded-tl-3xl">
              <h6 className="text-sm font-medium">Book your spot</h6>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Royal Turf Jaipur
            </h5>
            <div className=" flex justify-center items-center rounded-lg">
              <div className="flex gap-1 text-yellow-400 text-2xl ">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Jaipur , Vaishali Nagar
            </p>

            <div className="text-center flex justify-center  items-center">
              <Link to={""} className="font-bold text-decoration-none">
                <span className="text-green-800">Book Now...</span>
              </Link>
            </div>
          </Card>
         </motion.div>
        </div>

        <div className="flex justify-center items-center">
         <button className="bg-green-700 rounded-2xl p-2 px-3 border-transparent rounded-pill text-white mb-5">View More...</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Turf;
