"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

// Extended project data with more fields
const projects = [
  {
    id: "modern-towers",
    category: "Architecture",
    title: "Modern Corporate Towers",
    image: "/img/project-1.jpg",
    description:
      "High-rise architectural project featuring advanced design and precision engineering, tailored for premium commercial spaces.",
    client: "Horizon Developments",
    completionDate: "March 2024",
    location: "Downtown Financial District",
    link: "/projects/modern-towers",
  },
  {
    id: "commercial-interiors",
    category: "Interior Design",
    title: "Commercial Space Interiors",
    image: "/img/project-2.jpg",
    description:
      "Interior design project for a commercial high-rise, focusing on functionality, aesthetics, and seamless spatial flow.",
    client: "Metro Business Solutions",
    completionDate: "January 2024",
    location: "Tech Innovation Park",
    link: "/projects/commercial-interiors",
  },
  {
    id: "villa-development",
    category: "House & Exterior",
    title: "Residential Villa Development",
    image: "/img/project-3.jpg",
    description:
      "Modern housing construction with efficient space planning and exterior finishing, combining style and durability.",
    client: "Greenfield Estates",
    completionDate: "November 2023",
    location: "Lakeside View Community",
    link: "/projects/villa-development",
  },
  {
    id: "premium-home",
    category: "Interior Design",
    title: "Premium Family Home",
    image: "/img/project-4.jpg",
    description:
      "Customized residential interiors with a focus on comfort, lighting, and eco-friendly materials for a warm ambiance.",
    client: "Private Residence",
    completionDate: "February 2024",
    location: "Highland Neighborhood",
    link: "/projects/premium-home",
  },
];

// Filter categories dynamically from projects data
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Filter projects based on category selection
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      {/* Section Header with enhanced animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-orange-500 font-medium uppercase tracking-wide mb-2">
          OUR PROJECTS
        </h3>
        <h2 className="text-4xl md:text-5xl text-blue-950 font-bold mt-2 mb-6">
          Recent Completed Projects
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Explore our portfolio of successful projects delivered with precision
          and excellence, showcasing our commitment to quality craftsmanship.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-blue-950 hover:bg-orange-100"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid with animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="flex group bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Orange Accent Bar - enhanced with subtle animation */}
            <div className="w-2 bg-orange-500 group-hover:w-3 transition-all duration-300"></div>

            {/* Project Content */}
            <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
              {/* Image Container with improved hover effects */}
              <div className="relative overflow-hidden w-full md:w-1/2 h-64 rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88Pz/fwAJDQNGWGyn3QAAAABJRU5ErkJggg=="
                />

                {/* Overlay with zoom icon */}
                <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-orange-500 p-3 rounded-full">
                    <Plus size={24} className="text-white" />
                  </span>
                </div>
              </div>

              {/* Content with expanded details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h4 className="text-orange-500 font-medium mb-1">
                    {project.category}
                  </h4>
                  <h3 className="text-xl text-blue-950 font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project details */}
                <div className="mt-auto">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                    <div>
                      <span className="font-semibold text-blue-950">
                        Client:
                      </span>{" "}
                      {project.client}
                    </div>
                    <div>
                      <span className="font-semibold text-blue-950">
                        Completed:
                      </span>{" "}
                      {project.completionDate}
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold text-blue-950">
                        Location:
                      </span>{" "}
                      {project.location}
                    </div>
                  </div>

                  {/* View project link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors group"
                  >
                    View Project Details
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-blue-950 text-white rounded hover:bg-blue-900 transition-colors"
        >
          View All Projects
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
