'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { hitFeatures } from '@/src/utils/data';
import Image from 'next/image';
import {
  fadeInUp,
  staggerContainer1,
  fadeInFromTop,
  slideInFromBottom,
} from '@/src/utils/animation';

const TechnicalExperties = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0f0f0f] via-[#111827] to-[#0f0f0f] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInFromTop}
            className="uppercase text-sm tracking-widest text-pink-500 font-semibold"
          >
            Technical Expertise
          </motion.span>

          <motion.h2
            variants={fadeInFromTop}
            className="text-4xl md:text-5xl font-bold mt-4 leading-tight gradient-text"
          >
            Full Stack Development Journey
          </motion.h2>

          <motion.p
            variants={fadeInFromTop}
            className="text-gray-300 mt-4 text-lg"
          >
            Passionate about crafting modern, scalable, and high-performing solutions with cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {hitFeatures.map((feature, i) => (
            <motion.div
              variants={fadeInUp}
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-[#1f2937] rounded-2xl p-6 shadow-lg hover:shadow-pink-500/20 transition duration-300 ease-in-out group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-pink-500/10 p-2 rounded-xl">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-pink-500 font-bold text-lg opacity-30 group-hover:opacity-60 transition duration-300">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold gradient-text mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {feature.des}
              </p>

              <motion.div
                variants={slideInFromBottom}
                className="flex flex-wrap gap-2 mt-4"
              >
                {feature.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full border border-pink-500/30 text-pink-300 hover:bg-pink-500/10 transition"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExperties;
