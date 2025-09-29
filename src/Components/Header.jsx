import React from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='bg-[#4F46E5] flex items-center px-10 h-20 justify-between'>
            <Link to="/">
                <img src={Logo} alt="Logo" className='pl-10'/>
            </Link>

            <div className='text-white space-x-4 text-md'>
                <Link className="uppercase" to="/services">Services </Link>
                <Link className="uppercase" to="/aboutus">About Us</Link>
                <Link className="uppercase" to="/contactus">Contact Us</Link>
                <Link className="uppercase" to="/careers">Careers</Link>
            </div>
        </div>
    )
}

export default Header
