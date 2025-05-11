import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypedComponent from "./TypedComponent";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#6d28d9", // Deeper purple on hover
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      color: "#6d28d9",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-32 px-4 flex items-center justify-center">
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Content container */}
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left content - Main hero content (3/5 of width on large devices) */}
          <motion.div className="lg:col-span-3 space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <span className="text-purple-400 uppercase tracking-wider font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight" 
              variants={itemVariants}
            >
              <span className="block">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                Pavan Gupta
              </span>
            </motion.h1>

            <motion.div 
              className="text-xl md:text-2xl font-medium text-gray-300 flex items-center gap-2" 
              variants={itemVariants}
            >
              <span>I'm a</span>
              <span className="text-purple-400">
                <TypedComponent />
              </span>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-300 max-w-xl" 
              variants={itemVariants}
            >
              Transforming visionary ideas into elegant digital experiences. I combine technical expertise with creative problem-solving to build innovative solutions that drive real-world impact.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-purple-600 rounded-lg font-medium text-white flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>

              <motion.button
                className="px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-medium flex items-center gap-2"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex space-x-6 text-gray-400 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/UniquePG/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <SiGithub size={22} />
                <span className="text-sm">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavan-gupta31/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <SiLinkedin size={22} />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:guptapavan549@gmail.com"
                variants={socialIconVariants}
                whileHover="hover"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <MdEmail size={22} />
                <span className="text-sm">Email</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Visual element (2/5 of width on large devices) */}
          <motion.div 
            className="lg:col-span-2 flex justify-center"
            variants={backgroundVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 p-1"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 60px rgba(139, 92, 246, 0.4)",
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden backdrop-blur-sm flex items-center justify-center">
                {/* You can add a profile image here if you want */}
                <motion.div 
                  className="text-9xl font-bold bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  PG
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech stack section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.h3 
            className="text-lg text-gray-400 mb-6 uppercase tracking-wider"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Replace these with actual tech icons or keep as text */}
            {["React", "NextJS", "NodeJS", "Express", "MongoDB", "TailwindCSS"].map((tech, index) => (
              <motion.div
                key={tech}
                className="text-gray-400 hover:text-purple-400 transition-colors font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#a78bfa" }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;