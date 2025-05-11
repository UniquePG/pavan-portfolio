import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeInVariants } from '@/src/utils/animation'
import './Testimonials.css'

const SlickSlider = ({ achievements }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='slick-container dark-theme'>
            <Slider {...settings}>
                {achievements?.map((achievement, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                    >
                        <div className='comment glow-effect'>
                            <div className='c-content'>
                                <span className="testimonial-text">{achievement.comment}</span>
                                <div className='c-info'>
                                    <div className='c-avatar dark-gradient'>
                                        {achievement.name[0]}
                                    </div>
                                    <div className='c-person'>
                                        <span className="name">{achievement.name}</span>
                                        <span className="profession">{achievement.profession}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    )
}

export default SlickSlider