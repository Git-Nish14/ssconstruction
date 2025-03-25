"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "Architecture",
    title: "Modern Corporate Towers",
    image: "/img/project-1.jpg",
    description:
      "High-rise architectural project featuring advanced design and precision engineering, tailored for premium commercial spaces.",
  },
  {
    category: "Interior Design",
    title: "Commercial Space Interiors",
    image: "/img/project-2.jpg",
    description:
      "Interior design project for a commercial high-rise, focusing on functionality, aesthetics, and seamless spatial flow.",
  },
  {
    category: "House & Exterior",
    title: "Residential Villa Development",
    image: "/img/project-3.jpg",
    description:
      "Modern housing construction with efficient space planning and exterior finishing, combining style and durability.",
  },
  {
    category: "Interior Design",
    title: "Premium Family Home",
    image: "/img/project-4.jpg",
    description:
      "Customized residential interiors with a focus on comfort, lighting, and eco-friendly materials for a warm ambiance.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-200">
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
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
