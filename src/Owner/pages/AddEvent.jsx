import React, { useState } from "react";
import OwnerHeader from "../components/OwnerHeader";
import OwnerSidebar from "../components/OwnerSidebar";
import { addEvent } from "../../services/AllApi";
import toast from "react-hot-toast";

const AddEvent = () => {
  const [preview, setPreview] = useState(
    "https://thumbs.dreamstime.com/b/events-calendar-icon-green-round-button-events-calendar-icon-isolated-green-round-button-abstract-illustration-103879503.jpg"
  );

  const [eventData, setEventData] = useState({
    eventName: "",
    eventDesc: "",
    sportType: "",
    location: "",
    turfName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    maxPlayers: "",
    pricePerPerson: "",
    status: "",
    eventImage: "",
  });

  const handleUploadedImage = (e) => {
    setEventData({ ...eventData, eventImage: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const onAddEventClick = async () => {
    try {
      if (
        eventData.eventName == "" ||
        eventData.eventDesc == "" ||
        eventData.sportType == "" ||
        eventData.location == "" ||
        eventData.turfName == "" ||
        eventData.eventDate == "" ||
        eventData.startTime == "" ||
        eventData.endTime == "" ||
        eventData.maxPlayers == 0 ||
        eventData.status == "" ||
        eventData.eventImage == "" ||
        eventData.pricePerPerson == 0
      ) {
        toast("Please Fill The Form");
      } else {
        let reqBody = new FormData();
        for (let key in eventData) {
          // we need all keys except the key containing file (bcz logic is different for upload image, since it is array of files, we need to loop throught the array and get each files)
          if (key === "eventImage") {
            // add each key and value to  reqbody, bracket notation is used
            reqBody.append("eventImage", eventData.eventImage);
          } else {
            reqBody.append(key, eventData[key]);
          }
        }

        let token = localStorage.getItem("token");

        let header = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        let apiResponse = await addEvent(reqBody, header);
        console.log(apiResponse);
        if (apiResponse.status == 201) {
          toast.success("successfully Added the Event");
        } else {
          toast.error(apiResponse.response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred While Adding Turf");
    }
  };

  return (
    <>
      <div className="grid grid-cols-[1fr_5fr]">
        <div>
          <OwnerSidebar />
        </div>
        <div>
          <OwnerHeader />

          <div className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-3xl bg-emerald-50 rounded-2xl shadow-xl p-8">
              <p className="  mb-8 text-justify text-green-500">
                Create sports events to invite players and organize matches at
                your turf.Provide event details such as sport type , date, time
                ,entry fee , and players limit. well-described events attract
                more participants and help manage games smoothly.
              </p>
              <div className="space-y-5">
                <input
                  onChange={(e) =>
                    setEventData({ ...eventData, eventName: e.target.value })
                  }
                  type="text"
                  placeholder="Event Name"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none placeholder:text-gray-400"
                />
                <input
                  onChange={(e) =>
                    setEventData({ ...eventData, turfName: e.target.value })
                  }
                  type="text"
                  placeholder="Event Name"
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none placeholder:text-gray-400 mt-3"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div className="w-full border border-gray-600  rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-400 outline-none">
                    <input
                      onChange={(e) =>
                        setEventData({
                          ...eventData,
                          sportType: e.target.value,
                        })
                      }
                      className="placeholder:text-gray-400"
                      placeholder="Sports Type"
                      type="text"
                    />
                  </div>

                  <div className="w-full  border border-gray-600 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-400 outline-none ">
                    <input
                      onChange={(e) =>
                        setEventData({ ...eventData, location: e.target.value })
                      }
                      className="placeholder:text-gray-400"
                      placeholder="Location"
                      type="text"
                    />
                  </div>
                </div>

                <textarea
                  onChange={(e) =>
                    setEventData({ ...eventData, eventDesc: e.target.value })
                  }
                  rows="4"
                  placeholder="Event Description"
                  className="w-full bg-transparent border border-gray-600  rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none placeholder:text-gray-400"
                ></textarea>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <input
                    onChange={(e) =>
                      setEventData({ ...eventData, startTime: e.target.value })
                    }
                    placeholder="Start Time"
                    type="type"
                    className="w-full  border border-gray-600 placeholder:text-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <input
                    onChange={(e) =>
                      setEventData({ ...eventData, endTime: e.target.value })
                    }
                    type="text"
                    placeholder="End Time"
                    className="w-full placeholder:text-gray-400  border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <input
                    onChange={(e) =>
                      setEventData({
                        ...eventData,
                        pricePerPerson: e.target.value,
                      })
                    }
                    placeholder="Price Per Person"
                    type="type"
                    className="w-full  border border-gray-600 placeholder:text-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                  />

                  <input
                    onChange={(e) =>
                      setEventData({ ...eventData, maxPlayers: e.target.value })
                    }
                    type="text"
                    placeholder="Max Player"
                    className="w-full placeholder:text-gray-400  border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    onChange={(e) =>
                      setEventData({ ...eventData, eventDate: e.target.value })
                    }
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none placeholder:text-gray-400"
                  />

                  <input
                    onChange={(e) =>
                      setEventData({ ...eventData, status: e.target.value })
                    }
                    type="text"
                    placeholder="Status (eg: Full, Almost Full , Open, Close ,Full"
                    className="w-full bg-transparent border border-gray-600  rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="imgup">
                    <input
                      onChange={(e) => handleUploadedImage(e)}
                      hidden
                      type="file"
                      name=""
                      id="imgup"
                    />
                    <img className="rounded-full w-20" src={preview} alt="" />
                  </label>
                  <span className="text-green-500">Add Event Image Here</span>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={onAddEventClick}
                    type="submit"
                    className="flex-1 bg-linear-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-pill hover:opacity-90 transition"
                  >
                    Create Event
                  </button>

                  <button
                    type="button"
                    className="flex-1 border border-gray-500 text-green-500 py-3 rounded-pill hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
