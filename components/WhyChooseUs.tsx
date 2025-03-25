"use client";

import { Building2, BadgeDollarSign, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <Building2 size={40} />,
    title: "Expert Engineer",
    description:
      "Our team is led by certified engineers with years of hands-on experience in delivering innovative and reliable solutions across various industries.",
  },
  {
    icon: <BadgeDollarSign size={40} />,
    title: "Free Estimates",
    description:
      "We provide transparent and no-obligation quotes to help you plan your project budget with confidence—no hidden fees, ever.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Quality Materials",
    description:
      "We use only premium-grade materials sourced from trusted suppliers to ensure long-lasting performance and satisfaction.",
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <p className="text-orange-600 font-semibold mb-2 uppercase tracking-wide">
          Why Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
