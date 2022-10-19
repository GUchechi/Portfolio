import React from 'react'
import './Card.css'

const Card = ({emoji, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card