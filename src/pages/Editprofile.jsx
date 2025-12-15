import React from "react";
import Sidebar from "../components/Sidebar";
import MobileSideBar from "../components/MobileSideBar";

const Editprofile = () => {
  return (
    <div className="min-h-screen bg-gray-900">

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8">

          <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">

            {/* Title */}
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Edit Profile
            </h2>

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-green-500"
              />
            </div>

            {/* Form */}
            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />

              <textarea
                rows="2"
                placeholder="Bio"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />

              {/* Position & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3">
                  <option value="">Select Position</option>
                  <option>Striker</option>
                  <option>Midfielder</option>
                  <option>Defender</option>
                  <option>Goalkeeper</option>
                </select>

                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
                />
              </div>

              <input
                type="text"
                placeholder="Skills (eg: Dribbling, Passing)"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <select className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3">
                <option value="">Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <input
                  type="number"
                  placeholder="Goals"
                  className="bg-transparent border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="Assists"
                  className="bg-transparent border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="Matches"
                  className="bg-transparent border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Experience (Optional)"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <button className="w-full bg-linear-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-pill hover:opacity-90 transition mt-3">
                Save Changes
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <MobileSideBar />
      </div>

    </div>
  );
};

export default Editprofile;
