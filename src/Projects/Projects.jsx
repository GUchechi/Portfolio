import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import img6 from '../img/img6.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img7 from '../img/img7.png'
import Musicapp from '../img/musicapp.png'                                                                                    
import Project4 from '../img/Project4.png'
import Project5  from '../img/Project5.png'
import Project6 from '../img/Project6.png'
import 'swiper/css'

const Projects = () => {
  return (
    <div className="project">
        {/* Heading */}

        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='project-slider'
        >
            <SwiperSlide>
                <img src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project6} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects