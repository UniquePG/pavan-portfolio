'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black via-gray-900 to-gray-950 text-gray-300 pt-20 pb-10 px-6 md:px-20">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect</h3>
          <p className="text-sm text-gray-400 mb-6">
            Curious about working together or want to say hi? I’m just a message away.
          </p>
          <div className="space-y-2">
            <motion.a
              href="https://github.com/UniquePG/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
              whileHover={{ x: 5 }}
            >
              <SiGithub size={18} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pavan-gupta31/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition"
              whileHover={{ x: 5 }}
            >
              <SiLinkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:guptapavan549@gmail.com"
              className="flex items-center gap-3 hover:text-purple-400 transition"
              whileHover={{ x: 5 }}
            >
              <MdEmail size={18} />
              Email
            </motion.a>
          </div>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'Skills', 'Experience', 'Projects'].map((item, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 - Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-400 transition">Web Development</li>
            <li className="hover:text-purple-400 transition">Full Stack Development</li>
            <li className="hover:text-purple-400 transition">UI/UX Design</li>
            <li className="hover:text-purple-400 transition">Consultation</li>
          </ul>
        </motion.div>

        {/* Column 4 - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Gwalior, India</li>
            <li><a href="tel:+911234567890" className="hover:text-purple-400 transition">+91 7746007731</a></li>
            <li><a href="mailto:guptapavan549@gmail.com" className="hover:text-purple-400 transition">guptapavan549@gmail.com</a></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        className="text-center mt-16 text-sm text-gray-500 border-t border-gray-700 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        © {currentYear} Pavan Gupta. Built with ❤️ using Next.js & Framer Motion
      </motion.div>
    </footer>
  );
};

export default Footer;
