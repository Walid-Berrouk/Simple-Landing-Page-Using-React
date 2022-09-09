import React, { useState } from 'react'

// Assets
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiOutlineMenu } from 'react-icons/ai';

import logo from '../assets/logo.png'

// Styles
import '../styles/NavBar.css'

export default function Navbar() {

    const [collapse, setCollapse] = useState(false)


  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="logo.png" className="logo" />
        
        
        <ul className="socialMedia-list">
          <li>
            <a href="#"><AiFillFacebook size={"2rem"} /></a>
          </li>
          <li>
            <a href="#"><AiFillTwitterCircle size={"2rem"}/></a>
          </li>
          <li>
            <a href="#"><AiFillInstagram size={"2rem"}/></a>
          </li>
        </ul>
        <button className='btn-no-styiling' onClick={() => setCollapse(!collapse)}>
          <AiOutlineMenu size={"2rem"} style={{marginLeft: 30}}/>
        </button>
      </div>
      {collapse ?
        <div className="bg-white text-center border-bottom-2 p-0">
            <a href="#" className='display-block p-20'>About</a>
            <a href="#" className='display-block p-20'>Services</a>
            <a href="#" className='display-block p-20'>Support</a>
            <a href="#" className='display-block p-20'>Contact</a>
        </div>
      :
        <></>
      }
    </nav>
  )
}
