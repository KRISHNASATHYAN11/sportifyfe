import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sportsimg from "../assets/sportsimg.png";
import { googleAuth, loginUser, registerUser } from "../services/AllApi";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = ({ insideRegister }) => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onRegisterClick = async () => {
    try {
      let apiResponse = await registerUser(registerData);
      console.log(apiResponse);
      if (apiResponse.status == 201) {
        toast.success("Successfully Registered");
        navigate("/login");
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      toast.error("error occurred");
      console.log(error);
    }
  };

  const onLoginClick = async () => {
    try {
      let reqBody = registerData;
      delete reqBody.userName;
      // only need email and password here so removed username from the reqbody
      let apiResponse = await loginUser(reqBody);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        localStorage.setItem("token", apiResponse.data.token);
        localStorage.setItem("user", JSON.stringify(apiResponse.data.user));
        toast.success("Login Success");
        navigate("/");
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      toast.error("Error Occurred");
      console.log(error);
    }
  };
  // to decode the encoded data
  const googleDecode = async (credId) => {
    const decoded = jwtDecode(credId);
    console.log(decoded);

    let reqBody = {
      userName: decoded.name,
      email: decoded.email,
      profilePic: decoded.picture,
    };
    let apiResponse = await googleAuth(reqBody);
    console.log(apiResponse);

    if (apiResponse.status == 200 || apiResponse.status == 201) {
      localStorage.setItem("token", apiResponse.data.token);
      localStorage.setItem("user", JSON.stringify(apiResponse.data.user));
      toast.success("Login Success");
      navigate("/");
    }else{
      toast.error("Error Occurred in Google Authentication")
    }
  };

  return (
    <>
      <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-black lg:min-h-screen md:min-h-screen rounded-r-4xl">
          <div className="text-center ">
            <p className="text-white text-3xl fntstyle mt-5">
              <span className="text-green-200 fntstyle ">Welcome Back ! </span>{" "}
              <br /> Login to continue your sports journey
            </p>
            <div className="flex justify-center items-center">
              <img className="w-75" src={sportsimg} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10 text-center">
            <h2 className="text-green-200 font-bold text-2xl fntstyle ">
              SPORTIFY{" "}
            </h2>
            <p className="text-xl mb-10 text-green-800">Welcome to SPORTIFY</p>
            <p>{insideRegister ? "REGISTER" : "LOGIN"}</p>
          </div>

          <div className="w-full p-5 mb-12 ">
            {insideRegister ? (
              <input
                onChange={(e) =>
                  setRegisterData({ ...registerData, userName: e.target.value })
                }
                placeholder="UserName"
                className="w-full border-gray-300 border-2 rounded-pill p-2 mt-3 "
                type="text"
                name="userName"
                id="uName"
              />
            ) : (
              ""
            )}
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              className="w-full border-gray-300 border-2 rounded-pill p-2 mt-3 "
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              className="w-full border-gray-300 border-2 rounded-pill p-2 mt-3  "
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="mt-3 ">
              <Link className="text-decoration-none" to={""}>
                Forgot password?
              </Link>
            </div>
            <div className=" text-center flex justify-center items-center ">
              {insideRegister ? (
                <button
                  onClick={onRegisterClick}
                  className="p-2 w-1/2 bg-linear-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e] text-white mt-4 rounded-pill  "
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="p-2 w-1/2 bg-linear-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e] text-white mt-4 rounded-pill  "
                >
                  LOGIN
                </button>
              )}
            </div>

            <div className="mt-5 p-2">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  googleDecode(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>

          {insideRegister ? (
            <p className="create text-center">
              Already an existing User? <Link to={"/login"}>Login</Link>
            </p>
          ) : (
            <p className="create text-center">
              New User ? <Link to={"/register"}>Register</Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
