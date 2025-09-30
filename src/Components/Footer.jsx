import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-[#4F46E5] text-white px-6 md:px-12 lg:px-20 py-10 md:py-12'>
            <div className='max-w-7xl mx-auto'>

                <div className='lg:flex lg:justify-between lg:items-start mb-8 lg:mb-12'>

                    <div className='mb-8 md:max-w-sm lg:max-w-xs lg:mb-0'>
                        <img src={Logo} alt="AT Digital Logo" className='h-8 md:h-10 mb-4' />
                        <p className='text-sm md:text-base leading-relaxed'>
                            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                        </p>
                    </div>


                    <div className='md:flex md:gap-12 lg:gap-20'>

                        <div className='mb-8 md:mb-0'>
                            <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>Our Technologies</h3>
                            <ul className='space-y-2 text-sm md:text-base'>
                                <li>ReactJS</li>
                                <li>Gatsby</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>


                        <div>
                            <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>Our Services</h3>
                            <ul className='space-y-2 text-sm md:text-base'>
                                <li><Link className="hover:underline" to="/services/social">Social Media Marketing</Link></li>
                                <li><Link className="hover:underline" to="/services/web-mobile">Web &amp; Mobile App <br /> Development</Link></li>
                                <li><Link className="hover:underline" to="/services/data-analytics">Data &amp; Analytics</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <hr className="mb-2 mt-10 border-[#FFFFFF] border-t-1 lg:w-1/2 w-full" />
                </div>

                <div className='pt-4 md:pt-6 flex flex-row justify-center items-center gap-3 sm:gap-4 text-sm'>
                    <Link to="/privacy-policy" className='hover:underline'>
                        Privacy Policy
                    </Link>
                    <span className=' sm:inline'>|</span>
                    <Link to="/terms-conditions" className='hover:underline'>
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer