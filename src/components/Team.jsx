import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createTeam, getAllUsers } from "../services/AllApi";
import Sidebar from "./Sidebar";
import MobileSideBar from "./MobileSideBar";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { BaseUrl } from "../services/BaseURL";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [sport, setSport] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [teamImage, setTeamImage] = useState("");

  const [preview, setPreview] = useState(
    "https://images.icon-icons.com/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  );

  useEffect(() => {
    if (openModal) {
      fetchUsers();
    }
  }, [openModal]);

  const handleCreateTeam = async () => {
    try {
      if (teamName === "" || sport === "") {
        toast.error("Team name and sport are required");
        return;
      }

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
        // ❌ DO NOT set Content-Type manually
      };

      // ✅ Use FormData
      const formData = new FormData();
      formData.append("teamName", teamName);
      formData.append("sport", sport);
      formData.append("description", description);

      // Convert members array to JSON string
      formData.append(
        "members",
        JSON.stringify(selectedMembers.map((member) => member._id)),
      );

      // Append image if selected
      if (teamImage) {
        formData.append("teamImage", teamImage);
      }

      const apiResponse = await createTeam(formData, headers);

      if (apiResponse.status === 201) {
        toast.success("Team created successfully");

        // clear form
        setTeamName("");
        setSport("");
        setDescription("");
        setSelectedMembers([]);
        setTeamImage("");
        setPreview(
          "https://png.pngtree.com/png-clipart/20230804/original/pngtree-team-icon-green-persons-design-vector-picture-image_9584632.png",
        );
      } else {
        toast.error("Failed to create team");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating team");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file); // should log File object
    setTeamImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await getAllUsers(headers);

      if (response.status === 200) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = allUsers.filter((user) =>
    user.userName.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddMember = (user) => {
    const alreadyAdded = selectedMembers.find(
      (member) => member._id === user._id,
    );

    if (alreadyAdded) {
      toast.error("User already added");
      return;
    }

    setSelectedMembers([...selectedMembers, user]);
    toast.success("Member added");
  };

  return (
    <div className="bg-black min-h-screen">
      <Sidebar />
      <div className="flex justify-center items-center text-white">
        <div className="w-96 mt-5 border p-4 rounded ">
          <p className="text-center mb-4">Build Your Dream Team</p>

          <div className="text-center mb-4">
            <label htmlFor="imgg">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={preview}
                alt="team"
              />
              <input
                hidden
                id="imgg"
                type="file"
                onChange={handleImageUpload}
              />
            </label>
          </div>

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
            <b>Members ({selectedMembers.length})</b>
          </p>

          <div>
            {selectedMembers.length > 0 ? (
              selectedMembers.map((member) => (
                <div
                  key={member._id}
                  className="flex justify-between items-center text-sm mt-1"
                >
                  <span>{member.userName}</span>

                  <button
                    onClick={() =>
                      setSelectedMembers(
                        selectedMembers.filter((m) => m._id !== member._id),
                      )
                    }
                    className="text-green-500"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 mb-3">No members added yet</p>
            )}
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="border-2 border-green-400 p-2 rounded w-full mb-3"
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

      {/* modal */}

      <Modal
        className="mx-60"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader className="bg-stone-800">Add Members</ModalHeader>
        <ModalBody className="bg-stone-800">
          <div className="space-y-3">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 w-full rounded text-white"
            />

            {/* Users List */}
            <div className="max-h-60 overflow-y-auto space-y-2">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    key={user._id}
                    className="flex justify-between items-center border p-2 rounded"
                  >
                    <div>
                      <img
                        className="w-15 h-15 rounded-full object-cover"
                        src={
                          user.profilePic
                            ? `${BaseUrl}/uploads/${user.profilePic}`
                            : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                        }
                        alt=""
                      />
                      <p className="font-semibold text-white">
                        {user.userName}
                      </p>
                      <p className="text-sm text-gray-200">{user.location}</p>
                      <p className="text-sm text-gray-200">{user.sport}</p>
                    </div>

                    <button
                      onClick={() => handleAddMember(user)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-white text-sm">No users found</p>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="bg-stone-900">
          <Button onClick={() => setOpenModal(false)}></Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <MobileSideBar />
    </div>
  );
};

export default Team;
