"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://formcarry.com/s/2gbzqJ9Z8er", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (data.code === 200) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />{" "}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen bg-gray-100 md:py-36 py-15 px-6 sm:px-12 lg:px-32 text-black"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h4
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-lg font-semibold mb-2"
          >
            Let's Connect
          </motion.h4>
          <motion.h2
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 mb-10"
          >
            {`Got questions, ideas, or just want to chat about your next project?
          Send us a message and we’ll get back to you shortly.`}
          </motion.p>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-2 md:p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-blue-500 col-span-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-blue-500 col-span-1"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="col-span-full p-4 border border-gray-300 rounded-md focus:outline-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="col-span-full w-fit mx-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Send Message <ArrowRight className="inline ml-2" size={18} />
          </motion.button>
        </form>

        {result && (
          <p className="text-center text-sm text-blue-600 font-medium mt-6">
            {result}
          </p>
        )}
      </motion.section>
    </>
  );
};

export default Contact;
