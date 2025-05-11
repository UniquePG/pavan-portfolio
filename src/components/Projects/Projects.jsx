'use client'
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/src/utils/data';
import { SocialIcons, TechIcons } from '@/src/utils/icons';

const Projects = () => {
  const { GitHub, External } = SocialIcons;
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const containerRef = useRef(null);
  
  // Animation for scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  
  // Filter projects by category if needed
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardBackgroundVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const tagVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      }
    }
  };

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden" id="projects" ref={containerRef}>
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <motion.div 
        className="container max-w-7xl mx-auto px-4 relative z-10"
        style={{ opacity }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="inline-block px-3 py-1 mb-3 text-sm font-medium text-purple-400 bg-purple-900 bg-opacity-20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PORTFOLIO
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my most significant development work, demonstrating technical expertise and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Filter categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden group"
              variants={projectVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              layoutId={`project-card-${index}`}
            >
              {/* Card background with gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                variants={cardBackgroundVariants}
              />
              
              {/* Project thumbnail/image */}
              <div className="h-48 overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-30">{project.title.charAt(0)}</span>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                >
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.githubLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      <GitHub size={18} />
                    </motion.a>
                    
                    {project.demoLink && (
                      <motion.a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300"
                        variants={buttonVariants}
                        whileHover="hover"
                      >
                        <External size={18} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.des}
                </p>
                
                {/* Tech stack tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  variants={tagVariants}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300 group-hover:bg-purple-900/30 group-hover:text-purple-300 transition-colors duration-300"
                      variants={{
                        initial: { opacity: 0, x: -10 },
                        hover: { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: i * 0.05 } 
                        }
                      }}
                    >
                      {TechIcons[tag] && React.createElement(TechIcons[tag], {
                        className: 'mr-1',
                        size: 12
                      })}
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all projects button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="px-8 py-3 bg-gray-800 hover:bg-purple-600 text-white rounded-lg shadow-lg shadow-purple-500/20 transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;