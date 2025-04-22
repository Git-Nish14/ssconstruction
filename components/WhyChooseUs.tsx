"use client";

import {
  Building2,
  BadgeDollarSign,
  Wrench,
  Clock,
  Shield,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const features = [
  {
    icon: <Building2 size={40} />,
    title: "Expert Engineers",
    description:
      "Our team is led by certified engineers with years of hands-on experience in delivering innovative and reliable solutions across various industries.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: <BadgeDollarSign size={40} />,
    title: "Free Estimates",
    description:
      "We provide transparent and no-obligation quotes to help you plan your project budget with confidence—no hidden fees, ever.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: <Wrench size={40} />,
    title: "Quality Materials",
    description:
      "We use only premium-grade materials sourced from trusted suppliers to ensure long-lasting performance and satisfaction.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: <Clock size={40} />,
    title: "On-Time Delivery",
    description:
      "We understand the importance of timelines and pride ourselves on completing projects according to schedule without compromising quality.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: <Shield size={40} />,
    title: "Safety First",
    description:
      "Safety is our priority at every stage of construction, with rigorous protocols that protect our workers, clients, and the public.",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: <UserCheck size={40} />,
    title: "Client Satisfaction",
    description:
      "Our highest achievement is your satisfaction. We work closely with clients to exceed expectations and deliver results you'll love.",
    color: "from-orange-500 to-orange-700",
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-1 w-12 bg-orange-500"></div>
              <p className="text-orange-600 font-semibold uppercase tracking-wide">
                Why Choose Us
              </p>
              <div className="h-1 w-12 bg-orange-500"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-600">Expertise</span> & Values
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience in the construction industry,
              we've built our reputation on quality, reliability, and
              exceptional customer service.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with gradient background */}
              <div className="relative z-10 mb-6">
                <div
                  className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="h-1 w-12 bg-orange-500 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to experience the difference of working with a truly dedicated
            construction team? Get in touch today for a consultation and free
            estimate.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white py-3 px-8 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300 inline-flex items-center"
            >
              Get Your Free Estimate
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
