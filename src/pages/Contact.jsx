import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import contactimg from "../assets/contactimg.png"


const Contact = () => {
  return (
    <>
    <Header/>

    <section className="bg-black py-16 px-4 text-white">
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}>
        <img style={{height:"500px"}} className="w-full opacity-50" src="https://media.istockphoto.com/id/1437821111/photo/customer-service-happy-and-communication-of-woman-at-call-center-pc-talking-with-joyful-smile.jpg?s=612x612&w=0&k=20&c=2f63B3Y8hIyYlbj-GguxKAyFWn86G74TFHLiWHNWeYI=" alt="" />
      </motion.div>
  <div className="max-w-6xl mx-auto">

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="text-center mb-12 mt-5">
      <h2 className="text-3xl font-bold mb-3">Have a question or need help? We’re here for you.</h2>
      <p>At Sportify, we believe great communication builds a strong sports community. If you have questions, face any issues, or want to share feedback, feel free to reach out. Fill in the form below and our team will get back to you as soon as possible.</p>
     
    </motion.div>

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="flex flex-col md:flex-row gap-10">

      <div className="flex-1">
        <img
          src="https://assets-v2.lottiefiles.com/a/7f3182d2-1180-11ee-a96e-53c010a0064a/Lu7I5ZLQWz.gif"
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

    </motion.div>
    
  </div>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172153.33373691145!2d-122.33979794999999!3d47.608715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sin!4v1771043174499!5m2!1sen!2sin"
  className="w-full h-[400px] rounded-xl mt-5"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map"
/>


  
</section>

   
 





      <Footer/>
    </>
  );
};

export default Contact;
