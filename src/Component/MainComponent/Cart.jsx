import React from 'react'
import './Cart.css'

const Cart = (props) => {
  return (
    <div className='cartOuterDiv'>
      <div className='ImageDiv'><img src={props.bg} alt="img"/></div>

      <div className='HeadingDiv'>
        <h1>{props.Heading}</h1>
      </div>
    </div>
  )
}

export default Cart;
