"use client";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-50"
        style={{
          backgroundImage: 'url("/img/carousel-3.jpg")',
        }}
      ></div>

      {/* Foreground content */}
      <motion.div
        key={Date.now()} // 👈 triggers animation on every mount
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 pt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          CONSTRUCTION BUSINESS
        </motion.h1>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We build somethings new and consistent.
        </motion.h1>

        <motion.p
          className="text-xs sm:text-sm md:text-base text-white px-4 sm:px-8 md:px-16 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Morbi tristique senectus et netus et malesuada fames ac. Nunc vel
          risus commodo viverra. Non pulvinar neque laoree.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 sm:px-8 py-2 sm:py-3 text-base text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          <span className="z-10">Get Direction</span>
          <span className="absolute inset-0 bg-[#001248] opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-full"></span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
