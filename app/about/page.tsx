"use client";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4 py-16 md:px-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/main.jpg"
            alt="Sindhwai Constructions"
            width={600}
            height={500}
            className="rounded-xl shadow-xl object-cover"
          />

          <div className="flex-1">
            <h1 className="text-5xl font-extrabold mb-6 text-orange-500">
              About Us
            </h1>
            <p className=" text-base text-gray-700 dark:text-gray-400 mb-4">
              <span className="font-semibold text-orange-500 dark:text-white">
                Sindhwai Constructions
              </span>{" "}
              is a forward-thinking and professionally managed construction
              company specializing in delivering premium-quality infrastructure
              and civil engineering solutions. With decades of experience, our
              goal is to craft durable, safe, and aesthetically impressive
              structures.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
              We are committed to excellence, transparency, and timely execution
              of projects — values that form the backbone of our operations and
              client relationships.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
              Our team consists of experienced engineers, architects, and
              skilled laborers who bring their best to every project, whether
              residential, commercial, or industrial. We ensure quality
              materials, cutting-edge techniques, and project-specific
              innovation to exceed client expectations. From planning and design
              to construction and handover, we maintain strict adherence to
              industry standards and sustainable practices.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
              Over the years, Sindhwai Constructions has successfully completed
              numerous landmark projects that have contributed to the urban
              development of cities across India. We take immense pride in our
              legacy of delivering on time, every time, while upholding the
              highest standards of safety and workmanship.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-orange-500">
                Founded and led by Mr. Uttam Kanaiyalal Patel
              </span>
              , a seasoned Civil Engineer with unmatched industry expertise and
              a passion for structural excellence, Sindhwai Constructions is
              more than a company—it’s a commitment to building a better,
              stronger future. Mr. Patel's vision has been the guiding light for
              the company's steady growth and reputation for integrity and
              reliability.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-sm"
        >
          <div className="flex items-center gap-3">
            <Building2 className="text-orange-500" />
            <span className="text-gray-800 dark:text-gray-200">
              20+ Years of Experience
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-orange-500" />
            <span className="text-gray-800 dark:text-gray-200">
              Mumbai, India
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-orange-500" />
            <span className="text-gray-800 dark:text-gray-200">
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-orange-500" />
            <Link
              href="mailto:info@sindhwaiconstructions.com"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              info@sindhwaiconstructions.com
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
