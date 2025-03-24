import React from "react";

function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xs brightness-50"
        style={{
          backgroundImage: 'url("/img/carousel-3.jpg")', // change to your path
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4 pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
          CONSTRUCTION BUSINESS
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          We build somethings new and consistent.
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-white px-4 sm:px-8 md:px-16 max-w-2xl">
          Morbi tristique senectus et netus et malesuada fames ac. Nunc vel
          risus commodo viverra. Non pulvinar neque laoree.
        </p>
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-8 sm:px-10 py-3 sm:py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-100 focus:outline-none focus:ring-4 focus:ring-orange-300">
          <span className="z-10">Get Direction</span>
          <span className="absolute inset-0 bg-[#001248] opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-full"></span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
