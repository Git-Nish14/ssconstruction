"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 py-3">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with text aligned to the extreme left */}
          <Link
            href={"/"}
            className="flex-shrink-0 text-xl md:text-3xl font-semibold font-serif text-orange-600 flex items-center gap-2"
          >
            <img
              src="/navbarlogo.png"
              alt="Sindhwai Constructions Logo"
              className="h-14 sm:h-16 md:h-24" // Adjusted size of the logo for mobile
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold font-sans">
              Sindhwai Constructions
            </span>
          </Link>

          {/* Desktop Nav - Right Aligned */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/#projects" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative px-2 py-1 hover:text-orange-600 hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative z-20">
            <button
              onClick={toggleMenu}
              className="relative z-20 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
            >
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Sliding Animation */}
        {isOpen && (
          <div className="md:hidden bg-white bg-opacity-95 shadow-xl px-4 pb-4 rounded-lg border border-white border-opacity-30 fixed top-0 right-0 bottom-0 w-2/3 sm:w-1/2 transition-transform transform translate-x-0 ease-in-out duration-300">
            <div className="flex justify-end pb-4"></div>
            <nav className="flex flex-col gap-6 text-gray-700 font-medium mt-4">
              {[
                { name: "Home", id: "/" },
                { name: "About", id: "/#about" },
                { name: "Services", id: "/#services" },
                { name: "Projects", id: "/#projects" },
                { name: "Contact", id: "/contact" },
              ].map(({ name, id }) => (
                <Link
                  key={id}
                  onClick={() => setIsOpen(false)}
                  href={id}
                  className="relative px-2 py-1 hover:text-orange-600 transition-colors duration-300 group"
                >
                  <span className="relative z-10">{name}</span>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
