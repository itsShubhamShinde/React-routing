import React from 'react'
import './Blog.css'
import image4 from '../Image/Blog.webp'

const Blog = () => {
  return (
    <div className='BlogDiv'>
      <div className='blog'><h1>Blog.</h1></div>
      <img src={image4} alt='img'></img>
    </div>
  )
}

export default Blog