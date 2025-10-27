import React from 'react'
import './Order.css'
import Navbar from './Navbar.jsx'
function Order() {
  return (
    <div className='order-container'>
        <Navbar />
        <h1 className='order-heading'>Place Your Order</h1>
        <p className='order-description'>Choose from a variety of delicious meals and have them delivered to your doorstep.</p>
        <button className='order-button'>Order Now</button>
      
    </div>
  )
}

export default Order
