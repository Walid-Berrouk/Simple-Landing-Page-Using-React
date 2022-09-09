import React from 'react'

// Assets
import W1 from '../assets/w1.jpg'
import DS1 from '../assets/ds1.jpg'
import HG from '../assets/hgghgh.jpg'
import GG from '../assets/gggg.jpg'

// Styling
import '../styles/Testimonials.css'

export default function Testimonials() {

    const feedbacks = [
        {
            id: 0,
            image: W1,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            author: "Nat Reynolds",
            position: "chief accoutant"
        },
        {
            id: 1,
            image: DS1,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            author: "Celia Almeda",
            position: "Secretary"
        },
        {
            id: 2,
            image: HG,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            author: "Bob Robert",
            position: "Sales Manager"
        },
        {
            id: 3,
            image: GG,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            author: "Mattie Smith",
            position: "Accoutant-audithor"
        }
    ]

    const feedbacksList = feedbacks.map(feedback => (
        <div key={feedback.id} className="user">
          <div className="img-container floating">
            <img src={feedback.image} alt="chief.png" />
          </div>
          <p className="quote">
            {feedback.content}
          </p>
          <h2>{feedback.author}</h2>
          <p>{feedback.position}</p>
        </div>
    ))

  return (
    <section className="feedback">
      <h2>TESTIMONIALS</h2>
      <h1>What Clients Say</h1>
      <h2>
        We place huge value on strong relationships and have seen the benifit
        they bring to our business. Customer feedback is vital in helping us to
        get it right.
      </h2>
      <div className="users">
        {feedbacksList}
      </div>
    </section>
  )
}
