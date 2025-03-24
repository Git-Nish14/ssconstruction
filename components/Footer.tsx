"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-12 pb-6 px-4 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm text-gray-300 mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md text-white w-full"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md font-semibold hover:bg-orange-600">
              SignUp
            </button>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Home",
              "Services",
              "About Us",
              "Latest Projects",
              "Testimonial",
              "Contact Us",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "General Construction",
              "Property Maintenance",
              "Project Management",
              "Virtual Design & Build",
              "Residential Construction",
              "Preconstruction",
              "Design Build",
            ].map((service) => (
              <li key={service} className="hover:text-white cursor-pointer">
                › {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="text-sm text-gray-300 space-y-3">
            <div className="flex items-start gap-2">
              <MapPin size={16} /> <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>Sindhwai_const@yahoo.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>+012 345 67890</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>+012 345 67890</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Facebook className="hover:text-orange-500 cursor-pointer" />
              <Twitter className="hover:text-orange-500 cursor-pointer" />
              <Instagram className="hover:text-orange-500 cursor-pointer" />
              <Linkedin className="hover:text-orange-500 cursor-pointer" />
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
          className="text-blue-400 underline"
        >
          Techifive
        </a>
      </div>
    </footer>
  );
}
