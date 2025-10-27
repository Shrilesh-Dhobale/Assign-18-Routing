import React from 'react'
import './About.css'
import Navbar from './Navbar.jsx'
function About() {
  return (
    
    <div className='about-container'>
      <Navbar />
      <h1 className='about-heading'>About Us</h1>
      <p className='about-description'>We are dedicated to providing the best meal options for you.</p>
    </div>
  )
}

export default About
