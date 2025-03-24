"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600 flex items-center gap-2">
          <span>🏢</span> Constra
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-600">
            Home
          </a>
          <a href="#" className="hover:text-orange-600">
            About
          </a>
          <a href="#" className="hover:text-orange-600">
            Services
          </a>
          <a href="#" className="hover:text-orange-600">
            Projects
          </a>
          <a href="#" className="hover:text-orange-600">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-orange-600">
              Home
            </a>
            <a href="#" className="hover:text-orange-600">
              About
            </a>
            <a href="#" className="hover:text-orange-600">
              Services
            </a>
            <a href="#" className="hover:text-orange-600">
              Projects
            </a>
            <a href="#" className="hover:text-orange-600">
              Contact
            </a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded w-full text-left">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
