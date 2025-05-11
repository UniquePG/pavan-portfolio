"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/namedlogo.png";

const Loader = () => {
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const typingRef = useRef(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  const loadingTexts = [
    { text: "Brewing creative code magic... ✨", duration: 1500 },
    { text: "Untangling spaghetti code... Mmm, pasta 🍝", duration: 1500 },
    {
      text: "Convincing AI not to take over the world... Again 🤖",
      duration: 1500,
    },
    { text: "Polishing pixels to perfection... So shiny! ✨", duration: 1500 },
    {
      text: "Launching talent into the digital universe... 🚀",
      duration: 1500,
    },
  ];

  // Typing effect for terminal text
  useEffect(() => {
    if (loadingPhase < loadingTexts.length) {
      let i = 0;
      const currentFullText = loadingTexts[loadingPhase].text;

      const typeText = () => {
        if (i < currentFullText.length) {
          setCurrentText((prev) => prev + currentFullText.charAt(i));
          i++;
          typingRef.current = setTimeout(typeText, 40);
        }
      };

      typeText();

      return () => {
        if (typingRef.current) clearTimeout(typingRef.current);
      };
    }
  }, [loadingPhase]);

  // Progress bar and phase advancement
  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 0.2;
      });
    }, 50);

    // Phase advancement
    const phaseInterval = setInterval(() => {
      setLoadingPhase((prev) => {
        if (prev < loadingTexts.length - 1) {
          setCurrentText("");
          return prev + 1;
        } else {
          clearInterval(phaseInterval);
          setTimeout(() => setDone(true), 700);
          return prev;
        }
      });
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
    };
  }, []);

  const calculateRotation = () => {
    // Calculate rotation based on progress
    return progress * 3.6; // 360 degrees / 100 = 3.6 degrees per percent
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white z-[9999] flex flex-col items-center justify-center overflow-hidden"
          exit={{
            y: "-100vh",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {windowSize.width > 0 &&
              [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white opacity-20"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    scale: Math.random() * 0.5 + 0.5,
                  }}
                  animate={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    width: `${Math.random() * 10 + 2}px`,
                    height: `${Math.random() * 10 + 2}px`,
                  }}
                />
              ))}
          </div>

          {/* Center container */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Circular progress and logo */}
            <div className="relative mb-12">
              {/* Outer ring with gradient */}
              <motion.div
                className="w-40 h-40 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(from ${calculateRotation()}deg, #6366f1 0%, #8b5cf6 ${progress}%, transparent ${progress}%, transparent 100%)`,
                  boxShadow: "0 0 30px rgba(129, 140, 248, 0.5)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Inner circle */}
                <div className="w-32 h-32 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
                  {/* Logo container with pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="relative"
                  >
                    <Image
                      src={logo}
                      alt="Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />

                    {/* Glowing orbs around logo */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-indigo-400"
                        animate={{
                          rotate: 360,
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                        style={{
                          top: `${
                            50 + 40 * Math.sin((i * (Math.PI * 2)) / 3)
                          }%`,
                          left: `${
                            50 + 40 * Math.cos((i * (Math.PI * 2)) / 3)
                          }%`,
                          boxShadow: "0 0 10px rgba(129, 140, 248, 0.8)",
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Percentage text */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-sm font-bold text-indigo-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Terminal window */}
            <motion.div
              className="bg-gray-900 border border-indigo-500/30 rounded-xl p-6 w-80 md:w-96 shadow-2xl overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Terminal header */}
              <div className="flex items-center pb-3 border-b border-gray-700 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-center flex-1 text-gray-400 font-mono">
                  portfolio-system-boot.sh
                </div>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm h-20">
                <div className="flex gap-2 items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <motion.span className="text-indigo-300 mr-2" key={loadingPhase}>
                    {currentText}
                    <motion.span
                      className="inline-block w-2 h-4 bg-indigo-400 ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Status text */}
          <motion.div
            className="absolute bottom-10 text-sm text-indigo-300 font-medium tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {progress < 30
              ? "Waking up creative modules..."
              : progress < 70
              ? "Calibrating design sensors..."
              : "Preparing for launch..."}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
