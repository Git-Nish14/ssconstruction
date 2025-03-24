import Hero from "@/components/Hero";
import About from "@/components/About";
import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/Projects";
import TestimonialsSection from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default page;
