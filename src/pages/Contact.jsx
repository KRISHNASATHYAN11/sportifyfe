import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <Header/>

    <section class="bg-linear-to-r from-gray-50 to-green-300 py-16 px-4">
  <div class="max-w-6xl mx-auto">

    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-3">Have a question or need help? We’re here for you.</h2>
      <p>At Sportify, we believe great communication builds a strong sports community. If you have questions, face any issues, or want to share feedback, feel free to reach out. Fill in the form below and our team will get back to you as soon as possible.</p>
     
    </div>

    <div class="flex flex-col md:flex-row gap-10">

      <div class="flex-1">
        <img
          src="https://media.istockphoto.com/id/1312944654/vector/freelance-work-flat-design-on-white-background.jpg?s=612x612&w=0&k=20&c=P70kdq5vnDOaoLxxu4kCUUmXIhFCQQBYirBo1bifoZM="
          alt="Contact"
          className="rounded-2xl w-75"
        />

        <div class="mt-6 space-y-2 text-gray-800">
          <p><span class="font-semibold">Address:</span> 931 Abia Martin Drive, PA Pennsylvania-18104</p>
          <p><span class="font-semibold">Phone:</span> +1-760-284-3410</p>
          <p><span class="font-semibold">Email:</span> hello@demoemail.com</p>
        </div>
      </div>

      <div class="flex-1">
        <form class="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          

          <input
            type="email"
            placeholder="Email *"
            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <textarea
            rows="5"
            placeholder="Message"
            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            class="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

   
 





      <Footer/>
    </>
  );
};

export default Contact;
