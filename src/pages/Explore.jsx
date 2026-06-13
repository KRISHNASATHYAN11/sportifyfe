import React, { useEffect, useState } from "react";
import { getAllPost } from "../services/AllApi";
import { BaseUrl } from "../services/BaseURL";
import MobileSideBar from "../components/MobileSideBar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Explore = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllPost(reqHeader);

      if (result.status === 200) {
        setAllPosts(result.data);
      } else {
        console.log("Failed to fetch posts");
      }
    }
  };

  return (
    <>
      <div className="bg-black min-h-screen">
        <Sidebar />

        <div className="flex-1 md:ml-60 p-4">
         

          {allPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            >
              {allPosts.map((post) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  key={post._id}
                  className="bg-stone-800 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={`${BaseUrl}/uploads/${post.postImage}`}
                      alt="post"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-gray-200 text-sm">{post.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-gray-200">No posts available</p>
          )}
        </div>
        <MobileSideBar />
      </div>
    </>
  );
};

export default Explore;
