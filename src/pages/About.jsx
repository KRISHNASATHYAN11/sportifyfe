import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aos from "aos";



const About = () => {
  return (
    <>
    <Header/>
      <div className="container-fluid bg-black overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div data-aos="fade-up"  data-aos-delay="450"
          data-aos-duration="700" className=" p-2 text-white">
            <p className="fntstyle  text-8xl "> Bringing All Your Sports Activities Into One Place</p>
          </div>
          <div  data-aos="fade-up"
  data-aos-duration="450"
  data-aos-offset="0"
  data-aos-easing="ease-out" className=" p-4 text-white flex justify-end ">
            <img className="border-gray-900 border-3 rounded-2xl" src="https://media.istockphoto.com/id/168621331/photo/streetball-players-portrait-_-vertical.jpg?s=612x612&w=0&k=20&c=dW54AbrNFERF4ufXAK4cmmPdC4pxQuftwShrn5l0jdI=" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
         
          <div data-aos="zoom-in" className=" p-4 text-white flex ">
            <img className="border-gray-900 border-3 rounded-2xl" src="https://revolutionbasketballtraining.com/wp-content/uploads/2023/09/side-view-women-playing-basketball-1024x683.jpg" alt="" />
          </div>
           <div data-aos="slide-up" className=" p-2 text-white">
            <p className="  text-6xl"> Whether you’re a casual player or a passionate athlete, <span className="fntstyle bg-linear-to-r from-white to-green-500 bg-clip-text text-transparent">Sportify </span> 
              helps you stay connected to the game you <span className=" fntstyle bg-linear-to-r from-pink-200 to-pink-500 bg-clip-text text-transparent">love.</span> </p>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div >
            
          </div>
          <div data-aos="fade-left"
      className=" p-4 text-white flex justify-end">
            <img className="border-gray-900 border-3 rounded-2xl" src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/200664/200664_00_2x.jpg?20200209080556" alt="" />
          </div>
        </div>
           <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
             <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className=" p-4 text-white flex justify-end">
            <img className="border-gray-900 border-3 rounded-2xl" src="https://media.istockphoto.com/id/1062855462/photo/group-of-multiracial-young-people-playing-basketball-outdoors.jpg?s=612x612&w=0&k=20&c=hnb0YRdHuY2m3iflwrV1kq1d4h5ckMSaRVPt0Gv3Qc8=" alt="" />
          </div>
          <div >
            
          </div>
         
        </div>

        <div className="container-fluid">
          <div id="bg1">
            <div  className="row">
              <div data-aos="fade-up" className="col-12 flex text-center justify-center">
                <p className="p-20 font-bold text-7xl text-orange-100">We’re commited to fostering a safe and supportive community for <span className="text-green-300">Sports lovers.</span></p>
              </div>

            </div>
          </div>
        </div>





      </div>
      <Footer/>
    </>
  );
};

export default About;
