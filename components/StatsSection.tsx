"use client";

import { useEffect, useRef, useState } from "react";
import { ThumbsUp, Users, User, Heart } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <ThumbsUp size={40} className="text-orange-500" />,
    title: "Completed Projects",
    value: 100,
  },
  {
    icon: <Users size={40} className="text-orange-500" />,
    title: "Happy Customers",
    value: 411,
  },
  {
    icon: <User size={40} className="text-orange-500" />,
    title: "Qualified Engineers",
    value: 53,
  },
  {
    icon: <Heart size={40} className="text-orange-500" />,
    title: "Years Experience",
    value: 25,
  },
];

// Improved counter with smoother easing and better performance
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTime: number | null = null;
          const duration = 2000; // Slightly longer for better visual effect

          // Use requestAnimationFrame for smoother animation
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for more natural counting
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * value);

            setCount(currentCount);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              setHasAnimated(true);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="font-bold" aria-live="polite">
      <span>{count}+</span>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Prepare variants for staggered animations
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B1B38] py-16 md:py-24 overflow-hidden"
      aria-label="Company Statistics"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Enhanced shadow effect with smoother transition */}
              <div
                className="absolute top-2 left-2 w-full h-full bg-orange-500 transition-all duration-300 group-hover:top-3 group-hover:left-3"
                aria-hidden="true"
              ></div>

              <div className="relative hover:scale-105 transition-all duration-300 bg-white p-6 md:p-8 flex flex-col items-center border-orange-500 border-t-4 border-l-4 border-r-4 border-b-4 group-hover:border-b-0 group-hover:shadow-lg z-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  {stat.icon}
                </div>

                <h4 className="text-base md:text-lg font-semibold text-[#0B1B38] mb-3 text-center">
                  {stat.title}
                </h4>

                <div className="bg-[#0B1B38] w-full py-2 rounded-md text-center relative overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0B1B38] via-blue-900 to-[#0B1B38] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-size-200 animate-gradient-x"
                    aria-hidden="true"
                  ></div>

                  <div className="relative text-2xl md:text-3xl font-bold text-white">
                    <Counter value={stat.value} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
