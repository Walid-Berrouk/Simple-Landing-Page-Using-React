import React from 'react'
import ContactForm from './ContactForm'
import GetStarted from './GetStarted'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Testimonials from './Testimonials'

export default function Layout() {
  return (
    <>
        <Navbar />
        <Hero />
        <GetStarted />
        <Services />
        <Testimonials />
        <ContactForm />
    </>
  )
}
