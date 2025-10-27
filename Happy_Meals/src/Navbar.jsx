import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      
      <nav className='navbar-links'>
        <a href='/' className='navbar-link'>Home</a>
        <a href='/about' className='navbar-link'>About</a>
        <a href='/order' className='navbar-link'>Order</a>
      </nav>
    </div>
  )
}

export default Navbar
