import React, { useState } from "react";
import toast from "react-hot-toast";
import { createTeam } from "../services/AllApi";
import Sidebar from "./Sidebar";
import MobileSideBar from "./MobileSideBar";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTeam = async () => {
    try {
      if (teamName === "" || sport === "") {
        toast.error("Team name and sport are required");
        return;
      }

      const reqBody = {
        teamName,
        sport,
        description,
      };

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const apiResponse = await createTeam(reqBody, headers);
      console.log(apiResponse.data);

      toast.success("Team created successfully");

      // clear form
      setTeamName("");
      setSport("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating team");
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Sidebar />
      <div className="flex justify-center items-center text-white">
        <div className="w-96 mt-5 border p-4 rounded ">
          <p className="text-center mb-4">Build Your Dream Team</p>

          <input
            placeholder="Team Name"
            className="p-2 border-2 border-white w-full mb-3"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <input
            placeholder="Sport"
            className="p-2 border-2 border-white w-full mb-3"
            type="text"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          />

          <input
            placeholder="Description (optional)"
            className="p-2 border-2 border-white w-full mb-3"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <hr className="my-3" />

          <p>
            <b>Members (0)</b>
          </p>
          <p className="text-sm text-gray-500 mb-3">No members added yet</p>

          <button
            className="border-2 border-green-400 p-2 rounded w-full mb-3"
            disabled
          >
            + Add Members
          </button>
          <p className="text-gray-400">after team creation</p>

          <button
            className="p-2 bg-green-500 text-white rounded w-full"
            onClick={handleCreateTeam}
          >
            Create Team
          </button>
        </div>
      </div>
      <MobileSideBar/>
    </div>
  );
};

export default Team;
