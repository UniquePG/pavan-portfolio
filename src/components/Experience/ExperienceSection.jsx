'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaUserAstronaut } from 'react-icons/fa' // Cool heading icon

const experiences = [
    {
      emoji: '🎯',
      role: 'Full Stack Developer',
      company: 'Qollabb Edutech Pvt. Ltd',
      year: 'Oct,2023 → Dec,2024',
      desc: 'Led the full migration of a large-scale React.js site to Next.js 14 with SEO optimization and deployment on DigitalOcean. Built scalable features using React, Next.js, Node.js, and PostgreSQL. Integrated AWS for asset storage and actively contributed across the full development lifecycle with a focus on performance and UX.',
    },
    {
      emoji: '📚',
      role: 'Full Stack Developer',
      company: 'Hyperlink InfoSystem Pvt. Ltd',
      year: 'Dec,2024 → Present',
      desc: 'Contributing to production-ready web applications with a focus on clean architecture, scalable code structure, and best development practices. Primarily responsible for backend logic building, enhancing code quality, and ensuring robust full-stack solutions using modern technologies.',
    },
  {
    emoji: '🧑‍💻',
    role: 'Full Stack Magician',
    company: 'Freelance Universe',
    year: '2023 → Present',
    desc: 'Turning coffee into scalable full-stack web applications. A firm believer in "console.log" driven development, I focus on delivering clean, efficient, and production-ready solutions while adhering to best coding practices as a freelancer.',
  },
]

const Experience = () => {
  const { scrollYProgress } = useScroll()
  const yPlanet1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const yPlanet2 = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section id='experience' className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white py-28 px-6">
      {/* Background planets */}
      <motion.div
        style={{ y: yPlanet1 }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 bg-opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: yPlanet2 }}
        className="absolute top-60 -right-20 w-72 h-72 bg-indigo-500 bg-opacity-20 rounded-full blur-2xl"
      />

      {/* Glowing header with icon */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUserAstronaut className="text-4xl text-purple-400 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold gradient-text text-center">
            The Journey So Far
          </h2>
        </motion.div>

        <div className="space-y-24 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative px-6 md:px-12 py-10 border border-purple-600/30 bg-white/5 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-purple-800/20 transition-all ${
                index % 2 === 0 ? 'ml-0 md:ml-20' : 'mr-0 md:mr-20'
              }`}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Bouncing Emoji */}
              <motion.div
                className="text-5xl absolute -top-8 -left-8"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                {exp.emoji}
              </motion.div>

              <h3 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h3>
              <p className="text-gray-400 font-medium">{exp.company} — {exp.year}</p>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-24 text-gray-400 text-lg"
        >
          This story's still being written. Next up? Probably something awesome. 😎
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
