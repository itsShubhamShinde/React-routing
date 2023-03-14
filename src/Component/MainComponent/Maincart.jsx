import React from 'react'
import Cart from './Cart'
import './Maincart.css'
import bg1 from '../../Image/img1.jpg'
import bg2 from '../../Image/img2.jpg'
import bg3 from '../../Image/img3.jpg'
import bg4 from '../../Image/img4.jpg'
import bg5 from '../../Image/img5.jpg'
import bg6 from '../../Image/img6.jpg'
import bg7 from '../../Image/img7.jpg'
import bg8 from '../../Image/img8.jpg'
import bg9 from '../../Image/img9.jpg'
import bg10 from '../../Image/img10.png'
import bg11 from '../../Image/img11.jpg'
import bg12 from '../../Image/img12.jpg'


const Maincart = () => {
  return (
    <div className='Maincart'>
      <div className='Maincartheading'>
      <h2>Projects</h2>
      </div>
      <div className='MaincartDiv'>
       <Cart bg={bg1} Heading={"DWTC"}/> 
       <Cart bg={bg2} Heading={"Dxb Airport Concorde D"}/> 
       <Cart bg={bg3} Heading={"Maui-Restaurant"}/> 
       <Cart bg={bg4} Heading={"Nail-paint bar"}/> 
       <Cart bg={bg5} Heading={"Office in Business Bay"}/> 
       <Cart bg={bg6} Heading={"Atlantis, The Palm"}/> 
       <Cart bg={bg7} Heading={"Office"}/> 
       <Cart bg={bg8} Heading={"Residential Tower"}/> 
       <Cart bg={bg9} Heading={"Sofitel"}/> 
       <Cart bg={bg10} Heading={"The Gym Dubai"}/> 
       <Cart bg={bg11} Heading={"Villa"}/> 
       <Cart bg={bg12} Heading={"Warehouse"}/> 

      </div>
    </div>
  )
}

export default Maincart;