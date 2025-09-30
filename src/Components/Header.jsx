import React, { useState, useEffect } from 'react'
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, [isOpen]);


    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === 'Escape' && closeMenu();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);


    return (
        <div className='bg-[#4F46E5] flex items-center px-6 md:px-10 h-20 justify-between relative'>
            <Link to="/" onClick={closeMenu}>
                <img src={Logo} alt="Logo" className='md:pl-10 h-10' />
            </Link>


            <button
                className="md:hidden text-white z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>


            <div className="hidden md:flex text-white text-md gap-6">
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


            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden">

                    <button
                        onClick={closeMenu}
                        aria-label="Close menu"
                        className="absolute inset-0 bg-black/50"
                    />


                    <nav
                        role="dialog"
                        aria-modal="true"
                        className="absolute right-0 top-0 h-dvh w-full bg-white text-black shadow-xl
                                 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
                                translate-x-0 animate-[slideIn_.25s_ease-out]"
                    >

                        <div className="flex items-center justify-between h-20 px-5 bg-[#4F46E5] text-white">
                            <img src={Logo} alt="at digital" className="h-10 w-auto" />
                            <button onClick={closeMenu} className="p-2" aria-label="Close">
                                <X size={26} />
                            </button>
                        </div>


                        <div className="flex flex-col text-black text-lg p-6 space-y-4">
                            <Link className="uppercase py-3" to="/" onClick={closeMenu}>Home</Link>
                            <Link className="uppercase py-3" to="/services" onClick={closeMenu}>Services</Link>
                            <Link className="uppercase py-3" to="/aboutus" onClick={closeMenu}>About Us</Link>
                            <Link className="uppercase py-3" to="/contactus" onClick={closeMenu}>Contact Us</Link>
                            <Link className="uppercase py-3" to="/careers" onClick={closeMenu}>Careers</Link>
                        </div>
                    </nav>
                </div>
            )}

        </div>
    )
}

export default Header