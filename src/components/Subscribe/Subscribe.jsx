"use client";
import React, { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset after showing message
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact-us" className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 flex items-center justify-center">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Contact form content */}
      <motion.div
        className="relative z-10 bg-white bg-opacity-5 backdrop-blur-md p-10 rounded-2xl max-w-2xl w-full shadow-2xl border border-purple-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 text-center"
          variants={itemVariants}
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-10"
          variants={itemVariants}
        >
          Whether you’ve got a killer idea, a random question, or just want to say “Hi 👋”, my inbox is always open.
        </motion.p>

        <form className="space-y-6">
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name (or Secret Identity)"
              className="w-full px-5 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email (no spam, promise!)"
              className="w-full px-5 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              rows="5"
              placeholder="Drop your message here... (Make it legendary 📝)"
              className="w-full px-5 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>

      <motion.div className="text-center" variants={itemVariants}>
  <motion.button
    type="button"
    onClick={handleSubmit}
    disabled={isSending}
    className={`px-8 py-3 bg-purple-600 rounded-lg font-medium text-white shadow-lg relative z-10 overflow-hidden`}
    whileTap={{ scale: 0.95 }}
  >
    {isSending ? "Sending..." : "Send Message"}
  </motion.button>
  <AnimatePresence>
    {isSending && (
      <motion.span
        key="flying-envelope"
        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        animate={{ x: 200, y: -100, opacity: 0, scale: 1.5, rotate: 20 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl z-0 pointer-events-none"
      >
        📩
      </motion.span>
    )}
  </AnimatePresence>
      </motion.div>

        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
