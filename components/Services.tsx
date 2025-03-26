"use client";

import { FC } from "react";
import { Building2, Hammer, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const services = [
  {
    title: "General Construction",
    icon: <Hammer size={48} />,
    image: "/img/service-1.jpg",
    description:
      "We handle structural development with precision and excellence. Our team of experts ensures that each project is completed to the highest standard.",
  },
  {
    title: "Property Maintenance",
    icon: <Settings2 size={48} />,
    image: "/img/service-2.jpg",
    description:
      "Ensuring your property stays as good as new with regular maintenance. We provide comprehensive solutions to keep your property in optimal condition.",
  },
  {
    title: "Project Management",
    icon: <Building2 size={48} />,
    image: "/img/service-3.jpg",
    description:
      "From concept to completion, we manage your projects efficiently. Our professional team ensures timely delivery within budget constraints.",
  },
];

const Services: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="bg-gray-200 py-24 px-6 md:px-12 lg:px-24"
      id="services"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-orange-600 text-base md:text-lg font-semibold tracking-wide">
          OUR SERVICES
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mt-3">
          Our Services are Creative & Decent
        </h1>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white transition-all duration-500 hover:shadow-orange-200"
          >
            {/* Image */}
            <div className="overflow-hidden h-[450px] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-8 pt-4 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-orange-500 p-6 rounded-full mb-6 shadow-lg"
              >
                {service.icon}
              </motion.div>
              <h3 className="md:text-3xl text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="md:text-lg  text-sm leading-relaxed mb-8 max-w-lg pb-10">
                {service.description}
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-white px-8 py-6 flex justify-between items-center text-blue-950 text-xl font-bold">
              {service.title}
              <span className="text-orange-500 bg-orange-100 p-3 rounded-full transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {service.icon}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
