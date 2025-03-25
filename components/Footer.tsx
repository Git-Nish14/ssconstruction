"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0D1B2A] text-white pt-12 pb-6 px-4 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
        {/* Newsletter - Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated with our latest news and updates. Subscribe to our
            newsletter!
          </p>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-md text-white bg-[#1B263B] w-full placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-orange-500 px-5 py-2 rounded-r-md font-semibold hover:bg-orange-600 transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* Contact Info - Right Side */}
        <div className="md:w-1/2 flex flex-col items-end">
          <div>

            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <div className="text-sm text-gray-300 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} /> <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} /> <span>Sindhwai_const@yahoo.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} /> <span>+012 345 67890</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} /> <span>+012 345 67890</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Facebook />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Twitter />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-10 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">
          Shree Sindhwai Construction
        </span>
        . All rights reserved. Designed by{" "}
        <a
          href="https://www.techifive.com"
          target="_blank"
          className="text-blue-400 underline hover:text-blue-300 transition"
        >
          Techifive
        </a>
      </div>

      {/* Scroll to Top Arrow */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed right-4 bottom-4 bg-orange-500 hover:bg-orange-600 p-2 rounded-full shadow-md transition z-50"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
}
