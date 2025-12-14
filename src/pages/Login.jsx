import React from "react";
import { Link } from "react-router-dom";
import blob from "../assets/blob.png";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className="text-center ">
            <p className="text-white text-3xl fntstyle">
              <span className="text-green-200 fntstyle">Welcome Back ! </span>{" "}
              <br /> Login to continue your sports journey
            </p>
            <div className="flex justify-center items-center">
              <img className="h-[50%] w-[50%] " src={blob} alt="" />
            </div>
          </div>
        </div>

        <div className="login-right">
          <h2 className="text-green-200">SPORTIFY </h2>
          <p>Welcome to SPORTIFY</p>

          <form className="login-form">
            <input type="text" placeholder="User name or Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot">
              Forgot password?
            </a>

            <button className="p-2 border-2 border-transparent w-100 bg-black text-white ">
              LOGIN
            </button>

            <div className="or-separator">
              <span>or</span>
            </div>

            <button className="p-2 border-2 border-transparent w-100 bg-black text-white">
              Sign in with Google
            </button>
          </form>

          <p className="create ">
            New User ? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
