import React from 'react'

// Assets
import Aside2 from '../assets/aside2.png'
import { BsArrowBarUp } from 'react-icons/bs';

// Styles
import '../styles/Hero.css'

export default function GetStarted() {
  return (
    <section className="section heroSection2">
      <div className="img-with-before">
        <img className="img-hero" src={Aside2} alt="img.png" />
      </div>
      <div className="section-content">
        <h1>Get started with the simpliest static page.</h1>
        <p>Image from Freepik</p>
        <div className="btn-container">
          <button className="green-btn">
            <BsArrowBarUp size={"2rem"} style={{marginRight: 15}}/>
            <span className="btn-txt">Upload for free</span>
          </button>
        </div>
      </div>
    </section>
  )
}
