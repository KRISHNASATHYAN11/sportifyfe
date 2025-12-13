import React from "react";
import { Card } from "flowbite-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-black">
        <div className=" container flex justify-center items-center gap-5">
          <input
            className="w-1/2 gap-3 rounded-2xl p-2 border-transparent mt-5 text-gray-900 bg-white  "
            placeholder="Search By Title..."
            type="text"
          />
          <input
            className="w-1/2 gap-3 rounded-2xl p-2 border-transparent mt-5  text-gray-900 bg-white "
            placeholder="Location"
            type="text"
          />
        </div>

        <div className="w-full bg-black py-4 flex flex-wrap gap-3 justify-center">
          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#39FF14] bg-[#39FF14] hover:shadow-[0_0_10px_#39FF14] transition  hover:bg-black hover:text-white">
            Football
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#2CFF05] bg-[#2CFF05] hover:shadow-[0_0_10px_#2CFF05] transition hover:bg-black hover:text-white">
            Cricket
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#08CB00] bg-[#08CB00] hover:shadow-[0_0_10px_#08CB00] transition  hover:bg-black hover:text-white">
            Marathon
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#00A843] bg-[#00A843]  hover:shadow-[0_0_10px_#00A843] transition  hover:bg-black hover:text-white">
            Badminton
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#009F55] bg-[#009F55]  hover:shadow-[0_0_10px_#009F55] transition  hover:bg-black hover:text-white">
            Tennis
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#00C896] bg-[#00C896]  hover:shadow-[0_0_10px_#00C896] transition  hover:bg-black hover:text-white">
            Basketball
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#00FF66] bg-[#00FF66]  hover:shadow-[0_0_10px_#00FF66] transition  hover:bg-black hover:text-white">
            Sports Expo
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#33FF99] bg-[#33FF99]  hover:shadow-[0_0_10px_#33FF99] transition  hover:bg-black hover:text-white">
            Swimming
          </div>

          <div className="px-4 py-1 rounded-full text-sm font-semibold border border-[#22CC88] bg-[#22CC88]  hover:shadow-[0_0_10px_#22CC88] transition  hover:bg-black hover:text-white">
            Skating
          </div>
        </div>

        <div className="container mt-10 p-3">
          <h4 className="text-white mb-5">Events</h4>
          <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sbi-green-marathon-season-6-thiruvananthapuram-0-2025-6-12-t-11-24-17.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </motion.div>

            <motion.div whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}>
              <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-realty-hawks-vs-maverick-kites-eagles-vs-falcon-0-2025-12-4-t-20-21-35.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
            </motion.div>

          <motion.div whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}>
              <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-world-tennis-league-2025-0-2025-12-5-t-9-14-33.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </motion.div>

       <motion.div whileHover={{
                y: -10, 
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}>
             <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-hope-5-km-run-get-medal-by-courier-0-2025-8-3-t-5-19-42.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
       </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
         <button className="bg-green-700 rounded-2xl p-2 px-3 border-transparent rounded-pill text-white mb-5 ">View More...</button>
        </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Events;
