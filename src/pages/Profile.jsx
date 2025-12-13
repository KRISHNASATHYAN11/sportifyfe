import React from "react";

import { Card } from "flowbite-react";
import Sidebar from "../components/Sidebar";
import MobileSideBar from "../components/MobileSideBar";

const Profile = () => {
  return (
    <>
      <div class="flex min-h-screen bg-gray-900">
        <Sidebar />

        <div class="flex-1 md:ml-60 p-4">
          <div className="min-h-screen bg-gray-700 flex justify-center py-10 px-4">
            <div className="max-w-4xl w-full">
              <div classname="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://i.pinimg.com/1200x/1b/97/49/1b974944f69fc1187018739f00a2af30.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-4 text-white">
                    <h2 className="text-2xl font-semibold">your_username</h2>
                    <button className="px-4 py-1 bg-green-500 border-transparent rounded-pill hover:bg-green-700 text-sm">
                      Edit Profile
                    </button>
                  </div>

                  <div className="flex gap-6 mt-4 text-sm text-white">
                    <p>
                      <span className="font-semibold">8</span> posts
                    </p>
                    <p>
                      <span className="font-semibold">1111</span> followers
                    </p>
                    <p>
                      <span className="font-semibold">231</span> following
                    </p>
                  </div>

                  <div className="mt-3 text-sm leading-snug text-white">
                    <p className="font-semibold">Your Name 💛</p>
                    <p> bio Something cute or meaningful here ✨</p>
                    <p>🌿 Kochi , Kerala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* suggested player */}
          <div className="mt-3 p-4 ">
            <h2 className="font-extrabold mx-10  text-white">
              {" "}
              Suggested Players for You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 p-4">
              <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-28 h-28 rounded-full object-cover my-2"
                    src="https://i.pinimg.com/736x/41/db/b0/41dbb0056910158c864ff637e59be9d1.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Arav Nair
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Football
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Follow
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
                    src="https://images.stockcake.com/public/9/d/2/9d2a888f-de48-4131-8807-0bcab013f4dc_large/intense-badminton-play-stockcake.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Arjun Das
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Badminton Player
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Follow
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ftfju7CCxiB9Ufv4GTXma7eAgRXbbnZGhyyonDqnUHXNEkPi8Ek1oiEFaHku41E-BA8&usqp=CAU"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Vivek Iyer
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Cricket Player
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Follow
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
                    src="https://img.freepik.com/premium-photo/young-caucasian-woman-isolated-white-background-playing-basketball_1368-159978.jpg"
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Luna
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    BasketBall Player
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-decoration-none"
                    >
                      Follow
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-5 py-2 rounded-pill bg-linear-to-r from-blue-500 to-green-500 text-white">
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
