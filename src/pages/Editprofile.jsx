import React from "react";

const Editprofile = () => {
  return (
    <>
      <div className="mx-auto max-w-1/2 ">
        <h2 className="text-center mb-6">Edit Profile</h2>
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">
          <div>
            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Bio"
              className="w-full border p-2 rounded"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select className="w-full border p-2 rounded" name="" id="">
                <option value="">Striker</option>
                <option value="">Defender</option>
                <option value="">GoalKeeper</option>
                <option value="">Midfielder</option>
              </select>
            </div>

            <div>
              <input
                className="w-full border p-2 rounded"
                placeholder="Enter Location"
                type="text"
              />
            </div>
          </div>

          <div>
            <input
              className="w-full border p-2 rounded"
              placeholder="skills"
              type="text"
            />
          </div>

          <div>
            <select className="w-full border p-2 rounded" name="" id="">
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advanced</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Goals</label>
              <input
                className="w-full border p-2 rounded"
                type="number"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Assists</label>
              <input
                className="w-full border p-2 rounded"
                type="number"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Matches</label>
              <input
                className="w-full border p-2 rounded"
                type="number"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Experience</label>
            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="XYZ Football Club (Optional)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold py-2 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
