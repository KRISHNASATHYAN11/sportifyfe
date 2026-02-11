import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aos from "aos";
import Masonry from "../components/Masonry";
import aboutimg from "../assets/about_img.png";
import { Link } from "react-router-dom";
const About = () => {
  const items = [
    {
      id: "1",
      img: "https://photos.peopleimages.com/picture/202302/2615742-tennis-sport-and-women-with-athlete-and-coach-on-outdoor-turf-training-instructor-with-fitness-motivation-and-help.-exercise-sports-lesson-and-workout-together-teaching-and-learn-skill-on-court-fit_400_400.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoi0Jx2erujGg14Vqb8M_gif1xOW5TZcS6Q&s",
      height: 250,
    },
    {
      id: "3",
      img: "https://static.vecteezy.com/system/resources/thumbnails/065/302/798/small/group-of-smiling-friends-taking-selfie-after-playing-pickleball-outdoors-photo.jpg",
      height: 600,
    },

    {
      id: "4",
      img: "https://media.istockphoto.com/id/965241120/photo/young-couple-fan-in-blue-uniform-celebrating.jpg?s=612x612&w=0&k=20&c=98dFQlDhagdecgUGCmnut-0VKExmp7EzTNDvMZHiR34=",
      height: 600,
    },
    {
      id: "5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcADW42XorRIXbvmZS1M7LKab2XflfDfGag&s",
      height: 600,
    },
    {
      id: "6",
      img: "https://media.istockphoto.com/id/1347044133/photo/confident-female-soccer-player-practicing-skills-at-court.jpg?s=612x612&w=0&k=20&c=SyLHZjbYG-53VzJqwCvR6PxTEAv5oDiLQhXIVQmv6t4=",
      height: 600,
    },
    {
      id: "7",
      img: "https://media.istockphoto.com/id/1347044133/photo/confident-female-soccer-player-practicing-skills-at-court.jpg?s=612x612&w=0&k=20&c=SyLHZjbYG-53VzJqwCvR6PxTEAv5oDiLQhXIVQmv6t4=",
      height: 600,
    },
    {
      id: "8",
      img: "https://thumbs.dreamstime.com/b/happy-men-taking-selfie-basketball-playground-sport-leisure-games-male-friendship-concept-group-friends-outdoor-158850420.jpg",
      height: 600,
    },
    {
      id: "9",
      img: "https://media.istockphoto.com/id/1372175564/photo/female-soccer-players-filming-or-taking-selfies-camera-point-of-view.jpg?s=612x612&w=0&k=20&c=wuMN5XYZtE4tYeb5jGhQldaAMR08qhvRZWqzlVdnHm8=",
      height: 600,
    },
    {
      id: "10",
      img: "https://media.istockphoto.com/id/901571934/photo/smiling-players-taking-selfie-through-mobile-phone.jpg?s=612x612&w=0&k=20&c=nIEl5E4ErGzNTzqgp3gOlOSI_q0Zl397g9cLYpMjDkg=",
      height: 600,
    },
    // ... more items
  ];

  return (
    <>
      <Header />
      <div className="container-fluid bg-black overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="700"
            className=" p-2 text-white"
          >
            <p className="fntstyle  text-8xl ">
              {" "}
              Bringing All Your Sports Activities Into One Place
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-offset="0"
            data-aos-easing="ease-out"
            className=" p-4 text-white flex justify-end "
          >
            <img
              className="border-gray-900 border-3 rounded-2xl"
              src="https://media.istockphoto.com/id/168621331/photo/streetball-players-portrait-_-vertical.jpg?s=612x612&w=0&k=20&c=dW54AbrNFERF4ufXAK4cmmPdC4pxQuftwShrn5l0jdI="
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div data-aos="zoom-in" className=" p-4 text-white flex ">
            <img
              className="border-gray-900 border-3 rounded-2xl"
              src="https://revolutionbasketballtraining.com/wp-content/uploads/2023/09/side-view-women-playing-basketball-1024x683.jpg"
              alt=""
            />
          </div>
          <div data-aos="slide-up" className=" p-2 text-white">
            <p className="  text-6xl">
              {" "}
              Whether you’re a casual player or a passionate athlete,{" "}
              <span className="fntstyle bg-linear-to-r from-white to-green-500 bg-clip-text text-transparent">
                Sportify{" "}
              </span>
              helps you stay connected to the game you{" "}
              <span className=" fntstyle bg-linear-to-r from-pink-200 to-pink-500 bg-clip-text text-transparent">
                love.
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div></div>
          <div
            data-aos="fade-left"
            className=" p-4 text-white flex justify-end"
          >
            <img
              className="border-gray-900 border-3 rounded-2xl"
              src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/200664/200664_00_2x.jpg?20200209080556"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className=" p-4 text-white flex justify-end"
          >
            <img
              className="border-gray-900 border-3 rounded-2xl"
              src="https://media.istockphoto.com/id/1062855462/photo/group-of-multiracial-young-people-playing-basketball-outdoors.jpg?s=612x612&w=0&k=20&c=hnb0YRdHuY2m3iflwrV1kq1d4h5ckMSaRVPt0Gv3Qc8="
              alt=""
            />
          </div>
          <div></div>
        </div>

        <div className="container  relative sm:mb-260 ">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

        <div className="container-fluid">
          <div id="bg1">
            <div className="row">
              <div
                data-aos="fade-up"
                className="col-12 flex text-center justify-center"
              >
                <p className="p-20 font-bold lg:text-6xl sm:text-4xl md:text-5xl text-orange-100">
                  We’re commited to fostering a safe and supportive community
                  for <span className="text-green-300">Sports lovers.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-2 mx-3 mt-10">
          <div>
            <img className="mx-5" src="https://png.pngtree.com/background/20250105/original/pngtree-image-of-soccer-player-in-green-field-full-screen-wallpaper-the-picture-image_15571310.jpg" alt="" />
          </div>
          <div className=" mt-5 p-3 mx-5 text-center">
            <p className="text-7xl  fntstyle text-transparent bg-clip-text bg-linear-to-r from-white via-green-500 to-green-200">
              Find something new{" "}
            </p>
            <p className="text-3xl text-white">
              Discover content and creators based on your interests.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2fr_1fr">
          <div></div>
          <div className="mt-25 p-5">
            <p className="text-white text-center font-bold text-5xl">
              Download for iOS/Android.
            </p>
            <div
              className=" container my-5 my-md-4 mt-lg-5 row justify-content-center align-items-center gap-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div class="col-auto mx-2 px-0">
                <Link
                  href="https://apps.apple.com/app/apple-store/id1594935699?pt=118739950&amp;ct=ios_home&amp;mt=8"
                  className="btn btn-download p-0"
                  target="_blank"
                >
                  <img
                    src="https://www.loveandlustgame.com/static/images/apple-store-badge-en.svg"
                    alt="Download  Sportify on the App Store"
                    className="img-fluid h-100"
                  />
                </Link>
              </div>
              <div class="col-auto mx-2 px-0">
                <Link to={""} className="btn btn-download p-0" target="_blank">
                  <img
                    src="https://www.loveandlustgame.com/static/images/web-app-beta-en.svg"
                    alt=""
                    className="img-fluid h-100"
                  />  
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
