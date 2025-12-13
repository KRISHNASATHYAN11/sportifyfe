import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLinkedinIn, FaX } from "react-icons/fa6";
import sportify_logo from "../assets/sportify_logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-5">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-green-300">Sportify</h2>
            <img className="w-25" src={sportify_logo} alt="" />
            <p>Your partner in booking turfs & connecting with players.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 ">
              <li className="items">About Us</li>
              <li className="items">Contact</li>
              <li className="items">FAQs</li>
              <li className="items">Cancellation Policy</li>
              <li className="items">Terms & Conditions</li>
              <li className="items">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="flex items-center gap-2">
              <FaPhone /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> sportifysupport@gmail.com
            </p>

            <div className="flex gap-4 text-2xl mt-4">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedinIn />
              <FaX />
            </div>
          </div>
        </div>

        <p className="text-center text-sm mt-8 opacity-80">
          © 2025 Sportify. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
