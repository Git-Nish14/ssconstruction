"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    profession: "Marketing Director",
    quote:
      "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence exceeded our expectations.",
    rating: 4.5,
    image: "/img/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "James Anderson",
    profession: "Project Manager",
    quote:
      "Professional, timely, and efficient. Their expertise helped us bring our vision to life, and the results were outstanding.",
    rating: 4.5,
    image: "/img/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Alicia Gomez",
    profession: "Entrepreneur",
    quote:
      "The team demonstrated exceptional creativity and professionalism throughout the project. I was impressed by their dedication.",
    rating: 5,
    image: "/img/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Michael Tanaka",
    profession: "Software Engineer",
    quote:
      "Excellent service from start to finish. Their innovative approach and responsiveness made a real difference in our project.",
    rating: 4,
    image: "/img/testimonial-4.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>(
    []
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const testimonialsToShow = windowWidth >= 768 ? 2 : 1;
    const endIndex = (currentIndex + testimonialsToShow) % testimonials.length;

    if (endIndex < currentIndex) {
      // Wrap around case
      setVisibleTestimonials(
        [
          ...testimonials.slice(currentIndex),
          ...testimonials.slice(0, endIndex),
        ].slice(0, testimonialsToShow)
      );
    } else {
      setVisibleTestimonials(
        testimonials.slice(currentIndex, currentIndex + testimonialsToShow)
      );
    }
  }, [currentIndex, windowWidth]);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }

      slideIntervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }, 4000); // Change slide every 5 seconds
    };

    startAutoScroll();

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  // Generate star rating
  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          className="w-5 h-5 text-orange-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-5 h-5 text-orange-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M12 17.27V2" style={{ clipPath: "inset(0 50% 0 0)" }} />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-orange-500 font-medium uppercase tracking-wide">
            TESTIMONIALS
          </h3>
          <h2 className="text-4xl md:text-5xl text-blue-950 font-bold mt-2 flex items-center justify-center gap-2">
            Our Clients Reviews.
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div
          className="relative mb-16"
          ref={slideContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentIndex}
                className="flex flex-wrap"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.8,
                }}
              >
                {visibleTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded shadow-md relative h-full">
                      <div className="mb-6">
                        <p className="text-gray-600 italic">
                          {testimonial.quote}
                        </p>
                        <div className="absolute top-6 right-6 text-blue-950 opacity-30">
                          <Quote size={32} />
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 30vw, 20vw"
                            />
                          </div>
                          <div>
                            <h4 className="text-blue-950 font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {testimonial.profession}
                            </p>
                            <div className="flex mt-1">
                              {renderStarRating(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                        <div className="text-blue-950 text-4xl">
                          <Quote size={36} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-sm transition-colors duration-300 ${
                index === currentIndex ? "bg-orange-500" : "bg-blue-950"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
