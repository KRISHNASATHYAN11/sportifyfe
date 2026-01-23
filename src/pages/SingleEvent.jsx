import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { getSingleEvent } from "../services/AllApi";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BaseUrl } from "../services/BaseURL";


const SingleEvent = () => {
  const [EventDetail, setEventDetail] = useState({});

  useEffect(() => {
    getEventDetails();
  }, []);

  // useParams return an  object of key-value pairs of the dynamic params from the current URL that were matched by the routes.

  let { id } = useParams();
  console.log(id);

  const getEventDetails = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apiResponse = await getSingleEvent(id, header);
      if (apiResponse.status == 200) {
        setEventDetail(apiResponse.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred while getting Turf Details");
    }
  };

  return (
    <>
      <div>
        <Header />
        <h1 className=" text-start mt-3 mx-4 p-2">{EventDetail?.eventName}</h1>
        <div className="mx-5">
          <h3 className="text-lg font-semibold mb-2 mt-3">
            {EventDetail?.location}
          </h3>
        </div>

        <div className="m-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-3">
          <div>
            <img
              className=" bg-[#3b5d50] rounded-2xl  shadow-lg p-3 text-center text-white hover:shadow-2xl"
              src={`${BaseUrl}/uploads/${EventDetail?.eventImage}`}
              alt=""
            />
          </div>

          <div>
            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 ">
              <h5>Timing</h5>
              <h6>
                {EventDetail?.startTime}-{EventDetail?.endTime}
                <br />
                {EventDetail?.eventDate}
              </h6>
            </div>

            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 mt-5 ">
              <h5>Location</h5>
              <h6>{EventDetail?.location}</h6>
            </div>
            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 mt-5 ">
              <h5>pricePerPerson</h5>
              <h6>₹{EventDetail?.pricePerPerson}</h6>
            </div>

            <div className="mt-5 text-center flex justify-center ">
              <Link to={""} className="bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base  px-10 py-3 text-center leading-5 text-decoration-none text-white mx-2 ">
                Book Now
              </Link>
              <Link to={""} className="bg-linear-to-r from-green-500 via-green-400 to-green-300 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-200 font-medium rounded-base  px-10 py-3 text-center leading-5 text-decoration-none text-white mx-2">
                Back
              </Link>
            </div>
          </div>
        </div>

       

        <div className="border rounded-2xl border-transparent shadow-2xl text-center  p-5 mt-5 mb-5 container ">
          <p>{EventDetail?.eventDesc}</p>
          <p className="font-bold">Event Coordinator: {EventDetail?.createdBy}  Mail us for Enquiry</p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default SingleEvent;
