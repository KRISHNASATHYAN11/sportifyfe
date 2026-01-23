import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleTurf, MakeBooking } from "../services/AllApi";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BaseUrl } from "../services/BaseURL";
import { loadStripe } from "@stripe/stripe-js";



const ViewSingle = () => {
  const [TurfDetail, setTurfDetail] = useState({});
  const [imageArray,setImageArray] = useState([])

  useEffect(() => {
    getTurfDetails();
  }, []);

  // useParams return an  object of key-value pairs of the dynamic params from the current URL that were matched by the routes.

  let { id } = useParams();
  console.log(id);

  const getTurfDetails = async () => {
    try {
      let token = localStorage.getItem("token");

      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apiResponse = await getSingleTurf(id, header);
      if (apiResponse.status == 200) {
        setTurfDetail(apiResponse.data);
        setImageArray(apiResponse.data.uploadedImages)
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred while getting Turf Details");
    }
  };


  const onBookClick = async()=>{
    // load strip return promise handle async await 
    const stripe = await loadStripe('pk_test_51Sl1cgBorw3jwEWgfacnmH8TnAZZX8oRKwFJwsE9r5sfjarVcIzudD4TM6H6YfWsLlHjqTf4ErsqyEfpR3RPCsrE00ef1FdgCQ')

    let token = localStorage.getItem('token')
    let header = {
      Authoriazation :`Bearer ${token}`
    }

    let reqBody = {turfId:TurfDetail._id,
      turfName:TurfDetail.turfName,
      description:TurfDetail.description,
      timeSlot :TurfDetail.openingTime-TurfDetail.closingTime,
      sellerMail :TurfDetail.userEmail,
      turfImage:TurfDetail.imageURL,
      turfPrice :TurfDetail.pricePerHour,
      numberOfPlayers:TurfDetail.maxPlayers
    }

    let apiResponse = await MakeBooking(reqBody,header)
    if(apiResponse.status == 201){

    }else{
      toast.error(apiResponse.response.data.message)
    }
  }

  return (
    <>
      <div>
        <Header />
        <h1 className=" text-start mt-3 mx-4 p-2">{TurfDetail?.turfName}</h1>
        <div className="mx-5">
          <h3 className="text-lg font-semibold mb-2 mt-3">
            {TurfDetail?.location}
          </h3>
        </div>

        <div className="m-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-3">
          <div>
            <img
              className=" bg-[#3b5d50] rounded-2xl  shadow-lg p-3 text-center text-white hover:shadow-2xl"
              src={TurfDetail?.imageURL}
              alt=""
            />
          </div>

          <div>
            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 ">
              <h5>Timing</h5>
              <h6>
                {TurfDetail?.openingTime}-{TurfDetail?.closingTime}
              </h6>
            </div>

            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 mt-5 ">
              <h5>Location</h5>
              <h6>{TurfDetail?.location}</h6>
            </div>
            <div className="border rounded-2xl border-transparent shadow-2xl text-center w-full p-5 mt-5 ">
              <h5>pricePerHour</h5>
              <h6>₹{TurfDetail?.pricePerHour}</h6>
            </div>

            <div className="mt-5 text-center flex justify-center ">
              <button onClick={onBookClick} className="bg-linear-to-r from-green-500 via-green-900 to-green-900 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base  px-10 py-3 text-center leading-5 text-decoration-none text-white mx-2 ">
                Book Now
              </button>
              <Link to={'/turf'} className="bg-linear-to-r from-green-500 via-green-400 to-green-300 rounded-pill hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-200 font-medium rounded-base  px-10 py-3 text-center leading-5 text-decoration-none text-white mx-2">
                Back
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="border rounded-2xl border-transparent shadow-2xl text-center w-1/2 p-5 mt-5 ">
            <h5>Sports Availability</h5>
            <h6>{TurfDetail?.sportsAvailability}</h6>
          </div>

         
        </div>
        
           
        <div className="grid sm:grid-cols-1 lg:grid-col-3 md:grid-cols-3 p-3 gap-4 container">
           {
            imageArray.map((eachImage)=>(
              <img className="rounded-2xl" style={{width:"400px",height:"300px"}} src={`${BaseUrl}/uploads/${eachImage}`} alt=""/>
            ))
           }
        </div>

         <div className="border rounded-2xl border-transparent shadow-2xl text-center  p-5 mt-5 mb-5 container ">
            <p>{TurfDetail?.description}</p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewSingle;
