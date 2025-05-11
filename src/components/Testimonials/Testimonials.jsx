import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'
import { motion } from 'framer-motion'
import { containerVariants, titleVariants, tagVariants } from '@/src/utils/animation'

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      profession: "Senior Developer at Tech Co",
      comment: "Outstanding collaboration on our web application project. Delivered high-quality code with great attention to performance and user experience."
    },
    {
      name: "Sarah Smith",
      profession: "Project Manager",
      comment: "Excellent technical skills and communication. Always went above and beyond to ensure project success and client satisfaction."
    },
    {
      name: "Mike Johnson",
      profession: "CTO at StartupX",
      comment: "Implemented complex features with clean, maintainable code. Great problem-solving skills and technical expertise."
    },
    {
      name: "Emily Brown",
      profession: "Lead Designer",
      comment: "A pleasure to work with. Seamlessly integrated design requirements into functional, responsive components."
    },
    {
      name: "David Wilson",
      profession: "Tech Lead",
      comment: "Exceptional understanding of modern web technologies. Delivered robust solutions that exceeded our expectations."
    }
  ];

  return (
    <div className="t-wrapper">
      <div className="container">
        <motion.div 
          className="t-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants(0.3)}
        >
          <div className="t-head">
            <motion.span 
              variants={tagVariants}
              className="tag gradient-text">Testimonials</motion.span>
            <motion.span 
              variants={titleVariants}
              className="title">What Others Say</motion.span>
            <motion.span 
              variants={tagVariants}
              className="text">Client and colleague testimonials about my work and collaboration</motion.span>
          </div>

          <SlickSlider achievements={testimonials}/>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials