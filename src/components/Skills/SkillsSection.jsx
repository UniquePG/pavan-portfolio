'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { features } from '@/src/utils/data';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Group skills by category (you can adjust these categories based on your features data)
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];
  
  // Filter features based on active category
  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden" id="skills">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          <motion.div 
            className="inline-block px-3 py-1 mb-3 text-sm font-medium text-purple-400 bg-purple-900 bg-opacity-20 rounded-full"
            variants={itemVariants}
          >
            EXPERTISE
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My expertise spans modern web technologies and development practices, allowing me to deliver robust and scalable solutions.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center text-center group"
              variants={skillCardVariants}
              whileHover="hover"
              custom={index}
              layout
            >
              <motion.div 
                className="h-16 w-16 mb-4 relative flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                {/* <Image 
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="relative z-10"
                /> */}

                <feature.Icon width={60}
                  height={60}
                  className="relative z-10" />
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {feature.description && (
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              )}
              
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills meter section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-10 text-center"
            variants={headingVariants}
          >
            Proficiency Levels
          </motion.h3>
          
          <div className="grid gap-y-6 max-w-3xl mx-auto">
            {[
              { skill: "React/Next.js", level: 95 },
              { skill: "Node.js/Express", level: 90 },
              { skill: "JavaScript/TypeScript", level: 92 },
              { skill: "UI/UX Design", level: 85 },
              { skill: "Database Management", level: 88 },
            ].map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-base font-medium text-gray-300">{item.skill}</span>
                  <span className="text-sm font-medium text-purple-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;