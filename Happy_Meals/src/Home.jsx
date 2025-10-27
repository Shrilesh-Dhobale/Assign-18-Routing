import React from 'react'
import './Home.css'
import Navbar from './Navbar.jsx'
function Home() {
  return (
    <div className='home-container'>
        <Navbar />
      <h1 className='main-heading'>Welcome to Happy Meals</h1>
      <p className='subtitle'>Your one-stop solution for delicious meal options.</p>
    </div>
  )
}

export default Home
