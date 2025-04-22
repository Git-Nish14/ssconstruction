"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Clock,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: "25+",
      label: "Years Experience",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      number: "250+",
      label: "Projects Completed",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      number: "120+",
      label: "Happy Clients",
      icon: <Users className="h-5 w-5" />,
    },
    {
      number: "75+",
      label: "Team Members",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-6">
              <span className="inline-block">About</span>{" "}
              <span className="inline-block text-orange-400">Sindhwai</span>
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Building the future with integrity, innovation, and excellence
              since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 px-6 -mt-16 lg:-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInScale}
          className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-orange-500 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mb-4">
                  {stat.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                  {stat.number}
                </h2>
                <p className="text-sm text-gray-600 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column: About Us text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 font-medium rounded-full text-sm mb-6">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Excellence With{" "}
                <span className="text-orange-500">Precision & Passion</span>
              </h2>

              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-orange-600">
                    Sindhwai Constructions
                  </span>{" "}
                  is a forward-thinking and professionally managed construction
                  company specializing in delivering premium-quality
                  infrastructure and civil engineering solutions. With decades
                  of experience, our goal is to craft durable, safe, and
                  aesthetically impressive structures.
                </p>

                <div className="relative my-6 pl-4 border-l-4 border-orange-500 italic bg-orange-50 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    {`"We are committed to excellence, transparency, and timely
                    execution of projects — values that form the backbone of our
                    operations and client relationships."`}
                  </p>
                </div>

                <p>
                  Our team consists of experienced engineers, architects, and
                  skilled laborers who bring their best to every project,
                  whether residential, commercial, or industrial. We ensure
                  quality materials, cutting-edge techniques, and
                  project-specific innovation to exceed client expectations.
                </p>

                <p>
                  Over the years, Sindhwai Constructions has successfully
                  completed numerous landmark projects that have contributed to
                  the urban development of cities across India. We take immense
                  pride in our legacy of delivering on time, every time, while
                  upholding the highest standards of safety and workmanship.
                </p>
              </div>

              {/* Leadership highlight */}
              <div className="mt-8 p-5 bg-gradient-to-r from-gray-100 to-orange-50 rounded-lg border-l-4 border-orange-500">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src="/founder.jpg"
                      alt="Mr. Uttam Kanaiyalal Patel"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/80";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Mr. Uttam Kanaiyalal Patel
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-2">
                      Founder & Managing Director
                    </p>
                    <p className="text-gray-700 text-sm">
                      {`A seasoned Civil Engineer with unmatched industry
                      expertise and a passion for structural excellence. Mr.
                      Patel's vision has been the guiding light for the
                      company's steady growth and reputation for integrity and
                      reliability.`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column: Image showcase */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main image */}
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/main.jpg"
                    alt="Sindhwai Constructions Building"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-5 -right-5 bg-orange-500 rounded-lg h-24 w-24 flex items-center justify-center rotate-6 shadow-lg">
                  <Ruler className="h-10 w-10 text-white" />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">
                      Currently Working On
                    </span>
                  </div>
                  <p className="text-xs text-gray-700">
                    High-rise residential complex in Ahmedabad featuring
                    sustainable building practices and smart home technology
                  </p>
                </div>

                {/* Core values floating card */}
                <div className="hidden md:block absolute -right-10 bottom-32 bg-gray-900 p-4 rounded-lg shadow-xl max-w-[180px] text-white transform rotate-3">
                  <h4 className="font-medium text-orange-400 text-sm mb-2">
                    Our Core Values
                  </h4>
                  <ul className="text-xs space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                      <span>Quality Excellence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                      <span>Client Satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                      <span>Timely Delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                      <span>Ethical Practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeInScale}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-orange-100 h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
              <p className="text-gray-600">25+ Years in Construction</p>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-orange-100 h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Ahmedabad, India</p>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-orange-100 h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98251 11774</p>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-orange-100 h-14 w-14 flex items-center justify-center rounded-full mx-auto mb-4">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <Link
                href="mailto:sindhwai_const@yahoo.in"
                className="text-orange-600 hover:underline"
              >
                sindhwai_const@yahoo.in
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="text-orange-500">Construction Journey</span>?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {` Let's discuss how Sindhwai Constructions can bring your vision to
            life with our expertise, dedication, and commitment to excellence.`}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </section>
    </>
  );
}
