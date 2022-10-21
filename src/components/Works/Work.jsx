import React, { useContext } from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { motion } from "framer-motion";



const Work = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="work" id='Work'>
         {/* left side */}
         <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>Works and </span>
            <span>Personal Projects</span>
            <span style={{color: darkMode ? 'white' : ''}}>Lorem ipsum dolor sit, amet consectetur
                <br/>
            nemo tempora incidunt delectus sunt nostrum possimus commodi tota</span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{
                background: '#ABF1FF94'
            }}></div>
        </div>
        {/* Right section */}
        <div className="w-right">
            <motion.div
                initial={{rotate: 45}}
                whileInView = {{rotate :1000}}
                viewport={{margin:'-40px'}}
                transition={{duration: 13.5, type:'spring'}}
                 className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work