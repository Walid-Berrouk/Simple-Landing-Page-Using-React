import React from 'react'

import { TiLockClosedOutline, TiGlobeOutline } from 'react-icons/ti'
import { BsCodeSlash } from 'react-icons/bs'
import { IoFileTrayStackedSharp } from 'react-icons/io5'

// Styles
import '../styles/Services.css'

export default function Services() {

    const services = [
        {
            id: 0,
            icon: <TiLockClosedOutline className='ion-icon'/>,
            title: "SSL certifecate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: '#'
        },
        {
            id: 1,
            icon: <TiGlobeOutline className='ion-icon'/>,
            title: "Personal Domain",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: '#'
        },
        {
            id: 2,
            icon: <BsCodeSlash className='ion-icon'/>,
            title: "Code Editor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: '#'
        },
        {
            id: 3,
            icon: <IoFileTrayStackedSharp className='ion-icon' />,
            title: "Media Storage",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: '#'
        }
    ]

    const servicesList = services.map(service => (
        <div key={service.id} className="offer">
          {service.icon}
          <h1>{service.title}</h1>
          <p>
            {service.description}
          </p>
          <a href={service.link}><h2>MORE!</h2></a>
        </div>
    ))

  return (
    <div className="section services">
      <div className="section-content">
        <h1>Hosting solution with benifits.</h1>
        <p>
          Turn your ideas into reality with static . <br />
          With a lot of powerfull features , <br />
          we guarantee simplicity and clarity.
        </p>
        <div className="btn-container">
          <button className="green-btn">
            <span className="btn-txt">Read more</span>
          </button>
        </div>
      </div>
      <div className="offers">
        {servicesList}
      </div>
    </div>
  )
}
