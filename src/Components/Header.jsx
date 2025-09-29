import React from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='bg-[#4F46E5]  flex items-center px-10 h-20 justify-between'>
            <Link to="/">
                <img src={Logo} alt="Logo" className='pl-10 h-10' />
            </Link>

            <div className="text-white text-md flex gap-6">
                <Link className="uppercase relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                    to="/services">
                    Services
                </Link>

                <Link className="uppercase relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                    to="/aboutus">
                    About Us
                </Link>

                <Link className="uppercase relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                    to="/contactus">
                    Contact Us
                </Link>

                <Link className="uppercase relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                    to="/careers">
                    Careers
                </Link>
            </div>

        </div>
    )
}

export default Header
