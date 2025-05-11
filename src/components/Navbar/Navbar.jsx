'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import logo from "../../../public/namedlogo.png";
import Image from 'next/image';

const navLinks = [
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact-us' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setScrolled(v > 0.05);
  });

  return (
    <>
      {/* Top navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-black/70 border-b border-purple-500/10 shadow-xl' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 p-[2px] shadow-purple-500/40 shadow-xl">
              <div className="bg-gray-900 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={logo}
                  alt="Pavan Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <motion.h1
              className="text-lg md:text-2xl font-bold text-white tracking-widest gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              PAVAN GUPTA
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            className="hidden md:flex gap-10 text-sm font-medium text-gray-300"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer"
              >
                <Link to={link.to} smooth offset={-100}>
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            {!menuOpen ? (
              <BiMenuAltRight size={28} onClick={() => setMenuOpen(true)} />
            ) : (
              <RxCross2 size={28} onClick={() => setMenuOpen(false)} />
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md z-40 flex flex-col justify-center items-center"
          >
            <motion.div
              className="grid grid-cols-1 gap-10 text-xl text-white text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={link.to}
                    smooth
                    offset={-100}
                    className="cursor-pointer hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="absolute bottom-10 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              © {new Date().getFullYear()} Pavan Gupta
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
