"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Architecture",
    title: "We Building Everything",
    image: "/img/project-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.",
  },
  {
    category: "Interior Design",
    title: "We Building Everything",
    image: "/img/project-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.",
  },
  {
    category: "House & Exterior",
    title: "We Building Everything",
    image: "/img/project-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.",
  },
  {
    category: "Interior Design",
    title: "We Building Everything",
    image: "/img/project-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-medium uppercase tracking-wide">
          OUR PROJECTS
        </h3>
        <h2 className="text-4xl md:text-5xl text-blue-950 font-bold mt-2">
          Recent Completed Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex group"
          >
            {/* Orange Accent Bar */}
            <div className="w-2 bg-orange-500 mr-4"></div>

            {/* Project Content */}
            <div className="flex-1 flex flex-col md:flex-row gap-4">
              {/* Image Container */}
              <div className="relative overflow-hidden w-full md:w-1/2 h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h4 className="text-orange-500 font-medium mb-1">
                  {project.category}
                </h4>
                <h3 className="text-xl text-blue-950 font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <Link href="#">
                  <span className="inline-block bg-blue-950 text-white px-5 py-2 text-sm font-medium transition-colors hover:bg-blue-900 rounded-full">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="flex justify-center mt-12">
        <Link href="#">
          <span className="inline-block bg-orange-500 text-white px-8 py-3 font-medium transition-colors hover:bg-orange-600 rounded-full">
            More Projects
          </span>
        </Link>
      </div>

      {/* Scroll to Top Button (Fixed Bottom Right) */}
      <Link href="#top">
        <span className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-none shadow-md transition-transform hover:translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </span>
      </Link>
    </section>
  );
};

export default ProjectsSection;
