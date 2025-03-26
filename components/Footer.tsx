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

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#121f2f] text-white py-12 px-4 md:px-12 lg:px-20 relative md:mb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-0">
          {/* Company Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              Shree Sindhwai Constructions
            </h2>
            <p className="text-gray-300 text-sm">
              Building excellence, delivering quality, and creating lasting
              value.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <MapPin size={18} className="text-orange-500" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Mail size={18} className="text-orange-500" />
                <a
                  href="mailto:sindhwai_const@yahoo.in"
                  className="hover:text-orange-400 transition"
                >
                  sindhwai_const@yahoo.in
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Phone size={18} className="text-orange-500" />
                <a
                  href="tel:+919825111774"
                  className="hover:text-orange-400 transition"
                >
                  +91 98251 11774
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Design Credit */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Shree Sindhwai Constructions
            </span>
            . All rights reserved. Designed by{" "}
            <a
              href="https://www.techifive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition"
            >
              Techifive
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute right-4 bottom-4 bg-orange-500 hover:bg-orange-600 p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
}
