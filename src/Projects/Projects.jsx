import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'

const Projects = () => {
  return (
    <div className="project">
        {/* Heading */}

        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}

        <Swiper>
            <SwiperSlide>
                
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects