import React from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-[#4F46E5] flex items-center p-4 h-20 justify-between'>
      <img src={Logo} alt="Logo" className='p-9' />

      <div>
        <Link to="/services">Services </Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </div>
  )
}

export default Header
