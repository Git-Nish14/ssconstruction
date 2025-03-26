"use client";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white text-gray-900 px-4 pt-24 pb-4 md:px-16 lg:px-32 xl:px-48 flex items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1600px]"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src="/main.jpg"
                alt="Sindhwai Constructions"
                width={800}
                height={600}
                className="rounded-xl shadow-xl object-cover w-full h-auto"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500">
                About Us
              </h1>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-orange-500">
                    Sindhwai Constructions
                  </span>{" "}
                  {`is a forward-thinking and professionally managed construction
                  company specializing in delivering premium-quality
                  infrastructure and civil engineering solutions. With decades
                  of experience, our goal is to craft durable, safe, and
                  aesthetically impressive structures.`}
                </p>
                <p>
                  {`We are committed to excellence, transparency, and timely
                  execution of projects — values that form the backbone of our
                  operations and client relationships.`}
                </p>
                <p>
                  {`Our team consists of experienced engineers, architects, and
                  skilled laborers who bring their best to every project,
                  whether residential, commercial, or industrial. We ensure
                  quality materials, cutting-edge techniques, and
                  project-specific innovation to exceed client expectations.
                  From planning and design to construction and handover, we
                  maintain strict adherence to industry standards and
                  sustainable practices.`}
                </p>
                <p>
                  {`Over the years, Sindhwai Constructions has successfully
                  completed numerous landmark projects that have contributed to
                  the urban development of cities across India. We take immense
                  pride in our legacy of delivering on time, every time, while
                  upholding the highest standards of safety and workmanship.`}
                </p>
                <p>
                  <span className="font-semibold text-orange-500">
                    Founded and led by Mr. Uttam Kanaiyalal Patel
                  </span>
                  {`, a seasoned Civil Engineer with unmatched industry expertise
                  and a passion for structural excellence, Sindhwai
                  Constructions is more than a company—it’s a commitment to
                  building a better, stronger future. Mr. Patel's vision has
                  been the guiding light for the company's steady growth and
                  reputation for integrity and reliability.`}
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:mt-6 text-sm mb-0"
          >
            <div className="flex items-center gap-3">
              <Building2 className="text-orange-500" />
              <span className="text-gray-800">25+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-500" />
              <span className="text-gray-800">Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <span className="text-gray-800">+91 98251 11774</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <Link
                href="mailto:sindhwai_const@yahoo.in"
                className="text-gray-800 hover:underline"
              >
                sindhwai_const@yahoo.in
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
