import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Header/>
      <div className="bg-black w-full">
        <h1 className="text-center text-4xl font-bold ">
          <span className="bg-linear-to-r from-green-100 to-green-600 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className=" text-center text-white ">
          Sportify is here to help you stay connected with your favorite sports{" "}
          <br />
          and teams. If you have any questions, suggestions, or need support,
          <br />
          feel free to reach out to us. We’re always happy to assist you! <br />
        </p>
        <div className=" flex items-center justify-center p-4">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md "
          >
            <input
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus-ring-2 "
              type="text"
            />
            <input
              placeholder="Email ID"
              className="w-full p-3 rounded-lg border border-gray-300 focus-ring-2 mt-3"
              type="email"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus-ring-2 mt-3"
              rows={5}
              name=""
              id=""
            ></textarea>

            <div className="flex justify-center items-center">
              <button className="w-full  px-5 py-2 rounded-lg bg-green-400 text-white mt-3">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
