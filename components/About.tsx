"use client";

import React, { useRef } from "react";
import {
  HardHat,
  Users,
  CheckCircle,
  Building,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Parallax effect for images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#666 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Left Section with Images - Enhanced with staggered animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2 mb-8 md:mb-0"
      >
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <motion.div
            className="col-span-6 h-44 sm:h-52 md:h-64 overflow-hidden mb-16 md:mb-28 relative"
            style={{ y: y1 }}
          >
            <div className="relative w-full h-full border-4 border-orange-500 shadow-lg transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/img/about-3.jpg"
                alt="Construction Workers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
                className="hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-orange-500 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-6 h-44 sm:h-52 md:h-64 overflow-hidden mt-16 md:mt-28 relative"
            style={{ y: y2 }}
          >
            <div className="relative w-full h-full border-4 border-orange-500 shadow-lg transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/img/about-2.jpg"
                alt="Construction Site"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
                className="hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-orange-500 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>

        {/* Experience badge */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:-right-8 md:left-auto md:bottom-1/3 md:translate-x-1/2 bg-white shadow-xl rounded-full p-4 border-2 border-orange-500 z-10">
          <div className="text-center">
            <span className="block text-3xl md:text-4xl font-bold text-orange-500">
              15+
            </span>
            <span className="block text-blue-900 text-sm font-medium">
              Years Experience
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Enhanced with better typography and animations */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 md:pl-6 lg:pl-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-10 bg-orange-500"></div>
            <p className="text-orange-500 font-semibold uppercase text-sm sm:text-base">
              WE ARE CONSTRUCTION COMPANY
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Making Your Vision{" "}
            <span className="text-orange-500">Come True</span> At The Basics.
          </h1>
        </motion.div>

        {/* Team Image and Features - Enhanced layout */}
        <div className="flex flex-col sm:flex-row mb-8 gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="sm:mr-4 relative w-full sm:w-auto sm:h-48 h-full aspect-square mb-4 sm:mb-0"
          >
            <div className="relative w-full h-full border-4 border-orange-500 bg-white shadow-lg overflow-hidden">
              <Image
                src="/img/about-1.png"
                alt="Construction Team"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          <div className="w-full sm:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-4 text-base sm:text-lg"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <HardHat className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-blue-900">
                Quality standards & safety protocols
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-4 text-base sm:text-lg"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Users className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-blue-900">
                {`Team of certified engineers & professionals`}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 text-base sm:text-lg"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Building className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-blue-900">
                Modern equipment & construction techniques
              </span>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bullet Points in 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-base sm:text-lg mb-8">
          {[
            "100% Satisfaction Guarantee",
            "Highly Trained Employees",
            "Flexible and Cost Effective",
            "On-time Project Delivery",
            "Transparent Communication",
            "Sustainable Building Practices",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.7 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="text-orange-500 w-5 h-5 flex-none" />
              <span className="text-gray-700">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated Button with more prominence */}
        <Link href={"/about"}>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-8 py-4 font-medium text-white transition duration-300 ease-out hover:bg-[#001248]"
          >
            <span className="relative flex items-center">
              More About Us
              <svg
                className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
