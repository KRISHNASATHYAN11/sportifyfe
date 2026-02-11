import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Sidebar from "../components/Sidebar";
import MobileSideBar from "../components/MobileSideBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocation,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { BaseUrl } from "../services/BaseURL";
import { getAllUsers, updateFollow, updateUnFollow } from "../services/AllApi";
// import { Card } from "flowbite-react";
// import Image from "next/image";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [allUser, setAllUser] = useState({});

  useEffect(() => {
    loadProfileData();
    getUserData();
    handleFollow();
    handleUnFollow();
  }, []);

  const loadProfileData = () => {
    let userDetails = localStorage.getItem("user");
    userDetails = JSON.parse(userDetails);
    setUserData(userDetails);
  };

  const getUserData = async () => {
    try {
      let token = localStorage.getItem("token");
      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apiResponse = await getAllUsers(header);
      if (apiResponse.status == 200) {
        setAllUser(apiResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (id) => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const apiResponse = await updateFollow(id, reqHeader);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        getUserData();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while handle follow");
    }
  };

  const handleUnFollow = async (id) => {
    try {
      let token = localStorage.getItem("token");
      let reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const apiResponse = await updateUnFollow(id, reqHeader);
      if (apiResponse.status == 200) {
        getUserData();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while handle follow");
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-stone-900">
        
        <Sidebar />

        <div className="flex-1 md:ml-60 p-4">
          <div className="flex gap-8 items-center text-white mx-5 my-5">
            <img
              src={
                userData.profilePic
                  ? `${BaseUrl}/uploads/${userData.profilePic}`
                  : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
              }
              className="w-36 h-36 rounded-full object-cover"
              alt="profile"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 style={{ color: "white" }} className="text-2xl font-bold">
                  {userData?.userName}
                </h2>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  PRO
                </span>
              </div>

              <p className=" mt-1 text-white">
                {userData?.sport} <br />
                <FontAwesomeIcon icon={faStickyNote} />
                {userData?.bio}
              </p>
              <p>
                <FontAwesomeIcon icon={faLocation} /> {userData?.location}
              </p>
              <p className="text-white">Skill Level : {userData?.skillLevel}</p>
              <p>
                <FontAwesomeIcon icon={faClock} /> Availablility :{" "}
                {userData?.availability}
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  style={{ color: "white" }}
                  to={"/editprofile"}
                  className="bg-lime-500 text-decoration-none px-6 py-2 rounded hover:bg-lime-700"
                >
                  Edit Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-green-500 text-sm">Followers</p>
                <p className="text-2xl font-bold">
                  {userData?.followers?.length || 0}
                </p>
              </div>
              <div>
                <p className="text-green-500 text-sm">Following</p>
                <p className="text-2xl font-bold">
                  {userData?.following?.length || 0}
                </p>
              </div>
            </div>
          </div>

          {/* suggested player */}
          <div className="mt-3 p-4 ">
            <h2 className="mx-10  text-white"> Suggested Players for You</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              {allUser?.length > 0 &&
                allUser.map((eachUser) => (
                  <Card
                    key={eachUser._id}
                    className="p-4 bg-black  shadow-lime-400 shadow-2xl"
                  >
                    <div className="flex flex-col items-center pb-6 text-white">
                      <img
                        className="w-20 h-20 rounded-full object-cover"
                        src={
                          eachUser.profilePic
                            ? `${BaseUrl}/uploads/${eachUser.profilePic}`
                            : "https://img.freepik.com/premium-vector/green-user-account-profile-flat-icon-apps-websites_1254296-1186.jpg?w=360"
                        }
                        alt=""
                      />

                      <h5 className="mt-3 text-lg font-semibold">
                        {eachUser.userName}
                      </h5>

                      <p className="text-sm text-white">{eachUser.sport}</p>

                      <div className="mt-4 flex space-x-3">
                        {userData.followers?.includes(userData?._id) ? (
                          <button
                            onClick={() => handleUnFollow(userData._id)}
                            className="bg-lime-400 text-white px-6 py-2 rounded  hover:bg-lime-700"
                          >
                            Unfollow
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUnFollow(userData._id)}
                            className="bg-lime-400 text-white px-6 py-2 rounded  hover:bg-lime-700"
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            <div className="flex justify-center items-center">
              <button className="mt-3 text-white text-decoration-none bg-linear-to-r from-lime-200 via-lime-400 to-lime-500  border-transparent px-4 py-2 rounded-pill  d-lg-flex ">
                View More
              </button>
            </div>
          </div>

          {/* popular teams around you */}

          <div className="mt-3  p-4">
            <h2 className="font-extrabold mx-10 text-white ">
              Popular Teams Around You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 p-4">
              <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 rounded-full object-cover my-2"
                    src="https://www.republicoftogo.com/var/site/storage/images/toutes-les-rubriques/sport/vers-un-nouveau-chapitre-du-football-togolais/2944392-1-fre-FR/vers-un-nouveau-chapitre-du-football-togolais_i1920.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Riverside Falcons
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Football Team
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Join Team
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-decoration-none"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 rounded-full object-cover my-2"
                    src="https://png.pngtree.com/thumb_back/fh260/background/20240324/pngtree-cricket-background-logo-image_15687146.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Rising Legends CC
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Cricket Team
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Join Team
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-decoration-none"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 rounded-full object-cover my-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJICe7aAO5BkRrqfydj71Ubkj9uU-TL6Y0B75_V_hBuoJrsEiUhGaxBUjfaAXMgRjiCI&usqp=CAU"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Smash Squad
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Badminton Team
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Join Team
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-decoration-none"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 rounded-full object-cover my-2"
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/115/203/small/basketball-on-the-playground-in-the-gym-generative-ai-photo.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Urban Warrior
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    BasketBall Team
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Join Team
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 text-decoration-none"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-5 py-2  rounded-pill bg-linear-to-r from-blue-500 to-green-500 text-white">
                View More
              </button>
            </div>
          </div>
        </div>

        <MobileSideBar />
      </div>
    </>
  );
};

export default Profile;
