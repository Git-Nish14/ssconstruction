"use client";

import React from "react";
import { HardHat, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section with Images */}
      <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          {/* Left top image */}
          <div className="col-span-6 h-40 sm:h-48 md:h-56 overflow-hidden mb-16 md:mb-24 relative">
            <div className="relative w-full h-full border-4 border-orange-500">
              <Image
                src="/img/about-3.jpg"
                alt="Construction Workers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          {/* Bottom image (construction site) */}
          <div className="col-span-6 h-40 sm:h-48 md:h-56 overflow-hidden mt-16 md:mt-24 relative">
            <div className="relative w-full h-full border-4 border-orange-500">
              <Image
                src="/img/about-2.jpg"
                alt="Construction Site"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 md:pl-4 lg:pl-10">
        <p className="text-orange-500 font-semibold uppercase mb-2 text-sm sm:text-base lg:text-lg">
          WE ARE CONSTRUCTION COMPANY
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
          Making Your Vision Come True At The Basics.
        </h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        {/* Team Image and Features */}
        <div className="flex flex-col sm:flex-row mb-6 gap-4">
          <div className="sm:mr-4 relative w-full sm:w-auto sm:h-48 h-full  aspect-square mb-4 sm:mb-0">
            <div className="relative w-full h-full border-4 border-orange-500">
              <Image
                src="/img/about-1.png"
                alt="Construction Team"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full sm:w-2/3">
            <div className="flex items-center gap-3 mb-3 text-base sm:text-lg">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <HardHat className="text-white w-4 h-4" />
              </div>
              <span className="font-semibold text-blue-900">
                Building quality standards
              </span>
            </div>
            <div className="flex items-center gap-3 text-base sm:text-lg">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <Users className="text-white w-4 h-4" />
              </div>
              <span className="font-semibold text-blue-900">
                Certified engineer's team
              </span>
            </div>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-base sm:text-lg mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-orange-500 w-4 h-4 flex-none" />
            <span>100% Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-orange-500 w-4 h-4 flex-none" />
            <span>Annual Pass Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-orange-500 w-4 h-4 flex-none" />
            <span>Trained Emploies</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-orange-500 w-4 h-4 flex-none" />
            <span>Flexible and cost effective</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 transition duration-300 text-sm sm:text-base font-medium rounded-sm">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
