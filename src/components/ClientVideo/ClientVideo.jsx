'use client'

import React, { useRef } from 'react';
import './ClientVideo.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const BrandingVideo = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div className='bv-container'>
        <div className='container'>
            <motion.div 
          className="cv-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants(0.3)}
        >
                {/* heading */}
                <div className="cv-head">
                    <motion.span 
                    variants={tagVariants}
                    className="tag gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >Featured Work</motion.span>
                    <motion.span 
                    variants={titleVariants}
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >Watch Our Latest Projects</motion.span>
                </div>

                {/* video */}
                <motion.div 
            className="cv-video dark-card"
            variants={containerVariants(0.5)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
                    <motion.div 
                    initial={{y: "18rem"}}
                    animate={{y: "0rem"}}
                    transition={{
                        type: "spring",
                        duration: 2,
                        stiffness: 30
                    }}
                    >
                        <motion.video
                        style={{scale}} 
                        ref={ref}
                        className='bv-video dark-video' loop muted autoPlay controls="">
                            <source src='/video.mp4' type='video/mp4' />
                        </motion.video>
                    </motion.div>
                    <div className="video-overlay">
                      <motion.div 
                        className="play-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="play-icon">▶</span>
                      </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default BrandingVideo