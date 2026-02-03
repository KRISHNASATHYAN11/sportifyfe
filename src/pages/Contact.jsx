import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  {
    icon: faAddressCard,
    title: "Address",
    info: "931 Marlynx Drive, Seattle-18104",
    link: "https://maps.google.com/?q=931+Marlynx+Drive+Seattle",
    isLink: true
  },
  {
    icon: faPhone,
    title: "Phone",
    info: "+1-760-284-3410",
    link: "tel:+17602843410",
    isLink: true
  },
  {
    icon: faEnvelope,
    title: "Email",
    info: "sportifysupport@gmail.com",
    link: "mailto:sportifysupport@gmail.com",
    isLink: true
  },
  {
    icon: faClock,
    title: "Business Hours",
    info: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    isLink: false
  }
];

const Contact = () => {
  return (
    <>
    <Header/>

    <section className="bg-gray-900 py-16 px-4 text-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">Have a question or need help? We’re here for you.</h2>
      <p>At Sportify, we believe great communication builds a strong sports community. If you have questions, face any issues, or want to share feedback, feel free to reach out. Fill in the form below and our team will get back to you as soon as possible.</p>
     
    </div>

    <div className="flex flex-col md:flex-row gap-10">

      <div className="flex-1">
        <img
          src="https://media.istockphoto.com/id/1312944654/vector/freelance-work-flat-design-on-white-background.jpg?s=612x612&w=0&k=20&c=P70kdq5vnDOaoLxxu4kCUUmXIhFCQQBYirBo1bifoZM="
          alt="Contact"
          className="rounded-2xl w-75"
        />

        <div className="mt-6 space-y-2  text-white">
          <p><span className="font-semibold"><FontAwesomeIcon icon={faAddressCard}/> Address : </span> 931 Marlynx Drive, Seattle-18104</p>
          <p><span className="font-semibold"><FontAwesomeIcon icon={faPhone}/> Phone : </span> +1-760-284-3410</p>
          <p><span className="font-semibold"><FontAwesomeIcon icon={faEnvelope}/>Email : </span>sportifysupport@gmail.com</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full mt-3 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          

          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 mt-3"
            required
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 mt-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-3  bg-green-600 text-white py-3 rounded-pill font-semibold hover:bg-green-800 transition"
          >
            SUBMIT
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

   
 





      <Footer/>
    </>
  );
};

export default Contact;
