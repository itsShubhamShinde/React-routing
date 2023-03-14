import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='headerOuterBox' style={{position:'sticky', top:"0", left:"0"}}>
      <div className='headerLeftDiv'>
        <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
      </div>

      <div className='headerMiddleDiv'>
        <ul>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/About"> 
          <li>About</li>
          </Link>
          <Link to="/Project">
          <li>Project</li>
             </Link>
          <Link to="/Services"> 
          <li>Services</li>
          </Link>
          <Link to='/Blog'> 
          <li>Blog</li>
          </Link>
          <li>Contact</li>
        </ul>
      </div>

      <div className='headerRightDiv'>
        <button>Enquire Now</button>

      </div>
    </div>
  )
}

export default Header;
