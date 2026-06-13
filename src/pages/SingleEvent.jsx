import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { getSingleEvent, MakeEventBooking } from "../services/AllApi";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BaseUrl } from "../services/BaseURL";
import { loadStripe } from "@stripe/stripe-js";

const SingleEvent = () => {
  const [EventDetail, setEventDetail] = useState({});

  useEffect(() => {
    getEventDetails();
  }, []);

  let { id } = useParams();
  console.log(id);

  const getEventDetails = async () => {
    try {
      let token = localStorage.getItem("token");
      let header = { Authorization: `Bearer ${token}` };
      let apiResponse = await getSingleEvent(id, header);
      if (apiResponse.status == 200) {
        setEventDetail(apiResponse.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred while getting Turf Details");
    }
  };

   const onEventBookClick = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51Sl1cgBorw3jwEWgfacnmH8TnAZZX8oRKwFJwsE9r5sfjarVcIzudD4TM6H6YfWsLlHjqTf4ErsqyEfpR3RPCsrE00ef1FdgCQ"
      );
      let token = localStorage.getItem("token");
      let header = { Authorization: `Bearer ${token}` };
      let reqBody = {
        eventId: EventDetail._id,
        eventName: EventDetail.eventName,
        eventDate: EventDetail.eventDate,
        eventTime: `${EventDetail.startTime} - ${EventDetail.endTime}`,
        pricePerPerson: EventDetail.pricePerPerson,
        numberOfPlayers: 1,
        ownerEmail: EventDetail.createdBy,
        eventImage: EventDetail.eventImage,
      };
      let apiResponse = await MakeEventBooking(reqBody, header);
      if (apiResponse.status === 200) {
        let session = apiResponse.data.session;
        window.location.href = session.url;
      } else {
        toast.error("Event booking failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while booking");
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(74, 222, 128, 0.2); }
            50% { box-shadow: 0 0 30px rgba(74, 222, 128, 0.6); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 3s infinite; }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .delay-100 { animation-delay: 100ms; opacity: 0; }
          .delay-200 { animation-delay: 200ms; opacity: 0; }
          .delay-300 { animation-delay: 300ms; opacity: 0; }
        `}
      </style>

      <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#4ade80] selection:text-black overflow-hidden">
        
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <Header className="relative z-50" />

        <div className="relative z-10 container mx-auto px-6 py-10">
          
          {/* Hero Title */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
              Featured Event
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                {EventDetail?.eventName}
              </span>
            </h1>
            <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
              <i className="fa-solid fa-location-dot text-green-400"></i>
              {EventDetail?.location}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left: Floating Image Card */}
            <div className="relative animate-slide-up delay-100 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-700 animate-float"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                  src={`${BaseUrl}/uploads/${EventDetail?.eventImage}`}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>

            {/* Right: Interactive Details */}
            <div className="space-y-6 animate-slide-up delay-200">
              
              {/* Detail Bars (Data Pills) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2">
                {/* Timing Bar */}
                <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <i className="fa-regular fa-clock text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Time</p>
                      <p className="text-gray-400">{EventDetail?.eventDate}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{EventDetail?.startTime} - {EventDetail?.endTime}</h3>
                </div>
                
                <div className="h-px bg-white/10 mx-4"></div>

                {/* Location Bar */}
                <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-map-pin text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Venue</p>
                      <p className="text-gray-400">Turf Arena</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white truncate max-w-[150px]">{EventDetail?.location}</h3>
                </div>

                <div className="h-px bg-white/10 mx-4"></div>

                {/* Price Bar */}
                <div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:translate-x-2 cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-[#4ade80] group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-tag text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Entry Fee</p>
                      <p className="text-gray-400">Per Person</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#4ade80] drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">₹{EventDetail?.pricePerPerson}</h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4 animate-slide-up delay-300">
                 <Link 
                    onClick={onEventBookClick} 
                    to="#" 
                    className="relative overflow-hidden group bg-[#4ade80] text-black font-extrabold py-5 px-8 rounded-2xl shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-xl"
                  >
                    <span className="relative z-10">Confirm Booking</span>
                    <i className="fa-solid fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/30 transition-transform duration-700 ease-in-out z-0 skew-x-12"></div>
                  </Link>

                 <Link to="#" className="text-center text-gray-400 hover:text-white transition-colors py-2 flex items-center justify-center gap-2 group">
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                    Go Back
                 </Link>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="mt-20 animate-slide-up delay-300">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                {/* Decorative Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                   <div className="md:w-1/4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white text-2xl shadow-lg mb-4">
                         <i className="fa-solid fa-quote-left"></i>
                      </div>
                      <h4 className="text-2xl font-bold text-white">Event Info</h4>
                   </div>
                   <div className="md:w-3/4">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                         {EventDetail?.eventDesc}
                      </p>
                      <div className="p-4 bg-black/30 rounded-xl border border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <i className="fa-regular fa-user text-green-400"></i>
                            <span className="text-white font-medium">Coordinator: {EventDetail?.createdBy}</span>
                         </div>
                         <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors">Mail for Enquiry &rarr;</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleEvent;