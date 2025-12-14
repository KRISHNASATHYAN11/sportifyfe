import React from "react";
import Header from "../components/Header";
import LiquidEther from "../components/LiquidEther";
import { Link } from "react-router-dom";
import CardSwap, { Card } from "../components/CardSwap";
import neonball from "../assets/neonball.png";
import highlighticon from "../assets/highlighticon.png";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import targeticon from "../assets/targeticon.png";
import msgicon from "../assets/msgicon.png";
import lockicon from "../assets/lockicon.png";

import { FaAngleDoubleDown } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import mobile from "../assets/mobile.png";
import Footer from "../components/Footer";
import Slider from "../components/Slider";




const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-black">
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          <LiquidEther
            colors={["#39FF14", "#2CFF05", "#08CB00"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />

          <div
            className="
        absolute inset-0 flex items-center justify-center
        px-4 md:px-10 lg:px-20 
        pointer-events-none
      "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
              <div className="text-center md:text-left">
                <div className="flex justify-end">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
                <h1 className="fntstyle text-white text-5xl md:text-7xl font-extrabold leading-tight p-4 mt-5">
                  SPORTIFY
                  <br />
                  <span className="text-2xl md:text-4xl font-bold fntstyle">
                    YOUR SPORTS COMPANION
                  </span>
                </h1>
                <p className="text-white "> Play.Connect.Compete.</p>
                <p className="text-white">
                  {" "}
                  Join matches , build teams , and grow your sports circle.Every
                  game brings you one step closer to your best.
                </p>
                <div className=" flex text-center justify-center items-center">
                  <button
                    className="text-white bg-linear-to-r from-lime-200 via-lime-400 to-lime-500  border-transparent px-4 py-2 rounded-pill  d-lg-flex mx-3
       
      "
                  >
                    <Link
                      className="text-white text-decoration-none"
                      to={"/login"}
                    >
                      EXPLORE MORE
                    </Link>
                  </button>
                  <button
                    className="text-white  border-2 border-green-500  px-4 py-2 rounded-pill  d-lg-flex mx-3
       
      "
                  >
                    <Link
                      className="text-white text-decoration-none"
                      to={"/login"}
                    >
                      BOOK TURF
                    </Link>
                  </button>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="h-[350px] md:h-[500px] w-[260px] md:w-[350px] relative">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                  >
                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://png.pngtree.com/thumb_back/fw800/background/20240131/pngtree-football-soccer-player-kicking-neon-light-style-art-pic-image_15621380.jpg"
                        alt=""
                      />
                    </Card>

                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://www.shutterstock.com/image-vector/cricket-player-neon-vector-art-600nw-2022892385.jpg"
                        alt=""
                      />
                    </Card>

                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://st2.depositphotos.com/2140915/9487/v/450/depositphotos_94878998-stock-illustration-basketball-the-player-jumping-with.jpg"
                        alt=""
                      />
                    </Card>
                    <Card>
                      <img
                        className="w-full h-100 object-cover rounded-lg"
                        src="https://thumbs.dreamstime.com/b/professional-woman-tennis-player-illustration-green-linear-neon-tennis-player-black-background-professional-woman-tennis-122334999.jpg"
                        alt=""
                      />
                    </Card>
                  </CardSwap>
                </div>
                <div className="flex justify-between">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" mt-10 animate-bounce"
                    src={neonball}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <div className="grid grid-cols-1">
            <div>
              <h2 className="text-center text-white">
                Rated 4.7★ on the App Store
              </h2>

              <p className="text-center text-white">
                Loved by over 265,000 players worldwide
              </p>
            </div>
          </div>
          <div className="text-sm text-white xl:text-base 2xl:text-lg text-center animate-bounce flex justify-center">
            <FaAngleDoubleDown className="text-green-300" />
            <h5 className="text-green-500">Scroll Down</h5>
          </div>
        </div>

        <div className="container mt-10">
          <div className="grid gap-5 sm:gap-6 lg:gap-x-5 lg:gap-y-7 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 mt-[34px] sm:mt-12 lg:mt-[60px]">
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
            >
              <Avatar
                style={{ width: "50px", borderRadius: "50%" }}
                img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNS0zODUucG5n.png"
                alt="avatar of Jese"
                rounded
              />{" "}
              <div className="flex justify-center items-center rounded-lg">
                <div className=" flex justify-center items-center rounded-lg">
                  <div className="flex gap-1 text-yellow-400 text-2xl ">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
              <p className="text-white">
                As a beginner, most apps confuse me. But Sportify is simple,
                easy to follow, and the progress charts make me feel proud of my
                improvements.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
            >
              <Avatar
                style={{ width: "50px", borderRadius: "50%" }}
                img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stczMxLXRlbi0xNjItam9iNy1qb2I5MDUucG5n.png"
                alt="avatar of Jese"
                rounded
              />
              <div className=" flex justify-center items-center rounded-lg">
                <div className="flex gap-1 text-yellow-400 text-2xl ">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <p className="text-white">
                I’ve tried many fitness apps, but Sportify stands out. The
                community vibe and the reminder system keep me active every day.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
            >
              <Avatar
                style={{ width: "50px", borderRadius: "50%" }}
                img="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
                alt="avatar of Jese"
                rounded
              />
              <div className="flex justify-center items-center rounded-lg"></div>
              <div className=" flex justify-center items-center rounded-lg">
                <div className="flex gap-1 text-yellow-400 text-2xl ">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
              <p className="text-white">
                I started using Sportify last month, and it genuinely helped me
                stay consistent. The challenges are fun, and I like how
                everything feels smooth and fast
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              className="bg-gray-900 p-6 rounded-2xl aos-init aos-animate"
            >
              <Avatar
                style={{ width: "50px", borderRadius: "50%" }}
                img="https://img.freepik.com/premium-photo/smiling-man-png-sticker-round-badge-transparent-background_53876-996829.jpg?semt=ais_hybrid&w=740&q=80"
                alt="avatar of Jese"
                rounded
              />
              <div className="flex justify-center items-center rounded-lg"></div>
              <div class=" flex justify-center items-center rounded-lg">
                <div className="flex gap-1 text-yellow-400 text-2xl ">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>
              <p className="text-white">
                Sportify made my daily fitness routine so simple. I love how
                clean the design is, and the tracking features keep me
                motivated. Easily one of the best apps I’ve used!
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-20 container">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 ">
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate "
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center ">
                <img style={{ width: "50px" }} src={highlighticon} alt="" />
              </div>
              <h5 className="text-white text-center">
                Turn Every Moment Into a Highlight
              </h5>
              <p className="text-white">
                Discover players, matches, and updates that keep your sports
                world exciting every day.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center">
                <img style={{ width: "50px" }} src={icon2} alt="" />
              </div>
              <h5 className="text-white text-center">Stay Ahead of the Game</h5>
              <p className="text-white">
                Get real-time scores, tips, and updates—fresh action every time
                you open the app.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center">
                <img style={{ width: "50px" }} src={targeticon} alt="" />
              </div>

              <h5 className="text-white text-center">
                Built Around Your Interests
              </h5>
              <p className="text-white">
                Your feed adjusts to your favourite sports, teams, and
                players—making Sportify feel truly yours.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center">
                <img style={{ width: "50px" }} src={msgicon} alt="" />
              </div>
              <h5 className="text-white text-center">
                Connect Without Pressure
              </h5>
              <p className="text-white">
                Follow players, share posts, and enjoy sports communities in a
                friendly, relaxed space.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center">
                <img style={{ width: "50px" }} src={lockicon} alt="" />
              </div>
              <h5 className="text-white text-center">Your Data, Your Game</h5>
              <p className="text-white">
                We protect your privacy. Your profile, chats, and preferences
                stay secure with advanced safety controls.
              </p>
            </div>
            <div
              className="flex flex-col gap-4 border-2 rounded-xl p-6 shadow-[0_0_15px_#39FF14]  drop-shadow-[0_0_25px_#2CFF05] border-green-300 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <div className=" flex justify-center items-center">
                <img style={{ width: "50px" }} src={icon1} alt="" />
              </div>
              <h5 className="text-white text-center">
                Sportify Anywhere, Anytime
              </h5>
              <p className="text-white">
                Check updates, follow players, or post your thoughts—whether
                you’re at home, on the go, or cheering from the stands.
              </p>
            </div>
          </div>
        </div>
{/* popular sports */}
        {/* <section class="mt-7 p-5">
          
          <div class=" container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
            <div
              className="aos-init aos-animate "
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
            
            </div>
            <div
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
             
            </div>

            <div
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
             
            </div>

            <div
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
             
            </div>
            <div
              className="aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              
            </div>
          </div>
        </section> */}
        <Slider/>

        <div className="container rounded-2xl bg-green-400 mt-3">
          <div className="row ">
            <div className="col-12 col-md-6">
              <div data-aos="fade-up-right" className="p-3">
                <img
                  src={mobile}
                  className="rotate-10 imageshadow"
                  alt="mobile"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 p-5 bg-green-950 ">
              <h4 className="text-center text-white">
                Your best workouts start with{" "}
                <span className="text-green-300">Sportify. </span> Train
                smarter, push harder, and make every session unforgettable!
              </h4>
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
                  <Link
                    to={""}
                    className="btn btn-download p-0"
                    target="_blank"
                  >
                    <img
                      src="https://www.loveandlustgame.com/static/images/web-app-beta-en.svg"
                      alt=""
                      className="img-fluid h-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
