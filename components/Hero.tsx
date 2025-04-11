"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16 pb-10"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-50"
        style={{
          backgroundImage: 'url("/img/carousel-3.jpg")',
        }}
      ></div>

      {/* Foreground content with corner borders */}
      <motion.div
        key={Date.now()}
        className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4 py-10 sm:py-16 max-w-3xl w-full mx-auto
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-16 before:h-20
          before:border-t-8 before:border-l-8 before:border-orange-500
          after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-16 after:h-20 
          after:border-b-8 after:border-r-8 after:border-orange-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          CONSTRUCTION BUSINESS
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Building the Future, One Brick at a Time.
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-white max-w-xl px-4 sm:px-8 md:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Experience quality construction with innovation and excellence. We
          bring visions to life with craftsmanship and consistency.
        </motion.p>

        <Link
          href="https://www.google.pl/maps/place/Royal+Square/@23.0748711,72.507402,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9cb76d762ed3:0xfc5c907a0a855a6e!8m2!3d23.0748711!4d72.5099769!16s%2Fg%2F11b76bmr3x?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 sm:px-10 py-2.5 sm:py-3.5 text-base sm:text-lg font-medium text-white shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            <span className="z-10">Get Directions</span>
            <span className="absolute inset-0 bg-[#001248] opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-full"></span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Animated Construction Ribbon (Bottom) with Framer Motion */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-orange-500 overflow-hidden py-1">
        <motion.div
          className="whitespace-nowrap text-white text-sm sm:text-base font-semibold tracking-widest"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          🚧 UNDER CONSTRUCTION — WE BUILD WITH INTEGRITY 🚧 UNDER CONSTRUCTION
          — WE BUILD WITH INTEGRITY 🚧 UNDER CONSTRUCTION — WE BUILD WITH
          INTEGRITY 🚧
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
