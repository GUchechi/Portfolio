import React from 'react'
import './Service.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const Service = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Skills</span>
            <span>Lorem ipsum dolor sit, amet consectetur
                <br/>
            nemo tempora incidunt delectus sunt nostrum possimus commodi tota</span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{
                background: '#ABF1FF94'
            }}></div>
        </div>

        {/* Right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card 
                    emoji={HeartEmoji}
                    detail={'HTML, CSS, JavaScript'}
                />
            </div>
            {/* Second card */}
            <div style={{top:'12rem', left: '-4rem'}}>
                <Card 
                    emoji={Glasses}
                    detail={'React'}
                />
            </div>
            {/* Third Card */}
            <div style={{top:'19rem' ,left: '12rem'}}>
                <Card 
                    emoji={Humble}
                    detail={'Material Ui, Tailwind Css, Bootstrap'}
                />
            </div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Service