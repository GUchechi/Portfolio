import React, { useContext } from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { motion } from "framer-motion";
import { themeContext } from '../../Context'

const Service = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

      // transition
    const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>Skills</span>
            <span  style={{color: darkMode ? 'white' : ''}}>Lorem ipsum dolor sit, amet consectetur
                <br/>
            nemo tempora incidunt delectus sunt nostrum possimus commodi tota</span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{
                background: '#ABF1FF94'
            }}></div>
        </div>

        {/* Right side */}
        <div className="cards">
            <motion.div
                 initial={{ left: "25rem" }}
                 whileInView={{ left: "14rem" }}
                 transition={transition}
                    
                 style={{left: '14rem', color: darkMode ? 'white' : ''}}>
                <Card 
                    emoji={HeartEmoji}
                    detail={'HTML, CSS, JavaScript,'}
                    style={{color: darkMode ? 'white' : ''}}
                />
            </motion.div>
            {/* Second card */}
            <motion.div 
             initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
                style={{top:'12rem', left: '-4rem'}}>
                    <Card 
                    emoji={Glasses}
                    detail={'React'}
                />
            </motion.div>
            {/* Third Card */}
            <motion.div 
                 initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                    style={{top:'19rem' ,left: '12rem'}}>
                <Card 
                    emoji={Humble}
                    detail={'Material Ui, Tailwind Css, Bootstrap'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Service