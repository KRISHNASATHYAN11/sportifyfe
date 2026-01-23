import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import MobileSideBar from "../components/MobileSideBar";
import toast from "react-hot-toast";
import { updateprofile } from "../services/AllApi";
import { Link, useNavigate } from "react-router-dom";


const Editprofile = () => {
  const [preview, setPreview] = useState(
    "https://img.freepik.com/premium-vector/green-user-account-profile-flat-icon-apps-websites_1254296-1186.jpg"
  );

  const [editData, setEditData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    location: "",
    sport: "",
    position: "",
    skillLevel: "",
    availability: "",
    bio: "",
    userType: "",
    profilePic: "",
  });

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("user"));
    setEditData(userDetails);
  }, []);

  const navigate = useNavigate()

  const handleUploadedImage = (e) => {
    setEditData({ ...editData, profilePic: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const updateUser = async () => {
    try {
      if (editData.password == editData.confirmPassword) {
        let token = localStorage.getItem("token");

        let header = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        let reqBody = new FormData();
        // to add  new key value pair into the form data append is used.

        for (let key in editData) {
          reqBody.append(key, editData[key]);
        }

        let apiResponse = await updateprofile(editData._id, reqBody, header);
        console.log(apiResponse)
        if (apiResponse.status == 200) {
          toast.success("Profile Updated");

          localStorage.setItem('user',JSON.stringify(apiResponse.data.updatedUser))
          navigate('/profile')

        } else {
          toast.error(apiResponse.respose.data.message);
        }
      } else {
        toast.error("Password and Confirm Password is not the same.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred While updating the profile");
    }
  };

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
          <div className="w-full  bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Edit Profile
            </h2>

            <div className=" flex flex-col items-center justify-center p-2  ">
              <label htmlFor="imgup">
                <input
                  onChange={(e) => handleUploadedImage(e)}
                  hidden
                  type="file"
                  name=""
                  id="imgup"
                />
                <img className="rounded-full w-25" src={preview} alt="" />
              </label>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <input
                onChange={(e) =>
                  setEditData({ ...editData, userName: e.target.value })
                }
                value={editData?.userName}
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />

              <textarea
                onChange={(e) =>
                  setEditData({ ...editData, bio: e.target.value })
                }
                value={editData?.bio}
                rows="2"
                placeholder="Bio"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />

              <input
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
                type="text"
                placeholder="Location"
                className="w-full bg-transparent mt-3 border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none "
              />

              <input
                onChange={(e) =>
                  setEditData({ ...editData, sport: e.target.value })
                }
                type="text"
                placeholder="Sport"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-4"
              />

              <select
                onChange={(e) =>
                  setEditData({ ...editData, skillLevel: e.target.value })
                }
                className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              >
                <option value="">Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <input
                onChange={(e) =>
                  setEditData({ ...editData, availability: e.target.value })
                }
                type="text"
                placeholder="Availability (eg: Evening : 6 p.m. )"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-4"
              />

              <input
                onChange={(e) =>
                  setEditData({ ...editData, password: e.target.value })
                }
                value={editData?.password}
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />
              <input
                onChange={(e) =>
                  setEditData({ ...editData, confirmPassword: e.target.value })
                }
                value={editData?.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none mt-3"
              />

              <div className="flex justify-evenly text-center">
                <button
                  onClick={updateUser}
                  className="w-1/2 bg-linear-to-r mx-3 from-green-400 to-green-600 text-white font-semibold py-3 rounded-pill hover:opacity-90 transition mt-3"
                >
                  Save Changes
                </button>
                <Link to={'/profile'} className="w-1/2 bg-transparent border  border-green-400 text-white font-semibold py-3 rounded-pill hover:opacity-90 transition mt-3">
                  Back
                </Link>
              </div>
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
