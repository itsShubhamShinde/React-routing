import React from 'react'
import './Project.css'
import image2 from '../Image/Project.jpg'
import Footer from './MainComponent/Footer.jsx'

const Project = () => {
  return (
    <div className='ProjectDiv'> 
    <div className='imageDiv'><img src={image2} alt="img"></img></div>

    <Footer/>
    </div>
  )
}

export default Project