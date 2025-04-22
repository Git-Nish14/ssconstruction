"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Send, Sparkles, MessageCircle, X } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(
    null
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [isParticlesActive, setIsParticlesActive] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setIsParticlesActive(true);
        controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.5 } });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  useEffect(() => {
    if (!isParticlesActive || !particlesRef.current) return;

    const container = particlesRef.current;
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 5 + 5;
      particle.className = `absolute rounded-full bg-${
        ["orange", "blue", "purple", "green"][Math.floor(Math.random() * 4)]
      }-500`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `float ${
        1 + Math.random() * 2
      }s ease-out forwards`;
      container.appendChild(particle);

      setTimeout(() => container.removeChild(particle), 2000);
    }
    setTimeout(() => setIsParticlesActive(false), 2000);
  }, [isParticlesActive]);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <>
      <Navbar />
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
                ${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 100}px,
                ${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 100}px
              )
              scale(0);
            opacity: 0;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-16 px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Reach out and let's discuss your vision. We're ready to collaborate.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-3xl rounded-3xl"></div>

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <MessageCircle className="mr-2 text-orange-500" />
                Drop us a line
              </h2>
              <button
                onClick={flipCard}
                className="text-blue-500 text-sm font-medium flex items-center"
              >
                Our Process <Sparkles size={16} className="ml-1" />
              </button>
            </div>

            {!isFlipped ? (
              <form onSubmit={onSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
                />
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={controls}
                  className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <Send size={18} className="ml-2" />
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-green-600 text-center font-medium"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-red-600 text-center font-medium"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            ) : (
              <div className="space-y-8 text-blue-900">
                <div>
                  <h3 className="font-semibold">Discovery</h3>
                  <p className="text-sm">
                    Understanding your goals and vision first.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Strategy & Planning</h3>
                  <p className="text-sm">Tailoring the perfect plan for you.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Design & Development</h3>
                  <p className="text-sm">
                    Building something extraordinary together.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Launch & Support</h3>
                  <p className="text-sm">Ongoing partnership for success.</p>
                </div>
                <button
                  onClick={flipCard}
                  className="mt-6 text-sm font-medium text-orange-500"
                >
                  Back to Contact Form
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          ref={particlesRef}
          className="fixed inset-0 pointer-events-none z-50"
          style={{ display: isParticlesActive ? "block" : "none" }}
        />
      </div>
    </>
  );
};

export default Contact;
