import React from "react";
import { Link } from "react-router-dom";
Link
const BookingSuccess = () => {
  return (
    <>
      <h2 style={{ color: "green" }} className="font-bold text-center mt-3">
        Payment Success
      </h2>
      <div className="flex text-center justify-center">
        <img
          className="text-center"
          src="https://miro.medium.com/1*Tt1d7z553M0-vKfo0N9Krw.gif"
          alt=""
        />
        <Link to={'/profile'} >Go to Profile</Link>
      </div>
    </>
  );
};

export default BookingSuccess;
