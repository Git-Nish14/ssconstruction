"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

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
    name: "Santosh Nagar",
    profession: "Marketing Director",
    quote:
      "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence exceeded our expectations.",
    rating: 4.5,
    image: "/img/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Jimmy patel",
    profession: "Project Manager",
    quote:
      "Professional, timely, and efficient. Their expertise helped us bring our vision to life, and the results were outstanding.",
    rating: 4.5,
    image: "/img/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Shreya pilgaonkar",
    profession: "Entrepreneur",
    quote:
      "The team demonstrated exceptional creativity and professionalism throughout the project. I was impressed by their dedication.",
    rating: 5,
    image: "/img/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Arvind gupta",
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
  const [isVisible, setIsVisible] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Determine number of testimonials to show
  const testimonialsToShow = windowWidth >= 768 ? 2 : 1;

  // Debounced resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Debounce function
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", debouncedResize);
    }

    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", debouncedResize);
      }
    };
  }, []);

  // Check if section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update visible testimonials when index changes
  useEffect(() => {
    const computeVisibleTestimonials = () => {
      const results: Testimonial[] = [];

      for (let i = 0; i < testimonialsToShow; i++) {
        const index = (currentIndex + i) % testimonials.length;
        results.push(testimonials[index]);
      }

      return results;
    };

    setVisibleTestimonials(computeVisibleTestimonials());
  }, [currentIndex, testimonialsToShow]);

  // Auto-scroll functionality with pause when section not visible
  useEffect(() => {
    const startAutoScroll = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }

      slideIntervalRef.current = setInterval(() => {
        if (!isPaused && isVisible) {
          goToNextSlide();
        }
      }, 4000); // Change slide every 4 seconds
    };

    startAutoScroll();

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPaused, isVisible]);

  // Optimized slide navigation functions
  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Optimized star rating renderer with memoization
  const renderStarRating = useCallback((rating: number) => {
    return (
      <div
        className="flex"
        role="img"
        aria-label={`Rating: ${rating} out of 5 stars`}
      >
        {[...Array(5)].map((_, i) => {
          // Full star
          if (i < Math.floor(rating)) {
            return (
              <svg
                key={`star-${i}`}
                className="w-5 h-5 text-orange-500 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
          }
          // Half star
          else if (i === Math.floor(rating) && rating % 1 !== 0) {
            return (
              <div key={`half-star-${i}`} className="relative w-5 h-5">
                {/* Gray background */}
                <svg
                  className="w-5 h-5 text-gray-300 fill-current absolute"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {/* Orange foreground (half) */}
                <div
                  className="absolute overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <svg
                    className="w-5 h-5 text-orange-500 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            );
          }
          // Empty star
          else {
            return (
              <svg
                key={`empty-star-${i}`}
                className="w-5 h-5 text-gray-300 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
          }
        })}
      </div>
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-100"
      aria-label="Client Testimonials"
    >
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
            Our Clients Reviews
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            See what our clients are saying about our services and commitment to
            excellence.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div
          className="relative mb-16"
          ref={slideContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-md text-blue-950 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 bg-white p-2 rounded-full shadow-md text-blue-950 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden" aria-live="polite">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-1/2 p-4"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${idx + 1} of ${
                      testimonials.length
                    }`}
                  >
                    <motion.div
                      className="bg-white p-6 rounded shadow-md relative h-full transition-all duration-300 hover:shadow-lg"
                      whileHover={{ y: -5 }}
                    >
                      {/* Background Quote Icon */}
                      <div className="absolute top-6 right-6 text-blue-950 opacity-20">
                        <Quote size={48} />
                      </div>

                      {/* Quote */}
                      <div className="mb-6 relative z-10">
                        <p className="text-gray-600 italic relative">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-orange-500">
                            <Image
                              src={testimonial.image}
                              alt={`Portrait of ${testimonial.name}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 30vw, 20vw"
                              loading="eager"
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88Pz/fwAJDQNGWGyn3QAAAABJRU5ErkJggg=="
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
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div
          className="flex justify-center space-x-3"
          role="tablist"
          aria-label="Select a testimonial"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                index === currentIndex
                  ? "bg-orange-500 w-8"
                  : "bg-blue-950 hover:bg-blue-800"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
