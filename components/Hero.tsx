"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16 pb-10"
    >
      {/* Enhanced background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-40 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: 'url("/img/carousel-3.jpg")',
          transform: isLoaded ? "scale(1.05)" : "scale(1)",
        }}
      ></div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10 z-0"></div>

      {/* Foreground content with enhanced corner borders */}
      <motion.div
        key="hero-content"
        className="relative z-10 flex flex-col items-center justify-center space-y-8 px-6 py-14 sm:py-20 max-w-4xl w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner decorations */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-24 border-t-4 border-l-4 border-orange-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-20 h-24 border-b-4 border-r-4 border-orange-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        ></motion.div>

        {/* Orange accent line */}
        <motion.div
          className="w-20 h-1 bg-orange-500 mb-2"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.div>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-orange-500">CONSTRUCTION</span> BUSINESS
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Building the Future, One Brick at a Time.
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl px-4 sm:px-8 md:px-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Experience quality construction with innovation and excellence. We
          bring visions to life with craftsmanship and consistency that stands
          the test of time.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="https://www.google.pl/maps/place/Royal+Square/@23.0748711,72.507402,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-orange-500 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium text-white shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              <span className="z-10 flex items-center">
                Get Directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-[#001248] opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg"></span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Enhanced animated ribbon */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-orange-500 py-2 overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-white text-base sm:text-lg font-semibold tracking-widest flex items-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <span className="mx-4">🚧 BUILDING EXCELLENCE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">QUALITY CRAFTSMANSHIP</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🚧 INTEGRITY IN CONSTRUCTION</span>
          <span className="mx-4">•</span>
          <span className="mx-4">INNOVATION IN BUILDING</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🚧 TRUSTED SINCE 2005</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
